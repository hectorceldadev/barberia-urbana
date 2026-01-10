'use client'

import Link from 'next/link'
import { Instagram, Heart, Phone } from 'lucide-react'
import { anton } from '@/constants/tipography'


export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 border-t border-white/20 relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 md:ml-20 gap-12 mb-4">

          {/* Columna 1: Branding */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className={`text-[42px] -skew-2 font-extrabold tracking-tighter text-white relative z-101 ${anton.className}`}>
              Celda<span className="text-transparent bg-clip-text bg-linear-to-r from-violet-700 to-violet-500">Barber</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tu peluquería de confianza en Silla (Valencia). Fusionamos la barbería clásica con el estilo más actual. Cuidamos tu imagen y definimos tu estilo.
            </p>
            {/* Redes Sociales */}
            <div className="flex gap-4 pt-2">
              <Link href="https://instagram.com/celdabarber" className="w-10 h-10 rounded-full bg-zinc-800 ring ring-white/20 flex items-center justify-center text-gray-400 hover:ring-violet-600 hover:text-violet-600 transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="https://wa.me/34600877977?text=Hola%20Celda%20Barber,%20me%20gustaría%20pedir%20cita" className="w-10 h-10 rounded-full bg-zinc-800 ring ring-white/20 flex items-center justify-center text-gray-400 hover:ring-violet-600 hover:text-violet-600 transition-all">
                <Phone size={20} />
              </Link>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-bold text-white mb-6">Explora</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="/servicios" className="hover:text-violet-600 transition-colors">Servicios</Link></li>
              <li><Link href="/galeria" className="hover:text-violet-600 transition-colors">Galería</Link></li>
              <li><Link href="/sobre-nosotros" className="hover:text-violet-600 transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="https://wa.me/https://wa.me/34600877977?text=Hola%20Celda%20Barber,%20me%20gustaría%20pedir%20cita" target="_blank"
                rel="noopener noreferrer" className="hover:text-violet-600 transition-colors">Cita Previa</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios Destacados */}
          <div>
            <h4 className="font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link className='hover:text-violet-600 transition-colors' href={'/servicios/corte'}>Corte</Link></li>
              <li><Link className='hover:text-violet-600 transition-colors' href={'/servicios/arreglo-de-barba'}>Barba & Perfilado</Link> </li>
              <li><Link className='hover:text-violet-600 transition-colors' href={'/servicios/diseño'}>Diseño</Link></li>
              <li><Link className='hover:text-violet-600 transition-colors' href={'/servicios/cejas'}>Cejas</Link></li>
            </ul>
          </div>



        </div>

        {/* Línea inferior de Copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Celda Barber. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart size={14} className="text-violet-500 fill-violet-500" /> por <Link href={'https://tunegocioeninternet.es'}>tunegocioeninternet.es</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}