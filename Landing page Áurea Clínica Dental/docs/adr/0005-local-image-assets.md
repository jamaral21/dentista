# ADR 0005: Assets de imagen locales

- **Estado:** Aceptado
- **Fecha:** 2026-09-18

## Contexto
El prototipo referenciaba seis fotografías mediante URLs de Unsplash.

## Decisión
Conservar las fotografías usadas, descargarlas a `public/images`, fijar proporciones y cargar lazy las que están fuera del hero.

## Alternativas
Mantener URLs remotas o usar un CDN. Se descartan para que el build sea reproducible y no dependa de terceros.

## Consecuencias
Carga más predecible y despliegue autónomo; el repositorio debe revisar tamaño, licencia y optimización de cada imagen.

## Revisar si
El volumen crece, se necesita transformación responsive o existe un CDN aprobado.
