import { fetchWorkById, fetchWorks } from "@/utils/action"
import Image from "next/image"
import Link from "next/link"

export default async function WorkPage({ params }: { params: { id: string } }) {
  // Next.js passes params synchronously
  const { id } = params
  const work = await fetchWorkById(id)
  const works = await fetchWorks()
  const idx = works.findIndex((w) => w.id === id)
  const prevWork = idx > 0 ? works[idx - 1] : null
  const nextWork = idx < works.length - 1 ? works[idx + 1] : null

  return (
    <div className="relative max-w-3xl mx-auto p-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{work?.title}</h1>
        <p className="mt-4">{work?.description}</p>
        <div className="mt-4 grid gap-4">
          {work?.images?.map((img: string, i: number) => (
            <Image
              key={i}
              src={img}
              alt={
                work?.title
                  ? `${work.title} image ${i + 1}`
                  : `Work Image ${i + 1}`
              }
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded"
              priority={i === 0}
            />
          ))}
        </div>
      </div>
      {/* Navigation Buttons at Corners */}
      {prevWork && (
        <Link
          href={`/works/${prevWork.id}`}
          className="absolute left-[-64px] bottom-8 z-20 w-16 h-16 flex items-center justify-center bg-transparent"
          aria-label="Previous work"
        >
          <div className="item-pagination-icon icon icon--stroke rotate-180">
            <svg
              className="caret-right-icon--small w-10 h-10 stroke-current"
              viewBox="0 0 9 16"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                points="1.6,1.2 6.5,7.9 1.6,14.7"
              ></polyline>
            </svg>
          </div>
        </Link>
      )}
      {nextWork && (
        <Link
          href={`/works/${nextWork.id}`}
          className="absolute right-[-64px] bottom-8 z-20 w-16 h-16 flex items-center justify-center bg-transparent"
          aria-label="Next work"
        >
          <div className="item-pagination-icon icon icon--stroke">
            <svg
              className="caret-right-icon--small w-10 h-10 stroke-current"
              viewBox="0 0 9 16"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeMiterlimit="10"
                points="1.6,1.2 6.5,7.9 1.6,14.7"
              ></polyline>
            </svg>
          </div>
        </Link>
      )}
    </div>
  )
}
