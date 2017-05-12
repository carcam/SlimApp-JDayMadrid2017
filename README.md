
# JoomGap SlimApp - JDayMadrid2017

## Joomla!Day Madrid 2017 - Taller de desarrollo de Apps para Sitios Web

Aplicación móvil para el JDayMadrid2017. Taller de desarrollo de Apps para Sitios Web. 

Presentación: <https://docs.google.com/presentation/d/1jv361TRzdkRL9ZAZ-B2NzJ7G_hCVD7wwc5rbZcDpOI4/edit?usp=sharing>

Repositorio: <https://github.com/anibalsanchez/SlimApp-JDayMadrid2017>

## Resúmen

Empezamos con un sitio web, un sistema de contenido bien organizado, y ahora también necesitamos una App para Android e iOS!.

Las Apps son uno de los medios de marketing más nuevos para conectar a los clientes y fidelizar con funcionalidades móviles.

En este taller, vamos a conocer las estrategias y herramientas disponibles para crear Apps para sitios web de contenido.

Una oferta tecnológica integral debe contemplar el servicio de información por la web y con una aplicación móvil. En teoría, tiene sentido. En la práctica, no es tan obvio como combinar ambas tecnologías de forma que generen una sinergia. Idealmente, las empresas especializadas puede darse el lujo de tener tres equipos de desarrollo (Web, Android e iOS), coordinados por un equipo de marketing. Pero, en la mayoría de los casos, todos los clientes parten desde la presencia web, y necesitan tener una aplicación móvil.

Para comenzar a recorrer este camino, en el taller vamos a conocer una estrategia de desarrollo basada en PhoneGap y herramientas web para poder crear rápidamente Apps, que integren funcionalidad básicas de notificaciones Push o captura de fotografías con cámara. En el taller, presentaremos un caso basado en una red social basada en Joomla e EasySocial.

## Pasos para crear una App 

* Descargar el ZIP, o forkear este repositorio
* Configurar los 5 puntos principales del **config.xml**:

1. App Id, Name, Description and Author
2. Android - Debuggable
3. Icon and Splash
4. Plugins
5. Optional Configuration

* Configurar la landing Url en el **www/js/_constants.js**:

  .constant('LandingUrl','https://joomlaes.org/joomladays/joomladay-madrid-2017')

* Crear una cuenta en [Adobe PhoneGap Build](https://build.phonegap.com/apps)
* Crear una App nueva
    * Subir el ZIP, o integrar el repositorio
* Descargar la **App APK** para Android
* Copiar la App al móvil (por USB, o con un gestor de archivos, por ejemplo [ASUS File Manager](https://play.google.com/store/apps/details?id=com.asus.filemanager&hl=en))
* Instalar la App en el móvil, y ejecutar
* Listo!

## Preguntas Frecuentes

### En Android, ¿Cómo activo el modo de desarrollo para poder instalar la App?

    Para activarlo tendremos que ir a Ajustes y aquí irnos a “Acerca del teléfono/Información del dispositivo/cualquier otra cosa parecida”. Ahora buscamos un apartado que sea “Número de compilación” y pulsamos 7 veces en él hasta que aparezca una ventana que diga: “Ya eres desarrollador (o parecido)”. Volvemos a los ajustes y habrá aparecido un apartado más en los ajustes: Opciones de Desarrollo.

Ref: [Cómo se activan las Opciones de Desarrollo](https://elandroidelibre.elespanol.com/2016/08/mejorar-rendimiento-desde-opciones-desarrollo.html)

### Para iOS, ¿Cómo se instala la App?

Ref: [Hablemos de Certificados](https://docs.google.com/presentation/d/1jv361TRzdkRL9ZAZ-B2NzJ7G_hCVD7wwc5rbZcDpOI4/edit#slide=id.g222ff88359_0_46)



