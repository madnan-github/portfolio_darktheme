import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { BackgroundBeams } from "@/components/ui/background-beams"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "A showcase of my work and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black">
          <BackgroundBeams />
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

