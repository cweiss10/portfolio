import Image from "next/image";
import Link from "next/link";

export default function KubebenchPage() {
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
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">MIDS Capstone Thesis</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text">
            KubeBench
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            KubeBench is a Kubernetes-native benchmark and serving platform for code-generating LLMs.
            The project combines domain fine-tuning, runtime validation against real clusters, and cloud
            deployment infrastructure to evaluate and serve practical DevOps assistants.
          </p>
        </header>

        <section className="rounded-2xl border border-gray-800 bg-gray-950/70 p-5 md:p-7">
          <Image
            src="/projects/kubebench-architecture.svg"
            alt="KubeBench architecture overview"
            width={1200}
            height={760}
            className="w-full h-auto rounded-lg border border-gray-800"
            priority
          />
        </section>

        <section className="grid md:grid-cols-3 gap-5 md:gap-6">
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Problem</p>
            <p className="text-gray-300 leading-relaxed">
              General-purpose code models often perform poorly on Kubernetes workflows, and string-based
              metrics fail to capture whether generated YAML actually works in real clusters.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Approach</p>
            <p className="text-gray-300 leading-relaxed">
              Built a domain benchmark that evaluates generated manifests through operational checks against
              Kubernetes APIs, then combined those checks with quality scoring and model comparisons.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Outcome</p>
            <p className="text-gray-300 leading-relaxed">
              Produced an end-to-end pipeline for data, fine-tuning, runtime evaluation, and deployment,
              plus a web interface to interact with specialized Kubernetes models.
            </p>
          </article>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Thesis Scope</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="font-medium text-cyan-300">Fine-Tuning and Models</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>Built and versioned Kubernetes-focused datasets with DVC.</li>
                <li>Trained multiple QLoRA model candidates (Qwen and Gemma families).</li>
                <li>Tracked candidate artifacts and model iterations for selection.</li>
                <li>Focused on code-generation tasks for Kubernetes and related infra workflows.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="font-medium text-cyan-300">Benchmark and Evaluation</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>Generated and evaluated task suites for cluster-centric scenarios.</li>
                <li>Executed runtime validation against Minikube and GKE environments.</li>
                <li>Scored outputs with operational evaluators and judge-based rubrics.</li>
                <li>Prioritized executable correctness over string similarity.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Serving and Platform Engineering</h2>
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-gray-300 leading-relaxed space-y-4">
            <p>
              The serving stack uses a two-tier architecture: a FastAPI proxy layer on DigitalOcean App
              Platform for request orchestration and validation, plus a GPU-backed FastAPI model server on
              GCP for inference.
            </p>
            <p>
              Infrastructure and deployment are automated through Terraform modules and GitHub Actions,
              enabling repeatable provisioning and model service rollout.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-5">
          <h2 className="text-2xl font-semibold">Artifacts</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://kubebench.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/UC-Berkeley-I-School/210-section-5-YOELO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Fine-Tuning + Eval Repo
            </a>
            <a
              href="https://github.com/Anni626/210-section-5-YOELO-Web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              Web + Deployment Repo
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
