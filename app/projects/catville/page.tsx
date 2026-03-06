import Image from "next/image";
import Link from "next/link";

export default function CatvillePage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-20 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        <header className="space-y-5">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Agent Simulation Project</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text">
            Catville
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Catville is an autonomous social simulation inspired by the Generative Agents research from
            Stanford and Google. Agents interact each day using a local Mistral model, producing an emergent
            storyline and an automated daily newsletter summary.
          </p>
        </header>

        <section className="rounded-2xl border border-gray-800 bg-gray-950/70 p-5 md:p-7">
          <Image
            src="/projects/catville-flow.svg"
            alt="Catville system flow diagram"
            width={1200}
            height={720}
            className="w-full h-auto rounded-lg border border-gray-800"
            priority
          />
        </section>

        <section className="grid md:grid-cols-3 gap-5 md:gap-6">
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Problem</p>
            <p className="text-gray-300 leading-relaxed">
              Most agent demos are static or one-off runs. I wanted a persistent simulation where agents evolve
              over time and produce observable daily outcomes.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Approach</p>
            <p className="text-gray-300 leading-relaxed">
              Built a Python-based multi-agent loop with local LLM inference through Ollama, plus state,
              logs, and summary generation pipelines.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Outcome</p>
            <p className="text-gray-300 leading-relaxed">
              The simulation runs day by day, archives outputs to Markdown, and publishes concise narrative
              updates through Buttondown.
            </p>
          </article>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">System Design</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="font-medium text-cyan-300">Simulation Core</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>Agent loop for daily behavior and interactions</li>
                <li>Persistent state management with JSON snapshots</li>
                <li>Per-day log files for traceability</li>
                <li>Modular scripts for simulation and summarization</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="font-medium text-cyan-300">LLM and Delivery</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>Local inference via Ollama</li>
                <li>Open-source Mistral model for agent reasoning</li>
                <li>Daily summary generation in Markdown</li>
                <li>Newsletter publishing through Buttondown API</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">How It Runs</h2>
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-gray-300 leading-relaxed space-y-3">
            <p>1. Pull and start Mistral in Ollama.</p>
            <p>2. Install dependencies with Poetry.</p>
            <p>3. Run the simulation loop to generate daily interactions and summaries.</p>
            <p>4. Publish the final daily narrative via Buttondown.</p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-5">
          <h2 className="text-2xl font-semibold">Artifacts</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/cweiss10/catville"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="https://buttondown.com/catherineweiss95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Daily Newsletter
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
