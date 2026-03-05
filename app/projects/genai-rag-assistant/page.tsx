import Image from "next/image";
import Link from "next/link";

export default function GenaiRagAssistantPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        <header className="mt-6">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">GenAI Final Project</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text">
            Persona-Aware RAG Assistant
          </h1>
          <p className="mt-5 text-gray-300 text-lg leading-relaxed max-w-3xl">
            Final project for UC Berkeley DATASCI 267. I designed and evaluated a retrieval-augmented
            generation system that answers the same query differently for engineering and marketing users,
            while staying grounded in source context.
          </p>
        </header>

        <section className="mt-10 rounded-2xl border border-gray-800 bg-gray-950/70 p-4 md:p-6">
          <Image
            src="/projects/genai-rag-architecture.svg"
            alt="Architecture diagram for the persona-aware RAG pipeline"
            width={1200}
            height={720}
            className="w-full h-auto rounded-lg border border-gray-800"
            priority
          />
        </section>

        <section className="mt-10 grid md:grid-cols-3 gap-4">
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-5">
            <p className="text-sm text-cyan-300">Problem</p>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Internal teams needed a Q&A assistant that could support technical research and non-technical
              marketing workflows from the same knowledge base.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-5">
            <p className="text-sm text-cyan-300">Approach</p>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Built a LangChain RAG pipeline with Qdrant retrieval, Cohere reranking, and persona-specific
              prompts to control depth, tone, and answer length.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-5">
            <p className="text-sm text-cyan-300">Outcome</p>
            <p className="mt-2 text-gray-300 leading-relaxed">
              Improved quality over baseline runs with strong groundedness/relevance scores and clearer
              role-specific responses across validation examples.
            </p>
          </article>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Stack and Configuration</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-5">
              <h3 className="font-medium text-cyan-300">Retrieval Layer</h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>Embedding model: multi-qa-mpnet-base-dot-v1</li>
                <li>Chunking: paragraph splits (no overlap)</li>
                <li>Qdrant MMR: k=20, fetch_k=30, lambda=0.5</li>
                <li>Reranking: Cohere reranker (top_n=12)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-5">
              <h3 className="font-medium text-cyan-300">Generation Layer</h3>
              <ul className="mt-3 space-y-2 text-gray-300 text-sm leading-relaxed">
                <li>LLM: mistralai/Mistral-7B-Instruct-v0.2</li>
                <li>Temperature: 0.4</li>
                <li>Top-p: 0.95</li>
                <li>Max new tokens: 500</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Evaluation and Key Learnings</h2>
          <div className="mt-4 rounded-xl border border-gray-800 bg-gray-900/40 p-5 text-gray-300 leading-relaxed">
            <p>
              I evaluated outputs with persona-aware criteria: groundedness and relevance for both personas,
              plus accuracy for engineering responses and coherence for marketing responses. I also compared
              generated answers against gold responses with semantic similarity scoring.
            </p>
            <p className="mt-4">
              The strongest setup combined MMR retrieval, reranking, and separate prompts. One practical
              takeaway was that similarity metrics can overrate answers when tone or technical depth diverges
              from user expectations, even when semantic content overlaps.
            </p>
          </div>
        </section>

        <section className="mt-12 rounded-xl border border-gray-800 bg-gray-900/40 p-5">
          <h2 className="text-2xl font-semibold">Artifacts</h2>
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/catweiss/genAI-final-report"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              GitHub Repository
            </a>
            <a
              href="https://github.com/catweiss/genAI-final-report/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Project README
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
