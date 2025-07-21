import { fetchWorkById } from "@/utils/action"
import Image from "next/image"

export default async function WorkPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>
}>) {
  const { id } = await params
  const work = await fetchWorkById(id)

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{work?.title}</h1>
      <p className="mt-4">{work?.description}</p>
      <Image
        src={work?.images[0] || ""}
        alt={work?.title || "Work Image"}
        width={500}
        height={500}
        className="mt-4 w-full h-auto object-cover rounded"
      />
    </div>
  )
}
