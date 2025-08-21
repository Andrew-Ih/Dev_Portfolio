import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Value Partners Investments",
    location: "Winnipeg, Canada",
    period: "May 2025 - Present",
    type: "Full-time",
    // description: "Leading development of scalable web applications using React, Node.js, and AWS cloud services. Architected microservices infrastructure serving 100k+ users.",
    technologies: ["C#", ".NET", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "MUI", "Azure DevOps", "Azure Function Apps", "Azure App Services", "XUnit", "Postman"],
    achievements: [
      "Developing and maintaining scalable RESTful APIs in C#/.NET, applying Clean Architecture and SOLID principles to ensure maintainable, high-performance backend systems.",
      "Designing, building, and optimizing CI/CD pipelines in Azure DevOps, leveraging deployment slots for seamless staging, validation, and production releases, reducing manual deployment time and increasing release reliability.",
      "Refactoring frontend, backend and API endpoints for improved performance and reliability, writing unit tests with XUnit, and using Postman extensively for testing, and debugging across development environments. ",
      "Deploying cloud services with Azure Function Apps and App Services, delivering event-driven, scalable architectures.",
      "Creating responsive web applications using React, Next.js, TypeScript, JavaScript, Tailwind CSS, and MUI, ensuring UI consistency, accessibility, and user-centric design.",
      "Participating in frequent code reviews to enforce best practices, reduce technical debt, and maintain long-term scalability.",
    ]
  },
  {
    title: "IT Support Analyst",
    company: "IST - University of Manitoba",
    location: "Winnipeg, Canada",
    period: "September 2024 - April 2025",
    type: "Part-time",
    // description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["Azure AD", "Entra", "Exchange Admin Center", "PowerShell", "Cherwell", "IT Service Management"],
    achievements: [
      "Managed user accounts and permissions through Azure AD, Entra, and Exchange Admin Center.",
      "Automated tasks using PowerShell to streamline account creation, management, troubleshooting and issue resolution.",
      "Resolved 30+ daily tickets using Cherwell and IT service management tools, improving issue resolution time by 20%",
      "Created detailed documentation and training materials to improve resource utilization and reduce recurring technical issues."
    ]
  },
  {
    title: "Software Developer Lead",
    company: "UX Design Club - University of Manitoba",
    location: "Winnipeg, Canada",
    period: "January 2024 - August 2024",
    type: "Volunteer",
    // description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["Javascript", "HTML", "CSS", "Figma"],
    achievements: [
      "Led the creation of responsive and user-friendly interfaces using JavaScript, HTML, CSS, and related front and back-end technologies, enhancing user experience and interface aesthetics.",
      "Actively demonstrated strong communication and time management skills, facilitating effective collaboration and teamwork within a dynamic development environment.",
      "Actively participated in Test-Driven Development (TDD) practices, writing, and executing tests to ensure the reliability and quality of code, fostering a culture of quality assurance within the development process.",
    ]
  },
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

                {/* <p className="text-foreground-muted mb-6 leading-relaxed">
                  {experience.description}
                </p> */}

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
                    <h3 className="font-semibold text-lg">Bachelor of Computer Science - Honours (Co-op)</h3>
                    <p className="text-foreground-muted">University of Manitoba</p>
                </div>
                <Badge variant="outline">
                    Dec 2026
                </Badge>
                </div>
                <p className="text-foreground-muted text-sm">
                Expected graduation with focus on software engineering and system design.
                </p>
            </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">AWS Cloud Practitioner</h3>
                    <p className="text-foreground-muted">Amazon Web Services</p>
                  </div>
                  <Badge variant="outline" className="border-success text-success">
                    June 2025 - June 2028
                  </Badge>
                </div>
                <p className="text-foreground-muted text-sm">
                  Foundational understanding of AWS Cloud, services, and terminology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
