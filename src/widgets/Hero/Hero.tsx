import { Link, useNavigate } from "react-router-dom";
import { Container } from "@/shared/ui/Container";



import { ShinyText } from "@/shared/ui/ShinyText";
import { PrimaryButton, SecondaryButton } from "@/shared/ui/Button";
import { homeContent } from "@/shared/config/content";
import { ArrowRight } from "lucide-react";
import { Meta } from "@/shared/ui/Meta/Meta";

// Custom UI components
import CardSwap, { Card } from "@/shared/ui/CardSwap";
import { Tooltip } from "@/shared/ui/Tooltip";
import {
  SiPython,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAccenture,
} from "react-icons/si";
import { FaLayerGroup, FaFolderOpen } from "react-icons/fa6";

// Entity components
import { ProfileTooltipCard } from "@/entities/profile/ui/ProfileTooltipCard";
import { CompanyTooltipCard } from "@/entities/profile/ui/CompanyTooltipCard";

const Hero = () => {
  const navigate = useNavigate();

  // Keyboard navigation handler
  const handleCardKeyDown = (e: React.KeyboardEvent, path: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (path.startsWith("#")) {
        const id = path.substring(1);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(path);
      }
    }
  };

  const cards = [
     // Card 1: Top Skills
    <Card
      key="skills"
      onClick={(e) => {
        e.stopPropagation();
        navigate("/about#skills");
      }}
      customClass="bg-bg-surface border-border-default border flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleCardKeyDown(e, "/about#skills")}
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
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-[#3776AB] flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20 motion-reduce:transition-none motion-reduce:transform-none">
              <FaLayerGroup size={24} />
            </div>
            <div>
              <p className="text-fg-tertiary text-xs uppercase tracking-widest mb-1">
                {homeContent.hero.cards.tech.subtitle}
              </p>
              <p className="text-fg-primary font-bold tracking-wide">
                {homeContent.hero.cards.tech.title}
              </p>
            </div>
          </div>

          <div className="h-10 w-10 rounded-full border border-border-default flex items-center justify-center group-hover:bg-fg-primary group-hover:text-bg-default transition-colors duration-300 text-fg-secondary">
            <ArrowRight className="h-4 w-4 -rotate-45" />
          </div>
        </div>

        {/* Footer / Main Content */}
        <div>
          <h3 className="text-4xl font-bold text-fg-primary mb-6 group-hover:translate-x-2 transition-transform duration-300 whitespace-pre-line motion-reduce:transition-none motion-reduce:transform-none">
            {homeContent.hero.cards.tech.mainTitle}
          </h3>

          {/* Icons Row */}
          <div className="flex items-center gap-6">
            <div className="text-fg-secondary hover:text-[#3776AB] transition-colors transform hover:scale-110 duration-300 bg-bg-paper/50 p-2 rounded-lg border border-border-default/50 motion-reduce:transform-none">
              <SiPython size={32} />
            </div>
            <div className="text-fg-secondary hover:text-[#61DAFB] transition-colors transform hover:scale-110 duration-300 bg-bg-paper/50 p-2 rounded-lg border border-border-default/50 motion-reduce:transform-none">
              <SiReact
                size={32}
                className="animate-spin-slow duration-[10s] motion-reduce:animate-none"
              />
            </div>
            <div className="text-fg-secondary hover:text-[#3178C6] transition-colors transform hover:scale-110 duration-300 bg-bg-paper/50 p-2 rounded-lg border border-border-default/50 motion-reduce:transform-none">
              <SiTypescript size={32} />
            </div>
            <div className="text-fg-secondary hover:text-[#38B2AC] transition-colors transform hover:scale-110 duration-300 bg-bg-paper/50 p-2 rounded-lg border border-border-default/50 motion-reduce:transform-none">
              <SiTailwindcss size={32} />
            </div>
          </div>
        </div>
      </div>
    </Card>,

    // Card 2: Accenture
    <Card
      key="experience"
      onClick={(e) => {
        e.stopPropagation();
        navigate("/about#experience");
      }}
      customClass="bg-bg-surface border-border-default border flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleCardKeyDown(e, "/about#experience")}
    >
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
        <h2 className="text-[130px] font-black leading-none text-transparent bg-clip-text bg-linear-to-b from-fg-primary/5 to-transparent select-none tracking-tighter">
          {homeContent.hero.cards.work.backgroundTitle}
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-10">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#A100FF] text-white flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none">
              <SiAccenture size={28} />
            </div>
            <div>
              <p className="text-fg-tertiary text-xs uppercase tracking-widest mb-1">
                {homeContent.hero.cards.work.subtitle}
              </p>
              <p className="text-fg-primary font-bold tracking-wide">
                {homeContent.hero.cards.work.title}
              </p>
            </div>
          </div>

          <div className="h-10 w-10 rounded-full border border-border-default flex items-center justify-center group-hover:bg-fg-primary group-hover:text-bg-default transition-colors duration-300 text-fg-secondary">
            <ArrowRight className="h-4 w-4 -rotate-45" />
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-fg-primary mb-2 group-hover:translate-x-2 transition-transform duration-300 whitespace-pre-line motion-reduce:transform-none motion-reduce:transition-none">
            {homeContent.hero.cards.work.mainTitle}
          </h3>
          <p className="text-fg-secondary text-sm leading-relaxed max-w-[80%]">
            {homeContent.hero.cards.work.description}
          </p>
        </div>
      </div>
    </Card>,

    // Card 3: Selected Work
    <Card
      key="projects"
      onClick={(e) => {
        e.stopPropagation();
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }}
      customClass="bg-bg-surface border-border-default border flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleCardKeyDown(e, "#projects")}
    >
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
        <h2 className="text-[130px] font-black leading-none text-transparent bg-clip-text bg-linear-to-b from-fg-primary/5 to-transparent select-none tracking-tighter">
          {homeContent.hero.cards.build.backgroundTitle}
        </h2>
      </div>

      {/* Static Decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 text-8xl font-mono rotate-12 text-fg-primary/20 select-none">
          {"{}"}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-10">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shadow-lg shadow-green-500/10 group-hover:scale-110 transition-transform duration-300 border border-green-500/20 motion-reduce:transform-none motion-reduce:transition-none">
              <FaFolderOpen size={24} />
            </div>
            <div>
              <p className="text-fg-tertiary text-xs uppercase tracking-widest mb-1">
                Explore Portfolio
              </p>
              <p className="text-fg-primary font-bold tracking-wide">
                {homeContent.hero.cards.build.mainTitle}
              </p>
            </div>
          </div>

          <div className="h-10 w-10 rounded-full border border-border-default flex items-center justify-center group-hover:bg-fg-primary group-hover:text-bg-default transition-colors duration-300 text-fg-secondary">
            <ArrowRight className="h-4 w-4 -rotate-45" />
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-fg-primary mb-2 group-hover:translate-x-2 transition-transform duration-300 whitespace-pre-line motion-reduce:transform-none motion-reduce:transition-none">
            {homeContent.hero.cards.build.title}
          </h3>
          <p className="text-fg-secondary text-sm leading-relaxed max-w-[80%]">
            Discover my latest case studies and experiments.
          </p>
        </div>
      </div>
    </Card>
  ];

  return (
    <section
      className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden pt-20 pb-20 outline-none"
    >
      <Meta
        title="Portfolio | Bony Koshy"
        description="Personal portfolio of Bony Koshy, a passionate Full-Stack Developer specializing in modern web technologies, React, and system architecture."
      />
      {/* Background effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-bg-default" />
        {/* Right-side static glow */}
        <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 h-[80%] w-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* --- LEFT COLUMN: CONTENT (Span 7) --- */}
          <div className="flex flex-col items-start w-full lg:col-span-7">


            {/* 2. Eyebrow */}
            <div className="mb-6 flex items-center gap-3 rounded-full border border-border-default bg-bg-paper/50 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 motion-reduce:animate-none"></span>
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

            {/* 3. Headline */}
            <h1 className="mb-6 w-full max-w-5xl text-4xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block font-light text-fg-secondary">
                {homeContent.hero.headline.part1}
              </span>
              <span className="block font-bold text-fg-primary">
                {homeContent.hero.headline.part2}
              </span>
            </h1>

            {/* 4. Subtext with interactive tooltips */}
            <div className="mb-8 max-w-2xl text-base leading-relaxed text-fg-secondary sm:text-lg md:text-xl relative z-30">
              {homeContent.hero.subtext.prefix} {/* Tooltip: Name */}
              <Tooltip
                content={<ProfileTooltipCard />}
                containerClassName="inline-block align-baseline"
                unstyled={true}
              >
                <SecondaryButton
                  variant="default"
                  className="font-medium text-fg-primary"
                  tabIndex={0}
                >
                  {homeContent.hero.subtext.name}
                </SecondaryButton>
              </Tooltip>
              , {homeContent.hero.subtext.role}{" "}
              {/* Tooltip: Company */}
              <Tooltip
                content={<CompanyTooltipCard />}
                containerClassName="inline-block align-baseline"
                unstyled={true}
              >
                <SecondaryButton
                  variant="default"
                  className="font-medium text-fg-primary"
                  tabIndex={0}
                >
                  {homeContent.hero.subtext.company}
                </SecondaryButton>
              </Tooltip>
              {homeContent.hero.subtext.description}
            </div>

            {/* 5. Actions */}
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-8">
              <PrimaryButton
                asChild
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/projects">
                  {homeContent.hero.cta.primary}
                  <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </span>
                </Link>
              </PrimaryButton>

              <SecondaryButton asChild variant="default">
                <Link to="/contact">{homeContent.hero.cta.secondary}</Link>
              </SecondaryButton>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CARD SWAP --- */}
          <div className="hidden lg:block lg:col-span-5 relative h-150 w-full pointer-events-none">
            {/* 3D Effect container */}
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
                {cards}
              </CardSwap>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

