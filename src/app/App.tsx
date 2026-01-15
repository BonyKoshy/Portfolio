import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import {
  HomeSkeleton,
  ProjectsSkeleton,
  SimplePageSkeleton,
  PrivacySkeleton,
  NotFoundSkeleton,
} from "@/shared/ui/skeletons";
import { ThemeProvider } from "./providers/ThemeProvider";
import ScrollToTop from "@/shared/lib/ScrollToTop";

// Lazy Load Pages
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contact = lazy(() => import("@/pages/Contact"));
const Certificates = lazy(() => import("@/pages/Certificates"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));

const App = () => {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 flex flex-col">
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
                <Suspense fallback={<SimplePageSkeleton />}>
                  <About />
                </Suspense>
              }
            />

            <Route
              path="/projects"
              element={
                <Suspense fallback={<ProjectsSkeleton />}>
                  <Projects />
                </Suspense>
              }
            />

            <Route
              path="/contact"
              element={
                <Suspense fallback={<SimplePageSkeleton />}>
                  <Contact />
                </Suspense>
              }
            />

            <Route
              path="/certificates"
              element={
                <Suspense fallback={<SimplePageSkeleton />}>
                  <Certificates />
                </Suspense>
              }
            />

            <Route
              path="/privacy"
              element={
                <Suspense fallback={<PrivacySkeleton />}>
                  <PrivacyPolicy />
                </Suspense>
              }
            />

            <Route
              path="*"
              element={
                <Suspense fallback={<NotFoundSkeleton />}>
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
