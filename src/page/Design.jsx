import { useState } from "react";
import "../App.css";
import "../index.css";

// ── Update image imports to match your actual files in src/assets ──
import deliveryImg from "../assets/delivery.png";
import skincareImg from "../assets/skincare.png";
import rammenImg from "../assets/ramen.jpg";
import foodImg from "../assets/food.png";
import namecardImg from "../assets/namecard.jpg";
import movieImg from "../assets/movie.jpg";
import emptyGif from "../assets/empty.svg"; 

const designWork = [
  {
    title: "Food Delivery App",
    desc: "Full UX/UI redesign with user research, wireframes, and high-fidelity Figma prototype.",
    tags: ["Figma", "UX Research", "Prototyping"],
    color: "#0099cc",
    year: "2026",
    link: "https://www.figma.com/design/78IPbHX2Is7Nu7QLdd150Q/Learn?node-id=107-2",
    image: deliveryImg,
    category: "UX/UI",
  },
  {
    title: "Skincare App Local",
    desc: "Promotional posters designed for university events using bold typography and illustration.",
    tags: ["Ecommerce", "Typography", "Skincare"],
    color: "#00b894",
    year: "2026",
    link: "https://www.figma.com/design/SCqMc80ig3ooAnbIxC7uwx/Skincare-App",
    image: skincareImg,
    category: "UX/UI",
  },
  {
    title: "Brand Identity Poster",
    desc: "Visual identity and poster design for a local creative studio launch event.",
    tags: ["Figma"],
    color: "#0077aa",
    year: "2026",
    link: "https://behance.net/your-link",
    image: rammenImg,
    placeholderHeight: 260,
    category: "Poster",
  },
  {
    title: "Event Poster Series",
    desc: "A series of vibrant posters for a music festival, blending type and illustration.",
    tags: ["Illustrator", "Typography", "Figma"],
    color: "#e84393",
    year: "2026",
    link: "https://behance.net/your-link",
    image: foodImg,
    placeholderHeight: 340,
    category: "Poster",
  },
  {
    title: "Name Card Design",
    desc: "Minimalist name card design with a focus on typography and color contrast.",
    tags: ["Illustration", "Branding", "Print"],
    color: "#0077aa",
    year: "2025",
    link: "https://behance.net/your-link",
    image: namecardImg,
    placeholderHeight: 280,
    category: "Poster",
  },
  {
    title: "Movie Poster Design",
    desc: "Cinematic poster design for an upcoming film, emphasizing bold visuals and typography.",
    tags: ["Illustrator", "Typography", "Photoshop"],
    color: "#0077aa",
    year: "2025",
    link: "https://behance.net/your-link",
    image: movieImg,
    placeholderHeight: 340,
    category: "Poster",
  }
];

const FILTERS = ["All", "UX/UI", "Mobile App", "Poster"];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// Empty state component
function EmptyState({ category, onReset }) {
  return (
    <div className="design__empty">
      <img src={emptyGif} alt="Nothing here" className="design__empty-img" />
      <p className="design__empty-title">No {category} projects yet</p>
      <p className="design__empty-sub">
        Check back soon more work is on the way.
      </p>
      <button className="design__empty-btn" onClick={onReset}>
        View all work
      </button>
    </div>
  );
}
function ImgPlaceholder({ color }) {
  return (
    <div className="c-card__placeholder">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="32" height="32" rx="6"
          stroke={color} strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="14" cy="15" r="3" stroke={color} strokeWidth="1.5" />
        <path d="M4 28l9-7 6 5 5-4 12 9"
          stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CreativeCard({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="c-card"
      style={{ "--accent": item.color }}
    >
      <div className="c-card__media">
        {item.image ? (
          <img src={item.image} alt={item.title} className="c-card__img" />
        ) : (
          <ImgPlaceholder color={item.color} />
        )}
        <span className="c-card__cat">{item.category}</span>
        <div className="c-card__shine" />
      </div>

      <div className="c-card__body">
        <div className="c-card__header">
          <span className="c-card__year">{item.year}</span>
          <div className="c-card__arrow-btn">
            <ArrowIcon />
          </div>
        </div>
        <h3 className="c-card__title">{item.title}</h3>
        <p className="c-card__desc">{item.desc}</p>
        <div className="c-card__tags">
          {item.tags.map((t) => (
            <span key={t} className="c-card__tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="c-card__accent-line" />
    </a>
  );
}

function PinCard({ item }) {
  return (
    <div className="pin-card" style={{ "--accent": item.color }}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <div className="pin-card__media">
          {item.image ? (
            <img src={item.image} alt={item.title} className="pin-card__img" />
          ) : (
            <div
              className="pin-card__placeholder"
              style={{
                background: `${item.color}12`,
                minHeight: item.placeholderHeight ?? 280, 
              }}
            />
          )}
          <div className="pin-card__overlay">
            <span className="pin-card__view-btn">View ↗</span>
          </div>
        </div>

        <div className="pin-card__body">
          <h3 className="pin-card__title">{item.title}</h3>
          <div className="pin-card__foot">
            <div className="pin-card__tags">
              {item.tags.slice(0, 2).map((t) => (
                <span key={t} className="pin-card__tag">
                  {t}
                </span>
              ))}
            </div>
            <span className="pin-card__year">{item.year}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Design() {
  const [active, setActive] = useState("All");

  const isPoster = (item) => item.category === "Poster";

  const filtered =
    active === "All" ? designWork : designWork.filter((i) => i.category === active);

  const nonPosterItems = filtered.filter((i) => !isPoster(i));
  const posterItems =
    active === "All"
      ? designWork.filter(isPoster)
      : filtered.filter(isPoster);

  return (
    <section id="design">
      <div className="container">
        <p className="section-label">Design Work</p>
        <h2 className="section-title">
          UX/UI & Visual
          <br />
          Design
        </h2>
        <p className="design__intro">
          Crafting interfaces and visuals that balance aesthetics with function
          — from user research to final pixel.
        </p>

        <div className="design__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`design__filter ${active === f ? "design__filter--active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {nonPosterItems.length === 0 && posterItems.length === 0 && (
          <EmptyState category={active} onReset={() => setActive("All")} />
        )}

        {/* Creative cards grid */}
        {nonPosterItems.length > 0 && (
          <div className="design__grid">
            {nonPosterItems.map((item) => (
              <CreativeCard key={item.title} item={item} />
            ))}
          </div>
        )}

        {/* Pinterest posters */}
        {posterItems.length > 0 && (
          <>
            {nonPosterItems.length > 0 && (
              <p className="design__poster-label">Poster Works</p>
            )}
            <div className="pin-grid">
              {posterItems.map((item) => (
                <PinCard key={item.title} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}