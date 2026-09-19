# ADR 0001: Conservar el stack exportado

- **Estado:** Aceptado
- **Fecha:** 2026-09-18

## Contexto
La exportación usa React, TypeScript, Vite y Tailwind CSS, y es recuperable con Node 22 y pnpm.

## Decisión
Conservar React + TypeScript + Vite + Tailwind CSS.

## Alternativas
Migrar a Next.js, Astro o reescribir con HTML/CSS. No aportan una ventaja necesaria para una landing estática y aumentarían el coste de adaptación.

## Consecuencias
Se preserva la fidelidad visual, el conocimiento del export y un build estático simple. Se mantiene la dependencia de Vite y de Node 22.

## Revisar si
La exportación deja de construir, aparece una necesidad real de routing/server rendering o cambian los requisitos de hosting.
