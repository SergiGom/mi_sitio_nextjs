// components/BlogSection.tsx

import BlogCard from "./BlogCard"
import { blogPost } from "@/lib/data"

export default function BlogSection() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      
      {/* Título */}
      <h2 className="text-xl font-semibold text-center mb-10">
        Últimas entradas del blog
      </h2>

    

      {/* Lista de posts */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {blogPost.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.excerpt} // 🔥 usamos excerpt
            image={post.image.src}     // 🔥 sacamos src
            slug={post.slug}
            date={post.date}
          />
        ))}
      </div>

    </section>
  )
}