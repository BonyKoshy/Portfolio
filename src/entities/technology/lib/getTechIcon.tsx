import { techLogos } from "../model/techStack";
import { SiReact } from "react-icons/si";
import { FaCode } from "react-icons/fa6";

// Helper to get tech icon
export const getTechIcon = (techName: string) => {
  const normalizedTech = techName.toLowerCase();
  
  if (normalizedTech.includes("react")) return <SiReact />;
  // Better matching logic to avoid "cloud" matching "c"
  if (normalizedTech === "c" || normalizedTech === "c++" || normalizedTech === "cpp") return <FaCode />;

  const logo = techLogos.find(l => {
      const title = l.title.toLowerCase();
      return title === normalizedTech;
  });
  
  if (logo?.node) return logo.node;
  
  // Fuzzy fallback if exact match fails, but be careful
  const fuzzyLogo = techLogos.find(l => {
       const title = l.title.toLowerCase();
       // Avoid very short matches being triggered by long words
       if (title.length < 3) return false; 
       return normalizedTech.includes(title) || title.includes(normalizedTech);
  });

  return fuzzyLogo?.node || <FaCode />;
};
