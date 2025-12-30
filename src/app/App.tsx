import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../widgets/Navbar/Navbar";
import PageSkeleton from "../shared/ui/PageSkeleton/PageSkeleton";
import { ThemeProvider } from "../features/theme/ThemeContext";

// Lazy Load Pages
const Home = lazy(() => import("../pages/Home"));

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
        <Navbar />

        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={<div className="pt-32 text-center">404 Not Found</div>}
            />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;

