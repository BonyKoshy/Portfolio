import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Container } from "@/shared/ui/Container";

/**
 * Pixel-perfect skeleton for the Home page.
 * Mirrors the exact layout of Navbar and Hero sections based on the desktop design.
 * Uses fixed positioning to act as a full-screen overlay during initial load.
 */
export const HomeSkeleton = () => {
  return (
    <div className="fixed inset-0 z-9999 min-h-screen w-full bg-bg-default flex flex-col overflow-hidden pointer-events-none">
      {/* Navbar Ghost - Exact Height h-20 (80px) */}
      <div className="absolute top-0 left-0 right-0 z-50 h-20 w-full pointer-events-none">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo Alignment (Left) */}
          <div className="flex items-center">
            {/* No visible logo text in hero, but placeholder maintains spacing */}
            <div className="w-8 h-8" />
          </div>

          {/* Nav Links (Right) - "Home About Projects Contact" */}
          <div className="hidden lg:flex items-center gap-8 ml-auto">
            <Skeleton className="h-4 w-12 rounded-full opacity-20" />
            <Skeleton className="h-4 w-12 rounded-full opacity-20" />
            <Skeleton className="h-4 w-16 rounded-full opacity-20" />
            <Skeleton className="h-4 w-16 rounded-full opacity-20" />
          </div>
        </div>
      </div>

      {/* Hero Section Ghost */}
      <section className="relative flex min-h-screen w-full flex-col justify-center">
        <Container className="relative z-10 h-full w-full flex flex-col justify-center items-center">
          {/* Eyebrow Pill Ghost - Centered */}
          <div className="mb-6 flex items-center justify-center w-full">
            <Skeleton className="h-8 w-44 rounded-full border border-fg-primary/10 bg-fg-primary/5" />
          </div>

          {/* Main Title Ghost - Centered */}
          <div className="w-full text-center relative z-10 mb-6 flex justify-center">
            {/* Large Text Placeholder */}
            <Skeleton className="h-20 sm:h-32 lg:h-40 xl:h-56 w-[80%] rounded-lg opacity-20" />
          </div>

          {/* Description Ghost - Centered */}
          <div className="mb-8 w-full max-w-2xl text-center relative z-20 flex flex-col items-center gap-3">
            <Skeleton className="h-6 w-3/4 rounded-md opacity-40" />
            <Skeleton className="h-6 w-1/2 rounded-md opacity-40" />
          </div>

          {/* CTA Buttons Ghost - Centered */}
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-8 justify-center relative z-20">
            <Skeleton className="h-14 w-full sm:w-48 rounded-md bg-fg-primary/10" />
            <Skeleton className="h-14 w-full sm:w-32 rounded-md bg-transparent border border-fg-primary/10" />
          </div>
        </Container>
      </section>
    </div>
  );
};
