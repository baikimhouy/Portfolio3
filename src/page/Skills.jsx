import RotateText from "../components/RotateText";
import "../index.css";

const skills = [
  { name: "React / Next.js", level: 60, color: "#60a5fa" },
  { name: "TypeScript", level: 40, color: "#93c5fd" },
  { name: "CSS / Tailwind", level: 70, color: "#3b82f6" },
  { name: "Node.js", level: 40, color: "#bfdbfe" },
  { name: "Figma / UI Design", level: 50, color: "#60a5fa" },
  { name: "Git / Version Control", level: 40, color: "#93c5fd" },
];

const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Tailwind",
  "Node.js",
  "Figma",
  "Git",
  "Laravel",
];

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

export default function Skills() {
  return (
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
  );
}
