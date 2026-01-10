import "./globals.css";
import Navbar from "@/components/Header";
import { Footer } from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://celdabarber.es'),
  // TÍTULO: Branding + Palabra Clave Principal (Peluquería/Barbería) + Ubicación + Gancho
  title: "Celda Barber | Peluquería y Barbería en Silla - Fades & Cortes Urbanos",

  // DESCRIPCIÓN: Atacamos la intención de búsqueda y los pueblos vecinos
  description: "La nueva referencia de peluquería masculina en Silla (Valencia). Especialistas en degradados (fades), arreglo de barba y diseños freestyle. Tu espacio de confianza a 5 min de Picassent, Albal y Catarroja.",

  // KEYWORDS: Etiquetas para ayudar (aunque Google ya lee el texto, esto suma)
  keywords: [
    "Barbería Silla",
    "Peluquería hombre Silla",
    "Peluquería hombre Catarroja",
    "Peluquería hombre Albal",
    "Peluquería hombre Picasssent",
    "Peluquería Silla",
    "Peluquería Catarroja",
    "Peluquería Albal",
    "Peluquería Picasssent",
    "Cortes de pelo modernos Valencia",
    "Mejor degradado Silla",
    "Barbero cerca de Picassent",
    "Barbero cerca de Albal",
    "Celda Barber"
  ],

  // OPEN GRAPH: Cómo se ve cuando compartes el enlace por WhatsApp o Instagram
  openGraph: {
    title: "Celda Barber | Tu Estilo Urbano en Silla",
    description: "Cortes Fades, arreglos de barba y el mejor ambiente. Reserva tu cita en Silla.",
    url: "https://celdabarber.com", // ⚠️ CAMBIA ESTO POR TU DOMINIO REAL CUANDO LO TENGAS
    siteName: "Celda Barber",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/twitter-card.png", 
        width: 1200,
        height: 630,
        alt: "Celda Barber - Barbería en Silla",
      },
    ],
  },

};

// 2. SCHEMA MARKUP: El DNI del negocio para Google Maps
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon", // Google sabe que cortas pelo
  "name": "Celda Barber",
  "image": "https://celdabarber.com/images/gallery/salón-belleza.webp", // Usa una foto real tuya
  "@id": "https://celdabarber.com",
  "url": "https://celdabarber.com",
  "telephone": "+34600877977",
  "priceRange": "€€", // Indica precio medio
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenida Luis Vives 14",
    "addressLocality": "Silla",
    "addressRegion": "Valencia",
    "postalCode": "46460", // Código postal de Silla
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.358865,
    "longitude": -0.413265
  },
  "areaServed": [
    { "@type": "City", "name": "Silla" },
    { "@type": "City", "name": "Picassent" },
    { "@type": "City", "name": "Albal" },
    { "@type": "City", "name": "Catarroja" },
    { "@type": "City", "name": "Alcàsser" },
    { "@type": "City", "name": "Beniparrell" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "20:00" //** */ ⚠️ PONER HORARIO
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://instagram.com/celdabarber" // ⚠️ Pon tu Instagram real aquí
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
