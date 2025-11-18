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
├── package.json            # Configuración y dependencias del proyecto
└── README.md               # Este archivo
\`\`\`

## Características

- **Información sobre ciberdelitos**: Phishing, fraude financiero, robo de identidad, y más
- **Consejos de prevención**: Medidas prácticas para proteger tu información
- **Recursos de ayuda**: Enlaces a autoridades y pasos a seguir si eres víctima
- **Diseño responsivo**: Optimizado para móviles, tablets y escritorio
- **Modo oscuro**: Interfaz adaptable a preferencias del usuario

## Tecnologías Utilizadas

- **Next.js 16** - Framework de React para aplicaciones web
- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de interfaz accesibles y personalizables
- **Lucide React** - Iconos modernos y personalizables

## Soporte

Si tienes problemas o preguntas sobre el proyecto, puedes:

- Revisar la documentación oficial de [Next.js](https://nextjs.org/docs)
- Consultar la documentación de [pnpm](https://pnpm.io/)

## Licencia

Este proyecto fue creado con fines educativos para la comunidad estudiantil universitaria.

---

**Mantente seguro, mantente informado. 🛡️**
