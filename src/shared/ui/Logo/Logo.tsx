import { useState, useEffect } from "react";

interface LogoProps {
  className?: string;
  isLoading?: boolean;
  onComplete?: () => void;
}

/** Interactive SVG Logo component with loading, intro, and hover animations. */
const Logo = ({ className = "", isLoading = false, onComplete }: LogoProps) => {
  const [animationState, setAnimationState] = useState<
    "loading" | "intro" | "idle" | "hovering"
  >("loading");

  useEffect(() => {
    if (isLoading) {
      setAnimationState("loading");
    } else {
      setAnimationState("intro");
    }
  }, [isLoading]);

  const handleHover = () => {
    if (animationState === "idle") {
      setAnimationState("hovering");
    }
  };

  const handleAnimationEnd = () => {
    if (animationState === "intro") {
      setAnimationState("idle");
      if (onComplete) onComplete();
    } else if (animationState === "hovering") {
      setAnimationState("idle");
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center ${className} ${
        animationState === "idle" ? "cursor-pointer" : ""
      }`}
      aria-label="Bony Koshy Logo"
      role="img"
      onMouseEnter={handleHover}
      onClick={handleHover}
    >
      <svg
        viewBox="0 0 604 726"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-sm"
        style={{ overflow: "visible" }}
      >
        <path
          d="M61.0964 390.845C-33.0359 152.236 37.348 98.6127 243.597 31.3452C449.845 -35.9223 592.513 214.005 393.597 307.845C587.597 259.345 694.097 583.345 406.097 689.845C212.533 739.938 70.9877 668.127 110.597 493.845C127.208 420.756 166.097 392.845 210.097 333.845C269.2 267.351 303.474 229.957 300.597 189.345C297.02 138.858 240.258 132.588 230.597 180.845C198.076 343.283 243.096 564.345 302.097 569.845C348.597 577.845 404.226 536.284 380.597 434.845C353.379 364.523 302.597 346.845 243.597 417.845"
          className="stroke-fg-secondary transition-colors duration-500"
          strokeWidth="40"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M61.0964 390.845C-33.0359 152.236 37.348 98.6127 243.597 31.3452C449.845 -35.9223 592.513 214.005 393.597 307.845C587.597 259.345 694.097 583.345 406.097 689.845C212.533 739.938 70.9877 668.127 110.597 493.845C127.208 420.756 166.097 392.845 210.097 333.845C269.2 267.351 303.474 229.957 300.597 189.345C297.02 138.858 240.258 132.588 230.597 180.845C198.076 343.283 243.096 564.345 302.097 569.845C348.597 577.845 404.226 536.284 380.597 434.845C353.379 364.523 302.597 346.845 243.597 417.845"
          className={`
            stroke-fg-primary transition-colors duration-500

            ${animationState === "loading" ? "animate-logo-loop" : ""} 
            ${animationState === "intro" ? "animate-logo-intro" : ""}
            ${animationState === "hovering" ? "animate-logo-hover-cycle" : ""}
          `}
          strokeWidth="40"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3500"
          strokeDashoffset={animationState === "idle" ? "0" : "3500"}
          onAnimationEnd={handleAnimationEnd}
        />
      </svg>
    </div>
  );
};

export default Logo;
