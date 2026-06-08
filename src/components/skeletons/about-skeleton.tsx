"use client";

import React, { useEffect, useState } from "react";

/* ─────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────── */
const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes shimmer {
    0%   { background-position: -900px 0; }
    100% { background-position:  900px 0; }
  }
  @keyframes mountIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .ab-page {
    background: #fff;
    min-height: 100vh;
    animation: mountIn 0.35s ease both;
    font-family: system-ui, sans-serif;
  }

  /* ── NAV ── */
  .ab-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 32px;
    border-bottom: 1px solid #ebebee;
  }
  .ab-nav-left  { display: flex; align-items: center; gap: 10px; }
  .ab-nav-right { display: flex; align-items: center; gap: 10px; }

  /* ── BODY ── */
  .ab-body {
    max-width: 820px;
    margin: 0 auto;
    padding: 28px 32px 56px;
  }

  /* ── BACK ROW ── */
  .ab-back {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
  }

  /* ── PAGE HEADER ── */
  .ab-page-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
  }

  /* ── TIMELINE WRAPPER ── */
  .ab-timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Vertical line running down */
  .ab-timeline::before {
    content: '';
    position: absolute;
    left: 5px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: #e2e4ea;
  }

  /* ── TIMELINE ENTRY ── */
  .ab-entry {
    position: relative;
    padding-left: 28px;
    padding-bottom: 36px;
  }

  /* Dot on the line */
  .ab-entry-dot {
    position: absolute;
    left: 0;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #7c8291;
    z-index: 1;
  }

  /* ── ENTRY CARD ── */
  .ab-card {
    border: 1px solid #e8eaed;
    border-radius: 10px;
    padding: 18px 20px;
  }

  /* Card top row: title left, date right */
  .ab-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 12px;
  }
  .ab-card-top-left  { display: flex; flex-direction: column; gap: 8px; flex: 1; }
  .ab-card-top-right { display: flex; align-items: center; gap: 7px; flex-shrink: 0; }

  /* Location row */
  .ab-location {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 14px;
  }

  /* Bullet points */
  .ab-bullets {
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-bottom: 16px;
  }
  .ab-bullet {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ab-bullet-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #c4c8d2;
    flex-shrink: 0;
  }

  /* Tag pills */
  .ab-tags {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  /* ── TABLET ── */
  @media (max-width: 860px) {
    .ab-nav  { padding: 12px 20px; }
    .ab-body { padding: 22px 20px 40px; }
    .ab-card { padding: 14px 16px; }
    .ab-card-top { flex-direction: column; gap: 8px; }
    .ab-card-top-right { align-self: flex-start; }
  }

  /* ── MOBILE ── */
  @media (max-width: 480px) {
    .ab-nav  { padding: 10px 16px; }
    .ab-body { padding: 18px 16px 32px; }
    .ab-card { padding: 12px 14px; }
    .ab-tags { gap: 6px; }
    .ab-entry { padding-left: 22px; padding-bottom: 28px; }
    .ab-timeline::before { left: 4px; }
    .ab-entry-dot { width: 10px; height: 10px; }
  }
`;

/* ─────────────────────────────────────────
   ATOMS
───────────────────────────────────────── */
function Bone({
  w = "100%",
  h = 12,
  r = 6,
  dark = false,
  delay = "0s",
  style = {},
}: {
  w?: string | number;
  h?: number;
  r?: number;
  dark?: boolean;
  delay?: string;
  style?: React.CSSProperties;
}) {
  const base  = dark ? "#d4d7df" : "#e6e8ed";
  const shine = dark ? "#e2e5ec" : "#f0f2f6";
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: r,
        background: `linear-gradient(90deg, ${base} 0px, ${shine} 220px, ${base} 440px)`,
        backgroundSize: "900px 100%",
        animation: `shimmer 1.7s ${delay} infinite linear`,
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

function Icon({ size = 14 }: { size?: number }) {
  return <Bone w={size} h={size} r={3} />;
}

function Tag({ w = 70 }: { w?: number }) {
  return <Bone w={w} h={24} r={12} />;
}

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
function NavBar() {
  return (
    <nav className="ab-nav">
      <div className="ab-nav-left">
        <Bone w={26} h={26} r={5} dark />
        <Bone w={88} h={10} r={5} />
      </div>
      <div className="ab-nav-right">
        <Bone w={100} h={28} r={14} dark style={{ flexShrink: 0 }} />
        <Bone w={28} h={28} r={50} dark style={{ flexShrink: 0 }} />
        <Bone w={28} h={28} r={50} dark style={{ flexShrink: 0 }} />
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   TIMELINE ENTRY CARD
───────────────────────────────────────── */
function TimelineEntry({
  delay = 0,
  bulletWidths = ["72%", "88%", "80%", "65%"],
  tagWidths = [68, 82, 74, 76, 80, 70],
}: {
  delay?: number;
  bulletWidths?: string[];
  tagWidths?: number[];
}) {
  const d = (extra = 0) => `${delay + extra}s`;

  return (
    <div className="ab-entry">
      <div className="ab-entry-dot" />
      <div className="ab-card">

        {/* Top: title + subtitle LEFT, date RIGHT */}
        <div className="ab-card-top">
          <div className="ab-card-top-left">
            <Bone w="55%" h={13} r={5} dark delay={d()} />
            <Bone w="38%" h={10} r={4} delay={d(0.04)} />
          </div>
          <div className="ab-card-top-right">
            <Icon size={13} />
            <Bone w={110} h={9} r={4} delay={d(0.04)} />
          </div>
        </div>

        {/* Location */}
        <div className="ab-location">
          <Icon size={12} />
          <Bone w={80} h={9} r={4} delay={d(0.06)} />
        </div>

        {/* Bullet points */}
        <div className="ab-bullets">
          {bulletWidths.map((bw, i) => (
            <div key={i} className="ab-bullet">
              <div className="ab-bullet-dot" />
              <Bone w={bw} h={9} r={4} delay={d(0.06 + i * 0.04)} />
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="ab-tags">
          {tagWidths.map((tw, i) => (
            <Tag key={i} w={tw} />
          ))}
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   BODY
───────────────────────────────────────── */
function Body() {
  return (
    <div className="ab-body">

      {/* Back */}
      <div className="ab-back">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.3 }}>
          <path d="M9 2L4 7L9 12" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Bone w={80} h={9} r={4} />
      </div>

      {/* Page header: briefcase icon + title */}
      <div className="ab-page-header">
        {/* Briefcase icon (SVG outline) */}
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" style={{ opacity: 0.25, flexShrink: 0 }}>
          <rect x="1" y="6" width="18" height="11" rx="2" stroke="#555" strokeWidth="1.6" />
          <path d="M7 6V4a3 3 0 016 0v2" stroke="#555" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <Bone w={160} h={13} r={5} dark />
      </div>

      {/* Timeline */}
      <div className="ab-timeline">
        <TimelineEntry
          delay={0}
          bulletWidths={["70%", "88%", "80%", "62%"]}
          tagWidths={[68, 80, 74, 78, 82, 70]}
        />
        <TimelineEntry
          delay={0.08}
          bulletWidths={["75%", "85%", "78%", "60%"]}
          tagWidths={[72, 76, 68, 84, 74, 78]}
        />
        <TimelineEntry
          delay={0.08}
          bulletWidths={["75%", "85%", "78%", "60%"]}
          tagWidths={[72, 76, 68, 84, 74, 78]}
        />
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function AboutSkeleton() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  return (
    <>
      <style>{STYLES}</style>
      {ready && (
        <div className="ab-page">
          <NavBar />
          <Body />
        </div>
      )}
    </>
  );
}