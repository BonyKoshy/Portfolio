import { NavbarSkeleton, FooterSkeleton } from "../skeletons";

interface PageSkeletonProps {
  children?: React.ReactNode;
}

const PageSkeleton: React.FC<PageSkeletonProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-bg-default">

      <NavbarSkeleton />
      
      <main className="flex-grow">
          {children ? children : (
             <div className="min-h-screen animate-pulse bg-bg-default overflow-hidden relative pt-20">

                {/* Fallback generic hero shape if no children provided */}
                 <div className="mx-auto max-w-7xl px-6 pt-20">
                    <div className="h-24 w-24 rounded-2xl bg-bg-subtle mb-12"></div>
                    <div className="h-16 w-3/4 rounded-2xl bg-bg-subtle mb-6"></div>
                    <div className="h-8 w-1/2 rounded-2xl bg-bg-subtle mb-12"></div>

                 </div>
             </div>
          )}
      </main>

      <FooterSkeleton />
    </div>
  );
};

export default PageSkeleton;

