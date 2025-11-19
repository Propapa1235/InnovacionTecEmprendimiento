# Guía de Despliegue en Vercel

## Problema Común: Error 404 después de publicar

Si encuentras un error 404 después de publicar desde v0, prueba estos pasos:

### Solución 1: Redespliegue
1. Ve a tu proyecto en Vercel Dashboard
2. Haz clic en la pestaña "Deployments"
3. Encuentra el último despliegue
4. Haz clic en los tres puntos (...) y selecciona "Redeploy"

### Solución 2: Verifica las rutas
El proyecto usa Next.js App Router. La página principal está en:
- `app/page.tsx` - Esta es la ruta raíz (/)

### Solución 3: Limpia la caché
1. En Vercel Dashboard, ve a Settings
2. Busca la opción "Clear Build Cache"
3. Realiza un nuevo despliegue

### Solución 4: Publica desde GitHub
En lugar de publicar directamente desde v0:
1. Descarga el código como ZIP desde v0
2. Súbelo a un repositorio de GitHub
3. Conecta el repositorio a Vercel
4. Vercel desplegará automáticamente

### Verificación Local
Antes de desplegar, verifica que funcione localmente:
\`\`\`bash
pnpm install
pnpm dev
\`\`\`

Abre http://localhost:3000 y verifica que todo funcione correctamente.

### Contacto de Soporte
Si el problema persiste:
- Soporte de Vercel: https://vercel.com/help
- Documentación de Next.js: https://nextjs.org/docs

## Imágenes
Las imágenes están en la carpeta `public/`. Asegúrate de que todas las rutas sean correctas:
- `/images/design-mode/ciberseguridad.jpg`
- `/images/design-mode/imagen_2025-11-18_000451775.png`
