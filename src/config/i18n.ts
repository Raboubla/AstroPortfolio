/**
 * Flat key-value translations for FR and EN.
 * FR is the default language.
 * Keys are used as data-i18n attributes in the templates.
 */
export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";

export const translations: Record<Locale, Record<string, string>> = {
  fr: {
    // Nav
    "nav.experience": "Expériences",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.languages": "Langues",
    "nav.about": "À propos",

    // Hero
    "hero.specialty": "Développeur Fullstack Java / TypeScript",
    "hero.summary":
      "Salut, je suis Herimbola — Bienvenue ! Ingénieur logiciel Fullstack et étudiant en Master, je combine une expertise backend robuste (Java/Spring Boot, NestJS) et la maîtrise d'écosystèmes frontend modernes (React, Angular, Astro). Passionné par l'architecture logicielle et la sécurité, je conçois des applications web et mobiles performantes et sécurisées. Addict au gaming et au dev — je construis, je casse, j'apprends et je grandis.",
    "hero.cta": "Me contacter",
    "hero.download": "Télécharger le CV",

    // Section titles
    "section.experience": "Expériences professionnelles",
    "section.skills": "Compétences techniques",
    "section.projects": "Projets réalisés",
    "section.languages": "Langues",
    "section.about": "À propos de moi",
    "section.framework": "Maîtrise Backend",

    // Experience — Ichtus IT
    "exp.0.position": "Ingénieur logiciel Fullstack",
    "exp.0.startDate": "juillet 2025",
    "exp.0.endDate": "aujourd'hui",
    "exp.0.summary.0":
      "Fort d'une solide expérience en développement, j'ai dirigé la création de nombreuses applications complexes, en collaborant étroitement avec toutes les parties prenantes tout au long du cycle de vie logiciel. Mon rôle va au-delà de la simple livraison de fonctionnalités ; je suis activement impliqué dans l'optimisation continue du code et des performances applicatives pour garantir des solutions robustes et évolutives.",
    "exp.0.summary.1":
      "En tant que développeur full-stack, mon expertise s'étend au-delà du backend. Je possède les compétences complètes pour concevoir et déployer des écosystèmes entiers, incluant le développement d'interfaces utilisateur (front-office) et d'outils d'administration avancés (back-office).",
    "exp.0.summary.2":
      "Cette vision globale repose sur une expertise avancée en architecture de données. Je participe donc à la conception et à la modélisation de bases de données structurées et non structurées, assurant une gestion optimale de l'information, que ce soit via des environnements SQL ou NoSQL.",

    // Experience — Freelancer
    "exp.1.position": "Consultant Développeur Full-Stack Indépendant",
    "exp.1.startDate": "janvier 2025",
    "exp.1.endDate": "aujourd'hui",
    "exp.1.summary.0":
      "Travaillant en duo avec un collègue, je gère le cycle de vie complet des projets clients, de la prospection commerciale à la livraison technique. Nous travaillons sur une gamme variée de solutions digitales, de la création de sites vitrines et de plateformes de gestion sur mesure à la conception d'architectures complexes basées sur des microservices.",

    // Experience — Bio Mada
    "exp.2.position": "Associé stratégique & Responsable de la Transformation Digitale",
    "exp.2.startDate": "décembre 2025",
    "exp.2.endDate": "aujourd'hui",
    "exp.2.summary.0":
      "Responsable de la définition et de l'exécution de la stratégie commerciale et marketing. Je supervise l'identité de marque et déploie des campagnes publicitaires ciblées. Mon rôle inclut également l'analyse des tendances du marché et l'exploitation des données (Data Analysis) pour guider les décisions stratégiques de l'entreprise.",
    "exp.2.summary.1":
      "Je dirige la transformation numérique de l'entreprise en concevant des outils digitaux sur mesure. Mon travail se concentre sur l'automatisation des processus internes, notamment via la mise en place de solutions CRM et l'informatisation des modules de gestion des ventes et des stocks, afin d'accroître l'efficacité opérationnelle.",

    // Skills categories
    "skills.0.name": "Langages de programmation",
    "skills.1.name": "Frontend",
    "skills.2.name": "Backend",
    "skills.3.name": "Base de données",
    "skills.4.name": "Mobile",
    "skills.5.name": "Outils & DevOps",

    // Projects
    "proj.holy.summary": "Plateforme digitale de traçabilité et certification agricole SPG. Écosystème numérique complet avec backoffice Next.js et application mobile Flutter.",
    "proj.hay.summary": "Plateforme digitale complète (Back Office, Front Office, Mobile) pour une école. Backend développé en NestJS avec conception de l'architecture serveur et des APIs REST.",
    "proj.stefan.summary": "Plateforme web multi-tenant (MEAN stack) dédiée à la gestion d'un centre commercial avec tableau de bord analytique et interface optimisée.",
    "proj.stegano.summary": "Développement d'un outil en Python permettant de dissimuler des messages texte dans des images via la modification des bits les moins significatifs (LSB).",
    "proj.fram.summary": "Développement d'un framework Java from scratch intégrant gestion des erreurs, sécurité, ORM et moteur de templates.",
    "projects.source": "Source",
    "projects.preview": "Aperçu",

    // Framework Highlight
    "framework.badge": "Framework Java Custom",
    "framework.title": "Architecture sur mesure",
    "framework.desc": "Pour consolider mon expertise backend, j'ai développé un framework Java de A à Z. Il intègre un moteur ORM personnalisé utilisant l'API de réflexion, ainsi qu'un système centralisé de gestion des exceptions. Ce projet démontre ma capacité à concevoir des architectures robustes et à maîtriser la programmation orientée objet avancée, au-delà de la simple utilisation d'outils existants.",
    "framework.feat1": "ORM personnalisé",
    "framework.feat2": "Gestion des exceptions",
    "framework.feat3": "API de réflexion",
    "framework.feat4": "Core sans dépendance",
    "framework.github": "Voir sur GitHub",

    // Languages
    "lang.0.level": "Natif",
    "lang.1.level": "Courant",
    "lang.2.level": "Intermédiaire",

    // About
    "about.description":
      "Ingénieur logiciel Fullstack et étudiant en Master, je suis un développeur passionné par l'alliance entre la robustesse du backend (Java, Spring Boot, NestJS) et l'agilité des interfaces modernes (React, Next.js, Flutter). Mon quotidien consiste à transformer des concepts complexes en solutions scalables, sécurisées et performantes, du modèle de données jusqu'à l'expérience utilisateur. Toujours avide de défis techniques, je mets un point d'honneur à concevoir un code propre et de haute qualité, tout en continuant à explorer les technologies émergentes et l'architecture logicielle.",
    // WhatsApp
    "whatsapp.tooltip": "Discutons de votre projet",

    // PWA Install
    "pwa.title": "Installer l'Application",
    "pwa.desc": "Installez le portfolio pour un accès rapide et hors-ligne.",
    "pwa.btn": "Installer",

    // Footer
    "footer.copyright": "© {year}",
  },

  en: {
    // Nav
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.languages": "Languages",
    "nav.about": "About",

    // Hero
    "hero.specialty": "Fullstack Java / TypeScript Developer",
    "hero.summary":
      "Hi, I'm Herimbola — Welcome! Fullstack Software Engineer and Master's student, I combine a robust backend expertise (Java/Spring Boot, NestJS) with a mastery of modern frontend ecosystems (React, Angular, Astro). Passionate about software architecture and security, I build high-performance, secure web and mobile applications. Addict to gaming and dev — I build, I break, I learn, and I grow.",
    "hero.cta": "Get in Touch",
    "hero.download": "Download CV",

    // Section titles
    "section.experience": "Work Experience",
    "section.skills": "Technical Skills",
    "section.projects": "Featured Projects",
    "section.languages": "Languages",
    "section.about": "About Me",
    "section.framework": "Backend Mastery",

    // Experience — Ichtus IT
    "exp.0.position": "Fullstack Software Engineer",
    "exp.0.startDate": "july 2025",
    "exp.0.endDate": "present",
    "exp.0.summary.0":
      "With a strong background in development, I have led the creation of numerous complex applications, working closely with all stakeholders throughout the software lifecycle. My role extends beyond simply delivering features; I am actively involved in the continuous optimization of code and application performance to ensure robust and scalable solutions.",
    "exp.0.summary.1":
      "As a full-stack developer, my expertise extends beyond the backend. I possess comprehensive skills to design and deploy entire ecosystems, including the development of user interfaces (front-office) and advanced administration tools (back-office).",
    "exp.0.summary.2":
      "This comprehensive vision is based on advanced expertise in data architecture. I therefore participate in the design and modeling of structured and unstructured databases, ensuring optimal information management, whether through SQL or NoSQL environments.",

    // Experience — Freelancer
    "exp.1.position": "Independent Full-Stack Developer Consultant",
    "exp.1.startDate": "january 2025",
    "exp.1.endDate": "present",
    "exp.1.summary.0":
      "Working in tandem with a colleague, I manage the entire lifecycle of client projects, from sales prospecting to technical delivery. We work on a diverse range of digital solutions, from the creation of showcase websites and custom management platforms to the design of complex microservices-based architectures.",

    // Experience — Bio Mada
    "exp.2.position": "Strategic Partner & Head of Digital Transformation",
    "exp.2.startDate": "december 2025",
    "exp.2.endDate": "present",
    "exp.2.summary.0":
      "Responsible for defining and executing the sales and marketing strategy. I oversee brand identity and deploy targeted advertising campaigns. My role also includes analyzing market trends and leveraging data (Data Analysis) to guide the company's strategic decisions.",
    "exp.2.summary.1":
      "I lead the company's digital transformation by designing bespoke digital tools. My work focuses on automating internal processes, particularly through the implementation of CRM solutions and the computerization of sales and inventory management modules, in order to increase operational efficiency.",

    // Skills categories
    "skills.0.name": "Programming Languages",
    "skills.1.name": "Frontend",
    "skills.2.name": "Backend",
    "skills.3.name": "Database",
    "skills.4.name": "Mobile",
    "skills.5.name": "Tools & DevOps",

    // Projects
    "proj.holy.summary": "Digital platform for SPG agricultural traceability and certification. Complete digital ecosystem with Next.js backoffice and Flutter mobile app.",
    "proj.hay.summary": "Complete digital platform (Back Office, Front Office, Mobile) for a school. Backend developed in NestJS with server architecture design and REST APIs.",
    "proj.stefan.summary": "Multi-tenant web platform (MEAN stack) dedicated to shopping mall management with an analytical dashboard and optimized interface.",
    "proj.stegano.summary": "Development of a Python tool for hiding text messages within images by modifying the least significant bits (LSB).",
    "proj.fram.summary": "Development of a Java framework from scratch integrating error handling, security, ORM, and a template engine.",
    "projects.source": "Source",
    "projects.preview": "Preview",

    // Framework Highlight
    "framework.badge": "Custom Java Framework",
    "framework.title": "Bespoke Architecture",
    "framework.desc": "To solidify my backend expertise, I developed a Java framework from scratch. It features a custom ORM engine utilizing the Reflection API, along with a centralized exception handling system. This project demonstrates my ability to design robust architectures and master advanced object-oriented programming, moving beyond the simple use of existing tools.",
    "framework.feat1": "Custom ORM",
    "framework.feat2": "Exception Handling",
    "framework.feat3": "Reflection API",
    "framework.feat4": "Zero-dependency Core",
    "framework.github": "View on GitHub",

    // Languages
    "lang.0.level": "Native",
    "lang.1.level": "Fluent",
    "lang.2.level": "Intermediate",

    // About
    "about.description":
      "As a Fullstack Software Engineer and Master's student, I am passionate about bridging the gap between robust backend architectures (Java, Spring Boot, NestJS) and agile modern interfaces (React, Next.js, Flutter). My daily routine involves transforming complex concepts into scalable, secure, and high-performance solutions, from data modeling down to the user experience. Always eager for technical challenges, I thrive on writing clean, high-quality code while continuously exploring emerging technologies and software architecture.",
    // WhatsApp
    "whatsapp.tooltip": "Let's discuss your project",

    // PWA Install
    "pwa.title": "Install App",
    "pwa.desc": "Install the portfolio for fast, offline access.",
    "pwa.btn": "Install",

    // Footer
    "footer.copyright": "© {year}",
  },
};
