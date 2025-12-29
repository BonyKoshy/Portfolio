import { useState } from "react";

interface LogoProps {
  className?: string;
  isLoading?: boolean;
}

const Logo = ({ className = "", isLoading = false }: LogoProps) => {
  const [isInteracting, setIsInteracting] = useState(false);

  const triggerAnimation = () => {
    if (isLoading) return;
    setIsInteracting(true);
  };

  const handleAnimationEnd = () => {
    setIsInteracting(false);
  };

  return (
    <div
      className={`relative flex items-center justify-center text-(--text-primary) ${className} ${!isLoading ? "cursor-pointer" : ""}`}
      aria-label="Bony Koshy Logo"
      onMouseEnter={triggerAnimation}
      onClick={triggerAnimation}
    >
      <svg
        viewBox="0 0 314 519"
        className="h-full w-full drop-shadow-sm"
        style={{ overflow: "visible" }}
      >
        {/* Background Ghost Layer */}
        {/* Darkened the light-mode stroke (zinc-300) for better visibility */}
        <path
          d="M44.941 470.693 C18.441 417.693 -5.02007 304.707 107.441 249.693 C109.009 248.688 128.023 235.343 129.554 234.331 C205.932 183.84 285.941 55.6932 216.441 26.1932 C108.441 -1.30684 133.297 154.632 129.554 234.331 C127.476 278.563 128.52 325.098 129.02 360.063 C129.43 466.074 144.04 490.295 198.835 494.991 C243.225 497.53 309.203 457.584 285.941 355.193 C268.663 297.025 177.941 284.874 177.941 344.193"
          className="fill-none stroke-zinc-300 dark:stroke-zinc-800 transition-colors duration-500"
          strokeWidth="46"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Foreground Active Layer */}
        {/* Changed to stroke-current to inherit parent text color */}
        <path
          d="M44.941 470.693 C18.441 417.693 -5.02007 304.707 107.441 249.693 C109.009 248.688 128.023 235.343 129.554 234.331 C205.932 183.84 285.941 55.6932 216.441 26.1932 C108.441 -1.30684 133.297 154.632 129.554 234.331 C127.476 278.563 128.52 325.098 129.02 360.063 C129.43 466.074 144.04 490.295 198.835 494.991 C243.225 497.53 309.203 457.584 285.941 355.193 C268.663 297.025 177.941 284.874 177.941 344.193"
          className={`
            fill-none stroke-current transition-colors duration-500
            ${isLoading ? "animate-logo-loading" : ""} 
            ${isInteracting ? "animate-logo-interaction" : ""}
          `}
          strokeWidth="46"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2150"
          strokeDashoffset="0"
          onAnimationEnd={handleAnimationEnd}
        />
      </svg>
    </div>
  );
};

export default Logo;
