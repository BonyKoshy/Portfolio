/**
 * Entry point of the application.
 * Sets up the React root, global providers (Helmet, ErrorBoundary), and routing.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "./providers/ErrorBoundary";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </ErrorBoundary>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
