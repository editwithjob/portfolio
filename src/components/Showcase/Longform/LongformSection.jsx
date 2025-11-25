// src/components/Showcase/Longform/LongformSection.jsx
import React from "react";
import "./LongformSection.css";

const longformVideos = [
  {
    id: 1,
    title: "Corporate Interview – International",
    label: "16:9 · Interview · Corporate",
    src: "/videos/longform/international2.mp4",
    thumbnail: "/thumbnails/longform/inter1.png",
  },
  {
    id: 2,
    title: "Educational Explainer – Solar Company",
    label: "16:9 · Educational · Brand",
    src: "/videos/longform/international.mp4",
    thumbnail: "/thumbnails/longform/inter2.png",
  },
  {
    id: 3,
    title: "Ayala Foundation – Mood Setter",
    label: "16:9 · Mood Piece · Atmospheric",
    src: "/videos/longform/local.mp4",
    thumbnail: "/thumbnails/longform/local1.png",
  },
  {
    id: 4,
    title: "Ayala Foundation – Presentation Edit",
    label: "16:9 · Presentation · Clarity-Focused",
    src: "/videos/longform/local2.mp4",
    thumbnail: "/thumbnails/longform/local2.png",
  },
  {
    id: 5,
    title: "High-Impact Promotional – VPN Product",
    label: "16:9 · Promo · Fast-Paced",
    src: "/videos/longform/promo-vpn.mp4",
    thumbnail: "/thumbnails/longform/vpnpromo1.png",
  },
  {
    id: 6,
    title: "YouTube-Style International Edit",
    label: "16:9 · YouTube Style · Dynamic",
    src: "/videos/longform/yt-type-international.mp4",
    thumbnail: "/thumbnails/longform/yt1.png",
  },
];

const squareVideos = [
  {
    id: 1,
    src: "/videos/onebyone/square1.mp4",
    thumbnail: "/thumbnails/onebyone/square1.png",
    title: "Solar Company Ad – Square Cut",
  },
  {
    id: 2,
    src: "/videos/onebyone/square4.mp4",
    thumbnail: "/thumbnails/onebyone/square4.png",
    title: "Emotional Brand Story – Client Piece",
  },
  {
    id: 3,
    src: "/videos/onebyone/square3.mp4",
    thumbnail: "/thumbnails/onebyone/square3.png",
    title: "Solar Panel Offer Ad – Square Format",
  },
  {
    id: 4,
    src: "/videos/onebyone/square2.mp4",
    thumbnail: "/thumbnails/onebyone/square2.png",
    title: "Client Brand Story – Emotional Cut",
  },
];


const LongformSection = ({ onSelectVideo }) => {
  const handleClick = (video, categoryLabel) => {
    if (!onSelectVideo) return;

    onSelectVideo({
      ...video,
      category: categoryLabel,
    });
  };

  return (
    <section className="longform-section">
      {/* Long-form */}
      <div className="longform-block">
        <header className="longform-header">
          <h3>Long-form &amp; YouTube</h3>
          <p>
            Interviews, explainers, promos, and brand films — edited to carry
            the message with clarity and depth.
          </p>
        </header>

        <div className="longform-grid">
          {longformVideos.map((video) => (
            <article
              key={video.id}
              className="longform-card"
              onClick={() => handleClick(video, "Long-form & YouTube")}
            >
              <div className="longform-video-wrapper">
                <video
                  className="longform-video"
                  src={video.src}
                  poster={video.thumbnail}
                  preload="none"
                  muted
                  playsInline
                  loop
                />
              </div>
              <div className="longform-meta">
                <h4>{video.title}</h4>
                <span>{video.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 1:1 */}
      <div className="square-block">
        <header className="square-header">
          <h3>1:1 Social Edits</h3>
          <p>
            Square exports tailored for feeds and promos — built to stop the
            scroll without losing the story.
          </p>
        </header>

        <div className="square-grid">
          {squareVideos.map((video) => (
            <article
              key={video.id}
              className="square-card"
              onClick={() => handleClick(video, "1:1 Social Edit")}
            >
              <div className="square-video-wrapper">
                <video
                  className="square-video"
                  src={video.src}
                  poster={video.thumbnail}
                  preload="none"
                  muted
                  playsInline
                  loop
                />
              </div>
              <div className="square-meta">
                <h4>{video.title}</h4>
                <span>{video.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongformSection;
