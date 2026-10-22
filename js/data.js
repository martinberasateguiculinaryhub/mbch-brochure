
export const categories = [
  { id: "master", label: "Másteres" },
  { id: "grado", label: "Grado universitario" },
  { id: "fp", label: "Formación profesional" },
];

const defaultRequirements = {
  master:
    "Consulta con el equipo de admisiones los requisitos específicos de acceso a este programa.",
  grado:
    "Consulta con el equipo de admisiones las vías de acceso y la documentación académica necesaria.",
  fp:
    "Consulta los requisitos oficiales de acceso al ciclo formativo con el equipo de admisiones.",
};

function createProgram({
  id,
  title,
  category,
  area,
  duration = "",
  modality = [],
  image = "",
  summary = "",
  highlights = [],
  careerPaths = [],
  requirements = "",
  ctaLabel = "Solicitar información",
  ctaUrl = null,
  pdf = "",
}) {
  return {
    id,
    title,
    category,
    area,
    duration,
    modality,
    image,
    summary,
    highlights,
    careerPaths,
    requirements: requirements || defaultRequirements[category],
    ctaLabel,
    ctaUrl,
    pdf,
  };
}

export const programs = [
  {
    id: "75057_P_MFP",
    title: "Gestión en Alta Pastelería Profesional",
    category: "master",
    area: "Pastelería y repostería",
    duration: "15 meses",
    modality: ["Presencial"],
    image: "./assets/images/programs/alta-pasteleria.png",
    pdf: "./assets/documents/75057_P_MFP.pdf",
    summary:
      "Combina técnicas avanzadas de pastelería y confitería con creatividad, innovación y gestión empresarial para desarrollar propuestas de alta gama y gestionar proyectos profesionales del sector.",
    highlights: [
      "Fundamentos de pastelería clásica.",
      "Técnicas, tecnología y vanguardia en pastelería y repostería.",
      "Creatividad y desarrollo de nuevas elaboraciones.",
      "Dirección y gestión del negocio gastronómico.",
      "Prácticas curriculares y trabajo final de máster.",
    ],
    careerPaths: [
      "Jefe/a de partida de pastelería.",
      "Chef pastelero/a o pastry chef.",
      "Pastelero/a de obrador.",
      "Jefe/a de obrador.",
      "Desarrollador/a de productos pasteleros.",
      "Consultor/a culinario/a.",
      "Emprendedor/a de negocios de pastelería.",
    ],
  },

  {
    id: "75025_P_MFP",
    title: "Food & Beverage y Restauración de Marca",
    category: "master",
    area: "Food & Beverage y gestión de restauración",
    duration: "Consultar",
    modality: ["Presencial"],
        image: "./assets/images/programs/fnbp.png",
    pdf: "./assets/documents/75025_P_MFP.pdf",
    summary:
      "Desarrolla una visión integral de la gestión Food & Beverage y de los negocios de restauración de marca, desde las operaciones y los equipos hasta la experiencia de cliente y la rentabilidad.",
    highlights: [
      "Gestión de operaciones de alimentos y bebidas.",
      "Organización de procesos y estándares de servicio.",
      "Coordinación y liderazgo de equipos.",
      "Control de costes y rentabilidad.",
      "Experiencia de cliente y coherencia de marca.",
      "Gestión y desarrollo de conceptos de restauración.",
    ],
    careerPaths: [
      "Responsable de Food & Beverage.",
      "Director/a de operaciones de restauración.",
      "Responsable de restauración hotelera.",
      "Gestor/a de grupos de restauración.",
      "Consultor/a de operaciones y servicio.",
      "Responsable de desarrollo de conceptos gastronómicos.",
    ],
  },

  {
    id: "71025_O_MFP",
    title: "Food & Beverage y Restauración de Marca",
    category: "master",
    area: "Food & Beverage y gestión de restauración",
    duration: "Consultar",
    modality: ["Online"],
        image: "./assets/images/programs/fnbo.png",

    pdf: "./assets/documents/71025_O_MFP.pdf",
    summary:
      "Especialízate en la gestión de alimentos y bebidas y en el desarrollo de negocios de restauración de marca. Aprende a mejorar las operaciones, coordinar equipos y trabajar la experiencia del cliente y los indicadores de negocio.",
    highlights: [
      "Gestión de operaciones de alimentos y bebidas.",
      "Organización de procesos y estándares de servicio.",
      "Gestión de equipos y coordinación operativa.",
      "Control de costes y análisis de rentabilidad.",
      "Experiencia de cliente y posicionamiento de marca.",
      "Gestión de conceptos de restauración.",
    ],
    careerPaths: [
      "Responsable de Food & Beverage.",
      "Gestor/a de operaciones de restauración.",
      "Responsable de restauración en hoteles.",
      "Gestor/a de grupos y marcas de restauración.",
      "Consultor/a de operaciones gastronómicas.",
    ],
  },

  {
    id: "75035_P_MFP",
    title: "Sumillería, Sommelier Profesional y Cultura de las Bebidas",
    category: "master",
    area: "Vino, sumillería y bebidas",
    duration: "Consultar",
    modality: ["Presencial"],
        image: "./assets/images/programs/sumilleria.png",

    pdf: "./assets/documents/75035_P_MFP.pdf",
    summary:
      "Profundiza en la cultura del vino y las bebidas desde una perspectiva sensorial, gastronómica y profesional. Desarrolla competencias para seleccionar productos, diseñar cartas, recomendar maridajes y gestionar la oferta de bebidas.",
    highlights: [
      "Conocimiento y análisis sensorial de vinos.",
      "Cultura vitivinícola y regiones productoras.",
      "Cata y conocimiento de otras bebidas.",
      "Maridaje y armonías gastronómicas.",
      "Diseño y gestión de cartas de vinos y bebidas.",
      "Gestión de compras y conservación de la bodega.",
    ],
    careerPaths: [
      "Sumiller o sommelier profesional.",
      "Director/a de bebidas o beverage manager.",
      "Responsable de bodega en restauración.",
      "Asesor/a de vinos y bebidas.",
      "Responsable de compras de bebidas.",
      "Profesional de experiencias y eventos enológicos.",
    ],
  },

  {
    id: "71035_O_MFP",
    title: "Producto y Creatividad Gastronómica Sostenible",
    category: "master",
    area: "Producto, innovación y sostenibilidad",
    duration: "Consultar",
    modality: ["Online"],
        image: "./assets/images/programs/producto.png",

    pdf: "./assets/documents/71035_O_MFP.pdf",
    summary:
      "Explora el producto gastronómico como punto de partida para crear propuestas diferenciadas, innovadoras y sostenibles. Trabaja la creatividad culinaria, la identidad de producto y las tendencias del sector.",
    highlights: [
      "Análisis del producto y sus posibilidades gastronómicas.",
      "Creatividad y desarrollo de conceptos culinarios.",
      "Innovación aplicada a productos gastronómicos.",
      "Sostenibilidad y aprovechamiento responsable de recursos.",
      "Identidad, diferenciación y valor de marca.",
      "Análisis de tendencias y necesidades del consumidor.",
    ],
    careerPaths: [
      "Desarrollador/a de productos gastronómicos.",
      "Responsable de innovación culinaria.",
      "Consultor/a en creatividad gastronómica.",
      "Responsable de desarrollo de producto.",
      "Profesional de innovación y sostenibilidad alimentaria.",
      "Emprendedor/a de proyectos gastronómicos.",
    ],
  },

  {
    id: "75006_P_MFP",
    title: "Panadería Artesanal y Gestión del Obrador",
    category: "master",
    area: "Panadería y técnicas de obrador",
    duration: "Consultar",
    modality: ["Presencial"],
        image: "./assets/images/programs/panaderia.png",

    pdf: "./assets/documents/75006_P_MFP.pdf",
    summary:
      "Combina el conocimiento técnico de la panadería artesanal con la organización y gestión de un obrador profesional. Aprende a trabajar las materias primas, controlar los procesos de elaboración y planificar la producción.",
    highlights: [
      "Selección y conocimiento de harinas e ingredientes.",
      "Masas, fermentaciones y procesos de panificación.",
      "Técnicas de elaboración de pan artesanal.",
      "Control de calidad y regularidad del producto.",
      "Planificación y organización de la producción.",
      "Gestión de recursos y funcionamiento del obrador.",
    ],
    careerPaths: [
      "Panadero/a artesanal.",
      "Responsable de obrador.",
      "Jefe/a de producción de panadería.",
      "Desarrollador/a de productos de panadería.",
      "Responsable de calidad y procesos.",
      "Emprendedor/a de panaderías y obradores.",
    ],
  },

  {
    id: "71085_O_MFP",
    title: "Nutrición, Gastronomía y Diseño de Menús Saludables",
    category: "master",
    area: "Nutrición, salud y gastronomía",
    duration: "Consultar",
    modality: ["Online"],
        image: "./assets/images/programs/nutricion.png",

    pdf: "./assets/documents/71085_O_MFP.pdf",
    summary:
      "Integra los principios de la nutrición y la gastronomía para diseñar propuestas culinarias equilibradas y atractivas. Considera el valor nutricional, la planificación de menús y las necesidades de distintos entornos gastronómicos.",
    highlights: [
      "Fundamentos de nutrición aplicados a la gastronomía.",
      "Diseño y planificación de menús equilibrados.",
      "Selección de ingredientes y técnicas culinarias.",
      "Adaptación de propuestas a necesidades alimentarias.",
      "Calidad, variedad y atractivo sensorial de los platos.",
      "Planificación de menús para entornos profesionales.",
    ],
    careerPaths: [
      "Responsable de diseño y planificación de menús.",
      "Asesor/a de proyectos de gastronomía saludable.",
      "Consultor/a en desarrollo de propuestas gastronómicas.",
      "Responsable de oferta gastronómica en restauración colectiva.",
      "Profesional de innovación en alimentación y gastronomía.",
    ],
  },

  {
    id: "75065_P_MFP",
    title: "Negocio del Vino y Gestión Vinícola",
    category: "master",
    area: "Negocio del vino y gestión vinícola",
    duration: "10 meses",
    modality: ["Presencial"],
        image: "./assets/images/programs/vino-presencial.png",

    pdf: "./assets/documents/75065_P_MFP.pdf",
    summary:
      "Desarrolla una visión global del negocio vitivinícola, desde la gestión y el posicionamiento de marca hasta la comercialización, la internacionalización y el desarrollo de proyectos vinculados al vino.",
    highlights: [
      "Análisis de los retos y oportunidades del sector vitivinícola.",
      "Modelos de negocio, rentabilidad y toma de decisiones.",
      "Construcción de marca y posicionamiento del vino.",
      "Comercialización, distribución y expansión internacional.",
      "Innovación y sostenibilidad en la cadena de valor.",
      "Desarrollo de experiencias y proyectos de enoturismo.",
    ],
    careerPaths: [
      "Responsable de gestión de una bodega.",
      "Responsable comercial o de marketing vitivinícola.",
      "Gestor/a de distribución y comercialización de vinos.",
      "Consultor/a de negocio vitivinícola.",
      "Responsable de exportación.",
      "Gestor/a de proyectos de enoturismo.",
      "Emprendedor/a en el sector del vino.",
    ],
  },

  {
    id: "71065_O_MFP",
    title: "Negocio del Vino y Gestión Vinícola",
    category: "master",
    area: "Negocio del vino y gestión vinícola",
    duration: "12 meses",
    modality: ["Online"],
        image: "./assets/images/programs/vino-online.png",

    pdf: "./assets/documents/71065_O_MFP.pdf",
    summary:
      "Adquiere una visión estratégica del negocio vitivinícola y de los retos que afrontan bodegas, marcas y empresas vinculadas al vino. Profundiza en la gestión, el posicionamiento y la comercialización.",
    highlights: [
      "Análisis del mercado y de la cadena de valor del vino.",
      "Modelos de negocio, estrategia y rentabilidad.",
      "Marca, reputación y posicionamiento de productos vinícolas.",
      "Comercialización y expansión internacional.",
      "Innovación y sostenibilidad en el sector.",
      "Diseño y gestión de proyectos de enoturismo.",
    ],
    careerPaths: [
      "Responsable de gestión de bodegas.",
      "Responsable comercial o de marketing vitivinícola.",
      "Gestor/a de distribución y ventas de vino.",
      "Consultor/a de negocio vitivinícola.",
      "Responsable de exportación.",
      "Gestor/a de proyectos de enoturismo.",
      "Emprendedor/a en el sector del vino.",
    ],
  },

  {
    id: "71006_O_MFP",
    title: "Marketing Gastronómico",
    category: "master",
    area: "Marketing y comunicación gastronómica",
    duration: "Consultar",
    modality: ["Online"],
        image: "./assets/images/programs/alta-pasteleria.png",

    pdf: "./assets/documents/71006_O_MFP.pdf",
    summary:
      "Aprende a posicionar marcas y negocios gastronómicos mediante estrategias de marketing, comunicación y canales digitales. Desarrolla una visión orientada al cliente para diferenciar propuestas y mejorar su visibilidad.",
    highlights: [
      "Estrategia de marketing aplicada a la gastronomía.",
      "Posicionamiento y diferenciación de marca.",
      "Comportamiento del consumidor y análisis de mercado.",
      "Comunicación gastronómica y creación de contenidos.",
      "Marketing digital y canales de captación.",
      "Fidelización y experiencia de cliente.",
    ],
    careerPaths: [
      "Responsable de marketing gastronómico.",
      "Brand manager de marcas de alimentación o restauración.",
      "Responsable de comunicación gastronómica.",
      "Especialista en marketing digital para restauración.",
      "Consultor/a de posicionamiento y estrategia de marca.",
      "Emprendedor/a de proyectos gastronómicos.",
    ],
  },

  {
    id: "71095_O_MFP",
    title: "Diseño de Espacios y Entornos Gastronómicos",
    category: "master",
    area: "Diseño de espacios y experiencia gastronómica",
    duration: "Consultar",
    modality: ["Online"],
        image: "./assets/images/programs/alta-pasteleria.png",

    pdf: "./assets/documents/71095_O_MFP.pdf",
    summary:
      "Descubre cómo el diseño del espacio influye en la identidad de un negocio gastronómico y en la experiencia del cliente. Aprende a plantear entornos coherentes con el concepto de marca y las necesidades operativas.",
    highlights: [
      "Conceptualización de espacios gastronómicos.",
      "Identidad de marca aplicada al entorno físico.",
      "Diseño de la experiencia del cliente.",
      "Distribución funcional y relación entre espacios.",
      "Materiales, iluminación, atmósfera y percepción.",
      "Coherencia entre concepto, operación y experiencia.",
    ],
    careerPaths: [
      "Consultor/a de conceptos y espacios gastronómicos.",
      "Responsable de desarrollo de conceptos de restauración.",
      "Coordinador/a de proyectos de diseño gastronómico.",
      "Consultor/a de experiencia de cliente.",
      "Profesional de branding aplicado a espacios.",
      "Emprendedor/a de proyectos de restauración.",
    ],
  },

  {
    id: "71075_O_MFP",
    title: "Dirección y Gestión de Restaurantes",
    category: "master",
    area: "Dirección y gestión de negocios gastronómicos",
    duration: "Consultar",
    modality: ["Online"],
        image: "./assets/images/programs/alta-pasteleria.png",

    pdf: "./assets/documents/71075_O_MFP.pdf",
    summary:
      "Prepárate para dirigir un negocio de restauración y responder de sus resultados. Desarrolla competencias para definir el modelo de negocio, coordinar operaciones, liderar equipos y controlar costes.",
    highlights: [
      "Creación y desarrollo de modelos de negocio gastronómicos.",
      "Planificación financiera, costes y rentabilidad.",
      "Gestión de personas, liderazgo y organización de equipos.",
      "Operaciones de cocina, sala y servicio.",
      "Diseño de cartas y experiencia de cliente.",
      "Estrategia, posicionamiento y mejora continua.",
    ],
    careerPaths: [
      "Director/a de un negocio de restauración independiente.",
      "Gerente de restaurante.",
      "Responsable del área operativa de restauración.",
      "Consultor/a de negocios de restauración.",
      "Responsable de operaciones y desarrollo de negocio.",
      "Emprendedor/a de un proyecto de restauración.",
    ],
  },

  {
    id: "75047_P_MFP",
    title: "Dirección en Alta Cocina",
    category: "master",
    area: "Alta cocina y dirección gastronómica",
    duration: "10 meses",
    modality: ["Presencial"],
        image: "./assets/images/programs/alta-pasteleria.png",

    pdf: "./assets/documents/75047_P_MFP.pdf",
    summary:
      "Una formación orientada a perfeccionar las técnicas culinarias y desarrollar criterio para dirigir una cocina profesional. Combina excelencia gastronómica, creatividad, organización de equipos y visión de negocio.",
    highlights: [
      "Técnicas culinarias avanzadas y alta cocina.",
      "Creatividad y desarrollo de propuestas gastronómicas.",
      "Conocimiento del producto y técnicas de elaboración.",
      "Organización y dirección de equipos de cocina.",
      "Gestión de recursos y operaciones.",
      "Visión empresarial aplicada a proyectos gastronómicos.",
    ],
    careerPaths: [
      "Chef ejecutivo/a.",
      "Jefe/a de cocina.",
      "Responsable de desarrollo gastronómico.",
      "Consultor/a culinario/a.",
      "Responsable de proyectos de innovación gastronómica.",
      "Emprendedor/a de un negocio gastronómico.",
    ],
  },

  {
    id: "75105_P_Grado",
    title: "Dirección y Gestión Gastronómica",
    category: "grado",
    area: "Dirección, gestión e innovación gastronómica",
    duration: "Consultar",
    modality: ["Presencial"],
        image: "./assets/images/programs/alta-pasteleria.png",

    pdf: "./assets/documents/75105_P_Grado.pdf",
    summary:
      "Una formación universitaria que integra gastronomía, management, innovación y sostenibilidad para comprender y gestionar empresas del sector. Desarrolla competencias para analizar el entorno y participar en la evolución de proyectos gastronómicos.",
    highlights: [
      "Dirección y gestión de empresas gastronómicas.",
      "Conocimiento aplicado a la gastronomía.",
      "Sostenibilidad en el sector alimentario y gastronómico.",
      "Innovación y transformación del negocio.",
      "Diseño de experiencias y propuestas gastronómicas.",
      "Visión estratégica y comprensión del mercado.",
    ],
    careerPaths: [
      "Gestor/a de empresas gastronómicas.",
      "Responsable de operaciones de restauración.",
      "Coordinador/a de proyectos gastronómicos.",
      "Responsable de desarrollo de negocio.",
      "Profesional de innovación y experiencia gastronómica.",
      "Emprendedor/a del sector gastronómico.",
    ],
  },

  {
    id: "77002_P_CFGS",
    title: "Dirección de Cocina",
    category: "fp",
    area: "Cocina y dirección de operaciones culinarias",
    duration: "Consultar",
    modality: ["Presencial"],
        image: "./assets/images/programs/alta-pasteleria.png",

    pdf: "./assets/documents/77002_P_CFGS.pdf",
    summary:
      "Fórmate para organizar, coordinar y supervisar la producción culinaria en entornos profesionales. Desarrolla competencias técnicas y de gestión para planificar elaboraciones, coordinar equipos y garantizar la calidad de los procesos.",
    highlights: [
      "Organización y planificación de la producción en cocina.",
      "Elaboración de propuestas culinarias.",
      "Gestión de aprovisionamiento y materias primas.",
      "Coordinación de equipos y organización del trabajo.",
      "Control de calidad, higiene y seguridad alimentaria.",
      "Gestión de recursos y optimización de procesos.",
    ],
    careerPaths: [
      "Jefe/a de cocina.",
      "Segundo/a jefe/a de cocina.",
      "Responsable de producción culinaria.",
      "Jefe/a de partida.",
      "Responsable de cocina en restauración.",
      "Emprendedor/a de un negocio de restauración.",
    ],
  },

  {
    id: "77001_P_CFGM",
    title: "Cocina y Gastronomía",
    category: "fp",
    area: "Técnica culinaria y cocina profesional",
    duration: "Consultar",
    modality: ["Presencial"],
        image: "./assets/images/programs/alta-pasteleria.png",

    pdf: "./assets/documents/77001_P_CFGM.pdf",
    summary:
      "Adquiere las bases técnicas necesarias para trabajar en una cocina profesional. Aprende a preparar y conservar alimentos, elaborar platos y aplicar criterios de calidad, higiene y seguridad alimentaria.",
    highlights: [
      "Preparación y conservación de materias primas.",
      "Técnicas básicas de cocina y elaboración culinaria.",
      "Elaboraciones y presentación de platos.",
      "Organización del puesto de trabajo.",
      "Higiene y seguridad alimentaria.",
      "Aprovisionamiento y control de productos.",
    ],
    careerPaths: [
      "Cocinero/a.",
      "Ayudante de cocina.",
      "Empleado/a de economato y aprovisionamiento.",
      "Profesional de preparación y elaboración culinaria.",
      "Cocinero/a en restauración colectiva.",
      "Profesional de cocina en hoteles y empresas de restauración.",
    ],
  },

  {
    id: "ccff-cocina",
    title: "Ciclos Formativos de Cocina",
    category: "fp",
    area: "Formación profesional en cocina",
    duration: "Consultar",
    modality: ["Presencial"],
        image: "./assets/images/programs/alta-pasteleria.png",

    pdf: "./assets/documents/ccff-cocina.pdf",
    summary:
      "Descubre las opciones de formación profesional de Barcelona Culinary Hub relacionadas con la cocina y la gastronomía y encuentra el itinerario que mejor encaje con tus objetivos.",
    highlights: [
      "Formación profesional orientada al sector gastronómico.",
      "Aprendizaje de técnicas y procesos culinarios.",
      "Desarrollo de competencias para el entorno profesional.",
      "Conocimiento de estándares de calidad e higiene.",
      "Preparación para incorporarse al sector de la restauración.",
    ],
    careerPaths: [
      "Profesionales de cocina.",
      "Ayudantes y cocineros/as.",
      "Profesionales de producción culinaria.",
      "Perfiles técnicos del sector de la restauración.",
    ],
  },
];

export function getCategory(categoryId) {
  return categories.find((category) => category.id === categoryId);
}

export function getProgram(programId) {
  return programs.find((program) => program.id === programId);
}

export function filterPrograms({ category = "all", query = "" } = {}) {
  const normalizedQuery = query.trim().toLocaleLowerCase("es");

  return programs.filter((program) => {
    const matchesCategory =
      category === "all" || program.category === category;

    const searchableContent = [
      program.id,
      program.title,
      program.area,
      program.summary,
      ...program.highlights,
      ...program.careerPaths,
    ]
      .join(" ")
      .toLocaleLowerCase("es");

    const matchesQuery =
      !normalizedQuery || searchableContent.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}
