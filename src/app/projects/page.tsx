import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Globe } from 'lucide-react'
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project1",
    },
    {
      title: "Task Management App",
      description: "A responsive web application for managing tasks and projects with real-time updates.",
      technologies: ["Vue.js", "Firebase", "Vuex"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project2",
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current conditions and forecasts for multiple locations.",
      technologies: ["React", "OpenWeatherMap API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project3",
    },
    {
      title: "Social Media Analytics Tool",
      description: "A tool for analyzing and visualizing social media engagement and trends across platforms.",
      technologies: ["Python", "Django", "D3.js", "Twitter API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project4",
    },
    {
      title: "Fitness Tracking Mobile App",
      description: "A cross-platform mobile app for tracking workouts, nutrition, and fitness goals.",
      technologies: ["React Native", "Redux", "Express.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project5",
    },
    {
      title: "AI-powered Chatbot",
      description: "An intelligent chatbot for customer support, built with natural language processing capabilities.",
      technologies: ["Python", "TensorFlow", "Flask", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project6",
    },
  ]

  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl mb-8">A showcase of my best work and side projects</p>
      </section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Project Methodology</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">Here you can describe your approach to projects, including your development process, how you tackle challenges, and your commitment to best practices and clean code.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Client Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2].map((project) => (
            <Card key={project}>
              <CardHeader>
                <CardTitle>Client Project {project}</CardTitle>
                <CardDescription>Brief description of the client and project scope</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Details about the project, challenges overcome, and results achieved.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Technology 1</Badge>
                  <Badge>Technology 2</Badge>
                  <Badge>Technology 3</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Open Source Contributions</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">Highlight your contributions to open source projects, including pull requests, issues resolved, or your own open source projects.</p>
            <Button asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                View GitHub Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-center">Project Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2].map((testimonial) => (
            <Card key={testimonial}>
              <CardHeader>
                <CardTitle>Client Name {testimonial}</CardTitle>
                <CardDescription>Project: Project Name</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A testimonial from the client about the project&apos;s success and your contribution...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

