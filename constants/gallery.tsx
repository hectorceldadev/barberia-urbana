// hectorceldadev/barberia-urbana/barberia-urbana-4ba133f6e1f2c310b15b499bda3c8309d334fabe/constants/gallery.tsx

export interface GaleriaProps {
  id: string;
  src: string; 
  alt: string; 
  // He actualizado las categorías para que encajen con Celda Barber
  category: 'corte' | 'barba' | 'freestyle' | 'local';
}

export const GALERIA: GaleriaProps[] = [
  {
    id: 'img1',
    // Usaremos rutas provisionales, luego subiremos tus fotos reales
    src: '/images/galeria/1.svg',
    alt: 'Corte Low Fade con texturizado superior estilo urbano en Silla.',
    category: 'corte',
  },
  {
    id: 'img2',
    src: '/images/galeria/2.svg',
    alt: 'Arreglo de barba perfilada a navaja con toalla caliente.',
    category: 'corte',
  },
  {
    id: 'img4',
    src: '/images/galeria/3.svg',
    alt: 'Corte French Crop con mucha textura y acabado mate.',
    category: 'corte',
  },
  {
    id: 'img5',
    src: '/images/galeria/4.svg',
    alt: 'Ambiente de la barbería Celda Barber, estilo industrial y urbano.',
    category: 'corte',
  },
  {
    id: 'img6',
    src: '/images/galeria/5.svg',
    alt: 'Mullet moderno desvanecido en patillas, tendencia actual.',
    category: 'corte',
  },
  {
    id: 'img7',
    src: '/images/galeria/6.svg',
    alt: 'Ritual de afeitado clásico con productos de primera calidad.',
    category: 'corte',
  },
  {
    id: 'img3',
    src: '/images/galeria/7.svg',
    alt: 'Taper Fade limpio para un look natural y elegante.',
    category: 'corte',
  },
  {
    id: 'img8',
    src: '/images/galeria/8.svg',
    alt: 'Diseño freestyle con líneas geométricas en lateral.',
    category: 'corte',
  }
];