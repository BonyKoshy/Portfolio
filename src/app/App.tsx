import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import PageSkeleton from "../shared/ui/PageSkeleton/PageSkeleton";
import { PageContentSkeleton } from "../shared/ui/skeletons";
import { ThemeProvider } from "./providers/ThemeProvider";

// Lazy Load Pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const Certificates = lazy(() => import("../pages/Certificates"));
const NotFound = lazy(() => import("../pages/NotFound"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));

const App = () => {
  const fallback = (
    <PageSkeleton>
      <PageContentSkeleton />
    </PageSkeleton>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={fallback}>
                  <Home />
                </Suspense>
              }
            />

            <Route
              path="/about"
              element={
                <Suspense fallback={fallback}>
                  <About />
                </Suspense>
              }
            />

            <Route
              path="/projects"
              element={
                <Suspense fallback={fallback}>
                  <Projects />
                </Suspense>
              }
            />

            <Route
              path="/contact"
              element={
                <Suspense fallback={fallback}>
                  <Contact />
                </Suspense>
              }
            />

            <Route
              path="/certificates"
              element={
                <Suspense fallback={fallback}>
                  <Certificates />
                </Suspense>
              }
            />

            <Route
              path="/privacy"
              element={
                <Suspense fallback={fallback}>
                  <PrivacyPolicy />
                </Suspense>
              }
            />

            <Route
              path="*"
              element={
                <Suspense fallback={fallback}>
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
