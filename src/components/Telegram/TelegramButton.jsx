import { FaTelegramPlane } from "react-icons/fa";
import "../SocialButtons/SocialButtons.css";
import "./TelegramButton.css";

export default function TelegramButton() {
  const message = encodeURIComponent("Hi Job! I saw your portfolio website.");
  const username = "jobaliermo"; 
  const url = `https://t.me/${username}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="platform-btn telegram-btn"
      aria-label="Message on Telegram"
    >
      <FaTelegramPlane className="tg-icon" />
    </a>
  );
}
