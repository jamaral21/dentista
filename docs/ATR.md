# Technical Architecture Record

## Contexto y objetivos
Se necesita una landing de una sola página, rápida, estática, duplicable y segura para una demostración ficticia.

## Arquitectura final
React renderiza `App` en el navegador. Vite compila TypeScript, Tailwind procesa estilos y `public/images` entrega fotografías locales. Nginx sirve `dist/`; no existe backend.

```mermaid
graph TD
  Source[React + TypeScript] --> Vite[Vite build]
  CSS[index.css + Tailwind CSS] --> Vite
  Images[public/images] --> Vite
  Vite --> Dist[dist/]
  Dist --> Nginx[Nginx estático]
  Browser[Navegador] --> Nginx
```

## Organización
`App.tsx` compone componentes en `src/components/layout`, `src/components/sections` y `src/components/ui`. El contenido vive en `src/content/site-content.tsx` y sus contratos en `src/types/site.ts`.

## Build y despliegue
`pnpm install --frozen-lockfile`, `pnpm run typecheck`, `pnpm run lint`, `pnpm test`, `pnpm run build`; Nginx publica `dist/`. No requiere SPA fallback porque la experiencia usa una sola ruta.

## Imágenes
Se sirven seis JPEG locales, con `aspect-ratio`, `loading="lazy"` fuera del hero y `loading="eager"` para el hero.

## Accesibilidad y rendimiento
HTML semántico, skip link, un `h1`, labels, foco visible, menú móvil con estado ARIA, modal con Escape y restauración de foco, `aria-live`, alt text y `prefers-reduced-motion`. La fuente se carga desde Google Fonts; para una auditoría offline futura puede auto-hospedarse.

## Privacidad y seguridad
No hay fetch, analítica, storage, cookies ni datos reales. Metadata incluye `noindex, nofollow`. El formulario es local y se reinicia tras la confirmación.

## Riesgos y limitaciones
Sora e Inter se cargan desde Google Fonts mediante sus URLs oficiales; no se encontraron archivos locales oficiales en el repositorio. Las fotos son ilustrativas y deben revisarse legalmente antes de reutilizarse en otro cliente.

## Evoluciones
Auto-hospedar fuentes oficiales solo si se incorporan archivos con licencia compatible; ampliar las pruebas de navegador si el proyecto deja de ser una landing estática.
