# Proyecto - Ciber Delitos

Página web educativa para concienciar a la comunidad estudiantil universitaria sobre ciberdelitos y las medidas de prevención contra fraudes, phishing y otras amenazas digitales.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **pnpm** (gestor de paquetes)

### Instalar pnpm

Si no tienes pnpm instalado, puedes instalarlo globalmente con npm:

\`\`\`bash
npm install -g pnpm
\`\`\`

## Instalación

1. **Clona o descarga el proyecto** en tu computadora

2. **Navega a la carpeta del proyecto** en tu terminal:

\`\`\`bash
cd proyecto-ciber-delitos
\`\`\`

3. **Instala las dependencias** con pnpm:

\`\`\`bash
pnpm install
\`\`\`

Este comando instalará todas las bibliotecas y dependencias necesarias listadas en el archivo `package.json`.

## Ejecución

### Modo Desarrollo

Para ejecutar el proyecto en modo desarrollo:

\`\`\`bash
pnpm dev
\`\`\`

Esto iniciará el servidor de desarrollo. Abre tu navegador y visita:

\`\`\`
http://localhost:3000
\`\`\`

El servidor se recargará automáticamente cuando hagas cambios en el código.

### Compilar para Producción

Para crear una versión optimizada para producción:

\`\`\`bash
pnpm build
\`\`\`

### Iniciar en Modo Producción

Después de compilar, puedes iniciar el servidor en modo producción:

\`\`\`bash
pnpm start
\`\`\`

## Publicar tu Página Web

### Opción 1: Vercel (Recomendado - Gratis y Fácil)

**Vercel** es la plataforma oficial de Next.js y es la forma más sencilla de publicar tu proyecto:

1. Crea una cuenta gratuita en [vercel.com](https://vercel.com)
2. Haz clic en "New Project" y conecta tu repositorio de GitHub/GitLab
3. Vercel detectará automáticamente que es Next.js
4. Haz clic en "Deploy" y en minutos tu sitio estará en línea

**Ventajas:**
- Totalmente gratis para proyectos personales y educativos
- HTTPS automático (certificado SSL)
- Actualizaciones automáticas con cada push a GitHub
- No necesitas configurar nada, funciona de inmediato
- URL personalizada incluida

### Opción 2: Exportar como Sitio Estático

Si quieres usar un hosting tradicional (GitHub Pages, Netlify, servidor Apache, etc.):

1. El proyecto ya está configurado para exportación estática en `next.config.mjs`
2. Ejecuta el comando de compilación:

\`\`\`bash
pnpm build
\`\`\`

3. Next.js generará una carpeta `out/` con archivos HTML estáticos
4. Sube todo el contenido de la carpeta `out/` a tu servidor web o hosting

**Compatible con:**
- GitHub Pages
- Netlify
- Firebase Hosting
- Cualquier servidor web (Apache, Nginx, etc.)

**Nota:** Para GitHub Pages, necesitarás agregar un archivo `.nojekyll` en la carpeta `out/` antes de subir.

### Opción 3: Servidor con Node.js

Si tienes acceso a un servidor VPS o hosting con Node.js:

1. Sube todos los archivos del proyecto al servidor
2. Instala las dependencias: `pnpm install`
3. Compila el proyecto: `pnpm build`
4. Inicia el servidor: `pnpm start`
5. Configura tu servidor (nginx/apache) para redirigir al puerto 3000

## Estructura del Proyecto

\`\`\`
proyecto-ciber-delitos/
├── app/
│   ├── layout.tsx          # Layout principal de la aplicación
│   ├── page.tsx            # Página principal con contenido educativo
│   └── globals.css         # Estilos globales
├── components/
│   └── ui/                 # Componentes de interfaz reutilizables
├── lib/
│   └── utils.ts            # Funciones utilitarias
├── public/                 # Archivos estáticos (imágenes, etc.)
├── next.config.mjs         # Configuración de Next.js (exportación estática habilitada)
├── package.json            # Configuración y dependencias del proyecto
└── README.md               # Este archivo
\`\`\`

## Características

- **Información sobre ciberdelitos**: Phishing, fraude financiero, robo de identidad, y más
- **Popups interactivos**: Información detallada al hacer clic en cada tipo de ciberdelito
- **Consejos de prevención**: Medidas prácticas para proteger tu información
- **Recursos legales**: Enlaces a la Policía Cibernética de Jalisco para denuncias
- **Diseño responsivo**: Optimizado para móviles, tablets y escritorio
- **Modo oscuro**: Interfaz adaptable a preferencias del usuario

## Tecnologías Utilizadas

- **Next.js 16** - Framework de React para aplicaciones web
- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS v4** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de interfaz accesibles y personalizables
- **Lucide React** - Iconos modernos y personalizables

## Solución de Problemas

### Error 404 al publicar

Si ves un error 404 "NOT_FOUND" al intentar publicar tu página:

- **No es un problema de archivos faltantes** (como index.html)
- Next.js no usa archivos HTML tradicionales
- **Solución:** Usa una de las opciones de publicación mencionadas arriba (Vercel recomendado)

### El comando pnpm no funciona

Si el comando `pnpm` no se reconoce:

\`\`\`bash
npm install -g pnpm
\`\`\`

Reinicia tu terminal después de la instalación.

## Autores

Este proyecto fue desarrollado por:

- Rizo Estrada Christian Gabriel
- Gonzalez Gonzalez Emilio
- Sanchez Rodriguez Angel Gael
- Zepeda Garcia Christopher Daniel

## Soporte

Si tienes problemas o preguntas sobre el proyecto, puedes:

- Revisar la documentación oficial de [Next.js](https://nextjs.org/docs)
- Consultar la documentación de [pnpm](https://pnpm.io/)
- Ver la guía de despliegue de [Vercel](https://vercel.com/docs)

## Licencia

Este proyecto fue creado con fines educativos para la comunidad estudiantil universitaria.

---

**Mantente seguro, mantente informado.**
