# Solución para Error de Netlify

## El Problema

Netlify no puede encontrar la carpeta `app/` en tu repositorio de GitHub. Error: `Couldn't find any pages or app directory`

## Solución: Verifica que TODO esté en GitHub

### 1. Verifica qué archivos subiste a GitHub

Ve a tu repositorio en GitHub y asegúrate de que veas estas carpetas:

\`\`\`
✅ app/
✅ components/
✅ hooks/
✅ lib/
✅ public/
✅ scripts/
✅ package.json
✅ next.config.mjs
✅ netlify.toml (el que acabo de crear)
\`\`\`

### 2. Si falta la carpeta `app/`, súbela:

En tu terminal, dentro del proyecto:

\`\`\`bash
# Verifica el estado de git
git status

# Agrega TODOS los archivos
git add .

# Haz commit
git commit -m "Agregar todos los archivos del proyecto"

# Sube a GitHub
git push origin main
\`\`\`

**IMPORTANTE:** Si creaste el repositorio desde la web de GitHub y descargaste el proyecto como ZIP de v0, asegúrate de hacer:

\`\`\`bash
# Inicializa git si no existe
git init

# Conecta con tu repositorio
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# Agrega todos los archivos
git add .

# Haz commit
git commit -m "Proyecto completo de ciberdelitos"

# Sube todo
git push -u origin main
\`\`\`

### 3. Configuración en Netlify

Una vez que todos los archivos estén en GitHub:

1. Ve a Netlify Dashboard
2. Haz clic en tu sitio
3. Ve a **Site settings** → **Build & deploy** → **Build settings**
4. Configura:
   - **Build command:** `pnpm install && pnpm build`
   - **Publish directory:** `out`
5. Haz clic en **"Trigger deploy"** → **"Deploy site"**

### 4. Alternativa Rápida: Netlify Drop

Si sigues teniendo problemas con GitHub:

1. Descarga el proyecto completo de v0 como ZIP
2. Descomprímelo en tu computadora
3. Abre la terminal en esa carpeta
4. Ejecuta:
   \`\`\`bash
   pnpm install
   pnpm build
   \`\`\`
5. Ve a https://app.netlify.com/drop
6. Arrastra la carpeta `out` que se creó
7. ¡Listo! Netlify te dará una URL inmediatamente

### 5. Si nada funciona: GitHub Pages

\`\`\`bash
# Después de pnpm build
# Sube la carpeta out a la rama gh-pages

git checkout -b gh-pages
git add out -f
git commit -m "Deploy"
git subtree push --prefix out origin gh-pages
\`\`\`

Luego en GitHub: Settings → Pages → Source: gh-pages

---

## Verificación Final

Archivos que DEBEN estar en tu repositorio:

- ✅ `app/page.tsx`
- ✅ `app/layout.tsx`
- ✅ `app/globals.css`
- ✅ `components/ui/*` (todos los componentes)
- ✅ `public/*.jpg` (las imágenes)
- ✅ `package.json`
- ✅ `next.config.mjs`
- ✅ `netlify.toml`

Si todos estos archivos están en GitHub y sigues teniendo errores, el problema es la configuración de Netlify, no tu código.
