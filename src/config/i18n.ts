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
    "hero.specialty": "développeur full-stack orienté backend",
    "hero.summary":
      "Salut, je suis Herimbola — Bienvenue ! Développeur Java et Fullstack passionné par le code et les technologies émergentes. Je cherche constamment de nouveaux défis dans des environnements dynamiques où je peux renforcer mes compétences techniques et appliquer mes connaissances dans des projets concrets. Addict au gaming et au dev — je construis, je casse, j'apprends et je grandis.",
    "hero.cta": "Me contacter",
    "hero.download": "Télécharger le CV",

    // Section titles
    "section.experience": "Expériences professionnelles",
    "section.skills": "Compétences techniques",
    "section.projects": "Projets réalisés",
    "section.languages": "Langues",
    "section.about": "À propos de moi",

    // Experience — Ichtus IT
    "exp.0.position": "Développeur Backend",
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
    "proj.0.summary": "Vitrine digitale et catalogue de produits pour Bio Mada et Bio Mada Sakafo.",
    "proj.1.summary": "Plateforme multi-utilisateurs de gestion de centres commerciaux (admins, boutiques, clients).",
    "proj.2.summary": "Framework Java personnalisé avec moteur ORM et gestion centralisée des erreurs.",
    "proj.3.summary": "Application géolocalisée pour trouver des intercesseurs et lieux de prière sur une carte.",
    "projects.source": "Source",
    "projects.preview": "Aperçu",

    // Languages
    "lang.0.level": "Natif",
    "lang.1.level": "Courant",
    "lang.2.level": "Intermédiaire",

    // About
    "about.description":
      "Je suis un développeur Java et Full-Stack passionné, avec un fort intérêt pour la création d'applications web modernes et l'exploration des technologies émergentes. J'aime concevoir et développer des systèmes front-end et back-end, transformant les idées en solutions fonctionnelles et efficaces. Je suis toujours avide d'apprendre, d'améliorer mes compétences techniques et de travailler sur des projets stimulants qui me permettent de grandir en tant que développeur tout en livrant des logiciels de haute qualité.",

    // WhatsApp
    "whatsapp.tooltip": "Contactez-moi",

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
    "hero.specialty": "full-stack backend-oriented developer",
    "hero.summary":
      "Hi, I'm Herimbola — Welcome! Java Developer and Fullstack enthusiast, passionate about coding and emerging technologies. I'm constantly seeking new challenges in dynamic environments where I can sharpen my technical skills and apply my knowledge in real-world projects. Addict to game and dev — I build, I break, I learn, and I grow.",
    "hero.cta": "Get in Touch",
    "hero.download": "Download CV",

    // Section titles
    "section.experience": "Work Experience",
    "section.skills": "Technical Skills",
    "section.projects": "Featured Projects",
    "section.languages": "Languages",
    "section.about": "About Me",

    // Experience — Ichtus IT
    "exp.0.position": "Backend Developer",
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
    "proj.0.summary": "Digital storefront and product catalog for Bio Mada and Bio Mada Sakafo.",
    "proj.1.summary": "Multi-user platform for managing shopping centers (admins, shops, customers).",
    "proj.2.summary": "Custom Java framework with ORM engine and centralized error handling.",
    "proj.3.summary": "Location-based app to find intercessors and prayer sites on a map.",
    "projects.source": "Source",
    "projects.preview": "Preview",

    // Languages
    "lang.0.level": "Native",
    "lang.1.level": "Fluent",
    "lang.2.level": "Intermediate",

    // About
    "about.description":
      "I am a passionate Java and Full-Stack Developer with a strong interest in building modern web applications and exploring emerging technologies. I enjoy designing and developing both front-end and back-end systems, turning ideas into functional and efficient solutions. I am always eager to learn, improve my technical skills, and work on challenging projects that allow me to grow as a developer while delivering high-quality software.",

    // WhatsApp
    "whatsapp.tooltip": "Contact me",

    // PWA Install
    "pwa.title": "Install App",
    "pwa.desc": "Install the portfolio for fast, offline access.",
    "pwa.btn": "Install",

    // Footer
    "footer.copyright": "© {year}",
  },
};
