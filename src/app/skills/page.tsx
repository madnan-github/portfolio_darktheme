import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 60 },
        { name: "Next.js", level: 70 },
        { name: "HTML5", level: 85 },
        { name: "CSS3", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 35 },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 70 },
      ],
    },
    {
      name: "DevOps & Tools",
      skills: [
        { name: "Git", level: 80 },
        { name: "AWS", level: 50 },
      ],
    },
  ]

  return (
    <div className="space-y-20">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">My Skills</h1>
        <p className="text-xl mb-8">An overview of my technical skills and expertise</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Skill Categories</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Proficiencies</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2">
              <Badge>JavaScript</Badge>
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express.js</Badge>
              <Badge>MongoDB</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>GraphQL</Badge>
              <Badge>RESTful APIs</Badge>
              <Badge>Git</Badge>
              <Badge>Docker</Badge>
              <Badge>AWS</Badge>
              <Badge>CI/CD</Badge>
              <Badge>Agile Methodologies</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Soft Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Problem Solving",
            "Team Collaboration",
            "Communication",
            "Adaptability",
            "Time Management",
            "Leadership",
          ].map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{skill}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Brief description of how you apply this soft skill in your work.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Learning & Development</h2>
        <Card>
          <CardHeader>
            <CardTitle>Continuous Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Describe your approach to staying up-to-date with the latest technologies and your commitment to continuous learning. Mention any recent courses, workshops, or conferences you&apos;ve attended.</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Online Courses</Badge>
              <Badge variant="outline">Tech Conferences</Badge>
              <Badge variant="outline">Coding Challenges</Badge>
              <Badge variant="outline">Open Source Contributions</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Project Highlights</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2].map((project) => (
            <Card key={project}>
              <CardHeader>
                <CardTitle>Project {project}</CardTitle>
                <CardDescription>Brief project description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Highlight the key skills you utilized in this project and any challenges you overcame.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Skill 1</Badge>
                  <Badge>Skill 2</Badge>
                  <Badge>Skill 3</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

