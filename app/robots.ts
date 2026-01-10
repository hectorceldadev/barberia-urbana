import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Cambia este dominio por el tuyo real cuando lo compres
  const baseUrl = 'https://celdabarber.es' 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Por si algún día tienes zona privada
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}