import { ServicioDetalle } from "@/components/pages/SercicioDetalle"
import { SERVICES } from "@/constants/services"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface Props {
    params: Promise<{ slug: string }> 
}

export const generateStaticParams = async () => {
    return SERVICES.map(service => ({
        slug: service.slug
    }))
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    
    const { slug } = await params 

    const service = SERVICES.find(service => service.slug === slug)

    if (!service) return { title: 'Servicio no encontrado' }

    return {
        title: `${service.title} | Celda Barber Peluquería en Silla`,
        description: service?.description,
        keywords: [ service?.title, 'Celda Barber', "Peluquería hombre Silla", "Peluquería hombre Catarroja", "Peluquería hombre Albal", "Peluquería hombre Picasssent", "Peluquería Silla", "Peluquería Catarroja", "Peluquería Albal", "Peluquería Picasssent", "Cortes de pelo modernos Valencia", "Mejor degradado Silla" ],
        openGraph: {
            title: `${service.title} - Celda Barber`,
            description: service.description,
            type: 'article',
            url: `https://celdabarber.es/servicios/${service.slug}`,
            images: [{ url: '/images/logo-celdabarber.svg' }]
        },
        twitter: {
            card: 'summary_large_image',
            title: service.title,
            description: service.description,
        },
        icons: '/images/logo-celdabarber.svg'
    }
}

const ServicioPage = async ({ params }: Props) => {

    const { slug } = await params

    const service = SERVICES.find(service => service.slug === slug)

    if (!service) notFound()

    return (
        <ServicioDetalle  service={service} />
    )

}

export default ServicioPage