'use client'

import { Shield, AlertTriangle, Eye, Lock, Mail, CreditCard, MessageSquare, CheckCircle2, ArrowRight, MousePointerClick, ExternalLink, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { useState } from 'react'

type CybercrimeType = {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  color: string
  detailedInfo: {
    definition: string
    examples: string[]
    howToIdentify: string[]
    prevention: string[]
  }
}

export default function HomePage() {
  const [selectedCrime, setSelectedCrime] = useState<CybercrimeType | null>(null)

  const cybercrimes: CybercrimeType[] = [
    {
      id: 'phishing',
      icon: <Mail className="h-6 w-6 text-red-600 dark:text-red-400" />,
      title: 'Phishing',
      description: 'Correos electrónicos o mensajes que parecen legítimos pero buscan robar tu información personal, contraseñas o datos bancarios haciéndose pasar por instituciones confiables.',
      color: 'red',
      detailedInfo: {
        definition: 'El phishing es una técnica de ingeniería social donde los atacantes se hacen pasar por entidades legítimas para engañar a las víctimas y obtener información confidencial como contraseñas, números de tarjetas de crédito o datos personales.',
        examples: [
          'Correos que parecen del banco solicitando actualizar datos',
          'Mensajes de "Netflix" o "Amazon" pidiendo verificar la cuenta',
          'Emails de la universidad solicitando cambiar contraseña urgentemente',
          'Mensajes de WhatsApp de "familiares" pidiendo dinero urgente'
        ],
        howToIdentify: [
          'Errores gramaticales o de ortografía en el mensaje',
          'Dirección de correo del remitente sospechosa o diferente al oficial',
          'Solicitudes urgentes de información personal o financiera',
          'Enlaces que no coinciden con el sitio web oficial',
          'Amenazas de cerrar cuenta si no actúas inmediatamente'
        ],
        prevention: [
          'Nunca hagas clic en enlaces de correos o mensajes sospechosos',
          'Verifica siempre el dominio del remitente',
          'Accede directamente a los sitios web escribiendo la URL en el navegador',
          'Activa filtros anti-phishing en tu correo electrónico',
          'Contacta directamente a la institución si tienes dudas'
        ]
      }
    },
    {
      id: 'financial-fraud',
      icon: <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: 'Fraude Financiero',
      description: 'Ofertas falsas de empleo, becas fraudulentas, o tiendas en línea falsas que buscan obtener tus datos bancarios o realizar cargos no autorizados.',
      color: 'purple',
      detailedInfo: {
        definition: 'El fraude financiero en línea incluye cualquier esquema diseñado para obtener dinero o información financiera de manera fraudulenta a través de internet, aprovechándose especialmente de estudiantes que buscan oportunidades económicas.',
        examples: [
          'Ofertas de trabajo desde casa con salarios irrealmente altos',
          'Becas o apoyos estudiantiles que requieren "cuota de inscripción"',
          'Tiendas en línea con precios muy bajos que nunca envían productos',
          'Esquemas piramidales disfrazados de oportunidades de negocio',
          'Sorteos o premios que requieren pago para reclamarlos'
        ],
        howToIdentify: [
          'Promesas de dinero fácil o ganancias garantizadas',
          'Solicitud de pago por adelantado para obtener empleo o beca',
          'Sitios web sin información de contacto o ubicación física',
          'Presión para tomar decisiones rápidas',
          'Falta de reseñas o comentarios negativos en internet'
        ],
        prevention: [
          'Investiga la empresa o institución antes de proporcionar datos',
          'Desconfía de ofertas que parecen demasiado buenas para ser verdad',
          'Usa métodos de pago seguros con protección al comprador',
          'Verifica que las becas oficiales nunca cobran por aplicar',
          'Consulta con servicios estudiantiles de tu universidad sobre oportunidades legítimas'
        ]
      }
    },
    {
      id: 'identity-theft',
      icon: <Eye className="h-6 w-6 text-orange-600 dark:text-orange-400" />,
      title: 'Robo de Identidad',
      description: 'Los delincuentes utilizan tu información personal para crear cuentas falsas, realizar compras o cometer fraudes en tu nombre.',
      color: 'orange',
      detailedInfo: {
        definition: 'El robo de identidad ocurre cuando alguien obtiene y usa tu información personal (nombre, número de estudiante, CURP, credenciales) sin tu permiso para cometer fraude o delitos.',
        examples: [
          'Apertura de cuentas bancarias o tarjetas de crédito a tu nombre',
          'Suplantación en redes sociales para estafar a tus contactos',
          'Uso de tu credencial estudiantil para obtener beneficios',
          'Presentación de trámites oficiales con tus datos',
          'Compras en línea usando tu información'
        ],
        howToIdentify: [
          'Cargos en tu cuenta que no reconoces',
          'Notificaciones de cuentas que no abriste',
          'Llamadas de cobranza por deudas que no contrataste',
          'Amigos que reciben mensajes extraños desde tus cuentas',
          'Imposibilidad de acceder a tus cuentas habituales'
        ],
        prevention: [
          'No compartas fotos de documentos oficiales en redes sociales',
          'Usa contraseñas únicas y fuertes para cada cuenta',
          'Activa alertas de movimientos en tus cuentas bancarias',
          'Revisa regularmente tus estados de cuenta',
          'Protege tu información personal y no la compartas innecesariamente',
          'Ten cuidado al conectarte en computadoras públicas'
        ]
      }
    },
    {
      id: 'social-engineering',
      icon: <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: 'Ingeniería Social',
      description: 'Técnicas de manipulación que buscan que reveles información confidencial o realices acciones que comprometan tu seguridad, a través de la confianza o el engaño.',
      color: 'green',
      detailedInfo: {
        definition: 'La ingeniería social es el arte de manipular personas para que divulguen información confidencial o realicen acciones específicas, explotando la psicología humana en lugar de vulnerabilidades técnicas.',
        examples: [
          'Llamadas de "soporte técnico" pidiendo acceso remoto a tu computadora',
          'Personas que se hacen pasar por personal universitario solicitando datos',
          'Mensajes de "compañeros" pidiendo ayuda con tareas urgentes que requieren tus credenciales',
          'Perfiles falsos en redes sociales que generan confianza para estafar',
          'Pretextos elaborados para obtener información personal'
        ],
        howToIdentify: [
          'Solicitudes inesperadas de información sensible',
          'Creación de urgencia o presión para actuar rápido',
          'Apelación a la autoridad o intimidación',
          'Ofertas de ayuda no solicitada',
          'Inconsistencias en la historia o detalles que no cuadran'
        ],
        prevention: [
          'Verifica siempre la identidad de quien solicita información',
          'No compartas contraseñas ni códigos de verificación con nadie',
          'Cuestiona solicitudes inusuales, incluso de conocidos',
          'Contacta directamente a la institución por canales oficiales',
          'Educa a tu círculo cercano sobre estas técnicas',
          'Confía en tu intuición si algo no se siente bien'
        ]
      }
    },
    {
      id: 'ransomware',
      icon: <Lock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />,
      title: 'Ransomware',
      description: 'Software malicioso que cifra tus archivos y exige un rescate para recuperarlos. Puede llegar a través de descargas sospechosas o enlaces maliciosos.',
      color: 'yellow',
      detailedInfo: {
        definition: 'El ransomware es un tipo de malware que encripta los archivos de la víctima, haciéndolos inaccesibles, y exige el pago de un rescate (generalmente en criptomonedas) para proporcionar la clave de descifrado.',
        examples: [
          'Archivos de tareas y proyectos que ya no se pueden abrir',
          'Mensaje en pantalla exigiendo pago en Bitcoin',
          'Extensiones de archivos cambiadas a códigos extraños',
          'Imposibilidad de acceder a fotos, documentos o trabajos',
          'Ventanas emergentes con cuentas regresivas para pagar'
        ],
        howToIdentify: [
          'Archivos súbitamente inaccesibles o con extensiones raras',
          'Mensajes de rescate en tu escritorio o carpetas',
          'Cambio de fondos de pantalla con instrucciones de pago',
          'Lentitud extrema del sistema',
          'Aparición de archivos README con instrucciones de pago'
        ],
        prevention: [
          'Mantén copias de respaldo de archivos importantes en la nube o disco externo',
          'No descargues archivos de fuentes no confiables',
          'Mantén tu antivirus y sistema operativo actualizados',
          'No hagas clic en enlaces de correos desconocidos',
          'Evita usar USBs de origen desconocido',
          'Deshabilita macros en documentos de Office de fuentes no confiables'
        ]
      }
    },
    {
      id: 'fake-websites',
      icon: <AlertTriangle className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
      title: 'Sitios Web Falsos',
      description: 'Páginas que imitan sitios legítimos de bancos, universidades o tiendas en línea para robar credenciales y datos personales de usuarios desprevenidos.',
      color: 'pink',
      detailedInfo: {
        definition: 'Los sitios web falsos son páginas fraudulentas diseñadas para parecer idénticas a sitios legítimos con el objetivo de robar credenciales de acceso, información personal o datos financieros de usuarios desprevenidos.',
        examples: [
          'Portales universitarios falsos que solicitan usuario y contraseña',
          'Páginas de banca en línea con URLs similares pero incorrectas',
          'Tiendas en línea falsas con productos a precios muy bajos',
          'Formularios de becas o apoyos gubernamentales falsos',
          'Copias de plataformas educativas como Classroom o Moodle'
        ],
        howToIdentify: [
          'URL con errores ortográficos o dominios sospechosos (.tk, .ml)',
          'Ausencia del candado de seguridad (https) en el navegador',
          'Diseño ligeramente diferente al sitio original',
          'Solicitud de información inusual o excesiva',
          'Errores gramaticales o de traducción en el contenido',
          'Falta de información de contacto legítima'
        ],
        prevention: [
          'Escribe manualmente las URLs de sitios importantes en lugar de hacer clic en enlaces',
          'Verifica siempre que la URL comience con https:// y tenga el candado',
          'Usa marcadores (favoritos) para sitios que visitas frecuentemente',
          'Verifica el certificado de seguridad del sitio haciendo clic en el candado',
          'Desconfía de enlaces en correos, mejor accede directamente al sitio',
          'Instala extensiones de navegador que detecten sitios maliciosos'
        ]
      }
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/20 dark:to-background border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Shield className="h-4 w-4" />
                  Seguridad Digital Universitaria
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                  Protégete de los <span className="text-blue-600 dark:text-blue-400">Ciberdelitos</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                  Aprende a identificar y prevenir fraudes en línea, phishing y otras amenazas digitales. 
                  Tu seguridad comienza con la información correcta.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="#tipos-ciberdelitos">
                      Comenzar a Aprender
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/design-mode/ciberseguridad.jpg"
                  alt="Estudiantes universitarios protegidos contra ciberdelitos"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="container mx-auto px-4 py-12">
        <Alert className="max-w-4xl mx-auto border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
          <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          <AlertDescription className="text-orange-800 dark:text-orange-200">
            <strong>Importante:</strong> Los ciberdelincuentes están en constante evolución. Mantente informado y actualiza tus conocimientos regularmente.
          </AlertDescription>
        </Alert>
      </section>

      {/* Tipos de Ciberdelitos */}
      <section id="tipos-ciberdelitos" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Ciberdelitos Comunes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce las amenazas más frecuentes que enfrentan los estudiantes universitarios. Haz clic en cada tarjeta para ver más información.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cybercrimes.map((crime) => (
              <Card 
                key={crime.id}
                className="border-2 hover:border-blue-300 dark:hover:border-blue-700 transition-colors cursor-pointer hover:shadow-lg"
                onClick={() => setSelectedCrime(crime)}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center mb-4">
                    {crime.icon}
                  </div>
                  <CardTitle>{crime.title}</CardTitle>
                  <CardDescription>
                    {crime.title === 'Phishing' && 'Correos y mensajes fraudulentos'}
                    {crime.title === 'Fraude Financiero' && 'Estafas de pago en línea'}
                    {crime.title === 'Robo de Identidad' && 'Suplantación de identidad'}
                    {crime.title === 'Ingeniería Social' && 'Manipulación psicológica'}
                    {crime.title === 'Ransomware' && 'Secuestro de datos'}
                    {crime.title === 'Sitios Web Falsos' && 'Páginas web fraudulentas'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {crime.description}
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Haz clic para ver más detalles →
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCrime} onOpenChange={() => setSelectedCrime(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedCrime && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-2xl">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
                    {selectedCrime.icon}
                  </div>
                  {selectedCrime.title}
                </DialogTitle>
                <DialogDescription className="text-base pt-2">
                  {selectedCrime.detailedInfo.definition}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Ejemplos Comunes
                  </h4>
                  <ul className="space-y-2">
                    {selectedCrime.detailedInfo.examples.map((example, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-blue-600" />
                    Cómo Identificarlo
                  </h4>
                  <ul className="space-y-2">
                    {selectedCrime.detailedInfo.howToIdentify.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Cómo Prevenirlo
                  </h4>
                  <ul className="space-y-2">
                    {selectedCrime.detailedInfo.prevention.map((item, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedCrime(null)}
                >
                  Cerrar
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Consejos de Prevención */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <Image
                  src="/images/design-mode/imagen_2025-11-18_000451775.png"
                  alt="Estudiantes aprendiendo sobre seguridad digital"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Consejos de Prevención</h2>
                <p className="text-lg text-muted-foreground">
                  Medidas prácticas para proteger tu información y navegar de forma segura
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Verifica los Remitentes</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Revisa cuidadosamente la dirección de correo electrónico del remitente. 
                      Los ciberdelincuentes suelen usar direcciones similares a las oficiales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Usa Contraseñas Fuertes</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Crea contraseñas únicas con al menos 12 caracteres, combinando mayúsculas, 
                      minúsculas, números y símbolos. Usa un gestor de contraseñas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Activa la Autenticación de Dos Factores</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Habilita 2FA en todas tus cuentas importantes. Esta capa adicional de 
                      seguridad dificulta mucho el acceso no autorizado.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">No Hagas Clic en Enlaces Sospechosos</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Pasa el cursor sobre los enlaces antes de hacer clic para ver la URL real. 
                      Si algo parece sospechoso, no hagas clic y verifica directamente con la fuente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Mantén tu Software Actualizado</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Actualiza regularmente tu sistema operativo, navegador y aplicaciones. 
                      Las actualizaciones incluyen parches de seguridad importantes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Verifica URLs de Sitios Web</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Asegúrate de que la URL comience con "https://" y tenga un candado. 
                      Revisa que el dominio sea correcto, sin errores ortográficos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Cuidado con Redes WiFi Públicas</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Evita realizar transacciones bancarias o ingresar información sensible en 
                      redes WiFi públicas. Usa una VPN si necesitas conexión segura.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Desconfía de Ofertas "Demasiado Buenas"</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Si una oferta parece demasiado buena para ser verdad, probablemente sea una 
                      estafa. Investiga antes de proporcionar información o dinero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-blue-600 dark:bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tu Seguridad es Nuestra Prioridad
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed">
              Recuerda: la confianza excesiva en línea puede ponerte en riesgo. Siempre verifica la autenticidad 
              de personas y sitios web antes de compartir información personal. Si algo genera dudas, 
              es mejor ser precavido y consultar con fuentes oficiales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Detectaste un Ciberdelito?</h2>
              <p className="text-lg text-muted-foreground">
                Si has sido víctima o detectaste actividad sospechosa, es importante denunciar
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Pasos a Seguir
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Documenta el Incidente</h4>
                      <p className="text-sm text-muted-foreground">Guarda capturas de pantalla, correos o mensajes sospechosos</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">No Interactúes Más</h4>
                      <p className="text-sm text-muted-foreground">Deja de comunicarte con los sospechosos y no realices pagos</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Cambia tus Contraseñas</h4>
                      <p className="text-sm text-muted-foreground">Actualiza las contraseñas de cuentas comprometidas inmediatamente</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Presenta tu Denuncia</h4>
                      <p className="text-sm text-muted-foreground">Acude a las autoridades competentes con toda la evidencia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
                    Contacto Oficial
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Policía Cibernética Jalisco</h4>
                    <p className="text-sm text-muted-foreground mb-3">Unidad especializada en delitos informáticos</p>
                    <Button variant="outline" className="w-full gap-2" asChild>
                      <a href="https://fiscalia.jalisco.gob.mx/policia-cibernetica" target="_blank" rel="noopener noreferrer">
                        
                        <ExternalLink className="h-4 w-4" />
                        Policía Cibernética Jalisco
                      </a>
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-sm mb-2">Información Importante</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>La denuncia es gratuita y confidencial</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Lleva toda la evidencia digital que tengas</span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>No elimines conversaciones o capturas de pantalla</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-3">Autores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <p>Rizo Estrada Christian Gabriel</p>
                <p>Gonzalez Gonzalez Emilio</p>
                <p>Sanchez Rodriguez Angel Gael</p>
                <p>Zepeda Garcia Christopher Daniel</p>
              </div>
            </div>
            {/* Fin de la sección de autores */}
            
            <div className="text-center text-sm text-muted-foreground border-t pt-6">
              <p>© 2025 Proyecto Ciberdelitos. Creado para la comunidad estudiantil universitaria.</p>
              <p className="mt-2">Mantente seguro, mantente informado.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
