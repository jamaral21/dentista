# Content Guide

El contenido editable vive en `src/content/site-content.tsx`: navegación `navigationLinks`, tratamientos `treatments`, beneficios `benefits`, testimonios `testimonials`, perfiles `profiles` y datos de contacto `contactItems`. Los avisos se mantienen en los componentes que controlan el comportamiento.

Para cambiar una imagen, reemplaza el archivo correspondiente en `public/images/`, conserva una proporción adecuada y actualiza `src`, `alt` y `loading` si cambia su uso. Cada perfil debe conservar su aviso ficticio mientras la marca sea conceptual.

Los testimonios actuales son ilustrativos. Para usar testimonios reales se requiere consentimiento documentado, autorización de nombre e imagen y revisión legal; no deben presentarse como médicos ni prometer resultados.

Todo contenido médico debe ser informativo, prudente y remitir a valoración profesional. Sustituir dirección, teléfono, correo o WhatsApp requiere revisar primero privacidad, consentimiento, seguridad y términos del proveedor.

## Antes de activar canales reales

- Confirmar propiedad y autorización de datos.
- Definir aviso de privacidad y responsable del tratamiento.
- Reemplazar el modal por integraciones revisadas.
- Añadir protección anti-spam y validación de servidor.
- No imprimir datos en consola ni guardarlos en storage.
- Probar consentimiento, retención, backups y eliminación.
