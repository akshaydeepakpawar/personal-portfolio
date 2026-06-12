import type { Journey, Project, Contact, SkillCategory, Stat } from "@/types";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS: Stat[] = [
  { value: "400+", label: "LeetCode Problems" },
  { value: "4", label: "Production Projects" },
  { value: "Next.js", label: "Specialist" },
  { value: "AI", label: "Applications Built" },
];

export const HERO_BADGE = "Available for opportunities";

export const HERO_HEADLINE = "Full-Stack Developer & Next.js Specialist";

export const HERO_SUBHEADLINE =
  "I build AI-powered full-stack applications with modern web technologies.";

export const HERO_DESCRIPTION =
  "Computer Science graduate with freelance client delivery experience and a passion for building production-grade full-stack applications. I specialize in the Next.js ecosystem — from designing PostgreSQL schemas and REST APIs to crafting polished UIs with Tailwind CSS. Recently focused on AI-integrated platforms: multi-model chat systems, intelligent audit engines, and real-time code execution platforms. Strong CS fundamentals with 400+ LeetCode problems solved.";

export const ABOUT_CONTENT = `I'm a Computer Science graduate (B.E., CGPA 8.57) who builds production-grade full-stack applications from the ground up.

I specialize in the Next.js + TypeScript ecosystem — designing database schemas with PostgreSQL and Prisma, building REST APIs with Node.js and Express, and crafting polished user interfaces with Tailwind CSS. My projects span AI-powered platforms, real-time code execution engines, and multi-model chat applications.

Beyond the stack, I'm deeply invested in problem-solving. Solving 400+ LeetCode problems has sharpened my algorithmic thinking — making me a more effective engineer who writes cleaner, more efficient code.

I've also delivered paid client work as a freelance full-stack developer — taking projects from requirements to production deployment with real stakeholder communication and independent ownership.

I'm currently seeking a Full-Stack Developer role where I can build impactful products, work with modern technologies, and continue growing as an engineer.`;

export const ABOUT_HIGHLIGHTS = [
  { label: "Full-Stack", desc: "End-to-end application development", gradient: "from-accent-400 to-purple-400" },
  { label: "AI Integration", desc: "LLM APIs & intelligent features", gradient: "from-purple-400 to-cyan-400" },
  { label: "Problem Solver", desc: "400+ LeetCode challenges solved", gradient: "from-cyan-400 to-accent-400" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "SQL", "C++", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "AI SDK"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Linux", "Postman", "Prisma", "Vercel"],
  },
  {
    category: "CS Fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const JOURNEY: Journey[] = [
  {
    year: "2025",
    title: "B.E. Computer Science",
    subtitle: "Terna Engineering College, Nerul",
    description:
      "Graduated with a CGPA of 8.57. Built a strong foundation in computer science fundamentals — data structures, algorithms, database management, operating systems, and computer networks.",
  },
  {
    year: "2025 — 2026",
    title: "DSA Mastery",
    subtitle: "400+ Problems on LeetCode",
    description:
      "Solved over 400 LeetCode problems spanning arrays, dynamic programming, graphs, trees, and system design. Consistently sharpening algorithmic thinking and problem-solving ability.",
  },
  {
    year: "2026",
    title: "Full-Stack Coding Platform",
    subtitle: "LeetCode-Inspired Platform",
    description:
      "Built a full-stack coding platform with real-time code execution via Judge0, automated test evaluation, admin dashboards, and user progress tracking with secure authentication.",
  },
  {
    year: "2026",
    title: "AI Chat Application",
    subtitle: "Multi-Model Chat Platform",
    description:
      "Developed a production-ready AI chat platform supporting 30+ AI models with real-time streaming, conversation persistence, full-text search, and dynamic model selection.",
  },
  {
    year: "2026",
    title: "StackSpend",
    subtitle: "AI Spend Audit Platform",
    description:
      "Created an AI-powered SaaS platform that audits AI tool subscriptions and identifies cost optimization opportunities. Features PDF reporting, email delivery, and CI/CD pipelines.",
  },
  {
    year: "2026 — Present",
    title: "Freelance Full-Stack Developer",
    subtitle: "Client Projects",
    description:
      "Delivering production-ready web applications for clients end-to-end — from requirement gathering and architecture design to deployment and post-launch support. Built with Next.js, TypeScript, PostgreSQL, and Prisma. Demonstrates real-world client communication, project ownership, and independent delivery.",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "StackSpend",
    image: "/images/myprojects/Project-3.webp",
    description:
      "AI spend auditing platform that helps developers and engineering teams analyze AI tool subscriptions and identify cost-saving opportunities. Features rule-based audits, AI-generated summaries, PDF exports, and CI/CD pipelines.",
    features: [
      "Rule-based audit engine for 6+ AI tools (ChatGPT, Claude, Cursor, Copilot, Gemini, Windsurf)",
      "AI-generated audit summaries with OpenRouter",
      "PDF report generation and automated email delivery via Resend",
      "Audit history with public shareable report links",
      "Lead capture system with email integration",
      "CI/CD with GitHub Actions, Vitest testing, and Vercel deployment",
    ],
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "OpenRouter",
      "Resend",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
      "Vercel",
    ],
    link: "https://stackspend-kappa.vercel.app/",
    github: "https://github.com/akshaydeepakpawar/stackspend",
    featured: true,
  },
  {
    title: "AI Chat Application",
    image: "/images/myprojects/Project-2.webp",
    description:
      "Production-ready AI chat platform with support for 30+ AI models. Real-time streaming responses, authentication, conversation history, search, and dynamic model selection.",
    features: [
      "30+ AI models via OpenRouter integration (GPT-4, Claude, Gemini, Llama, etc.)",
      "Real-time streaming responses with AI SDK",
      "Authentication with Better Auth and session management",
      "Conversation persistence with PostgreSQL and Prisma",
      "Full-text search across conversation history",
      "Responsive, accessible UI with shadcn/ui components",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "AI SDK",
      "OpenRouter",
      "Tailwind CSS",
    ],
    link: "https://t3-chat-t395.vercel.app/",
    github: "https://github.com/akshaydeepakpawar/t3-chat",
    featured: false,
  },
  {
    title: "Full-Stack Coding Platform",
    image: "/images/myprojects/Project-1.webp",
    description:
      "A LeetCode-inspired coding platform with real-time code execution, automated test evaluation, admin dashboard, and user progress tracking. Built with Next.js 14 and TypeScript.",
    features: [
      "Judge0 API integration for secure, real-time code execution",
      "Multi-language support (Python, Java, C++, JavaScript)",
      "Automated test case evaluation with pass/fail feedback",
      "Admin dashboard for problem and test case management",
      "User profiles with detailed submission history and stats",
      "Playlist-based problem organization for interview prep",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Tailwind CSS",
      "Judge0 API",
    ],
    link: "https://leetcode-nextjs-clone-vafh.vercel.app/",
    github: "https://github.com/akshaydeepakpawar/leetcode-nextjs-clone",
    featured: false,
  },
];

export const ACHIEVEMENTS = [
  "400+ LeetCode Problems Solved",
  "DBMS Certification",
  "DSA Certification",
  "B.E. Computer Science — CGPA 8.57",
];

export const CONTACT_INFO: Contact = {
  address: "Navi Mumbai, Maharashtra, India",
  phoneNo: "+91 9326182557",
  email: "ap3690700@gmail.com",
};
