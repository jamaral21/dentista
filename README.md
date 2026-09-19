# Áurea Clínica Dental

Landing page conceptual de una clínica dental ficticia, creada por PEPE LABS a partir de una exportación de Figma Make. No representa un negocio real y no recopila, almacena ni transmite datos personales.

## Stack

- React 19 + TypeScript 5.9
- Vite 8 + Tailwind CSS 4
- pnpm 10 (lockfile incluido)
- Node.js 22, según `.mise.toml`

Las referencias visuales entregadas se conservan en `references/desktop.png` y `references/mobile.png`.

## Requisitos e instalación

Se requiere Node.js 22 y pnpm 10. Desde este directorio:

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

El servidor de desarrollo usa el puerto 8443 por defecto. Para producción:

```bash
pnpm run typecheck
pnpm run lint
pnpm run build
pnpm run preview
```

El build se genera en `dist/`.

## Scripts

- `pnpm run dev`: servidor local Vite.
- `pnpm run build`: build optimizado.
- `pnpm run preview`: sirve `dist/` localmente.
- `pnpm run typecheck`: comprobación estricta de TypeScript.
- `pnpm run lint`: ESLint para TypeScript, React Hooks y React Refresh.
- `pnpm run format`: formato con oxfmt.

## Organización

- `src/App.tsx`: composición de la landing.
- `src/components/`: componentes de layout, secciones y UI.
- `src/content/site-content.ts`: API pública de navegación, tratamientos, perfiles, beneficios y testimonios. Los iconos JSX se mantienen en el módulo interno `.tsx`.
- `src/types/`: contratos TypeScript del contenido.
- `src/index.css`: tokens visuales, responsive y accesibilidad global.
- `public/images/`: fotografías locales optimizadas.
- `docs/`: brief, arquitectura, QA, contenido y despliegue.
- `docs/adr/`: decisiones técnicas.
- `references/`: `desktop.png` y `mobile.png`, referencias visuales aprobadas.

## Personalización

El contenido editable está centralizado en `src/content/site-content.tsx` en `navigationLinks`, `treatments`, `benefits`, `profiles` y `testimonials`. Los datos de contacto viven allí en `contactItems`. Sustituye imágenes en `public/images/` y actualiza sus rutas y textos alternativos.

Los colores y estilos base están en `src/index.css`. Conserva `#081D2C`, `#F5F8FA`, `#55D6A9` y `#78BFEA` para mantener la dirección visual aprobada.

## Validaciones

Ejecuta typecheck, lint, smoke test y build antes de entregar. La checklist de revisión está en `docs/QA_CHECKLIST.md`. Las acciones de WhatsApp, teléfono, correo y formulario son deliberadamente simuladas.

## Despliegue

El sitio es estático y puede servirse con Nginx desde `dist/`. Consulta `docs/DEPLOYMENT.md`.

## Créditos

Proyecto conceptual creado por PEPE LABS. Todos los nombres, datos, imágenes y testimonios son ficticios.
