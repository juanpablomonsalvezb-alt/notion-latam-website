export interface Servicio {
  icono: string;
  titulo: string;
  desc: string;
}
export interface Testimonio {
  nombre: string;
  cargo: string;
  texto: string;
}
export interface FAQ {
  pregunta: string;
  respuesta: string;
}
export interface RubroContent {
  hero: { headline: string; subheadline: string; cta: string };
  confianza: string[];
  sobre: { titulo: string; texto: string };
  servicios: Servicio[];
  testimonios: Testimonio[];
  faq: FAQ[];
  cta_final: { titulo: string; subtitulo: string; boton: string };
}
export interface Rubro {
  id: string;
  nombre: string;
  icono: string;
  desc: string;
  content: RubroContent;
}

export const RUBROS: Rubro[] = [
  {
    id: "restaurante",
    nombre: "Restaurante",
    icono: "🍽️",
    desc: "Comida, delivery, café, bar",
    content: {
      hero: {
        headline: "Sabores que te hacen volver",
        subheadline: "Cocina con ingredientes frescos del día, preparada con pasión y servida con calidez. Tu mesa está lista.",
        cta: "Reservar mi mesa",
      },
      confianza: ["Ingredientes frescos diarios", "Reserva en línea 24/7", "Más de 500 clientes felices", "Delivery en 30 minutos"],
      sobre: {
        titulo: "Nuestra historia detrás de cada plato",
        texto: "En {nombre} creemos que comer bien es uno de los placeres más simples y poderosos de la vida. Cada receta nace de años de tradición familiar combinada con técnicas modernas que resaltan los sabores auténticos de nuestra región.\n\nTrabajamos con productores locales para garantizar que cada ingrediente llegue fresco a tu mesa. Desde las primeras horas de la mañana nuestro equipo de cocina selecciona, prepara y crea con dedicación para que tu experiencia sea memorable.\n\nNos enorgullece ser un espacio donde las familias celebran, los amigos se reencuentran y cada visita se convierte en un recuerdo que vale la pena repetir.",
      },
      servicios: [
        { icono: "🥗", titulo: "Menú del día", desc: "Entrada, plato principal y postre con productos de temporada a precio especial." },
        { icono: "🚀", titulo: "Delivery express", desc: "Pedidos a domicilio en menos de 30 minutos dentro de la zona de cobertura." },
        { icono: "🎉", titulo: "Eventos privados", desc: "Salones para cumpleaños, reuniones corporativas y celebraciones familiares." },
        { icono: "☕", titulo: "Brunch de fin de semana", desc: "Desayunos tardíos con carta especial los sábados y domingos de 10am a 2pm." },
      ],
      testimonios: [
        { nombre: "Valentina Morales", cargo: "Cliente frecuente · Santiago", texto: "Llevo dos años viniendo cada semana y jamás me ha decepcionado. El servicio es impecable y la comida siempre está en su punto. Es mi lugar favorito para traer a la familia." },
        { nombre: "Andrés Cifuentes", cargo: "Empresario · Bogotá", texto: "Uso {nombre} para almuerzos de negocios y siempre quedo bien parado. El ambiente es profesional y la atención muy rápida. Altamente recomendado." },
        { nombre: "María José Herrera", cargo: "Madre de familia · Lima", texto: "El cumpleaños de mi hijo fue perfecto gracias al equipo de {nombre}. Se encargaron de todo, desde la decoración hasta el pastel. Volvería mil veces." },
      ],
      faq: [
        { pregunta: "¿Necesito reservar con anticipación?", respuesta: "Para fines de semana y grupos de más de 6 personas recomendamos reservar con al menos 24 horas de anticipación. Entre semana generalmente hay disponibilidad inmediata." },
        { pregunta: "¿Tienen opciones vegetarianas o veganas?", respuesta: "Sí, nuestra carta incluye una sección completa de opciones plant-based. También podemos adaptar muchos platos según necesidades dietéticas específicas." },
        { pregunta: "¿Cuál es el horario de atención?", respuesta: "Atendemos de lunes a domingo de 12pm a 10:30pm. El servicio de delivery está disponible de 12pm a 9pm todos los días." },
      ],
      cta_final: {
        titulo: "¿Listo para vivir la experiencia?",
        subtitulo: "Reserva tu mesa ahora y recibe un postre de bienvenida en tu primera visita.",
        boton: "Reservar ahora",
      },
    },
  },
  {
    id: "dentista",
    nombre: "Dentista",
    icono: "🦷",
    desc: "Clínica dental, odontología",
    content: {
      hero: {
        headline: "La sonrisa que siempre quisiste",
        subheadline: "Tratamientos dentales modernos, sin dolor y con resultados duraderos. Tu sonrisa es nuestra especialidad.",
        cta: "Agendar consulta gratis",
      },
      confianza: ["Primera consulta sin costo", "Sin dolor garantizado", "Tecnología de última generación", "Más de 10 años de experiencia"],
      sobre: {
        titulo: "Tu salud dental en manos expertas",
        texto: "En {nombre} combinamos experiencia clínica con la tecnología dental más avanzada para ofrecerte tratamientos precisos, cómodos y duraderos. Nuestro equipo de especialistas lleva más de una década transformando sonrisas en toda la región.\n\nEntendemos que visitar al dentista puede generar ansiedad. Por eso hemos diseñado un ambiente cálido, equipos de última generación y técnicas de sedación suave que hacen que cada consulta sea una experiencia tranquila y sin estrés.\n\nDesde revisiones preventivas hasta ortodoncia invisible y diseño de sonrisa, en {nombre} tienes todos los especialistas que necesitas en un solo lugar.",
      },
      servicios: [
        { icono: "✨", titulo: "Blanqueamiento dental", desc: "Resultados visibles desde la primera sesión. Hasta 8 tonos más blanco con tecnología LED." },
        { icono: "🦷", titulo: "Ortodoncia invisible", desc: "Alineadores transparentes Invisalign. Nadie notará que usas brackets." },
        { icono: "🔍", titulo: "Limpieza y revisión", desc: "Control preventivo completo con radiografías digitales y limpieza ultrasónica." },
        { icono: "💎", titulo: "Diseño de sonrisa", desc: "Transformación completa con carillas de porcelana, coronas y restauraciones estéticas." },
      ],
      testimonios: [
        { nombre: "Camila Rojas", cargo: "Profesora · Medellín", texto: "Llegué con mucho miedo porque hacía años no iba al dentista. El equipo de {nombre} fue increíblemente paciente y me explicó todo el proceso. El resultado fue mucho mejor de lo que esperaba." },
        { nombre: "Roberto Fuentes", cargo: "Contador · Buenos Aires", texto: "Me hicieron el blanqueamiento y la diferencia es brutal. Mis colegas me preguntaron qué había cambiado en mi aspecto. Todo el proceso fue rápido e indoloro." },
        { nombre: "Sofía Mendez", cargo: "Diseñadora · Ciudad de México", texto: "Terminé mi tratamiento de ortodoncia invisible en 8 meses. Los controles mensuales eran súper rápidos y el equipo siempre muy atento. Recomendado al 100%." },
      ],
      faq: [
        { pregunta: "¿La primera consulta realmente es gratis?", respuesta: "Sí, completamente. En la primera consulta realizamos una revisión general, tomamos radiografías digitales y elaboramos un plan de tratamiento personalizado sin ningún costo." },
        { pregunta: "¿Los tratamientos son dolorosos?", respuesta: "Usamos anestesia local de alta efectividad y técnicas modernas de sedación. La gran mayoría de nuestros pacientes describe los procedimientos como completamente indoloros." },
        { pregunta: "¿Aceptan seguros médicos o planes de salud?", respuesta: "Trabajamos con los principales seguros y también ofrecemos planes de pago en cuotas sin interés para que el costo nunca sea un obstáculo para tu salud dental." },
      ],
      cta_final: {
        titulo: "Tu sonrisa perfecta empieza hoy",
        subtitulo: "Agenda tu consulta gratuita ahora. Sin compromiso, sin listas de espera.",
        boton: "Agendar consulta gratis",
      },
    },
  },
  {
    id: "gym",
    nombre: "Gimnasio",
    icono: "💪",
    desc: "Gym, fitness, entrenamiento",
    content: {
      hero: {
        headline: "Transforma tu cuerpo, transforma tu vida",
        subheadline: "Equipamiento de alto rendimiento, entrenadores certificados y una comunidad que te impulsa a dar lo mejor de ti.",
        cta: "Probar 7 días gratis",
      },
      confianza: ["7 días gratis sin compromiso", "Entrenadores certificados", "Abierto 5am – 11pm", "Más de 1,200 miembros activos"],
      sobre: {
        titulo: "Más que un gym, una comunidad",
        texto: "En {nombre} sabemos que el cambio físico es solo el comienzo. Nuestro objetivo es ayudarte a construir hábitos que transformen tu vida completa: más energía, más confianza, más salud.\n\nContamos con más de 800 m² de equipamiento de última generación, 12 clases grupales diarias y un equipo de entrenadores especializados en fuerza, cardio, yoga, CrossFit y nutrición deportiva.\n\nDesde principiantes hasta atletas de alto rendimiento, en {nombre} tienes el espacio, las herramientas y el apoyo que necesitas para alcanzar tus metas reales.",
      },
      servicios: [
        { icono: "🏋️", titulo: "Sala de musculación", desc: "800+ equipos de última generación. Zona de pesas libres, máquinas y área funcional." },
        { icono: "🧘", titulo: "Clases grupales", desc: "12 clases diarias: yoga, spinning, HIIT, zumba, pilates y más. Incluidas en tu membresía." },
        { icono: "🥗", titulo: "Nutrición deportiva", desc: "Asesoría nutricional personalizada con nuestros especialistas certificados en tu meta específica." },
        { icono: "👟", titulo: "Entrenamiento personal", desc: "Planes 100% personalizados con tu propio entrenador. Resultados hasta 3x más rápidos." },
      ],
      testimonios: [
        { nombre: "Diego Castillo", cargo: "Ingeniero · Santiago", texto: "Bajé 18 kilos en 6 meses con el plan personalizado de {nombre}. Los entrenadores son excelentes y el ambiente te motiva a no faltar. Cambió mi vida completamente." },
        { nombre: "Paola Vargas", cargo: "Médica · Bogotá", texto: "Vengo hace 2 años y lo que más valoro es la calidad de las clases grupales. El spinning de las mañanas es adictivo. El equipo siempre está disponible para resolver dudas." },
        { nombre: "Matías González", cargo: "Deportista amateur · Montevideo", texto: "Después de probar varios gimnasios, {nombre} es el único donde me quedé. Las instalaciones son impecables y los entrenadores realmente saben de lo que hablan." },
      ],
      faq: [
        { pregunta: "¿Puedo probar antes de suscribirme?", respuesta: "Sí, ofrecemos 7 días completamente gratis sin necesidad de ingresar datos de tarjeta. Queremos que compruebes por ti mismo por qué somos diferentes." },
        { pregunta: "¿Tienen horarios para quien trabaja todo el día?", respuesta: "Abrimos de 5am a 11pm de lunes a viernes y de 7am a 9pm los fines de semana. También tienes acceso a clases en línea 24/7 con tu membresía." },
        { pregunta: "¿Puedo cancelar la membresía cuando quiera?", respuesta: "Absolutamente. Sin contratos de permanencia, sin penalidades. Creemos que te quedas porque quieres, no porque estás obligado." },
      ],
      cta_final: {
        titulo: "El mejor momento para empezar es hoy",
        subtitulo: "7 días gratis. Sin tarjeta. Sin excusas.",
        boton: "Empezar mis 7 días gratis",
      },
    },
  },
  {
    id: "salon",
    nombre: "Salón de belleza",
    icono: "💇",
    desc: "Peluquería, estética, nail art",
    content: {
      hero: {
        headline: "Brilla como mereces brillar",
        subheadline: "Cortes, color, tratamientos y uñas de la mano de estilistas apasionados. Porque cuidarte es el mejor regalo.",
        cta: "Reservar mi turno",
      },
      confianza: ["Reserva online en 2 minutos", "Productos premium certificados", "Estilistas con 5+ años de experiencia", "Garantía de satisfacción"],
      sobre: {
        titulo: "El lugar donde te transformas",
        texto: "En {nombre} creemos que sentirte bien empieza por verte bien. Somos un equipo de estilistas apasionados por el cabello y la estética que trabajamos con los mejores productos del mercado para cuidar tu imagen y tu salud capilar.\n\nCada cliente que entra a {nombre} recibe una atención personalizada. Analizamos tu tipo de cabello, tu estilo de vida y tus expectativas antes de hacer cualquier corte o tratamiento. El resultado es siempre un look que te define y te encanta.\n\nNuestro salón es un espacio donde puedes relajarte, desconectarte y salir sintiéndote nueva. Te esperamos.",
      },
      servicios: [
        { icono: "✂️", titulo: "Corte y peinado", desc: "Cortes personalizados según tu rostro y estilo. Con o sin planchado o rizado final." },
        { icono: "🎨", titulo: "Color y mechas", desc: "Balayage, californianas, tinturas sin amoníaco. Cuidamos el cabello mientras lo transformamos." },
        { icono: "💅", titulo: "Manicure y pedicure", desc: "Uñas semipermanentes, acrilicas, gel y nail art. Resultados que duran hasta 3 semanas." },
        { icono: "✨", titulo: "Tratamientos capilares", desc: "Keratina, hidratación profunda, botox capilar. Tu cabello sano y brillante desde la primera sesión." },
      ],
      testimonios: [
        { nombre: "Isabella Torres", cargo: "Modelo · Cali", texto: "Llevo tres años yendo a {nombre} y jamás me han fallado. Confío ciegamente en ellas para cualquier cambio de look. El ambiente es relajante y siempre salgo feliz." },
        { nombre: "Gabriela Ríos", cargo: "Ejecutiva · Lima", texto: "Me hice la keratina y quedé impresionada. Mi cabello pasó de ser inmanejable a estar perfecto todos los días. El servicio es muy profesional y el precio justo." },
        { nombre: "Fernanda Lara", cargo: "Estudiante universitaria · Santiago", texto: "Vine por primera vez recomendada por una amiga y ya soy clienta fija. El balayage que me hicieron fue exactamente lo que quería. Súper atentas y detallistas." },
      ],
      faq: [
        { pregunta: "¿Debo reservar con anticipación?", respuesta: "Recomendamos reservar, especialmente para fines de semana y para servicios como color o keratina. Puedes hacerlo online o por WhatsApp en minutos." },
        { pregunta: "¿Usan productos que dañen el cabello?", respuesta: "Trabajamos exclusivamente con líneas profesionales sin sulfatos agresivos ni amoníaco. Cuidamos la salud de tu cabello en cada servicio." },
        { pregunta: "¿Qué pasa si no quedé conforme?", respuesta: "Tu satisfacción está garantizada. Si algo no te gustó, lo corregimos sin costo adicional. Queremos que salgas feliz, siempre." },
      ],
      cta_final: {
        titulo: "Tu mejor versión te está esperando",
        subtitulo: "Reserva ahora y recibe 20% de descuento en tu primera visita.",
        boton: "Reservar con descuento",
      },
    },
  },
  {
    id: "clinica",
    nombre: "Clínica / Médico",
    icono: "🏥",
    desc: "Medicina general, especialistas",
    content: {
      hero: {
        headline: "Tu salud, nuestra prioridad",
        subheadline: "Atención médica de calidad, con especialistas comprometidos y tecnología de diagnóstico avanzada. Cuídese hoy.",
        cta: "Agendar cita médica",
      },
      confianza: ["Atención el mismo día", "Especialistas certificados", "Resultados en 24 horas", "Atención presencial y telemedicina"],
      sobre: {
        titulo: "Medicina con vocación y tecnología",
        texto: "En {nombre} reunimos a los mejores especialistas de la región bajo un mismo techo para ofrecerte una atención integral, humana y eficiente. Entendemos que ir al médico puede ser estresante, por eso hemos diseñado cada detalle para que tu experiencia sea cómoda y tranquilizadora.\n\nContamos con equipos de diagnóstico de última generación, laboratorio propio y sistema de telemedicina para consultas desde casa. Tu historial clínico digital siempre disponible, resultados en 24 horas y comunicación directa con tu médico.\n\nEn {nombre} la salud de tu familia está en las mejores manos.",
      },
      servicios: [
        { icono: "👨‍⚕️", titulo: "Medicina general", desc: "Consultas, chequeos preventivos, certificados médicos y derivaciones especializadas." },
        { icono: "🔬", titulo: "Laboratorio clínico", desc: "Exámenes de sangre, orina y más. Resultados digitales en menos de 24 horas." },
        { icono: "💻", titulo: "Telemedicina", desc: "Consulta con tu médico desde casa por videollamada. Disponible los 7 días de la semana." },
        { icono: "❤️", titulo: "Control crónico", desc: "Seguimiento personalizado para diabetes, hipertensión, colesterol y otras condiciones." },
      ],
      testimonios: [
        { nombre: "Jorge Medina", cargo: "Paciente frecuente · Buenos Aires", texto: "Llevo 4 años con el mismo médico en {nombre} y la atención siempre ha sido excelente. Me conocen, me recuerdan y siempre tienen tiempo para mis preguntas. Eso vale mucho." },
        { nombre: "Ana Gutiérrez", cargo: "Madre de familia · Bogotá", texto: "Traje a mi hijo por una emergencia y nos atendieron en menos de 20 minutos. El médico fue muy claro explicando el diagnóstico y el tratamiento. Me fui tranquila." },
        { nombre: "Luis Espinoza", cargo: "Adulto mayor · Santiago", texto: "El sistema de telemedicina de {nombre} cambió mi vida. Tengo movilidad reducida y ahora puedo hablar con mi médico sin salir de casa. Es muy fácil de usar." },
      ],
      faq: [
        { pregunta: "¿Pueden atenderme el mismo día?", respuesta: "Sí, reservamos cupos de atención inmediata todos los días. Para urgencias, la espera es de menos de 30 minutos." },
        { pregunta: "¿Trabajan con seguros o isapres?", respuesta: "Trabajamos con los principales seguros privados y bonificamos con Fonasa. También ofrecemos precios preferenciales para pacientes sin seguro." },
        { pregunta: "¿Cómo funciona la telemedicina?", respuesta: "Agendas tu cita online, recibes un enlace de videollamada y consultas desde tu celular o computadora. Simple como hacer una videollamada con un familiar." },
      ],
      cta_final: {
        titulo: "No esperes a que aparezcan los síntomas",
        subtitulo: "La prevención es el mejor tratamiento. Agenda tu chequeo hoy.",
        boton: "Agendar mi cita",
      },
    },
  },
  {
    id: "abogado",
    nombre: "Abogado",
    icono: "⚖️",
    desc: "Estudio jurídico, asesoría legal",
    content: {
      hero: {
        headline: "Tus derechos, nuestra misión",
        subheadline: "Asesoría legal clara, directa y efectiva. Porque entender la ley no debería ser complicado ni costoso.",
        cta: "Consulta inicial gratis",
      },
      confianza: ["Primera consulta sin costo", "Respuesta en menos de 24h", "15+ años de experiencia", "Más de 800 casos resueltos"],
      sobre: {
        titulo: "Derecho al servicio de las personas",
        texto: "En {nombre} ejercemos el derecho con un principio fundamental: la justicia debe ser accesible para todos, no solo para quienes pueden pagar tarifas prohibitivas. Llevamos más de 15 años resolviendo casos reales de personas y empresas con resultados concretos.\n\nNuestro equipo de abogados especializados en derecho civil, laboral, familiar y corporativo trabaja con absoluta confidencialidad, comunicación constante y resultados medibles. Cada cliente recibe atención directa del abogado a cargo, sin intermediarios.\n\nSi tienes un problema legal, en {nombre} tenemos la solución.",
      },
      servicios: [
        { icono: "👨‍👩‍👧", titulo: "Derecho de familia", desc: "Divorcios, custodias, pensiones alimenticias y acuerdos de bienes. Soluciones humanas y justas." },
        { icono: "💼", titulo: "Derecho laboral", desc: "Despidos injustificados, acosos, contratos y negociaciones colectivas. Defendemos tus derechos." },
        { icono: "🏠", titulo: "Derecho inmobiliario", desc: "Compraventa de propiedades, arriendos, desalojos y regularización de títulos." },
        { icono: "🏢", titulo: "Derecho corporativo", desc: "Constitución de empresas, contratos comerciales, fusiones y protección de activos." },
      ],
      testimonios: [
        { nombre: "Marcelo Pinto", cargo: "Empresario · Santiago", texto: "Tuve un conflicto laboral muy complicado con un ex socio y {nombre} lo resolvió en 3 meses cuando otros me decían que tardaría años. Profesionales de verdad." },
        { nombre: "Claudia Herrera", cargo: "Profesora · Montevideo", texto: "Me ayudaron con el divorcio y la custodia de mis hijos en un momento muy difícil. Siempre claros, siempre disponibles. Les estaré eternamente agradecida." },
        { nombre: "Ricardo Alonso", cargo: "Comerciante · Lima", texto: "Me desvincularon injustamente y no sabía qué hacer. {nombre} me orientó desde el primer día y ganamos el juicio. El proceso fue mucho más fácil de lo que esperaba." },
      ],
      faq: [
        { pregunta: "¿La primera consulta es realmente gratis?", respuesta: "Sí. En la primera consulta analizamos tu caso, te explicamos tus derechos y opciones legales sin ningún costo. Solo cobraremos si decides contratarnos." },
        { pregunta: "¿Cuánto tiempo toma resolver un caso?", respuesta: "Depende del tipo de caso, pero trabajamos para llegar a acuerdos extrajudiciales que resuelven la mayoría de situaciones en 30 a 90 días." },
        { pregunta: "¿Pueden representarme si estoy en otra ciudad?", respuesta: "Sí. Hacemos consultas y seguimiento por videollamada y tenemos corresponsales en las principales ciudades del país para trámites presenciales." },
      ],
      cta_final: {
        titulo: "No enfrentes tus problemas legales solo",
        subtitulo: "Una consulta gratuita puede cambiarlo todo. Escríbenos hoy.",
        boton: "Consulta gratuita ahora",
      },
    },
  },
  {
    id: "psicologo",
    nombre: "Psicólogo",
    icono: "🧠",
    desc: "Terapia psicológica, bienestar mental",
    content: {
      hero: {
        headline: "Cuidar tu mente es el acto más valiente",
        subheadline: "Terapia psicológica profesional, confidencial y adaptada a lo que realmente necesitas. Puedes empezar hoy.",
        cta: "Agendar sesión inicial",
      },
      confianza: ["Absoluta confidencialidad", "Sesiones presenciales y online", "Primera sesión introductoria", "Psicólogos certificados"],
      sobre: {
        titulo: "Un espacio seguro para ser tú",
        texto: "En {nombre} creemos que pedir ayuda es un acto de fortaleza, no de debilidad. Somos un equipo de psicólogos clínicos especializados en adultos, adolescentes y terapia de pareja, comprometidos con acompañarte en tu proceso de bienestar y crecimiento personal.\n\nUsamos enfoques terapéuticos basados en evidencia —terapia cognitivo-conductual, EMDR, terapia sistémica— adaptados a cada persona. Sin juicios, sin etiquetas, solo escucha real y herramientas prácticas que te ayudan a vivir mejor.\n\nEn {nombre} tu historia importa. Te esperamos.",
      },
      servicios: [
        { icono: "💬", titulo: "Terapia individual", desc: "Sesiones semanales para trabajar ansiedad, depresión, autoestima, duelo y crecimiento personal." },
        { icono: "💑", titulo: "Terapia de pareja", desc: "Espacios para mejorar la comunicación, resolver conflictos y fortalecer el vínculo amoroso." },
        { icono: "👨‍👩‍👧", titulo: "Psicología infantil", desc: "Acompañamiento especializado para niños con dificultades emocionales, conductuales o escolares." },
        { icono: "💻", titulo: "Terapia online", desc: "Misma calidad terapéutica desde la comodidad de tu hogar. Disponible para cualquier ciudad o país." },
      ],
      testimonios: [
        { nombre: "Catalina Vega", cargo: "Paciente · Bogotá", texto: "Llegué en un momento muy oscuro y la terapeuta de {nombre} me acompañó con una paciencia y profesionalismo increíbles. Después de 6 meses de terapia soy otra persona. Gracias." },
        { nombre: "Felipe Moreno", cargo: "Ingeniero · Santiago", texto: "Tenía mucho escepticismo sobre la psicología pero decidí intentarlo. Fue la mejor decisión que tomé en años. Aprendí a manejar mi ansiedad y mis relaciones mejoraron enormemente." },
        { nombre: "Natalia Cruz", cargo: "Diseñadora · Ciudad de México", texto: "Hago terapia online desde hace un año y la calidad es exactamente la misma que en persona. La comodidad de conectarme desde casa hace que no falte a ninguna sesión." },
      ],
      faq: [
        { pregunta: "¿Cómo sé si necesito terapia?", respuesta: "Si sientes que algo en tu vida emocional o mental no está funcionando bien, ese es suficiente motivo. No necesitas una crisis para buscar apoyo psicológico." },
        { pregunta: "¿Todo lo que digo es confidencial?", respuesta: "Absolutamente. La confidencialidad es un principio ético fundamental. Todo lo que compartes en sesión queda entre tú y tu terapeuta, salvo situaciones de riesgo vital." },
        { pregunta: "¿Cuántas sesiones necesitaré?", respuesta: "Varía según cada persona y objetivo terapéutico. En la sesión inicial definimos juntos un plan de trabajo y una frecuencia adecuada a tu situación y disponibilidad." },
      ],
      cta_final: {
        titulo: "El cambio que buscas comienza aquí",
        subtitulo: "Agenda tu sesión introductoria. Sin compromisos, solo una conversación.",
        boton: "Agendar mi sesión",
      },
    },
  },
  {
    id: "contador",
    nombre: "Contador",
    icono: "📊",
    desc: "Contabilidad, finanzas, impuestos",
    content: {
      hero: {
        headline: "Tus finanzas en orden, tu negocio tranquilo",
        subheadline: "Contabilidad profesional, declaraciones de impuestos y asesoría financiera para empresas y emprendedores.",
        cta: "Consulta sin costo",
      },
      confianza: ["Sin multas garantizado", "Respuesta en 24 horas", "Todo 100% digital", "12+ años de experiencia"],
      sobre: {
        titulo: "Orden financiero que hace crecer tu negocio",
        texto: "En {nombre} nos especializamos en ayudar a PYMEs y emprendedores a mantener sus finanzas en orden, cumplir con todas sus obligaciones tributarias y tomar mejores decisiones de negocio basadas en datos reales.\n\nSabemos que los números no son lo tuyo —por eso son lo nuestro. Nos encargamos de tu contabilidad, declaraciones, planillas de empleados y todo lo que el SII o la DIAN te exige, para que tú puedas enfocarte en hacer crecer tu empresa.\n\nCon {nombre} tienes un contador de confianza disponible todo el año, no solo en temporada de impuestos.",
      },
      servicios: [
        { icono: "📋", titulo: "Contabilidad mensual", desc: "Registro de ingresos y gastos, estados financieros y reportes mensuales para tu empresa." },
        { icono: "🏛️", titulo: "Declaraciones de impuestos", desc: "IVA mensual, renta anual y todos los formularios tributarios al día y sin multas." },
        { icono: "👥", titulo: "Gestión de nómina", desc: "Liquidaciones, cotizaciones previsionales, contratos y finiquitos para tu equipo." },
        { icono: "💡", titulo: "Asesoría financiera", desc: "Análisis de rentabilidad, optimización tributaria y proyecciones para tomar mejores decisiones." },
      ],
      testimonios: [
        { nombre: "Carlos Muñoz", cargo: "Dueño de Pyme · Santiago", texto: "{nombre} me liberó de la angustia de los impuestos. Llevo 3 años con ellos y nunca he tenido una multa. Me avisan antes de cada vencimiento y se encargan de todo." },
        { nombre: "Alejandra Soto", cargo: "Emprendedora · Medellín", texto: "Cuando empecé mi negocio tenía todo desordenado. {nombre} me ayudó a ordenarme desde cero y ahora sé exactamente cuánto gano y cuánto pago de impuestos." },
        { nombre: "Tomás Ibarra", cargo: "Restaurantero · Lima", texto: "Contra lo que pensaba, cambiar de contador fue muy fácil. El equipo de {nombre} hizo el proceso transparente y desde el primer mes noté la diferencia en la atención." },
      ],
      faq: [
        { pregunta: "¿Pueden llevar la contabilidad de mi empresa desde otra ciudad?", respuesta: "Sí, trabajamos 100% en línea. Todos los documentos se comparten digitalmente y las reuniones son por videollamada. Atendemos clientes en todo el país." },
        { pregunta: "¿Qué pasa si tengo atrasos o deudas tributarias?", respuesta: "Podemos ayudarte a regularizar tu situación con el fisco, negociar convenios de pago y presentar declaraciones atrasadas. No te juzgamos, te ayudamos." },
        { pregunta: "¿Cuánto cobran por sus servicios?", respuesta: "Nuestros planes mensuales parten desde $50.000 CLP para empresas pequeñas. En la consulta gratuita analizamos tu caso y te damos un precio exacto sin sorpresas." },
      ],
      cta_final: {
        titulo: "Deja los números en buenas manos",
        subtitulo: "Primera consulta gratuita. Sin compromisos, con soluciones reales.",
        boton: "Hablar con un contador",
      },
    },
  },
  {
    id: "construccion",
    nombre: "Construcción",
    icono: "🏗️",
    desc: "Construcción, remodelación, obra",
    content: {
      hero: {
        headline: "Construimos lo que imaginas",
        subheadline: "Proyectos de construcción y remodelación con presupuesto claro, plazos cumplidos y materiales de primera calidad.",
        cta: "Solicitar presupuesto gratis",
      },
      confianza: ["Presupuesto sin costo", "Plazos cumplidos garantizados", "Materiales certificados", "15+ años en el mercado"],
      sobre: {
        titulo: "Cada proyecto es nuestra firma",
        texto: "En {nombre} construimos con la misma dedicación que pondríamos en construir nuestra propia casa. Llevamos más de 15 años ejecutando proyectos residenciales y comerciales en toda la región, con un historial de obras entregadas a tiempo y dentro del presupuesto acordado.\n\nNuestro equipo de ingenieros, arquitectos y maestros especializados trabaja con materiales certificados, cumplimiento estricto de normas de construcción y supervisión permanente en cada etapa del proyecto.\n\nEn {nombre} tu inversión está protegida. Firmamos contratos con garantías reales.",
      },
      servicios: [
        { icono: "🏠", titulo: "Construcción en seco", desc: "Casas, ampliaciones y obras desde cero con estructura de acero galvanizado y aislación térmica." },
        { icono: "🔨", titulo: "Remodelación integral", desc: "Cocinas, baños, pisos, cielos y cambio de instalaciones. Tu espacio transformado sin obra mayor." },
        { icono: "🏢", titulo: "Obras comerciales", desc: "Locales, oficinas, bodegas y espacios industriales. Cumplimos la normativa y los plazos." },
        { icono: "📐", titulo: "Diseño y permisos", desc: "Planos arquitectónicos, permisos municipales y gestión de inspecciones técnicas." },
      ],
      testimonios: [
        { nombre: "Hernán Lagos", cargo: "Propietario · Concepción", texto: "Me construyeron una ampliación de 60m² en 45 días exactamente como lo pactamos. El presupuesto inicial fue el final, sin costos adicionales sorpresa. Excelente trabajo." },
        { nombre: "Patricia Jiménez", cargo: "Empresaria · Bogotá", texto: "Remodelamos nuestra oficina completa y el equipo de {nombre} fue muy profesional. Trabajaron con mínima interferencia en nuestras operaciones. El resultado fue espectacular." },
        { nombre: "Sebastián Robles", cargo: "Arquitecto · Santiago", texto: "Derivo a mis clientes a {nombre} cuando necesitan ejecución. La calidad de los acabados y el cumplimiento de plazos es de primer nivel. Mi reputación va de la mano con la de ellos." },
      ],
      faq: [
        { pregunta: "¿El presupuesto puede cambiar durante la obra?", respuesta: "Solo si el cliente solicita cambios no contemplados en el contrato original. Cualquier modificación se presupuesta y aprueba antes de ejecutarse. Sin sorpresas." },
        { pregunta: "¿Gestionan los permisos municipales?", respuesta: "Sí, nos encargamos de todos los trámites: planos, permisos, inspecciones y recepciones municipales. Tú solo necesitas firmar y esperar la llave." },
        { pregunta: "¿Qué garantía tienen los trabajos?", respuesta: "Otorgamos 5 años de garantía en estructuras y 2 años en terminaciones. Si algo falla dentro de ese plazo, lo solucionamos sin costo adicional." },
      ],
      cta_final: {
        titulo: "Tu proyecto merece a los mejores",
        subtitulo: "Presupuesto gratuito en 48 horas. Sin compromiso.",
        boton: "Solicitar mi presupuesto",
      },
    },
  },
  {
    id: "tienda",
    nombre: "Tienda / Retail",
    icono: "🛍️",
    desc: "Tienda, boutique, comercio",
    content: {
      hero: {
        headline: "Encuentra lo que buscabas",
        subheadline: "Los mejores productos seleccionados especialmente para ti. Calidad, variedad y atención personalizada.",
        cta: "Ver el catálogo",
      },
      confianza: ["Envío a todo el país", "Devoluciones sin preguntas", "Pagos seguros", "+500 productos disponibles"],
      sobre: {
        titulo: "Más que una tienda, una experiencia",
        texto: "En {nombre} somos apasionados por ofrecer productos de calidad real a precios justos. Cada artículo de nuestro catálogo pasa por una curaduría rigurosa para asegurarnos de que sea lo que nuestros clientes merecen.\n\nFuimos fundados con la convicción de que comprar bien no debería ser complicado. Por eso tenemos atención personalizada, asesoría de producto y una política de devolución sin letra chica que transmite la confianza que sentimos en lo que vendemos.\n\nGracias por elegirnos. Cada compra en {nombre} es una promesa de calidad.",
      },
      servicios: [
        { icono: "📦", titulo: "Envío express", desc: "Despacho en 24-48 horas a todo el país. Seguimiento en tiempo real de tu pedido." },
        { icono: "🎁", titulo: "Packaging regalo", desc: "Embalaje premium con mensaje personalizado para regalar con estilo." },
        { icono: "💳", titulo: "Múltiples formas de pago", desc: "Tarjetas, transferencia, efectivo y cuotas sin interés. Como a ti te acomode." },
        { icono: "🔄", titulo: "Cambios y devoluciones", desc: "30 días para devolver o cambiar sin preguntas. Tu satisfacción es nuestra garantía." },
      ],
      testimonios: [
        { nombre: "Javiera Contreras", cargo: "Cliente frecuente · Valparaíso", texto: "Compro en {nombre} hace más de 2 años y jamás he tenido un problema. Cuando una vez llegó un producto dañado lo reemplazaron al día siguiente. Eso genera lealtad." },
        { nombre: "Emilio García", cargo: "Decorador de interiores · Buenos Aires", texto: "Recomiendo {nombre} a todos mis clientes por la calidad constante de sus productos y el excelente servicio. Los tiempos de envío son muy buenos para ser una tienda pequeña." },
        { nombre: "Lucía Pérez", cargo: "Mamá · Ciudad de México", texto: "Compré para el regalo de cumpleaños de mi hija con poco tiempo y {nombre} lo resolvió perfecto. Llegó bien empaquetado, antes de lo prometido. Volveré sin duda." },
      ],
      faq: [
        { pregunta: "¿A qué zonas hacen envíos?", respuesta: "Hacemos envíos a todo el país. Los tiempos varían entre 24 horas para ciudades principales y 3-5 días para zonas más alejadas." },
        { pregunta: "¿Puedo hacer una devolución?", respuesta: "Tienes 30 días desde la compra para devolver cualquier producto sin explicaciones. El reembolso se hace en 48-72 horas hábiles." },
        { pregunta: "¿Los precios incluyen IVA?", respuesta: "Sí, todos los precios publicados incluyen impuestos. Lo que ves es lo que pagas, sin costos ocultos al finalizar la compra." },
      ],
      cta_final: {
        titulo: "Lo que necesitas está aquí",
        subtitulo: "Envío gratis en tu primera compra usando el código BIENVENIDO.",
        boton: "Comprar ahora",
      },
    },
  },
  {
    id: "academia",
    nombre: "Academia / Educación",
    icono: "🎓",
    desc: "Cursos, clases, formación",
    content: {
      hero: {
        headline: "El conocimiento que transforma tu futuro",
        subheadline: "Cursos y programas de formación diseñados por expertos para ayudarte a crecer profesional y personalmente.",
        cta: "Ver cursos disponibles",
      },
      confianza: ["Certificados con validez", "Aprende a tu ritmo", "Profesores con experiencia real", "+800 estudiantes formados"],
      sobre: {
        titulo: "Formación que abre puertas",
        texto: "En {nombre} creemos que la educación de calidad no debería ser exclusiva de las grandes universidades. Por eso diseñamos programas formativos prácticos, actualizados y accesibles, dictados por profesionales con experiencia real en el mercado laboral.\n\nCada curso en {nombre} está diseñado para que aprendas haciendo. Proyectos reales, mentorías individuales y una comunidad de estudiantes que se apoyan mutuamente. Al terminar, tienes un certificado que las empresas reconocen y un portfolio que lo demuestra.\n\nTu próxima oportunidad empieza en {nombre}.",
      },
      servicios: [
        { icono: "💻", titulo: "Cursos online", desc: "Acceso ilimitado a clases grabadas. Estudia cuando quieras, donde quieras, a tu ritmo." },
        { icono: "👥", titulo: "Clases en vivo", desc: "Sesiones interactivas con el profesor y tus compañeros. Preguntas en tiempo real." },
        { icono: "🏆", titulo: "Certificación oficial", desc: "Certificados verificables digitalmente reconocidos por empleadores y plataformas freelance." },
        { icono: "🎯", titulo: "Mentoría personalizada", desc: "Sesiones 1 a 1 con mentores expertos para revisar tu avance y resolver dudas específicas." },
      ],
      testimonios: [
        { nombre: "Ignacio Palma", cargo: "Egresado · Buenos Aires", texto: "Gracias al curso de {nombre} conseguí mi primer trabajo en diseño UX a los 3 meses de terminar. Los proyectos del curso fueron exactamente lo que necesitaba para armar mi portfolio." },
        { nombre: "Daniela Moreno", cargo: "Profesional en transición · Bogotá", texto: "Tenía 35 años y quería cambiar de carrera. {nombre} me dio las herramientas y la confianza para hacerlo. El soporte del equipo durante todo el proceso fue fundamental." },
        { nombre: "Pablo Herrera", cargo: "Freelancer · Lima", texto: "Tomé 3 cursos en {nombre} y los tres superaron mis expectativas. Los profesores son profesionales activos que enseñan desde la experiencia real, no solo teoría." },
      ],
      faq: [
        { pregunta: "¿Por cuánto tiempo tengo acceso al contenido?", respuesta: "Acceso de por vida a todos los materiales del curso. Puedes revisarlos las veces que quieras, incluyendo actualizaciones futuras del contenido." },
        { pregunta: "¿Tienen financiamiento o cuotas?", respuesta: "Sí, puedes pagar en hasta 12 cuotas sin interés. También tenemos becas parciales para estudiantes con dificultades económicas. Consúltanos." },
        { pregunta: "¿Qué pasa si el curso no es lo que esperaba?", respuesta: "Tienes 7 días de garantía de devolución total. Si los primeros módulos no son lo que buscabas, te devolvemos el 100% sin preguntas." },
      ],
      cta_final: {
        titulo: "Invierte en ti. El retorno es seguro.",
        subtitulo: "Plazas limitadas por cohorte. Asegura tu lugar hoy.",
        boton: "Inscribirme ahora",
      },
    },
  },
  {
    id: "fotografia",
    nombre: "Fotografía / Eventos",
    icono: "📸",
    desc: "Fotógrafo profesional, eventos",
    content: {
      hero: {
        headline: "Momentos que duran para siempre",
        subheadline: "Fotografía profesional para matrimonios, quinceañeros, eventos corporativos y sesiones personales. Cada foto cuenta tu historia.",
        cta: "Ver mi portafolio",
      },
      confianza: ["Entrega en 15 días hábiles", "+300 eventos fotografiados", "Galería privada online", "Edición artística incluida"],
      sobre: {
        titulo: "El arte de capturar emociones reales",
        texto: "En {nombre} no tomamos fotos, contamos historias. Cada sesión, cada evento, cada momento merece ser capturado con sensibilidad artística y técnica impecable para que puedas revivirlo cada vez que lo necesites.\n\nCon más de 300 eventos fotografiados y años de experiencia en distintos tipos de iluminación y locaciones, el equipo de {nombre} garantiza resultados consistentes y únicos. Trabajamos con equipos profesionales de última generación y entregamos una edición artística que distingue cada trabajo.\n\nTu historia merece las mejores imágenes.",
      },
      servicios: [
        { icono: "💍", titulo: "Fotografía de matrimonio", desc: "Cobertura completa del día: pre-ceremonia, ceremonia, recepción y posadas especiales." },
        { icono: "🎂", titulo: "Eventos sociales", desc: "Quinceañeros, bautizos, cumpleaños y aniversarios. Momentos únicos, fotos únicas." },
        { icono: "🏢", titulo: "Fotografía corporativa", desc: "Eventos empresariales, headshots, productos y campañas para tu marca." },
        { icono: "🌟", titulo: "Sesiones personales", desc: "Book personal, maternidad, familia y lifestyle. Sesiones en estudio o exterior." },
      ],
      testimonios: [
        { nombre: "Pilar y Rodrigo", cargo: "Novios · Santiago", texto: "Las fotos de nuestro matrimonio son simplemente mágicas. {nombre} capturó exactamente las emociones que vivimos ese día. Cada vez que las vemos nos volvemos a emocionar." },
        { nombre: "Constanza Medina", cargo: "Quinceañera · Bogotá", texto: "Mi fiesta de 15 quedó perfectamente registrada. Las fotos son increíbles y el equipo de {nombre} fue muy profesional y discreto durante todo el evento. Feliz 100%." },
        { nombre: "Marco Bravo", cargo: "Director de Marketing · Buenos Aires", texto: "Usamos a {nombre} para eventos corporativos y la calidad es consistente siempre. Respetan los tiempos de entrega y el nivel artístico diferencia nuestras comunicaciones." },
      ],
      faq: [
        { pregunta: "¿Cuántas fotos entregamos?", respuesta: "Para eventos grandes como matrimonios entregamos entre 400 y 600 fotos editadas. Para sesiones personales, entre 50 y 100 imágenes seleccionadas y retocadas." },
        { pregunta: "¿En qué formato se entregan las fotos?", respuesta: "En alta resolución para impresión y versión optimizada para redes sociales. Acceso a través de galería privada online durante 1 año, con opción de descarga." },
        { pregunta: "¿Con cuánto tiempo debo reservar?", respuesta: "Para matrimonios y eventos grandes recomendamos reservar con al menos 6 meses de anticipación. Para sesiones y eventos pequeños, 2-3 semanas es suficiente." },
      ],
      cta_final: {
        titulo: "Reserva antes de que se agenden tus fechas",
        subtitulo: "Agenda está llenándose rápido. Asegura tu fecha hoy.",
        boton: "Ver disponibilidad",
      },
    },
  },
  {
    id: "tecnologia",
    nombre: "Tecnología / Software",
    icono: "💻",
    desc: "Desarrollo web, apps, IT",
    content: {
      hero: {
        headline: "Tecnología que impulsa tu negocio",
        subheadline: "Desarrollo de software, sitios web y soluciones digitales a medida para empresas que quieren crecer sin límites.",
        cta: "Cotizar mi proyecto",
      },
      confianza: ["Entrega en tiempo acordado", "Soporte técnico incluido", "Código limpio y escalable", "+50 proyectos entregados"],
      sobre: {
        titulo: "Construimos el software de tu negocio",
        texto: "En {nombre} transformamos ideas en productos digitales funcionales, escalables y bien diseñados. Somos un equipo de desarrolladores, diseñadores UX y especialistas en tecnología con experiencia en proyectos de distintos tamaños y rubros.\n\nNo vendemos tecnología por vender. Primero entendemos tu negocio, tus procesos y tus objetivos para luego proponer la solución técnica que realmente necesitas —no la más cara ni la más compleja, sino la más adecuada.\n\nCon {nombre} tienes un socio tecnológico de largo plazo.",
      },
      servicios: [
        { icono: "🌐", titulo: "Desarrollo web", desc: "Sitios corporativos, e-commerce y plataformas web con diseño premium y alto rendimiento." },
        { icono: "📱", titulo: "Apps móviles", desc: "Aplicaciones iOS y Android nativas o multiplataforma para tu negocio o producto." },
        { icono: "⚙️", titulo: "Software a medida", desc: "CRMs, ERPs, sistemas de gestión y automatizaciones adaptadas exactamente a tus procesos." },
        { icono: "🤖", titulo: "Integración de IA", desc: "Chatbots, automatizaciones inteligentes y análisis de datos para hacer tu empresa más eficiente." },
      ],
      testimonios: [
        { nombre: "Francisca Ruiz", cargo: "CEO Startup · Santiago", texto: "Contraté a {nombre} para desarrollar nuestra plataforma SaaS y superaron todas las expectativas. Entregaron en tiempo, el código es impecable y el soporte post-lanzamiento es excelente." },
        { nombre: "Gabriel Montoya", cargo: "Gerente de Operaciones · Bogotá", texto: "El sistema de gestión que nos desarrolló {nombre} automatizó el 60% de nuestros procesos manuales. El ROI fue visible en el primer trimestre. Muy recomendados." },
        { nombre: "Sofía Varela", cargo: "Fundadora E-commerce · Lima", texto: "Mi tienda online con {nombre} convierte mucho mejor que la anterior. El diseño, la velocidad y la experiencia de usuario son notablemente superiores. Mis ventas subieron un 40%." },
      ],
      faq: [
        { pregunta: "¿Cómo funciona el proceso de cotización?", respuesta: "Completamente gratis. Nos cuentas tu proyecto, hacemos preguntas técnicas, y en 48 horas te enviamos una propuesta detallada con alcance, plazo y precio fijo." },
        { pregunta: "¿Pueden mantener y actualizar el sistema después?", respuesta: "Sí, ofrecemos contratos de mantenimiento mensual que incluyen actualizaciones, corrección de bugs y soporte técnico prioritario." },
        { pregunta: "¿El precio puede aumentar durante el proyecto?", respuesta: "No si el alcance no cambia. Trabajamos con precio fijo y especificaciones claras. Cualquier cambio de alcance se cotiza aparte y se aprueba antes de ejecutarse." },
      ],
      cta_final: {
        titulo: "Tu proyecto empieza con una conversación",
        subtitulo: "Cuéntanos tu idea. La cotización es gratis y sin compromiso.",
        boton: "Cotizar mi proyecto",
      },
    },
  },
  {
    id: "inmobiliaria",
    nombre: "Inmobiliaria",
    icono: "🏠",
    desc: "Propiedades, arriendo, venta",
    content: {
      hero: {
        headline: "Tu próxima propiedad está aquí",
        subheadline: "Compra, vende y arrienda con la asesoría de expertos que conocen el mercado y trabajan para tu beneficio.",
        cta: "Ver propiedades",
      },
      confianza: ["Asesoría sin costo", "+200 propiedades gestionadas", "Trámites legales incluidos", "Tasación gratuita"],
      sobre: {
        titulo: "Expertos en el mercado inmobiliario local",
        texto: "En {nombre} llevamos más de una década ayudando a familias y empresas a tomar las mejores decisiones inmobiliarias de su vida. Conocemos el mercado local como nadie: los precios reales, los barrios que crecen y las oportunidades que otros no ven.\n\nSea que estés comprando tu primera casa, buscando una inversión o necesitas arrendar rápido, en {nombre} tienes un asesor dedicado que te acompaña en cada etapa: búsqueda, negociación, trámites legales y firma de contrato.\n\nEn decisiones importantes como esta, mereces tener a los mejores de tu lado.",
      },
      servicios: [
        { icono: "🔑", titulo: "Venta de propiedades", desc: "Estrategia de marketing, fotografía profesional y gestión completa hasta el cierre." },
        { icono: "🏘️", titulo: "Arriendo residencial", desc: "Publicación, filtro de arrendatarios, contratos y administración mensual de tu propiedad." },
        { icono: "💰", titulo: "Inversión inmobiliaria", desc: "Análisis de rentabilidad y oportunidades de inversión con proyección a 5 y 10 años." },
        { icono: "📋", titulo: "Tasación de propiedades", desc: "Valorización profesional basada en el mercado actual, necesaria para venta o crédito hipotecario." },
      ],
      testimonios: [
        { nombre: "Mauricio Lagos", cargo: "Inversionista · Santiago", texto: "Vendí tres propiedades con {nombre} en los últimos dos años. El proceso fue rápido, los compradores bien calificados y los precios obtenidos superaron mis expectativas." },
        { nombre: "Valeria Soto", cargo: "Primera compradora · Bogotá", texto: "Era mi primera compra y tenía mil dudas. El equipo de {nombre} me explicó todo con paciencia, negoció muy bien el precio y gestionó todos los trámites. Eternamente agradecida." },
        { nombre: "Empresa Textil Del Sur", cargo: "Cliente corporativo · Lima", texto: "Necesitábamos una bodega industrial urgente y {nombre} nos encontró la opción perfecta en una semana. El proceso de arrendamiento fue ágil y profesional." },
      ],
      faq: [
        { pregunta: "¿Cuánto cobran de comisión?", respuesta: "Para ventas, la comisión estándar es del 2% del valor de venta más IVA, pagada al momento del cierre. Para arriendos, es un mes de renta más IVA, una sola vez." },
        { pregunta: "¿Cuánto tarda en promedio vender una propiedad?", respuesta: "Con nuestra estrategia de marketing digital y precio correcto, el promedio es de 45 a 90 días. Propiedades bien tasadas y presentadas venden más rápido." },
        { pregunta: "¿Pueden administrar mi propiedad después de arrendada?", respuesta: "Sí, ofrecemos administración mensual: cobro de arriendo, pago de gastos comunes, atención a arrendatarios y reporte mensual al propietario." },
      ],
      cta_final: {
        titulo: "La propiedad correcta te está esperando",
        subtitulo: "Habla con un asesor hoy. Sin costo, sin compromiso.",
        boton: "Hablar con un asesor",
      },
    },
  },
  {
    id: "veterinaria",
    nombre: "Veterinaria",
    icono: "🐾",
    desc: "Clínica veterinaria, mascotas",
    content: {
      hero: {
        headline: "Tu mascota merece lo mejor",
        subheadline: "Atención veterinaria profesional, con amor y tecnología. Porque ellos también son familia.",
        cta: "Agendar consulta",
      },
      confianza: ["Atención de urgencias 24/7", "Veterinarios especializados", "Cirugías con anestesia monitoreada", "Farmacia propia"],
      sobre: {
        titulo: "Medicina veterinaria con corazón",
        texto: "En {nombre} amamos a los animales tanto como tú. Por eso construimos una clínica veterinaria donde la calidad médica y el trato cariñoso van de la mano. Nuestro equipo de veterinarios especializados trabaja con tecnología de diagnóstico avanzada y protocolos de seguridad estrictos para garantizar el bienestar de tu mascota.\n\nAtendemos perros, gatos, aves y pequeños roedores en consultas generales, urgencias, cirugías, odontología veterinaria y hospitalización. Cuando tu mascota no puede hablar, nosotros la escuchamos.\n\nEn {nombre}, ellos están en las mejores manos.",
      },
      servicios: [
        { icono: "🩺", titulo: "Consulta general", desc: "Revisión preventiva, vacunas, desparasitación y control de peso. Para mantenerlos sanos." },
        { icono: "🔬", titulo: "Diagnóstico avanzado", desc: "Radiografías digitales, ecografía y laboratorio interno para diagnósticos precisos y rápidos." },
        { icono: "🏥", titulo: "Cirugía veterinaria", desc: "Esterilizaciones, tumores, ortopedia y cirugías de urgencia con anestesia monitoreada." },
        { icono: "🛁", titulo: "Grooming y estética", desc: "Baño, corte, limpieza dental y de oídos. Tu mascota bonita, sana y feliz." },
      ],
      testimonios: [
        { nombre: "Carla Mendoza", cargo: "Mamá de Milo (Beagle) · Santiago", texto: "Mi perro tuvo una emergencia de noche y {nombre} lo atendió inmediatamente. El veterinario me explicó todo con calma y Milo se recuperó perfecto. Son los mejores." },
        { nombre: "Pedro Alvarado", cargo: "Dueño de Simba (Gato) · Lima", texto: "Llevo a Simba a {nombre} desde hace 4 años y la atención siempre es excelente. Lo conocen, lo tratan con cariño y cuando hay que darme malas noticias lo hacen con mucha humanidad." },
        { nombre: "Rocío Fernández", cargo: "Criadora de Golden · Bogotá", texto: "Confío en {nombre} para todas mis perras. Las cirugías de esterilización las hicieron perfectas y el seguimiento post-operatorio fue muy cuidadoso. Profesionalismo total." },
      ],
      faq: [
        { pregunta: "¿Atienden urgencias en la noche?", respuesta: "Sí, tenemos servicio de urgencias las 24 horas los 7 días de la semana. Si tu mascota tiene una emergencia, llámanos o ven directamente a nuestra clínica." },
        { pregunta: "¿Cuánto cuesta una consulta general?", respuesta: "La consulta general parte desde $15.000 CLP / $25.000 COP. Los precios varían según el tamaño del animal y procedimientos adicionales. Te damos un presupuesto antes de proceder." },
        { pregunta: "¿Cuentan con hospitalización?", respuesta: "Sí, tenemos área de hospitalización con monitoreo constante para pacientes post-operatorios o en tratamiento intensivo. Los dueños pueden llamar a consultar el estado de su mascota en cualquier momento." },
      ],
      cta_final: {
        titulo: "Ellos nos dan todo. Dales lo mejor.",
        subtitulo: "Agenda su consulta hoy. Atención cariñosa y profesional garantizada.",
        boton: "Agendar para mi mascota",
      },
    },
  },
];
