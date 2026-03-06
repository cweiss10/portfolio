import Image from "next/image";
import Link from "next/link";

export default function MlopsPytorchApiPage() {
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
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">MLOps Coursework Project</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text">
            End-to-End PyTorch Sentiment API
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Built for MIDS W255, this project packages a DistilBERT sentiment model behind a production-style
            FastAPI service with Redis caching, containerized deployment, Kubernetes orchestration, and
            performance monitoring under sustained load.
          </p>
        </header>

        <section className="rounded-2xl border border-gray-800 bg-gray-950/70 p-5 md:p-7">
          <Image
            src="/projects/mlops-pytorch-api/overview.png"
            alt="MLOps sentiment API architecture overview"
            width={1600}
            height={900}
            className="w-full h-auto rounded-lg border border-gray-800"
            priority
          />
        </section>

        <section className="grid md:grid-cols-3 gap-5 md:gap-6">
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Problem</p>
            <p className="text-gray-300 leading-relaxed">
              Move beyond notebook-level ML by deploying a reliable API that can handle real traffic,
              maintain low latency, and scale correctly in Kubernetes.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Approach</p>
            <p className="text-gray-300 leading-relaxed">
              Implemented FastAPI endpoints with typed request/response schemas, baked model artifacts into
              the container image, added Redis caching, and deployed to AKS with service routing.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Outcome</p>
            <p className="text-gray-300 leading-relaxed">
              Delivered a full MLOps lifecycle project with automated tests, containerized inference, and
              load-test observability using k6 and Grafana.
            </p>
          </article>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">System Components</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="font-medium text-cyan-300">Inference Service</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>FastAPI app for batch sentiment prediction requests.</li>
                <li>PyTorch + Hugging Face DistilBERT inference pipeline.</li>
                <li>Pydantic models for strict input/output contracts.</li>
                <li>Unit tests with pytest for endpoint and schema behavior.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="font-medium text-cyan-300">Platform Layer</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>Docker image with model artifact included at build time.</li>
                <li>Redis caching to improve throughput and repeated-request latency.</li>
                <li>Kubernetes deployment on Azure AKS with service routing.</li>
                <li>k6 load tests and Grafana dashboards for performance analysis.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Performance Artifacts</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4">
              <Image
                src="/projects/mlops-pytorch-api/load_test_1.png"
                alt="k6 and Grafana load test results artifact 1"
                width={1200}
                height={700}
                className="w-full h-auto rounded-lg border border-gray-800"
              />
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-4">
              <Image
                src="/projects/mlops-pytorch-api/load_test_2.png"
                alt="k6 and Grafana load test results artifact 2"
                width={1200}
                height={700}
                className="w-full h-auto rounded-lg border border-gray-800"
              />
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-5">
          <h2 className="text-2xl font-semibold">Artifacts</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/UCB-W255/project-pytorch-fastapi-cweiss10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
