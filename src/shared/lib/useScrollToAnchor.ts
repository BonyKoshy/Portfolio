import { useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/** Hook to handle smooth scrolling to anchor links with an offset. */
export const useScrollToAnchor = (offset = 80) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = useCallback(
    (path: string, anchorId: string) => {
      if (location.pathname !== path) {
        navigate(`${path}#${anchorId}`);
      } else {
        const element = document.getElementById(anchorId);
        if (element) {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Optionally update URL
          // window.history.pushState(null, "", `#${anchorId}`);
        }
      }
    },
    [location.pathname, navigate, offset]
  );

  useEffect(() => {
    // Handles initial hash scroll on page load.
    if (window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }

    // Handles subsequent hash changes.
    const handleHashChange = () => {
      const targetId = window.location.hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [offset]);

  return scrollTo;
};
