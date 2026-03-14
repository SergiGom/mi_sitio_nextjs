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
    {id: 3, src: "/img/img3.jpg", alt: "Guerreros peleando", width:1024,
        height: 768},
    {id: 4, src: "/img/img4.jpg", alt: "Caballo en paisaje brumoso", width:1024,
        height: 768},
    {id: 5, src: "/img/img5.jpg", alt: "Ciudad futurista con luces neón", width:1024,
        height: 768},
    {id: 6, src: "/img/img6.jpg", alt: "Caballo en paisaje brumoso", width:1024,
        height: 768},
    {id: 7, src: "/img/img7.jpg", alt: "Caballo en paisaje brumoso", width:1024,
        height: 768},
    {id: 8, src: "/img/img8.jpg", alt: "Ciudad futurista con luces neón", width:1024,
        height: 768},
    {id: 9, src: "/img/img9.jpg", alt: "Caballo en paisaje brumoso", width:1024,
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
    {
        id:2,
        slug: "Caballo-corre-campo",
        title: "Caballo corriendo en el campo",
        date: "18 de abril de 2025",
        excerpt: "Cómo los caballos se ven en libertad",
        image: {src: "/img/img1.jpg", alt:"Caballo en paisaje brumoso"},
    },
    {
        id:3,
        slug: "Guerra",
        title: "Guerreros en medio de una pelea",
        date: "10 de enero de 2026",
        excerpt: "Un campo de batalla con los guerreros peleando",
        image: {src: "/img/img2.jpg", alt:"Guerreros peleando"},
    },
    {
        id:4,
        slug: "Caballo-corre-cmpo",
        title: "Caballo corriendo en el campo",
        date: "18 de abril de 2025",
        excerpt: "Cómo los caballos se ven en libertad",
        image: {src: "/img/img1.jpg", alt:"Caballo en paisaje brumoso"},
    },
    {
        id:5,
        slug: "Caballo-corre-cmpo",
        title: "Caballo corriendo en el campo",
        date: "18 de abril de 2025",
        excerpt: "Cómo los caballos se ven en libertad",
        image: {src: "/img/img1.jpg", alt:"Caballo en paisaje brumoso"},
    }


]