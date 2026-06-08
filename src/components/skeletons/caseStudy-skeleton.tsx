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

  .cs-page {
    background: #fff;
    min-height: 100vh;
    animation: mountIn 0.35s ease both;
    font-family: system-ui, sans-serif;
  }

  /* ── NAV ── */
  .cs-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 32px;
    border-bottom: 1px solid #ebebee;
  }
  .cs-nav-left  { display: flex; align-items: center; gap: 10px; }
  .cs-nav-right { display: flex; align-items: center; gap: 10px; }

  /* ── CONTENT WRAPPER ── */
  .cs-body {
    max-width: 780px;
    margin: 0 auto;
    padding: 28px 32px 48px;
  }

  /* ── BACK ROW ── */
  .cs-back {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 22px;
  }

  /* ── TITLE ROW ── */
  .cs-title-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 18px;
  }

  /* ── META ROW ── */
  .cs-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .cs-meta-group { display: flex; align-items: center; gap: 6px; }
  .cs-meta-sep   { width: 3px; height: 3px; border-radius: 50%; background: #cdd0d8; flex-shrink: 0; }

  /* ── TAGS ROW ── */
  .cs-tags {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  /* ── GITHUB ROW ── */
  .cs-github {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }
  .cs-github-group { display: flex; align-items: center; gap: 8px; }

  /* ── SECTION HEADER ── */
  .cs-section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  /* ── PARAGRAPH LINES ── */
  .cs-para { display: flex; flex-direction: column; gap: 9px; margin-bottom: 18px; }

  /* ── BLOCKQUOTE ── */
  .cs-blockquote {
    display: flex;
    gap: 0;
    border: 1px solid #e8eaed;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 28px;
  }
  .cs-blockquote-bar {
    width: 4px;
    background: #d0d4dc;
    flex-shrink: 0;
  }
  .cs-blockquote-inner {
    padding: 16px 18px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  /* ── RELATED CARDS ── */
  .cs-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  .cs-card { display: flex; flex-direction: column; gap: 8px; }

  /* ── TABLET ── */
  @media (max-width: 860px) {
    .cs-nav   { padding: 12px 20px; }
    .cs-body  { padding: 22px 20px 36px; }
    .cs-cards { grid-template-columns: repeat(2, 1fr); }
    .cs-title-row { flex-direction: column; align-items: flex-start; gap: 12px; }
  }

  /* ── MOBILE ── */
  @media (max-width: 480px) {
    .cs-nav   { padding: 10px 16px; }
    .cs-body  { padding: 18px 16px 32px; }
    .cs-cards { grid-template-columns: 1fr 1fr; gap: 10px; }
    .cs-github { gap: 18px; }
    .cs-tags  { gap: 6px; }
    .cs-nav-right .cs-pill { display: none; }
  }
`;

/* ─────────────────────────────────────────
   SHARED ATOMS
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

/* Small icon placeholder square */
function Icon({ size = 14 }: { size?: number }) {
  return <Bone w={size} h={size} r={3} />;
}

/* Tag pill */
function Tag({ w = 70 }: { w?: number }) {
  return <Bone w={w} h={24} r={12} />;
}

/* ─────────────────────────────────────────
   NAV
───────────────────────────────────────── */
function NavBar() {
  return (
    <nav className="cs-nav">
      <div className="cs-nav-left">
        <Bone w={26} h={26} r={5} dark />
        <Bone w={88} h={10} r={5} />
      </div>
      <div className="cs-nav-right">
        <Bone w={80} h={28} r={14} dark style={{ flexShrink: 0 }} />
        <Bone w={28} h={28} r={50} dark style={{ flexShrink: 0 }} />
        <Bone w={28} h={28} r={50} dark style={{ flexShrink: 0 }} />
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────
   BODY
───────────────────────────────────────── */
function Body() {
  return (
    <div className="cs-body">

      {/* Back arrow + label */}
      <div className="cs-back">
        {/* Arrow chevron left */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.3 }}>
          <path d="M9 2L4 7L9 12" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Bone w={90} h={9} r={4} />
      </div>

      {/* Title + pill button */}
      <div className="cs-title-row">
        <Bone w="58%" h={20} r={5} dark />
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <Bone w={10} h={10} r={50} />
          <Bone w={120} h={32} r={16} />
        </div>
      </div>

      {/* Author · time · date */}
      <div className="cs-meta">
        <div className="cs-meta-group">
          <Icon size={13} />
          <Bone w={90} h={9} r={4} />
        </div>
        <div className="cs-meta-sep" />
        <div className="cs-meta-group">
          <Icon size={13} />
          <Bone w={110} h={9} r={4} />
        </div>
        <div className="cs-meta-sep" />
        <div className="cs-meta-group">
          <Icon size={13} />
          <Bone w={80} h={9} r={4} />
        </div>
      </div>

      {/* Tag pills */}
      <div className="cs-tags">
        {[72, 88, 76, 82, 90, 68, 78].map((w, i) => (
          <Tag key={i} w={w} />
        ))}
      </div>

      {/* GitHub + stats row */}
      <div className="cs-github">
        <div className="cs-github-group">
          <Icon size={15} />
          <Bone w={130} h={9} r={4} />
        </div>
        <div className="cs-github-group">
          <Icon size={15} />
          <Bone w={100} h={9} r={4} />
        </div>
      </div>

      {/* Section number + divider */}
      <div className="cs-section-header">
        <Bone w={20} h={9} r={3} />
        <Bone w={60} h={1} r={1} style={{ opacity: 0.5 }} />
      </div>

      {/* Highlight bone (dark wide) */}
      <Bone w={140} h={28} r={5} dark style={{ marginBottom: 18 }} />

      {/* Paragraph block 1 */}
      <div className="cs-para">
        <Bone w="88%" h={11} r={4} delay="0s" />
        <Bone w="94%" h={11} r={4} delay="0.05s" />
        <Bone w="72%" h={11} r={4} delay="0.1s" />
      </div>

      {/* Gap */}
      <div style={{ height: 14 }} />

      {/* Paragraph block 2 */}
      <div className="cs-para">
        <Bone w="90%" h={11} r={4} delay="0s" />
        <Bone w="82%" h={11} r={4} delay="0.05s" />
      </div>

      {/* Blockquote */}
      <div className="cs-blockquote">
        <div className="cs-blockquote-bar" />
        <div className="cs-blockquote-inner">
          <Bone w="92%" h={10} r={4} delay="0s" />
          <Bone w="86%" h={10} r={4} delay="0.06s" />
          <Bone w="60%" h={10} r={4} delay="0.12s" />
        </div>
      </div>

      {/* Related cards */}
      <div className="cs-cards">
        {[
          { label1: "55%", label2: "45%" },
          { label1: "50%", label2: "60%" },
          { label1: "58%", label2: "48%" },
          { label1: "52%", label2: "55%" },
        ].map((c, i) => (
          <div key={i} className="cs-card">
            <Bone w="100%" h={90} r={7} dark delay={`${i * 0.1}s`} />
            <Bone w={c.label1} h={9} r={4} delay={`${i * 0.1}s`} />
            <Bone w={c.label2} h={9} r={4} delay={`${i * 0.1 + 0.05}s`} />
          </div>
        ))}
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */
export default function CaseStudySkeleton() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  return (
    <>
      <style>{STYLES}</style>
      {ready && (
        <div className="cs-page">
          <NavBar />
          <Body />
        </div>
      )}
    </>
  );
}