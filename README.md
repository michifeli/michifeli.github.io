Este repositorio contiene el sitio personal y blog minimalista hecho con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com) v4. Esta es la v3 del sitio: la v2 estaba hecha con Svelte y no me convenció, así que la reescribí a mi estilo con un tema oscuro, partículas ASCII y cero JavaScript de carga inicial.

## Requisitos

- [Node.js](https://nodejs.org/en) (>= 22.12)
- [pnpm](https://pnpm.io/es/) (>= 10.x)

## Ejecución local

1. Clona este repositorio:

   ```bash
   git clone https://github.com/michifeli/michifeli.github.io.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd michifeli.github.io
   ```

3. Instala las dependencias:

   ```bash
   pnpm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

5. Abre tu navegador y visita [http://localhost:4321](http://localhost:4321) para ver el sitio web en acción.

## Comandos

| Comando            | Acción                                            |
| :----------------- | :------------------------------------------------ |
| `pnpm dev`         | Inicia el servidor de desarrollo en `localhost:4321` |
| `pnpm build`       | Compila el sitio de producción en `./dist/`       |
| `pnpm preview`     | Previsualiza el build localmente antes de desplegar |
| `pnpm astro ...`   | Ejecuta comandos de la CLI de Astro (`astro check`, etc.) |

## Deploy a GitHub Pages

El sitio está configurado para desplegarse en la raíz de `https://michifeli.github.io/` (repo de usuario, sin `base`).

1. Compila el sitio:

   ```bash
   pnpm build
   ```

2. Sube manualmente el contenido de `dist/` al repositorio `michifeli/michifeli.github.io` (rama `main` o la rama/carpeta que tengas configurada como fuente de GitHub Pages).

3. Listo: el sitio queda publicado en `https://michifeli.github.io/`.

## Estructura

```text
/
├── public/          # Assets estáticos (imágenes, favicon, CVs)
├── src/
│   ├── components/  # Navbar, Footer, Hero, partículas, etc.
│   ├── content/     # Colección de posts (writing)
│   ├── data/        # Datos de proyectos
│   ├── layouts/     # Layout principal
│   ├── pages/       # Rutas: /, /writing, /projects, /about, /gallery, /credits
│   └── styles/      # Estilos globales
└── package.json
```
