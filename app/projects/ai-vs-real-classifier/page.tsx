import Image from "next/image";
import Link from "next/link";

export default function AiVsRealClassifierPage() {
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
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">Coursework Project</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text">
            AI vs Real Image Classifier
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
            Computer vision project focused on classifying whether an image is AI-generated or real.
            The workflow covers preprocessing, augmentation, CNN baseline modeling, and hyperparameter
            experiments with TensorFlow/Keras.
          </p>
        </header>

        <section className="rounded-2xl border border-gray-800 bg-gray-950/70 p-5 md:p-7">
          <Image
            src="/projects/ai-vs-real-flow.svg"
            alt="AI vs real image classifier workflow and results"
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
              As synthetic images become more common, distinguishing generated images from real ones is an
              important applied classification task with practical trust and quality implications.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Approach</p>
            <p className="text-gray-300 leading-relaxed">
              Built a binary classifier pipeline using TensorFlow/Keras with train/validation/test splits,
              augmentation (brightness, contrast, flips), and iterative architecture tuning.
            </p>
          </article>
          <article className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-3">
            <p className="text-sm text-cyan-300">Outcome</p>
            <p className="text-gray-300 leading-relaxed">
              Established a baseline CNN achieving around 68% test accuracy on the held-out subset and used
              additional experiments to understand generalization and overfitting tradeoffs.
            </p>
          </article>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Pipeline Details</h2>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="font-medium text-cyan-300">Data + Preprocessing</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>Loaded image classes with binary labels (`fake` and `real`).</li>
                <li>Created smaller randomized subsets for efficient iteration.</li>
                <li>Applied train/validation/test splitting in notebook workflow.</li>
                <li>Saved processed subsets to `.npz` for reproducible modeling runs.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
              <h3 className="font-medium text-cyan-300">Modeling + Evaluation</h3>
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>Baseline CNN: Conv2D + pooling + dense binary classifier.</li>
                <li>Tracked training, validation, and test accuracy across runs.</li>
                <li>Compared baseline against tuned architecture variants.</li>
                <li>Used metrics to diagnose overfitting and robustness limits.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-semibold">Key Results</h2>
          <div className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 text-gray-300 leading-relaxed space-y-4">
            <p>
              In the recorded notebook outputs, the baseline CNN reached approximately <strong>0.996</strong>
              training accuracy, <strong>0.672</strong> validation accuracy, and <strong>0.681</strong> test
              accuracy. This performance profile suggests the model learned strong class boundaries on training
              data while still leaving room to improve generalization.
            </p>
            <p>
              A tuned variant did not outperform baseline on validation/test metrics, which reinforced the
              importance of careful architecture and regularization decisions for this dataset.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-gray-800 bg-gray-900/40 p-6 space-y-5">
          <h2 className="text-2xl font-semibold">Artifacts</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/akinlaba/final_project_207"
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
