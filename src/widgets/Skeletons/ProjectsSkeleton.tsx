import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Container } from "@/shared/ui/Container";

/**
 * Pixel-perfect skeleton for the Projects page.
 * Mirrors the exact layout of Projects.tsx:
 * - Header (Icon + Title + Subtitle)
 * - Category Filter (Pills)
 * - Responsive Grid of Project Cards
 */
export const ProjectsSkeleton = () => {
  return (
    <div className="fixed inset-0 z-[9999] min-h-screen w-full bg-bg-default flex flex-col overflow-y-auto overflow-x-hidden pointer-events-none custom-scrollbar">
      {/* Navbar Placeholder (80px height to match main nav) */}
      <div className="h-20 w-full shrink-0" />

      <Container className="pt-4 pb-16">
        {/* Header Section */}
        <div className="flex flex-col gap-8 mb-12 pl-6">
          <div className="flex flex-col gap-4">
            {/* Title Row */}
            <div className="flex items-center gap-3">
              <Skeleton className="w-8 h-8 rounded-lg" /> {/* Icon */}
              <Skeleton className="h-10 w-64 rounded-lg" /> {/* Title */}
            </div>
            {/* Subtitle */}
            <Skeleton className="h-6 w-full max-w-2xl rounded-md opacity-60" />
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-9 w-24 rounded-full" />
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="h-full px-6 border-border-subtle md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 border-r-0"
            >
              <div className="space-y-6 flex flex-col h-full">
                {/* Image Aspect Ratio 1.75 */}
                <div className="w-full aspect-[1.75] rounded-[1.5rem] overflow-hidden">
                  <Skeleton className="w-full h-full" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 grow">
                  <Skeleton className="h-5 w-16" /> {/* Year */}
                  <Skeleton className="h-7 w-3/4 rounded-md" /> {/* Title */}
                  {/* Description (3 lines) */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full opacity-60" />
                    <Skeleton className="h-4 w-[90%] opacity-60" />
                    <Skeleton className="h-4 w-[75%] opacity-60" />
                  </div>
                  {/* Tech Stack Pills */}
                  <div className="flex gap-2 mt-1">
                    <Skeleton className="h-6 w-16 rounded-full opacity-40" />
                    <Skeleton className="h-6 w-20 rounded-full opacity-40" />
                    <Skeleton className="h-6 w-14 rounded-full opacity-40" />
                  </div>
                  {/* Read More Link */}
                  <div className="mt-auto pt-2">
                    <Skeleton className="h-5 w-24 rounded-md opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
