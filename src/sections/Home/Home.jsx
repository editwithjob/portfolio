// src/sections/Home/Home.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const titles = ["Video Editor", "Storyteller", "Visual Creative"];

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index % titles.length];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, index, isDeleting]);

  return (
    <section id="home" className="section home-section">
      
      {/* glass-card removed */}
      <div className="section-inner home-inner">

        <div className="home-left home-left-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="section-label">VIDEO EDITOR PORTFOLIO</p>

            <h1 className="home-title">
              <span className="text-gradient">Cinematic edits</span> that feel
              like a <span className="home-highlight">film studio</span>, built
              for performance.
            </h1>

            <p className="home-subtitle">
              I craft edits that instantly capture attention, highlight the strongest moments, and drive 
              real results—across UGC ads, paid social, YouTube content, cinematic storytelling, corporate interviews, 
              and documentary-style projects.
            </p>

            <div className="home-typewriter">
              <span className="type-label">I am a</span>
              <span className="type-text mono">{displayText}</span>
              <span className="type-caret" />
            </div>

            <div className="home-cta">
              <a href="#showcase">
                <button className="btn-primary">
                  View my editing showcase
                  <span>▶</span>
                </button>
              </a>

              <a href="#contact">
                <button className="btn-ghost">Let&apos;s work together</button>
              </a>
            </div>
          </motion.div>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="scroll-indicator-dot" />
      </div>
    </section>
  );
}

export default Home;
