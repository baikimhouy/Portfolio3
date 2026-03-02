import "../App.css";
const socials = [
  { label: "GitHub", href: "https://github.com", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "LI" },
  { label: "Twitter", href: "https://twitter.com", icon: "TW" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__left">
          <span className="footer__logo">
            <span className="footer__bracket"></span>Hui
          </span>
          <p className="footer__tagline">
            Crafting digital experiences
            <br />
            from pixels to perfection.
          </p>
        </div>

        <div className="footer__socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="footer__right">
          <p className="footer__copy">
            © {new Date().getFullYear()} — All rights reserved
          </p>
          <p className="footer__made">Made with React & passion</p>
        </div>
      </div>

      <div className="footer__line" />
    </footer>
  );
}
