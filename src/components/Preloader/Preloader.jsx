// src/components/Preloader/Preloader.jsx
import { motion } from "framer-motion";
import "./Preloader.css";

function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="preloader-inner">
        <motion.div
          className="preloader-logo"
          initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
<div className="navbar-avatar">
  <img src="/images/logo.png" alt="Logo" />
</div>
          <div className="preloader-logo-text">
            <span>Portfolio</span>
            <span>Studio-grade Video Editing</span>
          </div>
        </motion.div>

        <motion.div
          className="preloader-bar"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        />

        <motion.p
          className="preloader-caption"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Initializing timeline, color, and sound…
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Preloader;
