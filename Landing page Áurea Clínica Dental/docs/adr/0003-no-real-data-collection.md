# ADR 0003: No recopilar datos reales

- **Estado:** Aceptado
- **Fecha:** 2026-09-18

## Contexto
Áurea es ficticia y el repositorio no debe convertirse accidentalmente en un canal operativo.

## Decisión
Las acciones de contacto muestran un aviso accesible; el formulario solo valida en navegador, limpia campos y no ejecuta solicitudes, storage, cookies ni analítica.

## Alternativas
Enlaces reales a WhatsApp, teléfono, correo o un endpoint. Se descartan por el alcance demostrativo.

## Consecuencias
Privacidad clara y menor riesgo; las acciones no son funcionales para un negocio real.

## Revisar si
Existe consentimiento, aviso de privacidad, proveedor, backend seguro y decisión explícita de activar datos reales.
