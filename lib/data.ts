//  Fuente de datos centralizada. En produccion, estos datos
//  vendrían de un  CMS (Strapi, Sanity) o base de datos.

import type { GalleryImageType, BlogPost, SiteConfig} from "@/types";

export const siteConfig: SiteConfig = {
    name: "Mi Sitio Web",
    description: "Galería, blog y contacto - Taller SENA CEET",
    url: "https://mi-sitio.azurestaticapps.net",
    author: "SENA CEET - ADSO",
    year: new Date().getFullYear(), // Año Dinamico
}

export const heroImage = {
    src: "/img/header.jpg",
    alt: "Imagen principal del sitio",
};

export const GalleryImage: GalleryImageType[] = [
    {id: 1, src: "/img/img1.jpg", alt: "Ciudad futurista con luces neón", width:1024,
        height: 768},
    {id: 2, src: "/img/img2.jpg", alt: "Caballo en paisaje brumoso", width:1024,
        height: 768},
    // Agregar las otras 6 imagenes
];

export const blogPost: BlogPost[] = [
    {
        id:1,
        slug: "Inteligencia-artificial-trabajo",
        title: "IA en el trabajo",
        date: "15 de marzo de 2025",
        excerpt: "Cómo la IA transforma los espacios de trabajo...",
        image: {src: "/img/img7.jpg", alt:"Robot en escritorio"},
    },
    //  Agregar las 3 entradas
]