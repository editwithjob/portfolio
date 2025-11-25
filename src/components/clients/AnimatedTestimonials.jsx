// src/components/Clients/AnimatedTestimonials.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AnimatedTestimonials.css";

function AnimatedTestimonials({ testimonials }) {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="clients-testimonials">
      {/* LEFT – stacked photo */}
      <div className="clients-photo-stack">
        <div className="clients-photo-layer clients-photo-layer--back" />
        <div className="clients-photo-layer clients-photo-layer--front" />

        <div className="clients-photo-main">
          <img src={active.avatar} alt={active.name} />
        </div>
      </div>

      {/* RIGHT – quote + controls */}
      <div className="clients-quote">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="clients-quote-label">CLIENT RESPONSE</div>

            <h3 className="clients-quote-text">“{active.quote}”</h3>

            <div className="clients-quote-meta">
              <p className="clients-quote-name">{active.name}</p>
              <p className="clients-quote-role">{active.role}</p>
              <p className="clients-quote-social">{active.social}</p>
            </div>

            <div className="clients-tags">
              {active.tags?.map((tag) => (
                <span key={tag} className="clients-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="clients-nav">
          <button type="button" onClick={prev} className="clients-nav-btn">
            ←
          </button>
          <button type="button" onClick={next} className="clients-nav-btn">
            →
          </button>

          <div className="clients-nav-index">
            {index + 1} / {testimonials.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedTestimonials;
