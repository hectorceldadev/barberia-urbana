'use client'

import Link from "next/link"
import { CalendarDays, ArrowRight, Star, Scissors, User, MapPin } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from 'gsap';
import { anton, geist } from "@/constants/tipography"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const containerRef = useRef(null)
    const imageRef = useRef(null)

    useGSAP(() => {

        gsap.from('.animate-hero', {
            y: 40,
            duration: 1,
            stagger: 0.2,
            opacity: 0,
            ease: 'power2.out'
        })

        gsap.from('.animate-hero-image', {
            y: 40,
            duration: 1,
            stagger: 0.5,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.animate-hero-image',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    useGSAP(() => {

        if (window.innerWidth > 1024) {
            const xTo = gsap.quickTo(imageRef.current, 'x', { duration: 0.4, ease: 'power3' })
            const yTo = gsap.quickTo(imageRef.current, 'y', { duration: 0.4, ease: 'power3' })

            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e
                const x = (clientX / window.innerWidth - 0.5) * 25
                const y = (clientY / window.innerWidth - 0.5) * 25
                xTo(x)
                yTo(y)
            }
            window.addEventListener('mousemove', handleMouseMove)
            return () => window.removeEventListener('mousemove', handleMouseMove)
        }
    }, { scope: containerRef })

    return (
        <section
            ref={containerRef}
            // MÓVIL: pt-28 px-5 (menos padding lateral). DESKTOP: pt-32 px-10
            className={`pt-28 pb-16 px-5 lg:px-10 overflow-hidden ${geist?.className || ''}`}
        >
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-100 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* COLUMNA TEXTO */}
                    <div className="flex flex-col ">

                        {/* Etiqueta / Ubicación (SEO LOCAL: Silla) */}
                        <div className="flex justify-start">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase animate-hero">
                                <MapPin size={12} className="text-violet-500" />
                                Peluquería en Silla • Est. 2026
                            </div>
                        </div>

                        <h1 className={`${anton.className} text-[56px] sm:text-6xl font-black text-white leading-[0.95] mb-6 animate-hero uppercase tracking-tight animate-hero`}>
                            El Fade  <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-violet-300 ">
                                Definitivo
                            </span>
                        </h1>

                        {/* Párrafo con Keywords SEO (Fades, Cortes, Streetwear) */}
                        <p className="text-base sm:text-lg text-zinc-400 mb-8 sm:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium animate-hero">
                            La nueva referencia de <strong className="text-zinc-200">peluquería masculina en Silla</strong>.
                            Especialistas en fades, diseños y arreglo de barba.
                            Tu sitio de confianza a solo 5 minutos de <strong className="text-zinc-200">Picassent, Albal y Catarroja</strong>.
                        </p>

                        {/* Botones: Ancho completo en móvil (w-full) */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-hero w-full sm:w-auto animate-hero">
                            <Link
                                href="https://wa.me/34600877977?text=Hola%20Celda%20Barber,%20me%20gustaría%20pedir%20cita." //**PONER WHATSSAP
                                target="_blank"
                                className="group w-full sm:w-auto relative overflow-hidden rounded-xl bg-violet-600 px-8 py-4 text-white transition-all hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25 active:scale-95"
                            >
                                <div className="relative z-10 flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm sm:text-base">
                                    <CalendarDays className="w-5 h-5" />
                                    Reservar Cita
                                </div>
                            </Link>

                            <Link
                                href="/servicios"
                                className="group w-full sm:w-auto rounded-xl border border-zinc-700 bg-zinc-900/50 px-8 py-4 text-white transition-all hover:border-violet-500 hover:bg-zinc-800 active:scale-95"
                            >
                                <div className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm sm:text-base">
                                    Ver Servicios
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </div>

                        {/* SOCIAL PROOF */}
                        <div className="mt-10 sm:mt-12 flex items-center justify-start gap-4 animate-hero">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#020617] bg-violet-900/50 flex items-center justify-center overflow-hidden relative transition-all z-0 hover:z-10 hover:scale-110">
                                        <User className="text-violet-300 w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col text-left">
                                <div className="flex text-violet-400 mb-1">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />)}
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-zinc-300">
                                    <span className="font-bold text-white">+100</span> Clientes satisfechos
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* COLUMNA IMAGEN */}
                    {/* Móvil: w-full (para ocupar todo el ancho disponible). Desktop: controlado por el grid */}
                    <div className="relative mx-auto w-[90%] lg:w-[70%] mt-4 lg:pt-2">
                        {/* Decoración */}
                        <div className="absolute -inset-4 bg-violet-600/20 rounded-3xl rotate-6 blur-md hidden sm:block"></div>

                        <div
                            ref={imageRef}
                            className="relative aspect-3/4 rounded-2xl overflow-hidden grayscale border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/50 animate-hero-image"
                        >
                            <Image
                                src="/images/sobre-nosotros.webp"
                                alt="Peluquería masculina y barbería en Silla especializada en Fades y cortes modernos"
                                fill
                                unoptimized
                                className="object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                            {/* Badge Flotante - Ajustado para no tapar en móvil */}
                            <div className="absolute z-50 bottom-4 right-4 sm:bottom-4 sm:right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-3 rounded-xl flex items-center gap-2 sm:gap-3 animate-hero-image">
                                <div className="bg-violet-600 p-1.5 sm:p-2 rounded-lg text-white">
                                    <Scissors size={16} className="sm:w-5 sm:h-5" />
                                </div>
                                <div className="pr-2">
                                    <p className="text-[9px] sm:text-[10px] text-zinc-300 uppercase tracking-wider">Urban Style</p>
                                    <p className="text-xs sm:text-sm font-bold text-white leading-none">Cuts & Fades</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero