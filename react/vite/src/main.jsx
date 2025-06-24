import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ToxicAM from "./Toxicam.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToxicAM />
  </>
);
