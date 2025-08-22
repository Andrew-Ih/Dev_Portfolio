import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "AI-Powered Expense Tracker",
    description: "Full-stack SaaS web app that allows users to track expenses, manage budgets and receive AI-powered financial insights through natural language queries using an AI assistant chatbot, currently serving 20+ users.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
    // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Node.js", "TypeScript", "Express.js", "AWS", "Next.js", "OpenAI", "REST API", "AWS Lambda", "DynamoDB", "CloudFormation", "GitHub Actions"],
    github: 'https://github.com/Andrew-Ih/ExpenseTracker',
    demo: 'https://github.com/Andrew-Ih/ExpenseTracker',
    featured: true
  },
  {
    title: "StockTracker",
    description: "Built and deployed a .NET Azure Function App serving RESTful APIs for stock data, top gainers, and losers. Created a responsive frontend Azure Static Web App with automated CI/CD pipelines and zero-downtime deployments.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: ["C#", "Azure", "Next.js", "DevOps", "CI/CD Pipelines", "REST API", "Tailwind CSS", "Postman", "Azure Authentication"],
    github: 'https://github.com/Andrew-Ih/StockTrackerBackend',
    demo: 'https://github.com/Andrew-Ih/StockTrackerBackend',
    featured: true
  },
  {
    title: "Movie Discovery Web App",
    description: "Responsive movie search platform using React and Vite to deliver real-time movie metadata via the TMDB API. Features debouncing logic to optimize API requests, reducing server load by ~90% during user search input.",
    // image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    // image: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2135&q=80",
    technologies: ["React", "Vite", "Tailwind CSS", "AppWrite", "REST API", "TMDB API"],
    github: 'https://github.com/Andrew-Ih/BingeBuddy',
    demo: "https://movie-discovery-demo.com",
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
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
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
        {/* <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
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
        </div> */}
      </div>
    </section>
  );
}
