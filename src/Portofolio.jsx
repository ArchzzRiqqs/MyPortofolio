import { useEffect, useRef, useState } from "react";
import { Mail, ArrowUpRight, Terminal } from "lucide-react";
import Profile from "./assets/Profile.png";
import Akademia from "../public/projects/Akademia.png";
import KelanaCoffe from "../public/projects/KelanaCoffe.png";
import LifeOS from "../public/projects/LifeOS.png";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PROFILE = {
  name: "Toriq Habil Fadhila",
  username: "toriqq",
  role: "Software Engineer",
  tagline: "Membangun sistem dengan fondasi yang kuat, bukan sekadar fitur yang berjalan.",
  location: "Malang, Indonesia",
  email: "toriqqhabilfadhila21@gmail.com",
  github: "https://github.com/ToriqqHabilFadhilaa",
  linkedin: "https://www.linkedin.com/in/toriqhabilfadhila21/",
  photoUrl: Profile,
  bio: "Saya tertarik pada bagaimana sebuah sistem dirancang, bekerja, dan berkembang. Sebelum menulis solusi, saya terbiasa memahami masalah hingga ke akarnya - kemudian membangun solusi yang sederhana, terstruktur, dan siap berkembang.",
};

const TYPED_LINES = [
  "Software Engineer",
  "System Builder",
  "Backend & Architecture",
  "Problem → System → Solution",
];

const SKILLS = [
  "JavaScript", "CodeIgniter", "React", "Next.js", "Node.js",
  "PostgreSQL", "MySQL", "PHP", "API", "Laravel",
];

const PROJECTS = [
  {
    id: "01",
    title: "KelanaCoffe",
    desc: "Sistem POS SaaS untuk membantu warung kopi mengelola transaksi, produk, inventory, dan laporan operasional dalam satu platform terintegrasi.",
    tags: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    image: KelanaCoffe,
    link: "https://github.com/ToriqqHabilFadhilaa/SaaS-KelanaCoffe",
  },
  {
    id: "02",
    title: "LifeOS",
    desc: "Personal Productivity & Life Management Platform untuk membantu mengelola tugas, goals, habits, jadwal, dan perkembangan diri dalam satu platform terintegrasi.",
    tags: ["React", "Node.js", "MySQL"],
    image: LifeOS,
    link: "https://github.com/ToriqqHabilFadhilaa/LifeOS",
  },
  {
    id: "03",
    title: "Akademia",
    desc: "LMS berbasis web untuk mengelola pembelajaran, ujian online, dan sistem proctoring untuk membantu mengurangi kecurangan saat ujian.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma"],
    image: Akademia,
    link: "https://github.com/ToriqqHabilFadhilaa/LMS-Akademia",
  },
];

const EDUCATION = [
  {
    year: "2026 — Sekarang",
    role: "D-IV Sistem Informasi Bisnis",
    company: "Politeknik Negeri Malang",
    desc: "Mempelajari perpaduan teknologi dan bisnis melalui analisis sistem, pengembangan software, database, serta perancangan solusi sistem informasi.",
  },
  {
    year: "2023 — 2026",
    role: "Rekayasa Perangkat Lunak",
    company: "SMK PGRI 3 Malang",
    desc: "Membangun fondasi dalam pemrograman, pengembangan aplikasi, database, dan rekayasa perangkat lunak.",
  },
];

const EXPERIENCE = [
  {
    year: "2024 — 2025",
    role: "Software Engineering Intern",
    company: "PT. Naraya Telematika",
    desc: "Mengikuti program PKL/magang dan mendapatkan pengalaman langsung dalam lingkungan kerja serta proses pengembangan software.",
  },
];

const COLORS = {
  bg: "#171B24",
  panel: "#1F2430",
  panelBorder: "#2C3242",
  text: "#F5F3EE",
  textMid: "#9CA3B0",
  accent: "#E8A33D",
};

const LAYOUT = {
  maxWidth: 1550,
  gutter: "clamp(20px, 5vw, 48px)",
};

