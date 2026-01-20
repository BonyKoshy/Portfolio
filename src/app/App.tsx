import { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

import { ThemeProvider } from "./providers/ThemeProvider";
import ScrollToTop from "@/shared/lib/ScrollToTop";
import { StructuredData } from "@/shared/lib/seo/StructuredData";
import { HomeSkeleton } from "@/widgets/Skeletons/HomeSkeleton";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contact = lazy(() => import("@/pages/Contact"));
const Certificates = lazy(() => import("@/pages/Certificates"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));

/** Root component setting up providers, routing, and global layout. */
const App = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 flex flex-col">
        <StructuredData />
        <Navbar />

        <div className="grow">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<HomeSkeleton />}>
                  <Home />
                </Suspense>
              }
            />

            <Route
              path="/about"
              element={
                <Suspense fallback={<div className="min-h-screen" />}>
                  <About />
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
              path="/contact"
              element={
                <Suspense fallback={<div className="min-h-screen" />}>
                  <Contact />
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

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
