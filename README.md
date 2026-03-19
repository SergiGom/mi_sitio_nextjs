##  Descripción del Proyecto

Este proyecto es una plataforma web de noticias actuales desarrollada con una arquitectura moderna basada en componentes, enfocada en rendimiento, escalabilidad y experiencia de usuario.

La aplicación permite visualizar contenido dinámico organizado en secciones como blog, galería e interacción mediante formularios. Está construida utilizando el App Router de Next.js, aprovechando renderizado híbrido (SSR/CSR) para mejorar tiempos de carga y posicionamiento SEO.

---

##  Tecnologías Utilizadas

* Next.js
  Framework principal utilizado para la construcción de la aplicación, con routing basado en archivos y soporte para Server Components.

* TypeScript
  Tipado estático para mejorar la mantenibilidad y prevenir errores en el desarrollo.

* Tailwind CSS
  Framework de estilos utilitario que permite construir interfaces modernas, responsivas y consistentes.

* Azure App Service
  Plataforma utilizada para el despliegue en la nube, asegurando disponibilidad y escalabilidad.

---

##  Arquitectura del Proyecto

El proyecto sigue una estructura modular con separación clara de responsabilidades:

* /app
  Manejo de rutas, layout global y configuración principal.

* /components
  Componentes reutilizables de la interfaz:

  * Navbar y Footer (estructura base)
  * HeroSection (sección principal)
  * Gallery y GalleryImage (visualización de imágenes)
  * BlogSection y BlogCard (renderizado de noticias)
  * ContactForm (interacción con el usuario)

* /lib
  Funciones auxiliares y lógica compartida.

* /public
  Recursos estáticos como imágenes e íconos.

* /types
  Definición de tipos para asegurar consistencia en los datos.

---

##  Características

* Renderizado optimizado con Next.js (SSR + CSR)
* Diseño responsive con Tailwind CSS
* Componentes reutilizables
* Estructura escalable y mantenible
* Despliegue en la nube con Azure

---

##  Enfoque

Este proyecto está enfocado en aplicar buenas prácticas modernas de desarrollo frontend, incluyendo componentización, organización del código y uso de herramientas actuales del ecosistema JavaScript.
