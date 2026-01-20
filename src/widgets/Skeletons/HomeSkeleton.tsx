import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Container } from "@/shared/ui/Container";

/**
 * Pixel-perfect skeleton for the Home page.
 * Mirrors the exact layout of Navbar and Hero sections based on the desktop design.
 * Uses fixed positioning to act as a full-screen overlay during initial load.
 */
export const HomeSkeleton = () => {
  return (
    <div className="fixed inset-0 z-[9999] min-h-screen w-full bg-bg-default flex flex-col overflow-hidden pointer-events-none">
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
      <section className="relative flex min-h-[90vh] w-full flex-col justify-center pt-20 pb-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (Text) - col-span-7 */}
            <div className="flex flex-col items-start w-full lg:col-span-7">
              {/* Eyebrow Pill: "CREATIVE DEVELOPER" */}
              <Skeleton className="mb-6 h-8 w-44 rounded-full border border-fg-primary/10 bg-fg-primary/5" />

              {/* Headline: "Engineering the fabric of / the modern web." */}
              <div className="mb-6 w-full max-w-5xl space-y-3">
                {/* Line 1 */}
                <Skeleton className="h-[4.5rem] lg:h-[5.5rem] w-[85%] rounded-2xl opacity-40" />
                {/* Line 2 */}
                <Skeleton className="h-[4.5rem] lg:h-[5.5rem] w-[65%] rounded-2xl opacity-70" />
              </div>

              {/* Subtext: "I am Bony Koshy..." */}
              <div className="mb-8 w-full max-w-2xl space-y-3 pt-2">
                <Skeleton className="h-5 w-[90%] rounded-md opacity-30" />
                <Skeleton className="h-5 w-[60%] rounded-md opacity-30" />
              </div>

              {/* CTA Buttons */}
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-8 pt-2">
                {/* Primary Button */}
                <Skeleton className="h-12 w-full sm:w-48 rounded-full bg-fg-primary/10" />

                {/* Secondary Button */}
                <Skeleton className="h-6 w-24 rounded-md bg-transparent" />
              </div>
            </div>

            {/* Right Content (Visual) - col-span-5 */}
            <div className="hidden lg:flex lg:col-span-5 relative h-[600px] w-full items-center justify-center pointer-events-none">
              {/* Single Card Placeholder at CardSwap position */}
              {/* Width 500, Height 400 */}
              <div className="relative w-[500px] h-[400px]">
                <Skeleton className="w-full h-full rounded-[1.5rem] bg-bg-surface border border-fg-primary/10 shadow-2xl flex flex-col p-10">
                  {/* Header Ghost */}
                  <div className="flex justify-between items-start mb-auto">
                    <div className="flex gap-4">
                      <Skeleton className="w-12 h-12 rounded-xl bg-fg-primary/10" />
                      <div className="space-y-2">
                        <Skeleton className="w-24 h-3 rounded-full opacity-20" />
                        <Skeleton className="w-32 h-4 rounded-full opacity-40" />
                      </div>
                    </div>
                    <Skeleton className="w-10 h-10 rounded-full opacity-10" />
                  </div>

                  {/* Content Ghost */}
                  <div className="space-y-4">
                    <Skeleton className="w-3/4 h-10 rounded-lg opacity-60" />
                    <Skeleton className="w-1/2 h-8 rounded-lg opacity-40" />

                    {/* Icons */}
                    <div className="flex gap-6 mt-6 pt-4">
                      <Skeleton className="w-8 h-8 rounded-lg opacity-10" />
                      <Skeleton className="w-8 h-8 rounded-lg opacity-10" />
                      <Skeleton className="w-8 h-8 rounded-lg opacity-10" />
                    </div>
                  </div>
                </Skeleton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
