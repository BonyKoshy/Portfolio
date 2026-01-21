import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const ProjectsSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto text-text-primary px-4 pt-24 pb-16">
      {/* Header Skeleton */}
      <div className="flex flex-col items-center text-center mb-12 space-y-6">
        {/* Title - Matches text-4xl sm:text-6xl md:text-8xl */}
        <Skeleton className="h-16 sm:h-20 md:h-24 w-2/3 max-w-3xl rounded-xl" />

        {/* Description - Matches max-w-xl text-lg */}
        <div className="space-y-3 w-full max-w-xl mx-auto flex flex-col items-center">
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="h-5 w-4/5 rounded-md" />
        </div>

        {/* Filter Pills - Matches flex justify-center w-full */}
        <div className="flex justify-center w-full pb-2">
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-white/5 bg-black/10">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-10 w-28 rounded-full bg-white/5" />
            ))}
          </div>
        </div>
      </div>

      {/* Grid Content Skeleton - Matches grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-full px-6 border-border-subtle md:border-r md:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 border-r-0 flex flex-col space-y-6"
          >
            {/* Project Card Skeleton - Matches ProjectCard.tsx */}
            <div className="w-full aspect-[1.75] rounded-[24px] overflow-hidden">
              <Skeleton className="w-full h-full" />
            </div>

            <div className="flex flex-col gap-4 grow">
              {/* Year */}
              <Skeleton className="h-4 w-12 rounded-full" />

              {/* Title */}
              <Skeleton className="h-7 w-3/4 rounded-md" />

              {/* Description */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-1">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>

            {/* Read More Button */}
            <div className="flex justify-start pt-2">
              <Skeleton className="h-5 w-24 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
