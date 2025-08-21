import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
    image: "/placeholder-project-1.jpg",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    github: "https://github.com/andrew/ecommerce",
    demo: "https://ecommerce-demo.com",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, file sharing, and team analytics. Features drag-and-drop interface and mobile responsiveness.",
    image: "/placeholder-project-2.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/andrew/taskmanager",
    demo: "https://taskmanager-demo.com",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts. Integrates multiple weather APIs.",
    image: "/placeholder-project-3.jpg",
    technologies: ["Vue.js", "Chart.js", "Express.js", "MongoDB"],
    github: "https://github.com/andrew/weather-app",
    demo: "https://weather-demo.com",
    featured: true
  }
];

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Featured Projects
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed max-w-3xl">
            A showcase of my recent work - from full-stack web applications to 
            cloud-native solutions. Each project demonstrates different aspects 
            of modern software development.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group gradient-card shadow-card hover:shadow-glow transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold gradient-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            asChild
          >
            <Link to="/projects/archive">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>

        {/* Skills Highlight */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-bold gradient-text text-center">
            What I Bring to Your Project
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="gradient-card shadow-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Fast Development</h3>
                <p className="text-sm text-foreground-muted">
                  Rapid prototyping and efficient development cycles using modern tools and practices.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">User-Focused</h3>
                <p className="text-sm text-foreground-muted">
                  Designing with user experience in mind, ensuring intuitive and accessible interfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="font-semibold mb-2">Scalable Solutions</h3>
                <p className="text-sm text-foreground-muted">
                  Building applications that grow with your business using cloud-native architecture.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
