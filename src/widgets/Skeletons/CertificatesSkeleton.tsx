import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const CertificatesSkeleton = () => {
  return (
    <div className="min-h-screen bg-transparent pt-24 pb-20 container mx-auto px-4 sm:px-6">
      {/* Header Skeleton */}
      <div className="flex flex-col items-center text-center mb-12 space-y-6">
        {/* Title */}
        <Skeleton className="h-12 w-3/4 sm:w-1/2 md:w-1/3 rounded-lg" />

        {/* Description */}
        <div className="space-y-2 w-full max-w-xl mx-auto flex flex-col items-center">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center w-full pb-2">
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-border-subtle bg-bg-subtle/50">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-9 w-24 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Grid Content Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="w-full h-full p-4 rounded-2xl bg-bg-surface border border-border-default shadow-sm flex flex-col gap-4"
          >
            {/* Header: Provider & Date */}
            <div className="flex items-center justify-between px-1">
              <Skeleton className="h-3 w-1/3 rounded-full" />
              <Skeleton className="h-4 w-16 rounded-full" />
            </div>

            {/* Thumbnail Image */}
            <Skeleton className="w-full aspect-video rounded-xl" />

            {/* Footer: Title */}
            <div className="flex-1 flex flex-col justify-end mt-2">
              <Skeleton className="h-6 w-3/4 rounded-md" />
              <Skeleton className="h-6 w-1/2 rounded-md mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
