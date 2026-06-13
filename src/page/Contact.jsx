import ThreeDCard from "../components/3DCard";
import "../App.css";

export default function Contact() {
  return (
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
              I'm currently open to freelance projects and part-time positions.
              If you have an idea or opportunity, I'd love to hear from you.
            </p>
            <div className="contact__actions">
              <a href="mailto:baikimhoui@gmail.com" className="btn btn--primary">
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
                GitHub
              </a>
            </div>
          </div>
        </ThreeDCard>
      </div>
    </section>
  );
}
