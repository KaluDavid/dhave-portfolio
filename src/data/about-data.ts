interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  description: string[];
  technologies: string[];
}

const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "Spot'D",
    role: "Frontend Web Developer",
    period: "April 2025 - Present",
    type: "Part-time",
    location: "Remote",
    description: [
      "Developed the 'Coming Soon' page ensuring responsiveness and brand alignment",
      "Collaborated with frontend team to implement landing page directly from Figma",
      "Partner with product team to align features with business goals",
      "Translated figma designs into pixel-perfect, responsive web pages using Next.js and Tailwind CSS",
      "Integrate backend APIs to deliver seamless functionality",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Figma",
      "REST APIs",
    ],
  },
  {
    id: 2,
    company: "SyncU",
    role: "Frontend Web Developer",
    period: "Feb. 2024 - Jan. 2025",
    type: "Seasonal",
    location: "Nigeria",
    description: [
      "Built a responsive web platform from the ground up with a diverse team",
      "Wrote clean, functional UI using React, TypeScript, and Tailwind CSS",
      "Worked closely with designers to bring Figma designs to life",
      "Ensured pixel-perfect implementations across all screen sizes",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: 3,
    company: "Tevahrod Cosmetic Paints",
    role: "Frontend Web Developer & UX Researcher",
    period: "Feb. 2024 - March 2024",
    type: "Freelance",
    location: "Nigeria",
    description: [
      "Developed an e-commerce website showcasing company products",
      "Designed sketches and wireframes to plan layout and functionality",
      "Created flow charts to visualize website structures and user flows",
      "Collaborated with clients to understand requirements and ensure satisfaction",
    ],
    technologies: ["HTML", "CSS", "UX Research", "lowfi- Wireframing"],
  },
  {
    id: 4,
    company: "The Just Projects - Cohort 2",
    role: "Frontend Web Developer (Team Lead)",
    period: "July 2023 - Aug. 2023",
    type: "Project",
    location: "Nigeria",
    description: [
      "Led a small team of developers to build a travel website",
      "Translated Figma designs into fully responsive webpages",
      "Managed tasks, kept timelines on track, and ensured quality delivery",
      "Demonstrated ownership, consistency, and follow-through",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Team Leadership"],
  },
  {
    id: 5,
    company: "Jobberman Nigeria",
    role: "Soft-skills Training",
    period: "Aug. 2022 - Sept. 2022",
    type: "Training",
    location: "Nigeria",
    description: [
      "Refined soft skills in a dynamic professional environment",
      "Enhanced ability to work seamlessly within cross-functional teams",
      "Developed time management and problem-solving skills",
    ],
    technologies: ["Communication", "Collaboration", "Adaptability"],
  },
];

const education = [
  {
    title: "IBM iOS and Android Mobile App Developer Professional Certificate",
    institution: "DevCareer X Coursera Scholarship, Online",
    period: "2025 - Present",
  },
  {
    title: "B.A. Linguistics and Communication Studies",
    institution: "University of Calabar, Nigeria",
    period: "2022 - Present",
  },
  {
    title: "Designing User Interfaces and Experiences (UI/UX)",
    institution: "IBM",
    period: "Jan, 2026",
  },
  {
    title: "Responsive Web Design",
    institution: "MindLuster",
    period: "Aug 2023",
  },
  {
    title: "Frontend Web Development",
    institution: "The Just Projects",
    period: "Aug 2023",
  },
];

const technologies = [
  "Next.js",
  "TypeScript",
  "React.js",
  "Tailwind CSS",
  "Figma",
  "Zustand",
  "Framer-motion",
  "Sass",
  "Firebase",
  "Supabase",
  "Git/GitHub",
  "JavaScript",
  "HTML/CSS",
];

export { workExperience, education, technologies };
