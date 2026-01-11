import { Contacto } from "@/components/pages/Contacto"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contacto y Reserva | Celda Barber Peluquería en Silla",
    description: "Reserva tu cita en Celda Barber Silla. Teléfono, dirección, horario y formulario de contacto. Estamos en Av. Luís Vives 14.",
    keywords: ["Contacto Barbería Silla", "Teléfono Celda Barber", "Dirección Peluquería Silla", "Cita Previa Barbería"],
    openGraph: {
        title: "Contacto - Celda Barber",
        description: "Reserva tu hueco. Estamos en el corazón de Silla (Valencia).",
        url: 'https://celdabarber.es/contacto',
        images: [
            {
                url: '/images/twitter-card.png',
                width: 1200,
                height: 630,
                alt: 'Fachada Celda Barber Silla',
            }
        ],
    }
}
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
            <Contacto />
        </div>
    )
}

export default page
