import { Link } from "react-router-dom";
import ThreeDCard from "../components/3DCard";
import { projects } from "../data/projects";
import "../index.css";


function ProjectCard({ project }) {
  return (
    <ThreeDCard className="project-card glass-card">
      <Link to={`/projects/${project.slug}`} aria-label={`View details: ${project.title}`}>
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
      </Link>
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
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
