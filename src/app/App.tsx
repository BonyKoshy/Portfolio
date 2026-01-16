import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";

import { ThemeProvider } from "./providers/ThemeProvider";
import ScrollToTop from "@/shared/lib/ScrollToTop";
import { GlobalLoader } from "@/shared/ui/GlobalLoader/GlobalLoader";
import { LoadingProvider } from "@/shared/lib/context/LoadingContext";
import { SuspenseTrigger } from "@/shared/ui/GlobalLoader/SuspenseTrigger";
import { StructuredData } from "@/shared/lib/seo/StructuredData";

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
      <LoadingProvider>
        <ScrollToTop />
        <GlobalLoader />
        <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 flex flex-col">
          <StructuredData />
          <Navbar />

          <div className="grow">
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={null}>
                    <Home />
                  </Suspense>
                }
              />

              <Route
                path="/about"
                element={
                  <Suspense fallback={<SuspenseTrigger />}>
                    <About />
                  </Suspense>
                }
              />

              <Route
                path="/projects"
                element={
                  <Suspense fallback={<SuspenseTrigger />}>
                    <Projects />
                  </Suspense>
                }
              />

              <Route
                path="/contact"
                element={
                  <Suspense fallback={<SuspenseTrigger />}>
                    <Contact />
                  </Suspense>
                }
              />

              <Route
                path="/certificates"
                element={
                  <Suspense fallback={<SuspenseTrigger />}>
                    <Certificates />
                  </Suspense>
                }
              />

              <Route
                path="/privacy"
                element={
                  <Suspense fallback={<SuspenseTrigger />}>
                    <PrivacyPolicy />
                  </Suspense>
                }
              />

              <Route
                path="*"
                element={
                  <Suspense fallback={<SuspenseTrigger />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </div>

          <Footer />
        </div>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
