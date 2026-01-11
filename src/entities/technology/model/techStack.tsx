import React from "react";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiNodeDotJs } from "@react-icons/all-files/si/SiNodeDotJs";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiGit } from "@react-icons/all-files/si/SiGit";
import { SiGithub } from "@react-icons/all-files/si/SiGithub";
import { SiFigma } from "@react-icons/all-files/si/SiFigma";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiCplusplus } from "@react-icons/all-files/si/SiCplusplus";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiFlask } from "@react-icons/all-files/si/SiFlask";
import { SiMysql } from "@react-icons/all-files/si/SiMysql";
import { SiSqlite, SiVercel, SiDotnet } from "react-icons/si";
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify";
import { SiAndroidstudio } from "@react-icons/all-files/si/SiAndroidstudio";
import { SiBlender } from "@react-icons/all-files/si/SiBlender";
import { FaJava } from "@react-icons/all-files/fa/FaJava";
import { FaAws } from "@react-icons/all-files/fa/FaAws";
import { FaWindows } from "@react-icons/all-files/fa/FaWindows";
import { FaLinux } from "@react-icons/all-files/fa/FaLinux";
import { FaUbuntu } from "@react-icons/all-files/fa/FaUbuntu";

import { TbBrandCSharp } from "react-icons/tb";
import { TbBrandPowershell } from "react-icons/tb";
import { DiVisualstudio } from "@react-icons/all-files/di/DiVisualstudio";
import { BiLogoVisualStudio } from "react-icons/bi";

// Define logo type
export type TechLogo = {
  node: React.ReactNode;
  title: string;
};

export const techLogos: TechLogo[] = [
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiCss3 />, title: "CSS3" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiReact />, title: "React.js" },
  { node: <SiNodeDotJs />, title: "Node.js" },
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
