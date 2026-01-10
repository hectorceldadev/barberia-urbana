'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { SERVICES, ServicesProps } from "@/constants/services"
import { anton, geist } from "@/constants/tipography"
import { ArrowRight, CalendarDays, Check } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface Props {
    service: ServicesProps
}

export const ServicioDetalle = ({ service }: Props) => {
    const containerRef = useRef(null)

    const masServicios = (servicio: ServicesProps) => {
        const servicios: ServicesProps[] = SERVICES.filter(service => service.slug !== servicio.slug)
        return servicios
    }

    const servicios = masServicios(service)

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Celda Barber",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Luís Vives 14",
                "addressLocality": "Silla",
                "addressRegion": "Valencia",
                "postalCode": "46460",
                "addressCountry": "ES"
            }
        },
        "description": service.description,
        "offers": {
            "@type": "Offer",
            "price": service.price?.replace('€', '').trim(),
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
        },
        "mainEntity": { // 2. La entidad principal de esta página es tu negocio
            "@type": "HairSalon",
            "name": "Celda Barber",
            "image": "https://celdabarber.com/images/og-image.jpg",
            "@id": "https://celdabarber.com", // ID único del negocio
            "url": "https://celdabarber.com", // La web oficial es la home
            "telephone": "+34600877977",
            "email": "info@celdabarber.com", // Añadido email si lo tienes
            "priceRange": "€€",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Luís Vives 14",
                "addressLocality": "Silla",
                "addressRegion": "Valencia",
                "postalCode": "46460",
                "addressCountry": "ES"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.358865,
                "longitude": -0.413265
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "10:00",
                    "closes": "20:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "14:00"
                }
            ],
            "sameAs": [
                "https://instagram.com/celdabarber"
            ]
        }
    }

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {


        gsap.from('.animate-desc', {
            y: 40,
            opacity: 0,
            ease: 'power2.out',
            duration: 0.4
        })

        gsap.from('.animate-hero', {
            y: 40,
            opacity: 0,
            ease: 'power2.out',
            duration: 0.6,
            scrollTrigger: {
                trigger: '.animate-hero',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    useGSAP(() => {

        gsap.from('.animate-more-header', {
            y: 40,
            duration: 0.4,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.animate-more-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from('.animate-more', {
            y: 40,
            duration: 0.6,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.animate-more-header',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    return (
        <div    
            ref={containerRef} 
            className="min-h-screen w-full bg-[#020617] relative"
        >

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
            />

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

            {/* Spotlight Decorativo */}
            <div className="absolute top-0 right-0 w-150 h-150 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none z-10" />

            <div className={`max-w-7xl mx-auto px-6 md:px-10 pt-30 relative z-20 w-full ${geist.className}`}>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* COLUMNA IZQUIERDA: Info Principal */}
                    <div className="flex flex-col gap-6">
                        {/* Icono Grande */}
                        <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-violet-500 shadow-[0_0_30px_rgba(124,58,237,0.15)]">
                            {/* Clonamos el icono para hacerlo más grande */}
                            <div className="scale-150 animate-desc">
                                {service.icon}
                            </div>
                        </div>

                        <h1 className={`text-[42px] md:text-5xl text-white uppercase leading-none ${anton.className} animate-desc`}>
                            {service.title}
                        </h1>

                        <div className="flex items-center gap-4 animate-desc">
                            <span className="text-2xl font-bold text-violet-400">
                                {service.price}
                            </span>
                            <span className="px-3 py-1 rounded-full border border-zinc-700 text-zinc-400 text-xs font-bold uppercase tracking-wide">
                                Duración Aprox. 30m
                            </span>
                        </div>

                        <p className="hero-element text-lg text-zinc-400 leading-relaxed max-w-lg animate-desc">
                            {service.description}
                        </p>

                        {/* Botones de Acción */}
                        <div className="hero-element flex flex-col sm:flex-row gap-4 mt-4 animate-desc">
                            <Link
                                href={`https://wa.me/34600877977?text=Hola%20Celda%20Barber,%20quiero%20pedir%20cita%20para%20${service.title}`}
                                target="_blank"
                                className="flex-1 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] active:scale-95"
                            >
                                <CalendarDays className="w-5 h-5" />
                                Reservar Cita
                            </Link>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Detalles Técnicos (Features) */}
                    <div className="features-card bg-zinc-900 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:mt-10 md:p-10 relative overflow-hidden animate-hero">

                        {/* Decoración sutil */}
                        <div className="absolute top-0 right-0 p-6 opacity-20">
                            <div className="w-24 h-24 border-t-2 border-r-2 border-violet-500 rounded-tr-3xl" />
                        </div>

                        <h3 className={`text-2xl text-white uppercase mb-8 ${anton.className}`}>
                            ¿Qué incluye?
                        </h3>

                        <ul className="space-y-6">
                            {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-violet-600/10 flex items-center justify-center border border-violet-600/20 group-hover:border-violet-500 transition-colors">
                                        <Check className="w-3.5 h-3.5 text-violet-400" />
                                    </div>
                                    <div>
                                        <span className="text-zinc-200 font-bold block mb-1 group-hover:text-white transition-colors">
                                            {feature}
                                        </span>
                                        <span className="text-sm text-zinc-500">
                                            Técnica profesional y productos de primera calidad.
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 pt-8 border-t border-white/5 text-center">
                            <p className="text-xs text-zinc-500 uppercase tracking-widest">
                                Celda Barber • Silla, Valencia
                            </p>
                        </div>
                    </div>

                </div>
                <div className='py-20'>
                    <h3 className={`text-white uppercase text-[42px] md:text-5xl ${anton.className} animate-more-header`}>
                        También te <br /><span className='text-violet-500'>puede interesar</span>
                    </h3>
                    <div className={`grid grid-cols-1 gap-6 md:grid-cols-3 pt-10  ${geist.className}`}>
                        {
                            servicios.map((servicio, id) => (
                                <Link
                            href={'/servicios/'}
                            key={servicio.id}
                            className="group service active:scale-95 relative p-6 rounded-2xl bg-zinc-900 ring ring-white/20 hover:border-violet-500/50 transition-colors duration-300 hover:bg-zinc-900/80 animate-more"
                        >
                            {/* Efecto Glow en Hover */}
                            <div className="absolute inset-0 bg-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header Card */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-zinc-800 rounded-xl text-zinc-300 group-hover:text-white group-hover:bg-violet-600 transition-colors duration-300">
                                        {servicio.icon}
                                    </div>
                                    <span className={`text-4xl text-zinc-800 group-hover:text-violet-900/50 transition-colors font-black ${anton.className}`}>
                                        0{1 + id}
                                    </span>
                                </div>

                                {/* Título y Precio */}
                                <div className="flex justify-between items-baseline mb-3">
                                    <h3 className={`text-2xl text-white uppercase tracking-wide ${anton.className}`}>
                                        {servicio.title}
                                    </h3>
                                    {servicio.price && (
                                        <span className="text-xl font-bold text-violet-400">
                                            {servicio.price}
                                        </span>
                                    )}
                                </div>

                                {/* Descripción */}
                                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                    {servicio.description}
                                </p>

                                {/* Lista de características (Checklist) */}
                                <div className='mt-auto flex justify-between items-center'>
                                    <ul className="space-y-2">
                                        {servicio.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                                <Check className="w-3.5 h-3.5 text-violet-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <ArrowRight className='group-hover:text-violet-500 group-hover:translate-x-2 transition-all duration-300' />
                                </div>
                            </div>
                        </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}