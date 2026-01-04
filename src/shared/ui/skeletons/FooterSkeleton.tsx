import Container from "../Container";

const FooterSkeleton = () => {
  return (
    <div className="border-t border-border-default pt-8 pb-8 mt-32 animate-pulse">

        <Container className="flex flex-col gap-6 items-center justify-between md:flex-row">
            {/* Left */}
             <div className="h-4 w-64 rounded bg-bg-subtle"></div>

            
            {/* Right */}
             <div className="flex items-center gap-6">
                 <div className="flex gap-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-8 w-8 rounded-full bg-bg-subtle"></div>

                    ))}
                 </div>
                 <div className="h-6 w-12 rounded bg-bg-subtle"></div>

             </div>
        </Container>
    </div>
  );
};

export default FooterSkeleton;
