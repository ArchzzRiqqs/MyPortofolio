import projects from "../../src/content/projects.json";

// Proyek di situs (projects.json) + proyek tambahan yang hanya tampil di reel.
// `aspect` = lebar/tinggi screenshot, dipakai agar gambar tidak terpotong.
const SITE_ASPECT = 1400 / 703;

const EXTRA = [
  { id: "04", slug: "kaswarga", title: "KasWarga", kind: "Kas RT/RW · Iuran warga", tags: [], file: "KasWarga.webp", aspect: 1271 / 840 },
  { id: "05", slug: "rangkumin", title: "Rangkum.in", kind: "Ringkasan teks · Prototipe UI", tags: ["React", "Vite"], file: "Rangkumin.webp", aspect: 1400 / 703 },
];

export const reelProjects = [
  ...projects.map((p) => ({ ...p, file: `${p.title}.webp`, aspect: SITE_ASPECT })),
  ...EXTRA,
];
