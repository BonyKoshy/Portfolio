import { Certificate } from "./types";

export const certificates: Certificate[] = [
  // ===========================================================================
  // MASTER SPECIALIZATION: IBM JAVA DEVELOPER
  // ===========================================================================
  {
    id: "ibm-java-professional",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: true,
    issuer: "IBM",
    title: "IBM Java Developer Professional Certificate",
    date: "Ongoing",
    description:
      "Comprehensive professional track for enterprise Java development, Spring Boot, and Cloud Native deployment.",
    skills: ["Java EE", "Spring Boot", "Microservices", "JDBC", "Hibernate"],
    credentialUrl: "#",
    category: "software",
    subCertificates: [
      { title: "Java Programming for Beginners", certId: "ibm-java-beginners" },
      { title: "Object Oriented Programming in Java", certId: "ibm-oop-java" },
      {
        title: "Introduction to HTML, CSS, & JavaScript",
        certId: "ibm-html-css-js",
      },
      {
        title: "Cloud Native, Microservices, DevOps",
        certId: "ibm-cloud-native-devops",
      },
      {
        title: "Spring Framework for Java Development",
        certId: "skillup-spring-framework",
      },
      {
        title: "Java Development with Databases",
        certId: "skillup-java-databases",
      },
      { title: "Java App Development Project", certId: "skillup-java-project" },
    ],
  },
  // ===========================================================================
  // MASTER SPECIALIZATION: GOOGLE IT SUPPORT
  // ===========================================================================
  {
    id: "google-it-support-specialization",
    thumbnail: "/certs/google.webp",
    isSpecialization: true,
    issuer: "Google",
    title: "Google IT Support Professional Certificate",
    date: "Dec 05, 2025",
    description:
      "A professional certificate designed to take beginner learners to job readiness in IT support, covering troubleshooting, networking, and security.",
    skills: [
      "Technical Support",
      "Computer Networking",
      "IT Security",
      "Linux",
      "Troubleshooting",
    ],
    credentialUrl: "https://coursera.org/verify/profession/google-it-support",
    category: "security",
    subCertificates: [
      {
        title: "Technical Support Fundamentals",
        certId: "google-tech-support-fundamentals",
      },
      {
        title: "The Bits and Bytes of Computer Networking",
        certId: "google-bits-bytes-networking",
      },
      {
        title: "Operating Systems and You: Becoming a Power User",
        certId: "google-os-power-user",
      },
      {
        title: "System Administration and IT Infrastructure",
        certId: "google-sys-admin",
      },
      {
        title: "IT Security: Defense against the digital dark arts",
        certId: "google-it-security",
      },
      {
        title: "Accelerate Your Job Search with AI",
        certId: "google-ai-job-search",
      },
    ],
  },
  {
    id: "google-ai-job-search",
    thumbnail: "/certs/google.webp",
    isSpecialization: false,
    issuer: "Google",
    title: "Accelerate Your Job Search with AI",
    date: "Dec 05, 2025",
    description:
      "Learned to leverage AI tools like Gemini to uncover skills, create job search plans, and prepare for interviews.",
    skills: ["Generative AI", "Prompt Engineering", "Career Development"],
    credentialUrl: "https://coursera.org/verify/7SR0EYSAF4BK",
    category: "ai",
  },
  {
    id: "google-it-security",
    thumbnail: "/certs/google.webp",
    isSpecialization: false,
    issuer: "Google",
    title: "IT Security: Defense against the digital dark arts",
    date: "Dec 04, 2025",
    description:
      "Covered encryption algorithms, authentication, network security solutions like firewalls, and how to evaluate potential risks.",
    skills: [
      "Network Security",
      "Cryptography",
      "Authentication",
      "Risk Assessment",
    ],
    credentialUrl: "https://coursera.org/verify/S1QQ5F1LFRGR",
    category: "security",
  },
  {
    id: "google-sys-admin",
    thumbnail: "/certs/google.webp",
    isSpecialization: false,
    issuer: "Google",
    title: "System Administration and IT Infrastructure Services",
    date: "Dec 01, 2025",
    description:
      "Focused on maintaining reliable computer systems in multi-user environments, including cloud infrastructure and directory services.",
    skills: [
      "Directory Services",
      "Active Directory",
      "OpenLDAP",
      "Backup & Recovery",
    ],
    credentialUrl: "https://coursera.org/verify/OYZ03BQCIROV",
    category: "security",
  },
  // ===========================================================================
  // AWS CERTIFICATION
  // ===========================================================================
  {
    id: "aws-cloud-technical-essentials",
    thumbnail: "/certs/aws.webp",
    isSpecialization: false,
    issuer: "Amazon Web Services",
    title: "AWS Cloud Technical Essentials",
    date: "Nov 29, 2025",
    description:
      "Fundamental-level course covering AWS terminology, security measures (IAM), and key compute services like EC2 and Lambda.",
    skills: ["AWS IAM", "Amazon EC2", "Amazon S3", "Cloud Computing"],
    credentialUrl: "https://coursera.org/verify/4SO81S20HL66",
    category: "cloud",
  },
  {
    id: "google-os-power-user",
    thumbnail: "/certs/google.webp",
    isSpecialization: false,
    issuer: "Google",
    title: "Operating Systems and You: Becoming a Power User",
    date: "Oct 22, 2025",
    description:
      "Learned to navigate Windows and Linux filesystems, manage users and permissions, and configure disk partitions.",
    skills: ["Linux File Systems", "Windows OS", "CLI", "PowerShell", "Bash"],
    credentialUrl: "https://coursera.org/verify/83G3DQUE1H7W",
    category: "security",
  },
  // ===========================================================================
  // MASTER SPECIALIZATION: IBM SOFTWARE ENGINEERING
  // ===========================================================================
  {
    id: "ibm-software-eng-specialization",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: true,
    issuer: "IBM",
    title: "Applied Software Engineering Fundamentals",
    date: "Oct 11, 2025",
    description:
      "Mastered fundamental concepts in Software Engineering including SDLC, Python programming, Git version control, and Linux shell scripting.",
    skills: ["Python", "Git", "GitHub", "Linux Bash", "Flask", "SDLC"],
    credentialUrl: "https://coursera.org/verify/specialization/IBM-SE",
    category: "software",
    subCertificates: [
      {
        title: "Introduction to Software Engineering",
        certId: "ibm-intro-software-eng",
      },
      {
        title: "Getting Started with Git and GitHub",
        certId: "ibm-git-github",
      },
      {
        title: "Hands-on Linux Commands & Shell Scripting",
        certId: "ibm-linux-shell",
      },
      {
        title: "Python for Data Science, AI & Development",
        certId: "ibm-python-datascience",
      },
      {
        title: "Developing AI Applications with Python and Flask",
        certId: "ibm-python-flask",
      },
    ],
  },
  {
    id: "ibm-python-flask",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Developing AI Applications with Python and Flask",
    date: "Oct 11, 2025",
    description:
      "Created and deployed Python web applications using the Flask framework and embedded AI features.",
    skills: ["Flask", "Python", "Web Development", "AI Integration"],
    credentialUrl: "https://coursera.org/verify/NPCC3SILM930",
    category: "ai",
  },
  {
    id: "ibm-python-datascience",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Python for Data Science, AI & Development",
    date: "Oct 10, 2025",
    description:
      "Developed Python programming logic using data structures and libraries like Pandas and Numpy.",
    skills: ["Python", "Pandas", "Numpy", "REST APIs"],
    credentialUrl: "https://coursera.org/verify/IZI2KWI0LY8N",
    category: "ai",
  },
  {
    id: "ibm-linux-shell",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Hands-on Introduction to Linux Commands and Shell Scripting",
    date: "Oct 08, 2025",
    description:
      "Executed common Linux commands and created shell scripts using BASH to automate tasks.",
    skills: ["Linux Commands", "Bash Scripting", "Shell Scripting", "Terminal"],
    credentialUrl: "https://coursera.org/verify/L2F1LG1Q2HK4",
    category: "software",
  },
  {
    id: "google-bits-bytes-networking",
    thumbnail: "/certs/google.webp",
    isSpecialization: false,
    issuer: "Google",
    title: "The Bits and Bytes of Computer Networking",
    date: "Sep 29, 2025",
    description:
      "A full overview of computer networking, covering TCP/IP protocols, the five-layer model, and powerful network troubleshooting tools.",
    skills: ["Network Protocols", "TCP/IP", "Cloud Computing", "IPv4"],
    credentialUrl: "https://coursera.org/verify/TOVPDC6EK05A",
    category: "security",
  },
  {
    id: "skillup-java-project",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "SkillUp",
    title: "Java App Development Project",
    date: "Sep 12, 2025",
    description:
      "Built a functional Java application demonstrating modular code, OOP principles, and persistent data storage via File I/O.",
    skills: ["File I/O", "Java App Dev", "Exception Handling"],
    credentialUrl: "https://coursera.org/verify/UTYUAQRG90LN",
    category: "software",
  },
  {
    id: "skillup-java-databases",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "SkillUp",
    title: "Java Development with Databases",
    date: "Sep 10, 2025",
    description:
      "Applied fundamentals of databases in Java using JDBC and ORM with Hibernate for efficient data management.",
    skills: ["JDBC", "Hibernate", "SQL", "ORM"],
    credentialUrl: "https://coursera.org/verify/LZEY73QUJXK0",
    category: "software",
  },
  {
    id: "skillup-spring-framework",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "SkillUp",
    title: "Spring Framework for Java Development",
    date: "Sep 01, 2025",
    description:
      "Built job-ready skills in the Spring Framework ecosystem, including Spring Boot for scalable applications.",
    skills: ["Spring Framework", "Spring Boot", "RESTful APIs", "Java"],
    credentialUrl: "https://coursera.org/verify/H4IW5U95X5WY",
    category: "software",
  },
  {
    id: "google-tech-support-fundamentals",
    thumbnail: "/certs/google.webp",
    isSpecialization: false,
    issuer: "Google",
    title: "Technical Support Fundamentals",
    date: "Aug 30, 2025",
    description:
      "Covered the fundamentals of IT support, including computer hardware, the Internet, computer software, troubleshooting, and customer service.",
    skills: [
      "Binary Code",
      "Customer Support",
      "Linux",
      "Troubleshooting",
      "DNS",
    ],
    credentialUrl: "https://coursera.org/verify/0RDHEIUBYOV3",
    category: "security",
  },
  {
    id: "ibm-cloud-native-devops",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Cloud Native, Microservices, Containers, DevOps",
    date: "Aug 27, 2025",
    description:
      "Learned to build microservices, manage containers with Docker/Kubernetes, and apply Agile/Scrum in DevOps pipelines.",
    skills: ["Microservices", "Docker", "Kubernetes", "DevOps"],
    credentialUrl: "https://coursera.org/verify/G6AK17EELULT",
    category: "cloud",
  },
  {
    id: "ibm-html-css-js",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Introduction to HTML, CSS, & JavaScript",
    date: "Aug 13, 2025",
    description:
      "Developed dynamic and interactive web pages using HTML structure, CSS styling, and JavaScript logic.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    credentialUrl: "https://coursera.org/verify/A6MKL74YC75F",
    category: "software",
  },
  {
    id: "ibm-oop-java",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Object Oriented Programming in Java",
    date: "Aug 12, 2025",
    description:
      "Applied OOP concepts such as inheritance, polymorphism, encapsulation, and abstraction to define classes and objects.",
    skills: ["OOP", "Inheritance", "Polymorphism", "Java Collections"],
    credentialUrl: "https://coursera.org/verify/GKDPS4NOX0QX",
    category: "software",
  },
  {
    id: "ibm-git-github",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Getting Started with Git and GitHub",
    date: "Jul 28, 2025",
    description:
      "Learned version control concepts, creating repositories, branching, merging, and performing pull requests.",
    skills: ["Git", "GitHub", "Version Control", "Pull Requests"],
    credentialUrl: "https://coursera.org/verify/GTMXEWTSTY0C",
    category: "software",
  },
  {
    id: "ibm-java-beginners",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Java Programming for Beginners",
    date: "Jul 22, 2025",
    description:
      "Built job-ready Java skills including data types, control flow, and robust exception handling techniques.",
    skills: ["Java Syntax", "Exception Handling", "JDK Setup", "Debugging"],
    credentialUrl: "https://coursera.org/verify/VG6MQ523QTXA",
    category: "software",
  },
  {
    id: "ibm-intro-software-eng",
    thumbnail: "/certs/ibm.webp",
    isSpecialization: false,
    issuer: "IBM",
    title: "Introduction to Software Engineering",
    date: "Jul 13, 2025",
    description:
      "Explored the Software Development Lifecycle (SDLC), agile methodologies, and the various roles within software engineering.",
    skills: ["SDLC", "Agile", "Scrum", "Software Architecture"],
    credentialUrl: "https://coursera.org/verify/J9F7NY1DFUWU",
    category: "software",
  },
  {
    id: "letsupgrade-git",
    thumbnail: "/certs/LetsUpgrade.jpg",
    isSpecialization: false,
    issuer: "LetsUpgrade",
    title: "Git & GitHub Bootcamp",
    date: "Jun 18, 2025",
    description:
      "A 2-day bootcamp covering version control basics, branching strategies, and open source contribution.",
    skills: ["Git", "GitHub", "Version Control", "Collaboration"],
    credentialUrl: "https://www.letsupgrade.in/verify/LUEGGJUNI125544",
    category: "software",
  },
  {
    id: "be10x-ai-tools",
    thumbnail: "/certs/Be10x.png",
    isSpecialization: false,
    issuer: "Be10x",
    title: "AI Tools and ChatGPT Workshop",
    date: "May 24, 2025",
    description:
      "Workshop on leveraging AI for productivity, including creating presentations, analyzing data, and debugging code.",
    skills: ["ChatGPT", "AI Tools", "Prompt Engineering"],
    credentialUrl: "/certs/Be10x.png",
    category: "ai",
  },
  {
    id: "trendup-fullstack",
    thumbnail: "/certs/VAP.jpeg",
    isSpecialization: false,
    issuer: "TrendUp",
    title: "Full-Stack Development with Python",
    date: "Dec 20, 2024",
    description:
      "A value-added program focusing on end-to-end web application development using Python.",
    skills: ["Python", "Full-Stack", "Web Architecture"],
    credentialUrl: "/certs/VAP.pdf",
    category: "software",
  },
  {
    id: "ethical-byte-workshop",
    thumbnail: "/certs/BcBuzz.PNG",
    isSpecialization: false,
    issuer: "Ethical Byte",
    title: "Decode Your Target (Workshop)",
    date: "2024",
    description:
      "A workshop on ethical hacking and reconnaissance conducted by the Department of Digital and Cyber Forensic Science.",
    skills: ["Ethical Hacking", "Reconnaissance", "Cybersecurity"],
    credentialUrl: "/certs/Ethical Byte.pdf",
    category: "security",
  },
  // ===========================================================================
  // MICROSOFT CERTIFICATIONS
  // ===========================================================================
  {
    id: "microsoft-azure-data-1",
    thumbnail: "/certs/microsoft.webp",
    isSpecialization: false,
    issuer: "Microsoft",
    title: "Azure Data Fundamentals: Data Analytics",
    date: "Oct 28, 2022",
    description:
      "Explored the fundamentals of large-scale analytics, real-time analytics, and data visualization in Azure.",
    skills: ["Data Analytics", "Power BI", "Real-time Analytics"],
    credentialUrl: "/certs/Microsoft Azure Data Fundamentals 1.pdf",
    category: "cloud",
  },
  {
    id: "microsoft-azure-data-2",
    thumbnail: "/certs/microsoft.webp",
    isSpecialization: false,
    issuer: "Microsoft",
    title: "Azure Data Fundamentals: Non-Relational Data",
    date: "Oct 28, 2022",
    description:
      "Learned about Azure Storage and Azure Cosmos DB for building scalable, secure data stores for non-relational data.",
    skills: ["Azure Cosmos DB", "NoSQL", "Azure Storage"],
    credentialUrl: "/certs/Microsoft Azure Data Fundamentals 2.pdf",
    category: "cloud",
  },
  {
    id: "microsoft-azure-data-3",
    thumbnail: "/certs/microsoft.webp",
    isSpecialization: false,
    issuer: "Microsoft",
    title: "Azure Data Fundamentals: Relational Data",
    date: "Oct 28, 2022",
    description:
      "Covered relational database concepts and Microsoft Azure services for managing relational databases.",
    skills: ["SQL", "Relational Databases", "Azure SQL"],
    credentialUrl: "/certs/Microsoft Azure Data Fundamentals 3.pdf",
    category: "cloud",
  },
  {
    id: "microsoft-azure-data-4",
    thumbnail: "/certs/microsoft.webp",
    isSpecialization: false,
    issuer: "Microsoft",
    title: "Azure Data Fundamentals: Core Data Concepts",
    date: "Oct 28, 2022",
    description:
      "Identified common data formats, workloads, roles, and services in the world of data.",
    skills: ["Data Concepts", "Data Workloads", "Transactional Processing"],
    credentialUrl: "/certs/Microsoft Azure Data Fundamentals 4.pdf",
    category: "cloud",
  },
  {
    id: "microsoft-pl-900",
    thumbnail: "/certs/microsoft.webp",
    isSpecialization: true,
    issuer: "Microsoft",
    title: "PL-900: Power Platform Fundamentals",
    date: "Oct 28, 2022",
    description:
      "Validated understanding of the business value and capabilities of the Power Platform, including Power Apps and Power Automate.",
    skills: ["Power BI", "Power Apps", "Power Automate", "Low-Code"],
    credentialUrl: "/certs/Microsoft Power Platform Fundamentals.pdf",
    category: "cloud",
  },
];
