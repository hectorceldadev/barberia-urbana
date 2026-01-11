import Servicios from "@/components/pages/Servicios"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Servicios y Tarifas | Celda Barber Peluqueria en Silla", // Se completará como: "Servicios y Tarifas | Celda Barber" por el template del layout
    description: "Consulta nuestra carta de precios: Cortes Urbanos, Fades, Arreglo de Barba y Diseños Freestyle. Calidad visual y precisión en Silla (Valencia).",
    keywords: ["Precios peluquería Silla", "Tarifas Celda Barber", "Corte Fade Precio", "Arreglo Barba Silla", "Diseños Freestyle Valencia", "Barbería Silla", "Peluquería hombre Silla", "Peluquería hombre Catarroja", "Peluquería hombre Albal", "Peluquería hombre Picasssent", "Peluquería Silla", "Peluquería Catarroja", "Peluquería Albal", "Peluquería Picasssent", "Cortes de pelo modernos Valencia", "Mejor degradado Silla", "Barbero cerca de Picassent", "Barbero cerca de Albal", "Celda Barber"],
    openGraph: {
        title: "Carta de Servicios | Celda Barber",
        description: "No hacemos cortes estándar. Revisa nuestras tarifas de Fades, Barbas y Diseños.",
        url: 'https://celdabarber.es/servicios',
        images: [
            {
                url: '/images/twitter-card.png', // Idealmente una foto de alguien cortando el pelo o la lista de precios
                width: 1200,
                height: 630,
                alt: 'Servicios Celda Barber',
            }
        ],
    },
};

const page = () => {
    return (
        <>
            <Servicios />
        </>
    )
}

export default page
