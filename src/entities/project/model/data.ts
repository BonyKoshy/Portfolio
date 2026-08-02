import { ProjectArchiveData } from "./types";

/** Static data list of all portfolio projects for the Engineering Archive. */
export const projectsData: ProjectArchiveData[] = [
  {
    id: "connectly",
    title: "Connectly",
    subtitle: "AI Multilingual Chat Architecture",
    tags: ["WebSockets", "AI", "Real-time"],
    year: 2025,
    status: "Production",
    heroImage: "/projects/proj3.webp",
    overview:
      "A real-time communication platform engineered with live AI translation powered by WebSockets. The system intercepts message streams and injects localized translations seamlessly, allowing global teams to communicate without language friction.",
    highlights: [
      "Bidirectional WebSocket messaging layer",
      "Live AI-powered text translation in the event loop",
      "Secure auth with SHA256 hashing",
      "Persistent message history via SQLite",
    ],
    techStack: ["Python", "Flask-SocketIO", "Deep Translator API", "SQLite"],
    role: "Full Stack Developer",
    gallery: ["/projects/proj3.webp"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/Connectly",
        type: "github",
      },
    ],
  },
  {
    id: "emotion-detector",
    title: "Emotion Detector",
    subtitle: "Granular Sentiment Analysis Engine",
    tags: ["NLP", "Machine Learning", "IBM Watson"],
    year: 2024,
    status: "Archived",
    heroImage: "/projects/proj9.webp",
    overview:
      "An AI application utilizing IBM Watson NLP to perform granular emotional sentiment analysis. Standard sentiment analysis often misses nuanced emotional data. This system detects distinct emotional vectors including Joy, Sadness, Anger, Fear, and Disgust.",
    highlights: [
      "Granular five-point emotion detection",
      "Responsive AJAX-based web interface",
      "Full unit test coverage with Unittest",
      "Robust timeout handling for external APIs",
    ],
    techStack: ["Python", "Flask", "IBM Watson NLP", "Unittest"],
    role: "AI Integration Lead",
    gallery: ["/projects/proj9.webp"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/Emotion-Detector",
        type: "github",
      },
    ],
  },
  {
    id: "maui-file-organizer",
    title: "MAUI File Organizer",
    subtitle: "High-Performance Windows Utility",
    tags: [".NET MAUI", "Desktop", "Fluent Design"],
    year: 2024,
    status: "Production",
    heroImage: "/projects/proj5.webp",
    overview:
      "A high-performance .NET MAUI utility designed for automated Windows file system organization. It solves digital clutter by categorizing files instantly while maintaining a reliable 'Undo' state engine to prevent accidental data displacement.",
    highlights: [
      "Smart automated file categorization engine",
      "Robust one-click Undo system for error recovery",
      "Native Windows Fluent Design UI implementation",
      "Thread-safe I/O operations preventing UI freezes",
    ],
    techStack: [".NET MAUI", "C#", ".NET 8", "XAML"],
    role: "Desktop Lead",
    gallery: ["/projects/proj5.webp"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/DownloadsFolderOrganizer-MAUI",
        type: "github",
      },
      {
        label: "Download .exe",
        url: "https://github.com/BonyKoshy/DownloadsFolderOrganizer-MAUI/releases",
        type: "download",
      },
    ],
  },
  {
    id: "timeless-library",
    title: "Timeless Library Management System",
    subtitle: "Extreme-Portability ANSI C Software",
    tags: ["C89", "Systems Programming", "Legacy Hardware"],
    year: 2024,
    status: "Production",
    heroImage: "/projects/proj4.webp",
    overview:
      "An extreme-portability system built purely in ANSI C (C89), capable of running natively on hardware ranging from the 90s to modern architectures. It uses a low-level System Abstraction Layer for memory and file management without modern dependencies.",
    highlights: [
      "Encrypted binary database (.DAT) storage",
      "Strict ANSI C89 compliance",
      "Custom Role-Based Access Control (RBAC)",
      "Zero-dependency binary execution",
    ],
    techStack: ["ANSI C", "Binary DB", "Custom Auth API"],
    role: "Systems Programmer",
    gallery: [
      "/projects/proj4.webp",
      "/projects/proj6.webp",
      "/projects/proj5.webp",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/timeless_library_management_system",
        type: "github",
      },
      {
        label: "Download Binary",
        url: "https://github.com/BonyKoshy/timeless_library_management_system/releases",
        type: "download",
      },
    ],
  },
  {
    id: "downloads-organizer",
    title: "Downloads Folder Organizer",
    subtitle: "Automated File Categorization Script",
    tags: ["Python", "Automation", "GUI"],
    year: 2023,
    status: "Archived",
    heroImage: "/projects/proj12.webp",
    overview:
      "A utility tool built in Python for automated file categorization and folder cleanup. It provides a lightweight Tkinter GUI wrapped as a standalone executable to quickly group messy download folders into structured archives.",
    highlights: [
      "Smart extension-based auto-sorting logic",
      "Operation Undo support by tracking path states",
      "Lightweight Tkinter desktop interface",
      "Portable standalone Windows executable distribution",
    ],
    techStack: ["Python", "Tkinter", "OS Library", "File I/O"],
    role: "Lead Developer",
    gallery: ["/projects/proj12.webp"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/DownloadsFolderOrganizer",
        type: "github",
      },
      {
        label: "Download .exe",
        url: "https://github.com/BonyKoshy/DownloadsFolderOrganizer/releases",
        type: "download",
      },
    ],
  },
  {
    id: "marvel-timeline",
    title: "Marvel Timeline",
    subtitle: "Interactive Cinematic Universe Map",
    tags: ["Frontend", "DOM Manipulation", "Vanilla JS"],
    year: 2024,
    status: "Production",
    heroImage: "/projects/proj10.webp",
    overview:
      "An immersive media dashboard mapping the Marvel Cinematic Universe with dynamic filters and AI-generated synopses. The timeline uses high-performance vanilla JavaScript DOM manipulation to render a vast media library without frameworks.",
    highlights: [
      "True chronological timeline mapping and sorting",
      "AI-generated synopses for media entries",
      "Responsive Marvel-inspired UI architecture",
      "Dynamic category filtering system",
    ],
    techStack: ["HTML5", "Tailwind CSS", "Vanilla JS", "Netlify"],
    role: "Frontend Engineer",
    gallery: ["/projects/proj10.webp"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/Marvel_Multiverse_Timeline",
        type: "github",
      },
      {
        label: "Live Demo",
        url: "https://marvelmultiversetimeline.netlify.app/",
        type: "live",
      },
    ],
  },
  {
    id: "metadata-timeline",
    title: "Metadata Timeline Generator",
    subtitle: "Digital Forensics Visualization",
    tags: ["Forensics", "Python", "Data Viz"],
    year: 2024,
    status: "Production",
    heroImage: "/projects/proj8.webp",
    overview:
      "A forensic analysis tool that visualizes hidden file history and temporal sequences. It engineers a recursive analyzer that extracts file metadata and charts it onto an interactive chronological timeline for rapid investigation.",
    highlights: [
      "Recursive bulk folder metadata analysis",
      "Interactive chronological event timeline generation",
      "File-type distribution visual analytics",
      "Standardization of inconsistent OS timestamp formats",
    ],
    techStack: ["Python", "Flask", "SQLite", "JavaScript"],
    role: "Security Tool Dev",
    gallery: ["/projects/proj8.webp"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/metadata-timeline-generator",
        type: "github",
      },
      {
        label: "Download Tool",
        url: "https://github.com/BonyKoshy/metadata-timeline-generator/releases",
        type: "download",
      },
    ],
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    subtitle: "POS-Ready Reporting Dashboard",
    tags: ["Backend", "Material Design", "PDF Gen"],
    year: 2024,
    status: "Archived",
    heroImage: "/projects/proj7.webp",
    overview:
      "A POS-ready inventory manager built with Flask, integrating Material 3 design principles and automated PDF reporting. It optimizes front-end billing searches to remain incredibly fast as the underlying product database grows.",
    highlights: [
      "Real-time stock tracking dashboard",
      "Material 3 responsive UI components",
      "Automated PDF report generation via ReportLab",
      "Dynamic search-to-bill interface",
    ],
    techStack: ["Python", "Flask", "SQLite", "ReportLab"],
    role: "Full Stack Lead",
    gallery: ["/projects/proj7.webp"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/Inventory_Management_System",
        type: "github",
      },
    ],
  },
  {
    id: "space-impact",
    title: "Space Impact: Automated",
    subtitle: "Computer Vision Game Automation",
    tags: ["Computer Vision", "Automation", "OpenCV"],
    year: 2025,
    status: "Beta",
    heroImage: "/projects/proj1.webp",
    overview:
      "An automated bot designed to play the classic Space Impact game using computer vision and real-time screen capture. The system processes video frames to detect enemies and projectiles, issuing simulated keyboard commands with millisecond latency.",
    highlights: [
      "Real-time object detection and tracking",
      "Low-latency screen capture loop",
      "Heuristic decision engine for movement",
      "Automated keyboard event simulation",
    ],
    techStack: ["Python", "OpenCV", "PyAutoGUI", "Numpy"],
    role: "Automation Engineer",
    gallery: ["/projects/proj1.webp"],
    links: [
      {
        label: "Repository",
        url: "#",
        type: "github",
      },
    ],
  },
  {
    id: "openvino-sentiment",
    title: "OpenVINO Sentiment API",
    subtitle: "Local AI Inference on NPU",
    tags: ["Intel OpenVINO", "NPU", "AI"],
    year: 2025,
    status: "Production",
    heroImage: "/projects/proj2.webp",
    overview:
      "A privacy-first sentiment analysis engine optimized for local Intel NPU hardware. It avoids cloud inference by utilizing an optimized DistilBERT model running natively on NPU, achieving millisecond latency locally.",
    highlights: [
      "100% On-device AI inference",
      "Intel NPU hardware acceleration integration",
      "Static Shape optimization for stable NPU drivers",
      "RESTful API for local client integrations",
    ],
    techStack: ["Python", "Intel OpenVINO", "Optimum", "Flask"],
    role: "AI Engineer",
    gallery: ["/projects/proj2.webp"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/BonyKoshy/sentiment-analysis-project",
        type: "github",
      },
    ],
  },
];
