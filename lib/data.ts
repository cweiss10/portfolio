export const personalInfo = {
  name: "Cat Weiss",
  title: "Data Engineer",
  email: "catherineweiss95@gmail.com",
  github: "https://github.com/cweiss10",
  linkedin: "https://www.linkedin.com/in/cat-weiss/",
};

export const aboutText = `I am a Data Engineer at Algolia and I hold a Master of Information and Data Science from UC Berkeley.
I design, deploy, and productionize data pipelines and data models that turn complex product and behavioral data into measurable business outcomes.
My current work centers on modeling customer and prospect success to improve forecasting, targeting, and strategic decision-making.

Across 8 years building technical solutions for SaaS platforms and custom database integrations, I have worked across data engineering, analytics engineering, and applied machine learning.
I focus on building reliable, scalable systems that support both fast experimentation and long-term growth.

I am especially interested in roles at the intersection of data engineering and machine learning, including ML engineering, advanced analytics engineering, and production ML systems.
Long term, I want to own end-to-end data and ML platforms that move models from exploration to robust, observable, and scalable deployment.`;

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    title: "KubeBench",
    description:
      "Master's capstone project: a Kubernetes-native benchmark and model-serving platform for code-generating LLMs, with fine-tuned domain models, live cluster-based evaluation, and cloud deployment infrastructure.",
    technologies: [
      "Python",
      "Kubernetes",
      "FastAPI",
      "QLoRA",
      "Terraform",
      "GCP + DigitalOcean",
    ],
    githubUrl: "https://github.com/UC-Berkeley-I-School/210-section-5-YOELO",
    liveUrl: "https://kubebench.dev",
    caseStudyUrl: "/projects/kubebench",
    badge: "Thesis",
  },
  {
    title: "Catville",
    description:
      "Autonomous social simulation inspired by the Stanford/Google generative agents paper. Multi-agent characters interact daily using a local Mistral model, and the system publishes narrative daily summaries via Buttondown.",
    technologies: [
      "Python",
      "Ollama",
      "Mistral",
      "Agent Simulation",
      "Poetry",
      "Buttondown API",
    ],
    githubUrl: "https://github.com/cweiss10/catville",
    liveUrl: "https://buttondown.com/catherineweiss95",
    caseStudyUrl: "/projects/catville",
  },
  {
    title: "Persona-Aware RAG Assistant",
    description:
      "Final GenAI project for UC Berkeley DATASCI 267. Built an end-to-end RAG system with Qdrant retrieval, Cohere reranking, and persona-specific prompting for engineering and marketing users.",
    technologies: [
      "Python",
      "LangChain",
      "Qdrant",
      "Mistral-7B",
      "Cohere Rerank",
      "RAG Evaluation",
    ],
    githubUrl: "https://github.com/catweiss/genAI-final-report",
    caseStudyUrl: "/projects/genai-rag-assistant",
    badge: "Coursework",
  },
  {
    title: "MLOps Sentiment API",
    description:
      "End-to-end machine learning API project for MLOps coursework: FastAPI + PyTorch sentiment inference, Redis caching, Dockerized deployment to Kubernetes on Azure, and performance validation with k6 + Grafana.",
    technologies: [
      "FastAPI",
      "PyTorch",
      "Redis",
      "Docker",
      "Kubernetes (AKS)",
      "k6 + Grafana",
    ],
    githubUrl: "https://github.com/UCB-W255/project-pytorch-fastapi-cweiss10",
    caseStudyUrl: "/projects/mlops-pytorch-api",
    badge: "Coursework",
  },
  {
    title: "AI vs Real Image Classifier",
    description:
      "Coursework project building a computer-vision classifier to detect AI-generated versus real images, including preprocessing, augmentation, model iteration, and evaluation on held-out subsets.",
    technologies: [
      "TensorFlow/Keras",
      "CNN",
      "Computer Vision",
      "NumPy",
      "Jupyter",
      "Model Tuning",
    ],
    githubUrl: "https://github.com/akinlaba/final_project_207",
    caseStudyUrl: "/projects/ai-vs-real-classifier",
    badge: "Coursework",
  },
];
