import ReactDOM from "react-dom/client";
import React from "react";

import "./tailwind.css";      // MUST BE FIRST
import "./styles/Global.css"; // Your custom styles
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
