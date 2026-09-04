export const personalInfo = {
  name: "Devansh Sharma",
  shortName: "Devansh",
  initials: "DS",
  headline: "Turning ideas into intelligent digital experiences.",
  roles: [
    "AI/ML Developer",
    "Software Engineer",
    "Python Developer",
    "Full Stack Developer",
    "Backend Developer"
  ],
  bio: "I build intelligent, scalable and impactful digital solutions using Artificial Intelligence, Machine Learning and modern web technologies. Passionate about solving real-world problems through data-driven engineering and robust architectures.",
  detailedBio: "I'm a B.Tech student and technology enthusiast passionate about Artificial Intelligence, Machine Learning, backend development and full-stack applications. I enjoy solving real-world problems by building scalable and impactful software solutions.",
  status: "AVAILABLE FOR OPPORTUNITIES",
  email: "devanshsharma172005@gmail.com",
  phone: "+91 8851239551",
  location: "New Delhi, India",
  linkedin: "https://linkedin.com/in/DevanshSharmma",
  github: "https://github.com/DevanshSharmma",
  leetcode: "https://leetcode.com/u/DevanshSharmma/",
  resumeUrl: "/Resume.pdf",
};

export const stats = [
  { label: "Featured Projects", value: 3, suffix: "+", description: "AI & Full-Stack Systems" },
  { label: "Technologies Mastered", value: 15, suffix: "+", description: "Languages, Frameworks & AI" },
  { label: "Industry Experiences", value: 2, suffix: "", description: "Python & Industrial Software" },
  { label: "Dedication & Passion", value: 100, suffix: "%", description: "Committed to Innovation" }
];

export const aboutCards = [
  {
    id: "python",
    title: "Python Development",
    tag: "Core Engineering",
    description: "Building efficient backend systems, automation workflows and scalable applications with clean architecture.",
    color: "from-blue-500/20 to-cyan-500/10",
    borderGlow: "hover:border-blue-500/40"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    tag: "Intelligent Systems",
    description: "Exploring predictive models, intelligent automation, and AI-powered solutions using modern ML pipelines.",
    color: "from-purple-500/20 to-pink-500/10",
    borderGlow: "hover:border-purple-500/40"
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    tag: "End-to-End Apps",
    description: "Building modern applications from interactive frontend experiences to high-throughput backend APIs.",
    color: "from-cyan-500/20 to-blue-500/10",
    borderGlow: "hover:border-cyan-500/40"
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    tag: "Algorithmic Thinking",
    description: "Transforming complex real-world challenges into practical, reliable, and high-performance technology solutions.",
    color: "from-indigo-500/20 to-purple-500/10",
    borderGlow: "hover:border-indigo-500/40"
  }
];

export const education = {
  institution: "Dronacharya College of Engineering",
  degree: "Bachelor of Technology",
  period: "Aug 2023 – Present",
  cgpa: "7.90",
  location: "Gurugram, Haryana",
  highlights: [
    "Core focus on Computer Science, Algorithms, Machine Learning & Systems Architecture.",
    "Active contributor in technical projects, AI model pipelines and hackathons."
  ]
};

export const experiences = [
  {
    id: "cognifyz",
    role: "Python Development Intern",
    company: "Cognifyz Technologies",
    location: "New Delhi, Delhi",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    badge: "Backend & Data",
    highlights: [
      "Developed Python automation and data processing scripts for backend workflows.",
      "Integrated REST APIs and handled JSON-based data operations efficiently.",
      "Performed web scraping and data analysis using Pandas and NumPy.",
      "Worked on scalable backend logic and API response handling.",
      "Improved data processing efficiency and automated recurring business tasks."
    ],
    skills: ["Python", "REST APIs", "Pandas", "NumPy", "Automation", "JSON"]
  },
  {
    id: "bellsonica",
    role: "Industrial Trainee",
    company: "Bellsonica Auto Component India Pvt. Ltd.",
    location: "Manesar, Haryana",
    period: "Jun 2025 – Jul 2025",
    type: "Traineeship",
    badge: "Enterprise Systems",
    highlights: [
      "Built an Inventory Management System using Python and MySQL.",
      "Automated stock tracking, reporting, and inventory monitoring processes.",
      "Improved inventory data organization and operational workflows.",
      "Developed backend functionalities for secure data storage and fast retrieval.",
      "Collaborated on plant inventory tracking synchronization."
    ],
    skills: ["Python", "MySQL", "Inventory Systems", "Backend Logic", "Data Organization"]
  }
];

