// app/page.tsx — Página principal (ruta: /)
// Server Component que compone las secciones.

import HeroSection from "@/components/HeroSection";
import { heroImage } from "@/lib/data";
import ContactForm from "@/components/ContactForm";


export default function HomePage() {
  return (
    <>
      <HeroSection imageSrc={heroImage.src} imageAlt={heroImage.alt} />
      {/* Las demás secciones se agregarán en features posteriores */}
 



    <section className="mt-8 px-5 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Contacto</h2>
      <ContactForm/>
    </section>
       </>
  );
}