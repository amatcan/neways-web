/* =========================================
   Neways — Interactive Behaviours + i18n
   ========================================= */

'use strict';

/* =========================================
   Translations
   ========================================= */
const translations = {
  es: {
    'page.title': 'Neways | Tecnología Reimaginada',
    'meta.description': 'Neways — Construyendo la tecnología del mañana hoy. Software empresarial, infraestructura en la nube y soluciones impulsadas por IA.',

    // Nav
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.work': 'Proyectos',
    'nav.team': 'Equipo',
    'nav.contact': 'Contáctanos',

    // Hero
    'hero.eyebrow': 'Tecnología de próxima generación',
    'hero.title': 'Construyendo el<br><span class="gradient-text">Futuro Tecnológico</span>',
    'hero.subtitle': 'Diseñamos, construimos y escalamos productos digitales que transforman cómo operan los negocios. Desde infraestructura en la nube hasta soluciones con IA — lo hacemos posible.',
    'hero.cta1': 'Explorar Servicios',
    'hero.cta2': 'Ver Nuestro Trabajo',
    'hero.stat1': 'Proyectos Entregados',
    'hero.stat2': 'Satisfacción del Cliente',
    'hero.stat3': 'Ingenieros Expertos',

    // Services
    'services.eyebrow': 'Lo que hacemos',
    'services.title': 'Servicios Diseñados para Escalar',
    'services.subtitle': 'Servicios tecnológicos de extremo a extremo que aceleran el crecimiento y reducen la complejidad.',
    'svc1.title': 'Desarrollo de Software',
    'svc1.text': 'Aplicaciones web y móviles personalizadas creadas con frameworks modernos. Arquitecturas escalables diseñadas para crecer con tu negocio.',
    'svc1.li1': 'React / Next.js / Node.js',
    'svc1.li2': 'Móvil (iOS & Android)',
    'svc1.li3': 'Diseño e integración de APIs',
    'svc2.title': 'Infraestructura en la Nube',
    'svc2.text': 'Arquitecturas en la nube resilientes y eficientes en AWS, GCP y Azure. Pipelines de DevOps que entregan más rápido y fallan menos.',
    'svc2.li1': 'Migración y arquitectura en la nube',
    'svc2.li2': 'Kubernetes y orquestación de contenedores',
    'svc2.li3': 'Automatización CI/CD y DevOps',
    'svc3.title': 'IA y Soluciones de Datos',
    'svc3.text': 'Pipelines de machine learning, analítica predictiva e integración de IA que convierten datos crudos en ventaja estratégica.',
    'svc3.li1': 'Desarrollo de modelos ML',
    'svc3.li2': 'Ingeniería de datos y pipelines',
    'svc3.li3': 'Integración y ajuste fino de LLMs',
    'svc4.title': 'Ciberseguridad',
    'svc4.text': 'Auditorías de seguridad proactivas, pruebas de penetración y marcos de cumplimiento para proteger tus activos más críticos.',
    'svc4.li1': 'Auditorías de seguridad y pen testing',
    'svc4.li2': 'Preparación SOC 2 / ISO 27001',
    'svc4.li3': 'Planificación de respuesta a incidentes',
    'svc5.title': 'Transformación Digital',
    'svc5.text': 'Consultoría estratégica para modernizar sistemas heredados, optimizar operaciones y alinear la tecnología con los objetivos del negocio.',
    'svc5.li1': 'Estrategia tecnológica y hoja de ruta',
    'svc5.li2': 'Modernización de sistemas heredados',
    'svc5.li3': 'Automatización de procesos',
    'svc6.title': 'UX / Diseño de Producto',
    'svc6.text': 'Diseño centrado en el usuario que convierte. Desde investigación y wireframes hasta prototipos de alta fidelidad y sistemas de diseño.',
    'svc6.li1': 'Investigación UX y pruebas de usabilidad',
    'svc6.li2': 'Sistemas de diseño y guías de estilo',
    'svc6.li3': 'Prototipado en Figma',

    // About
    'about.eyebrow': 'Quiénes somos',
    'about.title': 'Tecnología que Impulsa los Negocios',
    'about.p1': 'Fundada en 2015, Neways es una empresa tecnológica creada por ingenieros que se negaron a aceptar el software lento y frágil como la norma. Colaboramos con startups y empresas por igual para ofrecer soluciones fiables y elegantes en cada capa del stack.',
    'about.p2': 'Nuestros equipos combinan una profunda experiencia técnica con una mentalidad de producto — lo que significa que no solo escribimos código, resolvemos problemas que importan.',
    'about.pillar1.title': 'Responsabilidad',
    'about.pillar1.text': 'Tratamos cada proyecto como si fuera nuestro propio producto.',
    'about.pillar2.title': 'Transparencia',
    'about.pillar2.text': 'Sin sorpresas — siempre sabes en qué punto estamos.',
    'about.pillar3.title': 'Calidad',
    'about.pillar3.text': 'Entregamos código limpio, pruebas exhaustivas y documentación clara.',
    'about.card1': 'Descubrir y Definir',
    'about.card2': 'Diseñar y Arquitectar',
    'about.card3': 'Construir y Probar',
    'about.card4': 'Desplegar y Escalar',

    // Work
    'work.eyebrow': 'Casos de estudio',
    'work.title': 'Trabajo del que Estamos Orgullosos',
    'work.subtitle': 'Una selección de proyectos recientes en diferentes industrias.',
    'case1.badge': 'Migración a la Nube',
    'case1.title': 'Escalando una Plataforma FinTech a 10M de Usuarios',
    'case1.text': 'Migramos una aplicación bancaria monolítica a una arquitectura de microservicios en AWS, reduciendo los costos de infraestructura un 40% mientras soportamos 10× el crecimiento de usuarios.',
    'case2.badge': 'IA y ML',
    'case2.title': 'Mantenimiento Predictivo para IoT Industrial',
    'case2.text': 'Construimos un pipeline de ML que redujo el tiempo de inactividad no planificado un 60% para un cliente manufacturero global, prediciendo fallas de equipos con 72 horas de anticipación.',
    'case3.badge': 'Diseño de Producto',
    'case3.title': 'Rediseño de un Portal de Salud',
    'case3.text': 'Rediseño completo de un portal orientado al paciente utilizado por 500k usuarios activos mensuales, mejorando las tasas de finalización de tareas un 35%.',

    // Team
    'team.eyebrow': 'Nuestro equipo',
    'team.title': 'Conoce al Equipo',
    'team.subtitle': 'Ingenieros y diseñadores experimentados con una pasión compartida por el oficio.',
    'member1.role': 'CEO y Cofundador',
    'member1.bio': '15 años construyendo software empresarial. Exlíder de ingeniería en un proveedor de nube Fortune 500.',
    'member2.role': 'CTO y Cofundadora',
    'member2.bio': 'Experta en sistemas distribuidos. Doctorado en Ciencias de la Computación, lideró previamente la ingeniería de plataformas en una startup tecnológica importante.',
    'member3.role': 'Director de IA y Datos',
    'member3.bio': 'Especialista en machine learning con amplia experiencia en PLN, visión por computadora y sistemas ML en producción a escala.',
    'member4.role': 'Directora de Diseño',
    'member4.bio': 'Diseñadora de producto con experiencia en psicología cognitiva. Apasionada por crear interfaces que se sienten inevitables.',

    // Logos
    'logos.label': 'Con la confianza de equipos en',

    // Contact
    'contact.eyebrow': 'Hablemos',
    'contact.title': 'Inicia Tu Próximo Proyecto con Neways',
    'contact.p': 'Ya sea que tengas un brief detallado o simplemente una idea, nos encantaría escucharte. Nuestro equipo te responderá en un día hábil.',
    'form.name.label': 'Nombre',
    'form.name.placeholder': 'Juan García',
    'form.email.label': 'Correo electrónico',
    'form.subject.label': 'Asunto',
    'form.opt.default': 'Selecciona un tema…',
    'form.opt.software': 'Desarrollo de Software',
    'form.opt.cloud': 'Infraestructura en la Nube',
    'form.opt.ai': 'IA y Datos',
    'form.opt.security': 'Ciberseguridad',
    'form.opt.digital': 'Transformación Digital',
    'form.opt.ux': 'UX / Diseño de Producto',
    'form.opt.other': 'Otro',
    'form.message.label': 'Mensaje',
    'form.message.placeholder': 'Cuéntanos sobre tu proyecto…',
    'form.submit': 'Enviar Mensaje',
    'form.sending': 'Enviando…',
    'form.success': '¡Gracias! Nos pondremos en contacto contigo en un día hábil.',

    // Footer
    'footer.tagline': 'Construyendo la tecnología del mañana, hoy.',
    'footer.col1.title': 'Servicios',
    'footer.col1.li1': 'Desarrollo de Software',
    'footer.col1.li2': 'Infraestructura en la Nube',
    'footer.col1.li3': 'IA y Datos',
    'footer.col1.li4': 'Ciberseguridad',
    'footer.col2.title': 'Empresa',
    'footer.col2.li1': 'Sobre Nosotros',
    'footer.col2.li2': 'Casos de Estudio',
    'footer.col2.li3': 'Equipo',
    'footer.col2.li4': 'Contacto',
    'footer.col3.title': 'Conectar',
    'footer.copyright': '© 2026 Neways. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
  },

  en: {
    'page.title': 'Neways | Technology Reimagined',
    'meta.description': 'Neways — Building tomorrow\'s technology today. Enterprise software, cloud infrastructure, and AI-powered solutions.',

    // Nav
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.team': 'Team',
    'nav.contact': 'Get in Touch',

    // Hero
    'hero.eyebrow': 'Next-generation technology',
    'hero.title': 'Building the<br><span class="gradient-text">Future of Tech</span>',
    'hero.subtitle': 'We design, build, and scale digital products that transform how businesses operate. From cloud infrastructure to AI-powered solutions — we make it possible.',
    'hero.cta1': 'Explore Services',
    'hero.cta2': 'View Our Work',
    'hero.stat1': 'Projects Delivered',
    'hero.stat2': 'Client Satisfaction',
    'hero.stat3': 'Expert Engineers',

    // Services
    'services.eyebrow': 'What we do',
    'services.title': 'Services Built for Scale',
    'services.subtitle': 'End-to-end technology services that accelerate growth and reduce complexity.',
    'svc1.title': 'Software Development',
    'svc1.text': 'Custom web and mobile applications crafted with modern frameworks. Scalable architectures designed to grow with your business.',
    'svc1.li1': 'React / Next.js / Node.js',
    'svc1.li2': 'Mobile (iOS & Android)',
    'svc1.li3': 'API design & integration',
    'svc2.title': 'Cloud Infrastructure',
    'svc2.text': 'Resilient, cost-efficient cloud architectures on AWS, GCP, and Azure. DevOps pipelines that ship faster and break less.',
    'svc2.li1': 'Cloud migration & architecture',
    'svc2.li2': 'Kubernetes & container orchestration',
    'svc2.li3': 'CI/CD & DevOps automation',
    'svc3.title': 'AI & Data Solutions',
    'svc3.text': 'Machine learning pipelines, predictive analytics, and AI integration that turn raw data into strategic advantage.',
    'svc3.li1': 'ML model development',
    'svc3.li2': 'Data engineering & pipelines',
    'svc3.li3': 'LLM integration & fine-tuning',
    'svc4.title': 'Cybersecurity',
    'svc4.text': 'Proactive security audits, penetration testing, and compliance frameworks to protect your most critical assets.',
    'svc4.li1': 'Security audits & pen testing',
    'svc4.li2': 'SOC 2 / ISO 27001 readiness',
    'svc4.li3': 'Incident response planning',
    'svc5.title': 'Digital Transformation',
    'svc5.text': 'Strategic consulting to modernize legacy systems, streamline operations, and align technology with business goals.',
    'svc5.li1': 'Tech strategy & roadmapping',
    'svc5.li2': 'Legacy modernization',
    'svc5.li3': 'Process automation',
    'svc6.title': 'UX / Product Design',
    'svc6.text': 'User-centered design that converts. From research and wireframes to high-fidelity prototypes and design systems.',
    'svc6.li1': 'UX research & usability testing',
    'svc6.li2': 'Design systems & style guides',
    'svc6.li3': 'Figma prototyping',

    // About
    'about.eyebrow': 'Who we are',
    'about.title': 'Technology That Moves Business Forward',
    'about.p1': 'Founded in 2015, Neways is a technology company built by engineers who refused to accept slow, brittle software as the norm. We partner with startups and enterprises alike to deliver reliable, elegant solutions at every layer of the stack.',
    'about.p2': 'Our teams combine deep technical expertise with a strong product mindset — meaning we don\'t just write code, we solve problems that matter.',
    'about.pillar1.title': 'Ownership',
    'about.pillar1.text': 'We treat every project as if it were our own product.',
    'about.pillar2.title': 'Transparency',
    'about.pillar2.text': 'No surprises — you always know where things stand.',
    'about.pillar3.title': 'Quality',
    'about.pillar3.text': 'We ship clean code, thorough tests, and clear documentation.',
    'about.card1': 'Discover & Define',
    'about.card2': 'Design & Architect',
    'about.card3': 'Build & Test',
    'about.card4': 'Deploy & Scale',

    // Work
    'work.eyebrow': 'Case studies',
    'work.title': 'Work We\'re Proud Of',
    'work.subtitle': 'A selection of recent projects across industries.',
    'case1.badge': 'Cloud Migration',
    'case1.title': 'Scaling a FinTech Platform to 10M Users',
    'case1.text': 'Migrated a monolithic banking application to a microservices architecture on AWS, cutting infrastructure costs by 40% while supporting 10× user growth.',
    'case2.badge': 'AI & ML',
    'case2.title': 'Predictive Maintenance for Industrial IoT',
    'case2.text': 'Built an ML pipeline that reduced unplanned downtime by 60% for a global manufacturing client by predicting equipment failures 72 hours in advance.',
    'case3.badge': 'Product Design',
    'case3.title': 'Redesigning a Healthcare Portal',
    'case3.text': 'End-to-end redesign of a patient-facing portal used by 500k monthly active users, improving task completion rates by 35%.',

    // Team
    'team.eyebrow': 'Our people',
    'team.title': 'Meet the Team',
    'team.subtitle': 'Experienced engineers and designers with a shared passion for craft.',
    'member1.role': 'CEO & Co-Founder',
    'member1.bio': '15 years building enterprise software. Former engineering lead at a Fortune 500 cloud provider.',
    'member2.role': 'CTO & Co-Founder',
    'member2.bio': 'Distributed systems expert. PhD in Computer Science, previously led platform engineering at a major tech startup.',
    'member3.role': 'Head of AI & Data',
    'member3.bio': 'Machine learning practitioner with deep experience in NLP, computer vision, and production ML systems at scale.',
    'member4.role': 'Head of Design',
    'member4.bio': 'Product designer with a background in cognitive psychology. Obsessed with creating interfaces that feel inevitable.',

    // Logos
    'logos.label': 'Trusted by teams at',

    // Contact
    'contact.eyebrow': 'Let\'s talk',
    'contact.title': 'Start Your Next Project with Neways',
    'contact.p': 'Whether you have a detailed brief or just an idea, we\'d love to hear from you. Our team will get back to you within one business day.',
    'form.name.label': 'Name',
    'form.name.placeholder': 'Jane Smith',
    'form.email.label': 'Email',
    'form.subject.label': 'Subject',
    'form.opt.default': 'Select a topic…',
    'form.opt.software': 'Software Development',
    'form.opt.cloud': 'Cloud Infrastructure',
    'form.opt.ai': 'AI & Data',
    'form.opt.security': 'Cybersecurity',
    'form.opt.digital': 'Digital Transformation',
    'form.opt.ux': 'UX / Product Design',
    'form.opt.other': 'Other',
    'form.message.label': 'Message',
    'form.message.placeholder': 'Tell us about your project…',
    'form.submit': 'Send Message',
    'form.sending': 'Sending…',
    'form.success': 'Thanks! We\'ll be in touch within one business day.',

    // Footer
    'footer.tagline': 'Building tomorrow\'s technology, today.',
    'footer.col1.title': 'Services',
    'footer.col1.li1': 'Software Development',
    'footer.col1.li2': 'Cloud Infrastructure',
    'footer.col1.li3': 'AI & Data',
    'footer.col1.li4': 'Cybersecurity',
    'footer.col2.title': 'Company',
    'footer.col2.li1': 'About Us',
    'footer.col2.li2': 'Case Studies',
    'footer.col2.li3': 'Team',
    'footer.col2.li4': 'Contact',
    'footer.col3.title': 'Connect',
    'footer.copyright': '© 2026 Neways. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
};

/* =========================================
   i18n — Language Switching
   ========================================= */
let currentLang = localStorage.getItem('neways-lang') || 'es';

function t(key) {
  return translations[currentLang][key] ?? key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('neways-lang', lang);
  document.documentElement.lang = lang;

  // Text nodes via innerHTML (we control all translation strings)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = translations[lang][el.dataset.i18n];
    if (val !== undefined) el.innerHTML = val;
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = translations[lang][el.dataset.i18nPlaceholder];
    if (val !== undefined) el.placeholder = val;
  });

  // Page title & meta description
  document.title = translations[lang]['page.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = translations[lang]['meta.description'];

  // Lang toggle button active state
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('lang-toggle__btn--active', btn.dataset.lang === lang);
  });
}

