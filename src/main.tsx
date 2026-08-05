/**
 * Entry point of the application.
 * Sets up the React root, global providers, and routing.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import "./styles/index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MotionConfig>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
