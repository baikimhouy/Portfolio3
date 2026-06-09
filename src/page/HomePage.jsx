import RotateText from "../components/RotateText";
import Lanyard from "../components/Lanyard";
import "../index.css";
import "../App.css";
const roles = ["Frontend Developer", "React Specialist", "Vibe Coder"];

export default function HomePage() {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid-lines" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__badge fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="hero__badge-dot" />
          Available for freelance & full-time
        </div>

        <h1
          className="hero__heading fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="hero__heading-line">Hi, I'm</span>
          <span className="hero__name">Bai Kimhouy</span>
          <span className="hero__role">
            I build <RotateText words={roles} />
          </span>
        </h1>

        <p className="hero__desc fade-up" style={{ animationDelay: "0.35s" }}>
          Passionate frontend developer crafting immersive digital experiences
          with modern technologies. Turning complex problems into elegant,
          performant interfaces.
        </p>

        <div
          className="hero__actions fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a href="#projects" className="btn btn--primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="btn btn--ghost">
            Let's Talk
          </a>
        </div>
      </div>

      {/* Lanyard overflows below the hero */}
      <div className="hero__lanyard">
        <Lanyard
          position={[0, 0, 13]}
          gravity={[0, -40, 0]}
          fov={25}
          transparent={true}
        />
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span></span>
      </div>
    </section>
  );
}
