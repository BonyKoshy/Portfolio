import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const NotFoundSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="bg-panel rounded-2xl p-8 max-w-md w-full flex flex-col items-center gap-6 border border-border-default">
         <Skeleton className="w-48 h-48 rounded-full" />
         <div className="flex flex-col gap-2 items-center w-full">
            <Skeleton className="h-16 w-32" />
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-10 w-32 mt-6 rounded-md" />
         </div>
      </div>
    </div>
  );
};
