/**
 * Thin Anthropic Messages API client (no SDK dependency for the MVP scaffold).
 * The turn engine asks for a single JSON object matching VerdaxTurnResponse.
 */
const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";

export interface ModelCallArgs {
  system: string;
  context: string;
  input: string;
  /** Forwarded so a repair retry can include the validation error. */
  repairNote?: string;
}

export async function callVerdaxModel({ system, context, input, repairNote }: ModelCallArgs): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = process.env.VERDAX_MODEL ?? "claude-opus-4-8";
  const maxTokens = Number(process.env.VERDAX_MAX_OUTPUT_TOKENS ?? 4096);
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY is not set");

  const userContent = [
    context,
    `\nPLAYER INPUT:\n${input}`,
    repairNote ? `\n${repairNote}` : "",
    `\nReturn ONLY a single JSON object matching the VerdaxTurnResponse schema. No prose, no markdown fences.`,
  ].join("\n");

  const res = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: maxTokens,
      system,
      messages: [{ role: "user", content: userContent }],
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`VERDAX model call failed (${res.status}): ${body.slice(0, 500)}`);
  }

  const data = (await res.json()) as { content?: Array<{ type: string; text?: string }> };
  const text = data.content?.filter((b) => b.type === "text").map((b) => b.text).join("") ?? "";
  return extractJson(text);
}

/** Strip markdown fences / surrounding prose and return the JSON substring. */
export function extractJson(text: string): string {
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence) return fence[1].trim();
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) return text.slice(start, end + 1);
  return text.trim();
}
