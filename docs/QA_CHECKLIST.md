# QA Checklist

## Ejecutado el 2026-09-18

- [x] Instalación con `pnpm install --frozen-lockfile`.
- [x] `pnpm run typecheck` equivalente ejecutado con `tsc --noEmit`.
- [x] Build de producción ejecutado con Node 22 y Vite.
- [x] Salida `dist/` generada.
- [x] Recursos de imagen descargados localmente.
- [x] Revisión estática de ausencia de `fetch`, storage, analítica y canales reales.
- [x] Metadata `noindex, nofollow` y descripción conceptual.
- [x] Un solo `h1` y navegación por anclas disponible en el DOM.
- [x] Menú móvil abre, expone `aria-expanded` y cierra con Escape.
- [x] Modal de demostración visible y enfocable.
- [x] Formulario válido muestra confirmación simulada y no conserva los campos.
- [x] Sin overflow horizontal en 320, 375, 390, 768, 1024 y 1440 px.
- [x] Smoke tests estáticos de estructura, modal, formulario, menú y avisos.

## Pendiente de ejecución manual en navegador

- [ ] Revisar visualmente 320, 375, 390, 768, 1024 y 1440 px.
- [ ] Probar formulario inválido con revisión visual del navegador.
- [x] Confirmar restauración de foco del modal después de Escape.
- [ ] Confirmar un solo `h1`, anclas y foco visible.
- [ ] Revisar Chrome, Firefox y Safari.
- [ ] Ejecutar Lighthouse Performance, Accessibility, Best Practices y SEO.
- [ ] Revisar errores de consola y carga de imágenes.

No se marcan como ejecutadas las validaciones que requieren una auditoría visual, navegador automatizado o revisión humana.
