import ThreeDCard from "../components/3DCard";
import "../index.css";
const projects = [
  {
    title: "Library Dashboard",
    desc: "Real-time analytics dashboard intergrate with database",
    tags: ["Php", "MySQL"],
    color: "#60a5fa",
    year: "2024",
    link: "https://github.com/baikimhouy/Library_dashboard_php",
  },
  {
    title: "Eternal shine mobile app",
    desc: "Eternal Shine is a skincare and beauty e-commerce mobile application built with Flutter and Dart. The app focuses on a clean shopping experience where users can explore skincare products.",
    tags: ["Flutter", "Dart"],
    color: "#3b82f6",
    year: "2026",
    link: "https://github.com/Vuthy-Tourn/flutter_assignment",
  },
  {
    title: "POS System — Java Swing",
    desc: "Point-of-sale system built with Java Swing for managing sales and inventory.",
    tags: ["Java", "Swing"],
    color: "#bfdbfe",
    year: "2025",
    link: "https://github.com/Vuthy-Tourn/assignment-java-swing",
  },
  {
    title: "Nova Studio E-commerce Clothing Store",
    desc: "E-commerce clothing store with Laravel, and admin dashboard.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    color: "#3b82f6",
    year: "2025",
    link: "https://github.com/Vuthy-Tourn/clothing-store",
  },
];

function ProjectCard({ project }) {
  return (
    <ThreeDCard className="project-card glass-card">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <div className="project-card__inner">
          <div
            className="project-card__glow"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${project.color}18, transparent 70%)`,
            }}
          />
          <div className="project-card__top">
            <span className="project-card__year">{project.year}</span>
            <div
              className="project-card__icon"
              style={{
                borderColor: `${project.color}40`,
                color: project.color,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9h12M9 3l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.desc}</p>
          <div className="project-card__tags">
            {project.tags.map((t) => (
              <span
                key={t}
                className="project-card__tag"
                style={{
                  borderColor: `${project.color}30`,
                  color: `${project.color}cc`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </ThreeDCard>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've built</h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
