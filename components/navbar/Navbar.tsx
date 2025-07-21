import Link from "next/link"
import ModeToggle from "./ModeToggle"
import { Logo } from "./Logo"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <NavigationMenu>
            <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/works">Works</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
