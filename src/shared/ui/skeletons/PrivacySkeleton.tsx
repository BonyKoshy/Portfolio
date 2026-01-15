import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const PrivacySkeleton = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-12 w-64 mb-2" />
        <Skeleton className="h-4 w-full border-b border-border-default pb-6 mb-10 max-w-sm" />

        <div className="space-y-8">
            <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>

            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-4">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};
