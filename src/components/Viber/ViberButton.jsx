import { FaViber } from "react-icons/fa";
import "../SocialButtons/SocialButtons.css";
import "./ViberButton.css";

export default function ViberButton() {
  const phone = "639054842681"; // your number
  const message = encodeURIComponent("Hi Job! I saw your portfolio website.");
  const url = `viber://chat?number=%2B${phone}&text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="platform-btn viber-btn"
      aria-label="Message on Viber"
    >
      <FaViber className="viber-icon" />
    </a>
  );
}
