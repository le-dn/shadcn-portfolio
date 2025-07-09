import Image from "next/image"

export default async function WorkPage({
  params,
}: Readonly<{
  params: Promise<{ id: string }>
}>) {
  const { id } = await params
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Work {id}</h1>
      <p className="mt-4">This is the detail page for work {id}.</p>
      <p className="mt-2">You can add more details about this work here.</p>
      <Image
        src={`https://random.imagecdn.app/500/500`}
        alt={`Work ${id}`}
        width={500}
        height={500}
        className="mt-4 w-full h-auto object-cover rounded"
      />
    </div>
  )
}
