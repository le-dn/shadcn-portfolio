export default function WorkPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Work {params.id}</h1>
      <p className="mt-4">This is the detail page for work {params.id}.</p>
      <p className="mt-2">You can add more details about this work here.</p>
      <img
        src={`https://random.imagecdn.app/500/500?${params.id}`}
        alt={`Work ${params.id}`}
        className="mt-4 w-full h-auto object-cover rounded"
      />
    </div>
  )
}
