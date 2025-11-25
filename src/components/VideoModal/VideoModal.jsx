// src/components/VideoModal/VideoModal.jsx
import React from "react";
import "./VideoModal.css";

const VideoModal = ({ isOpen, video, onClose }) => {
  if (!isOpen || !video) return null;

  const { title, label, src, category, description } = video;

  const fallbackDescription =
    description ||
    `A ${label?.toLowerCase() || "custom"} edit crafted for clean pacing, clarity, and impact.`;

  const handleCtaClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    onClose();

    setTimeout(() => {
      const contact = document.getElementById("contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div
        className="video-modal-shell"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="video-modal-header">
          <div className="video-modal-avatar">
            <span>J</span>
          </div>

          <div className="video-modal-title-group">
            <h3>{title}</h3>
            <p>
              {category && (
                <span className="video-modal-category">{category} · </span>
              )}
              <span className="video-modal-label">{label}</span>
            </p>
          </div>

          <button
            type="button"
            className="video-modal-close"
            aria-label="Close video"
            onClick={onClose}
          >
            ✕
          </button>
        </header>

        {/* Body */}
        <div className="video-modal-main">
          <div className="lag-warning fade-out">
            ⚠️ If the video feels laggy, try clicking the fullscreen button
            below for smoother playback.
          </div>

          <div className="video-modal-player">
            <video
              className="video-modal-video"
              src={src}
              controls
              playsInline
              autoPlay
            />
          </div>

          <p className="video-modal-description">{fallbackDescription}</p>

          <p className="video-modal-cta">
            Want something edited in this style?{" "}
            <a href="#contact" onClick={handleCtaClick}>
              Reach out and let&apos;s talk.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
