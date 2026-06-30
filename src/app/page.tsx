export default function Home() {
  return (
    <main style={{ maxWidth: 680, margin: "4rem auto", padding: "0 1.25rem", fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
      <h1>Realm of Nexus — VERDAX</h1>
      <p><em>The Sap Beneath the Ash</em> — MVP vertical slice (Verdance).</p>
      <p>
        This is the API scaffold. The heart of the game is the turn engine at{" "}
        <code>POST /api/verdax/turn</code>. See <code>docs/</code> for the full
        design bible and <code>docs/05-systems/</code> for the schema and turn engine.
      </p>
      <ol>
        <li>Set <code>DATABASE_URL</code> and <code>ANTHROPIC_API_KEY</code> in <code>.env</code> (see <code>.env.example</code>).</li>
        <li><code>npm install &amp;&amp; npm run prisma:generate &amp;&amp; npm run prisma:migrate</code></li>
        <li><code>npm run db:seed</code> to load the Verdance MVP world.</li>
        <li><code>npm run dev</code>, then POST a player action to <code>/api/verdax/turn</code>.</li>
      </ol>
    </main>
  );
}
