interface CaseStudyData {
  title: string;
  role: string;
  duration: string;
  year: string;
  tech: string[];
  live_link: string;
  github: string;
  figma_design?: string;
}

const caseStudyData: Record<string, CaseStudyData> = {
  spotd: {
    title: "Spot'D",
    role: "Lead Frontend Engineer",
    duration: "In progress",
    year: "2024",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Redis"],
    live_link: "",
    github: "",
  },

  "vaxnow-web-app": {
    title: "VaxNow Health App",
    role: "Frontend Engineer",
    duration: "1 month+",
    year: "2025",
    tech: [
      "Reactjs",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "Framer Motion",
      "Atropos.js",
    ],
    live_link: "https://vax-now.vercel.app/",
    github: "https://github.com/KaluDavid/vaxNow",
  },

  "agrilink-marketplace": {
    title: "AgriLink Marketplace",
    role: "Frontend Engineer & UX Researcher",
    duration: "In progress",
    year: "March, 2025",
    tech: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Escrow",
      "Zustand",
      "Tanstack Query",
    ],
    live_link: "https://team-agrilink.vercel.app/",
    github: "https://github.com/KaluDavid/Team-AgriLink",
    figma_design:
      "https://www.figma.com/design/rKCSewA9JXkdY4QOZ8mpCB/AgriMarketplace",
  },
};

export default caseStudyData;
