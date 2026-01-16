import Logo from "@/shared/ui/Logo/Logo";
import { useEffect, useState } from "react";
import { useLoading } from "@/shared/lib/context/LoadingContext";

export const GlobalLoader = () => {
  const { isLoading } = useLoading();
  // Controls the visibility of the overlay container
  const [isVisible, setIsVisible] = useState(false);
  // Controls the opacity for fade-in/out effects
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      // Small timeout to allow render before fading in
      setTimeout(() => setOpacity(1), 10);
    }
  }, [isLoading]);

  const handleLogoComplete = () => {
    // Start fade out
    setOpacity(0);

    // Wait for transition to finish before hiding container
    setTimeout(() => {
      setIsVisible(false);
      // Dispatch event for prerendering
      document.dispatchEvent(new Event("prerender-trigger"));
    }, 500); // Matches duration-500
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
                fixed inset-0 z-99999 
                flex items-center justify-center 
                bg-background 
                transition-opacity duration-500
            `}
      style={{ opacity }}
    >
      <div className="w-24 h-24 md:w-32 md:h-32">
        {/* 
                    Pass isLoading from context. 
                    When context.isLoading becomes false, Logo triggers 'intro' animation.
                    When 'intro' finishes, it calls onComplete.
                 */}
        <Logo isLoading={isLoading} onComplete={handleLogoComplete} />
      </div>
    </div>
  );
};
