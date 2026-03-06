import { personalInfo } from "@/lib/data";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 md:py-24 relative">
      <div className="max-w-5xl mx-auto text-center space-y-7 md:space-y-9">
        <h1 className="text-5xl md:text-7xl leading-[1.08] font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
          {personalInfo.name}
        </h1>
        <p className="text-2xl md:text-3xl leading-relaxed text-gray-400 animate-fade-in-delay">{personalInfo.title}</p>
        <button
          onClick={() => scrollToSection("about")}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2"
        >
          Explore My Work
          <svg
            className="w-5 h-5 group-hover:translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
