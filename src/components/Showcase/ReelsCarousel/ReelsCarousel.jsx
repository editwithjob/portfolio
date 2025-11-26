// src/components/Showcase/ReelsCarousel/ReelsCarousel.jsx
import React, { useState } from "react";
import "./ReelsCarousel.css";

const reels = [
  {
    id: 1,
    title: "Hook-First Ali Abdaal Ad",
    label: "Ali Abdaal Style · High Retention · Hook-First",
    src: "videos/reels/reels1.mp4",
    thumbnail: "thumbnails/reels/reels1.png",
  },
  {
    id: 2,
    title: "Devin Jatho Snappy Reel",
    label: "Devin Jatho Style · Snappy Cuts · High Retention",
    src: "videos/reels/reels2.mp4",
    thumbnail: "thumbnails/reels/reels2.png",
  },
  {
    id: 3,
    title: "Clean Ali Abdaal Explainer",
    label: "Ali Abdaal Style · Educational · Hook-Focused",
    src: "videos/reels/reels3.mp4",
    thumbnail: "thumbnails/reels/reels3.png",
  },
  {
    id: 4,
    title: "Coby Clones It – Viral Cut",
    label: "Story Driven · B-Roll Heavy · High Retention",
    src: "videos/reels/reels4.mp4",
    thumbnail: "thumbnails/reels/reels4.png",
    views: "9.1M",
  },
  {
    id: 5,
    title: "Lifestyle Travel Montage",
    label: "Montage · Aesthetic · Travel/Lifestyle",
    src: "videos/reels/reels5.mp4",
    thumbnail: "thumbnails/reels/reels5.png",
  },
  {
    id: 6,
    title: "Direct-Response UGC Ad",
    label: "UGC · Product Showcase · Paid Social",
    src: "videos/reels/reels6.mp4",
    thumbnail: "thumbnails/reels/reels6.png",
  },
  {
    id: 7,
    title: "Longform to Short Emotional Cut",
    label: "Longform→Shortform · Emotional · Refined Pacing",
    src: "videos/reels/reels7.mp4",
    thumbnail: "thumbnails/reels/reels7.png",
  },
  {
    id: 8,
    title: "Coby Finds It – Viral Location Hunt",
    label: "Location Hunt · Story Driven · Viral Edit",
    src: "videos/reels/reels8.mp4",
    thumbnail: "thumbnails/reels/reels8.png",
    views: "10.1M",
  },
  {
    id: 9,
    title: "Podcast Clip – Clean Cut",
    label: "Podcast · Clean Audio · Fast Pacing",
    src: "videos/reels/reels9.mp4",
    thumbnail: "thumbnails/reels/reels9.png",
  },
  {
    id: 10,
    title: "Emotional Brand Reel",
    label: "Branding · Emotional · High Pacing",
    src: "videos/reels/reels10.mp4",
    thumbnail: "thumbnails/reels/reels10.png",
  },
  {
    id: 11,
    title: "Personal Narrative Reel",
    label: "Personal · Narrative · Aesthetic",
    src: "videos/reels/reels11.mp4",
    thumbnail: "thumbnails/reels/reels11.png",
  },
  {
    id: 12,
    title: "High-Energy Experiment Cut",
    label: "Experimental · Fast Pacing · Creative Cuts",
    src: "videos/reels/reels12.mp4",
    thumbnail: "thumbnails/reels/reels12.png",
  },
  {
    id: 13,
    title: "Hook-Driven Brand Reel",
    label: "Branding · Emotional · Hook-First",
    src: "videos/reels/reels13.mp4",
    thumbnail: "thumbnails/reels/reels13.png",
  },
  {
    id: 14,
    title: "Trend-Based Story Experiment",
    label: "Experimental · Trend-Based · Creative Motion",
    src: "videos/reels/reels14.mp4",
    thumbnail: "thumbnails/reels/reels14.png",
  },
  {
    id: 15,
    title: "Devin Jatho Punchy Reel",
    label: "Devin Jatho Style · Snappy · High Retention",
    src: "videos/reels/reels15.mp4",
    thumbnail: "thumbnails/reels/reels15.png",
  },
];

function getVisibleReels(centerIndex) {
  const visible = [];
  const total = reels.length;

  for (let offset = -2; offset <= 2; offset++) {
    const index = (centerIndex + offset + total) % total;
    const reel = reels[index];

    visible.push({
      reel,
      offset,
      isCenter: offset === 0,
    });
  }

  return visible;
}

function ReelsCarousel({ onSelectVideo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const visibleReels = getVisibleReels(currentIndex);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reels.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const handleCardClick = (reel) => {
    if (!onSelectVideo) return;
    onSelectVideo({
      ...reel,
      category: "Reels & Short-form",
    });
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) < 40) {
      setTouchStartX(null);
      setTouchEndX(null);
      return;
    }

    if (diff > 0) {
      handleNext();
    } else {
      handlePrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="reels-section">
      <div className="reels-header">
        <div>
          <h3 className="reels-title">Reels &amp; Short-form</h3>
          <p className="reels-subtitle">
            UGC ads, brand reels, and viral-style edits built to hook fast and
            hold attention.
          </p>
        </div>
      </div>

      <div className="reels-track-wrapper">
        <button
          className="reels-nav-btn reels-nav-btn--left"
          type="button"
          onClick={handlePrev}
          aria-label="Previous reel"
        >
          ‹
        </button>

        <div
          className="reels-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="reels-track">
            {visibleReels.map(({ reel, isCenter }) => (
              <article
                key={reel.id}
                className={`reel-card ${
                  isCenter ? "reel-card--active" : "reel-card--side"
                }`}
                onClick={() => handleCardClick(reel)}
              >
                <div className="reel-video-wrapper">
                  {reel.views && (
                    <div className="reel-badge">⭐ {reel.views} views</div>
                  )}

                  <video
                    className="reel-video"
                    src={reel.src}
                    poster={reel.thumbnail}
                    preload="none"
                    muted
                    playsInline
                    loop
                  />
                  <div className="reel-play-badge">▶</div>
                </div>

                <div className="reel-meta">
                  <h4 className="reel-title">{reel.title}</h4>
                  <p className="reel-label">{reel.label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className="reels-nav-btn reels-nav-btn--right"
          type="button"
          onClick={handleNext}
          aria-label="Next reel"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default ReelsCarousel;
