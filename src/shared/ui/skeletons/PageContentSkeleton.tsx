import Container from "../Container";

const PageContentSkeleton = () => {
  return (
    <div className="min-h-screen pt-32 pb-12 animate-pulse">
      <Container>
         {/* Title */}
         <div className="h-10 w-1/3 rounded-lg bg-bg-subtle mb-8"></div>

         
         {/* Paragraphs */}
         <div className="space-y-4 max-w-3xl">
             <div className="h-4 w-full rounded bg-bg-subtle"></div>
             <div className="h-4 w-5/6 rounded bg-bg-subtle"></div>
             <div className="h-4 w-full rounded bg-bg-subtle"></div>
             <div className="h-4 w-4/5 rounded bg-bg-subtle"></div>

         </div>

         {/* Section 2 */}
         <div className="mt-12 space-y-4 max-w-3xl">
            <div className="h-6 w-1/4 rounded bg-bg-subtle mb-4"></div>
             <div className="h-4 w-full rounded bg-bg-subtle"></div>
             <div className="h-4 w-5/6 rounded bg-bg-subtle"></div>

         </div>
      </Container>
    </div>
  );
};

export default PageContentSkeleton;
