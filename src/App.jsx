import { useEffect, useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./page/HomePage";
import About from "./page/About";

export default function App() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0,
      mouseY = 0;
    let followerX = 0,
      followerY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    const raf = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(raf);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="app">
      {/* Custom cursor */}
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />

      {/* Aurora blobs */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-blob" />
        <div className="aurora-blob" />
        <div className="aurora-blob" />
      </div>

      <Nav />

      <main>
        <HomePage />
        <About />
      </main>

      <Footer />
    </div>
  );
}