function useTypewriter(lines, speed = 60, pause = 1400) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIndex % lines.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setLineIndex((i) => i + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, lineIndex, lines, speed, pause]);

  return text;
}

function useReveal(threshold = 0.3) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function useScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
        if (barRef.current) barRef.current.style.width = `${pct}%`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return barRef;
}

function useCursorGlow() {
  const glowRef = useRef(null);
  useEffect(() => {
    let ticking = false;
    const onMove = (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.left = `${e.clientX - 160}px`;
          glowRef.current.style.top = `${e.clientY - 160}px`;
        }
        ticking = false;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return glowRef;
}

function usePhotoTilt() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, shine: { x: 50, y: 50 } });
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setTilt({ x: (y - 0.5) * -22, y: (x - 0.5) * 22, shine: { x: x * 100, y: y * 100 } });
  };
  const onLeave = () => setTilt({ x: 0, y: 0, shine: { x: 50, y: 50 } });
  return [ref, tilt, onMove, onLeave];
}

function FadeSection({ children, style, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`section-fade${visible ? " visible" : ""}`} style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}>
      {children}
    </div>
  );
}

function Container({ as: Tag = "div", children, style, ...rest }) {
  return (
    <Tag
      style={{
        width: "100%",
        maxWidth: LAYOUT.maxWidth,
        margin: "0 auto",
        paddingInline: LAYOUT.gutter,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Timeline({ items, lineVisible, revealRef }) {
  return (
    <div ref={revealRef} style={{ position: "relative", paddingLeft: 32 }}>
      <div
        className="timeline-line"
        style={{
          position: "absolute",
          left: 5,
          top: 6,
          width: 1,
          height: lineVisible ? "100%" : "0%",
          background: COLORS.accent,
        }}
      />
      {items.map((e) => (
        <div key={`${e.year}-${e.role}`} style={{ position: "relative", marginBottom: 44, paddingBottom: 4 }}>
          <div
            style={{
              position: "absolute",
              left: -32,
              top: 6,
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: COLORS.bg,
              border: `2px solid ${COLORS.accent}`,
            }}
          />
          <p className="mono" style={{ color: COLORS.accent, fontSize: 13, margin: "0 0 6px" }}>{e.year}</p>
          <h4 style={{ fontSize: 18, fontWeight: 500, margin: "0 0 4px" }}>
            {e.role} <span style={{ color: COLORS.textMid, fontWeight: 400 }}>— {e.company}</span>
          </h4>
          <p style={{ color: COLORS.textMid, fontSize: 14.5, lineHeight: 1.7, margin: 0, maxWidth: 560 }}>
            {e.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const typed = useTypewriter(TYPED_LINES);
  const [eduRef, eduVisible] = useReveal();
  const [expRef, expVisible] = useReveal();
  const [photoRef, tilt, onPhotoMove, onPhotoLeave] = usePhotoTilt();
  const scrollBarRef = useScrollProgress();
  const glowRef = useCursorGlow();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const colors = COLORS;

  return (
    <div style={{
      background: colors.bg,
      color: colors.text,
      fontFamily: "'Inter', sans-serif",
      minHeight: "100vh",
      width: "100%",
      position: "relative",
      "--accent": colors.accent,
      "--border": colors.panelBorder,
      "--text": colors.text,
    }}>
      <div ref={glowRef} className="fx" style={{ position: "fixed", pointerEvents: "none", zIndex: 9999, left: -160, top: -160, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,163,61,0.06) 0%, transparent 70%)" }} />
      <div ref={scrollBarRef} style={{ position: "fixed", top: 0, left: 0, zIndex: 9998, height: 2, width: "0%", background: `linear-gradient(90deg, rgba(99,102,241,0.8), ${colors.accent})` }} />
      <div className="fx" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: "150%", height: 160, top: "8%", left: "-25%", borderRadius: "50%", filter: "blur(30px)", animation: "aband1 17s ease-in-out infinite", background: "linear-gradient(100deg, transparent 0%, rgba(56,189,248,0.07) 20%, rgba(99,102,241,0.14) 48%, rgba(168,85,247,0.08) 70%, transparent 100%)" }} />
        <div style={{ position: "absolute", width: "140%", height: 130, top: "17%", left: "-20%", borderRadius: "50%", filter: "blur(36px)", animation: "aband2 22s ease-in-out infinite", background: "linear-gradient(98deg, transparent 0%, rgba(168,85,247,0.07) 25%, rgba(236,72,153,0.10) 52%, rgba(99,102,241,0.06) 75%, transparent 100%)" }} />
        <div style={{ position: "absolute", width: "130%", height: 110, top: "4%", left: "-15%", borderRadius: "50%", filter: "blur(26px)", animation: "aband3 26s ease-in-out infinite", background: "linear-gradient(105deg, transparent 0%, rgba(20,184,166,0.06) 28%, rgba(56,189,248,0.10) 55%, rgba(99,102,241,0.05) 80%, transparent 100%)" }} />
        <div style={{ position: "absolute", width: "120%", height: 90, top: "26%", left: "-10%", borderRadius: "50%", filter: "blur(40px)", animation: "aband4 30s ease-in-out infinite", background: "linear-gradient(95deg, transparent 0%, rgba(232,163,61,0.04) 35%, rgba(251,191,36,0.07) 58%, transparent 100%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <style>
          {`
          .mono { font-family: 'JetBrains Mono', monospace; }
          @keyframes blink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
          .cursor { animation: blink 1s step-start infinite; }
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .marquee-track { animation: marquee 22s linear infinite; }
          .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
          @keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: .25 } }
          .dot-pulse { animation: pulse 1.8s ease-in-out infinite; }
          .hero-photo { filter: grayscale(1) contrast(1.05); transition: filter .6s ease; }
          .hero-photo:hover { filter: grayscale(0) contrast(1); }
          .project-img { transition: transform .5s cubic-bezier(.16,1,.3,1); }
          .project-row:hover .project-img { transform: scale(1.02); }
          .tag-link { position: relative; text-decoration: none; }
          .tag-link::after {
            content: ""; position: absolute; left: 0; bottom: -2px; width: 100%; height: 1px;
            background: currentColor; transform: scaleX(0); transform-origin: left;
            transition: transform .35s ease;
          }
          .tag-link:hover::after { transform: scaleX(1); }
          .timeline-line { transition: height 1.1s cubic-bezier(.16,1,.3,1); }
          .photo-3d { transition: transform 0.1s ease-out; transform-style: preserve-3d; }
          .section-fade { opacity: 0; transform: translateY(24px); transition: opacity 0.9s cubic-bezier(.16,1,.3,1), transform 0.9s cubic-bezier(.16,1,.3,1); }
          .section-fade.visible { opacity: 1; transform: translateY(0); }
          .project-card { transition: border-color 0.3s ease, box-shadow 0.3s ease; }
          .project-card:hover { border-color: rgba(232,163,61,0.4) !important; box-shadow: 0 0 24px rgba(232,163,61,0.08); }
          .project-row:focus-visible { outline: 2px solid var(--accent); outline-offset: 6px; border-radius: 8px; }
          .tag-link:focus-visible { outline: 2px solid var(--accent); outline-offset: 4px; }
          .cta-btn {
            padding: 12px 22px;
            border-radius: 4px;
            font-size: 14px;
            text-decoration: none;
            display: inline-block;
            transition: transform 0.25s ease, opacity 0.25s ease, border-color 0.25s ease, color 0.25s ease;
          }
          .cta-btn:hover { transform: translateY(-2px); }
          .cta-btn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
          .cta-primary { background: var(--accent); color: #171B24; font-weight: 500; }
          .cta-primary:hover { opacity: 0.9; }
          .cta-secondary { border: 1px solid var(--border); color: var(--text); }
          .cta-secondary:hover { border-color: var(--accent); color: var(--accent); }
          @keyframes aband1 {
            0%   { transform: translateX(-4%) skewX(0deg) scaleY(1); opacity: 0.55; }
            45%  { transform: translateX(4%) skewX(-7deg) scaleY(1.35); opacity: 1; }
            100% { transform: translateX(-4%) skewX(0deg) scaleY(1); opacity: 0.55; }
          }
          @keyframes aband2 {
            0%   { transform: translateX(5%) skewX(5deg) scaleY(0.85); opacity: 0.35; }
            50%  { transform: translateX(-5%) skewX(-9deg) scaleY(1.4); opacity: 0.8; }
            100% { transform: translateX(5%) skewX(5deg) scaleY(0.85); opacity: 0.35; }
          }
          @keyframes aband3 {
            0%   { transform: translateX(0%) skewX(7deg) scaleY(1.1); opacity: 0.45; }
            55%  { transform: translateX(7%) skewX(-5deg) scaleY(0.75); opacity: 0.85; }
            100% { transform: translateX(0%) skewX(7deg) scaleY(1.1); opacity: 0.45; }
          }
          @keyframes aband4 {
            0%   { transform: translateX(-2%) skewX(-6deg) scaleY(1); opacity: 0.25; }
            60%  { transform: translateX(6%) skewX(5deg) scaleY(1.25); opacity: 0.65; }
            100% { transform: translateX(-2%) skewX(-6deg) scaleY(1); opacity: 0.25; }
          }
          @media (max-width: 760px) {
            .grid-2 { grid-template-columns: 1fr !important; }
            .hero-grid { grid-template-columns: 1fr !important; }
            .project-row > * { order: 0 !important; }
          }
          @media (hover: none) {
            .fx { display: none; }
          }
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { animation: none !important; transition: none !important; }
            .section-fade { opacity: 1; transform: none; }
            .fx { display: none; }
          }
        `}
        </style>

        {/* Navbar */}
        <nav style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          borderBottom: `1px solid ${scrolled ? colors.panelBorder : "transparent"}`,
          background: scrolled ? "rgba(23,27,36,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}>
          <Container style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: 20,
          }}>
            <span className="mono" style={{ fontSize: 15, fontWeight: 500, letterSpacing: 0.5 }}>
              {PROFILE.username}.fme
            </span>
            <div style={{ display: "flex", gap: 24 }}>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="tag-link" style={{ color: colors.textMid }}>
                <GithubIcon />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="tag-link" style={{ color: colors.textMid }}>
                <LinkedinIcon />
              </a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="tag-link" style={{ color: colors.textMid }}>
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </Container>
        </nav>

        <main>
          <FadeSection>
            {/* Hero */}
            <Container
              as="section"
              className="hero-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 0.9fr",
                gap: 48,
                alignItems: "center",
                paddingBlock: "80px 60px",
              }}
            >
              <div>
                <p className="mono" style={{ color: colors.accent, fontSize: 14, margin: "0 0 18px" }}>
                  {PROFILE.location}
                </p>
                <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1, margin: "0 0 12px", fontWeight: 500, textWrap: "balance" }}>
                  Halo, saya {PROFILE.name}.
                </h1>
                <h2 className="mono" style={{ fontSize: "clamp(18px, 2.4vw, 24px)", color: colors.textMid, fontWeight: 400, minHeight: 32, margin: "0 0 24px" }}>
                  {typed}
                  <span className="cursor" style={{ color: colors.accent }} aria-hidden="true">▍</span>
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: colors.textMid, maxWidth: 480, margin: "0 0 32px" }}>
                  {PROFILE.tagline}
                </p>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="#projects" className="mono cta-btn cta-primary">Lihat proyek</a>
                  <a href="#contact" className="mono cta-btn cta-secondary">Hubungi saya</a>
                </div>
              </div>

              {/* Foto profil */}
              <div ref={photoRef} onMouseMove={onPhotoMove} onMouseLeave={onPhotoLeave} style={{ position: "relative", perspective: 900 }}>
                <div className="photo-3d" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, position: "relative" }}>
                  <div style={{ aspectRatio: "3 / 4", maxHeight: 420, borderRadius: 8, overflow: "hidden", border: `1px solid ${colors.panelBorder}`, background: colors.panel, position: "relative" }}>
                    {PROFILE.photoUrl ? (
                      <img
                        src={PROFILE.photoUrl}
                        alt={PROFILE.name}
                        className="hero-photo"
                        fetchPriority="high"
                        decoding="async"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="mono" style={{ fontSize: 64, color: colors.panelBorder, fontWeight: 700 }}>
                          {PROFILE.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div style={{ position: "absolute", inset: 0, borderRadius: 8, pointerEvents: "none", background: `radial-gradient(circle at ${tilt.shine.x}% ${tilt.shine.y}%, rgba(255,255,255,0.09) 0%, transparent 60%)` }} />
                  </div>
                  <div className="mono" style={{ position: "absolute", left: 16, bottom: 16, background: colors.bg, border: `1px solid ${colors.panelBorder}`, borderRadius: 4, padding: "9px 14px", display: "flex", alignItems: "center", gap: 8, fontSize: 12.5 }}>
                    <span className="dot-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: colors.accent, display: "inline-block" }} />
                    open to work
                  </div>
                </div>
              </div>
            </Container>
          </FadeSection>

          <FadeSection>
            {/* Tentang Saya */}
            <Container
              as="section"
              className="hero-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "0.9fr 1.1fr",
                gap: 48,
                alignItems: "center",
                paddingBlock: "70px 60px",
              }}
            >
              <div style={{ background: colors.panel, border: `1px solid ${colors.panelBorder}`, borderRadius: 8, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 16px", borderBottom: `1px solid ${colors.panelBorder}` }}>
                  <Terminal size={14} color={colors.textMid} aria-hidden="true" />
                  <span className="mono" style={{ fontSize: 12, color: colors.textMid }}>
                    zsh — toriqq@fme
                  </span>
                </div>
                <div className="mono" style={{ padding: 20, fontSize: 13.5, lineHeight: 2 }}>
                  <div><span style={{ color: colors.accent }}>$</span> whoami</div>
                  <div style={{ color: colors.textMid }}>
                    &gt; {PROFILE.name.toLowerCase()} — {PROFILE.role}
                  </div>
                  <div style={{ marginTop: 8 }}><span style={{ color: colors.accent }}>$</span> cat focus.txt</div>
                  <div style={{ color: colors.textMid }}>&gt; system design, backend, database</div>
                  <div style={{ marginTop: 8 }}><span style={{ color: colors.accent }}>$</span> status</div>
                  <div style={{ color: colors.textMid }}>&gt; student / software engineer in progress</div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: 26, fontWeight: 500, margin: "0 0 16px" }}>Tentang saya</h3>
                <p style={{ color: colors.textMid, fontSize: 15.5, lineHeight: 1.8, margin: 0, maxWidth: 520 }}>
                  {PROFILE.bio}
                </p>
              </div>
            </Container>
          </FadeSection>

          {/* Marquee Skills */}
          <div
            className="marquee-wrap"
            aria-label="Skills"
            style={{
              borderTop: `1px solid ${colors.panelBorder}`,
              borderBottom: `1px solid ${colors.panelBorder}`,
              overflow: "hidden",
              padding: "18px 0",
            }}
          >
            <div className="marquee-track" style={{ display: "flex", width: "max-content", gap: 40 }}>
              {[...SKILLS, ...SKILLS].map((s, i) => (
                <span key={i} className="mono" aria-hidden={i >= SKILLS.length} style={{ fontSize: 14, color: colors.textMid, whiteSpace: "nowrap" }}>
                  {s} <span style={{ color: colors.accent, margin: "0 0 0 40px" }}>◆</span>
                </span>
              ))}
            </div>
          </div>

          <FadeSection>
            {/* Proyek */}
            <Container as="section" id="projects" style={{ paddingBlock: 90 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
                <h3 style={{ fontSize: 28, fontWeight: 500, margin: 0 }}>Proyek pilihan</h3>
                <span className="mono" style={{ color: colors.textMid, fontSize: 13 }}>
                  {String(PROJECTS.length).padStart(2, "0")} proyek
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
                {PROJECTS.map((p, i) => (
                  <a
                    key={p.id}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-row grid-2"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 40,
                      alignItems: "center",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div style={{ order: i % 2 === 0 ? 1 : 2, overflow: "hidden", borderRadius: 8 }}>
                      <div
                        className="project-card"
                        style={{
                          aspectRatio: "2 / 1",
                          borderRadius: 8,
                          border: `1px solid ${colors.panelBorder}`,
                          background: `linear-gradient(135deg, ${colors.panel} 0%, #262C3A 100%)`,
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={`Tampilan proyek ${p.title}`}
                            className="project-img"
                            loading="lazy"
                            decoding="async"
                            width={1787}
                            height={893}
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", willChange: "transform" }}
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              e.currentTarget.nextSibling.style.display = "flex";
                            }}
                          />
                        ) : null}
                        <span
                          className="mono"
                          style={{
                            fontSize: 48, color: colors.panelBorder, fontWeight: 700,
                            display: p.image ? "none" : "flex",
                            position: "absolute", inset: 0, alignItems: "center", justifyContent: "center",
                          }}
                        >
                          {p.id}
                        </span>
                      </div>
                    </div>
                    <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                      <h4 style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px", display: "flex", alignItems: "center", gap: 8 }}>
                        {p.title} <ArrowUpRight size={18} color={colors.accent} aria-hidden="true" />
                      </h4>
                      <p style={{ color: colors.textMid, lineHeight: 1.7, margin: "0 0 16px", fontSize: 15 }}>
                        {p.desc}
                      </p>
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        {p.tags.map((t) => (
                          <span key={t} className="mono" style={{ fontSize: 12, color: colors.accent }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Container>
          </FadeSection>

          <FadeSection>
            {/* Pendidikan */}
            <Container as="section" style={{ paddingBlock: 90 }}>
              <h3 style={{ fontSize: 28, fontWeight: 500, margin: "0 0 56px" }}>Pendidikan</h3>
              <Timeline items={EDUCATION} lineVisible={eduVisible} revealRef={eduRef} />
            </Container>
          </FadeSection>

          <FadeSection>
            {/* Pengalaman */}
            <div style={{ borderTop: `1px solid ${colors.panelBorder}` }}>
              <Container as="section" style={{ paddingBlock: 90 }}>
                <h3 style={{ fontSize: 28, fontWeight: 500, margin: "0 0 56px" }}>Pengalaman</h3>
                <Timeline items={EXPERIENCE} lineVisible={expVisible} revealRef={expRef} />
              </Container>
            </div>
          </FadeSection>

          <FadeSection>
            {/* Contact */}
            <div style={{ borderTop: `1px solid ${colors.panelBorder}` }}>
              <Container as="section" id="contact" style={{ paddingBlock: "90px 60px" }}>
                <h3 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 500, margin: "0 0 16px" }}>
                  Mari berkolaborasi.
                </h3>
                <p style={{ color: colors.textMid, fontSize: 16, margin: "0 0 32px", maxWidth: 460 }}>
                  Terbuka untuk peluang kerja maupun proyek kolaborasi. Silakan hubungi saya melalui email di bawah.
                </p>
                <a href={`mailto:${PROFILE.email}`} className="mono" style={{ fontSize: "clamp(15px, 2.4vw, 20px)", color: colors.accent, textDecoration: "none", wordBreak: "break-all" }}>
                  {PROFILE.email} ↗
                </a>
                <footer
                  className="mono"
                  style={{ marginTop: 56, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 13, color: colors.textMid }}
                >
                  <span>© {new Date().getFullYear()} {PROFILE.name}</span>
                  <span>Keep it simple.</span>
                </footer>
              </Container>
            </div>
          </FadeSection>
        </main>
      </div>
    </div>
  );
}