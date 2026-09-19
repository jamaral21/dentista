# ADR 0006: Accesibilidad y movimiento reducido

- **Estado:** Aceptado
- **Fecha:** 2026-09-18

## Contexto
La landing debe alcanzar una base WCAG 2.2 AA y funcionar en teclado y móvil.

## Decisión
Usar HTML semántico, skip link, labels, foco visible, un h1, estado ARIA del menú, Escape y restauración de foco del modal, `aria-live` y `prefers-reduced-motion`.

## Alternativas
Añadir una librería completa de accesibilidad. Se mantiene HTML nativo porque cubre el alcance sin dependencia adicional.

## Consecuencias
Menor peso y comportamiento explícito; la conformidad final requiere auditoría manual y con herramientas.

## Revisar si
Se incorporan diálogos complejos, navegación multipágina o requisitos de accesibilidad más amplios.
