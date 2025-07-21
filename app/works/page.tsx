import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { fetchWorks } from "@/utils/action"
import Image from "next/image"
import Link from "next/link"

export default async function WorksPage() {
  const works = await fetchWorks()

  return (
    <section className="max-w-3xl mx-auto p-6">
      <div className="mt-6">
        <div className="w-full flex items-center gap-4 mb-6 select-none">
          <hr className="flex-grow border-t-2 border-gray-300 dark:border-gray-600" />
          <span className="text-4xl font-bold tracking-widest text-center px-4 whitespace-nowrap">
            WORKS
          </span>
          <hr className="flex-grow border-t-2 border-gray-300 dark:border-gray-600" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {works.map((work) => (
            <Link key={work.id} href={`/works/${work.id}`} className="block">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-none">
                  <CardTitle>{work.title}</CardTitle>
                  <CardDescription className="min-h-[2.5rem] line-clamp-2">
                    {work.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <Image
                    src={work.images[0]}
                    alt={work.title}
                    width={500}
                    height={500}
                    className="object-cover rounded w-full"
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
