import { motion } from "framer-motion";

// ─── Animation Variants ──────────────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── FadeIn Section Wrapper ───────────────────────────────────────────────────
// Abstract to: components/case-study/FadeSection.tsx

// ─── Section Label ────────────────────────────────────────────────────────────
// Abstract to: components/case-study/SectionLabel.tsx

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-[12px] font-mono tracking-[0.25em] uppercase text-blue-600 font-medium">
        {children}
      </span>
      <div className="w-12 h-px bg-border" />
    </div>
  );
}

// ─── Section Heading ──────────────────────────────────────────────────────────
// Abstract to: components/case-study/SectionHeading.tsx

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-6">
      {children}
    </h2>
  );
}

// ─── Subsection Heading ───────────────────────────────────────────────────────

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold tracking-tight text-foreground mt-8 mb-2">
      {children}
    </h3>
  );
}

// ─── Body Paragraph ───────────────────────────────────────────────────────────

function P({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`sm:text-[14px] sm:text-lg font-mono leading-[1.85] text-muted-foreground mb-4 ${className}`}
    >
      {children}
    </p>
  );
}

// ─── Inline Code ──────────────────────────────────────────────────────────────

function IC({ children }: { children: React.ReactNode }) {
  return (
    <code className="sm:text-[12.5px] text-sm font-mono bg-muted text-foreground px-1.5 py-0.5 rounded">
      {children}
    </code>
  );
}

// ─── Callout Block ────────────────────────────────────────────────────────────
// Abstract to: components/case-study/Callout.tsx

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-muted/50 border-l-[3px] border-blue-500 px-5 py-4 my-6 rounded-r-md">
      <p className="text-[14px] font-mono italic text-muted-foreground leading-relaxed m-0">
        {children}
      </p>
    </div>
  );
}

// ─── Code Block ───────────────────────────────────────────────────────────────
// Abstract to: components/case-study/CodeBlock.tsx

function CodeBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative rounded-lg overflow-hidden my-6 border border-border">
      {/* macOS dots */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-blue-400/80" />
        {label && (
          <span className="ml-2 text-[12px] font-mono tracking-widest uppercase text-zinc-500">
            {label}
          </span>
        )}
      </div>
      <pre className="bg-zinc-950 px-5 py-4 overflow-x-auto text-[12.5px] font-mono leading-[1.8] text-zinc-300 whitespace-pre">
        {children}
      </pre>
    </div>
  );
}

// ─── Folder Tree ──────────────────────────────────────────────────────────────
// Abstract to: components/case-study/FolderTree.tsx

