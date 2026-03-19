import Image from "next/image"
import Link from "next/link"

type BlogCardProps = {
  title: string
  description: string
  image: string
  slug: string
  date?: string
}

export default function BlogCard({
  title,
  description,
  image,
  slug,
  date,
}: BlogCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border-b pb-6">
      
      {/* Imagen */}
      <div className="w-full sm:w-48 h-32 relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>

          {date && (
            <p className="text-xs text-gray-500 mb-2">
              {date}
            </p>
          )}

          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>

        <Link
          href={`/blog/${slug}`}
          className="mt-3 inline-block w-fit px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
        >
          Leer más
        </Link>
      </div>
    </div>
  )
}