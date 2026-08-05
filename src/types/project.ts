/** Data structure representing a single project entry in the Engineering Archive. */
export interface ProjectArchiveData {
  id: string; // Unique ID for scrolling/anchoring
  title: string;
  subtitle: string;
  tags: string[]; // Minimal tags for the header (e.g. ['AI', 'Python'])
  year: number;
  status: string; // e.g. "Production", "Archived", "Beta"
  heroImage: string;
  overview: string; // 1 paragraph description
  highlights: string[]; // Minimal list of key features/challenges
  techStack: string[]; // Minimal pills (no icons)
  role: string; // Transparent text styling
  gallery?: string[]; // 2-5 screenshots for the carousel
  links: {
    label: string;
    url: string;
    type: "github" | "live" | "download";
  }[];
}
