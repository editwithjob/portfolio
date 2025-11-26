import { FaWhatsapp } from "react-icons/fa";
import "../SocialButtons/SocialButtons.css";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phone = "639054842681"; // 63 + your PH number
  const message = encodeURIComponent("Hi Job! I saw your portfolio website.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="platform-btn whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="wa-icon" />
    </a>
  );
}
