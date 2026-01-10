'use client'

import { REVIEWS } from "@/constants/reviews"
import { Star, Quote, User } from "lucide-react"
import { anton } from "@/constants/tipography"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

export const Reviews = () => {

    const containerRef = useRef(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    const animateRef = useRef<gsap.core.Tween | null>(null)
    const [ isPause, setIsPause ] = useState<boolean>(false)

    const marqueeReviews = [ ...REVIEWS, ...REVIEWS ]

    useGSAP(() => {

        gsap.from('.animate-header', {
            y: 40,
            duration: 0.4,
            opacity: 0,
            stagger: 0.2,
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

        gsap.set(sliderRef.current, {
            xPercent: -50
        })

        animateRef.current = gsap.to(sliderRef.current, {
            xPercent: 0,
            repeat: -1,
            duration: 100,
            ease: 'none',
        })

        return () => {
            animateRef.current?.kill()
        }

    }, { scope: containerRef })

    useGSAP(() => {

        if (animateRef.current) {
            isPause ? animateRef.current.timeScale(0.2) : animateRef.current.timeScale(1)
        }

    }, [ isPause ])

    return (
        <section
            ref={containerRef} 
            className="w-full z-10 py-24 overflow-hidden relative">
            
            <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-16">
                <span className="text-violet-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block animate-header">
                    Community
                </span>
                <h2 className={`${anton.className} text-[42px] md:text-5xl text-white uppercase animate-header`}>
                    Lo que dicen <br />
                    <span className="text-violet-500">de nosotros</span>
                </h2>
            </div>

            {/* Contenedor del Slider */}
            
            <div 
                onMouseEnter={() => setIsPause(true)}
                onMouseLeave={() => setIsPause(false)}
                className={`relative w-full bg-violet-600/10 border-y border-white/20 py-8 backdrop-blur-sm ${isPause ? '' : '-skew-2'} transition-transform duration-500`}
            >
                {/* Sombras laterales para suavizar la entrada/salida */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#020617]/60 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#020617]/60 to-transparent z-10 pointer-events-none" />

                <div 
                    ref={sliderRef}
                    className="flex gap-6 w-max px-4"
                >
                    {marqueeReviews.map((review, i) => (
                        <div
                            key={`${review.id}-${i}`}
                            className={`flex flex-col relative w-80 h-60 md:w-100 md:h-70 shrink-0 p-6 rounded-3xl bg-zinc-900 border border-white/20 hover:border-violet-500/30 transition-all duration-300 ${isPause ? 'hover:shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:z-50 hover:scale-105' : ''}`}
                        >
                            {/* Icono decorativo de fondo */}
                            <Quote className="absolute top-6 right-6 w-12 h-12 text-violet-600/10 rotate-180" />

                            {/* ESTRELLAS */}
                            <div className="flex gap-1 mb-2 md:mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        fill={i < review.stars ? "#FACC15" : "transparent"} // Relleno amarillo
                                        className={`w-4 h-4 ${i < review.stars ? "text-yellow-400" : "text-zinc-700"}`}
                                    />
                                ))}
                            </div>

                            {/* CONTENIDO */}
                            <p className="text-zinc-300 text-sm md:text-lg font-medium leading-relaxed mb-4 grow relative z-10">
                                {`"${review.content}"`}
                            </p>

                            {/* USUARIO */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                                <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border border-zinc-700">
                                    <User color="gray" className="object-cover w-full h-full p-2"/>
                                </div>
                                <div>
                                    <h4 className={`text-white text-lg leading-none mb-1 uppercase ${anton.className}`}>
                                        {review.name}
                                    </h4>
                                    <p className="text-violet-400 text-xs font-bold tracking-wider uppercase">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}