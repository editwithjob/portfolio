import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";


import Navbar from "./components/Navbar/Navbar.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";
import AnimatedBackground from "./components/Background/AnimatedBackground.jsx";

import Home from "./sections/Home/Home.jsx";
import About from "./sections/About/About.jsx";
import Offer from "./sections/Offer/Offer.jsx";
import Showcase from "./components/Showcase/Showcase.jsx";
import Clients from "./sections/Clients/Clients.jsx";
import Contact from "./sections/Contact/Contact.jsx";

import VideoModal from "./components/VideoModal/VideoModal.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalVideo, setModalVideo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoOpen = (video) => setModalVideo(video);
  const handleVideoClose = () => setModalVideo(null);

  // 🔥 Add/remove class on body to hide navbar + disable scroll
  useEffect(() => {
    if (modalVideo) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalVideo]);

  return (
    <div className="app-root">
      <AnimatedBackground />

      <AnimatePresence>{isLoading && <Preloader key="preloader" />}</AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />

          <main>
            <Home />
            <About />
            <Offer />
            <Showcase onVideoClick={handleVideoOpen} />
            <Clients />
            <Contact />
          </main>

          <AnimatePresence>
            {modalVideo && (
              <VideoModal
                key="video-modal"
                isOpen={!!modalVideo}
                item={modalVideo}
                onClose={handleVideoClose}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
