import Image from "next/image"
import { fetchWorks } from "@/utils/action"

export default async function HomePage() {
  const works = await fetchWorks()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-2 py-8">
      <div className="w-full max-w-6xl grid grid-cols-3 gap-4">
        {works.map((work, i) => (
          <div
            key={work.id}
            className="relative aspect-[3/4] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md group"
          >
            <Image
              src={work.images[0]}
              alt={work.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
