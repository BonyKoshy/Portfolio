import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Container } from "@/shared/ui/Container";

/**
 * Pixel-perfect skeleton for the About page.
 * Mirrors the exact layout of Navbar and Hero sections based on the desktop design.
 * Uses fixed positioning to act as a full-screen overlay during initial load.
 */
export const AboutSkeleton = () => {
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
      <section className="relative flex min-h-[90vh] w-full flex-col justify-center pt-20 pb-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (Text) - col-span-7 */}
            <div className="flex flex-col items-start w-full lg:col-span-7 justify-center pt-10 lg:pt-32">
              {/* Eyebrow: "WHO AM I? 👋" */}
              <Skeleton className="mb-6 h-6 w-32 rounded-md bg-fg-primary/20" />

              {/* Headline: "Pixel Perfectionist. / Logic Obsessed." */}
              <div className="mb-6 w-full max-w-5xl space-y-4">
                {/* Line 1 */}
                <Skeleton className="h-14 sm:h-20 lg:h-24 w-[350px] sm:w-[500px] rounded-2xl opacity-40" />
                {/* Line 2 */}
                <Skeleton className="h-14 sm:h-20 lg:h-24 w-[300px] sm:w-[450px] rounded-2xl opacity-70" />
              </div>

              {/* Subtext */}
              <div className="mb-8 w-full max-w-2xl space-y-3 pt-2">
                <Skeleton className="h-5 w-[90%] rounded-md opacity-30" />
                <Skeleton className="h-5 w-[80%] rounded-md opacity-30" />
                <Skeleton className="h-5 w-[40%] rounded-md opacity-30" />
              </div>

              {/* Stats Count Skeleton */}
              <div className="w-full max-w-2xl flex gap-12 sm:gap-16 py-4 sm:py-8 border-t border-dashed border-fg-primary/10 mt-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <Skeleton className="h-10 w-16 rounded-lg opacity-50" />
                    <Skeleton className="h-4 w-24 rounded-md opacity-30" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content (Visual) - col-span-5 */}
            <div className="hidden lg:flex lg:col-span-5 relative h-150 w-full items-center justify-center pointer-events-none lg:-mt-24 xl:mt-0">
              {/* Single Card Placeholder matching CardSwap dimensions */}
              <div className="relative w-[300px] h-[240px] sm:w-[400px] sm:h-[320px] lg:w-[500px] lg:h-[400px]">
                <Skeleton className="w-full h-full rounded-none lg:rounded-none bg-bg-surface border border-fg-primary/10 shadow-2xl flex flex-col p-8 justify-end relative overflow-hidden">
                  {/* Profile Card Look */}
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 space-y-2">
                    <Skeleton className="w-48 h-8 rounded-lg opacity-80" />
                    <Skeleton className="w-32 h-5 rounded-lg opacity-60" />
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
