import ModeToggle from "./ModeToggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"

export default function Navbar() {
  return (
    <NavigationMenu className="max-w-3xl mx-auto px-4 py-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">L O G O</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/works">Works</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/about">About</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </NavigationMenu>
  )
}
