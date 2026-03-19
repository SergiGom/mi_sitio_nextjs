// app/page.tsx

import HeroSection from "@/components/HeroSection"
import Gallery from "@/components/Gallery"
import BlogSection from "@/components/BlogSection"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

import { heroImage } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
      />

      {/* GALERÍA */}
      <Gallery />

      {/* BLOG */}
      <BlogSection />

      {/* CONTACTO */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />
    </>
  )
}