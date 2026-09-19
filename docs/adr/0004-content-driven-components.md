# ADR 0004: Componentes guiados por contenido

- **Estado:** Aceptado
- **Fecha:** 2026-09-18

## Contexto
Tratamientos, beneficios, testimonios y navegación repiten una estructura visual.

## Decisión
Mantener arrays de contenido y renderizado por sección en `App.tsx`, sin crear una capa CMS ni componentes para cada átomo.

## Alternativas
CMS, JSON externo o una abstracción de componentes más granular. No se justifican para esta escala.

## Consecuencias
Duplicar y adaptar una landing es rápido; el archivo principal sigue siendo grande y una evolución mayor podría requerir extraer `src/content`.

## Revisar si
Aumentan clientes, idiomas, edición no técnica o pruebas unitarias de contenido.
