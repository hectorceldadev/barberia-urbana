import { Scissors, Crown, Zap, Ruler } from "lucide-react"

export interface ServicesProps {
  id: string
  title: string
  description: string
  price: string
  fullDescription?: string
  icon: React.ReactNode
  features: string[]
  slug: string
  position: string
}

export const SERVICES: ServicesProps[] = [
    {
        id: "01",
        title: "Corte",
        description: "Dominamos todas las técnicas: Taper Fade, Low Fade, Mullet o texturizados modernos (Cropped) con un acabado pulido y contornos definidos a navaja.",
        price: "7€", // Ajusta tus precios reales
        icon: <Scissors className="w-6 h-6" />,
        features: ["Asesoramiento de imagen", "Peinado con cera/polvo"],
        slug: 'corte',
        position: 'left'
    },
    {
        id: "02",
        title: "Barba & Perfilado",
        description: "Más que un afeitado, perfilado geométrico o natural según tu facción a navaja y arreglo de volúmenes.",
        price: "+3€",
        icon: <Crown className="w-6 h-6" />,
        features: ["Perfilado a navaja", "Hidratación"],
        slug: 'arreglo-de-barba',
        position: 'left'
    },
    {
        id: "03",
        title: "Cejas",
        description: "Limpieza y perfilado de cejas masculino. Desde un acabado natural con navaja hasta los (cortes) más agresivos.",
        price: "+1€",
        icon: <Zap className="w-6 h-6" />,
        features: ["Ahorras dinero", "Servicio VIP"],
        slug: 'cejas',
        position: 'right'
    },
    {
        id: "04",
        title: "Diseños",
        description: "Añade personalidad a tu corte. Rayas, tribales, zetas o diseños complejos a mano alzada. Tú pones la idea, nosotros la técnica.",
        price: "+3€",
        icon: <Ruler className="w-6 h-6" />,
        features: ["Líneas nítidas", "Diseño único"],
        slug: 'diseños',
        position: 'right'
    }
]

export const SERVICES_BY_POSITION = SERVICES.reduce((acc, service) => {
  const position = service.position

  if (!acc[position]) {
    acc[position] = []
  }
  acc[position].push(service)
  return acc
}, {} as Record<string, ServicesProps[]>)

