'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight, CalendarDays } from 'lucide-react'
import { SERVICES_BY_CATEGORY } from '@/constants/services'

// GSAP Imports
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { anton, geist } from '@/constants/tipography'


// Registrar plugins
gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  // Refs separados para animaciones específicas
  const containerRef = useRef(null) // Scope principal para GSAP
  const navRef = useRef(null)       // La barra de navegación visible
  const mobileMenuRef = useRef(null) // El contenedor del menú móvil

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  // Bloquear scroll del body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  // --- ANIMACIONES GSAP ---
  useGSAP(() => {
    // 1. Animación de Scroll (Ocultar al bajar, mostrar al subir)
    const showAnim = gsap.from(navRef.current, {
      yPercent: -150, // Se mueve hacia arriba más allá de su altura y margen
      paused: true,
      duration: 0.4,
      ease: "power3.inOut"
    }).progress(1)

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        // Si el menú móvil está abierto, no ocultamos la barra
        if (isMenuOpen) return;

        // Dirección 1 = bajando (ocultar), -1 = subiendo (mostrar)
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    })

  }, { scope: containerRef, dependencies: [isMenuOpen] })


  // 2. Animación de elementos del menú móvil (Secuencia/Stagger)
  useEffect(() => {
    if (isMenuOpen) {
      // Reiniciamos y animamos los elementos con la clase .mobile-anim-item
      gsap.fromTo('.mobile-anim-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", delay: 0.2 }
      )
    }
  }, [isMenuOpen])

  // 3. Animación de elementos del menú Desktop
  useEffect(() => {
    if (isServicesOpen) {
      gsap.fromTo('.desktop-service-item',
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.03, ease: "power1.out" }
      )
    }
  }, [isServicesOpen])


  return (
    <div ref={containerRef}> {/* Wrapper para el contexto de GSAP */}

      {/* NAVBAR PRINCIPAL */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] place-self-center ring ring-white/20 rounded-full z-100 bg-transparent backdrop-blur-md transition-shadow duration-300 py-2"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex justify-between h-14 items-center`}>

            {/* Logo */}
            <Link href="/" className={`text-[42px] -skew-2 font-extrabold tracking-tighter text-white relative z-101 ${anton.className}`}>
              Celda<span className="text-transparent bg-clip-text bg-linear-to-r from-violet-700 to-violet-500">Barber</span>
            </Link>

            {/* --- NAVEGACIÓN DESKTOP --- */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-md font-semibold text-white hover:text-violet-600 transition-colors">
                Inicio
              </Link>


              <Link href="/sobre-nosotros" className="text-md font-semibold text-white hover:text-violet-600 transition-colors">
                Sobre Nosotros
              </Link>
              {/* Desplegable Servicios */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-md font-semibold text-white hover:text-violet-600 transition-colors py-8">
                  Servicios
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega-Menu Desktop */}
                <div className={`
                  absolute top-[80%] left-1/2 -translate-x-1/2 w-160 lg:w-200
                  bg-white border border-gray-100 rounded-4xl shadow-2xl shadow-violet-500/10 
                  p-8 transition-all duration-300 origin-top z-50
                  ${isServicesOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2'}
                `}>
                  <div className="grid grid-cols-2 gap-10">
                    {Object.entries(SERVICES_BY_CATEGORY).map(([category, services]) => (
                      <div key={category}>
                        <h3 className="text-[10px] uppercase tracking-[0.2em] text-violet-400 font-black mb-6">
                          {category}
                        </h3>
                        <ul className="space-y-4">
                          {services.map((service) => (
                            <li key={service.slug} className="desktop-service-item"> {/* Clase para animación */}
                              <Link
                                href={`/servicios/${service.slug}`}
                                className="group/item flex items-center gap-4 text-sm text-gray-600 hover:text-violet-600 transition-colors"
                              >
                                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover/item:bg-violet-50 group-hover/item:text-violet-600 transition-all">
                                  {service.icon}
                                </div>
                                <span className="font-medium">{service.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Link href="/servicios" className="desktop-service-item block mt-8 pt-6 border-t border-gray-50 text-center text-xs font-bold text-gray-400 hover:text-violet-600 uppercase tracking-[0.2em] transition-colors">
                    Ver carta completa →
                  </Link>
                </div>
              </div>
              <Link href="/galeria" className="text-md font-semibold text-white hover:text-violet-600 transition-colors">
                Galería
              </Link>
              <Link href="/contacto" className="text-md font-semibold text-white hover:text-violet-600 transition-colors">
                Contacto
              </Link>
            </div>

            {/* Botón CTA Desktop */}
            <Link
              href="https://wa.me/34634779186?text=Hola%20Aura%20Estética,%20me%20gustaría%20pedir%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block hover:bg-violet-700 text-white px-7 py-3 rounded-full text-sm font-bold bg-violet-600 transition-all shadow-xl shadow-gray-900/10 active:scale-95"
            >
              Reservar Cita
            </Link>

            {/* --- BOTÓN MENÚ MÓVIL (Burger) --- */}
            <button
              className="md:hidden relative z-101 p-2 text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Alternar menú"
            >
              {isMenuOpen ? <X color='white' size={28} /> : <Menu color='white' size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENÚ MÓVIL (Full Screen Overlay) --- */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed inset-0 bg-[#020617] z-90 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${geist.className}
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10 overflow-y-auto">

          <div className="space-y-8 mb-12 flex-1">
            <div className="mobile-anim-item">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-4xl font-bold text-white">
                Inicio
              </Link>
            </div>

            {/* Sección Servicios Mobile */}
            <div className="mobile-anim-item">
              <p className="text-[10px] uppercase tracking-[0.2em] text-violet-400 font-black mb-6">
                Nuestros Servicios
              </p>
              <div className="grid grid-cols-1 gap-4">
                {Object.values(SERVICES_BY_CATEGORY).flat().slice(0, 4).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servicios/${service.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 ring ring-white active:bg-violet-50 transition-colors"
                  >
                    <div className="text-violet-600">{service.icon}</div>
                    <span className="font-semibold text-white">{service.title}</span>
                  </Link>
                ))}
                <Link
                  href="/servicios"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl  bg-violet-600 text-white font-bold active:bg-violet-700 active:scale-95 transition-all"
                >
                  Ver todos los servicios <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="mobile-anim-item">
              <Link href="/sobre-nosotros" onClick={() => setIsMenuOpen(false)} className="block text-4xl font-bold text-white">
                Nosotros
              </Link>
            </div>
            <div className="mobile-anim-item">
              <Link href="/galeria" onClick={() => setIsMenuOpen(false)} className="block text-4xl font-bold text-white">
                Galería
              </Link>
            </div>
            <div className="mobile-anim-item">
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)} className="block text-4xl font-bold text-white">
                Contacto
              </Link>
            </div>
          </div>

          <div className="mt-auto pt-4 mobile-anim-item">
            <Link
              href="/https://wa.me/34634779186?text=Hola%20Aura%20Estética,%20me%20gustaría%20pedir%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full bg-violet-600 text-white text-center py-5 rounded-3xl font-bold text-xl shadow-2xl shadow-violet-500/20 active:scale-95 transition-transform"
            >
              <CalendarDays className="w-6 h-6" />
              Reservar Cita
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}