interface GalleryImage {
  id: string;
  src: string; 
  alt: string; 
  category: 'peluqueria' | 'uñas' | 'facial' | 'corporal' | 'spa' | 'general';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'img1',
    src: '/images/gallery/Mechas-balayage-rubias.webp',
    alt: 'Mechas balayage rubias y naturales en cabello largo, realizadas en Aura Estética Valladolid.',
    category: 'peluqueria',
  },
  {
    id: 'img2',
    src: '/images/gallery/tratamiento-facial.webp',
    alt: 'Mujer recibiendo tratamiento facial anti-edad con productos orgánicos en Aura Estética.',
    category: 'facial',
  },
  {
    id: 'img3',
    src: '/images/gallery/Manicura-francesa-clásica.webp',
    alt: 'Manicura francesa clásica con esmalte semipermanente, realizada por profesional en Valladolid.',
    category: 'uñas',
  },
  {
    id: 'img4',
    src: '/images/gallery/corte-de-pelo-con-volumen.webp',
    alt: 'Corte de pelo moderno y con volumen en cabello castaño, realizado con precisión en salón de belleza.',
    category: 'peluqueria',
  },
  {
    id: 'img5',
    src: '/images/gallery/Masaje-relajante.webp',
    alt: 'Masaje relajante de espalda con aceites esenciales, proporcionando bienestar y alivio del estrés.',
    category: 'corporal',
  },
  {
    id: 'img6',
    src: '/images/gallery/Limpieza-facial.webp',
    alt: 'Limpieza facial profunda y purificante para una piel radiante, en un ambiente de spa.',
    category: 'facial',
  },
  {
    id: 'img7',
    src: '/images/gallery/Pedicura-spa.webp',
    alt: 'Pedicura spa con esmaltado de uñas, relajación y cuidado completo para los pies.',
    category: 'uñas',
  },
  {
    id: 'img8',
    src: '/images/gallery/salón-belleza.webp',
    alt: 'Interior moderno y acogedor de salón de belleza Aura Estética en Valladolid, con luz natural.',
    category: 'general',
  }
]