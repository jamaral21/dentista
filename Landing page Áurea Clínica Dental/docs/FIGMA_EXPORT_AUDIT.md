# Auditoría de exportación Figma Make

- **Fecha:** 2026-09-18
- **Estado inicial:** exportación React funcional a nivel de TypeScript; el primer build fue bloqueado por Node 18 frente al requisito de Vite 8 y después por un binding opcional de Rolldown ausente. Se resolvió usando Node 22 y reinstalación con pnpm.

## Stack y estructura encontrados

React 19, TypeScript, Vite 8, Tailwind CSS 4, `@tailwindcss/vite`, oxfmt y pnpm. La app estaba concentrada en `src/App.tsx`, con estilos globales en `src/index.css`, shell en `index.html` y configuración en `vite.config.ts`. El lockfile era `pnpm-lock.yaml`.

## Componentes y recursos

El archivo principal ya contenía Header, Hero, Clínica, Tratamientos, Equipo, Experiencia, Contacto, Footer y FAB de WhatsApp. Las capturas se entregaron como `Desktop.png` y `Mobile.png` en la raíz. Las fotografías inicialmente apuntaban a Unsplash; se descargaron a `public/images/` conservando los mismos recursos y se ajustó el encuadre de Elena.

## Problemas detectados

- Metadata HTML incompleta y `lang` dependiente de slots de Figma.
- Acciones ficticias con `href="#"` sin un aviso reutilizable.
- Formulario con estado de envío artificial y sin reinicio inmediato.
- Menú móvil sin `aria-controls` ni cierre con Escape.
- Dependencia remota de imágenes.
- Sin scripts explícitos de typecheck/lint.
- El entorno local no tenía pnpm ni Node 22 disponibles.

## Conservado y refactorizado

Se conservaron layout, paleta, tipografías, secciones, textos aprobados, microinteracciones, iconos y composición. Se refactorizó el comportamiento de demo, navegación móvil, metadata, anclas, movimiento reducido, scripts y rutas de imágenes.

## Eliminado

No se eliminaron componentes visuales ni capturas. Se eliminaron únicamente dependencias de red de las fotografías reemplazándolas por copias locales.

## Diferencias finales

Las acciones de contacto ahora muestran un modal accesible y nunca abren canales reales. El formulario valida con HTML, previene la acción por defecto, muestra un estado `aria-live`, limpia los campos y no hace solicitudes HTTP.
