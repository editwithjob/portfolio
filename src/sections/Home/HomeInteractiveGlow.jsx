import { useEffect, useState } from "react";
import "./HomeInteractiveGlow.css";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export default function HomeInteractiveGlow() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const supportsHover =
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!supportsHover) {
      // mobile / touch: no pointer tracking, just idle animation
      return;
    }

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth) * 2 - 1; // -1..1
      const ny = (e.clientY / innerHeight) * 2 - 1;

      setOffset({
        x: clamp(nx, -1, 1),
        y: clamp(ny, -1, 1),
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  const glowStyle = {
    transform: `translate3d(${offset.x * 18}px, ${offset.y * 16}px, 0) scale(1.05)`,
  };

  const orb1Style = {
    transform: `translate3d(${offset.x * 10}px, ${offset.y * 8}px, 0)`,
  };

  const orb2Style = {
    transform: `translate3d(${offset.x * -6}px, ${offset.y * -4}px, 0)`,
  };

  return (
    <div className="hero-interactive">
      {/* big moving gradient glow */}
      <div className="hero-interactive-glow" style={glowStyle} />

      {/* soft bokeh orbs */}
      <div
        className="hero-interactive-orb hero-interactive-orb--1"
        style={orb1Style}
      />
      <div
        className="hero-interactive-orb hero-interactive-orb--2"
        style={orb2Style}
      />

      {/* tiny film-style noise */}
      <div className="hero-interactive-noise" />
    </div>
  );
}
