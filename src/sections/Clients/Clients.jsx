// src/sections/Clients/Clients.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Clients.css";

const testimonials = [
  {
    name: "Erick Sanchez",
    role: "Content Creator",
    social: "497.8K+ followers on TikTok",
    avatar: "/images/clients/erick.jpg",
    quote:
      "Job really understands how to hook viewers in the first few seconds. He builds a clear story arc and knows how to make both long-form videos and reels feel emotional and engaging from start to finish.",
    tags: ["Short-form hooks", "Emotional storytelling"],
  },
  {
    name: "Pedro Estrella",
    role: "CEO, Solar Bill Buster (2020–2023)",
    social: "19.9K+ followers on Instagram",
    avatar: "/images/clients/pedro.jpg",
    quote:
      "Job's edits consistently find and highlight the strongest hooks in my content. The videos he creates don’t just look good—they’ve had a noticeable impact on our sales and how our offers are perceived.",
    tags: ["Offer clarity", "Sales-focused edits"],
  },
  {
    name: "Coby Persin",
    role: "Creator & Entrepreneur",
    social: "1.4M followers on Instagram · 530.6K on TikTok",
    avatar: "/images/clients/coby.jpg",
    quote:
      "Job is incredibly creative and fast. He understands direction quickly, needs very few revisions, and still delivers edits that make a huge impact with minimal back and forth.",
    tags: ["Fast turnaround", "Minimal revisions"],
  },
];

function Clients() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const handleNext = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="clients" className="section">
      <div className="section-inner clients-inner">
        {/* Header */}
        <div className="clients-header">
          <p className="section-label">CLIENT RESPONSE</p>
          <h2 className="section-title">
            Edits that clients keep coming back to.
          </h2>
          <p className="section-subtitle">
            From viral creators to founders and brands—these are the people
            who trusted me with their stories and performance.
          </p>
        </div>

        {/* Main shell: image left, text right */}
        <div className="clients-shell">
          {/* LEFT – stacked photo */}
          <div className="clients-photo-column">
            <div className="clients-photo-stack">
              <div className="clients-photo-back" />
              <div className="clients-photo-front">
                <img
                  className="clients-photo-img"
                  src={active.avatar}
                  alt={active.name}
                />
              </div>
            </div>
          </div>

          {/* RIGHT – quote card */}
          <div className="clients-content-column">
            <div className="clients-quote-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="clients-quote-mark">“</div>

                  <p className="clients-quote-text">{active.quote}</p>

                  <div className="clients-meta">
                    <p className="clients-name">
                      {active.name}
                      <span className="clients-badge">★</span>
                    </p>
                    <p className="clients-role">{active.role}</p>
                    <p className="clients-social">{active.social}</p>
                  </div>

                  {/* Tags */}
                  <div className="clients-tags-row">
                    {active.tags?.map((tag) => (
                      <span key={tag} className="clients-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="clients-nav">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="clients-nav-btn"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="clients-nav-btn"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
