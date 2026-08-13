export interface Project {
  name: string;
  tech: string;
}

export interface WorkEntry {
  org: string;
  role: string;
  date: string;
  description?: string;
}

export const personalProjects: Project[] = [
  { name: "webv3", tech: "Astro, Tailwind CSS" },
  { name: "michidots", tech: "Shell" },
  { name: "chiledev", tech: "Web" },
  { name: "webv2", tech: "Astro, Tailwind CSS" },
  { name: "riverdots", tech: "Shell" },
  { name: "hyprdots", tech: "Shell" },
  { name: "bspwm dots", tech: "Shell" },
  { name: "DEgraph", tech: "Rust" },
  { name: "WSPI", tech: "Rust" },
];

export const collaborationProjects: Project[] = [
  { name: "werner-rector", tech: "Rust" },
  { name: "lyoss-usm.github.io", tech: "SvelteKit" },
  { name: "mapa", tech: "Next.js, QGIS, PostGIS" },
];

export const work: WorkEntry[] = [
  {
    org: "LyOSS USM",
    role: "Jefe de comunidad & Cofounder",
    date: "Sept 2025 - Present",
  },
  {
    org: "Universidad Técnica Federico Santa María",
    role: "Subcoordinador General DIFTEL",
    date: "Oct 2024 - Present",
  },
  {
    org: "Universidad Técnica Federico Santa María",
    role: "Ayudante Proyecto Inicial",
    date: "Mar 2025 - Jul 2026",
  },
  {
    org: "CEETEL",
    role: "Vicepresidente",
    date: "Apr 2025 - Apr 2026",
  },
  {
    org: "Axiovista",
    role: "Documentador Técnico",
    date: "Sept 2025 - Feb 2026",
  },
  {
    org: "Universidad de La Serena (Laboratorio PROMMRA)",
    role: "Técnico en Electrónica",
    date: "Aug 2023 - Mar 2025",
    description: "Rural telemetry & hardware.",
  },
  {
    org: "Ilustre Municipalidad de Ovalle",
    role: "Personal de soporte para TI",
    date: "Jan 2023 - Mar 2023",
  },
];