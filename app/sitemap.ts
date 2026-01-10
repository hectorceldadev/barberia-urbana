import { MetadataRoute } from 'next'
import { SERVICES } from '@/constants/services'

const BASE_URL = 'https://celdabarber.es' 

export default function sitemap(): MetadataRoute.Sitemap {
  
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/galeria`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7, 
  }))

  // 3. Devolvemos la combinación de ambas listas
  return [...staticRoutes, ...serviceRoutes]
}