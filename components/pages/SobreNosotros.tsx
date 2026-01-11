
'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { anton, geist } from '@/constants/tipography'
import { Scissors, Users, Trophy, Star } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const TEAM = [
    {
        id: 1,
        name: "Álvaro Celda",
        role: "Founder & CEO",
        image: "/images/alvaro.webp",
    }
]

const STATS = [
    { label: "Años de Experiencia", value: 1, suffix: "+", icon: Trophy },
    { label: "Clientes Satisfechos", value: 1000, suffix: "+", icon: Users },
    { label: "Cortes Realizados", value: 2000, suffix: "", icon: Scissors },
    { label: "Valoración Google", value: 4.9, suffix: "/5", icon: Star },
]

const duplicatedStats = [...STATS, ...STATS, ...STATS, ...STATS]

export const SobreNosotros = () => {

    const containerRef = useRef(null)
    const sliderRef = useRef(null)
    const animateRef = useRef<gsap.core.Tween | null>(null)
    const [isPaused, setIsPaused] = useState<boolean>(false)

    useGSAP(() => {

        gsap.from('.animate-header', {
            y: 40,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power2.out',
            opacity: 0
        })

        gsap.from('.animate-image', {
            y: 40,
            ease: 'power2.out',
            duration: 0.6,
            opacity: 0,
            scrollTrigger: {
                trigger: '.animate-image',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.from('.animate-crew', {
            y: 40,
            opacity: 0,
            duration: 0.4,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.animate-crew',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    useGSAP(() => {

        if (!sliderRef.current) return

        gsap.set(sliderRef.current, {
            xPercent: -50
        })

        animateRef.current = gsap.to(sliderRef.current, {
            xPercent: 0,
            duration: 40,
            ease: 'none',
            repeat: -1
        })

        return () => {
            animateRef.current?.kill()
        }

    }, { scope: containerRef })

    useGSAP(() => {

        if (animateRef.current) {
            isPaused ? animateRef.current.timeScale(0.2) : animateRef.current.timeScale(1)
        }

    }, [isPaused])

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Sobre Nosotros - Celda Barber Peluquería en Silla",
        "description": "Historia y equipo de la barbería Celda Barber en Silla.",
        "mainEntity": {
            "@type": "HairSalon",
            "name": "Celda Barber",
            "founder": {
                "@type": "Person",
                "name": "Álvaro Celda",
                "jobTitle": "Founder & CEO"
            },
            "foundingDate": "2025",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Silla",
                "addressRegion": "Valencia",
                "addressCountry": "ES"
            },
            "mainEntity": { // 2. La entidad principal de esta página es tu negocio
            "@type": "HairSalon",
            "name": "Celda Barber",
            "image": "https://celdabarber.es/images/og-image.jpg",
            "@id": "https://celdabarber.es",
            "url": "https://celdabarber.es",
            "telephone": "+34600877977",
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
    }

    return (
        <section ref={containerRef} className={`w-full py-24 bg-[#020617] relative overflow-hidden ${geist.className}`}>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
            />

            {/* Fondo decorativo Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(139,92,246,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,92,246,0.1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px"
                }}
            />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-100 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

            {/* CORRECCIÓN AQUÍ: Añadido max-w-7xl, mx-auto y w-full para centrar en pantalla */}
            <div className="max-w-7xl mx-auto w-full flex flex-col relative z-10">

                {/* --- SECCIÓN 1: HISTORIA VS IMAGEN --- */}
                {/* CORRECCIÓN AQUÍ: Añadido items-center (centrado vertical) y gap-12 (separación) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 mb-10 items-center gap-12 lg:gap-20">

                    <div className="col-span-1 mx-6 md:mx-14">
                        <span className="text-violet-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-header">
                            Desde 2025
                        </span>
                        <h2 className={`text-[42px] md:text-5xl text-white uppercase mb-8 ${anton.className} animate-header`}>
                            Más que una <br />
                            <span className="text-violet-500">Barbería</span>
                        </h2>
                        <div className="space-y-6 text-zinc-400 text-lg">
                            <p className='animate-header'>
                                <strong>Celda Barber</strong> nació en las calles de Silla con una misión clara: romper con lo clásico. No buscábamos ser otra peluquería más, queríamos crear un <strong>espacio de de peluquería renovado</strong>.
                            </p>
                            <p className='animate-header'>
                                Entendemos el corte de pelo como una forma de expresión. Ya sea un <em>Low Fade</em> pulido o un diseño <em>Freestyle</em> agresivo, nuestro objetivo es que tu imagen hable por ti antes de que tú digas una palabra.
                            </p>
                            <div className="pt-4 border-l-4 border-violet-600 pl-6">
                                <p className="text-white italic font-medium animate-header">
                                    {"Precisión milimétrica, ambiente acogedor y trato de familia. Eso es lo que somos."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 animate-image">
                        {/* Centramos la imagen horizontalmente en su columna */}
                        <div className="relative aspect-4/5 w-[90%] md:w-[70%] mx-auto rounded-3xl overflow-hidden border border-white/10 group">
                            <Image
                                src="/images/sobre-nosotros.webp"
                                alt="Interior de Celda Barber"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            {/* Overlay degradado */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                        </div>
                        {/* Elemento flotante decorativo */}
                        <div className="absolute z-30 -bottom-3 -left-4 bg-zinc-900 border border-violet-500/30 p-6 rounded-2xl shadow-2xl hidden md:block">
                            <p className={`text-4xl text-white ${anton.className}`}>EST. 2025</p>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest">Silla, Valencia</p>
                        </div>
                    </div>
                </div>

                <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={`w-max relative shrink-0 whitespace-nowrap bg-violet-600/10 border-y border-white/20 py-4 backdrop-blur-sm -skew-2 transition-transform duration-500`}
                >
                    <div
                        ref={sliderRef}
                        className="flex w-max gap-8  overflow-hidden"
                    >
                        {duplicatedStats.map((stat, idx) => (
                            <div key={idx} className="bg-zinc-900 shrink-0 whitespace-nowrap border w-60 border-white/20 p-6 rounded-2xl text-center hover:bg-zinc-900/90 transition-colors group">
                                <div className="inline-flex p-3 rounded-full bg-violet-600/10 text-violet-500 mb-4 group-hover:scale-110 transition-transform">
                                    <stat.icon size={24} />
                                </div>
                                <h3 className={`text-4xl md:text-5xl text-white mb-2 ${anton.className}`}>
                                    {stat.value}<span className="text-violet-500 text-2xl">{stat.suffix}</span>
                                </h3>
                                <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-40 ">
                    <div className="mb-16 text-center">
                        <h2 className={`text-[42px] md:text-5xl text-white uppercase ${anton.className} animate-crew`}>
                            The <span className="text-violet-600">Crew</span>
                        </h2>
                        <p className="text-zinc-400 mt-4 max-w-lg mx-auto md:mx-0 animate-crew">
                            Conoce al artista detrás de las navajas. Especialista en estilos urbanos y técnica clásica.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 w-full max-w-5xl">
                        {/* Añadí w-full y max-w-5xl al grid para controlar el ancho total */}

                        {TEAM.map((member) => (
                            <div key={member.id} className="group col-span-1 flex justify-center items-center relative">

                                {/* CORRECCIÓN AQUÍ: Añadido 'w-72' (o w-full) para móvil */}
                                <div className="aspect-2/3 w-72 md:w-[30%] grayscale group-hover:grayscale-0 group-hover:scale-105 cursor-pointer relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 animate-crew">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-all duration-500"
                                    />

                                    {/* Info Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-90 flex flex-col justify-end p-6">
                                        <h3 className={`text-3xl text-white uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ${anton.className}`}>
                                            {member.name}
                                        </h3>
                                        <p className="text-violet-400 font-bold uppercase text-xs tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    )
}