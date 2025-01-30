import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Briefcase, Lightbulb, Mail, User } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">I&apos;m a passionate developer creating amazing web experiences</p>
        <Button asChild>
          <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "About Me", icon: User, link: "/about" },
          { title: "My Projects", icon: Code, link: "/projects" },
          { title: "My Skills", icon: Lightbulb, link: "/skills" },
          { title: "Work Experience", icon: Briefcase, link: "/about#experience" },
          { title: "Education", icon: User, link: "/about#education" },
          { title: "Contact", icon: Mail, link: "/contact" },
        ].map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <item.icon className="mr-2 h-5 w-5" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn more about {item.title.toLowerCase()}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={item.link}>View <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Project</h2>
        <Card>
          <CardHeader>
            <CardTitle>Project Name</CardTitle>
            <CardDescription>A brief description of the project</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">This is a more detailed explanation of the project, its features, and technologies used.</p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/projects">View Project</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((post) => (
            <Card key={post}>
              <CardHeader>
                <CardTitle>Blog Post Title {post}</CardTitle>
                <CardDescription>Posted on {new Date().toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A brief excerpt from the blog post...</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="mb-8">I&apos;m always open to new opportunities and collaborations</p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial}>
              <CardHeader>
                <CardTitle>Client Name {testimonial}</CardTitle>
                <CardDescription>Company {testimonial}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A glowing testimonial about your work and professionalism...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

