// src/components/Showcase/Showcase.jsx
import React, { useState, useEffect } from "react";
import "./Showcase.css";

import ReelsCarousel from "./ReelsCarousel/ReelsCarousel.jsx";
import LongformSection from "./Longform/LongformSection.jsx";
import VideoModal from "../VideoModal/VideoModal.jsx";

function Showcase() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectVideo = (videoData) => {
    setSelectedVideo(videoData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  return (
    <section id="showcase" className="section">
      <div className="section-inner">
        <div className="showcase-header">
          <div>
            <p className="section-label">SHOWCASE</p>
            <h2 className="section-title">
              Edits that stop the scroll and do the talking for you.
            </h2>
          </div>
        </div>

        <ReelsCarousel onSelectVideo={handleSelectVideo} />
        <LongformSection onSelectVideo={handleSelectVideo} />
      </div>

      <VideoModal
        isOpen={isModalOpen}
        video={selectedVideo}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export default Showcase;
