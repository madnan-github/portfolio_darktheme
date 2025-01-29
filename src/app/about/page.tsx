import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="max-w-3xl mx-auto space-y-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl mb-8">Get to know me and my journey in web development</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">My Story</h2>
        <Card>
          <CardContent className="pt-6">
            <p>Here's where you can write a detailed paragraph about your background, how you got into web development, and what drives your passion for creating digital experiences.</p>
          </CardContent>
        </Card>
      </section>

      <section id="experience">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          {[
            { title: "Senior Developer", company: "Tech Co", period: "2020 - Present" },
            { title: "Web Developer", company: "Digital Agency", period: "2018 - 2020" },
            { title: "Junior Developer", company: "Startup Inc", period: "2016 - 2018" },
          ].map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.company} | {job.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Key responsibility or achievement</li>
                  <li>Another important contribution</li>
                  <li>Technology or skill utilized in this role</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="education">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Science in Computer Science</CardTitle>
            <CardDescription>University Name | 2012 - 2016</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Brief description of your educational experience, key courses, or projects.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Skills Overview</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>HTML5</Badge>
              <Badge>CSS3</Badge>
              <Badge>Git</Badge>
              <Badge>Responsive Design</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Interests & Hobb
ies</h2>
        <Card>
          <CardContent className="pt-6">
            <p>Share a bit about your personal interests, hobbies, or activities outside of work. This helps to give a more rounded picture of who you are.</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2022" },
            { name: "Google Analytics Certification", issuer: "Google", year: "2021" },
          ].map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{cert.name}</CardTitle>
                <CardDescription>{cert.issuer} | {cert.year}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