function FolderTree() {
  const rows = [
    { indent: 0, type: "dir", name: "public/", note: "" },
    {
      indent: 1,
      type: "dir",
      name: "assets/",
      note: "── images, icons, and static files served directly",
    },
    {
      indent: 1,
      type: "dir",
      name: "fonts/",
      note: "── font files and typography resources",
    },

    { indent: 0, type: "dir", name: "src/", note: "" },

    {
      indent: 1,
      type: "dir",
      name: "hooks/",
      note: "── custom React hooks for shared logic and state handling",
    },
    {
      indent: 1,
      type: "dir",
      name: "components/",
      note: "── reusable UI primitives (buttons, cards, badges)",
    },
    {
      indent: 1,
      type: "dir",
      name: "pages/",
      note: "── route-level page components",
    },
    {
      indent: 1,
      type: "dir",
      name: "utils/",
      note: "── helper functions and shared utilities",
    },

    { indent: 1, type: "file", name: "App.tsx", note: "── router root" },
    { indent: 1, type: "file", name: "main.tsx", note: "── entry point" },
    {
      indent: 1,
      type: "file",
      name: "index.css",
      note: "── Tailwind base + global tokens",
    },
    {
      indent: 1,
      type: "file",
      name: "antropos.css",
      note: "── Antropos.js styles and overrides",
    },
  ];

  return (
    <div className="bg-muted/40 border border-border rounded-lg px-5 py-4 font-mono text-sm">
      {rows.map(({ indent, type, name, note }) => (
        <div
          key={name}
          className="leading-[2]"
          style={{ paddingLeft: indent * 16 }}
        >
          <span
            className={
              type === "dir"
                ? "text-teal-600 font-medium"
                : "text-muted-foreground"
            }
          >
            {name}
          </span>
          {note && (
            <span className="text-muted-foreground/50 italic ml-2 text-[12px]">
              {note}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Stat Row ─────────────────────────────────────────────────────────────────
// Abstract to: components/case-study/StatRow.tsx
interface Stats {
  stats: {
    num: string;
    label: string;
  }[];
}
function StatRow({ stats }: Stats) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap border border-border rounded-lg overflow-hidden my-6">
      {stats.map(({ num, label }, i) => (
        <div
          key={label}
          className={`flex-1 min-w-[100px] py-5 text-center bg-muted/30 ${
            i < stats.length - 1
              ? "border-b sm:border-b-0 sm:border-r border-border"
              : ""
          }`}
        >
          <span className="block text-lg font-bold text-blue-600 leading-none mb-1">
            {num}
          </span>
          <span className="text-[12px] font-mono tracking-[0.15em] uppercase text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Card Grid ────────────────────────────────────────────────────────────────
// Abstract to: components/case-study/CardGrid.tsx

interface Card {
  cards: {
    num: string;
    title: string;
    body: string;
  }[];
}
function CardGrid({ cards }: Card) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5% 0px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-6"
    >
      {cards.map(({ num, title, body }) => (
        <motion.div
          key={title}
          variants={fadeUp}
          className="bg-background border border-border rounded-lg p-5 transition-colors hover:border-blue-400/60 group"
        >
          <div className="text-[12px] font-mono tracking-[0.2em] uppercase text-blue-600 mb-2">
            {num}
          </div>
          <h4 className="text-sm font-semibold text-foreground mb-1.5">
            {title}
          </h4>
          <p className="text-[12.5px] sm:text-sm  font-mono text-muted-foreground leading-relaxed m-0">
            {body}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ─── Decision Row ─────────────────────────────────────────────────────────────
// Abstract to: components/case-study/DecisionRow.tsx

function DecisionRow({ left, right }: { left: string; right: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 bg-muted/30 border border-border rounded-lg p-5">
      <div>
        <p className="sm:text-[12px] text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground/60 mb-1.5">
          Design Intent
        </p>
        <p className="sm:text-sm text-base font-mono text-muted-foreground m-0 leading-relaxed">
          {left}
        </p>
      </div>
      <div>
        <p className="sm:text-[12px] text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground/60 mb-1.5">
          Engineering Solution
        </p>
        <p className="sm:text-sm text-base font-mono text-muted-foreground m-0 leading-relaxed">
          {right}
        </p>
      </div>
    </div>
  );
}

// ─── Screen Block ─────────────────────────────────────────────────────────────
// Abstract to: components/case-study/ScreenBlock.tsx

function ScreenBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 bg-muted/30 border border-border rounded-lg p-5 hover:border-border/80 transition-colors">
      <p className="text-sm font-semibold text-teal-600 tracking-wide mb-2">
        {title}
      </p>
      <p className="text-sm font-mono text-muted-foreground leading-relaxed m-0">
        {children}
      </p>
    </div>
  );
}

function Fn_Image({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full border h-auto rounded-lg shadow-lg my-6"
      loading="lazy"
    />
  );
}

// ─── Reflection Item ──────────────────────────────────────────────────────────
// Abstract to: components/case-study/ReflectionItem.tsx

function ReflectionItem({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 mb-6 items-start">
      <div className="shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center mt-0.5">
        <span className="text-[12px] font-mono text-blue-600">{num}</span>
      </div>
      <div>
        <SubHeading>{title}</SubHeading>
        <P>{children}</P>
      </div>
    </div>
  );
}

// ─── Thin Divider ─────────────────────────────────────────────────────────────

function Divider({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 my-7 text-[12px] font-mono tracking-[0.15em] uppercase text-muted-foreground/50">
      <div className="flex-1 h-px bg-border" />
      {children}
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export {
  SectionLabel,
  SectionHeading,
  SubHeading,
  P,
  IC,
  Callout,
  CodeBlock,
  FolderTree,
  CardGrid,
  DecisionRow,
  ScreenBlock,
  ReflectionItem,
  Divider,
  Fn_Image,
  StatRow,
};
