'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Clock, Send, Instagram } from 'lucide-react'
import { anton, geist } from '@/constants/tipography'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export const Contacto = () => {
    const containerRef = useRef(null)
    const containerContactRef = useRef(null)

    const jsonLD = {
        "@context": "https://schema.org",
        "@type": "ContactPage", 
        "name": "Contacto y Citas - Celda Barber",
        "description": "Información de contacto, ubicación y horarios de Celda Barber en Silla.",
        "url": "https://celdabarber.es/contacto",
        "mainEntity": { 
            "@type": "HairSalon",
            "name": "Celda Barber",
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

    useGSAP(() => {

        gsap.from('.animate-header', {
            y: 40,
            duration: 0.4,
            stagger: 0.13,
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

        gsap.from('.animate-contact-section', {
            y: 40,
            duration: 0.6,
            opacity: 0,
            stagger: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: containerContactRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })

    }, { scope: containerRef })

    return (
        <section
            ref={containerRef}
            id="contacto"
            className={`w-full relative z-10 pt-30 pb-10 border-t border-white/5 overflow-hidden ${geist.className}`}
        >

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
            />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-100 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

                {/* Cabecera */}
                <div className="mb-12">
                    <h2 className={`text-[42px] md:text-5xl uppercase text-white mb-6 leading-none ${anton.className} animate-header`}>
                        Reserva <span className="text-zinc-600">&</span> <br />
                        <span className="text-violet-500">Contacto</span>
                    </h2>
                    <p className="text-zinc-400 text-lg max-w-xl animate-header">
                        Estamos en el corazón de <strong>Silla (Valencia)</strong> listos para cambiar tu imagen.
                        Reserva tu cita o escríbenos para cualquier duda sobre estilos o servicios.
                    </p>
                </div>

                <div
                    ref={containerContactRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 items-start ">

                    {/* LADO IZQUIERDO: Formulario de Contacto */}
                    <div className="lg:col-span-2 contact-reveal animate-contact-section">
                        <div className="bg-zinc-900 ring ring-white/20 p-8 md:p-10 rounded-2xl relative overflow-hidden group">

                            {/* Borde brillante al hover */}
                            <div className="absolute inset-0 border border-violet-500/0 group-hover:border-violet-500/20 rounded-3xl transition-colors duration-500 pointer-events-none" />

                            <form
                                method='POST'
                                action='https://formspree.io/f/mqeezkpa'
                                className="space-y-6 relative z-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Nombre</label>
                                        <input
                                            type="text"
                                            name='Nombre'
                                            placeholder="Tu nombre"
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-[#020617] border border-zinc-800 text-white placeholder-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Teléfono</label>
                                        <input
                                            type="tel"
                                            name='Teléfono'
                                            placeholder="600 000 000"
                                            required
                                            className="w-full px-5 py-4 rounded-xl bg-[#020617] border border-zinc-800 text-white placeholder-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Servicio</label>
                                    <div className="relative">
                                        <select
                                            name='Servicio'
                                            className="w-full px-5 py-4 rounded-xl bg-[#020617] border border-zinc-800 text-white focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            <option>Corte Urban & Fade</option>
                                            <option>Barba & Perfilado</option>
                                            <option>Diseños Freestyle</option>
                                            <option>Pack Completo</option>
                                            <option>Otro / Consulta</option>
                                        </select>
                                        {/* Flecha custom */}
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">Mensaje</label>
                                    <textarea
                                        rows={4}
                                        name='Mensaje'
                                        placeholder="Cuéntanos qué necesitas..."
                                        className="w-full px-5 py-4 rounded-xl bg-[#020617] border border-zinc-800 text-white placeholder-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type='submit'
                                    className="group/btn w-full py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2"
                                >
                                    Enviar Mensaje
                                    <Send className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* LADO DERECHO: Info y Mapa */}
                    <div className="lg:col-span-1 flex flex-col gap-4 contact-reveal">

                        {/* Tarjeta de Info */}
                        <div className="bg-zinc-900 ring ring-white/20 p-8 rounded-2xl space-y-6 animate-contact-section">

                            <div className="flex gap-5 items-start">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-violet-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className={`text-xl text-white uppercase mb-1 ${anton.className}`}>Ubicación</h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        Av. Luís Vives 14<br />
                                        46460 Silla, Valencia
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5 items-start">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-violet-400">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className={`text-xl text-white uppercase mb-1 ${anton.className}`}>Horario</h4>
                                    <ul className="text-zinc-400 text-sm space-y-1">
                                        <li className="flex justify-between w-40"><span>Lun - Vie:</span> <span className="text-white font-bold">10:00 - 20:00</span></li>
                                        <li className="flex justify-between w-40"><span>Sábados:</span> <span className="text-white font-bold">09:00 - 14:00</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex gap-5 items-start">
                                <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-violet-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className={`text-xl text-white uppercase mb-1 ${anton.className}`}>Contacto</h4>
                                    <a href="tel:+34600877977" className="text-zinc-400 text-sm hover:text-white transition-colors block mb-1">
                                        +34 600 87 79 77
                                    </a>
                                    <div className="flex gap-3 mt-3">
                                        <Link href="https://instagram.com/celdabarber" className="p-2 bg-white/5 rounded-md hover:bg-violet-600 hover:text-white text-zinc-500 transition-all">
                                            <Instagram size={18} />
                                        </Link>
                                        <Link href="https://wa.me/34600877977?text=Hola%20Celda%20Barber,%20me%20gustaría%20pedir%20cita" className="p-2 bg-white/5 rounded-md hover:bg-violet-600 hover:text-white text-zinc-500 transition-all">
                                            <Phone size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-2xl ring ring-white/20 h-75 lg:h-auto relative transition-all duration-700">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8055.387038917681!2d-0.4179848061566288!3d39.356681653906115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604d00336c8bb5%3A0x265a3a0c7ddaaf23!2sAvinguda%20de%20Llu%C3%ADs%20Vives%2C%2014%2C%2046460%20Silla%2C%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1767958245944!5m2!1ses!2ses"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='rounded-2xl'
                                >
                                </iframe>
                                {/* Overlay para que no sea tan brillante si el filtro CSS falla en algunos navegadores */}
                                <div className="absolute inset-0 bg-violet-900/10 pointer-events-none mix-blend-overlay"></div>
                            </div>
                        </div>

                        {/* Mapa con filtro Dark Mode */}

                    </div>
                </div>
            </div>
        </section>
    )
}