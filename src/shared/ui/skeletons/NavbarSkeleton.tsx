import Container from "../Container";

const NavbarSkeleton = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-20 w-full animate-pulse border-b border-border-default bg-bg-default">

       <Container className="h-full flex items-center justify-between">
           {/* Logo / Skip to main placeholder */}
           <div className="h-8 w-24 rounded bg-bg-subtle"></div>

           
           {/* Nav items */}
           <div className="hidden lg:flex gap-8">
               {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="h-4 w-16 rounded bg-bg-subtle"></div>

               ))}
           </div>

           {/* Mobile Menu Icon */}
            <div className="lg:hidden h-10 w-10 rounded-full bg-bg-subtle"></div>

       </Container>
    </div>
  );
};

export default NavbarSkeleton;
