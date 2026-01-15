import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const ProjectsSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-16">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8 rounded-md" />
          <Skeleton className="h-10 w-48" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-6 w-full max-w-xl" />
            <Skeleton className="h-6 w-2/3" />
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-12">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex flex-col md:flex-row gap-8 p-6 border border-border-default rounded-2xl"
          >
            {/* Image Section */}
            <div className="w-full md:w-5/12 lg:w-4/12 shrink-0">
               <Skeleton className="w-full aspect-video rounded-xl" />
            </div>

            {/* Details Section */}
            <div className="flex flex-col grow gap-4">
              <div className="flex items-center gap-2 mb-1">
                 <Skeleton className="h-4 w-12" />
                 <Skeleton className="h-1 w-1 rounded-full" />
                 <Skeleton className="h-4 w-24" />
              </div>

              <Skeleton className="h-8 w-3/4" />

              <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mt-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-14 rounded-full" />
                <Skeleton className="h-6 w-18 rounded-full" />
              </div>

              {/* Actions */}
              <div className="mt-auto pt-6 flex flex-wrap gap-4">
                 <Skeleton className="h-10 w-32 rounded-lg" />
                 <Skeleton className="h-10 w-36 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
