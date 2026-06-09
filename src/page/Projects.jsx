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
    title: "Khmer Calender",
    desc: "Khmer Calendar web app with lunar calendar, festivals, and astrology info.",
    tags: ["HTML"],
    color: "#93c5fd",
    year: "2024",
    link: "https://github.com/baikimhouy/calender",
  },
  {
    title: "Nova Studio E-commerce Clothing Store",
    desc: "E-commerce clothing store with Laravel, and admin dashboard.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    color: "#3b82f6",
    year: "2025",
    link: "https://github.com/Vuthy-Tourn/clothing-store",
  },
  {
    title: "Tourism Website",
    desc: "Tourism website built as part of the 1st Generation Full Stack Mini Project showcasing Cambodia's stunning destinations.",
    tags: ["HTML", "CSS", "Vercel"],
    color: "#bfdbfe",
    year: "2025",
    link: "https://github.com/PorKeat/MiniProject_FSWD",
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
