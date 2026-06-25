/**
 * Realm of Nexus / VERDAX — Model client interface.
 *
 * The turn orchestrator (`runTurn`) depends only on this interface, never on a
 * concrete provider. That keeps the whole loop testable offline via
 * `FakeVerdaxClient`; a real Anthropic-backed adapter implements the same
 * `generateTurn` contract and is the only piece that reaches an external service.
 */
import type { VerdaxPromptContext } from "../schemas/verdax.js";

export interface GenerateTurnArgs {
  /** The VERDAX system prompt (see `buildVerdaxSystemPrompt`). */
  system: string;
  /** The scene-relevant context slice (Chunk 3 §31). */
  context: VerdaxPromptContext;
  /** The player's input for this turn. */
  player_input: string;
  /**
   * Present when re-asking the model to fix output that failed validation.
   * Implementations should feed `issues` back so the model can repair its JSON.
   */
  repair?: { previous: unknown; issues: string[] };
}

export interface VerdaxClient {
  /** Returns the model's raw turn output (unknown — it is validated by the caller). */
  generateTurn(args: GenerateTurnArgs): Promise<unknown>;
}

/**
 * Deterministic test client. Construct with:
 *   - a single value → returned every call,
 *   - an array → consumed one per call (useful to test the repair loop:
 *     `[invalidResponse, validResponse]`),
 *   - a function → called with the args each time.
 */
export class FakeVerdaxClient implements VerdaxClient {
  private readonly fn: (args: GenerateTurnArgs, call: number) => unknown;
  private calls = 0;
  public readonly received: GenerateTurnArgs[] = [];

  constructor(
    program:
      | unknown
      | unknown[]
      | ((args: GenerateTurnArgs, call: number) => unknown)
  ) {
    if (typeof program === "function") {
      this.fn = program as (args: GenerateTurnArgs, call: number) => unknown;
    } else if (Array.isArray(program)) {
      const queue = program;
      this.fn = (_args, call) => queue[Math.min(call, queue.length - 1)];
    } else {
      this.fn = () => program;
    }
  }

  async generateTurn(args: GenerateTurnArgs): Promise<unknown> {
    this.received.push(args);
    return this.fn(args, this.calls++);
  }

  /** Number of times generateTurn was invoked. */
  get callCount(): number {
    return this.calls;
  }
}
