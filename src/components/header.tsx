"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between h-14 max-w-screen-2xl items-center px-20">
        <div className="hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold text-xl sm:inline-block">Muhammad Adnan</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.path ? "text-foreground" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button className="md:hidden">Menu</Button>
      </div>
    </header>
  )
}

