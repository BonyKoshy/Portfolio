import { useRef } from "react";
import { Link } from "react-router-dom";
import Container from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import { ShinyText } from "@/shared/ui/ShinyText";
import { Button } from "@/shared/ui/Button";
import { homeContent } from "@/shared/config/content";
import { ArrowRight } from "lucide-react";


// Imports for custom components
import CardSwap, { Card } from "@/shared/ui/CardSwap";
import { Tooltip } from "@/shared/ui/Tooltip";
import { useNavigate } from "react-router-dom";
import { SiPython, SiReact, SiTypescript, SiTailwindcss, SiAccenture } from "react-icons/si";
import { FaCode, FaLayerGroup, FaFolderOpen } from "react-icons/fa6";
import { useMemo } from "react";
import { projectsData } from "@/shared/config/projects";
import { techLogos } from "@/shared/config/techStack";

// --- TOOLTIP CONTENT ---

const ProfileTooltipCard = () => (
  <div className="relative flex aspect-2/3 w-40 flex-col overflow-hidden rounded-xl border border-border-default bg-bg-surface shadow-2xl">
    <img
      src="/profile-image.jpg"
      alt={homeContent.hero.tooltips.profile.alt}
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full p-3 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-white">
        {homeContent.hero.tooltips.profile.role}
      </p>
    </div>
  </div>
);

const CompanyTooltipCard = () => (
  <div className="relative flex aspect-3/1 w-52.5 flex-row items-center gap-3 rounded-xl border border-border-default bg-bg-surface px-4 shadow-2xl">
    <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-transparent" />
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#A100FF] text-white shadow-md">
      <SiAccenture size={20} />
    </div>
    <div className="relative text-left">
      <p className="text-sm font-bold leading-none text-fg-primary">
        {homeContent.hero.tooltips.company.name}
      </p>
      <p className="text-[10px] font-medium uppercase tracking-wider text-fg-secondary mt-1">
        {homeContent.hero.tooltips.company.role}
      </p>
    </div>
  </div>
);

