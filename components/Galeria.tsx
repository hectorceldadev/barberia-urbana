'use client'

import { useRef, useState } from "react"
import { GALERIA } from "@/constants/gallery"
import { anton } from "@/constants/tipography"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ArrowUpRight } from "lucide-react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const Galeria = () => {
    const containerRef = useRef(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)
    const animationRef = useRef<gsap.core.Tween | null>(null)

    const images = [...GALERIA.map(galeria => galeria)]
    const marqueeItems = [...images, ...images]

    useGSAP(() => {

        gsap.from('.animate-header', {
            y: 40,
            duration: 0.4,
            stagger: 0.2,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    useGSAP(() => {

        if (!sliderRef.current) return

        animationRef.current =
            gsap.to(sliderRef.current, {
                xPercent: -50,
                duration: 20,
                ease: 'none',
                repeat: -1,
                paused: true
            })

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 0%',
            onEnter: () => animationRef.current?.play(),
            onLeave: () => animationRef.current?.pause(),
            onEnterBack: () => animationRef.current?.play(),
            onLeaveBack: () => animationRef.current?.pause()
        })

        return () => {
            animationRef.current?.kill()
            ScrollTrigger.getAll().forEach(t => t.kill())
        }

    }, { scope: sliderRef })

    useGSAP(() => {

        if (animationRef.current) {
            isPaused ? animationRef.current.timeScale(0.2) : animationRef.current.timeScale(1)
        }

    }, [isPaused])

    return (
        <section ref={containerRef} className="w-full py-6 bg-[#020617] overflow-hidden relative">

            <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10 mb-12 flex flex-col md:flex-row justify-between gap-6">
                <div>
                    <span className="text-violet-500 font-bold tracking-widest uppercase text-xs mb-2 block animate-header">
                        Portfolio
                    </span>
                    <h2 className={`${anton.className} text-[42px] md:text-5xl text-white uppercase leading-none animate-header`}>
                        GALERIA
                    </h2>
                </div>

            </div>

            {/* Contenedor del Slider con Máscaras de Gradiente (Fade lateral) */}
            <div className="relative w-full z-20">
                {/* Gradient Masks para suavizar bordes */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-linear-to-r from-[#020617] to-transparent z-30 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-linear-to-l from-[#020617] to-transparent z-30 pointer-events-none" />

                {/* Track inclinado */}
                <div
                    className={`transform transition-transform duration-500 py-10 ${isPaused ? 'skew-0' : 'skew-y-2'}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="bg-violet-600/10 border-y border-white/20 py-8 backdrop-blur-sm">
                        <div
                            ref={sliderRef}
                            className="flex gap-6 items-center w-max px-4"
                        >
                            {marqueeItems.map((imagen, index) => (
                                <div
                                    key={`${imagen.id}-${index}`}
                                    className="group relative w-72 h-96 shrink-0 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:scale-110 hover:border-violet-500/50 cursor-pointer"
                                >

                                    <Image
                                        src={imagen.src}
                                        alt={imagen.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 300px"
                                    />

                                    {/* Overlay con Información */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="text-violet-400 text-[10px] font-bold tracking-widest uppercase mb-1">
                                            {imagen.category}
                                        </span>
                                        <div className="flex justify-between items-center">
                                            <p className="text-white text-sm font-bold leading-tight line-clamp-2 pr-4">
                                                {imagen.alt}
                                            </p>
                                            <ArrowUpRight className="text-white w-5 h-5 shrink-0" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Galeria