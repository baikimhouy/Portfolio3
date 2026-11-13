import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetail.css";

function Arrow({ dir = "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d={dir === "right" ? "M3 8h10M9 4l4 4-4 4" : "M13 8H3M7 4L3 8l4 4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    if (!project) return;
    const previous = document.title;
    document.title = `${project.title}  Bai Kimhouy`;
    return () => {
      document.title = previous;
    };
  }, [project]);

  if (!project) {
    return (
      <section className="pd">
        <div className="container pd__notfound">
          <p className="section-label">404</p>
          <h1 className="section-title">Project not found</h1>
          <Link to="/#projects" className="btn btn--primary">
            <Arrow dir="left" /> Back to projects
          </Link>
        </div>
      </section>
    );
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const [cover, ...gallery] = project.images;

  return (
    <section className="pd" style={{ "--accent": project.color }}>
      <div className="container">
        <Link to="/#projects" className="pd__back">
          <Arrow dir="left" /> All projects
        </Link>

        <header className="pd__header">
          <p className="section-label">
            {project.type} · {project.year}
          </p>
          <h1 className="section-title pd__title">{project.title}</h1>
          <p className="pd__lead">{project.desc}</p>

          <div className="pd__tags">
            {project.tags.map((t) => (
              <span
                key={t}
                className="project-card__tag"
                style={{ borderColor: `${project.color}55`, color: project.color }}
              >
                {t}
              </span>
            ))}
          </div>

          <div className="pd__actions">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                View source code <Arrow />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                Live demo <Arrow />
              </a>
            )}
          </div>
        </header>

        <div className="pd__cover glass-card">
          {cover ? (
            <img src={cover} alt={`${project.title} preview`} decoding="async" />
          ) : (
            <div className="pd__cover-placeholder" aria-hidden="true">
              <span>{project.title}</span>
            </div>
          )}
        </div>

        <div className="pd__body">
          <div className="pd__main">
            <h2 className="pd__h2">Overview</h2>
            {project.overview.map((para, i) => (
              <p key={i} className="pd__text">
                {para}
              </p>
            ))}

            <h2 className="pd__h2">Key features</h2>
            <ul className="pd__features">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <aside className="pd__aside glass-card">
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt>Tech stack</dt>
                <dd>{project.tags.join(", ")}</dd>
              </div>
            </dl>
          </aside>
        </div>

        {gallery.length > 0 && (
          <div className="pd__gallery">
            <h2 className="pd__h2">Screenshots</h2>
            <div className="pd__gallery-grid">
              {gallery.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} screenshot ${i + 2}`}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        )}

        <nav className="pd__pager" aria-label="More projects">
          <Link to={`/projects/${prev.slug}`} className="pd__pager-link">
            <span className="pd__pager-label">
              <Arrow dir="left" /> Previous
            </span>
            <span className="pd__pager-title">{prev.title}</span>
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="pd__pager-link pd__pager-link--next"
          >
            <span className="pd__pager-label">
              Next <Arrow />
            </span>
            <span className="pd__pager-title">{next.title}</span>
          </Link>
        </nav>
      </div>
    </section>
  );
}
