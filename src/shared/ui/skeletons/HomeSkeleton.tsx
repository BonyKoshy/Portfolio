import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const HomeSkeleton = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6">
        <div className="flex flex-col items-center space-y-6 max-w-4xl w-full">
            <Skeleton className="h-12 w-3/4 md:w-1/2" />
            <Skeleton className="h-6 w-full md:w-2/3" />
            <div className="flex gap-4 mt-8">
                <Skeleton className="h-12 w-32 rounded-full" />
                <Skeleton className="h-12 w-32 rounded-full" />
            </div>
        </div>
      </section>

      {/* Bento Section Skeleton */}
      <section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20 lg:py-0">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[800px] w-full">
             <Skeleton className="col-span-1 md:col-span-2 row-span-2 rounded-3xl" />
             <Skeleton className="col-span-1 row-span-1 rounded-3xl" />
             <Skeleton className="col-span-1 row-span-1 rounded-3xl" />
             <Skeleton className="col-span-1 md:col-span-3 row-span-1 rounded-3xl h-64" />
         </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="min-h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20">
        <div className="flex justify-between items-center mb-12">
             <Skeleton className="h-10 w-48" />
             <Skeleton className="h-10 w-10 rounded-full" />
        </div>
        <div className="flex space-x-6 overflow-hidden">
            <Skeleton className="h-[400px] w-[350px] shrink-0 rounded-2xl" />
            <Skeleton className="h-[400px] w-[350px] shrink-0 rounded-2xl" />
            <Skeleton className="h-[400px] w-[350px] shrink-0 rounded-2xl" />
        </div>
      </section>

      {/* Contact Section Skeleton */}
      <section className="mx-auto max-w-7xl px-6 w-full pb-20 pt-20 border-t border-border-default/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
                 <Skeleton className="h-12 w-64" />
                 <Skeleton className="h-24 w-full" />
                 <Skeleton className="h-12 w-40 rounded-full" />
            </div>
            <Skeleton className="h-[400px] w-full rounded-2xl" />
        </div>
      </section>
    </div>
  );
};
