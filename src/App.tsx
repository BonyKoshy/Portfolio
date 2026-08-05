import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { ThemeProvider } from "@/providers/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/lib/ScrollToTop";
import { StructuredData } from "@/lib/StructuredData";
import TargetCursor from "@/components/ui/TargetCursor";
import { PageLoader } from "@/components/layout/PageLoader";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const Certificates = lazy(() => import("@/pages/Certificates"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const ServerError = lazy(() => import("@/pages/ServerError"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));

/** Root component setting up providers, routing, and global layout. */
const App = () => {
  const location = useLocation();
  const isCertificatesPage = location.pathname === "/certificates";

  return (
    <ThemeProvider>
      <TooltipProvider>
        <PageLoader />
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor={true}
          parallaxOn={true}
          targetSelector=".cursor-target"
        />
        <ScrollToTop />
        <div className="min-h-screen bg-bg-default text-fg-primary flex flex-col">
          <StructuredData />
          <Navbar />

          <div className="grow">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <Home />
                  </Suspense>
                }
              />

              <Route
                path="/projects"
                element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <Projects />
                  </Suspense>
                }
              />

              <Route
                path="/certificates"
                element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <Certificates />
                  </Suspense>
                }
              />

              <Route
                path="/privacy"
                element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <PrivacyPolicy />
                  </Suspense>
                }
              />

              <Route
                path="/500"
                element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <ServerError />
                  </Suspense>
                }
              />

              <Route
                path="*"
                element={
                  <Suspense fallback={<div className="min-h-screen" />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </div>

          {!isCertificatesPage && <Footer />}
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
