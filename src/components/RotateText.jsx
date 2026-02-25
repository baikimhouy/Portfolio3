import { useState, useEffect } from "react";
import "../App.css";

export default function RotateText({ words = [], interval = 2500 }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimating(false);
      }, 400);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={`rotate-text ${animating ? "rotate-text--out" : "rotate-text--in"}`}
    >
      {words[index]}
    </span>
  );
}
