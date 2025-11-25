// src/sections/About/About.jsx
import { motion } from "framer-motion";
import "./About.css";
import CountUp from "../../components/Countup/CountUp.jsx";

const tools = [
  {
    name: "Adobe Premiere Pro",
    tag: "Primary NLE",
    logo: "/images/tools/premiere.png",
  },
  {
    name: "DaVinci Resolve",
    tag: "Color & finishing",
    logo: "/images/tools/davinci.png",
  },
  {
    name: "CapCut",
    tag: "Fast UGC workflows",
    logo: "/images/tools/capcut.png",
  },
  {
    name: "Filmora",
    tag: "Light edits",
    logo: "/images/tools/filmora.png",
  },
];

// ✨ Animation variants for stats block
const statsContainerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const counterVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const pillVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner about-inner">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label">ABOUT</p>
          <h2 className="section-title">The editor behind the timeline.</h2>
          <p className="section-subtitle">
            I&apos;m Ehnridge Job, a video editor who obsesses over pacing,
            structure, and how every frame feels. I build edits that hold
            attention, move the story forward, and still respect performance
            and conversions.
          </p>

          <div className="about-points">
            <div>
              <h4>How I cut</h4>
              <ul>
                <li>High-retention pacing without feeling rushed</li>
                <li>Hooks that land in the first seconds</li>
                <li>Clear story arcs from open to close</li>
              </ul>
            </div>
            <div>
              <h4>How I polish</h4>
              <ul>
                <li>Cinematic color grading tailored to each project</li>
                <li>Sound design that actually feels intentional</li>
                <li>Clean motion, transitions, and on-brand graphics</li>
              </ul>
            </div>
          </div>

          {/* COUNTER + STATS WRAPPER (animated) */}
          <motion.div
            className="about-stats-container"
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* COUNTUP CARD */}
            <motion.div className="about-counter-card" variants={counterVariant}>
              <span className="counter-value">
                <CountUp from={0} to={350} duration={2} />+
              </span>
              <span className="counter-label">Edited videos delivered</span>
            </motion.div>

            {/* THREE STAT PILLS */}
            <div className="about-stats-pills">
              <motion.span className="about-pill" variants={pillVariant}>
                Video editor since 2019
              </motion.span>
              <motion.span className="about-pill" variants={pillVariant}>
                Specialized in graphical reels &amp; storytelling
              </motion.span>
              <motion.span className="about-pill" variants={pillVariant}>
                20M+ total views edited
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-right glass-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        >
          <p className="about-right-label">TOOLS I CUT WITH</p>
          <div className="about-tools">
            {tools.map((tool) => (
              <div key={tool.name} className="tool-card">
                <div className="tool-icon">
                  <img src={tool.logo} alt={tool.name} />
                </div>
                <div className="tool-meta">
                  <span className="tool-name">{tool.name}</span>
                  <span className="tool-tag">{tool.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="about-right-caption">
            Whether it&apos;s a raw UGC shoot, a corporate interview, or a
            multi-layer documentary timeline – I keep the story clear, the
            viewer hooked, and the visuals cinematic.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
