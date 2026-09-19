# Design System

## Tokens

- Navy: `#081D2C`
- Navy medio: `#0E2E46`
- Blanco frío: `#F5F8FA`
- Verde: `#55D6A9`
- Azul claro: `#78BFEA`
- Fuente de títulos: Sora 400-800.
- Fuente de cuerpo: Inter 400-700.

Sora e Inter se cargan desde Google Fonts usando sus URLs oficiales en `src/index.css`. No se encontraron archivos oficiales locales en el repositorio, por lo que no se auto-hospedan.

## Escala y layout
La interfaz usa utilities Tailwind, títulos de sección de `text-3xl` a `text-4xl`, hero responsive de `text-4xl` a `text-6xl`, espacios verticales `py-20`/`md:py-28` y contenedor `max-w-6xl` con padding horizontal 20px.

## Forma y elevación
Radios entre 10px y 16px (`rounded-xl`/`rounded-2xl`). Sombras suaves en tarjetas y botones; tarjetas con borde de navy al 6-8%.

## Componentes
Botones primarios usan gradiente verde-azul, texto navy, radio 10px y foco visible. Botones outline se adaptan a fondos claros y oscuros. Tarjetas de tratamientos y perfiles usan contraste, borde sutil y elevación al pasar el cursor.

## Iconos y fotografía
Iconos de línea inline y decorativos con `aria-hidden`. Las fotos se sirven desde `public/images`, con object-fit cover, proporciones estables y alt text descriptivo.

## Estados
Hover eleva botones/tarjetas; focus visible usa outline de 2px con offset; disabled comunica el estado del formulario mediante `aria-busy`. El modal bloquea visualmente el fondo y se cierra con Escape o botón.

## Breakpoints
Mobile-first; navegación desktop desde `md`, tarjetas de tratamientos en 1/2/3 columnas desde `sm`/`lg`, y contenido principal en dos columnas desde `md`.

## Organización

La composición vive en `src/App.tsx`; layout en `src/components/layout`, secciones en `src/components/sections`, UI reutilizable en `src/components/ui`, y contenido editable en `src/content/site-content.ts`.

## Movimiento
Scroll suave y transiciones cortas son parte del diseño; `prefers-reduced-motion: reduce` elimina transiciones y animaciones.
