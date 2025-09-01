import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail, Linkedin, Github } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              About Me
            </h1>
            <p className="text-xl text-foreground-muted leading-relaxed">
              Passionate software developer with expertise in full-stack web development 
              and cloud technologies. I love creating elegant solutions to complex problems 
              and building applications that make a difference.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-semibold text-foreground">
              What I Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 gradient-text">
                    Frontend Development
                  </h3>
                  <p className="text-foreground-muted">
                    Creating responsive, interactive user interfaces with React, TypeScript, 
                    and modern CSS frameworks.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 gradient-text">
                    Backend Development
                  </h3>
                  <p className="text-foreground-muted">
                    Building scalable APIs and server-side applications using Node.js, 
                    Python, and various databases.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 gradient-text">
                    Cloud Computing
                  </h3>
                  <p className="text-foreground-muted">
                    Designing and deploying cloud infrastructure on AWS & Azure with focus 
                    on scalability, security, and cost optimization.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 gradient-text">
                    DevOps & CI/CD
                  </h3>
                  <p className="text-foreground-muted">
                    Implementing automated deployment pipelines and infrastructure 
                    as code for efficient development workflows.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills */}
          {/* <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold text-foreground">
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "C", "SQL", "HTML", "CSS", "XML",
                "Node.js", "Express.js", ".NET", "React", "Next.js", "JUnit", "Tailwind CSS", "XUnit",
                "Microsoft Azure", "AWS", "DevOps", "CI/CD Pipelines",
                "Git", "GitHub", "Visual Studio", "VS Code", "Webpack", "IntelliJ", "AppWrite", "Postman", "Android Studio", "Figma"
              ].map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div> */}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AWS Certification Card */}
          <Card className="gradient-card shadow-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-48 h-48 mx-auto mb-4 relative">
                  <img 
                    src="/aws-certified-cloud-practitioner-3.png" 
                    alt="AWS Certified Cloud Practitioner Badge"
                    className="w-full h-full object-contain"
                  />
                </div>
                <a 
                  href="https://www.credly.com/badges/4be29c3c-64b0-479a-abce-a14ad64c0320/public_url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer block"
                >
                  AWS Certified Cloud Practitioner
                </a>
                {/* <p className="text-sm text-foreground-muted leading-relaxed">
                  The AWS Certified Cloud Practitioner certification validates foundational, 
                  high-level understanding of AWS Cloud, services, and terminology.
                </p> */}
              </div>
              <Badge variant="outline" className="w-full justify-center border-success text-success py-1">
                Verified Certification
              </Badge>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="gradient-card shadow-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-m">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-foreground-muted">Winnipeg, Canada</span>
                </div>
                <div className="flex items-center space-x-3 text-m">
                  <Mail className="h-6 w-6 text-primary" />
                  <a 
                    href="mailto:andrewiheanacho811@gmail.com" 
                    className="text-foreground-muted hover:text-primary transition-colors"
                  >
                    andrewiheanacho811@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                  size="sm"
                  asChild
                >
                  {/* <a href="/AndrewIheanacho-Resume.pdf" download="AndrewIheanacho_Resume.pdf"> */}
                  <a href="/AndrewIheanacho-Resume.pdf" target="_blank" rel="noopener noreferrer">

                    <Download className="h-4 w-4 mr-2" />
                    View Resume
                  </a>
                </Button>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href="https://www.linkedin.com/in/andrew-iheanacho-ab330b232/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href="https://github.com/Andrew-Ih" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
