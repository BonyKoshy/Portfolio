import React from "react";
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
  SiVercel,
  SiDotnet,
  SiNetlify,
  SiAndroidstudio,
  SiBlender,
} from "react-icons/si";
import { FaJava, FaAws, FaWindows, FaLinux, FaUbuntu } from "react-icons/fa6";

import { TbBrandCSharp, TbBrandPowershell } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";

/** Defines the structure for a technology logo entry. */
export type TechLogo = {
  node: React.ReactNode;
  title: string;
};

/** Static list of mapped technology logos. */
export const techLogos: TechLogo[] = [
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