// Language toggle click handler
document.getElementById('lang-toggle').addEventListener('click', e => {
  const btn = e.target.closest('.lang-toggle__btn');
  if (btn && btn.dataset.lang !== currentLang) {
    setLanguage(btn.dataset.lang);
  }
});

// Apply saved/default language on load
setLanguage(currentLang);


/* =========================================
   Sticky header on scroll
   ========================================= */
const header = document.getElementById('header');

const handleScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();


/* =========================================
   Mobile nav toggle
   ========================================= */
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navList.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});


/* =========================================
   Scroll-triggered animations (IntersectionObserver)
   ========================================= */
const animatedEls = document.querySelectorAll('[data-animate]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement.querySelectorAll('[data-animate]'));
          const delay = siblings.indexOf(entry.target) * 80;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );

  animatedEls.forEach(el => observer.observe(el));
} else {
  animatedEls.forEach(el => el.classList.add('visible'));
}


/* =========================================
   Active nav link highlighting
   ========================================= */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--color-text)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => sectionObserver.observe(section));


/* =========================================
   Contact form (client-side demo)
   ========================================= */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !message) return;

    const submitBtn = contactForm.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = t('form.sending');

    setTimeout(() => {
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = t('form.submit');
      formSuccess.innerHTML = t('form.success');
      formSuccess.hidden = false;

      setTimeout(() => { formSuccess.hidden = true; }, 5000);
    }, 1200);
  });
}


/* =========================================
   Pause logo ticker on hover
   ========================================= */
const logoTrack = document.querySelector('.logos-section__track');

if (logoTrack) {
  logoTrack.addEventListener('mouseenter', () => {
    logoTrack.style.animationPlayState = 'paused';
  });
  logoTrack.addEventListener('mouseleave', () => {
    logoTrack.style.animationPlayState = 'running';
  });
}
