import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const fetchWorks = async () => {
  // Simulate fetching works data from an API or database
  return [
    { id: 1, title: "Project One", description: "Description of project one" },
    { id: 2, title: "Project Two", description: "Description of project two" },
    {
      id: 3,
      title: "Project Three",
      description: "Description of project three",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Description of project four",
    },
    {
      id: 5,
      title: "Project Five",
      description: "Description of project five",
    },
    { id: 6, title: "Project Six", description: "Description of project six" },
    {
      id: 7,
      title: "Project Seven",
      description: "Description of project seven",
    },
    {
      id: 8,
      title: "Project Eight",
      description: "Description of project eight",
    },
    {
      id: 9,
      title: "Project Nine",
      description: "Description of project nine",
    },
    {
      id: 10,
      title: "Project Ten",
      description: "Description of project ten",
    },
    {
      id: 11,
      title: "Project Eleven",
      description: "Description of project eleven",
    },
    {
      id: 12,
      title: "Project Twelve",
      description: "Description of project twelve",
    },
    {
      id: 13,
      title: "Project Thirteen",
      description: "Description of project thirteen",
    },
    {
      id: 14,
      title: "Project Fourteen",
      description: "Description of project fourteen",
    },
    {
      id: 15,
      title: "Project Fifteen",
      description: "Description of project fifteen",
    },
  ]
}

export default async function WorksPage() {
  const works = await fetchWorks()
  const url = "https://random.imagecdn.app/500/500"
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Works Page</h1>
      <p className="mt-4">
        This is the works page of the application. Here you can find a showcase
        of our projects and works.
      </p>
      <p className="mt-2">
        Feel free to explore the various works and learn more about what we do.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Our Works</h2>
        <div className="flex flex-wrap -mx-2 mt-4">
          {works.map((work) => (
            <Link
              key={work.id}
              href={`/works/${work.id}`}
              className="w-full sm:w-1/2 lg:w-1/3 p-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{work.title}</CardTitle>
                  <CardDescription>{work.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={url}
                    alt={work.title}
                    width={500}
                    height={500}
                    className="object-cover rounded"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
