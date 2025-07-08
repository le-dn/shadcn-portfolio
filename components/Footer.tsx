import { Separator } from "@/components/ui/separator"
import { DribbbleIcon, GithubIcon, TwitchIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <Separator />
      <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8">
        <footer>
          <div className="max-w-screen-xl mx-auto">
            <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
              {/* Copyright */}
              <span className="text-muted-foreground">
                &copy; {new Date().getFullYear()}{" "}
                <Link href="/" target="_blank">
                  Shadcn UI Blocks
                </Link>
                . All rights reserved.
              </span>
              <div className="flex items-center gap-5 text-muted-foreground">
                <Link href="#" target="_blank">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <DribbbleIcon className="h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <TwitchIcon className="h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <GithubIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
