import { Contacto } from "@/components/Contacto";
import Galeria from "@/components/Galeria";
import Hero from "@/components/Hero";
import { Reviews } from "@/components/Reviews";
import Servicios from "@/components/Servicios";

export default function page() {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
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
      <Hero />
      <Servicios />
      <Galeria />
      <Reviews />
      <Contacto />
    </div>
  )
}