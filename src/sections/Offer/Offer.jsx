// src/sections/Offer/Offer.jsx
import { motion } from "framer-motion";
import "./Offer.css";

const services = [
  {
    title: "UGC Ads",
    desc: "High-retention, hook-first UGC edits built for paid social. Every second is crafted to grab attention fast, highlight the offer clearly, and drive conversions without feeling forced.",
    tags: ["UGC", "Hook-First", "CTA-Focused"],
  },
  {
    title: "Storytelling",
    desc: "Edits designed to feel cinematic and emotional—structured with clear pacing, strong opening hooks, and narrative beats that hold attention from start to finish.",
    tags: ["Hook Driven", "Intense Cuts", "Emotional Flow"],
  },
  {
    title: "Corporate Videos",
    desc: "Polished and professional edits for interviews, testimonials, and company profiles. Clean pacing, clear messaging, and a tone that matches your brand’s credibility.",
    tags: ["Professional", "Structured Messaging", "Clean Delivery"],
  },
  {
    title: "Brand Videos",
    desc: "High-impact edits that tell your brand’s story clearly and quickly. Built around a strong hook, supported by compelling visuals, and ending with a confident CTA.",
    tags: ["Hook", "Body Message", "CTA-Ready"],
  },
  {
    title: "Long-form to Reels",
    desc: "Transform talking-head, podcasts, or long-form content into high-retention reels. Optimized for pacing, story clarity, and scroll-stopping openings.",
    tags: ["Hook First", "Story Cutdowns", "Smart Pacing"],
  },
  {
    title: "Full post-production support",
    desc: "From rough cut to final delivery: pacing, titles, color, sound, and delivery-ready exports.",
    tags: ["End-to-end", "Delivery-ready"],
  },
];

function Offer() {
  return (
    <section id="offer" className="section">
      <div className="section-inner">
        <div className="offer-header">
          <div>
            <p className="section-label">WHAT I OFFER</p>
            <h2 className="section-title">Editing built to perform and feel cinematic.</h2>
            <p className="section-subtitle">
              I treat every project like a small film: strong hooks, clear
              structure, premium polish, and an understanding of what the video
              is supposed to achieve.
            </p>
          </div>
        </div>

        <div className="offer-grid">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              className="offer-card glass-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.04,
              }}
              whileHover={{ y: -6, boxShadow: "0 25px 60px rgba(0,0,0,0.9)" }}
            >
              <header className="offer-card-header">
                <span className="offer-card-dot" />
                <h3>{service.title}</h3>
              </header>
              <p className="offer-card-desc">{service.desc}</p>
              <div className="offer-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="offer-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offer;
