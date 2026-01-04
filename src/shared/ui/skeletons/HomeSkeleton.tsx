import Container from "../Container";

const HomeSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen flex flex-col justify-center pt-32 pb-20">
        <Container>
            <div className="flex flex-col items-start w-full">
                {/* Logo */}
                <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 bg-bg-subtle rounded-full mb-8 sm:mb-12"></div>
                
                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-5">
                    <div className="h-px w-20 bg-bg-subtle hidden sm:block"></div>
                    <div className="h-4 w-40 bg-bg-subtle rounded"></div>
                </div>

                {/* Headline */}
                <div className="mb-6 w-full max-w-5xl space-y-2">
                    <div className="h-10 sm:h-14 lg:h-[4.5rem] w-3/4 bg-bg-subtle rounded-lg"></div>
                    <div className="h-10 sm:h-14 lg:h-[4.5rem] w-2/3 bg-bg-subtle rounded-lg"></div>
                </div>

                {/* Subtext */}
                <div className="mb-8 max-w-2xl space-y-3">
                     <div className="h-4 sm:h-5 w-full bg-bg-subtle rounded"></div>
                     <div className="h-4 sm:h-5 w-5/6 bg-bg-subtle rounded"></div>
                </div>

                {/* Actions */}
                <div className="flex flex-col w-full sm:w-auto gap-4 sm:flex-row sm:items-center sm:gap-8">
                     <div className="h-12 w-full sm:w-48 bg-bg-subtle rounded-full"></div>
                     <div className="h-10 w-32 bg-bg-subtle rounded-lg hidden sm:block"></div>
                </div>
            </div>
        </Container>
      </section>

      {/* Bento Section Skeleton */}
      <section className="min-h-screen lg:h-screen flex flex-col justify-center mx-auto max-w-7xl px-6 w-full py-20 lg:py-0">
         <div className="grid grid-cols-1 grid-rows-10 md:grid-cols-6 md:grid-rows-4 h-auto md:min-h-[700px] md:h-[calc(100vh-12rem)] md:max-h-[900px] gap-4 w-full">
            
            {/* 1. Profile (2x2) */}
            <div className="row-span-2 md:col-span-2 md:row-span-2 bg-bg-subtle rounded-3xl border border-border-default/50"></div>
            
            {/* 3. Skills (4x2 on desktop, stacks on mobile) */}
            <div className="row-span-2 row-start-5 md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-1 bg-bg-subtle rounded-3xl border border-border-default/50"></div>
            
            {/* 2. Accenture (2x1) */}
            <div className="row-start-3 md:col-span-2 md:row-start-3 bg-bg-subtle rounded-3xl border border-border-default/50"></div>
            
            {/* 2b. Resume (2x1) */}
            <div className="row-start-4 md:col-span-2 md:row-start-4 bg-bg-subtle rounded-3xl border border-border-default/50"></div>
            
            {/* 4. Languages (2x2) */}
            <div className="row-span-2 row-start-7 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 bg-bg-subtle rounded-3xl border border-border-default/50"></div>
            
            {/* 5. Certificates (2x2) */}
            <div className="row-span-2 row-start-9 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3 bg-bg-subtle rounded-3xl border border-border-default/50"></div>
         </div>
      </section>
    </div>
  );
};

export default HomeSkeleton;