export const projects = [
  {
    id: "crash-guard-ai",
    number: "01",
    title: "CRASH GUARD AI",
    featured: true,
    tagline: "AI-Powered Accident Detection & Instant Emergency Response Platform",
    description: "An AI-powered accident detection and emergency response platform engineered to autonomously detect road collisions in real-time and coordinate rapid emergency workflows to save critical golden-hour lives.",
    features: [
      "AI/ML-based accident detection utilizing sensor telemetry and classification",
      "Automated emergency alerts dispatched immediately upon incident verification",
      "Location-based GIS tracking for exact coordinates of vehicle collisions",
      "Nearby medical facility & emergency responder identification API",
      "Robust backend API integration with high reliability failovers"
    ],
    technologies: ["Python", "React.js", "JavaScript", "FastAPI", "Scikit-learn", "SQLite"],
    period: "Aug 2026 – Present",
    statusBadge: "Active / Flagship Project",
    metrics: [
      { label: "Incident Detection", value: "< 1.2s" },
      { label: "Alert Dispatch Rate", value: "99.8%" },
      { label: "ML Model", value: "Scikit-learn" }
    ],
    githubUrl: "https://github.com/devanshsharma/crash-guard-ai",
    liveDemoUrl: "#crash-guard-demo"
  },
  {
    id: "insurance-system",
    number: "02",
    title: "INSURANCE COMPARISON SYSTEM",
    featured: false,
    tagline: "Intelligent Policy Matching & Analytical Recommendation Engine",
    description: "A comprehensive platform designed to compare complex insurance plans side-by-side, analyze coverage tradeoffs, and deliver tailored policy recommendations via high-performance REST APIs.",
    features: [
      "Insurance plan comparison with multi-parameter filtering algorithms",
      "Policy management APIs for insurer onboarding and plan cataloging",
      "Recommendation-based endpoints using FastAPI for user-tailored suggestions",
      "Optimized PostgreSQL queries delivering sub-50ms search responses",
      "Scalable data model handling diverse insurance tiers and premiums"
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "REST APIs"],
    period: "April 2026 – May 2026",
    statusBadge: "Completed",
    metrics: [
      { label: "Query Speed", value: "< 45ms" },
      { label: "API Framework", value: "FastAPI" },
      { label: "Database", value: "PostgreSQL" }
    ],
    githubUrl: "https://github.com/devanshsharma/insurance-comparison-system",
    liveDemoUrl: "#insurance-demo"
  },
  {
    id: "healthcare-system",
    number: "03",
    title: "HEALTHCARE APPOINTMENT SYSTEM",
    featured: false,
    tagline: "Full-Stack Patient Scheduling & Clinical Management Platform",
    description: "A modern, full-stack healthcare appointment management platform bridging patients and healthcare providers through seamless booking, real-time availability tracking, and medical record indexing.",
    features: [
      "Real-time appointment booking with doctor calendar synchronization",
      "Comprehensive patient medical history & visit records management",
      "Doctor roster scheduling and availability slot control",
      "JWT-based role authentication for patients, clinicians, and administrators",
      "Relational PostgreSQL persistence layer optimized for healthcare integrity"
    ],
    technologies: ["React", "Python", "PostgreSQL", "REST APIs"],
    period: "May 2025 – June 2025",
    statusBadge: "Completed",
    metrics: [
      { label: "Architecture", value: "Full Stack" },
      { label: "Frontend", value: "React" },
      { label: "Database", value: "PostgreSQL" }
    ],
    githubUrl: "https://github.com/devanshsharma/healthcare-appointment-system",
    liveDemoUrl: "#healthcare-demo"
  }
];

