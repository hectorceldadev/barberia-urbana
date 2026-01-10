import { SobreNosotros } from "@/components/pages/SobreNosotros"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Celda Barber Peluquería en Silla",
  description: "Conoce a Álvaro Celda y la historia de Celda Barber. Desde 2025 revolucionando la peluquería juvenil en Silla (Valencia).",
  openGraph: {
    title: "Celda Barber | Conoce al Equipo",
    description: "Más que una barbería. Descubre quién hay detrás de las navajas en Silla.",
    url: 'https://celdabarber.com/sobre-nosotros',
    images: [
      {
        url: '/images/twitter-card.png', // Idealmente una foto de grupo o de Álvaro
        width: 1200,
        height: 630,
        alt: 'Equipo Celda Barber',
      }
    ],
  },
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
            <SobreNosotros />
        </div>
    )
}

export default page
