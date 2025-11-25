// src/components/Background/AnimatedBackground.jsx
import "./AnimatedBackground.css";

function AnimatedBackground() {
  return (
    <div className="bg-layer">
      <div className="bg-gradient" />
      <div className="bg-orb orb-purple" />
      <div className="bg-orb orb-cyan" />
      <div className="bg-noise-overlay" />
      <div className="bg-particles">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="bg-particle" />
        ))}
      </div>
    </div>
  );
}

export default AnimatedBackground;
