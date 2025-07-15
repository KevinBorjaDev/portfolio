export const experience = [
  {
    id: 1,
    date: 'Agosto 2022 - Diciembre 2024',
    position: 'Desarrollador Full stack',
    details: 'Diseñé y desarrollé nuevas funcionalidades del sistema web construido con microservicios utilizando NestJS además de creación de tablas y vistas en PostgreSQL para dichas funcionalidades. Implementé nuevas funcionalidades en el frontend en Angular 15, a partir de mockups en Figma y flujos definidos en tickets de Jira. Participé en daily stand-ups y en reuniones de User Acceptance Testing, donde usuarios finales probaban los módulos desarrollados y proporcionaban feedback directo para ajustes finales. Gestión correctamente las ramas en el sistema de control de versiones (Git) y coordinando con el equipo de despliegue.',
    technologies: ['Angular 15', 'NestJS', 'PostgreSQL', 'Microservicios', 'GitLab', 'Jira']
  },
  {
    id: 2,
    date: 'Agosto 2021 - Agosto 2022',
    position: 'Desarrollador Frontend',
    details: 'Encargado del mantenimiento y mejora continua del sistema web construido en Angular 11, abordando errores reportados por usuarios finales en ambientes de producción. Realicé análisis funcional y técnico de bugs, identificando sus causas y aplicando correcciones de forma eficiente sin generar regresiones. Colaboré en la revisión y limpieza progresiva del código, refactorizándolo con soporte de SonarQube, mejorando la calidad y mantenibilidad del proyecto. Implementé principios SOLID en el diseño de clases y componentes logrando una arquitectura más modular, desacoplada y fácil de extender dentro del equipo',
    technologies: ['Angular 11', 'SonarQube', 'SOLID']
  },
  {
    id: 3,
    date: 'Enero 2021 - Julio 2021',
    position: 'Practicante Programador Angular - Java',
    details: 'Desarrollé  módulos completos desde cero utilizando Angular 11 y Angular Material, tomando como referencia visual un sistema legacy. Adapté las funcionalidades legacy en el backend Java utilizando Spring Framework (sin Spring Boot), creando interfaces, sus implementaciones, y endpoints REST desde la lógica de negocio hasta la persistencia.',
    technologies: ['Angular 8', 'Spring', 'Java']
  },
]

export const projects = [
  {
    title: "Backend Web Eterna",
    status: "Completado",
    link: 'https://github.com/KevinBorjaDev/web-eterna-back',
    description:
      "Proyecto en donde se realizó el backend para un mini CRM donde se aplico una arquitectura por capas (controlador, servicio, modelo). También se implementó sesión de usuarios y validación de los mismos con cookies y tokens JWT",
    technologies: ["NestJS", "MongoDb"],
  },
  {
    title: "Palette Preview",
    status: "En progreso",
    link: 'https://github.com/KevinBorjaDev/verkko-ui-preview',
    description:
      "Aplicación que ayuda a previsualizar una paleta de colores tanto en web como en móvil. Además de permitirte exportar dicha paleta en distintos formatos (Css, Jetpack Compose, etc).",
    technologies: ["Angular 19"],
  },
]