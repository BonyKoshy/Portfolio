import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const SimplePageSkeleton = () => {
  return (
    <div className="min-h-screen pt-20 px-6 max-w-7xl mx-auto">
      <Skeleton className="h-10 w-48 mb-4" />
      <div className="space-y-4 max-w-2xl">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
};
