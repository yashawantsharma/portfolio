import devpathImg from '../assets/devpath_preview.jpg';
import insuranceImg from '../assets/insurance_preview.jpg';
import instituteImg from '../assets/institute_preview.jpg';

export const portfolioData = {
  personal: {
    name: "Yashawant Sharma",
    handle: "@yashawant_sharma",
    status: "Available for MERN & Full-Stack Opportunities",
    title: "MERN Stack Developer & Full-Stack Engineer",
    tagline: "Building scalable web applications, RESTful APIs, and responsive interfaces with MongoDB, Express.js, React.js, Node.js, and Next.js.",
    bio: "MERN Stack Developer with hands-on experience in developing full-stack web applications. Experienced in building robust RESTful APIs, CRUD operations, responsive user interfaces, and database solutions. Strong foundation in Data Structures & Algorithms, with a focus on writing clean, efficient, and scalable code.",
    location: "Jaipur / Bikaner, Rajasthan, India",
    phone: "+91 8239727798",
    experienceYears: "1+",
    projectsCompleted: "5+",
    dsaSolved: "200+",
    uptimeRecord: "100%",
    resumeUrl: "#resume",
    socials: {
      github: "https://github.com/yashawant-sharma",
      linkedin: "https://linkedin.com/in/yashawant-sharma",
      leetcode: "https://leetcode.com/u/yashawant_sharma",
      email: "yashawantsharma785@gmail.com",
      phone: "+91 8239727798"
    }
  },

  about: {
    heading: "Crafting scalable full-stack architectures and responsive web experiences.",
    paragraphs: [
      "I am a MERN Stack Developer specializing in developing end-to-end web applications with MongoDB, Express.js, React.js, Node.js, and Next.js. I have hands-on experience engineering RESTful APIs, relational & NoSQL databases, middleware authentication, and cloud asset integrations.",
      "With a strong background in Computer Applications (BCA) and Data Structures & Algorithms (C++, JavaScript), I build maintainable software with clean MVC/Repository design patterns, seamless state management, and optimized database queries."
    ],
    bentoStats: [
      { label: "Core Tech Stack", value: "MERN", detail: "MongoDB, Express, React, Node + Next.js" },
      { label: "Education", value: "BCA", detail: "Maharaja Ganga Singh University (2022–2025)" },
      { label: "Problem Solving", value: "DSA", detail: "200+ LeetCode & C++ Algorithms" },
      { label: "Cloud Platforms", value: "3+", detail: "Vercel, Render & Netlify" }
    ],
    corePrinciples: [
      { title: "Clean API & Schema Design", desc: "Layered MVC architecture, RESTful conventions, robust indexing, and schema validations in MongoDB & MySQL." },
      { title: "Responsive & Tactile UI", desc: "Dynamic rendering, Tailwind CSS & React Hooks for seamless cross-device performance." },
      { title: "Secure & Automated Workflows", desc: "JWT role-based access control (RBAC), bcrypt hashing, Nodemailer workflows, and Cloudinary media pipelines." }
    ]
  },

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        icon: "Layout",
        description: "Modern, responsive, dynamic web applications with React, Next.js, and CSS systems.",
        skills: [
          { name: "React.js", level: "Core Stack", tag: "Advanced", desc: "Hooks, Context API, Virtual DOM, Component Architecture, SPA" },
          { name: "Next.js", level: "Production", tag: "Proficient", desc: "Server/Client Components, App Router, Dynamic Routing, API Routes" },
          { name: "JavaScript (ES6+)", level: "Core Stack", tag: "Proficient", desc: "Async/Await, Promises, Closures, DOM Manipulation, Modules" },
          { name: "Tailwind CSS", level: "Design System", tag: "Advanced", desc: "Utility-first styling, Responsive Grids, Flexbox, Custom Themes" },
          { name: "HTML5 & CSS3", level: "Foundation", tag: "Expert", desc: "Semantic Markup, Modern CSS Grid, Glassmorphism, Animations" },
          { name: "Responsive UI/UX", level: "Cross-Device", tag: "Advanced", desc: "Mobile-first layouts, Touch accessibility, High DPI optimization" }
        ]
      },
      {
        id: "backend",
        name: "Backend & REST APIs",
        icon: "Server",
        description: "Robust server-side logic, layered MVC architectures, and secure API gateways.",
        skills: [
          { name: "Node.js", level: "Runtime", tag: "Proficient", desc: "Event-driven runtime, NPM ecosystems, Asynchronous I/O streams" },
          { name: "Express.js", level: "API Framework", tag: "Advanced", desc: "Custom Middlewares, RESTful routing, Error handling, CORS" },
          { name: "RESTful API Engineering", level: "Architecture", tag: "Advanced", desc: "CRUD operations, HTTP verbs, Pagination, Query filtering, JSON responses" },
          { name: "JWT & Bcrypt Security", level: "Auth System", tag: "Proficient", desc: "Token verification, Salt hashing, Protected routes, Role permissions" },
          { name: "Role-Based Access Control (RBAC)", level: "Security", tag: "Proficient", desc: "Multi-tier portals for Admins, Employees, Tutors, and Users" },
          { name: "Nodemailer & Cloudinary", level: "Integrations", tag: "Proficient", desc: "Automated SMTP email receipts, OTP recovery, Cloud media storage" }
        ]
      },
      {
        id: "database",
        name: "Databases & ORM",
        icon: "Database",
        description: "Relational and document data modeling, indexing, and high-performance querying.",
        skills: [
          { name: "MongoDB Atlas", level: "NoSQL", tag: "Proficient", desc: "Document collections, Aggregation pipelines, BSON indexing, Atlas Cloud" },
          { name: "Mongoose ODM", level: "Data Modeling", tag: "Advanced", desc: "Schema design, Compound indexing, Population refs, Validations" },
          { name: "MySQL Relational DB", level: "RDBMS", tag: "Proficient", desc: "Tables, Foreign keys, Relational schema normalization, Constraints" },
          { name: "Sequelize ORM", level: "Data Layer", tag: "Proficient", desc: "Repository pattern, MVC abstraction, Model associations & migrations" },
          { name: "Caching Architecture", level: "Optimization", tag: "Proficient", desc: "Database-persisted AI fallback caching, 0ms query retrieval" }
        ]
      },
      {
        id: "core-tools",
        name: "Core CS & DevOps Tools",
        icon: "Cpu",
        description: "Algorithmic problem-solving, version control, and cloud continuous deployment.",
        skills: [
          { name: "Data Structures & Algorithms", level: "C++ / JS", tag: "Proficient", desc: "Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, Sorting" },
          { name: "LeetCode Problem Solving", level: "200+ Solved", tag: "Active", desc: "Algorithmic optimization, Time & Space complexity analysis" },
          { name: "Git & GitHub", level: "Version Control", tag: "Advanced", desc: "Branching workflows, Pull requests, Merge conflict resolution" },
          { name: "Postman & API Testing", level: "Testing", tag: "Proficient", desc: "Endpoint validation, Auth headers, Payload debugging, Collections" },
          { name: "Cloud Deployment", level: "DevOps", tag: "Proficient", desc: "Vercel (Frontend), Render (APIs), Netlify, Environment configurations" }
        ]
      }
    ],
    bentoHighlights: [
      {
        title: "Full-Stack MERN Architecture",
        desc: "End-to-end applications built with MongoDB, Express.js, React.js, Node.js, and Next.js.",
        tag: "Core Focus"
      },
      {
        title: "Algorithmic Foundation",
        desc: "200+ Data Structures & Algorithms challenges solved across LeetCode with C++ and JavaScript.",
        tag: "200+ Solved"
      },
      {
        title: "Production Security & Auth",
        desc: "Role-Based Access Control (RBAC), JWT token verification, and bcrypt salt encryption.",
        tag: "Enterprise Auth"
      },
      {
        title: "Cloud & Media Integrations",
        desc: "Cloudinary CDN pipelines, Nodemailer automated SMTP, and Google Gemini AI APIs.",
        tag: "Cloud Native"
      }
    ]
  },

  projects: [
    {
      id: "devpath-learning",
      title: "DevPath — Developer Learning Platform",
      subtitle: "AI-Augmented Technical Assessment & Knowledge Hub",
      category: "AI & Full-Stack",
      image: devpathImg,
      summary: "An intelligent developer learning ecosystem featuring Google Gemini AI fallback generation, MySQL write-through caching, personalized bookmarking, and interactive MCQ quizzes.",
      description: "DevPath bridges the gap in developer education by unifying comprehensive multi-topic roadmaps with on-demand AI explanations and real-time assessments.",
      problem: "Traditional developer documentation is often static and lacks interactive validation. When learners face gaps in curated topics, they must context-switch to external search engines without structured learning continuity.",
      solution: "Engineered an intelligent fallback pipeline: if requested concepts are not pre-seeded in MySQL, the system automatically prompts Gemini AI to generate structured technical breakdowns with code snippets, saves the result back into MySQL, and instantly returns cached responses for future learners.",
      highlights: [
        "Integrated Gemini AI as a fallback mechanism to dynamically generate technical explanations when requested content is unavailable in MySQL.",
        "Persisted AI-generated explanations in MySQL, enabling subsequent requests to retrieve cached content directly and reducing unnecessary Gemini API calls.",
        "Implemented user-specific bookmarking, MCQ assessments with scoring/explanations, and bcrypt-based password security.",
        "Architected JWT authentication & Sequelize ORM using MVC and Repository patterns, separating Controller, Service, and Repository layers.",
        "Engineered database-driven text search across Technologies, Topics, SubTopics, and technical explanations."
      ],
      modules: [
        {
          title: "Intelligent Gemini AI Fallback & Cache Engine",
          desc: "Queries MySQL first; on cache miss, triggers Google Gemini 1.5 Pro API with tailored prompts and stores formatted responses directly into MySQL tables for 0ms future latency."
        },
        {
          title: "Interactive MCQ Assessment Engine",
          desc: "Multi-technology quiz module with timer controls, randomized answer options, immediate explanation breakdowns, and score persistence."
        },
        {
          title: "User Knowledge Vault & Bookmarks",
          desc: "Secure user profiles enabling custom topic bookmarking, reading history tracking, and saved assessment performance metrics."
        },
        {
          title: "Layered MVC & Repository Architecture",
          desc: "Clean separation of Controllers, Services, and Data Repositories using Sequelize ORM ensuring robust query management and scalability."
        }
      ],
      stackArchitecture: {
        frontend: "Next.js 14, React 18, Tailwind CSS, Lucide React, Markdown Parsing",
        backend: "Node.js, Express.js REST APIs, Sequelize ORM, Controller-Service-Repository Pattern",
        database: "MySQL (Indexed Relational Tables, Foreign Key Constraints, Text Indexing)",
        security: "JWT Authentication, Bcrypt Password Encryption, CORS & Security Headers",
        aiCloud: "Google Gemini 1.5 Pro API, Vercel (Frontend), Render (API)"
      },
      challenges: [
        {
          issue: "High latency and API rate-limits when generating real-time AI explanations for unseeded topics.",
          solution: "Implemented MySQL write-through caching layer that stores every AI generation indexed by topic hash, dropping duplicate API calls to zero."
        },
        {
          issue: "Maintaining strict data integrity across complex parent-child topic hierarchies.",
          solution: "Designed normalized Sequelize relational models for Technologies -> Topics -> Subtopics with cascading foreign keys."
        }
      ],
      techStack: ["Next.js", "React.js", "Node.js", "Express.js", "Sequelize ORM", "MySQL", "Tailwind CSS", "JWT", "Gemini AI", "REST APIs"],
      metrics: "Gemini AI + MySQL Cache",
      status: "Production Ready",
      demoUrl: "https://devpath-platform.vercel.app",
      repoUrl: "https://github.com/yashawant-sharma/devpath",
      featured: true,
      color: "#89c2d9"
    },
    {
      id: "life-insurance-system",
      title: "Life Insurance Management System",
      subtitle: "Centralized Enterprise Insurance & Workflow Portal",
      category: "Full-Stack Enterprise",
      image: insuranceImg,
      summary: "A centralized Life Insurance Management System streamlining operations for branches, agents, customers, policy administration, and automated payment receipts.",
      description: "An enterprise-grade insurance software suite designed to eliminate operational friction across policy lifecycle management, agent commission tracking, and customer claims.",
      problem: "Manual paperwork, scattered customer policy documents, delayed claim approvals, and lack of automated communication between agents and policyholders create major operational bottlenecks.",
      solution: "Engineered a centralized MERN web portal with dedicated role-based dashboards (Admin, Agent, Customer), automated email transaction receipts via Nodemailer, and secure KYC document uploads via Cloudinary.",
      highlights: [
        "Engineered RESTful APIs and CRUD operations using Express.js and Mongoose, incorporating middleware-driven business logic and MongoDB schemas.",
        "Implemented JWT authentication and access control with dedicated Admin, Agent, and User dashboards.",
        "Supported policy administration, customer records, payment processing, and transaction status tracking.",
        "Built responsive dashboard interface with dynamic data rendering, form-based record updates, and intuitive navigation.",
        "Integrated Nodemailer and Cloudinary for automated email notifications, OTP-based recovery, and secure media uploads."
      ],
      modules: [
        {
          title: "Multi-Role RBAC Dashboards",
          desc: "Dedicated role-specific control panels for Admins (system oversight, policy catalog), Agents (assigned clients, sales tracking), and Users (active policies, payment history)."
        },
        {
          title: "Policy & Premium Administration",
          desc: "Support for Term Life, Whole Life, and Annuity plans with installment calculations, due-date reminders, and status workflows."
        },
        {
          title: "Cloud KYC & Document Management",
          desc: "Secure media pipeline using Cloudinary API for identity proof uploads, verification reviews, and automated status tagging."
        },
        {
          title: "Automated Communication & OTP Pipeline",
          desc: "Integrated Nodemailer for policy activation alerts, OTP-based password recovery, and payment confirmation invoices."
        }
      ],
      stackArchitecture: {
        frontend: "React.js (SPA), React Hooks, Context API, CSS3 Modules, Responsive Grid",
        backend: "Node.js, Express.js REST APIs, Middleware Authentication, Role Verification",
        database: "MongoDB, Mongoose ODM (Complex Aggregations & Schema Validations)",
        security: "JWT Token-based Auth, Bcrypt Password Encryption, Protected API Routes",
        aiCloud: "Cloudinary Media CDN, Nodemailer SMTP, Render Deployment"
      },
      challenges: [
        {
          issue: "Preventing unauthorized access across multiple user roles with differing permissions.",
          solution: "Engineered reusable Express middleware checking decoded JWT role claims before granting access to specific API endpoints."
        },
        {
          issue: "Handling heavy document uploads without slowing down backend request threads.",
          solution: "Used Multer with stream piping directly to Cloudinary cloud storage, returning secure CDN URLs for database storage."
        }
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST APIs", "Nodemailer", "Cloudinary"],
      metrics: "Multi-Role RBAC Dashboards",
      status: "Full-Stack Deployed",
      demoUrl: "https://insurance-mgmt.render.com",
      repoUrl: "https://github.com/yashawant-sharma/life-insurance-system",
      featured: true,
      color: "#004e82"
    },
    {
      id: "institute-management-system",
      title: "Institute Management System",
      subtitle: "Academic & Administration ERP with 4-Tier RBAC",
      category: "Full-Stack & Systems",
      image: instituteImg,
      summary: "A full-scale Academic ERP platform providing 4-tier Role-Based Access Control for Administrators, HR/Employees, Tutors, and Students.",
      description: "A comprehensive institutional ERP engineered to unify academic planning, timetable scheduling, faculty-batch assignment, fee collection, and student performance tracking into a seamless web interface.",
      problem: "Educational institutions struggle with fragmented spreadsheets for scheduling classes, tracking fee payments, managing employee payroll, and sharing timetable updates with students.",
      solution: "Developed an enterprise ERP system featuring 4 specialized role portals, automated course-batch mapping algorithms, search & multi-filter data tables, and automated email broadcast notifications.",
      highlights: [
        "Engineered secure RESTful APIs with JWT auth, bcrypt hashing, reusable middleware, RBAC, and CRUD operations for students, tutors, employees, and fees.",
        "Developed academic workflows covering course-batch mapping, tutor assignment, student enrollment, calendar scheduling, and timetable tracking.",
        "Implemented text-based search, multi-field filtering, sorting, status handling, Express routing, and centralized error handling.",
        "Integrated Nodemailer and Cloudinary for automated email notifications, OTP verification, password recovery, and media uploads."
      ],
      modules: [
        {
          title: "4-Tier Role Portals (Admin, HR, Tutor, Student)",
          desc: "Admin command center, HR staff/payroll module, Tutor batch/attendance desk, and Student study/fee ledger."
        },
        {
          title: "Course-Batch Mapping & Timetable Engine",
          desc: "Dynamic scheduling system mapping teachers to subjects and batches with conflict detection and room assignment."
        },
        {
          title: "Fee Tracking & Financial Breakdown",
          desc: "Tuition, hostel, and examination fee ledger with paid, pending, and overdue breakdown charts."
        },
        {
          title: "Instant Search & Multi-Filter Query Engine",
          desc: "High-performance MongoDB indexing enabling instant search across thousands of student and employee records."
        }
      ],
      stackArchitecture: {
        frontend: "React.js, React Router, Custom Glassmorphism UI, Responsive Dashboards",
        backend: "Node.js, Express.js RESTful Architecture, Centralized Error Handling",
        database: "MongoDB Atlas, Mongoose ODM with populated references",
        security: "4-Tier RBAC, JWT tokens in secure headers, Bcrypt password hashing",
        aiCloud: "Cloudinary Assets API, Nodemailer Email Service, Render Hosting"
      },
      challenges: [
        {
          issue: "Managing complex relational mappings between courses, multiple batches, tutors, and student lists in NoSQL MongoDB.",
          solution: "Structured normalized reference schemas with Mongoose `.populate()` queries and compound indexes for fast sub-50ms data retrieval."
        },
        {
          issue: "Real-time fee status updates and automated payment alert dispatches.",
          solution: "Integrated asynchronous Nodemailer triggers upon fee record updates to alert students with PDF/email receipts."
        }
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST APIs", "Nodemailer", "Cloudinary"],
      metrics: "4 Role Portals & Workflows",
      status: "Production Architecture",
      demoUrl: "https://institute-mgmt.render.com",
      repoUrl: "https://github.com/yashawant-sharma/institute-management-system",
      featured: true,
      color: "#5b9dbf"
    }
  ],

  experience: [
    {
      period: "Aug 2025 — Present",
      role: "MERN Stack Intern",
      company: "REGex Software Services",
      location: "Jaipur, Rajasthan",
      badge: "Current Role",
      description: "Developing and maintaining full-stack web applications using the MERN Stack and Next.js, actively contributing to both frontend and backend development.",
      achievements: [
        "Developed CRUD operations and RESTful APIs using Node.js, Express.js, and MongoDB, while designing and managing MongoDB schemas for efficient application data management.",
        "Developed responsive user interfaces using React.js, Next.js, and React Hooks, integrating frontend components with backend REST APIs.",
        "Implemented clean state management, modular components, and reusable middleware for scalable full-stack applications."
      ],
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "React Hooks"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maharaja Ganga Singh University",
      location: "Bikaner, Rajasthan",
      period: "08/2022 – 05/2025",
      badge: "Graduated",
      highlights: [
        "Core coursework in Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming, and Web Development.",
        "Practical software engineering projects utilizing C++, JavaScript, and full-stack web technologies."
      ]
    }
  ],

  terminalHelp: [
    { cmd: "help", desc: "List all available terminal commands" },
    { cmd: "about", desc: "Display Yashawant's summary and background" },
    { cmd: "skills", desc: "Dump technical matrix (MERN, Next.js, MySQL, DSA)" },
    { cmd: "projects", desc: "View DevPath, Insurance & Institute systems" },
    { cmd: "experience", desc: "View REGex Software Services internship details" },
    { cmd: "education", desc: "Display BCA degree from Maharaja Ganga Singh University" },
    { cmd: "contact", desc: "Get direct phone, email, LinkedIn, and LeetCode" },
    { cmd: "clear", desc: "Clear terminal screen" },
    { cmd: "gui", desc: "Close terminal HUD" }
  ]
};
