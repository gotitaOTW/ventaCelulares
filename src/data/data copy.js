export const marcas = [
  { id: 1, nombre: 'Apple' },
  { id: 2, nombre: 'Samsung' },
  { id: 3, nombre: 'Xiaomi' },
  { id: 4, nombre: 'Motorola' }
];

export const celulares = [
  {
    id: 1,
    marcaId: 1,
    modelo: "iPhone 13",
    descripcion: "Pantalla Super Retina XDR, chip A15 Bionic.",
    descripcionLarga: `El iPhone 13 ofrece un rendimiento potente gracias al chip A15 Bionic.
Cuenta con una pantalla Super Retina XDR de 6.1 pulgadas, ideal para ver contenido en alta definición.
Su sistema de doble cámara permite capturar fotos y videos con gran detalle, incluso en condiciones de poca luz.`,
    precio: 999,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    especificaciones: [
      { nombre: "Pantalla", texto: "6.1 pulgadas Super Retina XDR" },
      { nombre: "Procesador", texto: "A15 Bionic" },
      { nombre: "Cámara", texto: "Doble cámara de 12 MP" },
      { nombre: "Carga", texto: "Carga rápida de 20W" },
      { nombre: "Batería", texto: "Hasta 19 h de reproducción de video" }
    ],
    fechaLanzamiento: new Date('2021-09-24')
  },
  {
    id: 2,
    marcaId: 1,
    modelo: "iPhone SE (2022)",
    descripcion: "Diseño clásico con chip A15.",
    descripcionLarga: `El iPhone SE 2022 combina un diseño tradicional con potencia moderna.
Incluye el mismo chip A15 Bionic que los modelos de gama alta y una cámara mejorada para fotos nítidas.`,
    precio: 429,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: false,
    especificaciones: [
      { nombre: "Pantalla", texto: "4.7 pulgadas Retina HD" },
      { nombre: "Procesador", texto: "A15 Bionic" },
      { nombre: "Cámara", texto: "12 MP gran angular" },
      { nombre: "Carga", texto: "Carga rápida de 20W" },
      { nombre: "Bluetooth", texto: "5.0" }
    ],
    fechaLanzamiento: new Date('2022-03-18')
  },
  {
    id: 3,
    marcaId: 1,
    modelo: "iPhone 14 Pro",
    descripcion: "Dynamic Island, pantalla Always-On.",
    descripcionLarga: `El iPhone 14 Pro introduce la Dynamic Island, una nueva forma de interactuar.
Su pantalla siempre encendida y cámara de 48 MP lo convierten en uno de los teléfonos más avanzados.`,
    precio: 1099,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    especificaciones: [
      { nombre: "Pantalla", texto: "6.1 pulgadas Super Retina XDR Always-On" },
      { nombre: "Procesador", texto: "A16 Bionic" },
      { nombre: "Cámara", texto: "Triple cámara con 48 MP principal" },
      { nombre: "Carga", texto: "Carga rápida de 20W" },
      { nombre: "Bluetooth", texto: "5.3" }
    ],
    fechaLanzamiento: new Date('2022-09-16')
  },
  {
    id: 4,
    marcaId: 1,
    modelo: "iPhone 12 mini",
    descripcion: "Tamaño compacto, gran potencia.",
    descripcionLarga: `El iPhone 12 mini es ideal para quienes prefieren un tamaño más manejable sin perder rendimiento.
Cuenta con el chip A14 Bionic y cámara dual para fotos de calidad.`,
    precio: 699,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: false,
    especificaciones: [
      { nombre: "Pantalla", texto: "5.4 pulgadas Super Retina XDR" },
      { nombre: "Procesador", texto: "A14 Bionic" },
      { nombre: "Cámara", texto: "Doble cámara de 12 MP" },
      { nombre: "Carga", texto: "Carga rápida de 20W" },
      { nombre: "Batería", texto: "Hasta 15 h de reproducción de video" }
    ],
    fechaLanzamiento: new Date('2020-11-13')
  },
  {
    id: 5,
    marcaId: 1,
    modelo: "iPhone 15 Pro Max",
    descripcion: "Titán ligero, zoom periscópico.",
    descripcionLarga: `El iPhone 15 Pro Max redefine el diseño con un cuerpo de titanio más liviano.
  Incluye una cámara con zoom periscópico y mejoras en rendimiento y batería.`,
    precio: 1399,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    fechaLanzamiento: new Date("2023-09-22"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.7 pulgadas Super Retina XDR" },
      { nombre: "Procesador", texto: "A17 Pro" },
      { nombre: "Cámara", texto: "Triple cámara con zoom 5x" },
      { nombre: "Carga", texto: "Carga rápida de 25W" },
      { nombre: "Batería", texto: "Hasta 29 h de reproducción de video" }
    ]
  },
  {
    id: 6,
    marcaId: 2,
    modelo: "Galaxy S22 Ultra",
    descripcion: "S-Pen integrado, cámara 108MP.",
    descripcionLarga: `El S22 Ultra combina el poder de la serie Note con la elegancia Galaxy.
  Integra el S-Pen para productividad, una cámara de 108 MP con zoom óptico y una pantalla Dynamic AMOLED 2X de 6.8 pulgadas.`,
    precio: 1299,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    fechaLanzamiento: new Date("2022-02-25"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.8 pulgadas Dynamic AMOLED 2X" },
      { nombre: "Cámara", texto: "Cuádruple cámara con principal de 108 MP" },
      { nombre: "S-Pen", texto: "Incluido, integrado en el cuerpo" },
      { nombre: "Batería", texto: "5000mAh" },
      { nombre: "Carga", texto: "Carga rápida de 45W" }
    ]
  },
  {
    id: 7,
    marcaId: 2,
    modelo: "Galaxy A53",
    descripcion: "Buen equilibrio precio-rendimiento.",
    descripcionLarga: `El Galaxy A53 es una opción económica con pantalla Super AMOLED y cámara cuádruple.
  Ofrece buena duración de batería y fluidez para tareas diarias.`,
    precio: 399,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: false,
    fechaLanzamiento: new Date("2022-03-31"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.5 pulgadas Super AMOLED" },
      { nombre: "Procesador", texto: "Exynos 1280" },
      { nombre: "Cámara", texto: "Cuádruple cámara 64 MP" },
      { nombre: "Batería", texto: "5000mAh" },
      { nombre: "Carga", texto: "Carga rápida de 25W" }
    ]
  },
  {
    id: 8,
    marcaId: 2,
    modelo: "Galaxy Z Fold 4",
    descripcion: "Pantalla plegable, multitarea.",
    descripcionLarga: `El Galaxy Z Fold 4 ofrece una experiencia multitarea con su pantalla plegable.
  Ideal para quienes quieren productividad y entretenimiento en un solo dispositivo.`,
    precio: 1799,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    fechaLanzamiento: new Date("2022-08-26"),
    especificaciones: [
      { nombre: "Pantalla", texto: "7.6 pulgadas plegable Dynamic AMOLED 2X" },
      { nombre: "Procesador", texto: "Snapdragon 8+ Gen 1" },
      { nombre: "Cámara", texto: "Triple cámara de 50 MP" },
      { nombre: "Batería", texto: "4400mAh" },
      { nombre: "Carga", texto: "Carga rápida de 25W" }
    ]
  },
  {
    id: 9,
    marcaId: 2,
    modelo: "Galaxy Note 20 Ultra",
    descripcion: "S-Pen, pantalla curva 120Hz.",
    descripcionLarga: `El Note 20 Ultra es perfecto para productividad con su S-Pen y pantalla curva.
  Cuenta con cámara de 108 MP y una pantalla AMOLED brillante.`,
    precio: 1199,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: false,
    fechaLanzamiento: new Date("2020-08-21"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.9 pulgadas AMOLED 120Hz" },
      { nombre: "Procesador", texto: "Snapdragon 865+" },
      { nombre: "Cámara", texto: "Triple cámara de 108 MP" },
      { nombre: "Batería", texto: "4500mAh" },
      { nombre: "Carga", texto: "Carga rápida de 25W" }
    ]
  },
  {
    id: 10,
    marcaId: 2,
    modelo: "Galaxy S21 FE",
    descripcion: "Diseño elegante, rendimiento sólido.",
    descripcionLarga: `El Galaxy S21 FE combina estilo y potencia a un precio accesible.
  Cuenta con pantalla AMOLED y cámara triple.`,
    precio: 699,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    fechaLanzamiento: new Date("2022-01-11"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.4 pulgadas AMOLED" },
      { nombre: "Procesador", texto: "Exynos 2100" },
      { nombre: "Cámara", texto: "Triple cámara de 12 MP" },
      { nombre: "Batería", texto: "4500mAh" },
      { nombre: "Carga", texto: "Carga rápida de 25W" }
    ]
  },
  {
    id: 11,
    marcaId: 3,
    modelo: "Poco X4 Pro",
    descripcion: "Pantalla AMOLED 120Hz, cámara 108MP.",
    descripcionLarga: `El Poco X4 Pro se destaca por su pantalla AMOLED de 120Hz y cámara principal de 108MP.
  Rendimiento sólido con Snapdragon 695 y diseño llamativo. Perfecto para gamers y creadores de contenido.`,
    precio: 399,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    fechaLanzamiento: new Date("2022-03-01"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.67 pulgadas AMOLED 120Hz" },
      { nombre: "Procesador", texto: "Snapdragon 695" },
      { nombre: "Cámara", texto: "Triple cámara con sensor principal de 108 MP" },
      { nombre: "Batería", texto: "5000mAh" },
      { nombre: "Carga", texto: "Carga rápida de 67W" }
    ]
  },
  {
    id: 12,
    marcaId: 3,
    modelo: "Redmi Note 11",
    descripcion: "Buen precio y batería grande.",
    descripcionLarga: `El Redmi Note 11 es una excelente opción económica con buena batería y pantalla AMOLED.
  Ideal para uso diario y fotografía casual.`,
    precio: 299,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: false,
    fechaLanzamiento: new Date("2022-02-09"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.43 pulgadas AMOLED" },
      { nombre: "Procesador", texto: "Snapdragon 680" },
      { nombre: "Cámara", texto: "Cuádruple cámara de 50 MP" },
      { nombre: "Batería", texto: "5000mAh" },
      { nombre: "Carga", texto: "Carga rápida de 33W" }
    ]
  },
  {
    id: 13,
    marcaId: 3,
    modelo: "Xiaomi 12 Pro",
    descripcion: "Carga ultrarrápida, pantalla AMOLED.",
    descripcionLarga: `El Xiaomi 12 Pro destaca por su carga rápida de 120W y pantalla AMOLED.
  Potente para juegos y multimedia con cámara triple de alta resolución.`,
    precio: 799,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    fechaLanzamiento: new Date("2022-01-13"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.73 pulgadas AMOLED" },
      { nombre: "Procesador", texto: "Snapdragon 8 Gen 1" },
      { nombre: "Cámara", texto: "Triple cámara de 50 MP" },
      { nombre: "Batería", texto: "4600mAh" },
      { nombre: "Carga", texto: "Carga rápida de 120W" }
    ]
  },
  {
    id: 14,
    marcaId: 3,
    modelo: "Redmi 10C",
    descripcion: "Económico con pantalla grande.",
    descripcionLarga: `El Redmi 10C es un teléfono básico con pantalla grande y buen rendimiento para tareas simples.
  Perfecto para usuarios que quieren funcionalidad sin gastar mucho.`,
    precio: 149,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: false,
    fechaLanzamiento: new Date("2022-03-23"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.71 pulgadas LCD" },
      { nombre: "Procesador", texto: "Snapdragon 680" },
      { nombre: "Cámara", texto: "Cámara dual de 50 MP" },
      { nombre: "Batería", texto: "5000mAh" },
      { nombre: "Carga", texto: "Carga rápida de 18W" }
    ]
  },
  {
    id: 15,
    marcaId: 3,
    modelo: "Xiaomi Mi 11 Lite",
    descripcion: "Diseño ligero, cámara sólida.",
    descripcionLarga: `El Xiaomi Mi 11 Lite es delgado, liviano y ofrece buena calidad de cámara.
  Ideal para quienes buscan estética y buen rendimiento en gama media.`,
    precio: 399,
    fotos: ["imagen1", "imagen2", "imagen3"],
    esRecomendado: true,
    fechaLanzamiento: new Date("2021-03-29"),
    especificaciones: [
      { nombre: "Pantalla", texto: "6.55 pulgadas AMOLED" },
      { nombre: "Procesador", texto: "Snapdragon 732G" },
      { nombre: "Cámara", texto: "Triple cámara de 64 MP" },
      { nombre: "Batería", texto: "4250mAh" },
      { nombre: "Carga", texto: "Carga rápida de 33W" }
    ]
  },
  
];
