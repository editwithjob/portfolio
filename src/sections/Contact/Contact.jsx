// src/sections/Contact/Contact.jsx
import { motion } from "framer-motion";
import "./Contact.css";
import WhatsAppButton from "../../components/WhatsApp/WhatsAppButton.jsx";
import TelegramButton from "../../components/Telegram/TelegramButton.jsx";
import ViberButton from "../../components/Viber/ViberButton.jsx";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-inner contact-inner glass-card">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label">LET&apos;S BUILD YOUR NEXT EDIT</p>
          <h2 className="section-title">
            Need a video editor who gets storytelling, pacing, and performance?
          </h2>
          <p className="section-subtitle">
            From UGC ads to YouTube episodes and cinematic edits — I help you shape the story, sharpen the pacing, and make the visuals unforgettable.
          </p>

          <div className="contact-actions">
            <a href="mailto:jobaliermo0917@gmail.com">
              <button className="btn-primary">
                Send me your proposition
                <span>✉</span>
              </button>
            </a>
          </div>

          <div className="contact-details">
            <p>
              Email: <span>jobaliermo0917@gmail.com</span>
            </p>
            <p>
              Available for: <span>Remote · PH-based · International clients</span>
            </p>
          </div>
        </motion.div>

        <motion.div
  className="contact-right"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
>
  <div className="contact-logo-mark">
    <div className="logo-mark">
    </div>
  </div>

  {/* NEW IMPROVED CONTACT FOOTER TEXT */}
  <div className="contact-footer-text">
    <p className="cft-trust">
      Trusted by creators and brands across PH and international clients.
    </p>

    <div className="cft-badges">
      <span>🎬 YouTubers</span>
      <span>📱 UGC Creators</span>
      <span>🏢 Agencies & Brands</span>
      <span>🌍 Remote / International</span>
    </div>

    <p className="cft-contact">
      Reach out via email or share a link to your raw footage — whichever works
      best for your workflow.
    </p>
    {/* NEW MINI TITLE */}
  <p className="cft-message-title">Message me on these platforms:</p>


  {/* ROW OF BUTTONS */}
  <div className="contact-platform-row">
    <WhatsAppButton />
    <TelegramButton />
    <ViberButton />
   </div>
 
  </div>
</motion.div>
      </div>
    </section>
  );
}

export default Contact;
