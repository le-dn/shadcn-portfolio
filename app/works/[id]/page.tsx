import Image from "next/image"

export default async function WorkPage({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Work {params.id}</h1>
      <p className="mt-4">This is the detail page for work {params.id}.</p>
      <p className="mt-2">You can add more details about this work here.</p>
      <Image
        src={`https://random.imagecdn.app/500/500?${id}`}
        alt={`Work ${id}`}
        className="mt-4 w-full h-auto object-cover rounded"
      />
    </div>
  )
}
