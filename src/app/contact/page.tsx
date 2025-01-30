import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export default function Contact() {
  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-xl mb-8">Get in touch for collaborations or just to say hello.</p>
      </section>

      <section className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                <Input id="subject" placeholder="Message subject" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                <Textarea id="message" placeholder="Your message" />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-auto">Send Message</Button>
          </CardFooter>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Connect With Me</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Email", icon: Mail, link: "mailto:madnanedu@gmail.com" },
            { name: "GitHub", icon: Github, link: "https://github.com/madnan-github" },
            { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/muhammad~adnan" },
          ].map((platform, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <platform.icon className="mr-2 h-5 w-5" />
                  {platform.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                    Connect on {platform.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[
            { question: "What services do you offer?", answer: "I specialize in Front-end web development, focusing on Next.js and modern web technologies." },
            { question: "What is your typical project timeline?", answer: "Project timelines vary depending on scope and complexity. I'll provide a detailed estimate after our initial consultation." },
            { question: "Do you offer ongoing maintenance?", answer: "Yes, I offer maintenance packages to keep your project up-to-date and running smoothly." },
            { question: "How do you handle project communication?", answer: "I use a combination of email, video calls, and project management tools to ensure clear and consistent communication throughout the project." },
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="mb-8">I&apos;m excited to hear about your project and how we can collaborate to bring your ideas to life.</p>
        <Button asChild size="lg">
          <Link href="#top">Get in Touch</Link>
        </Button>
      </section>
    </div>
  )
}
