/**
 * Entry point of the application.
 * Sets up the React root, global providers (Helmet, ErrorBoundary), and routing.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./providers/ErrorBoundary";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
          <MotionConfig reducedMotion="user">
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </MotionConfig>
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
