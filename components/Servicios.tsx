'use client'

import { useRef } from 'react'
import { Check, ArrowRight } from 'lucide-react'
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
    const marqueeRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const marquee = marqueeRef.current
        
        if (marquee) {
            const marqueeWidth = marquee?.scrollWidth
            gsap.to(".marquee-content", {
                x: -marqueeWidth / 2,
                duration: 20,
                ease: "none",
                repeat: -1,
            })
        } 

        gsap.from('.services-header', {
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

        gsap.from(".service", {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15, 
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
        <section ref={containerRef} className="bg-[#020617] relative py-20 overflow-hidden">

            <div className="absolute top-0 left-0 w-full bg-violet-600/10 border-y border-violet-500/20 py-3 overflow-hidden rotate-1 sm:-rotate-1 z-0 backdrop-blur-sm">
                <div ref={marqueeRef} className="flex whitespace-nowrap marquee-content">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className={`mx-4 text-sm font-bold tracking-[0.3em] text-violet-300/50 uppercase ${anton.className}`}>
                            • Fades • Silla • Taper • Barba • Freestyle • Flow •
                        </span>
                    ))}
                </div>
            </div>

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
                            href={'/servicios/'}
                            key={service.id}
                            className="group service active:scale-95 relative p-6 rounded-2xl bg-zinc-900 ring ring-white/20 hover:border-violet-500/50 transition-colors duration-300 hover:bg-zinc-900/80"
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
                                <div className='mt-auto flex justify-between items-center'>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                                <Check className="w-3.5 h-3.5 text-violet-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <ArrowRight color='white' className='group-hover:text-violet-500 group-hover:translate-x-2 transition-all duration-300' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='flex justify-center items-center pt-8 button'>
                    <Link
                        href="/servicios"
                        className="group w-full sm:w-auto rounded-xl ring ring-white/20 bg-violet-600 px-8 py-4 text-white transition-all hover:bg-violet-700 active:scale-95"
                    >
                        <div className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm sm:text-base">
                            Ver Servicios
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Servicios