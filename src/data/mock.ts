import type { PersonalInfo, HeroLink, Stat, Experience, SkillGroup, Education, ContactCard, Project } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Utkarsh Garg",
  title: "Full Stack Developer",
  location: "Pune, India",
  headline: "Full Stack Developer · Pune, India",
  heroBadge: "SHIPPING HUMAN + AI EXPERIENCES",
  heroStatement:
    "I help product teams craft resilient micro-frontends, AI-native UX, and real-time applications that feel effortless.",
  heroSubtext:
    "With 8+ years across Attentions AI, Coditas, and TCS, I specialise in Next.js, Angular, AI agent orchestration, streaming transports, and DX tooling that brings ideas to production faster.",
  resumeUrl: "/Utkarsh_react_resume.pdf",
  email: "utkarshgarg334@gmail.com",
  phone: "+91 95488 88049",
  linkedin: "https://www.linkedin.com/in/utkarsh-garg-0545a0155",
};

export const heroLinks: HeroLink[] = [
  { label: "Drop me a line", href: `mailto:${personalInfo.email}` },
  { label: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s+/g, "")}` },
  { label: "LinkedIn", href: personalInfo.linkedin },
];

export const stats: Stat[] = [
  {
    label: "Micro-frontends shipped",
    value: "10+",
    detail: "Enterprise-scale surfaces",
  },
  {
    label: "Performance uplift",
    value: "40%",
    detail: "Through real-time optimizations",
  },
  {
    label: "Teams supported",
    value: "6",
    detail: "Design, AI, backend, mobile",
  },
  { label: "Years of experience", value: "8+", detail: "Full stack delivery" },
];

export const experiences: Experience[] = [
  {
    company: "Attentions AI",
    role: "Front-end Lead · Pune",
    period: "May 2024 – Present",
    stack: ["Next.js", "React", "AI Agents", "MCP", "WebSockets", "Pub-Sub"],
    highlights: [
      "Shipped 4 production micro-frontends (Artigen, Connect, Docu, Lumina) powering AI Q&A, call-centers, and e-commerce workflows.",
      "Boosted perceived performance by 40% via markdown streaming, live pub-sub, and optimized WebSocket pipelines.",
      "Built a modular enterprise chat SDK with voice, AI agent orchestration, and connector framework tailored for B2B workflows.",
    ],
  },
  {
    company: "Coditas",
    role: "Senior Software Engineer · Pune",
    period: "Jun 2021 – May 2024",
    stack: ["Angular", "Micro-frontend", "Component Library", "Node.js", "AWS"],
    highlights: [
      "Architected micro-frontends for Basixs analytics with secure role-based access, reducing delivery time by 25%.",
      "Published a reusable component library + design system that unified UI/UX across sister products.",
      "Delivered compliance-focused healthcare solutions (Ambry, Medgami) across Angular, Node.js, Java, MongoDB.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Front-end Developer · Pune",
    period: "Jul 2017 – Jun 2021",
    stack: ["Angular", "Cordova", "Ionic", "Material UI", "Azure"],
    highlights: [
      "Implemented Angular 4–6 SPAs with modular routing integrated with Spring Boot backends for enterprise clients.",
      "Launched hybrid mobile apps (Health Monitoring) using Angular, Ionic, Cordova, Redux, and offline-first caching.",
      "Delivered gamified employee portals and an LUIS-powered chatbot (Ask Twin) to support field engineers.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Core",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "C", "SQL"],
  },
  {
    title: "Frameworks & Runtimes",
    items: ["Next.js", "React", "Angular", "Node.js", "Express", "Socket.io"],
  },
  {
    title: "State & UI Systems",
    items: [
      "Redux",
      "Zustand",
      "NgRx",
      "PrimeNG",
      "Material UI",
      "Chakra UI",
      "Shadcn UI",
      "Tailwind CSS",
      "styled-components",
    ],
  },
  {
    title: "Data & Infra",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "AWS", "Nginx"],
  },
  {
    title: "Quality & Tooling",
    items: ["Jest", "Cypress", "Storybook", "Puppeteer", "Swagger", "Postman", "Figma"],
  },
];

export const education: Education[] = [
  {
    title: "MCA · SASTRA University",
    period: "Aug 2017 – Feb 2020",
    location: "Tamil Nadu",
  },
  {
    title: "BCA · Graphic Era Hill University",
    period: "Jun 2014 – Jun 2017",
    location: "Dehradun",
  },
  {
    title: "Senior High · Hiltons School",
    period: "Apr 2012 – Apr 2014",
    location: "Dehradun",
  },
];

export const contactCards: ContactCard[] = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/utkarsh-garg-0545a0155",
    href: personalInfo.linkedin,
  },
];

export const projects: Project[] = [
  {
    title: "artiGen Playground",
    description: "AI-powered platform designed to help users achieve more with every step. Features enterprise-grade AI agent orchestration and real-time collaboration.",
    tech: ["Next.js", "React", "AI Agents", "WebSockets", "TypeScript"],
    liveUrl: "https://playground.attentions.ai/",
    status: "live",
  },
  {
    title: "TheKredible",
    description: "Comprehensive financial data platform providing startup funding reports, company financials, and industry insights for investors and entrepreneurs.",
    tech: ["Next.js", "React", "TypeScript", "Data Visualization", "API Integration"],
    liveUrl: "https://thekredible.com/feed",
    status: "live",
  },
  {
    title: "Deevee Couture",
    description: "Premium fashion e-commerce platform offering curated couture collections with seamless shopping experience and modern design.",
    tech: ["Next.js", "React", "E-commerce", "TypeScript", "Payment Integration"],
    liveUrl: "https://deeveecouture.com/",
    status: "live",
  },
  {
    title: "Pushkar Foods",
    description: "Food products company website showcasing authentic food offerings with modern web presence and business information.",
    tech: ["Next.js", "React", "TypeScript", "Responsive Design"],
    liveUrl: "http://pushkarfoods.com/",
    status: "live",
  },
];

export const codeSnippets: string[] = [
  "const buildMicroFrontend = async () => {",
  "  const { orchestrate } = await import('@ai/agents');",
  "  return orchestrate({ streaming: true });",
  "};",
  "",
  "// Real-time WebSocket pipelines",
  "socket.on('message', (data) => {",
  "  dispatch({ type: 'STREAM', payload: data });",
  "});",
];
