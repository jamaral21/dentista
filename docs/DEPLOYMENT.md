# Deployment

## Build local

```bash
pnpm install --frozen-lockfile
pnpm run typecheck
pnpm run build
```

Publica únicamente el contenido de `dist/`. No publiques `node_modules`, `.git`, archivos `.env`, capturas internas si no son necesarias ni credenciales.

## Nginx

Ejemplo para un host estático:

```nginx
server {
    listen 80;
    server_name example.invalid;
    root /var/www/aurea-dental/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:css|js|jpg|jpeg|png|svg|webp|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

La ruta fallback no es necesaria para navegar por anclas, pero permite servir el shell si se añade una ruta futura.

## HTTPS y permisos

Configura HTTPS con Certbot en el servidor siguiendo la guía oficial de la distribución. Sirve archivos con un usuario sin privilegios de escritura y permisos de lectura para Nginx. No incluyas secretos en el repositorio.

## Actualización y rollback

Construye una carpeta versionada fuera del web root, valida `dist/`, cambia el enlace o sincroniza el directorio publicado y conserva la versión anterior para rollback. Verifica status HTTP, assets, metadata y navegación después del cambio.
