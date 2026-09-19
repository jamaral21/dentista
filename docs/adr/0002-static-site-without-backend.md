# ADR 0002: Sitio estático sin backend

- **Estado:** Aceptado
- **Fecha:** 2026-09-18

## Contexto
El proyecto es una landing conceptual de una sola página sin operaciones persistentes.

## Decisión
Compilar a assets estáticos y servirlos con Nginx. No se incluye backend ni base de datos.

## Alternativas
Añadir API, CMS o servicio de formularios. Serían innecesarios para la demostración y ampliarían superficie de seguridad.

## Consecuencias
Despliegue barato, rápido y fácil de duplicar. No existe agenda ni procesamiento de contactos.

## Revisar si
Se aprueba una operación real que necesite autenticación, agenda, almacenamiento o procesamiento de solicitudes.
