import GalleryImageComponent from "./GalleryImage"
import { galleryImages } from "@/lib/data"

export default function Gallery() {
  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.slice(0, 6).map((img) => (
            <GalleryImageComponent key={img.id} image={img} />
          ))}
        </div>

      </div>
    </section>
  )
}
