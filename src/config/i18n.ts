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
    "hero.specialty": "Ingénieur Logiciel & Cybersécurité",
    "hero.summary":
      "Salut, je suis Herimbola — Bienvenue ! Ingénieur logiciel orienté backend (Java/Node.js) et étudiant en Master Big Data, je combine une expertise en développement robuste avec une forte spécialisation en cybersécurité applicative. J'intègre la sécurité dès la phase de conception (approche Shift-Left, Secure by Design) et réalise régulièrement des tests d'intrusion (pentesting) pour garantir la résilience des écosystèmes logiciels complexes. Addict au gaming et au dev — je construis, je casse, j'apprends et je grandis.",
    "hero.cta": "Me contacter",
    "hero.download": "Télécharger le CV",

    // Section titles
    "section.experience": "Expériences professionnelles",
    "section.skills": "Compétences techniques",
    "section.projects": "Projets réalisés",
    "section.languages": "Langues",
    "section.about": "À propos de moi",
    "section.framework": "Maîtrise Backend & Sécurité",

    // Experience — Ichtus IT
    "exp.0.position": "Développeur Fullstack",
    "exp.0.startDate": "juillet 2025",
    "exp.0.endDate": "septembre 2026",
    "exp.0.summary.0":
      "Conception des APIs backend, intégration front–back, création d'interfaces mobiles et web. Fort d'une solide expérience en développement, j'ai dirigé la création de nombreuses applications complexes, en collaborant étroitement avec toutes les parties prenantes tout au long du cycle de vie logiciel.",
    "exp.0.summary.1":
      "Réalisation de tests d'intrusion (pentesting) réguliers sur les infrastructures et les applications web/mobiles pour identifier et corriger les vulnérabilités (OWASP Top 10). Sécurisation proactive des écosystèmes par modélisation des menaces et exécution de tests manuels basés sur des scénarios d'abus (Abuse cases).",
    "exp.0.summary.2":
      "Contribution à la conception de bases de données, incluant la modélisation des données, la définition des relations entre les tables, ainsi que l'optimisation des structures pour assurer performance et cohérence des systèmes d'information.",

    // Experience — Freelancer
    "exp.1.position": "Développeur SaaS Freelance",
    "exp.1.startDate": "janvier 2025",
    "exp.1.endDate": "aujourd'hui",
    "exp.1.summary.0":
      "Développeur freelance spécialisé dans la création de solutions SaaS sur mesure pour les entreprises. Conception d'applications web modernes, performantes et sécurisées pour automatiser et optimiser les activités professionnelles.",


    // Skills categories
    "skills.0.name": "Langages de programmation",
    "skills.1.name": "Frontend",
    "skills.2.name": "Backend",
    "skills.3.name": "Base de données",
    "skills.4.name": "Mobile",
    "skills.5.name": "Cybersécurité Applicative",
    "skills.6.name": "Outils & DevOps",

    // Projects
    "proj.holy.summary": "Plateforme digitale de traçabilité et certification agricole SPG. Écosystème numérique complet avec backoffice Next.js et application mobile Flutter. Sécurisation proactive par tests d'intrusion réguliers (OWASP ZAP, Nmap, SQLmap) et modélisation des menaces.",
    "proj.hay.summary": "Plateforme digitale complète (Back Office, Front Office, Mobile) pour une école. Backend développé en NestJS avec conception de l'architecture serveur et des APIs REST sécurisées.",
    "proj.stefan.summary": "Plateforme web multi-tenant (MEAN stack) dédiée à la gestion d'un centre commercial. Sécurisation des endpoints API contre les failles courantes (Injections, XSS, CSRF) et implémentation d'une authentification robuste (JWT, RBAC).",
    "proj.stegano.summary": "Développement d'un outil de stéganographie en Python permettant de dissimuler des messages texte dans des images via la modification des bits les moins significatifs (LSB). Mise en œuvre des principes fondamentaux de la sécurité de l'information.",
    "proj.fram.summary": "Développement d'un framework Java from scratch intégrant gestion des erreurs, module de sécurité intégré empêchant nativement les vulnérabilités d'injection, data sanitization, ORM et moteur de templates.",
    "projects.source": "Source",
    "projects.preview": "Aperçu",

    // Framework Highlight
    "framework.badge": "Framework Java Sécurisé",
    "framework.title": "Architecture sécurisée sur mesure",
    "framework.desc": "Pour consolider mon expertise backend et cybersécurité, j'ai développé un framework Java de A à Z. Il intègre un moteur ORM personnalisé utilisant l'API de réflexion, un module de sécurité intégré empêchant nativement les vulnérabilités d'injection, ainsi qu'un système de data sanitization et de gestion centralisée des exceptions. Ce projet démontre ma capacité à concevoir des architectures robustes et sécurisées dès la conception (Secure by Design).",
    "framework.feat1": "ORM personnalisé",
    "framework.feat2": "Anti-injection natif",
    "framework.feat3": "Data Sanitization",
    "framework.feat4": "Secure by Design",
    "framework.github": "Voir sur GitHub",

    // Languages
    "lang.0.level": "Natif",
    "lang.1.level": "Courant",
    "lang.2.level": "Intermédiaire",

    // About
    "about.description":
      "Ingénieur logiciel orienté backend et étudiant en Master, je suis passionné par l'alliance entre le développement robuste et la cybersécurité applicative. Mon quotidien consiste à concevoir des applications sécurisées dès la conception (Shift-Left, Secure by Design), à réaliser des tests d'intrusion et à garantir la résilience des systèmes. Passionné par l'architecture logicielle et la sécurité offensive, je mets un point d'honneur à concevoir un code propre, sécurisé et de haute qualité, tout en explorant les technologies émergentes et les nouvelles surfaces d'attaque.",
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
    "hero.specialty": "Software Engineer & Cybersecurity",
    "hero.summary":
      "Hi, I'm Herimbola — Welcome! Backend-oriented Software Engineer (Java/Node.js) and Master's student in Big Data, I combine robust development expertise with a strong specialization in application security. I integrate security from the design phase (Shift-Left approach, Secure by Design) and regularly perform penetration testing (pentesting) to ensure the resilience of complex software ecosystems. Addict to gaming and dev — I build, I break, I learn, and I grow.",
    "hero.cta": "Get in Touch",
    "hero.download": "Download CV",

    // Section titles
    "section.experience": "Work Experience",
    "section.skills": "Technical Skills",
    "section.projects": "Featured Projects",
    "section.languages": "Languages",
    "section.about": "About Me",
    "section.framework": "Backend & Security Mastery",

    // Experience — Ichtus IT
    "exp.0.position": "Fullstack Developer",
    "exp.0.startDate": "july 2025",
    "exp.0.endDate": "september 2026",
    "exp.0.summary.0":
      "Backend API design, front–back integration, and creation of mobile and web interfaces. With a strong development background, I led the creation of numerous complex applications, working closely with all stakeholders throughout the software lifecycle.",
    "exp.0.summary.1":
      "Regular penetration testing (pentesting) on infrastructures and web/mobile applications to identify and remediate vulnerabilities (OWASP Top 10). Proactive ecosystem security through threat modeling and execution of manual tests based on abuse case scenarios.",
    "exp.0.summary.2":
      "Contribution to database design, including data modeling, defining table relationships, and optimizing structures to ensure performance and consistency of information systems.",

    // Experience — Freelancer
    "exp.1.position": "Freelance SaaS Developer",
    "exp.1.startDate": "january 2025",
    "exp.1.endDate": "present",
    "exp.1.summary.0":
      "Freelance developer specialized in creating custom SaaS solutions for businesses. Designing modern, high-performance, and secure web applications to automate and optimize professional activities.",


    // Skills categories
    "skills.0.name": "Programming Languages",
    "skills.1.name": "Frontend",
    "skills.2.name": "Backend",
    "skills.3.name": "Database",
    "skills.4.name": "Mobile",
    "skills.5.name": "Application Security",
    "skills.6.name": "Tools & DevOps",

    // Projects
    "proj.holy.summary": "Digital platform for SPG agricultural traceability and certification. Complete digital ecosystem with Next.js backoffice and Flutter mobile app. Proactive security through regular penetration testing (OWASP ZAP, Nmap, SQLmap) and threat modeling.",
    "proj.hay.summary": "Complete digital platform (Back Office, Front Office, Mobile) for a school. Backend developed in NestJS with server architecture design and secure REST APIs.",
    "proj.stefan.summary": "Multi-tenant web platform (MEAN stack) dedicated to shopping mall management. API endpoint security against common vulnerabilities (Injections, XSS, CSRF) and robust authentication implementation (JWT, RBAC).",
    "proj.stegano.summary": "Development of a Python steganography tool for hiding text messages within images by modifying the least significant bits (LSB). Implementation of fundamental information security principles.",
    "proj.fram.summary": "Development of a Java framework from scratch integrating error handling, a built-in security module natively preventing injection vulnerabilities, data sanitization, ORM, and a template engine.",
    "projects.source": "Source",
    "projects.preview": "Preview",

    // Framework Highlight
    "framework.badge": "Secure Java Framework",
    "framework.title": "Bespoke Secure Architecture",
    "framework.desc": "To solidify my backend and cybersecurity expertise, I developed a Java framework from scratch. It features a custom ORM engine utilizing the Reflection API, a built-in security module that natively prevents injection vulnerabilities, along with a data sanitization system and centralized exception handling. This project demonstrates my ability to design robust architectures that are secure by design.",
    "framework.feat1": "Custom ORM",
    "framework.feat2": "Native Anti-Injection",
    "framework.feat3": "Data Sanitization",
    "framework.feat4": "Secure by Design",
    "framework.github": "View on GitHub",

    // Languages
    "lang.0.level": "Native",
    "lang.1.level": "Fluent",
    "lang.2.level": "Intermediate",

    // About
    "about.description":
      "As a backend-oriented Software Engineer and Master's student, I am passionate about bridging robust development with application security. My daily routine involves designing applications that are secure by design (Shift-Left approach), performing penetration testing, and ensuring system resilience. Passionate about software architecture and offensive security, I thrive on writing clean, secure, and high-quality code while continuously exploring emerging technologies and new attack surfaces.",
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
