import ThreeDCard from "../components/3DCard";
import "../App.css";
/* ─── DATA ─────────────────────────────────────── */
const skills = [
  { name: "React / Next.js", level: 92, color: "var(--aurora-1)" },
  { name: "TypeScript", level: 85, color: "var(--aurora-2)" },
  { name: "CSS / Tailwind", level: 95, color: "var(--aurora-3)" },
  { name: "Node.js", level: 72, color: "var(--aurora-4)" },
  { name: "Figma / UI Design", level: 80, color: "#f59e0b" },
  { name: "Git / Version Control", level: 88, color: "#10b981" },];

const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Tailwind",
  "Node.js",
  "Figma",
  "Git",
];

const projects = [
  {
    title: "Aurora Dashboard",
    desc: "Real-time analytics dashboard with live charts, glassmorphism UI, and dark mode.",
    tags: ["React", "TypeScript", "Recharts"],
    color: "#00c6ff",
    year: "2024",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured store with cart, auth, Stripe payments, and a fully responsive design.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    color: "#7b2fff",
    year: "2024",
  },
  {
    title: "3D Portfolio Generator",
    desc: "Tool that generates animated 3D portfolio sites from a JSON config file.",
    tags: ["Three.js", "WebGL", "GSAP"],
    color: "#00ffa3",
    year: "2023",
  },
  {
    title: "AI Writing Tool",
    desc: "GPT-powered writing assistant with real-time suggestions and formatting exports.",
    tags: ["React", "OpenAI API", "Node.js"],
    color: "#ff6b6b",
    year: "2023",
  },
];

/* ─── COMPONENTS ────────────────────────────────── */
function SkillBar({ name, level, color }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            "--w": `${level}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <ThreeDCard className="project-card glass-card">
      <div className="project-card__inner">
        <div
          className="project-card__glow"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${project.color}20, transparent 70%)`,
          }}
        />
        <div className="project-card__top">
          <span className="project-card__year">{project.year}</span>
          <div
            className="project-card__icon"
            style={{ borderColor: `${project.color}40`, color: project.color }}
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
    </ThreeDCard>
  );
}

/* ─── MAIN EXPORT ───────────────────────────────── */
export default function About() {
  return (
    <>
      {/* ABOUT */}
      <section id="about">
        <div className="container about__grid">
          <div className="about__text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Coding with craft,
              <br />
              thinking with design
            </h2>
            <p className="about__body">
              I'm a frontend developer with a deep love for building interfaces
              that feel as good as they look. I specialize in React ecosystems,
              performant animations, and bridging the gap between design and
              engineering.
            </p>
            <p className="about__body">
              When I'm not pushing pixels, I'm exploring WebGL, contributing to
              open source, or trying to make CSS do things it wasn't designed to
              do.
            </p>
            <div className="about__details">
              {[
                { label: "Location", value: "SenSok, Phnom Penh" },
                { label: "Email", value: "ctin871@gmail.com" },
                { label: "Status", value: "Open to work", highlight: true },
              ].map((d) => (
                <div key={d.label} className="about__detail">
                  <span className="about__detail-label">{d.label}</span>
                  <span
                    className={`about__detail-value ${d.highlight ? "about__detail-value--highlight" : ""}`}
                  >
                    {d.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual">
            <ThreeDCard className="about__card glass-card" intensity={8}>
              <div className="about__avatar">
                <div className="about__avatar-ring" />
                <div className="about__avatar-img">
                  <img
                    src="https://i.pinimg.com/736x/98/a5/a7/98a5a76caf8dbb66de5316e93a7de2b8.jpg"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="about__card-info">
                <span className="about__card-name">Bai KimHouy</span>
                <span className="about__card-role">Frontend Developer</span>
              </div>
              <div className="about__card-chips">
                {["React", "TypeScript", "CSS"].map((t) => (
                  <span key={t} className="about__chip">
                    {t}
                  </span>
                ))}
              </div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
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

      {/* SKILLS */}
      <section id="skills">
        <div className="container skills__layout">
          <div className="skills__left">
            <p className="section-label">Skills</p>
            <h2 className="section-title">My toolkit</h2>
            <p className="skills__desc">
              I believe in continuous learning and pushing the boundaries of
              what's possible on the web.
            </p>
            <div className="tech-stack">
              {techStack.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="skills__bars">
            {skills.map((s) => (
              <SkillBar key={s.name} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <ThreeDCard className="contact-card glass-card" intensity={5}>
            <div className="contact-card__inner">
              <div className="contact-card__glow" />
              <p className="section-label">Contact</p>
              <h2 className="section-title">
                Let's build something
                <br />
                great together
              </h2>
              <p className="contact__desc">
                I'm currently open to freelance projects and full-time
                positions. If you have an idea or opportunity, I'd love to hear
                from you.
              </p>
              <div className="contact__actions">
                <a href="mailto:ctin871@gmail.com" className="btn btn--primary">
                  Send Email
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2 4l6 5 6-5M2 4h12v9H2V4z"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/baikimhouy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  github
                </a>
              </div>
            </div>
          </ThreeDCard>
        </div>
      </section>
    </>
  );
}
