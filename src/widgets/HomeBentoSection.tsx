import { BentoGrid, BentoCard } from "@/shared/ui/BentoGrid";
import { 
  User, 
  FileText, 
  Code2, 
  Languages, 
  Award,
  Download
} from "lucide-react";
import LogoLoop from "@/shared/ui/LogoLoop/LogoLoop";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiCplusplus,
  SiTypescript,
  SiBootstrap,
  SiFlask,
  SiMysql,
  SiSqlite,
  SiNetlify,
  SiVercel,
  SiAndroidstudio,
  SiBlender,
  SiDotnet,
  SiAccenture
} from "react-icons/si";
import { FaJava, FaAws, FaWindows, FaLinux, FaUbuntu } from "react-icons/fa6";
import { TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiCss3 />, title: "CSS3" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiReact />, title: "React.js" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiBootstrap />, title: "Bootstrap" },
  { node: <SiPython />, title: "Python" },
  { node: <FaJava />, title: "Java" },
  { node: <SiCplusplus />, title: "C++" },
  { node: <TbBrandCSharp />, title: "C#" },
  { node: <SiDotnet />, title: "ASP.NET" },
  { node: <SiFlask />, title: "Flask" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiSqlite />, title: "SQLite" },
  { node: <FaAws />, title: "AWS" },
  { node: <SiNetlify />, title: "Netlify" },
  { node: <SiVercel />, title: "Vercel" },
  { node: <TbBrandPowershell />, title: "PowerShell" },
  { node: <FaWindows />, title: "Windows" },
  { node: <FaLinux />, title: "Linux" },
  { node: <FaUbuntu />, title: "Ubuntu" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiAndroidstudio />, title: "Android Studio" },
  { node: <DiVisualstudio />, title: "Visual Studio" },
  { node: <BiLogoVisualStudio />, title: "Visual Studio Code" },
  { node: <SiBlender />, title: "Blender" },
  { node: <SiFigma />, title: "Figma" },
];

    export function HomeBentoSection() {
  const features = [
    {
      Icon: User,
      name: "Profile",
      description: "Full-stack developer.",
      href: "/about",
      cta: "About",
      className: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
      background: (
        <img
          src="/profile-image.jpg"
          alt="Profile"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-in-out grayscale group-hover:scale-105 group-hover:grayscale-0 opacity-60 dark:opacity-40 hover:opacity-100"
        />
      ),
    },
    {
      Icon: SiAccenture,
      name: "Accenture",
      description: "Associate Software Engineer",
      href: "/about#experience",
      cta: "Experience",
      minimalCTA: true,
      className: "col-span-1 row-span-1 md:col-span-2 md:col-start-1 md:row-start-3",
      background: (
        <div className="absolute inset-0 transition-all duration-300">
          <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#A100FF]/50 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-zinc-500/5 dark:bg-white/[0.02]" />
        </div>
      ),
    },
    {
      Icon: FileText,
      name: "Resume",
      description: "Download CV.",
      href: "/resume.pdf",
      cta: "CV",
      minimalCTA: true,
      ctaIcon: <Download className="h-4 w-4" />,
      className: "col-span-1 row-span-1 md:col-span-2 md:col-start-1 md:row-start-4",
      background: (
        <>
            <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-blue-500/50 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-zinc-500/5 dark:bg-white/[0.02]" />
        </>
      ),
    },
    {
      Icon: Code2,
      name: "Skills",
      description: "My tools.",
      href: "/about",
      cta: "Skills",
      className: "col-span-1 row-span-2 md:col-span-4 md:row-span-2 md:col-start-3 md:row-start-1",
      background: (
        <div className="absolute inset-x-0 top-[25%] flex justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
             <LogoLoop
              logos={techLogos}
              speed={50}
              logoHeight={50}
              gap={50}
              fadeOut={false}
              scaleOnHover={true}
              renderItem={(item) => (
                 <div className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors text-4xl md:text-5xl lg:text-6xl">
                    {(item as any).node}
                 </div>
              )}
            />
        </div>
      ),
    },
    {
      Icon: Languages,
      name: "Languages",
      description: "I speak...",
      href: "/contact",
      cta: "Langs",
      className: "col-span-1 row-span-2 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3",
      background: <div className="absolute inset-0 bg-zinc-500/5 dark:bg-white/[0.02]" />,
    },
    {
      Icon: Award,
      name: "Certificates",
      description: "Learnings.",
      href: "/certificates",
      cta: "Certs",
      className: "col-span-1 row-span-2 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-3",
      background: <div className="absolute inset-0 bg-zinc-500/5 dark:bg-white/[0.02]" />,
    },
  ];

  return (
    <BentoGrid className="grid-cols-1 auto-rows-[9rem] md:grid-cols-6 md:grid-rows-4 md:h-[calc(100vh-10rem)] gap-4">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
