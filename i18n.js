/* ================================================================
   i18n.js – Internationalization (EN / ES)
   Alejandro Estrada Hernandez – 2025
================================================================ */

const translations = {
  en: {
    // Navigation
    nav_about:       'About',
    nav_skills:      'Skills',
    nav_experience:  'Experience',
    nav_projects:    'Projects',
    nav_contact:     'Contact',
    nav_download_cv: 'Download CV',

    // Hero
    hero_greeting:  'Hi, I\'m Alejandro 👋',
    hero_desc:      'I\'m a Full Stack Developer (Front-End focused) with over 8 years of experience delivering web and mobile projects. I specialize in designing exceptional user interfaces, developing robust business logic, and maintaining production systems. I love bringing ideas to life through clean, readable, and highly performant code.',
    hero_available: 'Available for new opportunities',

    // About
    about_tag:            'About me',
    about_heading:        'Curious about me? Here you have it:',
    about_p1:             'I\'m a passionate Full Stack Developer specialized in Front-End development with a strong focus on creating exceptional digital experiences. I care deeply about user experience, pixel-perfect design, and writing clean, readable, highly performant code.',
    about_p2:             'My journey as a developer began back in 2013, and since then I\'ve continued to grow and evolve, taking on new challenges and learning the latest technologies along the way. Over 6+ years working professionally, I\'ve delivered 15+ web and mobile projects across industries — from healthcare dashboards and e-commerce platforms to 3D visualization tools and cross-platform mobile apps.',
    about_p3:             'I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to production deployment. I thrive in remote, English-speaking teams and I\'m comfortable owning features from design handoff to ship.',
    about_p4:             'When I\'m not in full-on developer mode, you can find me exploring new tech, tinkering with local LLM deployments, or contributing to internal tooling projects.',
    about_p5:             'Finally, some quick bits about me:',
    about_check1:         'BSc in Computer Engineering',
    about_check2:         'Full Stack Developer (Front-End Focused)',
    about_check3:         'Avid learner & problem solver',
    about_check4:         'Remote work enthusiast',
    about_languages_label:'Languages:',
    about_lang_es:        'Spanish',
    about_lang_es_level:  'Native',
    about_lang_en:        'English',
    about_lang_en_level:  'Working proficiency',
    about_lang_en_note:   '(certification pending)',
    about_cta:            'I\'m available for freelance or full-time opportunities — feel free to reach out and say hello!',

    // Skills
    skills_tag:  'Skills',
    skills_desc: 'Technologies and tools I\'ve worked with across projects — and can quickly pick up when the job calls for it.',

    // Experience
    exp_tag:  'Experience',
    exp_desc: 'Here is a quick summary of my most recent experiences:',

    // Job 1 – Roomie IT
    exp1_title:    'Front-End Developer',
    exp1_subtitle: 'Roomie IT · Remote',
    exp1_date:     'Oct 2025 – Present',
    exp1_b1:       '▹ Construction of components and project structure using ReactJS-Vite as a base.',
    exp1_b2:       '▹ State management with Redux and UI styling with Tailwind CSS.',
    exp1_b3:       '▹ Building scalable and reusable component libraries from design specifications.',

    // Job 2 – Shockoe
    exp2_title:    'Full Stack Software Engineer II',
    exp2_subtitle: 'Shockoe | Mobile by Design · Remote from Mexico',
    exp2_b1:       '▹ Worked on 15+ web and mobile projects for clients and internal tools.',
    exp2_b2:       '▹ Maintained legacy systems (Smartbox), built dashboards/admin portals (ThroneLabs, UNOS).',
    exp2_b3:       '▹ Developed CMS/e-commerce platforms (USQBC, Foxwoods, Pet Paradise).',
    exp2_b4:       '▹ Delivered 3D visualization tools (Breadvan, UNOS) and cross-platform apps (Hy-Vee, Shopmonkey).',

    // Job 3 – Creatools
    exp3_title:    'Jr. Full Stack Developer (Contract)',
    exp3_subtitle: 'Creatools · Colima, Mexico',
    exp3_b1:       '▹ Contributed to the development of a school administration system.',

    // Job 4 – State Government
    exp4_title:    'Jr. Full Stack Developer (Intern)',
    exp4_subtitle: 'State Government Administrative Complex · Colima, Mexico',
    exp4_b1:       '▹ Supported development and maintenance of institutional systems: SIMAVE, SICOP, SIGECOL, SICEL.',

    // Job 5 – CantaloopMX
    exp5_title:    'Front-End Developer',
    exp5_subtitle: 'CantaloopMX · Colima, Mexico',
    exp5_b1:       '▹ Developed platforms: e-Transversalidad, Mexico towards equality, Colima en colores.',
    exp5_b2:       '▹ Built interactive UIs with ReactJS and managed state with Redux.',

    // Job 6 – Surtidora
    exp6_title:    'Master Data Admin / In-House Developer',
    exp6_subtitle: 'Surtidora de Ferretería y Materiales · Tecoman, Colima',
    exp6_b1:       '▹ Built internal tools in VB.NET/ASP.NET integrated with SAP Business One.',
    exp6_b2:       '▹ Created reports, dashboards, managed SQL databases, and supported end users.',

    // Projects
    proj_tag:  'Projects',
    proj_desc: 'A selection of projects I have had the opportunity to work on throughout my career:',

    proj1_desc:  'As part of a mid-sized cross-functional team at RoomieIT, I\'m currently contributing to SIGAPI, an administrative process modeling tool based on BPMN methodology. I work on the interactive diagram editor and viewer using React-Vite and Redux, helping institutions document, visualize, and analyze their business processes.',
    proj2_desc:  'I was part of a small team at Shockoe working on the front-end rebuild of Foxwoods Resort Casino\'s public website — one of the largest resort casinos in the world. I contributed to developing Twig templates, custom Drupal modules, and Tailwind-powered components for a consistent, high-performance experience for thousands of daily visitors.',
    proj3_desc:  'As part of a small team at Shockoe, I helped build this vehicle intake wizard for automotive shops. I worked on the multi-step form flow with Next.js and contributed to the back-end data layer using Prisma and CockroachDB — collaborating closely with the team to deliver a production-ready, scalable solution for shop owners.',
    proj4_desc:  'I was part of a small mobile development team at Shockoe that built this grocery shopping app with scheduled delivery for Hy-Vee, a major Midwest supermarket chain. I contributed to building key screens in React Native and worked on consuming the GraphQL product catalog from the front-end, as well as features related to real-time cart and order scheduling.',
    proj5_desc:  'I was the sole developer responsible for both the front-end and back-end of this innovative MVP prototype for UNOS, bringing 3D organ visualization directly into the browser. Using Three.js within an Angular app, I built the 3D viewer and the back-end integration layer — while a separate developer handled the native iOS organ scanner that fed data into the system.',
    proj6_desc:  'As part of a small team at Shockoe, I worked on this dynamic form portal built for UNOS, enabling transplant programs to submit detailed program data through complex, multi-step form flows. I contributed to implementing conditional field logic, form state management, and validation for life-critical transplant program assessments.',
    proj7_desc:  'As part of a small team at Shockoe, I contributed to building this mission-critical dashboard used by UNOS (United Network for Organ Sharing) to track organ transplant logistics in real time. I worked on data visualization components and real-time status interfaces that healthcare professionals rely on to coordinate organ allocation across the country.',
    proj8_desc:  'I provided support and maintenance for the WordPress-based admin portal of Daycon, a construction company. My work focused on resolving bugs, addressing legacy JavaScript conflicts, and delivering small feature updates — keeping the platform stable and functional.',
    proj9_desc:  'As part of a small team at Shockoe, I helped integrate Strapi as a headless CMS for Activation Capital, a business development organization. I worked on the ReactJS front-end connected to Strapi\'s REST API, enabling the marketing team to manage page content and announcements independently without developer involvement.',
    proj10_desc: 'I participated in both the web and mobile development efforts for this reservation platform for Pet Paradise, a national pet care services chain. As part of the team, I contributed to features across both platforms — including booking flows and user portal components — using React Native for mobile and ReactJS for the web version.',
    proj11_desc: 'As part of a small team at Shockoe, I contributed to the front-end of this SaaS platform for 3D object management. I worked on the component structure, helped implement the interactive Three.js viewer with scene controls, and contributed to the state management layer — enabling users to upload, transform, and inspect 3D models in the browser.',
    proj12_desc: 'I acted as the technical lead for a Spanish-speaking development sub-team, coordinating efforts to port this beauty shopping app from iOS to Android using React Native. Beyond leading the team, I personally contributed to solving key platform-specific challenges — resolving rendering and navigation issues to achieve a successful Play Store release.',
    proj13_desc: 'As part of a small team at Shockoe, I contributed to both the admin web dashboard and the React Native companion app for ThroneLabs, a facility management platform for real-time restroom occupancy tracking. I worked on role-based access views, live status indicators, and data sync between the mobile and web clients.',
    proj14_desc: 'I provided updates and front-end support for MiAlmacenero, a social platform that connects consumers with local neighborhood stores. My involvement included improvements to the store locator, contact forms, and general front-end maintenance — helping keep the site functional and up to date for its users.',
    proj15_desc: 'I was the sole developer responsible for building this single-page application for PineCove summer camp, enabling parents to access their children\'s photos and videos securely. I integrated AWS S3 for scalable media delivery and built a clean, intuitive UI designed to be frictionless for non-technical users.',
    proj16_desc: 'I served as the technical lead for a Spanish-speaking development sub-team on this WordPress-based informational portal for the US-Qatar Business Council. In addition to coordinating the team\'s work, I personally contributed to building custom themes and plugins, ensuring the CMS was accessible for non-technical content editors.',
    proj17_desc: 'I was the sole developer responsible for maintaining and evolving this legacy platform over several years at Shockoe. I performed a PHP 8 migration, refactored critical modules, and resolved longstanding bugs — keeping a 10-year-old production system stable and functional. I also continued supporting the platform for 6 months after my contract ended, until the project was eventually deprecated.',
    proj18_desc: 'I worked on the front-end of Misati\'s corporate website as part of a small team, contributing to the rebuild of a dated web presence into a clean, brand-aligned experience. I built Angular components backed by an SQL data layer and used SASS to deliver a consistent visual identity across all pages.',

    // Contact
    contact_tag:    'Get in touch',
    contact_desc:   'What\'s next? Feel free to reach out to me if you\'re looking for a developer, have a query, or simply want to connect.',
    contact_social: 'You may also find me on these platforms!',

    // Footer
    footer_design_by: 'Design by',
    footer_built_by:  'Built by',

    // Buttons
    btn_view_website: 'View Website',
    btn_play_store:   'Play Store',
  },

  es: {
    // Navegación
    nav_about:       'Acerca',
    nav_skills:      'Habilidades',
    nav_experience:  'Experiencia',
    nav_projects:    'Proyectos',
    nav_contact:     'Contacto',
    nav_download_cv: 'Descargar CV',

    // Hero
    hero_greeting:  'Hola, soy Alejandro 👋',
    hero_desc:      'Soy Desarrollador Full Stack (con enfoque en Front-End) con más de 8 años de experiencia entregando proyectos web y móviles. Me especializo en diseñar interfaces de usuario excepcionales, desarrollar lógica de negocio robusta y mantener sistemas en producción. Disfruto dar vida a las ideas a través de código limpio, legible y de alto rendimiento.',
    hero_available: 'Disponible para nuevas oportunidades',

    // Acerca de mí
    about_tag:            'Sobre mí',
    about_heading:        '¿Quieres saber más sobre mí? Aquí te cuento:',
    about_p1:             'Soy un Desarrollador Full Stack apasionado, especializado en Front-End, con un fuerte enfoque en crear experiencias digitales excepcionales. Me importa profundamente la experiencia del usuario, los detalles del diseño y escribir código limpio, legible y de alto rendimiento.',
    about_p2:             'Mi trayectoria como desarrollador comenzó en 2013, y desde entonces no he parado de crecer y evolucionar, enfrentando nuevos retos y aprendiendo las últimas tecnologías. Con más de 6 años de experiencia profesional, he entregado más de 15 proyectos web y móviles en distintos sectores — desde dashboards de salud y plataformas de e-commerce hasta herramientas de visualización 3D y apps móviles multiplataforma.',
    about_p3:             'Tengo una mentalidad muy progresiva y disfruto trabajar en productos de principio a fin, desde la ideación hasta el despliegue en producción. Me desenvuelvo bien en equipos remotos de habla inglesa y me siento cómodo siendo responsable de funcionalidades desde el handoff de diseño hasta el lanzamiento.',
    about_p4:             'Cuando no estoy en modo desarrollador, me encuentro explorando nuevas tecnologías, experimentando con despliegues de LLMs locales o contribuyendo a proyectos de herramientas internas.',
    about_p5:             'Algunos datos rápidos sobre mí:',
    about_check1:         'Ing. en Sistemas Computacionales',
    about_check2:         'Desarrollador Full Stack (Enfoque en Front-End)',
    about_check3:         'Aprendiz constante y solucionador de problemas',
    about_check4:         'Entusiasta del trabajo remoto',
    about_languages_label:'Idiomas:',
    about_lang_es:        'Español',
    about_lang_es_level:  'Nativo',
    about_lang_en:        'Inglés',
    about_lang_en_level:  'Comunicación técnica fluida',
    about_lang_en_note:   '(certificación en proceso)',
    about_cta:            'Estoy disponible para proyectos freelance o tiempo completo — ¡no dudes en contactarme!',

    // Habilidades
    skills_tag:  'Habilidades',
    skills_desc: 'Tecnologías y herramientas con las que he trabajado en distintos proyectos — y que puedo retomar rápidamente cuando el trabajo lo requiere.',

    // Experiencia
    exp_tag:  'Experiencia',
    exp_desc: 'Un resumen de mis experiencias más recientes:',

    // Trabajo 1 – Roomie IT
    exp1_title:    'Desarrollador Front-End',
    exp1_subtitle: 'Roomie IT · Remoto',
    exp1_date:     'Oct 2025 – Presente',
    exp1_b1:       '▹ Construcción de componentes y estructura del proyecto usando ReactJS-Vite como base.',
    exp1_b2:       '▹ Gestión del estado con Redux y estilos de UI con Tailwind CSS.',
    exp1_b3:       '▹ Construcción de librerías de componentes escalables y reutilizables a partir de especificaciones de diseño.',

    // Trabajo 2 – Shockoe
    exp2_title:    'Ingeniero de Software Full Stack II',
    exp2_subtitle: 'Shockoe | Mobile by Design · Remoto desde México',
    exp2_b1:       '▹ Trabajé en más de 15 proyectos web y móviles para clientes y herramientas internas.',
    exp2_b2:       '▹ Mantuve sistemas legados (Smartbox) y construí dashboards/portales admin (ThroneLabs, UNOS).',
    exp2_b3:       '▹ Desarrollé plataformas CMS/e-commerce (USQBC, Foxwoods, Pet Paradise).',
    exp2_b4:       '▹ Entregué herramientas de visualización 3D (Breadvan, UNOS) y apps multiplataforma (Hy-Vee, Shopmonkey).',

    // Trabajo 3 – Creatools
    exp3_title:    'Desarrollador Full Stack Jr. (Contrato)',
    exp3_subtitle: 'Creatools · Colima, México',
    exp3_b1:       '▹ Contribuí al desarrollo de un sistema de administración escolar.',

    // Trabajo 4 – Gobierno del Estado
    exp4_title:    'Desarrollador Full Stack Jr. (Pasante)',
    exp4_subtitle: 'Complejo Administrativo del Gobierno del Estado · Colima, México',
    exp4_b1:       '▹ Apoyé el desarrollo y mantenimiento de sistemas institucionales: SIMAVE, SICOP, SIGECOL, SICEL.',

    // Trabajo 5 – CantaloopMX
    exp5_title:    'Desarrollador Front-End',
    exp5_subtitle: 'CantaloopMX · Colima, México',
    exp5_b1:       '▹ Desarrollé plataformas: e-Transversalidad, México hacia la igualdad, Colima en colores.',
    exp5_b2:       '▹ Construí interfaces interactivas con ReactJS y gestioné el estado con Redux.',

    // Trabajo 6 – Surtidora
    exp6_title:    'Administrador de Datos Maestros / Desarrollador Interno',
    exp6_subtitle: 'Surtidora de Ferretería y Materiales · Tecomán, Colima',
    exp6_b1:       '▹ Desarrollé herramientas internas en VB.NET/ASP.NET integradas con SAP Business One.',
    exp6_b2:       '▹ Generé reportes, dashboards, administré bases de datos SQL y di soporte a usuarios finales.',

    // Proyectos
    proj_tag:  'Proyectos',
    proj_desc: 'Una selección de proyectos en los que tuve la oportunidad de trabajar a lo largo de mi carrera:',

    proj1_desc:  'Como parte de un equipo multidisciplinario en RoomieIT, actualmente contribuyo a SIGAPI, una herramienta de modelado de procesos administrativos basada en metodología BPMN. Trabajo en el editor y visor de diagramas interactivos con React-Vite y Redux, ayudando a instituciones a documentar, visualizar y analizar sus procesos de negocio.',
    proj2_desc:  'Formé parte de un equipo pequeño en Shockoe trabajando en la reconstrucción del front-end del sitio web de Foxwoods Resort Casino — uno de los centros turísticos con casino más grandes del mundo. Contribuí al desarrollo de templates Twig, módulos personalizados de Drupal y componentes con Tailwind para una experiencia consistente y de alto rendimiento para miles de visitantes diarios.',
    proj3_desc:  'Como parte de un equipo pequeño en Shockoe, ayudé a construir este asistente de recepción de vehículos para talleres automotrices. Trabajé en el flujo de formulario multi-paso con Next.js y contribuí a la capa de datos del back-end usando Prisma y CockroachDB — colaborando de cerca con el equipo para entregar una solución escalable y lista para producción.',
    proj4_desc:  'Fui parte de un equipo pequeño de desarrollo móvil en Shockoe que construyó esta app de supermercado con entrega programada para Hy-Vee, una importante cadena de supermercados del Medio Oeste de EE. UU. Contribuí a construir pantallas clave en React Native y trabajé en el consumo del catálogo de productos GraphQL desde el front-end, así como en funciones de carrito en tiempo real y programación de pedidos.',
    proj5_desc:  'Fui el único desarrollador responsable tanto del front-end como del back-end de este innovador prototipo MVP para UNOS, llevando la visualización 3D de órganos directamente al navegador. Usando Three.js dentro de una app Angular, construí el visor 3D y la capa de integración con el back-end — mientras otro desarrollador se encargó del escáner de órganos nativo para iOS.',
    proj6_desc:  'Como parte de un equipo pequeño en Shockoe, trabajé en este portal de formularios dinámicos para UNOS, que permite a los programas de trasplante enviar datos detallados a través de flujos de formularios complejos y de múltiples pasos. Contribuí a implementar lógica de campos condicionales, gestión del estado del formulario y validación para evaluaciones críticas de programas de trasplante.',
    proj7_desc:  'Como parte de un equipo pequeño en Shockoe, contribuí a la construcción de este dashboard crítico utilizado por UNOS para rastrear la logística de trasplantes de órganos en tiempo real. Trabajé en componentes de visualización de datos e interfaces de estado en tiempo real que los profesionales de la salud usan para coordinar la asignación de órganos en todo el país.',
    proj8_desc:  'Brindé soporte y mantenimiento para el portal de administración basado en WordPress de Daycon, una empresa constructora. Mi trabajo se enfocó en resolver errores, atender conflictos de JavaScript legado y entregar pequeñas actualizaciones — manteniendo la plataforma estable y funcional.',
    proj9_desc:  'Como parte de un equipo pequeño en Shockoe, ayudé a integrar Strapi como CMS headless para Activation Capital, una organización de desarrollo empresarial. Trabajé en el front-end con ReactJS conectado a la REST API de Strapi, permitiendo al equipo de marketing gestionar el contenido de las páginas de forma independiente.',
    proj10_desc: 'Participé tanto en el desarrollo web como móvil de esta plataforma de reservas para Pet Paradise, una cadena nacional de servicios para mascotas. Como parte del equipo, contribuí a funcionalidades en ambas plataformas — incluyendo flujos de reserva y componentes del portal de usuario — usando React Native para móvil y ReactJS para la versión web.',
    proj11_desc: 'Como parte de un equipo pequeño en Shockoe, contribuí al front-end de esta plataforma SaaS para gestión de objetos 3D. Trabajé en la estructura de componentes, ayudé a implementar el visor interactivo de Three.js con controles de escena y contribuí a la capa de gestión de estado — permitiendo a los usuarios cargar, transformar e inspeccionar modelos 3D en el navegador.',
    proj12_desc: 'Actué como líder técnico de un subequipo de desarrollo de habla hispana, coordinando los esfuerzos para portar esta app de compras de belleza de iOS a Android usando React Native. Además de liderar el equipo, contribuí personalmente a resolver retos específicos de cada plataforma — solucionando problemas de renderizado y navegación para lograr un lanzamiento exitoso en Play Store.',
    proj13_desc: 'Como parte de un equipo pequeño en Shockoe, contribuí tanto al dashboard web de administración como a la app de React Native para ThroneLabs, una plataforma de gestión de instalaciones para seguimiento de ocupación de baños en tiempo real. Trabajé en vistas de acceso por roles, indicadores de estado en vivo y sincronización de datos entre los clientes móvil y web.',
    proj14_desc: 'Brindé actualizaciones y soporte de front-end para MiAlmacenero, una plataforma social que conecta a los consumidores con tiendas de vecindario. Mi participación incluyó mejoras al localizador de tiendas, formularios de contacto y mantenimiento general del front-end — ayudando a mantener el sitio funcional y actualizado.',
    proj15_desc: 'Fui el único desarrollador responsable de construir esta aplicación de página única para el campamento de verano PineCove, permitiendo a los padres acceder de forma segura a las fotos y videos de sus hijos. Integré AWS S3 para entrega de medios escalable y construí una interfaz limpia e intuitiva diseñada para ser sencilla para usuarios no técnicos.',
    proj16_desc: 'Fui líder técnico de un subequipo de desarrollo de habla hispana en este portal informativo basado en WordPress para el US-Qatar Business Council. Además de coordinar el trabajo del equipo, contribuí personalmente a la construcción de temas y plugins personalizados, asegurando que el CMS fuera accesible para editores de contenido no técnicos.',
    proj17_desc: 'Fui el único desarrollador responsable del mantenimiento y evolución de esta plataforma legada durante varios años en Shockoe. Realicé una migración a PHP 8, refactoricé módulos críticos y resolví errores de larga data — manteniendo estable y funcional un sistema de producción de 10 años. También continué dando soporte durante 6 meses después de que finalizó mi contrato, hasta que el proyecto fue eventualmente depreciado.',
    proj18_desc: 'Trabajé en el front-end del sitio web corporativo de Misati como parte de un equipo pequeño, contribuyendo a la reconstrucción de una presencia web desactualizada hacia una experiencia limpia y alineada con la marca. Construí componentes Angular respaldados por una capa de datos SQL y usé SASS para lograr una identidad visual consistente en todas las páginas.',

    // Contacto
    contact_tag:    'Contacto',
    contact_desc:   '¿Qué sigue? No dudes en escribirme si buscas un desarrollador, tienes alguna pregunta o simplemente quieres conectar.',
    contact_social: '¡También puedes encontrarme en estas plataformas!',

    // Footer
    footer_design_by: 'Diseño por',
    footer_built_by:  'Desarrollado por',

    // Botones
    btn_view_website: 'Ver sitio web',
    btn_play_store:   'Play Store',
  },
};

// Script is placed at the end of <body>, so DOM is already ready — no DOMContentLoaded needed.
(function () {
  const STORAGE_KEY      = 'ae_lang';
  const langToggle       = document.getElementById('langToggle');
  const langToggleMobile = document.getElementById('langToggleMobile');

  function getButtonLabel(lang) {
    return lang === 'en' ? '🇲🇽 ES' : '🇺🇸 EN';
  }

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key  = el.getAttribute('data-i18n');
      var text = translations[lang] && translations[lang][key];
      if (text !== undefined) el.textContent = text;
    });

    document.documentElement.lang = lang;

    var label = getButtonLabel(lang);
    if (langToggle)       langToggle.textContent       = label;
    if (langToggleMobile) langToggleMobile.textContent = label;
  }

  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'language_switch', language: lang });
    }
  }

  function toggleLanguage() {
    var current = localStorage.getItem(STORAGE_KEY) || 'en';
    setLanguage(current === 'en' ? 'es' : 'en');
  }

  if (langToggle)       langToggle.addEventListener('click', toggleLanguage);
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLanguage);

  // Apply saved preference on load (default: English)
  var savedLang = localStorage.getItem(STORAGE_KEY) || 'en';
  applyTranslations(savedLang);
}());
