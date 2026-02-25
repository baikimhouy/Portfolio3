import { useRef } from "react";
import "../App.css";

export default function ThreeDCard({
  children,
  className = "",
  intensity = 15,
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotateX = -dy * intensity;
    const rotateY = dx * intensity;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    // Move shine
    const shine = card.querySelector(".card-shine");
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${(dx + 1) * 50}% ${(dy + 1) * 50}%, rgba(255,255,255,0.08) 0%, transparent 70%)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    const shine = card.querySelector(".card-shine");
    if (shine) shine.style.background = "none";
  };

  return (
    <div
      ref={cardRef}
      className={`three-d-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-shine" />
      {children}
    </div>
  );
}
