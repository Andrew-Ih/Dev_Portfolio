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
                    Designing and deploying cloud infrastructure on AWS with focus 
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
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-semibold text-foreground">
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", 
                "Kubernetes", "MongoDB", "PostgreSQL", "Redis", "GraphQL", 
                "REST APIs", "Git", "CI/CD", "Terraform", "Linux"
              ].map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="bg-accent hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AWS Badge Card */}
          <Card className="gradient-card shadow-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-success">AWS</span>
              </div>
              <h3 className="font-semibold mb-2">AWS Certified</h3>
              <p className="text-sm text-foreground-muted mb-4">
                Cloud Practitioner
              </p>
              <Badge variant="outline" className="border-success text-success">
                Verified Certification
              </Badge>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="gradient-card shadow-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-foreground-muted">Remote / Nigeria</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-foreground-muted">andrew@example.com</span>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4" />
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
