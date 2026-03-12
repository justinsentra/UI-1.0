import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// Register generated personas before app renders
import "./data/personas/mcgi";
import "./data/personas/pn-crm";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
