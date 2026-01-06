export interface ProjectCardData {
  title: string;
  category: string;
  year: number;
  src: string;
  githubLink: string;
  liveLink: string;
  linkType: string;
  content: {
    imageSrc: string;
    description: string;
    tech: string[];
  };
  srcs?: string[];
  key?: string;
}

export const projectsData: ProjectCardData[] = [
  {
    title: "2026 Gold Standard Portfolio",
    category: "System Architecture",
    year: 2026,
    src: "/projects/proj1.png",
    githubLink: "https://github.com/BonyKoshy/Portfolio",
    liveLink: "/", 
    linkType: "link",
    content: {
      imageSrc: "/projects/proj1.png",
      description: "A living proof-of-concept for 2026 web architecture. Built with React 19, Vite 7, and Feature-Sliced Design (FSD) to decouple logic from UI.",
      tech: ["React 19", "Vite 7", "FSD", "GSAP", "Framer Motion", "Radix UI"],
    },
  },
  {
    title: "Local AI Sentiment Analysis",
    category: "AI & Hardware",
    year: 2025,
    src: "/projects/proj2.png",
    githubLink: "https://github.com/BonyKoshy/sentiment-analysis-project",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj2.png",
      description: "Privacy-focused AI engine optimized for Intel NPUs. Uses OpenVINO to run BERT models locally with zero latency.",
      tech: ["Python", "OpenVINO", "Hugging Face", "Intel NPU", "Flask"],
    },
  },
  {
    title: "Connectly: AI Multilingual Chat",
    category: "Real-time Apps",
    year: 2025,
    src: "/projects/proj3.png",
    githubLink: "https://github.com/BonyKoshy/Connectly",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj3.png",
      description: "Real-time chat platform with live AI translation. Built with WebSockets for seamless multilingual communication.",
      tech: ["Python", "Flask-SocketIO", "Deep Translator API", "SQLite", "Bootstrap"],
    },
  },
  {
    title: "Timeless Library Manager Pro",
    category: "Low-Level Systems",
    year: 2024,
    src: "/projects/proj4.png",
    githubLink: "https://github.com/BonyKoshy/timeless_library_management_system",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj4.png",
      description: "Cross-platform system in ANSI C (C89). Uses a custom abstraction layer to run on hardware from 1990 to 2026.",
      tech: ["ANSI C", "System Abstraction", "Binary DB", "Role-Based Security"],
    },
  },
  {
    title: "Downloads Organizer (MAUI)",
    category: "Desktop Utility",
    year: 2024,
    src: "/projects/proj5.png",
    githubLink: "https://github.com/BonyKoshy/DownloadsFolderOrganizer-MAUI",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj5.png",
      description: "Native Windows app built with .NET MAUI that automates file organization using extension-based sorting logic.",
      tech: [".NET MAUI", "C#", ".NET 8", "Fluent Design"],
    },
  },
  {
    title: "Java Enterprise Database",
    category: "Enterprise Backend",
    year: 2025,
    src: "/projects/proj6.png",
    githubLink: "https://github.com/BonyKoshy/java-database-final",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj6.png",
      description: "Spring Boot backend using a hybrid SQL (MySQL) and NoSQL (MongoDB) architecture for scalable data management.",
      tech: ["Java 17", "Spring Boot 3.4", "JPA", "MySQL", "MongoDB"],
    },
  },
  {
    title: "Next.js Portfolio Practice",
    category: "Frontend Dev",
    year: 2024,
    src: "/projects/proj7.png",
    githubLink: "https://github.com/BonyKoshy/bony_portfolio_firebasestudio_test",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj7.png",
      description: "A practice build exploring Next.js App Router and shadcn/ui. Developed as an experiment with Firebase Studio.",
      tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    },
  },
  {
    title: "Modern Inventory System",
    category: "Full Stack",
    year: 2024,
    src: "/projects/proj8.png",
    githubLink: "https://github.com/BonyKoshy/Inventory_Management_System",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj8.png",
      description: "Inventory manager with Material 3 design, real-time stock tracking, and automated PDF report generation.",
      tech: ["Python", "Flask", "SQLite", "ReportLab", "Material 3"],
    },
  },
  {
    title: "Metadata Timeline Generator",
    category: "Digital Forensics",
    year: 2024,
    src: "/projects/proj9.png",
    githubLink: "https://github.com/BonyKoshy/metadata-timeline-generator",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj9.png",
      description: "Digital forensics tool for bulk file analysis. Extracts timestamps and generates visual digital event sequences.",
      tech: ["Python", "Flask", "SQLite", "JavaScript", "Forensics"],
    },
  },
  {
    title: "Emotion Detection App",
    category: "NLP Service",
    year: 2024,
    src: "/projects/proj10.png",
    githubLink: "https://github.com/BonyKoshy/Emotion-Detector",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj10.png",
      description: "Web app utilizing IBM Watson NLP to detect dominant emotions in text, featuring comprehensive unit testing.",
      tech: ["Python", "Flask", "IBM Watson NLP", "Unit Testing"],
    },
  },
  {
    title: "Marvel Multiverse Timeline",
    category: "Web Application",
    year: 2024,
    src: "/projects/proj11.png",
    githubLink: "https://github.com/BonyKoshy/Marvel_Multiverse_Timeline",
    liveLink: "https://marvelmultiversetimeline.netlify.app/",
    linkType: "link",
    content: {
      imageSrc: "/projects/proj11.png",
      description: "Interactive MCU timeline with AI-generated synopses and dynamic dashboard filters.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "Netlify"],
    },
  },
  {
    title: "Downloads Organizer (Python)",
    category: "Legacy Utility",
    year: 2023,
    src: "/projects/proj12.png",
    githubLink: "https://github.com/BonyKoshy/DownloadsFolderOrganizer",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj12.png",
      description: "The original Python + Tkinter utility built for automated file sorting and folder cleanup.",
      tech: ["Python", "Tkinter", "File System API"],
    },
  },
];