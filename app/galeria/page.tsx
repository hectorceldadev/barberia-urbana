import Galeria from "@/components/pages/Galeria"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería de Trabajos | Celda Barber Peluquería en Silla",
  description: "Explora nuestra colección de cortes urbanos, fades milimétricos y diseños freestyle. Inspírate con el trabajo real de Celda Barber en Silla (Valencia).",
  keywords: ["Fotos cortes hombre", "Galería barbería", "Fades Valencia", "Diseños pelo hombre", "Portfolio barbero"],
  openGraph: {
    title: "Galería Visual | Celda Barber",
    description: "Inspiración pura. Mira nuestros últimos trabajos y encuentra tu próximo look.",
    url: 'https://celdabarber.com/galeria',
    images: [
      {
        url: '/images/twitter-card.png',
        width: 1200,
        height: 630,
        alt: 'Colección de cortes Celda Barber',
      }
    ],
  }
};

const page = () => {
    return (
        <div className="min-h-screen w-full bg-[#020617] relative">
            <div
                className="absolute inset-0 z-10"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(100,116,139,0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(100,116,139,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "35px 35px",
                }}
            />
            <Galeria />
        </div>
    )
}

export default page
