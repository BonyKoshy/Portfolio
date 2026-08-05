import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

import { ThemeProvider } from "./providers/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/shared/lib/ScrollToTop";
import { StructuredData } from "@/shared/lib/seo/StructuredData";
import TargetCursor from "@/shared/ui/TargetCursor/TargetCursor";
import { PageLoader } from "@/widgets/PageLoader";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const Certificates = lazy(() => import("@/pages/Certificates"));
const NotFound = lazy(() => import("@/pages/NotFound"));
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
