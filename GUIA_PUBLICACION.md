# Guía de Publicación - Página de Concienciación sobre Ciberdelitos

## Problema Actual
Si tienes el error 404 al publicar desde v0, usa estas alternativas probadas:

---

## ✅ OPCIÓN 1: Vercel (Recomendada - Gratis)

### Paso 1: Descargar el Proyecto
1. En v0, haz clic en los **tres puntos (⋮)** en la esquina superior derecha
2. Selecciona **"Download ZIP"**
3. Descomprime el archivo en tu computadora

### Paso 2: Subir a GitHub
1. Ve a https://github.com y crea una cuenta (si no tienes)
2. Haz clic en **"New repository"**
3. Nombra tu repositorio (ej: "ciber-delitos-web")
4. Sube todos los archivos del proyecto

### Paso 3: Desplegar en Vercel
1. Ve a https://vercel.com
2. Haz clic en **"Sign Up"** y regístrate con tu cuenta de GitHub
3. Haz clic en **"New Project"**
4. Selecciona tu repositorio "ciber-delitos-web"
5. Vercel detectará automáticamente Next.js
6. Haz clic en **"Deploy"**
7. ¡Listo! Tu página estará en línea en 2-3 minutos

**URL Final:** `https://tu-proyecto.vercel.app`

---

## ✅ OPCIÓN 2: GitHub Pages (Hosting Estático - Gratis)

### Paso 1: Generar Archivos Estáticos
En tu computadora, después de descargar el proyecto:

\`\`\`bash
# Instalar dependencias
pnpm install

# Generar archivos estáticos
pnpm build
\`\`\`

Esto creará una carpeta `out/` con archivos HTML listos para publicar.

### Paso 2: Subir a GitHub Pages
1. Crea un repositorio en GitHub
2. Sube SOLO los archivos de la carpeta `out/`
3. Ve a **Settings** > **Pages**
4. Selecciona la rama **main** como fuente
5. Haz clic en **Save**

**URL Final:** `https://tu-usuario.github.io/tu-repositorio`

---

## ✅ OPCIÓN 3: Netlify Drop (La Más Fácil - Gratis)

### Pasos:
1. Descarga el proyecto desde v0
2. Ejecuta `pnpm install` y `pnpm build` localmente
3. Ve a https://app.netlify.com/drop
4. **Arrastra la carpeta `out/`** a la página
5. ¡Listo! Netlify te dará una URL instantánea

**URL Final:** `https://nombre-aleatorio.netlify.app`

---

## ✅ OPCIÓN 4: InfinityFree / 000webhost (Hosting Tradicional - Gratis)

### Paso 1: Generar Archivos
\`\`\`bash
pnpm install
pnpm build
\`\`\`

### Paso 2: Subir Archivos
1. Regístrate en https://www.infinityfree.net o https://www.000webhost.com
2. Crea un sitio web
3. Usa el File Manager o FTP
4. Sube todos los archivos de la carpeta `out/` a `public_html/`

**URL Final:** Tu dominio personalizado o subdominio gratuito

---

## 📋 Resumen de Opciones

| Opción | Dificultad | Velocidad | Dominio Personalizado |
|--------|-----------|-----------|----------------------|
| **Vercel** | Fácil | 3 min | ✅ Gratis (.vercel.app) |
| **GitHub Pages** | Media | 5 min | ✅ Con configuración |
| **Netlify Drop** | Muy Fácil | 1 min | ✅ Gratis (.netlify.app) |
| **InfinityFree** | Media | 10 min | ✅ Gratis |

---

## 🎓 Autores del Proyecto

- Rizo Estrada Christian Gabriel
- Gonzalez Gonzalez Emilio
- Sanchez Rodriguez Angel Gael
- Zepeda Garcia Christopher Daniel

---

## ⚠️ Notas Importantes

- La configuración actual está lista para **exportación estática**
- NO necesitas instalar Node.js en el servidor
- Los archivos de la carpeta `out/` son HTML, CSS y JS puros
- Funcionan en cualquier servidor web tradicional

---

## 🆘 ¿Necesitas Ayuda?

Si sigues teniendo problemas:
1. Verifica que ejecutaste `pnpm build` correctamente
2. Revisa que la carpeta `out/` se haya generado
3. Asegúrate de subir TODO el contenido de `out/`, no solo algunos archivos
4. Contacta al soporte del servicio de hosting que estés usando
