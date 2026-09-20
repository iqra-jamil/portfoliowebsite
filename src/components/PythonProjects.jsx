import { useEffect } from "react";
import "./PythonProjects.css";


const pythonProjects = [
  {
    id: 1,
    title: "AI Chatbot",
    description:
      "A conversational AI chatbot built with Python and Streamlit. Deployed live — just open and start chatting.",
    tags: ["Python", "Streamlit", "AI"],
    github: "https://github.com/iqra-jamil/python-learning/blob/main/Chatbot/project.py",
    live: "https://iqra-ai.streamlit.app/",
  },
  {
    id: 2,
    title: "PDF Summarizer",
    description:
      "Upload any PDF and get a concise AI-generated summary instantly. Built with Python and Streamlit.",
    tags: ["Python", "Streamlit", "AI", "PDF"],
    github: "https://github.com/iqra-jamil/python-learning/blob/main/pdfsummarizer/project.py",
    live: "https://iqra-jamil-python-learning-pdfsummarizerproject-eaccja.streamlit.app/",
  },
];

export default function PythonProjects() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="py-page">
      {/* ── Back link ── */}
      <a href="/" className="py-back">
        ← Back to portfolio
      </a>

      {/* ── Header ── */}
      <header className="py-header">
        <span className="py-label">Learning in public</span>
        <h1 className="py-heading">
          Python <span className="py-accent">Projects</span>
        </h1>
        <p className="py-sub">
          I'm actively learning Python. Here's what I've built so far  expect
          this section to grow.
        </p>
      </header>

      {/* ── Grid ── */}
      {pythonProjects.length === 0 ? (
        <div className="py-empty">
          <p>No projects yet — check back soon!</p>
        </div>
      ) : (
        <ul className="py-grid">
          {pythonProjects.map((project) => (
            <li key={project.id} className="py-card">
              {/* Tags */}
              <div className="py-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="py-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title + description */}
              <h2 className="py-title">{project.title}</h2>
              <p className="py-desc">{project.description}</p>

              {/* Links */}
              <div className="py-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-btn py-btn--ghost"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-btn py-btn--solid"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
