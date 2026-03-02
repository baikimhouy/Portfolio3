import { useState, useEffect } from "react";
import "../App.css";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <span className="nav__logo-name">Hui</span>
        </a>

        <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav__link ${active === link.href ? "nav__link--active" : ""}`}
                onClick={() => {
                  setActive(link.href);
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav__cta">
          Hire Me
        </a>

        <button
          className={`nav__burger ${menuOpen ? "nav__burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