export const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    skills: [
      { name: "Python", icon: "SiPython", level: "Advanced", desc: "Backend, AI/ML, Automation" },
      { name: "Java", icon: "FaJava", level: "Proficient", desc: "OOP, Data Structures" },
      { name: "C++", icon: "SiCplusplus", level: "Proficient", desc: "Algorithms & Low-level logic" },
      { name: "JavaScript", icon: "SiJavascript", level: "Proficient", desc: "ES6+, Modern React, Async" },
      { name: "SQL", icon: "TbDatabase", level: "Advanced", desc: "Complex queries, Optimization" },
      { name: "HTML5", icon: "SiHtml5", level: "Advanced", desc: "Semantic Markup, Accessibility" },
      { name: "CSS3", icon: "SiCss3", level: "Advanced", desc: "Responsive Design, Animations" },
      { name: "R", icon: "SiR", level: "Intermediate", desc: "Statistical Analysis" }
    ]
  },
  {
    id: "frameworks",
    name: "Frameworks & Backend",
    skills: [
      { name: "React", icon: "SiReact", level: "Advanced", desc: "Hooks, State, Component Arch" },
      { name: "FastAPI", icon: "SiFastapi", level: "Advanced", desc: "Asynchronous APIs, Pydantic" },
      { name: "Node.js", icon: "SiNodedotjs", level: "Proficient", desc: "Runtime, REST Services" },
      { name: "Flask", icon: "SiFlask", level: "Proficient", desc: "Microservices & Prototyping" }
    ]
  },
  {
    id: "database",
    name: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql", level: "Advanced", desc: "Relational modeling, Indexing" },
      { name: "MySQL", icon: "SiMysql", level: "Advanced", desc: "Transactions, Stored Procedures" },
      { name: "SQLite", icon: "SiSqlite", level: "Proficient", desc: "Embedded storage, Local testing" }
    ]
  },
  {
    id: "ai-data",
    name: "AI / Data Science",
    skills: [
      { name: "Machine Learning", icon: "GiBrain", level: "Advanced", desc: "Supervised & Unsupervised Models" },
      { name: "Deep Learning", icon: "TbBrain", level: "Intermediate", desc: "Neural Architectures, Vision" },
      { name: "Artificial Intelligence", icon: "HiSparkles", level: "Advanced", desc: "Intelligent Agents & Automation" },
      { name: "Scikit-learn", icon: "SiScikitlearn", level: "Advanced", desc: "Pipelines, Classifiers, Regression" },
      { name: "Pandas", icon: "SiPandas", level: "Advanced", desc: "Data Wrangling & Transformation" },
      { name: "NumPy", icon: "SiNumpy", level: "Advanced", desc: "Vectorized Numerical Ops" },
      { name: "Matplotlib", icon: "FaChartLine", level: "Proficient", desc: "Data Visualization & Plotting" }
    ]
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: "SiDocker", level: "Proficient", desc: "Containerization & Isolation" },
      { name: "Google Cloud", icon: "SiGooglecloud", level: "Proficient", desc: "Cloud Computing, Deployments" },
      { name: "Git", icon: "SiGit", level: "Advanced", desc: "Version Control, Branching" },
      { name: "GitHub", icon: "SiGithub", level: "Advanced", desc: "Collaboration & Repositories" },
      { name: "PyCharm", icon: "SiPycharm", level: "Advanced", desc: "Python IDE & Debugging" },
      { name: "Jupyter Notebook", icon: "SiJupyter", level: "Advanced", desc: "ML Prototyping & EDA" }
    ]
  }
];

