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
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 flex flex-col">
        <Navbar />

        {/* Wrap Routes in a single Suspense or granular? Plan said granular. */}
        {/* However, Navbar/Footer are outside. We need skeletons that show inside the layout or full page skeletons? 
            Since Navbar/Footer are Fixed/Global, we probably only want to skeleton the CONTENT.
            But user asked for "make bar shaped skelton and reuse that on all for showing navbar and footer." 
            This implies full page skeleton replacement OR content skeleton.
            If Navbar is rendered by App, we don't need NavbarSkeleton unless App is suspending?
            But App renders Navbar immediately. 
            So we only need Content Skeletons for the Routes.
            Except PrivacyPolicy which might want to look like it has its specific structure.
        */}
        <div className="flex-grow">
            <Routes>
              <Route path="/" element={
                 <Suspense fallback={<PageSkeleton><PageContentSkeleton /></PageSkeleton>}>
                    <Home />
                 </Suspense>
              } />
              
              <Route path="/about" element={
                 <Suspense fallback={<PageSkeleton><PageContentSkeleton /></PageSkeleton>}>
                    <About />
                 </Suspense>
              } />

              <Route path="/projects" element={
                 <Suspense fallback={<PageSkeleton><PageContentSkeleton /></PageSkeleton>}>
                    <Projects />
                 </Suspense>
              } />

              <Route path="/contact" element={
                 <Suspense fallback={<PageSkeleton><PageContentSkeleton /></PageSkeleton>}>
                    <Contact />
                 </Suspense>
              } />

              <Route path="/certificates" element={
                 <Suspense fallback={<PageSkeleton><PageContentSkeleton /></PageSkeleton>}>
                    <Certificates />
                 </Suspense>
              } />

              <Route path="/privacy" element={
                  <Suspense fallback={<PageSkeleton><PageContentSkeleton /></PageSkeleton>}>
                    <PrivacyPolicy />
                  </Suspense>
              } />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

