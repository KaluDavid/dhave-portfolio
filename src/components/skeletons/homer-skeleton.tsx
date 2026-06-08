"use client";
import { useEffect, useState } from "react";

const GLOBAL_STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes shimmer {
    0%   { background-position: -900px 0; }
    100% { background-position:  900px 0; }
  }
  @keyframes floatA {
    0%, 100% { transform: rotate(45deg) translate(0, 0); }
    50%       { transform: rotate(45deg) translate(-3px, -5px); }
  }
  @keyframes floatB {
    0%, 100% { transform: rotate(45deg) translate(0, 0); }
    50%       { transform: rotate(45deg) translate(2px, -4px); }
  }
  @keyframes mountIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0);   }
  }

  /* ── Responsive layout ── */
  .sk-page {
    background: #fff;
    min-height: 100vh;
    animation: mountIn 0.35s ease both;
  }

  /* Navbar */
  .sk-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 28px;
    border-bottom: 1px solid #ebebee;
  }
  .sk-nav-left  { display: flex; align-items: center; gap: 10px; }
  .sk-nav-right { display: flex; align-items: center; gap: 10px; }

  /* Main content area */
  .sk-main {
    padding: 32px 36px 20px;
    position: relative;
  }

  /* Meta row */
  .sk-meta {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 18px;
    margin-bottom: 22px;
    flex-wrap: wrap;
  }

  /* Text lines */
  .sk-lines { display: flex; flex-direction: column; gap: 11px; }

  /* Controls row */
  .sk-controls {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 26px;
  }
  .sk-radio-group { display: flex; align-items: center; gap: 8px; }

  /* Chevron */
  .sk-chevron {
    display: flex;
    justify-content: center;
    margin-top: 44px;
    opacity: 0.35;
  }

  /* Bottom cards */
  .sk-cards-section {
    padding: 20px 36px 28px;
    border-top: 1px solid #ebebee;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }
  .sk-card { display: flex; flex-direction: column; gap: 9px; }

  /* ── TABLET ── */
  @media (max-width: 860px) {
    .sk-nav       { padding: 12px 20px; }
    .sk-main      { padding: 24px 22px 16px; }
    .sk-meta      { gap: 7px; margin-top: 14px; margin-bottom: 18px; }
    .sk-lines     { gap: 9px; }
    .sk-controls  { gap: 14px; margin-top: 20px; }
    .sk-chevron   { margin-top: 34px; }
    .sk-cards-section {
      padding: 16px 20px 22px;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }

  /* ── MOBILE ── */
  @media (max-width: 480px) {
    .sk-nav       { padding: 10px 16px; }
    .sk-main      { padding: 18px 16px 14px; }
    .sk-meta      { gap: 6px; margin-top: 12px; margin-bottom: 14px; }
    .sk-lines     { gap: 8px; }
    .sk-controls  { gap: 12px; margin-top: 18px; }
    .sk-chevron   { margin-top: 26px; }
    .sk-cards-section {
      padding: 14px 16px 20px;
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
`;

/* ─────────────────────────────────────────
   SHIMMER BONE
───────────────────────────────────────── */
type BoneProps = {
  w?: string | number;
  h?: number;
  r?: number;
  dark?: boolean;
  style?: React.CSSProperties;
  delay?: string;
};

function Bone({
  w = "100%",
  h = 12,
  r = 6,
  dark = false,
  style = {},
  delay = "0s",
}: BoneProps) {
  const base = dark ? "#d8dbe2" : "#e6e8ed";
  const shine = dark ? "#eaecf2" : "#f2f4f7";
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: r,
        background: `linear-gradient(90deg, ${base} 0px, ${shine} 200px, ${base} 400px)`,
        backgroundSize: "900px 100%",
        animation: `shimmer 1.7s ${delay} infinite linear`,
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

/* ─────────────────────────────────────────
   ATOMS
───────────────────────────────────────── */
function Avatar({ size = 68 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background:
          "linear-gradient(90deg, #e6e8ed 0px, #f2f4f7 200px, #e6e8ed 400px)",
        backgroundSize: "900px 100%",
        animation: "shimmer 1.7s infinite linear",
        flexShrink: 0,
      }}
    />
  );
}

function Dot({
  size = 7,
  hollow = false,
  style = {},
}: {
  size?: number;
  hollow?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: hollow ? "transparent" : "#cdd0d8",
        border: hollow ? "1.5px solid #cdd0d8" : "none",
        flexShrink: 0,
      }}
    />
  );
}

function Toggle({ w = 54, h = 30 }: { w?: number; h?: number }) {
  const knob = h - 8;
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: h / 2,
        background:
          "linear-gradient(90deg, #e6e8ed 0px, #f2f4f7 200px, #e6e8ed 400px)",
        backgroundSize: "900px 100%",
        animation: "shimmer 1.7s infinite linear",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 4,
          top: "50%",
          transform: "translateY(-50%)",
          width: knob,
          height: knob,
          borderRadius: "50%",
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
        }}
      />
    </div>
  );
}

type DiamondProps = {
  size?: number;
  hollow?: boolean;
  animKey?: "A" | "B";
  style?: React.CSSProperties;
};
function Diamond({
  size = 22,
  hollow = false,
  animKey = "A",
  style = {},
}: DiamondProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 3,
        background: hollow ? "transparent" : "#dfe2e9",
        border: hollow ? "2px solid #d0d4dc" : "none",
        animation: `float${animKey} ${animKey === "A" ? 3.2 : 3.8}s ease-in-out infinite`,
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="9" viewBox="0 0 16 9" fill="none">
      <path
        d="M1 1L8 8L15 1"
        stroke="#9a9ea8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────
   RESPONSIVE SECTION COMPONENTS
───────────────────────────────────────── */

/* Uses CSS classes + CSS variables for responsive sizing */
function NavBar() {
  return (
    <nav className="sk-nav">
      <div className="sk-nav-left">
        {/* Logo square */}
        <Bone w={28} h={28} r={5} dark />
        {/* Brand text */}
        <Bone w={90} h={11} r={5} />
      </div>
      <div className="sk-nav-right">
        {/* CTA pill */}
        <Bone w={78} h={28} r={14} dark />
        {/* Icon squares */}
        <Bone w={28} h={28} r={5} dark />
        <Bone w={28} h={28} r={5} dark />
      </div>
    </nav>
  );
}

function MainSection() {
  return (
    <div className="sk-main">
      {/* ── Floating diamond top-right ── */}
      <div style={{ position: "absolute", top: 28, right: 36 }}>
        <Diamond size={24} animKey="A" style={{ transform: "rotate(45deg)" }} />
      </div>

      {/* Avatar */}
      <Avatar />

      {/* Meta row */}
      <div className="sk-meta">
        <Bone w={108} h={10} r={5} />
        <Dot />
        <Bone w={140} h={10} r={5} />
        <Dot />
        <Bone w={95} h={10} r={5} />
      </div>

      {/* Text lines — varying widths matching mockup */}
      <div className="sk-lines">
        <Bone w="62%" h={13} r={5} dark delay="0s" />
        <Bone w="72%" h={13} r={5} dark delay="0.05s" />
        <Bone w="64%" h={13} r={5} dark delay="0.1s" />
        <Bone w="55%" h={13} r={5} dark delay="0.15s" />
      </div>

      {/* Controls: toggle + radio */}
      <div className="sk-controls">
        <Toggle w={54} h={30} />
        <div className="sk-radio-group">
          <Dot size={9} />
          <Bone w={110} h={9} r={4} />
        </div>
      </div>

      {/* Floating circle mid-right */}
      <Dot
        hollow
        size={14}
        style={
          {
            position: "absolute",
            bottom: 110,
            right: 60,
          } as React.CSSProperties
        }
      />

      {/* Floating outline diamond lower-center */}
      <div
        style={{
          position: "absolute",
          bottom: 72,
          left: "38%",
          transform: "rotate(45deg)",
        }}
      >
        <Diamond size={20} hollow animKey="B" />
      </div>

      {/* Chevron */}
      <div className="sk-chevron">
        <ChevronDown />
      </div>
    </div>
  );
}

function BottomCards() {
  const cards = [
    { imgH: 115, line1: "52%", line2: "68%" },
    { imgH: 115, line1: "48%", line2: "72%" },
    { imgH: 115, line1: "55%", line2: "62%" },
  ];

  return (
    <div className="sk-cards-section">
      {cards.map((c, i) => (
        <div key={i} className="sk-card">
          <Bone w="100%" h={c.imgH} r={8} dark delay={`${i * 0.12}s`} />
          <Bone w={c.line1} h={9} r={4} delay={`${i * 0.12}s`} />
          <Bone w={c.line2} h={9} r={4} delay={`${i * 0.12 + 0.06}s`} />
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   ROOT COMPONENT
───────────────────────────────────────── */
export default function HomeSkeleton() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      {ready && (
        <div className="sk-page">
          <NavBar />
          <MainSection />
          <BottomCards />
        </div>
      )}
    </>
  );
}
