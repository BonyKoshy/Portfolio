import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const ProjectsSkeleton = () => {
  return (
    <div className="w-[94%] max-w-6xl mx-auto text-fg-primary pt-6 pb-16 relative">
      {/* Accordions List Skeleton */}
      <div className="flex flex-col w-full">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="w-full">
            <div className="w-full max-w-4xl ml-auto border-b border-border-default/40 py-5 sm:py-6 flex items-center justify-between">
              <div className="flex items-center gap-4 sm:gap-6">
                <Skeleton className="h-8 w-10 rounded-sm bg-bg-surface" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-6 w-48 sm:w-64 rounded-sm bg-bg-surface" />
                  <Skeleton className="h-3 w-20 rounded-sm bg-bg-surface" />
                </div>
              </div>
              <Skeleton className="h-5 w-5 rounded-full bg-bg-surface" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
