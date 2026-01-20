import { HTMLAttributes } from "react";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string; // Additional classes
}

/**
 * Base logic for all skeletons.
 * Uses a CSS variable-based shimmer background.
 */
export const Skeleton = ({ className = "", ...props }: SkeletonProps) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-md bg-bg-paper/50
        before:absolute before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_2s_infinite]
        before:bg-gradient-to-r
        before:from-transparent before:via-white/10 before:to-transparent
        ${className}
      `}
      {...props}
    />
  );
};