// --- PROJECTS CAROUSEL COMPONENT ---
const ProjectsCarousel = () => {
  // Select top 4 projects
  const topProjects = useMemo(() => projectsData.slice(0, 4), []);

  // Helper to get tech icon
  const getTechIcon = (techName: string) => {
    const normalizedTech = techName.toLowerCase();
    
    // Manual mapping for fuzzy matches
    if (normalizedTech.includes("react")) return <SiReact />;
    if (normalizedTech.includes("c")) return <FaCode />; // Fallback for C/C++ variants if not found

    const logo = techLogos.find(l => {
        const title = l.title.toLowerCase();
        return title === normalizedTech || normalizedTech.includes(title) || title.includes(normalizedTech);
    });
    return logo?.node || <FaCode />;
  };

  return (
    <div className="h-full w-full flex flex-col overflow-hidden group/carousel">
      {/* Accordion Container - simplified for integration */}
      <div className="flex-1 flex w-full gap-2 overflow-hidden">
         {topProjects.map((project, i) => (
           <div 
             key={i}
             className="relative h-full rounded-xl overflow-hidden transition-all duration-500 ease-out flex-1 hover:flex-[3] group/card border border-border-default bg-bg-paper cursor-pointer"
           >
             {/* Background Image */}
             <img 
               src={project.content.imageSrc} 
               alt={project.title}
               className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover/card:opacity-40 transition-opacity grayscale group-hover/card:grayscale-0"
             />
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

             {/* Content */}
             <div className="absolute inset-0 p-4 flex flex-col justify-end items-center group-hover/card:items-start transition-all">
                {/* Tech Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/card:top-4 group-hover/card:left-4 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-all duration-500 text-white/50 group-hover/card:text-white">
                  <div className="text-3xl drop-shadow-md">
                    {getTechIcon(project.content.tech[0] || '')}
                  </div>
                </div>

                {/* Title & Desc (Reveals on hover) */}
                <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-y-4 group-hover/card:translate-y-0 delay-100 w-full">
                  <p className="text-white text-base font-bold leading-tight mb-2 line-clamp-2">{project.title}</p>
                  <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">{project.content.description}</p>
                </div>
             </div>
           </div>
         ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden pt-20 pb-20 outline-none"
    >
      {/* --- BACKGROUND (Static, No Map) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-bg-default" />
        {/* Right-side subtle static gradient to emphasize the card swap */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 h-[80%] w-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* --- LEFT COLUMN: CONTENT (Span 7) --- */}
          <div className="flex flex-col items-start w-full lg:col-span-7">
            {/* 1. Logo */}
            <div className="mb-8 origin-left">
              <Logo
                className="h-16 w-auto sm:h-20 md:h-24 origin-left"
                isLoading={false}
              />
            </div>

            {/* 2. Eyebrow: New Design (Pill + Ping) with Old Text */}
            <div className="mb-6 flex items-center gap-3 rounded-full border border-border-default bg-bg-paper/50 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-fg-secondary">
                <ShinyText
                  text={homeContent.hero.eyebrow}
                  disabled={false}
                  speed={3}
                  className="font-medium"
                />
              </span>
            </div>

            {/* 3. Headline: Clean & Bold */}
            <h1 className="mb-6 w-full max-w-5xl text-4xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block font-light text-fg-secondary">
                {homeContent.hero.headline.part1}
              </span>
              <span className="block font-bold text-fg-primary">
                {homeContent.hero.headline.part2}
              </span>
            </h1>

            {/* 4. Subtext: With Tooltips */}
            <div className="mb-8 max-w-2xl text-base leading-relaxed text-fg-secondary sm:text-lg md:text-xl relative z-30">
              {homeContent.hero.subtext.prefix} {/* Tooltip: Name */}
              <Tooltip
                content={<ProfileTooltipCard />}
                containerClassName="inline-block align-baseline"
                unstyled={true}
              >
                <span className="font-medium relative text-fg-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">
                  {homeContent.hero.subtext.name}
                </span>
              </Tooltip>
              , {homeContent.hero.subtext.role}{" "}
              {/* Tooltip: Company (Accenture) */}
              <Tooltip
                content={<CompanyTooltipCard />}
                containerClassName="inline-block align-baseline"
                unstyled={true}
              >
                <span className="font-medium relative text-fg-primary after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">
                  {homeContent.hero.subtext.company}
                </span>
              </Tooltip>
              {homeContent.hero.subtext.description}
            </div>

            {/* 5. Actions: Original Button Styles */}
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-8">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/projects">
                  {homeContent.hero.cta.primary}
                  <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Button>

              <Button asChild variant="underline" size="none">
                <Link to="/contact">{homeContent.hero.cta.secondary}</Link>
              </Button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CARD SWAP (Span 5) --- */}
          <div className="hidden lg:block lg:col-span-5 relative h-150 w-full pointer-events-none">
            {/* Positioned on the right gradient */}
            <div className="absolute -right-5 xl:right-0 top-[75%] -translate-y-1/2 pointer-events-auto scale-90 xl:scale-100 origin-center">
              <CardSwap
                cardDistance={30}
                verticalDistance={50}
                skewAmount={12}
                delay={3000}
                pauseOnHover={true}
                width={500}
                height={400}
              >
                {/* Card 1: Top Skills (Redesigned) */}
                <Card 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/about#skills');
                  }}
                  customClass="bg-bg-surface border-border-default border flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xl"
                >
                  {/* Background Typography */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
                    <h2 className="text-[130px] font-black leading-none text-transparent bg-clip-text bg-linear-to-b from-fg-primary/5 to-transparent select-none tracking-tighter">
                      {homeContent.hero.cards.tech.backgroundTitle}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-10">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-[#3776AB] flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                          <FaLayerGroup size={24} />
                        </div>
                        <div>
                          <p className="text-fg-tertiary text-xs uppercase tracking-widest mb-1">{homeContent.hero.cards.tech.subtitle}</p>
                          <p className="text-fg-primary font-bold tracking-wide">{homeContent.hero.cards.tech.title}</p>
                        </div>
                      </div>
                      
                      <div className="h-10 w-10 rounded-full border border-border-default flex items-center justify-center group-hover:bg-fg-primary group-hover:text-bg-default transition-colors duration-300 text-fg-secondary">
                         <ArrowRight className="h-4 w-4 -rotate-45" />
                      </div>
                    </div>

                    {/* Footer / Main Content */}
                    <div>
                      <h3 className="text-4xl font-bold text-fg-primary mb-6 group-hover:translate-x-2 transition-transform duration-300 whitespace-pre-line">
                        {homeContent.hero.cards.tech.mainTitle}
                      </h3>
                      
                      {/* Icons Row */}
                      <div className="flex items-center gap-6">
                        <div className="text-fg-secondary hover:text-[#3776AB] transition-colors transform hover:scale-110 duration-300 bg-bg-paper/50 p-2 rounded-lg border border-border-default/50">
                          <SiPython size={32} />
                        </div>
                        <div className="text-fg-secondary hover:text-[#61DAFB] transition-colors transform hover:scale-110 duration-300 bg-bg-paper/50 p-2 rounded-lg border border-border-default/50">
                          <SiReact size={32} className="animate-spin-slow duration-[10s]" />
                        </div>
                        <div className="text-fg-secondary hover:text-[#3178C6] transition-colors transform hover:scale-110 duration-300 bg-bg-paper/50 p-2 rounded-lg border border-border-default/50">
                          <SiTypescript size={32} />
                        </div>
                        <div className="text-fg-secondary hover:text-[#38B2AC] transition-colors transform hover:scale-110 duration-300 bg-bg-paper/50 p-2 rounded-lg border border-border-default/50">
                          <SiTailwindcss size={32} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Card 2: Accenture w/ Mixed Style */}
                <Card 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/about#experience');
                  }}
                  customClass="bg-bg-surface border-border-default border flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xl"
                >
                  {/* Background Typography Effect - Reduced size to prevent overflow/misalignment appearance */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
                    <h2 className="text-[130px] font-black leading-none text-transparent bg-clip-text bg-linear-to-b from-fg-primary/5 to-transparent select-none tracking-tighter">
                      {homeContent.hero.cards.work.backgroundTitle}
                    </h2>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-10">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#A100FF] text-white flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                          <SiAccenture size={28} />
                        </div>
                        <div>
                          <p className="text-fg-tertiary text-xs uppercase tracking-widest mb-1">{homeContent.hero.cards.work.subtitle}</p>
                          <p className="text-fg-primary font-bold tracking-wide">{homeContent.hero.cards.work.title}</p>
                        </div>
                      </div>
                      
                      <div className="h-10 w-10 rounded-full border border-border-default flex items-center justify-center group-hover:bg-fg-primary group-hover:text-bg-default transition-colors duration-300 text-fg-secondary">
                         <ArrowRight className="h-4 w-4 -rotate-45" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-4xl font-bold text-fg-primary mb-2 group-hover:translate-x-2 transition-transform duration-300 whitespace-pre-line">{homeContent.hero.cards.work.mainTitle}</h3>
                      <p className="text-fg-secondary text-sm leading-relaxed max-w-[80%]">
                        {homeContent.hero.cards.work.description}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Card 3: Projects Carousel (Redesigned) */}
                <Card 
                   onClick={(e) => {
                      e.stopPropagation();
                      navigate('/projects');
                   }}
                   customClass="bg-bg-surface border-border-default border flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xl"
                >
                  {/* Background Typography */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
                    <h2 className="text-[130px] font-black leading-none text-transparent bg-clip-text bg-linear-to-b from-fg-primary/5 to-transparent select-none tracking-tighter">
                      {homeContent.hero.cards.build.backgroundTitle}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-8 pb-6"> {/* Reduced padding slightly for carousel space */}
                     {/* Header */}
                     <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shadow-lg shadow-green-500/10 group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                          <FaFolderOpen size={24} />
                        </div>
                        <div>
                          <p className="text-fg-tertiary text-xs uppercase tracking-widest mb-1">{homeContent.hero.cards.build.subtitle}</p>
                          <p className="text-fg-primary font-bold tracking-wide">{homeContent.hero.cards.build.title}</p>
                        </div>
                      </div>
                      
                      <div className="h-10 w-10 rounded-full border border-border-default flex items-center justify-center group-hover:bg-fg-primary group-hover:text-bg-default transition-colors duration-300 text-fg-secondary">
                         <ArrowRight className="h-4 w-4 -rotate-45" />
                      </div>
                    </div>

                    {/* Carousel Area */}
                    <div className="flex-1 min-h-0">
                      <ProjectsCarousel />
                    </div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
