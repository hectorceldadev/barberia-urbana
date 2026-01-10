'use client'

import { useRef } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { anton } from "@/constants/tipography"
import Link from 'next/link'
import { SERVICES } from '@/constants/services'

gsap.registerPlugin(ScrollTrigger)

const Servicios = () => {
    const containerRef = useRef(null)
    const servicesRef = useRef(null)

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Servicios de Peluquería y Barbería - Celda Barber",
        "description": "Lista completa de servicios de barbería urbana en Silla, Valencia.",
        "itemListElement": SERVICES.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
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
                "offers": {
                    "@type": "Offer",
                    "price": service.price?.replace('€', '').trim(), 
                    "priceCurrency": "EUR"
                }
            }
        })),
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

    useGSAP(() => {

        const tl = gsap.timeline()

        tl.from('.services-header', {
            y: 30,
            duration: 0.4,
            stagger: 0.2,
            opacity: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                toggleActions: "play none none reverse"
            }
        })

        tl.from(".service", {
            y: 50,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power3.out",
            clear: 'all',
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })

        gsap.from('.button', {
            y: 40,
            duration: 0.4,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.button',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        })
    }, { scope: containerRef })

    return (
        <div className="min-h-screen w-full bg-[#020617] relative">

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
            <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-[80%] h-100 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
            <section ref={containerRef} className="bg-[#020617] relative py-20 overflow-hidden">

                <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10 pt-10">

                    <div className="mb-16">
                        <h2 className={`${anton.className} text-[42px] md:text-5xl text-white uppercase mb-4 services-header`}>
                            Nuestros <br /><span className="text-violet-500">Servicios</span>
                        </h2>
                        <p className="text-zinc-400 max-w-md text-sm sm:text-base font-medium services-header">
                            No hacemos cortes estándar. Analizamos tu cráneo y facciones para darte el estilo que mejor te sienta. Precisión milimétrica.
                        </p>
                    </div>

                    <div
                        ref={servicesRef}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {SERVICES.map((service) => (
                            <Link
                                href={`/servicios/${service.slug}`}
                                key={service.id}
                                className="group z-20 service active:scale-95 relative p-6 rounded-2xl bg-zinc-900 ring ring-white/20 hover:border-violet-500/50 transition-colors duration-300 hover:bg-zinc-900/80"
                            >
                                {/* Efecto Glow en Hover */}
                                <div className="absolute inset-0 bg-violet-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header Card */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-zinc-800 rounded-xl text-zinc-300 group-hover:text-white group-hover:bg-violet-600 transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                        <span className={`text-4xl text-zinc-800 group-hover:text-violet-900/50 transition-colors font-black ${anton.className}`}>
                                            {service.id}
                                        </span>
                                    </div>

                                    {/* Título y Precio */}
                                    <div className="flex justify-between items-baseline mb-3">
                                        <h3 className={`text-2xl text-white uppercase tracking-wide ${anton.className}`}>
                                            {service.title}
                                        </h3>
                                        {service.price && (
                                            <span className="text-xl font-bold text-violet-400">
                                                {service.price}
                                            </span>
                                        )}
                                    </div>

                                    {/* Descripción */}
                                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Lista de características (Checklist) */}
                                    <div className='flex justify-between mt-auto'>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                                    <Check className="w-3.5 h-3.5 text-violet-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <ArrowRight className='group-hover:text-violet-500 group-hover:translate-x-2 w-6 h-6 transition-all duration-300' />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicios