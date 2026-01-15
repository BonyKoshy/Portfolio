import { ProjectCardData } from "./types";

export const projectsData: ProjectCardData[] = [
  {
    title: "2026 Gold Standard Portfolio",
    category: "System Architecture",
    year: 2026,
    src: "/projects/proj1.webp",
    githubLink: "https://github.com/BonyKoshy/Portfolio",
    liveLink: "https://bonykoshy.netlify.app/",
    linkType: "link",
    content: {
      imageSrc: "/projects/proj1.webp",
      description: "A flagship engineering project showcasing 2026 web standards and enterprise-grade directory structures.",
      tech: ["React 19", "Vite 7", "FSD", "GSAP", "Framer Motion", "PWA"],
      role: "Lead Architect",
      problem: "Traditional portfolios are often monolithic and hard to maintain as new features are added.",
      solution: "Implemented Feature-Sliced Design (FSD) to decouple business logic from UI, ensuring 100% modularity.",
      features: [
        "Feature-Sliced Architecture for modular scale",
        "Next-gen React 19 concurrent rendering",
        "High-performance GSAP scroll orchestration",
        "Offline-first PWA with Workbox"
      ],
      challenges: "Maintaining performance while handling heavy SVG filter animations and complex state transitions in React 19."
    }
  },
  {
    title: "Local AI Sentiment Analysis",
    category: "AI & Hardware",
    year: 2025,
    src: "/projects/proj2.webp",
    githubLink: "https://github.com/BonyKoshy/sentiment-analysis-project",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj2.webp",
      description: "Privacy-first sentiment analysis engine optimized for local Intel NPU hardware.",
      tech: ["Python", "Intel OpenVINO", "Optimum Intel", "Hugging Face", "Flask"],
      role: "AI Engineer",
      problem: "Cloud AI inference is slow and poses major data privacy risks for sensitive text data.",
      solution: "Optimized a DistilBERT model using Intel OpenVINO for native execution on NPUs, achieving millisecond latency locally.",
      features: [
        "100% On-device AI inference",
        "Intel NPU hardware acceleration",
        "Static Shape optimization for NPU drivers",
        "RESTful API for local integrations"
      ],
      challenges: "Ensuring stable inference on NPU drivers by implementing strict padding and static shape management for the model input."
    }
  },
  {
    title: "Connectly: AI Multilingual Chat",
    category: "Communication",
    year: 2025,
    src: "/projects/proj3.webp",
    githubLink: "https://github.com/BonyKoshy/Connectly",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj3.webp",
      description: "Real-time communication platform with live AI translation powered by WebSockets.",
      tech: ["Python", "Flask-SocketIO", "Deep Translator API", "SQLite", "Bootstrap"],
      role: "Full Stack Developer",
      problem: "Global teams face friction when communicating in real-time across language barriers.",
      solution: "Integrated a translation event-loop into the WebSocket stream to provide instant message localization.",
      features: [
        "Bidirectional WebSocket messaging",
        "Live AI-powered text translation",
        "Secure auth with SHA256 hashing",
        "Persistent message history via SQLite"
      ],
      challenges: "Minimizing latency between the socket message receipt and the external translation API response."
    }
  },
  {
    title: "Timeless Library Manager Pro",
    category: "Systems Programming",
    year: 2024,
    src: "/projects/proj4.webp",
    githubLink: "https://github.com/BonyKoshy/timeless_library_management_system",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj4.webp",
      screenshots: [
        "/projects/proj4.webp",       // Main image
        "/projects/proj6.webp", // Additional screenshot
        "/projects/proj5.webp"  // Additional screenshot
      ],
      description: "Extreme-portability system built in ANSI C, running on hardware from the 90s to today.",
      tech: ["ANSI C (C89)", "Binary Databases", "Cross-Platform API", "RBAC"],
      role: "Systems Programmer",
      problem: "Modern library software is too heavy for legacy hardware still in use in many sectors.",
      solution: "Engineered a low-level 'System Abstraction Layer' to handle memory and files natively across MS-DOS and modern OS.",
      features: [
        "Encrypted binary database (.DAT) storage",
        "Strict ANSI C89 compliance",
        "Custom Role-Based Access Control (RBAC)",
        "Zero-dependency binary execution"
      ],
      challenges: "Implementing modern security features like timeout logic without standard high-level libraries.",
      installCommand: "https://github.com/BonyKoshy/timeless_library_management_system/releases"
    }
  },
  {
    title: "Downloads Organizer (MAUI)",
    category: "Desktop Application",
    year: 2024,
    src: "/projects/proj5.webp",
    githubLink: "https://github.com/BonyKoshy/DownloadsFolderOrganizer-MAUI",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj5.webp",
      description: "High-performance .NET MAUI utility for automated Windows file system organization.",
      tech: [".NET MAUI", "C#", ".NET 8", "Fluent Design", "XAML"],
      role: "Desktop Lead",
      problem: "Cluttered downloads folders decrease productivity and make file recovery difficult.",
      solution: "Built a native desktop tool with an extension-based sorting engine and a one-click 'Undo' state manager.",
      features: [
        "Smart automated file categorization",
        "Robust Undo system for error recovery",
        "Native Windows Fluent Design UI",
        "Real-time file system monitoring"
      ],
      challenges: "Managing thread-safe I/O operations to prevent UI freezing during large folder movements.",
      installCommand: "https://github.com/BonyKoshy/DownloadsFolderOrganizer-MAUI/releases"
    }
  },
  {
    title: "Java Enterprise Database",
    category: "Enterprise Backend",
    year: 2025,
    src: "/projects/proj6.webp",
    githubLink: "https://github.com/BonyKoshy/java-database-final",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj6.webp",
      description: "Enterprise backend featuring a hybrid database architecture for data scalability.",
      tech: ["Java 17", "Spring Boot 3.4", "JPA", "MySQL", "MongoDB"],
      role: "Backend Engineer",
      problem: "Managing structured relational data and unstructured user reviews in a single DB causes performance bottlenecks.",
      solution: "Architected a dual-persistence layer using MySQL for inventory and MongoDB for high-frequency review data.",
      features: [
        "Spring Boot 3.4 micro-service architecture",
        "Hybrid SQL/NoSQL data persistence",
        "Global exception handling layer",
        "Fully documented REST API endpoints"
      ],
      challenges: "Ensuring ACID compliance across hybrid data sources during complex purchase transactions."
    }
  },
  {
    title: "Modern Inventory System",
    category: "Full Stack App",
    year: 2024,
    src: "/projects/proj7.webp",
    githubLink: "https://github.com/BonyKoshy/Inventory_Management_System",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj7.webp",
      description: "POS-ready inventory manager with Material 3 design and automated reporting.",
      tech: ["Python", "Flask", "SQLite", "ReportLab", "Material Design"],
      role: "Full Stack Lead",
      problem: "Small retail businesses lack affordable, fast-sorting inventory and billing tools.",
      solution: "Developed a lightweight Flask app with integrated PDF generation for instant business reporting.",
      features: [
        "Real-time stock tracking dashboard",
        "Material 3 responsive UI components",
        "Automated PDF report generation",
        "Dynamic search-to-bill interface"
      ],
      challenges: "Optimizing the front-end billing search to remain fast as the product database grows."
    }
  },
  {
    title: "Metadata Timeline Generator",
    category: "Forensics Utility",
    year: 2024,
    src: "/projects/proj8.webp",
    githubLink: "https://github.com/BonyKoshy/metadata-timeline-generator",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj8.webp",
      description: "Forensic analysis tool that visualizes hidden file history and temporal sequences.",
      tech: ["Python", "Flask", "SQLite", "JavaScript", "Digital Forensics"],
      role: "Security Tool Dev",
      problem: "Determining file history during digital investigations is time-consuming when done manually.",
      solution: "Engineered a recursive analyzer that extracts file metadata and charts it onto an interactive chronological timeline.",
      features: [
        "Recursive bulk folder metadata analysis",
        "Interactive chronological event timeline",
        "File-type distribution visual analytics",
        "Exportable forensic data reports"
      ],
      challenges: "Standardizing inconsistent timestamp formats across multiple operating systems and file extensions.",
      installCommand: "https://github.com/BonyKoshy/metadata-timeline-generator/releases"
    }
  },
  {
    title: "Emotion Detection App",
    category: "NLP Service",
    year: 2024,
    src: "/projects/proj9.webp",
    githubLink: "https://github.com/BonyKoshy/Emotion-Detector",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj9.webp",
      description: "AI application utilizing IBM Watson NLP to perform granular emotional sentiment analysis.",
      tech: ["Python", "Flask", "IBM Watson NLP", "Unit Testing"],
      role: "AI Integration Lead",
      problem: "Standard sentiment analysis only detects positive/negative tones, missing nuanced emotional data.",
      solution: "Connected a Flask backend to IBM's advanced NLP libraries to detect Joy, Sadness, Anger, Fear, and Disgust.",
      features: [
        "Granular five-point emotion detection",
        "Responsive AJAX-based web interface",
        "Full unit test coverage with Unittest",
        "Clean JSON-based API response"
      ],
      challenges: "Handling external API timeouts gracefully to ensure a smooth user experience."
    }
  },
  {
    title: "Marvel Multiverse Timeline",
    category: "Web Application",
    year: 2024,
    src: "/projects/proj10.webp",
    githubLink: "https://github.com/BonyKoshy/Marvel_Multiverse_Timeline",
    liveLink: "https://marvelmultiversetimeline.netlify.app/",
    linkType: "link",
    content: {
      imageSrc: "/projects/proj10.webp",
      description: "Immersive media dashboard mapping the MCU with dynamic filters and AI synopses.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript", "Netlify"],
      role: "Frontend Engineer",
      problem: "The MCU's timeline is vast and confusing for fans trying to follow chronological order.",
      solution: "Created an interactive timeline using vanilla JavaScript that allows users to sort and filter movies by Phase and timeline events.",
      features: [
        "True chronological timeline mapping",
        "AI-generated synopses for media entries",
        "Responsive Marvel-inspired UI",
        "Dynamic category sorting system"
      ],
      challenges: "Optimizing DOM performance for a large media library without using a modern framework."
    }
  },
  {
    title: "IBM Coursera Portfolio",
    category: "Web Development",
    year: 2023,
    src: "/projects/proj11.webp",
    githubLink: "https://github.com/BonyKoshy/IBM_Bony_Portfolio",
    liveLink: "https://bonykoshy.github.io/IBM_Bony_Portfolio/",
    linkType: "link",
    content: {
      imageSrc: "/projects/proj11.webp",
      description: "Foundational responsive portfolio demonstrating core web technology mastery.",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      role: "Web Developer",
      problem: "Building a responsive, high-quality portfolio from scratch without frameworks.",
      solution: "Utilized semantic HTML and modern CSS flexbox/grid systems to build a fast, light-weight site with dynamic form handling.",
      features: [
        "Fully responsive mobile-to-desktop layout",
        "Interactive recommendation form",
        "Dynamic DOM manipulation with JavaScript",
        "Polished, professional UI design"
      ],
      challenges: "Ensuring cross-browser compatibility for custom CSS animations and layout grids."
    }
  },
  {
    title: "Downloads Organizer (Python)",
    category: "Legacy Utility",
    year: 2023,
    src: "/projects/proj12.webp",
    githubLink: "https://github.com/BonyKoshy/DownloadsFolderOrganizer",
    liveLink: "#",
    linkType: "github",
    content: {
      imageSrc: "/projects/proj12.webp",
      description: "Utility tool for automated file categorization and folder cleanup.",
      tech: ["Python", "Tkinter", "OS Library", "File I/O"],
      role: "Lead Developer",
      problem: "Messy download folders lead to digital fatigue and wasted time searching for files.",
      solution: "Developed a standalone Python script with a GUI to quickly group files into Images, Docs, and Archives.",
      features: [
        "Smart extension-based auto-sorting",
        "Operation Undo support",
        "Lightweight Tkinter desktop interface",
        "Portable standalone Windows .exe"
      ],
      challenges: "Implementing a stable 'Undo' mechanism by tracking file path states during movement.",
      installCommand: "https://github.com/BonyKoshy/DownloadsFolderOrganizer/releases"
    }
  }
];