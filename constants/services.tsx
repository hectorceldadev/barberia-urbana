import { Scissors, Sparkles, Paintbrush, Heart, Eye, Smile } from "lucide-react"

export interface ServiceItem {
  title: string
  slug: string
  description: string
  fullDescription?: string // Para la página de detalle
  price: string
  icon: React.ReactNode
  category: string
}

export const ALL_SERVICES: ServiceItem[] = [
  // --- PELUQUERÍA ---
  {
    title: "Corte & Estilismo",
    slug: "corte-estilismo",
    category: "Peluquería Profesional",
    description: "Estudio de visagismo y corte adaptado a tus facciones para un look único.",
    fullDescription: "Nuestro servicio de corte incluye un diagnóstico previo de visagismo, lavado con masaje capilar y peinado final. Utilizamos técnicas de precisión para que tu corte mantenga la forma durante semanas.",
    price: "desde 25€",
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    title: "Coloración Orgánica",
    slug: "coloracion-natural",
    category: "Peluquería Profesional",
    description: "Pigmentos naturales sin amoníaco que respetan la salud de tu fibra capilar.",
    fullDescription: "Expertos en colorimetría responsable. Trabajamos con barros y coloraciones al óleo que cubren el 100% de la cana sin dañar la cutícula ni el cuero cabelludo.",
    price: "desde 45€",
    icon: <Paintbrush className="w-6 h-6" />,
  },
  {
    title: "Tratamientos Capilares",
    slug: "tratamientos-capilares",
    category: "Peluquería Profesional",
    description: "Rituales de hidratación y reconstrucción para cabellos castigados.",
    fullDescription: "Desde cauterización molecular hasta hidratación profunda con vapor. Devolvemos la vida a tu melena analizando qué nutriente le falta (proteína, agua o lípidos).",
    price: "desde 30€",
    icon: <Heart className="w-6 h-6" />,
  },
  
  // --- ESTÉTICA ---
  {
    title: "Higiene Facial",
    slug: "limpieza-facial",
    category: "Estética Avanzada",
    description: "Limpieza profunda con peeling ultrasónico para una piel radiante.",
    fullDescription: "Mucho más que una limpieza. Incluye extracción, peeling ultrasónico y un velo de hidratación personalizado según tu tipo de piel (grasa, seca o sensible).",
    price: "40€",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "Diseño de Mirada",
    slug: "diseno-mirada",
    category: "Estética Avanzada",
    description: "Lifting de pestañas y diseño de cejas para potenciar tu expresión.",
    fullDescription: "Diseñamos la arquitectura de tu mirada. El lifting eleva tu pestaña natural desde la raíz, mientras que el diseño de cejas equilibra tus facciones.",
    price: "15€",
    icon: <Eye className="w-6 h-6" />,
  },
  {
    title: "Manicura Premium",
    slug: "manicura",
    category: "Estética Avanzada",
    description: "Tratamiento completo de uñas y cutículas con esmaltado duradero.",
    fullDescription: "Cuidamos la salud de tu uña natural. Realizamos manicura rusa para un acabado impecable y utilizamos esmaltes de larga duración libres de tóxicos.",
    price: "20€",
    icon: <Smile className="w-6 h-6" />,
  }
]

// Función útil para agrupar servicios por categoría (la usaremos en el Header y la Page)
export const SERVICES_BY_CATEGORY = ALL_SERVICES.reduce((acc, service) => {
  const category = service.category

  if (!acc[category]) {
    acc[category] = []
  }
  acc[category].push(service)
  return acc
}, {} as Record<string, ServiceItem[]>)