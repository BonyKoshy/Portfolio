import Logo from "@/shared/ui/Logo/Logo";
import { useEffect, useState } from "react";
import { useLoading } from "@/shared/lib/context/LoadingContext";

/** Global loading overlay that displays the logo animation during page transitions. */
export const GlobalLoader = () => {
  const { isLoading } = useLoading();
  const [shouldRender, setShouldRender] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      requestAnimationFrame(() => setOpacity(1));
      return;
    }

    // Loading finished, start fade out.
    setOpacity(0);
    const timer = setTimeout(() => {
      setShouldRender(false);
      // Dispatch event for prerendering
      document.dispatchEvent(new Event("prerender-trigger"));
    }, 500);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // Lock scroll when visible/rendering.
  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`
                fixed inset-0 z-[9999] 
                flex items-center justify-center 
                bg-bg-default 
                transition-opacity duration-500
            `}
      style={{ opacity }}
    >
      <div className="w-24 h-24 md:w-32 md:h-32">
        <Logo isLoading={true} />
      </div>
    </div>
  );
};
