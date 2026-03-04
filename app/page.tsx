"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { Github, Mail, Linkedin } from "lucide-react";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./components/ui/marquee";

const translations = {
  es: {
    greeting: "Hola, soy",
    role: "Ingeniero de Sistemas | Full Stack",
    location: "Ubicado en Cali, Colombia",
    aboutTitle: "Sobre Mi",
    whoTitle: "Quién Soy",
    whoP1: (s1: string, s2: string) => <><span className={s1}>Ingeniero de Sistemas</span> en formación (9º semestre) especializado en <span className={s2}>desarrollo Full Stack</span>. Combino sólidos conocimientos en backend con una comprensión integral del frontend, permitiéndome crear soluciones completas desde la arquitectura y lógica de negocio hasta la experiencia del usuario.</>,
    whoP2: "Apasionado por aprender, comprometido con el desarrollo de soluciones escalables y mantengo pensamiento analítico para resolver problemas complejos. Dispuesto a crecer profesionalmente en un ambiente colaborativo.",
    skillsTitle: "Mis Habilidades",
    skillBackend: "Backend & Lógica de Negocio",
    skillBackendDesc: "APIs REST, modelado de datos, autenticación, control de acceso, arquitecturas escalables",
    skillDb: "Bases de Datos",
    skillDbDesc: "Modelado relacional y no relacional, diseño eficiente de esquemas, optimización de consultas",
    skillFrontend: "Frontend & UX",
    skillFrontendDesc: "React, Next.js, interfaces funcionales, consumo de APIs, manejo de estado",
    skillSoft: "Habilidades Blandas",
    skillSoftDesc: "Comunicación efectiva, trabajo colaborativo en equipo, pensamiento analítico, disposición al aprendizaje continuo, resolución de problemas complejos",
    projectsTitle: "Proyectos",
    projectsSubtitle: "Algunos de mis proyectos destacados y trabajos realizados",
    projects: [
      { title: "The Carolina Clean Up", desc: "Página web freelance para empresa de limpieza residencial en Carolina del Norte. Más de 10 años de experiencia en servicios de limpieza de alta calidad." },
      { title: "HFC Construction Services", desc: "Sitio web para constructora especializada en remodelaciones de alta calidad: cocinas, baños y renovaciones completas de hogares en Charlotte, NC. Fundada por Hugo Correa con más de 27 años de experiencia." },
      { title: "LWYS", desc: "Sistema conversacional de asesoría legal en Colombia con chatbot integrado mediante n8n y base de datos en PostgreSQL. Permite acceso rápido y organizado a abogados especializados, resolviendo la desinformación y agilizando el proceso de contacto y agendamiento." },
    ],
    viewProject: "Ver Proyecto",
    cvTitle: "Mi Hoja de Vida",
    cvSubtitle: "Descarga mi CV para conocer más sobre mi experiencia y formación",
    cvButton: "Descargar CV",
    contactTitle: "Ponte en Contacto",
    contactSubtitle: "Conectemos y construyamos algo increíble juntos",
    emailLabel: "Enviar Email a",
    footer: "© 2025 Juan Jose Núñez. Ubicado en Cali, Colombia. | Ingeniero de Sistemas",
  },
  en: {
    greeting: "Hi, I'm",
    role: "Systems Engineer | Full Stack",
    location: "Based in Cali, Colombia",
    aboutTitle: "About Me",
    whoTitle: "Who I Am",
    whoP1: (s1: string, s2: string) => <><span className={s1}>Systems Engineer</span> in training (9th semester) specialized in <span className={s2}>Full Stack development</span>. I combine solid backend knowledge with a comprehensive understanding of the frontend, allowing me to create complete solutions from architecture and business logic to user experience.</>,
    whoP2: "Passionate about learning, committed to building scalable solutions, and maintaining analytical thinking to solve complex problems. Ready to grow professionally in a collaborative environment.",
    skillsTitle: "My Skills",
    skillBackend: "Backend & Business Logic",
    skillBackendDesc: "REST APIs, data modeling, authentication, access control, scalable architectures",
    skillDb: "Databases",
    skillDbDesc: "Relational and non-relational modeling, efficient schema design, query optimization",
    skillFrontend: "Frontend & UX",
    skillFrontendDesc: "React, Next.js, functional interfaces, API consumption, state management",
    skillSoft: "Soft Skills",
    skillSoftDesc: "Effective communication, collaborative teamwork, analytical thinking, continuous learning mindset, complex problem solving",
    projectsTitle: "Projects",
    projectsSubtitle: "Some of my featured projects and completed work",
    projects: [
      { title: "The Carolina Clean Up", desc: "Freelance website for a residential cleaning company in North Carolina. Over 10 years of experience delivering high-quality cleaning services." },
      { title: "HFC Construction Services", desc: "Website for a construction company specializing in high-quality remodeling: kitchens, bathrooms, and whole-home renovations in Charlotte, NC. Founded by Hugo Correa with over 27 years of experience." },
      { title: "LWYS", desc: "Conversational legal advisory system for Colombia with a chatbot integrated via n8n and a PostgreSQL database. Provides quick and organized access to specialized lawyers, solving misinformation and streamlining the contact and scheduling process." },
    ],
    viewProject: "View Project",
    cvTitle: "My Resume",
    cvSubtitle: "Download my CV to learn more about my experience and education",
    cvButton: "Download CV",
    contactTitle: "Get in Touch",
    contactSubtitle: "Let's connect and build something amazing together",
    emailLabel: "Send Email to",
    footer: "© 2025 Juan Jose Núñez. Based in Cali, Colombia. | Systems Engineer",
  },
};

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/juan-jose-nu%C3%B1ez-a3a8ab2b7/",
    label: "LinkedIn",
    handle: "Juan José Núñez",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:juanjonuhe127@gmail.com",
    label: "Enviar Email a",
    handle: "juanjonuhe127@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Xyah27",
    label: "Github",
    handle: "Xyah27",
  },
];

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = translations[lang];
  const [revealedChars, setRevealedChars] = useState(1);
  const name1 = "Juan";
  const name2 = "José";
  
  useEffect(() => {
    const maxChars = Math.max(name1.length, name2.length);
    if (revealedChars < maxChars) {
      const timer = setTimeout(() => {
        setRevealedChars(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [revealedChars]);

  return (
    <div className="bg-black relative overflow-x-hidden">
      <Particles
        className="fixed inset-0 z-0"
        quantity={100}
      />
      
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-start w-screen h-screen overflow-hidden bg-gradient-to-bl from-purple-950/40 via-purple-900/10 to-black relative pt-32">
        
        <div className="flex flex-col items-center justify-center z-10">
          <p className="text-sm md:text-base text-purple-300/70 mb-4 animate-fade-in tracking-wide">
            {t.greeting}
          </p>
          
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-purple-500/0 via-purple-400/50 to-purple-500/0 mb-8" />
          
          <h1 className="py-3.5 px-0.5 text-4xl text-transparent bg-gradient-to-r from-purple-200 to-purple-400 cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text flex gap-4 items-center">
            <span className="inline-flex">
              {name1.split('').map((letter, index) => (
                <span
                  key={`name1-${index}`}
                  className="inline-block transition-all duration-500 ease-out"
                  style={{
                    opacity: index < revealedChars ? 1 : 0,
                    transform: index < revealedChars ? 'translateX(0)' : 'translateX(-20px)',
                    width: index < revealedChars ? 'auto' : '0',
                    overflow: 'hidden',
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="inline-flex">
              {name2.split('').map((letter, index) => (
                <span
                  key={`name2-${index}`}
                  className="inline-block transition-all duration-500 ease-out"
                  style={{
                    opacity: index < revealedChars ? 1 : 0,
                    transform: index < revealedChars ? 'translateX(0)' : 'translateX(20px)',
                    width: index < revealedChars ? 'auto' : '0',
                    overflow: 'hidden',
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-purple-500/0 via-purple-400/50 to-purple-500/0 mt-8" />
          
          <div className="mt-20 text-center animate-fade-in">
            <h2 className="text-sm text-purple-300/80">
              {t.role}
            </h2>
            <p className="mt-6 text-xs text-purple-400/60">
              {t.location}
            </p>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center py-8 relative z-10 bg-gradient-to-b from-black to-black">
        <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1 h-2 bg-purple-500/70 rounded-full"></div>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="flex justify-center py-4 relative z-10">
        <button
          onClick={() => setLang(lang === "es" ? "en" : "es")}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/50 bg-purple-950/50 text-purple-200 hover:bg-purple-900/50 hover:border-purple-400/50 transition-all duration-300 text-sm"
        >
          <span>{lang === "es" ? "EN" : "ES"}</span>
        </button>
      </div>

      {/* About Me Section */}
      <section id="about" className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black py-20 relative">
        <div className="px-6 mx-auto max-w-6xl lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-purple-100 sm:text-4xl mb-4">
              {t.aboutTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-100 mb-6 text-center">{t.whoTitle}</h3>
                <p className="text-purple-300/80 leading-relaxed mb-4">
                    {t.whoP1("font-semibold text-purple-200", "font-semibold text-purple-300")}
                </p>
                <p className="text-purple-300/80 leading-relaxed">
                  {t.whoP2}
                </p>
              </div>
            </Card>

            <Card className="opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-100 mb-6 text-center">{t.skillsTitle}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-200 font-semibold mb-2">{t.skillBackend}</h4>
                    <p className="text-purple-300/70 text-sm">
                      {t.skillBackendDesc}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-200 font-semibold mb-2">{t.skillDb}</h4>
                    <p className="text-purple-300/70 text-sm">
                      {t.skillDbDesc}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-200 font-semibold mb-2">{t.skillFrontend}</h4>
                    <p className="text-purple-300/70 text-sm">
                      {t.skillFrontendDesc}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-purple-200 font-semibold mb-2">{t.skillSoft}</h4>
                    <p className="text-purple-300/70 text-sm">
                      {t.skillSoftDesc}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Tech Stack */}
          <div>
            <Marquee className="py-8">
              <MarqueeFade side="left" className="from-black" />
              <MarqueeFade side="right" className="from-black" />
              <MarqueeContent autoFill={true} pauseOnHover={false} speed={40}>
                {[
  {
    name: 'Python',
    svg: (
      <svg viewBox="0 0 128 128">
        <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
      </svg>
    ),
  },
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 128 128">
        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
      </svg>
    ),
  },
  {
    name: 'Angular',
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="m52.864 64h23.28l-12.375-25.877zm10.946-62.974-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635zm-15.766 73.974-7.265 18.176-13.581 0.056 36.608-81.079s26.531 56.561 38.19 81.417l-13.074-0.287-8.042-18.58-17.173 0.082z" fill="#c4473a"></path>
      </svg>
    ),
  },
  {
    name: 'Git',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
      </svg>
    ),
  },
  {
    name: 'Android Studio',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#073042" d="M51.3 17.7H23.2C17.6 17.7 13 22.3 13 28c-.2 5.5 4.2 10.1 9.7 10.3h28.9l-.3-20.6z"></path><path fill="#4285F4" d="M115 109.3H23.2c-5.7 0-10.2-4.6-10.2-10.3V27.9c0 5.7 4.6 10.3 10.2 10.4h76.9s15-1.3 15 10v61z"></path><path fill="#3870B2" d="M72.2 72.9C76.3 69.8 77.1 64 74 60c-1.7-2.2-4.3-3.6-7.1-3.7h.3c.5-.1 1.1-.1 1.6 0v-5.7c0-.7-.3-1.3-.9-1.6-.9-.5-2-.2-2.5.7-.2.3-.3.6-.2 1v5.8c-5 .8-8.5 5.5-7.7 10.6v.1c.4 2.4 1.7 4.6 3.7 6l-16.9 36.2h11l7.8-16.6c.9-2 3.3-2.9 5.4-1.9.8.4 1.5 1.1 1.9 1.9l8.1 16.6h11.2L72.2 72.9zm-5.7-1.6c-3.2 0-5.7-2.6-5.7-5.8 0-3.2 2.6-5.7 5.8-5.6 1.5 0 2.8.6 3.9 1.6 2.3 2.2 2.3 5.8.1 8.1-1 1-2.5 1.7-4.1 1.7z"></path><path fill="#FFF" d="M45.2 22.7h39.4v7.2H45.2v-7.2z"></path><path fill="#073042" d="M63.5 59.8c3.1 0 5.7 2.6 5.6 5.8 0 3.1-2.6 5.7-5.8 5.6-3.1 0-5.6-2.6-5.6-5.7 0-1.5.6-2.9 1.7-4s2.6-1.7 4.1-1.7zm2.2-3.3v-6c0-.7-.3-1.3-.9-1.6-.9-.5-2-.2-2.5.7-.2.3-.3.6-.2 1v5.8c-5 .8-8.5 5.5-7.7 10.6v.1c.4 2.4 1.7 4.6 3.7 6l-21.3 45.7c-.8 1.6-.7 3.6.4 5.1 1.6 2.3 4.7 2.9 7 1.3.8-.5 1.4-1.3 1.8-2.1l14.2-30.4c.9-2 3.3-2.9 5.4-1.9.8.4 1.5 1.1 1.9 1.9L82 122.8c1.2 2.5 4.2 3.5 6.7 2.3 2.5-1.2 3.5-4.2 2.3-6.7L69.1 72.9c4-3.2 4.7-9.1 1.5-13.1-1.2-1.6-2.9-2.7-4.9-3.3"></path><path fill="#3DDC84" d="M78.8 29.1c-1.5 0-2.7-1.1-2.7-2.6 0-.7.3-1.5.8-2 1.1-1 2.7-1 3.8 0 .5.5.8 1.2.8 1.9-.1 1.5-1.2 2.6-2.7 2.7M49.2 29c-1.5 0-2.7-1.2-2.7-2.6 0-.7.3-1.4.8-1.9.9-1.1 2.6-1.3 3.7-.4h.1c1.1 1 1.2 2.7.2 3.8l-.3.4c-.5.5-1.2.8-1.9.8m30.5-16.2l5.3-9.2c.3-.5.1-1.1-.3-1.5-.5-.2-1-.1-1.3.3L77.8 12C69 8.1 59 8.1 50.3 12l-5.4-9.4c-.2-.3-.6-.6-1-.6s-.8.2-1 .6c-.2.3-.2.8 0 1.1l5.4 9.2C38.9 18 32.8 27.6 31.9 38.2h64.2c-.8-10.7-7-20.2-16.4-25.3"></path><path fill="#073042" d="M105.6 58.1h-4.2c-.2.1-.4.3-.4.6v66.5c0 .3.2.5.5.5h4.4c5.1 0 9.2-4.2 9.2-9.2V48.8c0 5.1-4.1 9.2-9.2 9.2h-.3z"></path>
      </svg>
    ),
  },
  {
    name: 'Bootstrap',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#7952B3" d="M11.398 121.43v-17.738h5.047q2.3 0 3.649 1.126 1.348 1.125 1.348 2.931 0 1.51-.816 2.623-.817 1.113-2.252 1.583v.05q1.794.21 2.87 1.36 1.076 1.138 1.076 2.969 0 2.276-1.632 3.686-1.633 1.41-4.12 1.41zm2.078-15.858v5.727h2.128q1.707 0 2.684-.816.977-.83.977-2.326 0-2.585-3.402-2.585zm0 7.595v6.383h2.82q1.831 0 2.833-.866 1.014-.866 1.014-2.375 0-3.142-4.28-3.142zm17.466 8.563q-2.808 0-4.49-1.769-1.67-1.781-1.67-4.713 0-3.191 1.744-4.985 1.744-1.793 4.713-1.793 2.832 0 4.416 1.744 1.595 1.744 1.595 4.836 0 3.031-1.719 4.862-1.707 1.818-4.589 1.818zm.148-11.553q-1.954 0-3.092 1.336-1.138 1.323-1.138 3.661 0 2.252 1.15 3.55 1.15 1.3 3.08 1.3 1.967 0 3.019-1.275 1.063-1.274 1.063-3.624 0-2.375-1.063-3.662-1.052-1.286-3.019-1.286zm14.696 11.553q-2.808 0-4.49-1.769-1.67-1.781-1.67-4.713 0-3.191 1.744-4.985 1.744-1.793 4.713-1.793 2.832 0 4.416 1.744 1.596 1.744 1.596 4.836 0 3.031-1.72 4.862-1.707 1.818-4.589 1.818zm.148-11.553q-1.954 0-3.092 1.336-1.138 1.323-1.138 3.661 0 2.252 1.15 3.55 1.15 1.3 3.08 1.3 1.967 0 3.019-1.275 1.063-1.274 1.063-3.624 0-2.375-1.063-3.662-1.052-1.286-3.019-1.286zm15.277 11.133q-.717.396-1.893.396-3.327 0-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.191v1.732H58.02v7.137q0 1.274.433 1.819.432.544 1.434.544.767 0 1.324-.42zm1.942-.34v-2.177q1.657 1.224 3.649 1.224 2.672 0 2.672-1.78 0-.508-.235-.854-.223-.359-.619-.631-.383-.272-.915-.482-.52-.223-1.126-.458-.84-.334-1.484-.668-.63-.346-1.064-.767-.42-.433-.643-.977-.21-.544-.21-1.274 0-.89.408-1.571.408-.693 1.088-1.15.68-.47 1.547-.706.878-.235 1.806-.235 1.645 0 2.944.57v2.053q-1.398-.916-3.217-.916-.569 0-1.026.136-.458.124-.792.36-.322.234-.507.568-.173.322-.173.718 0 .494.173.828.185.334.532.594.346.26.841.47.495.21 1.126.458.84.321 1.509.668.668.334 1.138.767.47.42.717.977.26.556.26 1.323 0 .94-.42 1.633-.409.693-1.102 1.15-.692.458-1.595.681-.903.223-1.893.223-1.954 0-3.39-.755zm17.391.34q-.717.396-1.893.396-3.327 0-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.191v1.732h-3.191v7.137q0 1.274.433 1.819.432.544 1.434.544.767 0 1.324-.42zm9.315-10.49q-.532-.408-1.534-.408-1.299 0-2.177 1.224-.866 1.225-.866 3.34v6.457h-2.028v-12.666h2.028v2.61h.05q.433-1.336 1.323-2.078.89-.755 1.992-.755.791 0 1.212.174zm11.271 10.61h-2.029v-1.98h-.05q-1.323 2.277-3.895 2.277-1.893 0-2.97-1.002-1.063-1.002-1.063-2.66 0-3.55 4.18-4.13l3.798-.533q0-3.228-2.61-3.228-2.288 0-4.131 1.558v-2.078q1.868-1.187 4.305-1.187 4.465 0 4.465 4.725zm-2.029-6.407-3.055.42q-1.41.198-2.128.705-.717.495-.717 1.769 0 .928.656 1.522.668.58 1.769.58 1.509 0 2.486-1.05.99-1.064.99-2.685zm7.929 4.577h-.05v7.657h-2.028v-18.493h2.029v2.226h.049q1.497-2.523 4.379-2.523 2.449 0 3.822 1.707 1.373 1.694 1.373 4.552 0 3.179-1.546 5.096-1.546 1.905-4.23 1.905-2.462 0-3.798-2.128zm-.05-5.109v1.77q0 1.57 1.015 2.671 1.027 1.089 2.597 1.089 1.844 0 2.883-1.41 1.05-1.41 1.05-3.922 0-2.115-.976-3.315-.977-1.2-2.647-1.2-1.77 0-2.845 1.237-1.077 1.225-1.077 3.08zM27.235 2.051c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 0 1-.491-.491V25.993a.491.491 0 0 1 .491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 32.262H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24V72.05h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z"></path>
      </svg>
    ),
  },
  {
    name: 'CSS',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#1572B6" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
      </svg>
    ),
  },
  {
    name: 'Django',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#092E20" d="M15.091 41.64h7v32.403c-3.59.682-6.227.955-9.09.955C4.455 74.998 0 71.134 0 63.724c0-7.136 4.728-11.772 12.046-11.772 1.136 0 2 .09 3.045.363zm0 16.31c-.818-.272-1.5-.363-2.363-.363-3.546 0-5.591 2.182-5.591 6 0 3.727 1.954 5.773 5.545 5.773.773 0 1.41-.046 2.41-.182z"></path><path fill="#092E20" d="M33.227 52.45v16.228c0 5.59-.409 8.272-1.636 10.59-1.137 2.229-2.637 3.637-5.728 5.183l-6.5-3.091c3.091-1.455 4.59-2.727 5.545-4.682 1-2 1.32-4.318 1.32-10.41V52.45zm-7-10.773h7v7.182h-7zm11.229 12.364c3.09-1.454 6.045-2.09 9.273-2.09 3.59 0 5.954.954 7 2.818.59 1.045.772 2.409.772 5.318v14.227c-3.136.455-7.09.773-10 .773-5.863 0-8.5-2.046-8.5-6.591 0-4.91 3.5-7.182 12.091-7.91v-1.545c0-1.273-.636-1.727-2.409-1.727-2.59 0-5.5.727-8.228 2.137v-5.41zM48.41 65.178c-4.636.454-6.136 1.182-6.136 3 0 1.363.864 2 2.773 2 1.045 0 2-.09 3.363-.318zm9.502-11.637c4.136-1.09 7.545-1.59 11-1.59 3.591 0 6.182.817 7.728 2.409 1.455 1.5 1.909 3.135 1.909 6.636v13.727h-7V61.27c0-2.682-.91-3.682-3.41-3.682-.954 0-1.817.09-3.227.5v16.636h-7zm23.357 25c2.455 1.273 4.909 1.864 7.5 1.864 4.59 0 6.545-1.864 6.545-6.319v-.136c-1.363.682-2.727.955-4.545.955-6.137 0-10.046-4.046-10.046-10.455 0-7.955 5.773-12.455 16-12.455 3 0 5.773.318 9.137 1l-2.397 5.05c-1.864-.364-.15-.05-1.558-.186v.728l.09 2.954.046 3.818c.046.955.046 1.91.091 2.864v1.91c0 6-.5 8.817-2 11.135-2.182 3.41-5.954 5.092-11.318 5.092-2.728 0-5.09-.41-7.546-1.364V78.54zm13.91-20.91h-.728c-1.363-.045-2.954.318-4.046 1-1.681.955-2.545 2.682-2.545 5.137 0 3.5 1.727 5.5 4.818 5.5.955 0 1.728-.182 2.636-.454v-2.41c0-.817-.045-1.727-.045-2.681l-.045-3.227-.046-2.319v-.545zm21.548-5.771c7 0 11.273 4.409 11.273 11.545 0 7.319-4.454 11.91-11.546 11.91-7 0-11.318-4.41-11.318-11.5 0-7.365 4.455-11.956 11.591-11.956zm-.137 17.818c2.682 0 4.274-2.228 4.274-6.091 0-3.818-1.546-6.091-4.227-6.091-2.774 0-4.365 2.228-4.365 6.09 0 3.865 1.591 6.092 4.318 6.092z"></path>
      </svg>
    ),
  },
  {
    name: 'Express',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#fff" d="M40.53 77.82V50.74H42V55a5.57 5.57 0 00.48-.6 7.28 7.28 0 016.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 01.32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 01-5.88-3.88v10.77zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0056 65.27a11.77 11.77 0 00-.26-9.68 6.77 6.77 0 00-7.13-3.94 6.59 6.59 0 00-5.89 4.87 33.4 33.4 0 00-.72 3.8zM88.41 64a7.92 7.92 0 01-7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 011.2-7.5 8.37 8.37 0 018.71-4.67 8 8 0 017.1 6.09 41.09 41.09 0 01.69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.47c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.69 7.91zM91.39 64.1h1.42a5.69 5.69 0 003.34 4.9 8.73 8.73 0 007.58-.2 3.41 3.41 0 002-3.35 3.09 3.09 0 00-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0194 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 019.76-.15 5.14 5.14 0 012.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 00-3 .91 3 3 0 00-1.74 3 3 3 0 002 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 013.1 4.07 4.81 4.81 0 01-2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 01-1.94-4.75zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 00-3.54-4.18 8.73 8.73 0 00-5.61.27 3.41 3.41 0 00-2.47 3.25 3.14 3.14 0 002.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 011.94.59 5 5 0 01.27 9.31 11.13 11.13 0 01-9 .09 6.24 6.24 0 01-3.76-6.06h1.3a7.29 7.29 0 0011.1 4.64 3.57 3.57 0 001.92-3.34 3.09 3.09 0 00-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 01-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 019.92-.11 5.23 5.23 0 012.51 5.13zM38.1 70.51a2.29 2.29 0 01-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 01-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 012.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 012.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 000 1.49c2.39 3.17 4.76 6.35 7.2 9.61zM70.92 50.66v1.4a7.25 7.25 0 00-7.72 7.49v11h-1.43V50.74h1.4v4.06c1.73-2.96 4.4-4.06 7.75-4.14zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16c-.26 6.36 4.33 10.2 10.2 8.24a6.09 6.09 0 003.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 01-3.88 5.93 9.4 9.4 0 01-10.95-1.4 9.85 9.85 0 01-2.46-5.78c0-.34-.13-.68-.2-1q-.01-.89-.01-1.74zm1.69-.43h14.47c-.09-4.61-3-7.88-6.88-7.91-4.32-.06-7.41 3.14-7.6 7.89z"></path>
      </svg>
    ),
  },
  {
    name: 'HTML',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#E44D26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
      </svg>
    ),
  },
  {
    name: 'Java',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"></path><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fillRule="evenodd" clipRule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"></path><path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"></path>
      </svg>
    ),
  },
  {
    name: 'MySQL',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#00618A" d="M0 91.313h4.242V74.566l6.566 14.598c.773 1.77 1.832 2.391 3.914 2.391s3.098-.621 3.871-2.391l6.566-14.598v16.746h4.242V74.594c0-1.633-.652-2.422-2-2.828-3.223-1.004-5.383-.137-6.363 2.039l-6.441 14.41-6.238-14.41c-.937-2.176-3.14-3.043-6.359-2.039-1.348.406-2 1.195-2 2.828zM32.93 77.68h4.238v9.227c-.039.5.16 1.676 2.484 1.715h9.223V77.633h4.25c.02 0-.008 14.984-.008 15.047.023 3.695-4.582 4.496-6.707 4.559H33.02v-2.852l13.414-.004c2.73-.285 2.406-1.645 2.406-2.098v-1.113h-9.012c-4.195-.039-6.863-1.871-6.898-3.977-.004-.191.09-9.422 0-9.516zm0 0"></path><path fill="#E48E00" d="M56.391 91.313h12.195c1.426 0 2.813-.301 3.914-.816 1.836-.84 2.73-1.984 2.73-3.48v-3.098c0-1.223-1.016-2.367-3.016-3.125-1.059-.41-2.367-.625-3.629-.625h-5.141c-1.711 0-2.527-.516-2.73-1.656-.039-.137-.039-.246-.039-.383V76.2c0-.109 0-.219.039-.355.203-.867.652-1.113 2.16-1.25l.41-.027h12.109v-2.824H63.488c-1.711 0-2.609.109-3.426.352-2.527.789-3.629 2.039-3.629 4.215v2.473c0 1.902 2.16 3.535 5.789 3.914l1.223.055h4.406c.164 0 .324 0 .449.027 1.344.109 1.914.355 2.324.844.211.195.332.473.324.758v2.477c0 .297-.203.68-.609 1.004-.367.328-.98.543-1.793.598l-.449.027H56.391zm45.297-4.922c0 2.91 2.164 4.539 6.523 4.867l1.227.055h11.051v-2.828h-11.133c-2.488 0-3.426-.625-3.426-2.121V71.738h-4.238V86.39zm-23.75.148V76.457c0-2.559 1.801-4.113 5.355-4.602a7.976 7.976 0 0 1 1.145-.082h8.047c.41 0 .777.027 1.188.082 3.555.488 5.352 2.043 5.352 4.602v10.082c0 2.078-.762 3.188-2.523 3.914l4.18 3.77h-4.926l-3.379-3.051-3.402.215H84.44a9.23 9.23 0 0 1-2.492-.352c-2.699-.734-4.008-2.152-4.008-4.496zm4.578-.246c0 .137.039.273.082.438.246 1.172 1.348 1.824 3.023 1.824h3.852l-3.539-3.195h4.926l3.086 2.789c.57-.305.941-.766 1.074-1.363.039-.137.039-.273.039-.41v-9.668c0-.109 0-.246-.039-.383-.246-1.09-1.348-1.715-2.984-1.715h-6.414c-1.879 0-3.105.816-3.105 2.098zm0 0"></path><path fill="#00618A" d="M124.219 67.047c-2.605-.07-4.598.172-6.301.891-.484.203-1.258.207-1.336.813.266.281.309.699.52 1.039.406.66 1.094 1.539 1.707 2l2.074 1.484c1.273.777 2.699 1.223 3.93 2 .723.461 1.441 1.039 2.148 1.559.348.254.582.656 1.039.816v-.074c-.238-.305-.301-.723-.52-1.039l-.965-.965c-.941-1.25-2.137-2.348-3.41-3.262-1.016-.727-3.281-1.711-3.707-2.891l-.074-.074c.719-.078 1.563-.34 2.223-.516 1.117-.301 2.113-.223 3.262-.52l1.559-.449v-.293c-.582-.598-.996-1.387-1.633-1.93-1.656-1.41-3.469-2.824-5.336-4.004-1.035-.652-2.312-1.074-3.41-1.629-.367-.187-1.016-.281-1.262-.594-.574-.734-.887-1.664-1.332-2.52l-2.668-5.633c-.562-1.285-.93-2.555-1.633-3.707-3.363-5.535-6.988-8.875-12.602-12.156-1.191-.699-2.633-.973-4.148-1.332l-2.449-.148c-.496-.211-1.012-.82-1.48-1.113-1.859-1.176-6.629-3.73-8.008-.371-.867 2.121 1.301 4.191 2.078 5.266.543.754 1.242 1.598 1.629 2.445.258.555.301 1.113.52 1.703.539 1.453 1.008 3.031 1.707 4.375.352.68.738 1.395 1.184 2 .273.371.742.539.816 1.113-.457.641-.484 1.633-.742 2.445-1.16 3.652-.723 8.191.965 10.898.516.828 1.734 2.609 3.41 1.926 1.465-.598 1.137-2.445 1.555-4.078.098-.367.039-.641.223-.887v.074l1.336 2.668c.988 1.59 2.738 3.25 4.223 4.371.773.582 1.379 1.59 2.375 1.93V68.6h-.074c-.195-.297-.496-.422-.742-.664-.582-.57-1.227-1.277-1.703-1.93-1.352-1.832-2.547-3.84-3.633-5.93-.52-.996-.973-2.098-1.41-3.113-.168-.391-.164-.984-.516-1.184-.48.742-1.187 1.344-1.559 2.223-.594 1.402-.668 3.117-.891 4.891l-.148.074c-1.031-.25-1.395-1.312-1.777-2.223-.973-2.305-1.152-6.02-.297-8.672.219-.687 1.219-2.852.813-3.484-.191-.633-.828-1-1.184-1.484a11.7 11.7 0 0 1-1.187-2.074c-.793-1.801-1.164-3.816-2-5.633-.398-.871-1.074-1.75-1.629-2.523-.617-.855-1.305-1.484-1.781-2.52-.168-.367-.398-.957-.148-1.336.078-.254.195-.359.445-.441.43-.332 1.629.109 2.074.293 1.191.496 2.184.965 3.191 1.633.48.32.969.941 1.555 1.113h.668c1.043.238 2.211.07 3.188.367 1.723.523 3.27 1.34 4.668 2.227 4.273 2.695 7.766 6.535 10.156 11.117.387.738.551 1.441.891 2.223.684 1.578 1.543 3.203 2.223 4.746s1.34 3.094 2.297 4.375c.504.672 2.453 1.031 3.336 1.406.621.262 1.637.535 2.223.891 1.125.676 2.211 1.48 3.266 2.223.523.375 2.141 1.188 2.223 1.855zM91.082 38.805a5.26 5.26 0 0 0-1.332.148v.074h.074c.258.535.715.879 1.035 1.336l.742 1.555.074-.07c.461-.324.668-.844.668-1.633-.187-.195-.211-.437-.371-.668-.211-.309-.621-.48-.891-.742zm0 0"></path>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="64"></circle><path fill="url(#a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"></path><path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs>
      </svg>
    ),
  },
  {
    name: 'NPM',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
      </svg>
    ),
  },
  {
    name: 'NumPy',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#4DABCF" d="m55.012 26.006-21.38-10.789L10.154 26.93l21.969 11.027Zm9.808 4.951L87.241 42.28 63.982 53.955l-22-11.043Zm29.948-15.581 23.037 11.552L97.2 37.272 74.735 25.938ZM84.853 10.4 64.113 0 43.598 10.24 64.97 21.014ZM68.64 99.702V128l25.122-12.537-.023-28.31ZM93.727 77.27l-.028-28.012-25.06 12.458V89.74Zm30.158-5.246v28.41l-21.43 10.69-.017-28.279zm0-9.935V34.25l-21.47 10.673.016 28.068z"></path><path fill="#4c75cf" d="m59.77 61.716-16.918-8.512V89.97s-20.7-44.033-22.612-47.99c-.246-.513-1.263-1.07-1.522-1.209-3.731-1.947-14.603-7.45-14.603-7.45v64.977l15.04 8.063V72.382s20.478 39.346 20.689 39.78c.214.429 2.257 4.57 4.459 6.028 2.92 1.939 15.458 9.477 15.458 9.477z"></path>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M85.988 76.075c.632-5.262.443-6.034 4.362-5.182l.995.088c3.014.137 6.957-.485 9.272-1.561 4.986-2.313 7.942-6.177 3.026-5.162-11.215 2.313-11.986-1.483-11.986-1.483C103.5 45.204 108.451 22.9 104.178 17.44 92.524 2.548 72.35 9.59 72.012 9.773l-.108.021c-2.216-.461-4.695-.735-7.481-.78-5.075-.083-8.926 1.331-11.847 3.546 0 0-35.989-14.827-34.315 18.646.356 7.121 10.207 53.882 21.956 39.758 4.294-5.164 8.444-9.531 8.444-9.531 2.061 1.369 4.528 2.067 7.116 1.816l.2-.17c-.062.641-.035 1.268.081 2.01-3.027 3.383-2.137 3.977-8.189 5.222-6.122 1.262-2.525 3.508-.178 4.095 2.848.713 9.433 1.722 13.884-4.509l-.177.711c1.188.95 1.107 6.827 1.275 11.026.168 4.199.45 8.117 1.306 10.429.856 2.31 1.866 8.261 9.819 6.557 6.646-1.426 11.727-3.476 12.19-22.545"></path><path d="M71.208 102.77c-3.518 0-5.808-1.36-7.2-2.674-2.1-1.981-2.933-4.534-3.43-6.059l-.215-.637c-1.002-2.705-1.341-6.599-1.542-11.613a199.25 199.25 0 01-.075-2.352c-.017-.601-.038-1.355-.068-2.146a15.157 15.157 0 01-3.997 1.264c-2.48.424-5.146.286-7.926-.409-1.961-.49-3.999-1.506-5.16-3.076-3.385 2.965-6.614 2.562-8.373 1.976-3.103-1.035-5.88-3.942-8.491-8.89-1.859-3.523-3.658-8.115-5.347-13.646-2.94-9.633-4.808-19.779-4.974-23.109-.522-10.427 2.284-17.883 8.34-22.16 9.555-6.749 24.03-2.781 29.307-.979 3.545-2.137 7.716-3.178 12.43-3.102 2.532.041 4.942.264 7.181.662 2.335-.734 6.949-1.788 12.23-1.723 9.73.116 17.793 3.908 23.316 10.966 3.941 5.036 1.993 15.61.48 21.466-2.127 8.235-5.856 16.996-10.436 24.622 1.244.009 3.045-.141 5.607-.669 5.054-1.044 6.531 1.666 6.932 2.879 1.607 4.867-5.378 8.544-7.557 9.555-2.792 1.297-7.343 2.086-11.071 1.915l-.163-.011-.979-.086-.097.816-.093.799c-.25 9.664-1.631 15.784-4.472 19.829-2.977 4.239-7.116 5.428-10.761 6.209a16.146 16.146 0 01-3.396.383zm-7.402-35.174c2.271 1.817 2.47 5.236 2.647 11.626.022.797.043 1.552.071 2.257.086 2.134.287 7.132 1.069 9.244.111.298.21.602.314.922.872 2.672 1.31 4.011 5.081 3.203 3.167-.678 4.794-1.287 6.068-3.101 1.852-2.638 2.888-7.941 3.078-15.767l3.852.094-3.826-.459.112-.955c.367-3.148.631-5.424 2.736-6.928 1.688-1.207 3.613-1.09 5.146-.814-1.684-1.271-2.15-2.765-2.274-3.377l-.321-1.582.902-1.34c5.2-7.716 9.489-17.199 11.767-26.018 2.34-9.062 1.626-13.875.913-14.785-9.446-12.071-25.829-7.088-27.539-6.521l-.29.156-1.45.271-.743-.154c-2.047-.425-4.321-.66-6.76-.7-3.831-.064-6.921.841-9.455 2.764l-1.758 1.333-2.041-.841c-4.358-1.782-17.162-5.365-23.918-.58-3.75 2.656-5.458 7.861-5.078 15.47.125 2.512 1.833 12.021 4.647 21.245 3.891 12.746 7.427 16.979 8.903 17.472.257.087.926-.433 1.591-1.231 4.326-5.203 8.44-9.54 8.613-9.723l2.231-2.347 2.697 1.792c1.087.723 2.286 1.132 3.518 1.209l6.433-5.486-.932 9.51c-.021.214-.031.504.053 1.044l.28 1.803-1.213 1.358-.14.157 3.534 1.632 1.482-1.853z"></path><path fill="#336791" d="M103.646 64.258c-11.216 2.313-11.987-1.484-11.987-1.484 11.842-17.571 16.792-39.876 12.52-45.335C92.524 2.547 72.35 9.59 72.013 9.773l-.109.019c-2.216-.459-4.695-.733-7.482-.778-5.075-.083-8.925 1.33-11.846 3.545 0 0-35.99-14.826-34.316 18.647.356 7.121 10.207 53.882 21.956 39.758 4.294-5.164 8.443-9.531 8.443-9.531 2.061 1.369 4.528 2.067 7.115 1.816l.201-.17c-.062.641-.034 1.268.08 2.01-3.026 3.383-2.138 3.977-8.188 5.222-6.123 1.262-2.526 3.508-.177 4.095 2.847.713 9.433 1.722 13.883-4.509l-.178.711c1.186.95 2.019 6.179 1.879 10.919s-.233 7.994.702 10.536c.935 2.541 1.866 8.261 9.82 6.557 6.646-1.425 10.09-5.116 10.57-11.272.34-4.377 1.109-3.73 1.158-7.644l.618-1.853c.711-5.934.113-7.848 4.208-6.957l.995.087c3.014.138 6.958-.485 9.273-1.561 4.986-2.314 7.943-6.177 3.028-5.162z"></path><path fill="#fff" d="M71.61 100.394c-6.631.001-8.731-5.25-9.591-7.397-1.257-3.146-1.529-15.358-1.249-25.373a1.286 1.286 0 012.57.072c-.323 11.551.136 22.018 1.066 24.346 1.453 3.632 3.656 6.809 9.887 5.475 5.915-1.269 8.13-3.512 9.116-9.23.758-4.389 2.254-16.874 2.438-19.338a1.285 1.285 0 012.563.191c-.192 2.564-1.682 15.026-2.469 19.584-1.165 6.755-4.176 9.819-11.11 11.306a15.462 15.462 0 01-3.221.364zM35.659 74.749a5.343 5.343 0 01-1.704-.281c-4.307-1.437-8.409-8.451-12.193-20.849-2.88-9.438-4.705-19.288-4.865-22.489-.475-9.49 1.97-16.205 7.265-19.957 10.476-7.423 28.1-.354 28.845-.05a1.285 1.285 0 01-.972 2.379v.001c-.17-.07-17.07-6.84-26.392-.229-4.528 3.211-6.607 9.175-6.18 17.729.135 2.696 1.84 12.311 4.757 21.867 3.378 11.067 7.223 18.052 10.548 19.16.521.175 2.109.704 4.381-2.026 4.272-5.14 8.197-9.242 8.236-9.283a1.286 1.286 0 011.856 1.778c-.039.04-3.904 4.081-8.116 9.148-1.995 2.398-3.908 3.102-5.466 3.102zm55.92-10.829a1.284 1.284 0 01-1.065-2.004c11.971-17.764 16.173-39.227 12.574-43.825-4.53-5.788-10.927-8.812-19.012-8.985-5.987-.13-10.746 1.399-11.523 1.666l-.195.079c-.782.246-1.382-.183-1.608-.684a1.29 1.29 0 01.508-1.631l.346-.142-.017.005.018-.006c1.321-.483 6.152-1.933 12.137-1.864 8.947.094 16.337 3.545 21.371 9.977 2.382 3.044 2.387 10.057.015 19.24-2.418 9.362-6.968 19.425-12.482 27.607a1.282 1.282 0 01-1.067.567zm.611 8.223c-2.044 0-3.876-.287-4.973-.945-1.128-.675-1.343-1.594-1.371-2.081-.308-5.404 2.674-6.345 4.195-6.774-.212-.32-.514-.697-.825-1.086-.887-1.108-2.101-2.626-3.037-4.896-.146-.354-.606-1.179-1.138-2.133-2.883-5.169-8.881-15.926-5.028-21.435 1.784-2.549 5.334-3.552 10.566-2.992-1.539-4.689-8.869-19.358-26.259-19.643-5.231-.088-9.521 1.521-12.744 4.775-7.217 7.289-6.955 20.477-6.952 20.608a1.284 1.284 0 11-2.569.067c-.016-.585-.286-14.424 7.695-22.484 3.735-3.772 8.651-5.634 14.612-5.537C75.49 7.77 82.651 13.426 86.7 18.14c4.412 5.136 6.576 10.802 6.754 12.692.133 1.406-.876 1.688-1.08 1.729l-.463.011c-5.135-.822-8.429-.252-9.791 1.695-2.931 4.188 2.743 14.363 5.166 18.709.619 1.108 1.065 1.909 1.269 2.404.796 1.93 1.834 3.227 2.668 4.269.733.917 1.369 1.711 1.597 2.645.105.185 1.603 2.399 10.488.565 2.227-.459 3.562-.066 3.97 1.168.803 2.429-3.702 5.261-6.196 6.42-2.238 1.039-5.805 1.696-8.892 1.696zm-3.781-3.238c.281.285 1.691.775 4.612.65 2.596-.112 5.335-.677 6.979-1.439 2.102-.976 3.504-2.067 4.231-2.812l-.404.074c-5.681 1.173-9.699 1.017-11.942-.465a4.821 4.821 0 01-.435-.323c-.243.096-.468.159-.628.204-1.273.357-2.589.726-2.413 4.111zm-36.697 7.179c-1.411 0-2.896-.191-4.413-.572-1.571-.393-4.221-1.576-4.18-3.519.045-2.181 3.216-2.835 4.411-3.081 4.312-.888 4.593-1.244 5.941-2.955.393-.499.882-1.12 1.548-1.865.99-1.107 2.072-1.669 3.216-1.669.796 0 1.45.271 1.881.449 1.376.57 2.524 1.948 2.996 3.598.426 1.488.223 2.92-.572 4.032-2.608 3.653-6.352 5.582-10.828 5.582zm-5.817-3.98c.388.299 1.164.699 2.027.916 1.314.328 2.588.495 3.79.495 3.662 0 6.601-1.517 8.737-4.506.445-.624.312-1.415.193-1.832-.25-.872-.87-1.665-1.509-1.931-.347-.144-.634-.254-.898-.254-.142 0-.573 0-1.3.813-.614.686-1.055 1.246-1.446 1.741-1.678 2.131-2.447 2.854-7.441 3.883-1.218.252-1.843.506-2.153.675zm9.882-5.928a1.286 1.286 0 01-1.269-1.09 6.026 6.026 0 01-.064-.644c-3.274-.062-6.432-1.466-8.829-3.968-3.031-3.163-4.411-7.545-3.785-12.022.68-4.862.426-9.154.289-11.46a25.514 25.514 0 01-.063-1.425c.002-.406.01-1.485 3.615-3.312 1.282-.65 3.853-1.784 6.661-2.075 4.654-.48 7.721 1.592 8.639 5.836 2.478 11.46.196 16.529-1.47 20.23-.311.688-.604 1.34-.838 1.97l-.207.557c-.88 2.36-1.641 4.399-1.407 5.923a1.287 1.287 0 01-1.075 1.466l-.197.014zM44.634 35.922l.051.918c.142 2.395.406 6.853-.31 11.969-.516 3.692.612 7.297 3.095 9.888 1.962 2.048 4.546 3.178 7.201 3.178h.055c.298-1.253.791-2.575 1.322-4l.206-.553c.265-.712.575-1.401.903-2.13 1.604-3.564 3.6-8 1.301-18.633-.456-2.105-1.56-3.324-3.375-3.726-3.728-.824-9.283 1.98-10.449 3.089zm7.756-.545c-.064.454.833 1.667 2.001 1.829 1.167.163 2.166-.785 2.229-1.239.063-.455-.833-.955-2.002-1.118-1.167-.163-2.166.073-2.228.528zm2.27 2.277l-.328-.023c-.725-.101-1.458-.558-1.959-1.223-.176-.233-.464-.687-.407-1.091.082-.593.804-.947 1.933-.947.253 0 .515.019.78.055.616.086 1.189.264 1.612.5.733.41.787.866.754 1.103-.091.653-1.133 1.626-2.385 1.626zm-1.844-2.201c.037.28.73 1.205 1.634 1.33l.209.015c.834 0 1.458-.657 1.531-.872-.077-.146-.613-.511-1.631-.651a4.72 4.72 0 00-.661-.048c-.652-.001-1.001.146-1.082.226zm35.121-1.003c.063.455-.832 1.668-2.001 1.83-1.168.162-2.167-.785-2.231-1.24-.062-.454.834-.955 2.002-1.117 1.168-.164 2.166.074 2.23.527zm-2.27 2.062c-1.125 0-2.094-.875-2.174-1.442-.092-.681 1.029-1.199 2.185-1.359.254-.036.506-.054.749-.054.997 0 1.657.293 1.723.764.043.306-.191.777-.595 1.201-.266.28-.826.765-1.588.87l-.3.02zm.759-2.427c-.223 0-.455.017-.69.049-1.162.161-1.853.628-1.82.878.039.274.78 1.072 1.75 1.072l.239-.017c.634-.089 1.11-.502 1.337-.741.356-.375.498-.727.481-.848-.021-.157-.449-.393-1.297-.393zm3.194 26.453a1.285 1.285 0 01-1.067-2c2.736-4.087 2.235-8.256 1.751-12.286-.207-1.718-.42-3.493-.364-5.198.056-1.753.278-3.199.494-4.599.255-1.657.496-3.224.396-5.082a1.286 1.286 0 012.567-.138c.114 2.124-.159 3.896-.423 5.611-.204 1.323-.415 2.691-.466 4.29-.049 1.509.144 3.112.348 4.808.516 4.287 1.099 9.146-2.167 14.023-.248.37-.655.571-1.069.571z"></path><path d="M2.835 103.184a26.23 26.23 0 014.343-.338c2.235 0 3.874.52 4.914 1.456.962.832 1.534 2.106 1.534 3.667 0 1.586-.469 2.834-1.353 3.744-1.196 1.274-3.146 1.924-5.356 1.924-.676 0-1.3-.026-1.819-.156v7.021H2.835v-17.318zm2.263 8.45c.494.13 1.118.182 1.872.182 2.729 0 4.394-1.326 4.394-3.744 0-2.314-1.638-3.432-4.134-3.432-.988 0-1.742.078-2.132.182v6.812zm22.23 2.47c0 4.654-3.225 6.683-6.267 6.683-3.406 0-6.032-2.496-6.032-6.475 0-4.212 2.756-6.682 6.24-6.682 3.615-.001 6.059 2.626 6.059 6.474zm-9.984.13c0 2.756 1.586 4.836 3.822 4.836 2.184 0 3.821-2.054 3.821-4.888 0-2.132-1.065-4.836-3.77-4.836s-3.873 2.496-3.873 4.888zm12.557 3.926c.676.442 1.872.91 3.016.91 1.664 0 2.444-.832 2.444-1.872 0-1.092-.649-1.69-2.34-2.314-2.262-.806-3.328-2.054-3.328-3.562 0-2.028 1.638-3.692 4.342-3.692 1.274 0 2.393.364 3.095.78l-.572 1.664a4.897 4.897 0 00-2.574-.728c-1.352 0-2.106.78-2.106 1.716 0 1.04.755 1.508 2.393 2.132 2.184.832 3.302 1.924 3.302 3.796 0 2.21-1.716 3.77-4.706 3.77-1.378 0-2.652-.338-3.536-.858l.57-1.742zm13.365-13.859v3.614h3.275v1.742h-3.275v6.786c0 1.56.441 2.444 1.716 2.444a5.09 5.09 0 001.326-.156l.104 1.716c-.441.182-1.144.312-2.027.312-1.066 0-1.925-.338-2.471-.962-.649-.676-.884-1.794-.884-3.276v-6.864h-1.95v-1.742h1.95v-3.016l2.236-.598zm16.536 3.615c-.053.91-.104 1.924-.104 3.458v7.306c0 2.886-.572 4.654-1.794 5.747-1.222 1.144-2.99 1.508-4.576 1.508-1.508 0-3.172-.364-4.187-1.04l.572-1.742c.832.52 2.132.988 3.692.988 2.34 0 4.056-1.222 4.056-4.394v-1.404h-.052c-.702 1.17-2.054 2.106-4.004 2.106-3.12 0-5.356-2.652-5.356-6.137 0-4.264 2.782-6.682 5.668-6.682 2.185 0 3.381 1.144 3.927 2.184h.052l.104-1.898h2.002zm-2.366 4.966c0-.39-.026-.728-.13-1.04-.416-1.326-1.534-2.418-3.198-2.418-2.185 0-3.744 1.846-3.744 4.758 0 2.47 1.248 4.524 3.718 4.524 1.404 0 2.678-.884 3.172-2.34.13-.39.183-.832.183-1.222v-2.262zm5.901-1.04c0-1.482-.026-2.756-.104-3.926h2.003l.077 2.47h.104c.572-1.69 1.95-2.756 3.484-2.756.26 0 .441.026.649.078v2.158a3.428 3.428 0 00-.779-.078c-1.612 0-2.757 1.222-3.068 2.938a6.44 6.44 0 00-.104 1.066v6.708h-2.262v-8.658zm9.517 2.782c.052 3.094 2.027 4.368 4.315 4.368 1.639 0 2.626-.286 3.484-.65l.39 1.638c-.806.364-2.184.78-4.186.78-3.874 0-6.188-2.548-6.188-6.344 0-3.796 2.236-6.787 5.902-6.787 4.108 0 5.2 3.614 5.2 5.928 0 .468-.052.832-.078 1.066h-8.839zm6.708-1.638c.025-1.456-.599-3.718-3.172-3.718-2.314 0-3.328 2.132-3.511 3.718h6.683z"></path><path fill="#336791" d="M84.371 117.744a8.016 8.016 0 004.056 1.144c2.314 0 3.666-1.222 3.666-2.99 0-1.638-.936-2.574-3.302-3.484-2.86-1.014-4.628-2.496-4.628-4.966 0-2.73 2.262-4.758 5.668-4.758 1.794 0 3.094.416 3.874.858l-.624 1.846a6.98 6.98 0 00-3.328-.832c-2.392 0-3.302 1.43-3.302 2.626 0 1.638 1.065 2.444 3.484 3.38 2.964 1.145 4.472 2.574 4.472 5.148 0 2.704-2.002 5.044-6.136 5.044-1.69 0-3.536-.494-4.473-1.118l.573-1.898zm27.586 5.33a94.846 94.846 0 01-6.708-2.028c-.364-.13-.728-.26-1.066-.26-4.16-.156-7.722-3.224-7.722-8.866 0-5.616 3.432-9.23 8.164-9.23 4.758 0 7.853 3.692 7.853 8.866 0 4.498-2.08 7.384-4.992 8.398v.104c1.742.442 3.64.858 5.122 1.118l-.651 1.898zm-1.872-11.414c0-3.51-1.819-7.125-5.538-7.125-3.822 0-5.694 3.536-5.668 7.333-.026 3.718 2.028 7.072 5.564 7.072 3.615 0 5.642-3.276 5.642-7.28zm5.329-8.684h2.263v15.626h7.488v1.898h-9.751v-17.524z"></path>
      </svg>
    ),
  },
  {
    name: 'Postman',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#f37036" d="M113.117 26.066C92.168-1.062 53.191-6.07 26.062 14.883c-27.125 20.953-32.128 59.93-11.175 87.055 20.957 27.124 59.937 32.124 87.058 11.167 27.114-20.953 32.118-59.918 11.172-87.039Zm0 0"></path>
        <path fill="#fff" d="M91.078 24.164a10.038 10.038 0 0 0-5.781 2.426 10.028 10.028 0 0 0-1.54 13.465 10.028 10.028 0 0 0 13.276 2.715h.002v.001l.156.155a10.63 10.63 0 0 0 1.965-1.45A10.341 10.341 0 0 0 99 27.107v-.002l-8.844 8.789-.156-.155 8.844-8.793a10.038 10.038 0 0 0-7.766-2.78zM79.434 38.551c-4.24-.007-11.163 4.799-28.067 21.703l.084.086c-.092-.032-.185-.035-.185-.035l-6.364 6.308a1.035 1.035 0 0 0 .93 1.762l10.914-2.328a.307.307 0 0 0 .092-.17l.242.25-3.72 3.69h-.18l-22.086 22.26 7.086 6.824a1.254 1.254 0 0 0 1.476.149 1.327 1.327 0 0 0 .645-1.356l-1.035-4.5a.534.534 0 0 1 0-.62 117.285 117.285 0 0 0 26.738-17.583l-4.535-4.537.086-.014-2.69-2.689.172-.174.182.186-.094.091 7.137 7.293v-.003c13.68-12.954 23.39-23.367 20.865-30.375a3.83 3.83 0 0 0-1.107-2.208v.004a3.778 3.778 0 0 0-.483-.306c-.083-.088-.156-.178-.244-.264l-.066.066a3.778 3.778 0 0 0-.582-.29l.289-.292c-1.796-1.6-3.28-2.924-5.5-2.93zM30.94 92.21l-5.171 5.172v.004a1.03 1.03 0 0 0-.457 1.125 1.035 1.035 0 0 0 .921.789l12.672.875-7.965-7.965z"></path>
        <path fill="#f37036" d="M91.95 23.31a11.047 11.047 0 0 0-7.759 3.17 10.988 10.988 0 0 0-2.39 11.641c-4.741-2.03-11.155 1.51-31.106 21.457a.932.932 0 0 0-.037.094 1.242 1.242 0 0 0-.119.062l-6.309 6.364a1.97 1.97 0 0 0-.363 2.324 2.012 2.012 0 0 0 1.707.984l.313-.203 8.424-1.797-4.03 4.067a.873.873 0 0 0-.054.166l-19.75 19.799a.798.798 0 0 0-.192.238l-5.086 5.09a1.967 1.967 0 0 0-.414 2.043 1.995 1.995 0 0 0 1.656 1.265l12.618.88a1.01 1.01 0 0 0 .52-.415.886.886 0 0 0 0-1.035l-.026-.025a2.243 2.243 0 0 0 .705-.58 2.237 2.237 0 0 0 .406-1.876l-.984-4.187a126.725 126.725 0 0 0 26.334-16.861 1.091 1.091 0 0 0 .248.103c.254-.019.492-.128.672-.308 13.55-12.83 21.515-21.622 21.515-28.602a8.03 8.03 0 0 0-.431-2.85 10.957 10.957 0 0 0 3.845.83l-.015.004a11.219 11.219 0 0 0 5.183-1.45.775.775 0 0 0 .004.001.835.835 0 0 0 .617-.055 9.398 9.398 0 0 0 2.07-1.652 10.873 10.873 0 0 0 3.258-7.758 10.873 10.873 0 0 0-3.257-7.758.93.93 0 0 0-.118-.091 11.045 11.045 0 0 0-7.656-3.078zm-.087 1.772a9.27 9.27 0 0 1 5.586 1.914l-8.068 8.117a.84.84 0 0 0-.076.098.83.83 0 0 0-.239.55.832.832 0 0 0 .313.65h.002l6.1 6.1a9.044 9.044 0 0 1-10.028-1.913c-2.586-2.6-3.336-6.504-1.953-9.891 1.383-3.39 4.68-5.605 8.363-5.625zm7.12 3.432a8.87 8.87 0 0 1 2.033 5.674 9.15 9.15 0 0 1-2.688 6.464 9.989 9.989 0 0 1-1.098.895L92.307 36.7l-.963-.963.265-.265 7.373-6.96zm-.366 4.193a.777.777 0 0 0-.55.031.731.731 0 0 0-.36.426.73.73 0 0 0 .05.559 2.226 2.226 0 0 1-.257 2.328.64.64 0 0 0-.195.488c.004.184.07.36.195.492a.58.58 0 0 0 .414 0 .68.68 0 0 0 .672-.207 3.573 3.573 0 0 0 .465-3.777v.004a.777.777 0 0 0-.434-.344zM79.34 39.43a5.584 5.584 0 0 1 3.31 1.226 4.756 4.756 0 0 0-2.681 1.34L57.162 64.701l-4.476-4.476c11.828-11.772 19.06-17.921 23.556-19.936a5.584 5.584 0 0 1 3.098-.86zm3.965 2.96a2.895 2.895 0 0 1 2.043.844 2.786 2.786 0 0 1 .879 2.121 2.869 2.869 0 0 1-.985 2.07l-24.25 21.106-2.617-2.617 22.887-22.68a2.895 2.895 0 0 1 2.043-.843zm2.994 6.698c-1.69 6.702-10.647 15.783-19.987 24.607l-3.777-3.773L86.3 49.088zM51.367 61.547l.274.27 3.513 3.513-9.63 2.06 5.843-5.843zm5.793 5.84.004.004 1.168 1.195a1.086 1.086 0 0 0 .018.084l.078.012.248.254.82.84-5.385.66 3.05-3.05zm3.867 4.076 3.578 3.576A126.992 126.992 0 0 1 38.75 91.695a1.44 1.44 0 0 0-.777 1.653l1.035 4.5a.31.31 0 0 1 0 .363.31.31 0 0 1-.414 0l-6.102-6.152L51.3 72.975l9.728-1.512zm-29.933 21.94.869.814 4.492 4.492-10.016-.648 4.655-4.659z"></path>
      </svg>
    ),
  },
  {
    name: 'PyTorch',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#EE4C2C" d="M100.1 38.3l-9.2 9.2c15.1 15.1 15.1 39.4 0 54.3-15.1 15.1-39.4 15.1-54.3 0-15.1-15.1-15.1-39.4 0-54.3l24-24 3.4-3.4V2L27.8 38.2C7.7 58.3 7.7 90.8 27.8 111s52.6 20.1 72.4 0c20.1-20.2 20.1-52.5-.1-72.7z"></path><circle fill="#EE4C2C" transform="rotate(-88.939 82.069 29.398) scale(.99997)" cx="82.1" cy="29.4" r="6.7"></circle>
      </svg>
    ),
  },
  {
    name: 'Spring',
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.077 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.35 78.405z" fill="#77bc1f"></path>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <svg viewBox="0 0 128 128">
        <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"></path>
      </svg>
    ),
  },
  {
    name: 'WordPress',
    svg: (
      <svg viewBox="0 0 128 128">
        <path fillRule="evenodd" clipRule="evenodd" fill="#494949" d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286C30.85.995 1.894 29.113 1.885 63.21c-.01 35.079 27.612 63.064 62.209 63.014zM63.993 4.63c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719a849.593 849.593 0 0126.618.008c1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58l19.349 57.56c2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113C74.333.881 34.431 9.317 19.728 34.922c5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zm10.117 77.971c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zm-8.456-2.078l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zm76.428-44.562c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z"></path>
      </svg>
    ),
  },
].map((tech, index) => (
                  <MarqueeItem key={index} className="mx-8">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <div className="w-full h-full [&>svg]:w-full [&>svg]:h-full">
                        {tech.svg}
                      </div>
                    </div>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </Marquee>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gradient-to-b from-black via-purple-950/30 to-black py-20 relative">
        <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-purple-100 sm:text-4xl mb-4">
              {t.projectsTitle}
            </h2>
            <p className="text-purple-300/70">
              {t.projectsSubtitle}
            </p>
          </div>

          <div className="w-full h-px bg-purple-900/50" />

          <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {[
              { techs: ["HTML", "CSS", "JavaScript"], url: "https://www.the-carolina-clean-up-services.com/" },
              { techs: ["WordPress", "PHP", "CSS"], url: "https://hfcconstruction.com" },
              { techs: ["Next.js", "NestJS", "TypeScript", "Tailwind", "n8n", "PostgreSQL"], url: "https://lwys.vercel.app/" },
            ].map((project, i) => (
              <Card key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-purple-100 mb-2">
                    {t.projects[i].title}
                  </h3>
                  <p className="text-purple-300/70 text-sm mb-4 flex-grow">
                    {t.projects[i].desc}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.techs.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-purple-900/50 text-purple-300/80 rounded">{tech}</span>
                    ))}
                  </div>
                  {project.url && (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-white border border-purple-500/50 hover:border-purple-400 rounded-lg px-3 py-1.5 transition-all duration-300 w-fit"
                    >
                      {t.viewProject} →
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section id="cv" className="bg-gradient-to-b from-black via-purple-950/20 to-black py-20 relative">
        <div className="px-6 mx-auto max-w-4xl lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-purple-100 sm:text-4xl mb-4">
              {t.cvTitle}
            </h2>
            <p className="text-purple-300/70 mb-10">
              {t.cvSubtitle}
            </p>
            <Link
              href="/cv-juan-jose-nunez.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all duration-300 text-sm hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t.cvButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gradient-to-b from-black via-purple-950/30 to-black flex items-center justify-center py-20 relative">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-purple-100 sm:text-4xl mb-4">
              {t.contactTitle}
            </h2>
            <p className="text-purple-300/70">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16 max-w-5xl">
            {socials.map((s) => (
              <Card key={s.label} className="animate-slide-up" style={{ animationDelay: `${['LinkedIn', 'Email', 'Github'].indexOf(s.label) * 0.15}s` }}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-purple-200 group-hover:text-white group-hover:bg-purple-900 border-purple-500 bg-purple-950 group-hover:border-purple-300 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-sm md:text-base lg:text-lg font-medium duration-150 text-purple-200 group-hover:text-white font-display break-words">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-xs md:text-sm text-center duration-1000 text-purple-300/70 group-hover:text-purple-200">
                      {s.label === "Enviar Email a" ? t.emailLabel : s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-purple-400/50 text-sm border-t border-purple-900/50 relative z-10">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
