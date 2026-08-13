export interface Project {
  name: string;
  href: string;
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    name: "Sitio web de campaña Werner Rector",
    href: "https://werner-rector.cl",
    description: "Sitio de campaña para la rectoría UTFSM 2026-2030.",
    stack: ["Astro", "Tailwind CSS"],
  },
  {
    name: "Sitio web personal",
    href: "https://github.com/michifeli/michifeli.github.io",
    description: "Sitio web personal.",
    stack: ["Astro", "Tailwind CSS"],
  },
  {
    name: "chileDev",
    href: "https://github.com/michifeli/chiledev",
    description:
      "La plataforma extrae, normaliza y analiza información del mercado TI en Chile para ayudar a Juniors a tomar decisiones concretas en su carrera profesional.",
    stack: ["Node.js", "React", "PostgreSQL", "Express.js", "Tailwind CSS"],
  },
  {
    name: "Sitio web de la  Comunidad Linux y Open Source USM",
    href: "https://lyoss.org",
    description: "Página web de la comunidad Linux USM.",
    stack: ["Astro", "Tailwind CSS", "MDX"],
  },
  {
    name: "Dotfiles Gentoo GNU/Linux",
    href: "https://github.com/michifeli/michidots",
    description:
      "Entorno de trabajo modular y pragmático para Gentoo GNU/Linux.",
    stack: ["Shell"],
  },
  {
    name: "Mapa USM",
    href: "https://github.com/lyoss-usm/mapa",
    description: "Mapa interactivo para Casa Central USM.",
    stack: ["Next.js", "Tailwind CSS", "QGIS", "PostGIS"],
  },
  {
    name: "bspwm + arch linux",
    href: "https://github.com/michifeli/bspwmdots",
    description: "Bspwm dotfiles.",
    stack: ["Shell"],
  },
  {
    name: "hyprland + arch linux",
    href: "https://github.com/michifeli/hyprdots",
    description: "Hyprland dotfiles.",
    stack: ["Shell"],
  },
  {
    name: "DEgraph",
    href: "https://github.com/michifeli/DEgraph",
    description:
      "Proyecto de código abierto para graficar ecuaciones diferenciales de primer orden e interactuar con modelos dinámicos.",
    stack: ["C++", "Qt"],
  },
  {
    name: "WSPi",
    href: "https://github.com/michifeli/WSPi",
    description:
      "Desarrollado para el ramo inicial de introducción a la ingeniería. Dispositivo que te permite comprar y vender criptomonedas de manera fácil y rápida.",
    stack: ["Python", "Raspberry Pi"],
  },
];

