// src/components/Navbar/Navbar.jsx
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "offer", label: "What I Offer" },
  { id: "showcase", label: "Showcase" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

function Navbar({ isVideoModalOpen = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Shrink / darken navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: track which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -55% 0px",
      threshold: 0.3,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (NAV_LINKS.some((link) => link.id === id)) {
            setActiveId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    NAV_LINKS.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`navbar
        ${isScrolled ? "navbar--scrolled" : ""}
        ${isVideoModalOpen ? "navbar--hidden" : ""}`}
    >
      <div className="navbar-shell">
        {/* Brand / avatar */}
        <div className="navbar-left">
          <div className="navbar-avatar">
  <img src="/images/logo.png" alt="Logo" />
</div>

          <div className="navbar-title-block">
            <span className="navbar-title">Ehnridge Job</span>
            <span className="navbar-subtitle">Video Editor</span>
          </div>
        </div>

        {/* Desktop links */}
        <nav className="navbar-links">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`navbar-link ${
                activeId === link.id ? "navbar-link--active" : ""
              }`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`navbar-menu-toggle ${
            mobileOpen ? "navbar-menu-toggle--active" : ""
          }`}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`navbar-mobile-panel ${
          mobileOpen ? "navbar-mobile-panel--open" : ""
        }`}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            className={`navbar-mobile-link ${
              activeId === link.id ? "navbar-mobile-link--active" : ""
            }`}
            onClick={() => handleNavClick(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
