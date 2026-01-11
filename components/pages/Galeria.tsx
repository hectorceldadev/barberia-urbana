'use client'

import { useRef, useState } from "react"
import { GALERIA, GaleriaProps } from "@/constants/gallery"
import { anton } from "@/constants/tipography"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

// --- SUBCOMPONENTE: FILA DE MARQUEE ---
// Esto nos permite reutilizar la lógica para tener filas en distintas direcciones
const MarqueeRow = ({ 
    items, 
    direction = "left", 
    speed = 20, 
    isPaused 
}: { 
    items: GaleriaProps[], 
    direction?: "left" | "right", 
    speed?: number, 
    isPaused: boolean 
}) => {
    const rowRef = useRef<HTMLDivElement>(null)
    const tlRef = useRef<gsap.core.Timeline | null>(null)

    useGSAP(() => {
        if (!rowRef.current) return

        // Configuración según dirección
        const fromVal = direction === "left" ? 0 : -50
        const toVal = direction === "left" ? -50 : 0

        // Establecer posición inicial
        gsap.set(rowRef.current, { xPercent: fromVal })

        // Crear animación
        tlRef.current = gsap.timeline({
            repeat: -1,
            defaults: { ease: "none" }
        }).to(rowRef.current, {
            xPercent: toVal,
            duration: speed,
        })

        return () => { tlRef.current?.kill() }
    }, { scope: rowRef })

    // Control de Pausa suave
    useGSAP(() => {
        if (tlRef.current) {
            gsap.to(tlRef.current, { 
                timeScale: isPaused ? 0 : 1, 
                duration: 0.5 
            })
        }
    }, [isPaused])

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Portfolio de Cortes - Celda Barber Peluquería en Silla",
        "description": "Colección de fotografías de cortes de pelo, degradados y arreglos de barba realizados en Celda Barber.",
        "provider": {
            "@type": "HairSalon",
            "name": "Celda Barber",
            "image": "https://celdabarber.com/images/og-image.jpg"
        },
        "image": GALERIA.map(img => ({
            "@type": "ImageObject",
            "contentUrl": `https://celdabarber.com${img.src}`, // Asumiendo que img.src empieza con /
            "name": img.alt,
            "description": `Corte estilo ${img.category} realizado en Silla`
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

    return (
        <div className="flex gap-6 items-center w-max px-4" ref={rowRef}>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
            />

            {items.map((imagen, index) => (
                <div
                    key={`${imagen.id}-${direction}-${index}`}
                    className="group relative w-72 h-96 shrink-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:scale-95 hover:border-violet-500/50 cursor-pointer"
                >
                    <Image
                        src={imagen.src}
                        alt={imagen.alt}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-violet-400 text-[10px] font-bold tracking-widest uppercase mb-1">
                            {imagen.category}
                        </span>
                        <div className="flex justify-between items-center">
                            <p className="text-white text-sm font-bold leading-tight line-clamp-2 pr-4">
                                {imagen.alt}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

// --- COMPONENTE PRINCIPAL ---
const Galeria = () => {
    const containerRef = useRef(null)
    const [isPaused, setIsPaused] = useState(false)

    // Duplicamos items para el loop infinito
    const marqueeItems = [...GALERIA, ...GALERIA]

    // Dividimos la galería en dos partes para variar el contenido si quieres
    // O usamos la misma lista para ambas filas. Aquí uso la misma para efecto "muro".
    
    useGSAP(() => {
        gsap.from('.animate-header', {
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    return (
        <section ref={containerRef} className="w-full py-24 bg-[#020617] overflow-hidden relative">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-100 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Header */}
            <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10 mb-16 mt-6 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <span className="text-violet-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block animate-header">
                        Nuestro Trabajo
                    </span>
                    <h2 className={`${anton.className}  md:text-5xl text-[42px] text-white uppercase leading-none animate-header`}>
                        Galería <span className="text-zinc-700">&</span> <br />
                        <span className="text-violet-500">Estilos</span>
                    </h2>
                </div>
            </div>

            {/* Contenedor Inclinado */}
            <div
                className="relative w-full z-20 -skew-y-2 hover:skew-y-0 transition-transform duration-700 origin-center">
                
                {/* Gradient Masks (Laterales) */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent z-30 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#020617] via-[#020617]/80 to-transparent z-30 pointer-events-none" />
                
                <div 
                    className="flex flex-col gap-6 py-10 bg-violet-600/5 border-y border-white/20 backdrop-blur-sm"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* FILA 1: Hacia la IZQUIERDA */}
                    <MarqueeRow 
                        items={marqueeItems} 
                        direction="left" 
                        speed={40} // Velocidad normal
                        isPaused={isPaused} 
                    />

                    {/* FILA 2: Hacia la DERECHA (Invertido) */}
                    <MarqueeRow 
                        items={marqueeItems} 
                        direction="right" 
                        speed={35} // Un pelín diferente para que no se vean sincrónicos
                        isPaused={isPaused} 
                    />
                </div>
            </div>
        </section>
    )
}

export default Galeria