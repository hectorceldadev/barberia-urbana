export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  stars: number;
  img: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Álex Martínez",
    role: "Low Fade & Texture",
    content: "Brutal la técnica. Me entendieron a la perfección, buscaba un French Crop con textura y el resultado ha sido impecable. ¡Repetiré fijo!",
    stars: 5,
    img: "/images/gallery/fade-low-urbano.webp" // Asegúrate de que esta ruta exista o pon una genérica
  },
  {
    id: 2,
    name: "Marcos Ruiz",
    role: "Barba & Perfilado",
    content: "El mejor arreglo de barba que me han hecho en Silla. El ritual con toalla caliente y el perfilado a navaja son otro nivel. Muy relajante.",
    stars: 5,
    img: "/images/gallery/arreglo-barba-perfilada.webp"
  },
  {
    id: 3,
    name: "David Gómez",
    role: "Mullet Moderno",
    content: "Buscaba un cambio radical y me asesoraron genial. El Mullet ha quedado clavado, con un degradado súper limpio en las patillas.",
    stars: 5,
    img: "/images/gallery/mullet-moderno.webp"
  },
  {
    id: 4,
    name: "Javi Villa",
    role: "Taper Fade",
    content: "Vengo desde Albal expresamente. Es difícil encontrar un sitio donde claven los volúmenes y no te dejen trasquilones. 10/10.",
    stars: 5,
    img: "/images/gallery/taper-fade.webp"
  },
  {
    id: 5,
    name: "Sergio Fernández",
    role: "Freestyle Design",
    content: "Unos máquinas con la navaja. Les pedí un diseño geométrico en el lateral y el pulso que tienen es increíble. Muy contento con el flow.",
    stars: 5,
    img: "/images/gallery/design-freestyle.webp"
  },
  {
    id: 6,
    name: "Dani Sanz",
    role: "Corte Clásico",
    content: "Grandes profesionales. El local tiene un rollo urbano muy guapo, pero el trato es cercano. Se nota que les apasiona lo que hacen.",
    stars: 5,
    img: "/images/gallery/local-celda-barber.webp"
  },
  {
    id: 7,
    name: "Rubén López",
    role: "Arreglo Express",
    content: "Puntualidad y rapidez sin perder calidad. Perfecto para mantener el corte fresco cada dos semanas. Muy recomendable.",
    stars: 5,
    img: "/images/gallery/taper-fade.webp"
  },
  {
    id: 8,
    name: "Adrián Gil",
    role: "Cambio de Look",
    content: "Llevaba el pelo fatal de otra peluquería y me lo arreglaron enseguida. Me explicaron cómo peinarme en casa con los polvos de textura.",
    stars: 5,
    img: "/images/gallery/crop-texture.webp"
  }
]