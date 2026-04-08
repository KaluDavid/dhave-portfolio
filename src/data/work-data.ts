interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  slug: string;
  image: string;
  featured?: boolean;
  img_style: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "AgriLink Marketplace",
    description:
      "Connecting smallholder farmers to buyers through simple, accessible technology",
    role: "Frontend Engineer & UX Researcher",
    tech: [
      "NextJs",
      "TypeScript",
      "Figma",
      "Tailwind CSS",
      "Escrow",
      "Zustand",
      "Tanstack Query",
      "API Integration",
    ],
    slug: "agrilink-marketplace",
    image: "/home.png",
    featured: true,
    img_style: "object-left",
  },
  {
    id: "2",
    title: "Spot'D Web App",
    description:
      "Led the frontend architecture for a complete platform overhaul, improving conversion rates by 35% and reducing page load times by 60%.",
    role: "Lead Frontend Engineer",
    tech: ["API Integration", "TypeScript", "Next.js", "Tailwind CSS"],
    slug: "spotd",
    image: "/spot.svg",
    img_style: "object-top object-center",
  },
  {
    id: "3",
    title: "VaxNow Health App",
    description:
      "Accelerating digital health adoption by creating a user friendly website that clearly communicates impact.",
    role: "Frontend Engineer",
    tech: [
      "ReactJs",
      "TypeScript",
      "Tailwindcss",
      "Framer-Motion",
      "Figma",
      "Atropos.js",
    ],
    slug: "vaxnow-web-app",
    image: "/vax.svg",
    img_style: "object-top",
  },
];

export default projects;
