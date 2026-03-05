export const personalInfo = {
  name: "Your Name",
  title: "Software Developer",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

export const aboutText = `I'm a passionate software developer with expertise in building modern web applications.
I love creating clean, efficient, and user-friendly solutions to complex problems. When I'm not coding,
you can find me exploring new technologies and contributing to open-source projects.`;

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
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
  },
  {
    title: "Project One",
    description:
      "A full-stack web application that helps users manage their daily tasks with an intuitive interface and real-time updates.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description:
      "An AI-powered analytics dashboard that visualizes complex data sets and provides actionable insights for businesses.",
    technologies: ["Next.js", "Python", "TensorFlow", "Chart.js"],
    githubUrl: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A mobile-first e-commerce platform with seamless checkout experience and inventory management system.",
    technologies: ["React Native", "Firebase", "Stripe", "Redux"],
    githubUrl: "https://github.com/yourusername/project-three",
    liveUrl: "https://project-three.vercel.app",
  },
  {
    title: "Project Four",
    description:
      "Open-source developer tool that automates deployment workflows and integrates with popular CI/CD platforms.",
    technologies: ["Go", "Docker", "Kubernetes", "GitHub Actions"],
    githubUrl: "https://github.com/yourusername/project-four",
  },
];
