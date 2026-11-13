import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../App.css";
const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Design", href: "/#design" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Link to="/#hero" className="nav__logo">
          <span className="nav__logo-name">Hui</span>
        </Link>

        <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`nav__link ${active === link.href ? "nav__link--active" : ""}`}
                onClick={() => {
                  setActive(link.href);
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/#contact" className="nav__cta">
          Hire Me
        </Link>

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
