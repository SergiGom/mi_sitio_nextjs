// components/Footer.tsx

import Link from "next/link"
import { siteConfig } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="w-[90%] max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Marca */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            {siteConfig.name}
          </h3>
          <p className="text-sm">
            Sitio web moderno creado con Next.js. Compartimos contenido sobre
            tecnología, innovación y desarrollo.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Navegación
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Contacto
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Email: contacto@misitio.com</li>
            <li>Tel: +57 300 000 0000</li>
            <li>Colombia</li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  )
}