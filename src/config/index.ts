import type { SiteConfig, SiteContent } from "../types";
import pdp from "../assets/img/pdp.jpg";
import pdpMini from "../assets/img/pdp-Mini.jpg"
import bioMada from "../assets/img/bio-mada.png"
import fram from "../assets/img/framework.jpg"
import mall from "../assets/img/stefan-mall.png"
import steg from "../assets/img/steganographie.jpg"
import holy from "../assets/img/holy.jpg"
import hay from "../assets/img/hayPolitika.jpg"



export const SITE_CONFIG: SiteConfig = {
  title: "Herimbola RAZANAKOTO — Ingénieur Logiciel & DevSecOps",
  author: "Herimbola RAZANAKOTO",
  description:
    "Ingénieur logiciel Fullstack et passionné de Cybersécurité & DevSecOps. J'intègre la sécurité dès la conception (Secure by Design) et réalise des tests d'intrusion pour garantir la résilience des applications.",
  lang: "fr",
  siteLogo: pdpMini,
  navLinks: [
    { text: "Expériences", href: "#experience" },
    { text: "Compétences", href: "#skills" },
    { text: "Projets", href: "#projects" },
    { text: "Langues", href: "#languages" },
    { text: "À propos", href: "#about" },
  ],
  socialLinks: [
    { text: "WhatsApp", href: "https://wa.me/261346819543" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/herimbola-razanakoto-0661a0284/" },
    { text: "Github", href: "https://github.com/Raboubla" },
    { text: "Email", href: "mailto:hasinkasina@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://herimbola.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Herimbola RAZANAKOTO",
    specialty: "Ingénieur Logiciel & DevSecOps",
    summary:
      "Ingénieur logiciel Fullstack et étudiant en Master big data, je combine une expertise backend robuste avec une forte spécialisation en Cybersécurité et DevSecOps. J'intègre la sécurité dès la conception (Secure by Design) et réalise régulièrement des tests d'intrusion (pentesting) pour garantir la résilience et la protection des données sur des écosystèmes complexes.",
    email: "hasinkasina@gmail.com",
  },
  experience: [
    {
      company: "Ichtus IT",
      position: "Développeur Fullstack",
      startDate: "juillet 2025",
      endDate: "septembre 2026",
      summary: [
        "Conception des APIs backend, intégration front–back, création d'interfaces mobiles et web. Fort d'une solide expérience en développement, j'ai dirigé la création de nombreuses applications complexes, en collaborant étroitement avec toutes les parties prenantes tout au long du cycle de vie logiciel.",
        "Réalisation de tests d'intrusion (pentesting) réguliers sur les infrastructures et les applications web/mobiles pour identifier et corriger les vulnérabilités (OWASP Top 10). Sécurisation proactive des écosystèmes par modélisation des menaces et exécution de tests manuels basés sur des scénarios d'abus (Abuse cases).",
        "Contribution à la conception de bases de données, incluant la modélisation des données, la définition des relations entre les tables, ainsi que l'optimisation des structures pour assurer performance et cohérence des systèmes d'information.",
      ],
    },
    {
      company: "Freelancer",
      position: "Développeur SaaS Freelance",
      startDate: "janvier 2025",
      endDate: "aujourd'hui",
      summary: [
        "Développeur freelance spécialisé dans la création de solutions SaaS sur mesure pour les entreprises. Conception d'applications web modernes, performantes et sécurisées pour automatiser et optimiser les activités professionnelles.",
      ],
    },

  ],
  skills: [
    {
      name: "Langages de programmation",
      icon: "code",
      items: ["Java", "PHP", "C#", "C", "JavaScript", "Python", "HTML/CSS", "SQL", "Dart"],
    },
    {
      name: "Frontend",
      icon: "layout",
      items: ["VueJs", "React", "Angular JS", "Astro"],
    },
    {
      name: "Backend",
      icon: "server",
      items: ["Spring Boot", "Laravel", "NestJS"],
    },
    {
      name: "Base de données",
      icon: "database",
      items: ["Oracle", "PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Firebase"],
    },
    {
      name: "Mobile",
      icon: "smartphone",
      items: ["React Native", "Expo Go", "Flutter"],
    },
    {
      name: "Cybersécurité & DevSecOps",
      icon: "shield",
      items: ["OWASP Top 10", "OWASP ZAP", "Nmap", "SQLmap", "Pentesting", "Secure by Design", "JWT / RBAC", "Data Sanitization"],
    },
    {
      name: "Outils & DevOps",
      icon: "tool",
      items: ["Git/GitHub", "Docker", "Figma", "Adobe XD", "Photoshop", "PostGIS", "WSL", "Airflow"],
    },
  ],
  projects: [
    {
      title: "Software Engineer - Ichtus IT",
      projects: [
        {
          name: "Holy Appli",
          summary: "Plateforme digitale de traçabilité et certification agricole SPG. Écosystème numérique complet avec backoffice Next.js et application mobile Flutter. Sécurisation proactive par tests d'intrusion réguliers (OWASP ZAP, Nmap, SQLmap) et modélisation des menaces.",
          i18nKey: "proj.holy.summary",
          image: holy
        },
        {
          name: "Hay Politika",
          summary: "Plateforme digitale complète (Back Office, Front Office, Mobile) pour une école. Backend développé en NestJS avec conception de l'architecture serveur et des APIs REST sécurisées.",
          i18nKey: "proj.hay.summary",
          image: hay
        }
      ]
    },
    {
      title: "Projets personnels et professionnels",
      projects: [
        {
          name: "Écosystème Digital \"Stefan Mall\"",
          summary: "Plateforme web multi-tenant (MEAN stack) dédiée à la gestion d'un centre commercial. Sécurisation des endpoints API contre les failles courantes (Injections, XSS, CSRF) et implémentation d'une authentification robuste (JWT, RBAC).",
          linkPreview: "https://m1p13mean-herimbola-stefan.vercel.app",
          linkSource: "https://github.com/Raboubla/mean_frontend.git",
          image: mall,
          i18nKey: "proj.stefan.summary"
        },
        {
          name: "Outil de Stéganographie",
          summary: "Développement d'un outil de stéganographie en Python permettant de dissimuler des messages texte dans des images via la modification des bits les moins significatifs (LSB). Mise en œuvre des principes fondamentaux de la sécurité de l'information.",
          linkSource: "https://github.com/Raboubla/Steganographie.git",
          image: steg,
          i18nKey: "proj.stegano.summary"
        },
        {
          name: "Framework Java by Raboubla",
          summary: "Développement d'un framework Java from scratch intégrant gestion des erreurs, module de sécurité intégré empêchant nativement les vulnérabilités d'injection, data sanitization, ORM et moteur de templates.",
          linkSource: "https://github.com/Raboubla/Fram.git",
          image: fram,
          i18nKey: "proj.fram.summary"
        }
      ]
    }
  ],
  languages: [
    { name: "Malagasy", level: "Natif", percentage: 100 },
    { name: "Français", level: "Courant", percentage: 90 },
    { name: "English", level: "Intermédiaire", percentage: 60 },
  ],
  about: {
    description: `
      Ingénieur logiciel Fullstack et étudiant en Master, je suis passionné par l'alliance entre le développement robuste et la cybersécurité. Mon quotidien consiste à concevoir des applications sécurisées dès la conception (Secure by Design), à réaliser des tests d'intrusion et à garantir la résilience des systèmes. Toujours avide de défis techniques, je mets un point d'honneur à concevoir un code propre, sécurisé et de haute qualité, tout en explorant les technologies émergentes et l'architecture logicielle.
    `,
    image: pdp,
  },
};
