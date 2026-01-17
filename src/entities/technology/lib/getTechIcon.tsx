import { techLogos } from "../model/techStack";
import { SiReact } from "react-icons/si";
import { FaCode } from "react-icons/fa6";

/** Retrieves the appropriate React icon for a given technology name. */
export const getTechIcon = (techName: string) => {
  const normalizedTech = techName.toLowerCase();

  // React icon with strict regex matching
  if (/^react(\s|$|\.)/i.test(normalizedTech)) return <SiReact />;

  // Initial manual check for C/C++ variants
  if (
    normalizedTech === "c" ||
    normalizedTech === "c++" ||
    normalizedTech === "cpp"
  )
    return <FaCode />;

  const logo = techLogos.find((l) => {
    const title = l.title.toLowerCase();
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(^|\\s)${escapedTitle}(\\s|$)`, "i");
    return regex.test(normalizedTech);
  });

  return logo?.node || <FaCode />;
};
