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
  title: "Herimbola RAZANAKOTO — full-stack backend java / typescript",
  author: "Herimbola RAZANAKOTO",
  description:
    "Salut, je suis Herimbola — Bienvenue ! Développeur Java et Fullstack passionné par le code et les technologies émergentes.",
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
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Herimbola RAZANAKOTO",
    specialty: "full-stack backend-oriented developer",
    summary:
      "Hi, I'm Herimbola — Welcome! Java Developer and Fullstack enthusiast, passionate about coding and emerging technologies. I'm constantly seeking new challenges in dynamic environments where I can sharpen my technical skills and apply my knowledge in real-world projects. Addict to game and dev — I build, I break, I learn, and I grow.",
    email: "hasinkasina@gmail.com",
  },
  experience: [
    {
      company: "Ichtus IT",
      position: "Backend Developer",
      startDate: "julay 2025",
      endDate: "present",
      summary: [
        "With a strong background in development, I have led the creation of numerous complex applications, working closely with all stakeholders throughout the software lifecycle. My role extends beyond simply delivering features; I am actively involved in the continuous optimization of code and application performance to ensure robust and scalable solutions.",
        "As a full-stack developer, my expertise extends beyond the backend. I possess comprehensive skills to design and deploy entire ecosystems, including the development of user interfaces (front-office) and advanced administration tools (back-office).",
        "This comprehensive vision is based on advanced expertise in data architecture. I therefore participate in the design and modeling of structured and unstructured databases, ensuring optimal information management, whether through SQL or NoSQL environments.",
      ],
    },
    {
      company: "Freelancer",
      position: "Independent Full-Stack Developer Consultant",
      startDate: "january 2025",
      endDate: "present",
      summary: [
        "Working in tandem with a colleague, I manage the entire lifecycle of client projects, from sales prospecting to technical delivery. We work on a diverse range of digital solutions, from the creation of showcase websites and custom management platforms to the design of complex microservices-based architectures."
      ],
    },
    {
      company: "Bio Mada",
      position: "Strategic Partner & Head of Digital Transformation",
      startDate: "december 2025",
      endDate: "present",
      summary: [
        "Responsible for defining and executing the sales and marketing strategy. I oversee brand identity and deploy targeted advertising campaigns. My role also includes analyzing market trends and leveraging data (Data Analysis) to guide the company's strategic decisions.",
        "I lead the company's digital transformation by designing bespoke digital tools. My work focuses on automating internal processes, particularly through the implementation of CRM solutions and the computerization of sales and inventory management modules, in order to increase operational efficiency.",
      ]
    },
  ],
  skills: [
    {
      name: "Programming Languages",
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
      name: "Database",
      icon: "database",
      items: ["Oracle", "PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Firebase"],
    },
    {
      name: "Mobile",
      icon: "smartphone",
      items: ["React Native", "Expo Go", "Flutter"],
    },
    {
      name: "Tools & DevOps",
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
          summary: "Plateforme digitale de traçabilité et certification agricole SPG. Écosystème numérique complet avec backoffice Next.js et application mobile Flutter.",
          i18nKey: "proj.holy.summary",
          image: holy
        },
        {
          name: "Hay Politika",
          summary: "Plateforme digitale complète (Back Office, Front Office, Mobile) pour une école. Backend développé en NestJS avec conception de l'architecture serveur et des APIs REST.",
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
          summary: "Plateforme web multi-tenant (MEAN stack) dédiée à la gestion d'un centre commercial avec tableau de bord analytique et interface optimisée.",
          linkPreview: "https://m1p13mean-herimbola-stefan.vercel.app",
          linkSource: "https://github.com/Raboubla/mean_frontend.git",
          image: mall,
          i18nKey: "proj.stefan.summary"
        },
        {
          name: "Outil de Stéganographie",
          summary: "Développement d'un outil en Python permettant de dissimuler des messages texte dans des images via la modification des bits les moins significatifs (LSB).",
          linkSource: "https://github.com/Raboubla/Steganographie.git",
          image: steg,
          i18nKey: "proj.stegano.summary"
        },
        {
          name: "Framework Java by Raboubla",
          summary: "Développement d'un framework Java from scratch intégrant gestion des erreurs, sécurité, ORM et moteur de templates.",
          linkSource: "https://github.com/Raboubla/Fram.git",
          image: fram,
          i18nKey: "proj.fram.summary"
        }
      ]
    }
  ],
  languages: [
    { name: "Malagasy", level: "Native", percentage: 100 },
    { name: "Français", level: "Fluent", percentage: 90 },
    { name: "English", level: "Intermediate", percentage: 60 },
  ],
  about: {
    description: `
      I am a passionate Java and Full-Stack Developer with a strong interest in building modern web applications and exploring emerging technologies. I enjoy designing and developing both front-end and back-end systems, turning ideas into functional and efficient solutions. I am always eager to learn, improve my technical skills, and work on challenging projects that allow me to grow as a developer while delivering high-quality software.
    `,
    image: pdp,
  },
};

