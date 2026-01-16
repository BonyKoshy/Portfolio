import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useScrollToAnchor = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle initial scroll on page load/navigation if hash is present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Small timeout to ensure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash, location.pathname]);

  const scrollTo = (path: string, elementId?: string) => {
    if (location.pathname !== path) {
      navigate(path + (elementId ? `#${elementId}` : ""));
    } else if (elementId) {
      document
        .getElementById(elementId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return scrollTo;
};
