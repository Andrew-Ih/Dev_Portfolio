import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovation Corp",
    location: "Remote",
    period: "2023 - Present",
    type: "Full-time",
    description: "Leading development of scalable web applications using React, Node.js, and AWS cloud services. Architected microservices infrastructure serving 100k+ users.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "PostgreSQL"],
    achievements: [
      "Improved application performance by 40% through optimization",
      "Led team of 5 developers on major product redesign",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    location: "Lagos, Nigeria",
    period: "2022 - 2023",
    type: "Full-time",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["React", "Python", "Django", "MongoDB", "AWS"],
    achievements: [
      "Delivered 12+ successful client projects on time",
      "Reduced bug reports by 35% through improved testing",
      "Mentored 3 junior developers"
    ]
  },
  {
    title: "Frontend Developer",
    company: "StartupX",
    location: "Remote",
    period: "2021 - 2022",
    type: "Contract",
    description: "Built responsive web applications and mobile-first interfaces. Worked closely with UX designers to implement interactive user experiences.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    achievements: [
      "Increased user engagement by 25% through UI improvements",
      "Implemented automated testing reducing QA time by 50%",
      "Created reusable component library"
    ]
  }
];

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Experience
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed max-w-3xl">
            My professional journey in software development, from building 
            user interfaces to architecting cloud infrastructure.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="gradient-card shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold gradient-text">
                      {experience.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-foreground-muted">
                      <span className="font-semibold text-foreground">
                        {experience.company}
                      </span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="outline" className="text-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {experience.period}
                    </Badge>
                    <Badge variant="secondary">
                      {experience.type}
                    </Badge>
                  </div>
                </div>

                <p className="text-foreground-muted mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-foreground">
                    Key Achievements:
                  </h3>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li 
                        key={achievementIndex}
                        className="flex items-start space-x-2"
                      >
                        <ExternalLink className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-foreground-muted">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">
                    Technologies Used:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-accent hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education/Certifications */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold gradient-text">
            Education & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">AWS Cloud Practitioner</h3>
                    <p className="text-foreground-muted">Amazon Web Services</p>
                  </div>
                  <Badge variant="outline" className="border-success text-success">
                    2023
                  </Badge>
                </div>
                <p className="text-foreground-muted text-sm">
                  Foundational understanding of AWS Cloud, services, and terminology.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">Computer Science Degree</h3>
                    <p className="text-foreground-muted">University Name</p>
                  </div>
                  <Badge variant="outline">
                    2020
                  </Badge>
                </div>
                <p className="text-foreground-muted text-sm">
                  Bachelor's degree with focus on software engineering and algorithms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