export const marqueeTech = [
  { name: "Python", icon: "SiPython", color: "#38bdf8" },
  { name: "React", icon: "SiReact", color: "#61dafb" },
  { name: "FastAPI", icon: "SiFastapi", color: "#009688" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
  { name: "Docker", icon: "SiDocker", color: "#2496ed" },
  { name: "Machine Learning", icon: "GiBrain", color: "#a855f7" },
  { name: "Scikit-learn", icon: "SiScikitlearn", color: "#f59e0b" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#68a063" },
  { name: "MySQL", icon: "SiMysql", color: "#00758f" },
  { name: "Google Cloud", icon: "SiGooglecloud", color: "#ea4335" },
  { name: "Pandas", icon: "SiPandas", color: "#150458" },
  { name: "GitHub", icon: "SiGithub", color: "#e2e8f0" }
];

export const certifications = [
  {
    id: "deloitte",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    badge: "Enterprise Analytics",
    date: "Certified",
    description: "Completed comprehensive practical job simulation covering data analysis, business insight synthesis, and dashboard interpretation for corporate decision-making.",
    skills: ["Data Analytics", "Business Intelligence", "Problem Solving"],
    icon: "FaChartPie"
  },
  {
    id: "tata",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata",
    badge: "GenAI & AI/ML",
    date: "Certified",
    description: "Hands-on simulation focusing on leveraging Generative AI algorithms and automated pipelines for predictive intelligence and automated enterprise data workflows.",
    skills: ["Generative AI", "Data Pipelines", "Predictive Analytics"],
    icon: "HiSparkles"
  },
  {
    id: "ai-agent",
    title: "AI Agent Fundamentals",
    issuer: "Academy Accreditation",
    badge: "Agentic Systems",
    date: "Accredited",
    description: "Comprehensive foundational mastery of autonomous AI agent architectures, tool execution loops, prompt engineering, and intelligent workflow automation.",
    skills: ["AI Agents", "Autonomous Systems", "Tool Execution"],
    icon: "GiRobotGolem"
  },
  {
    id: "web-dev",
    title: "Web Development Fundamentals",
    issuer: "Industry Credential",
    badge: "Full Stack Core",
    date: "Certified",
    description: "In-depth foundation in modern full-stack web development principles, client-server architectures, responsive design, and API communications.",
    skills: ["Frontend", "REST APIs", "Modern Web Standards"],
    icon: "FaCode"
  }
];

export const driveStations = [
  {
    id: "about",
    number: "01",
    name: "Launchpad",
    subtitle: "About Devansh and Engineering Philosophy",
    icon: "Rocket",
    color: "#3b82f6",
    trackX: 500,
    trackY: 220,
    width: 250,
    height: 150
  },
  {
    id: "skills",
    number: "02",
    name: "Tech Garage",
    subtitle: "28+ Languages, AI Models and Frameworks",
    icon: "Wrench",
    color: "#06b6d4",
    trackX: 1150,
    trackY: 220,
    width: 250,
    height: 150
  },
  {
    id: "projects",
    number: "03",
    name: "Cyber Showroom",
    subtitle: "Crash Guard AI and Production Systems",
    icon: "Layers",
    color: "#a855f7",
    trackX: 1400,
    trackY: 700,
    width: 270,
    height: 150
  },
  {
    id: "certs",
    number: "04",
    name: "Trophy Arena",
    subtitle: "Deloitte, Tata and AI Accreditations",
    icon: "Award",
    color: "#ec4899",
    trackX: 1150,
    trackY: 1180,
    width: 250,
    height: 150
  },
  {
    id: "experience",
    number: "05",
    name: "Pit-Stop",
    subtitle: "Cognifyz, Bellsonica and Dronacharya College",
    icon: "Clock",
    color: "#10b981",
    trackX: 500,
    trackY: 1180,
    width: 250,
    height: 150
  },
  {
    id: "contact",
    number: "06",
    name: "Finish Line",
    subtitle: "LeetCode, GitHub, Direct Dispatch and Socials",
    icon: "Flag",
    color: "#f59e0b",
    trackX: 200,
    trackY: 700,
    width: 260,
    height: 150
  }
];
