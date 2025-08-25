import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Search, Filter } from "lucide-react";

const allProjects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment processing",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    github: "https://github.com/andrew/ecommerce",
    demo: "https://ecommerce-demo.com",
    year: "2023",
    category: "Full Stack"
  },
  {
    title: "Task Management App", 
    description: "Collaborative project management with real-time updates",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/andrew/taskmanager",
    demo: "https://taskmanager-demo.com",
    year: "2023",
    category: "Frontend"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather app with data visualization",
    technologies: ["Vue.js", "Chart.js", "Express.js", "MongoDB"],
    github: "https://github.com/andrew/weather-app",
    demo: "https://weather-demo.com",
    year: "2023",
    category: "Full Stack"
  },
  {
    title: "Chat Application",
    description: "Real-time messaging with file sharing and group chats",
    technologies: ["React", "Socket.io", "Node.js", "Redis"],
    github: "https://github.com/andrew/chat-app",
    demo: "https://chat-demo.com",
    year: "2022",
    category: "Full Stack"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animated interactions",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/andrew/portfolio",
    demo: "https://andrew-portfolio.com",
    year: "2022",
    category: "Frontend"
  },
  {
    title: "API Gateway",
    description: "Microservices API gateway with rate limiting",
    technologies: ["Node.js", "Express", "Redis", "Docker"],
    github: "https://github.com/andrew/api-gateway",
    demo: null,
    year: "2022",
    category: "Backend"
  },
  {
    title: "Blog CMS",
    description: "Content management system for bloggers",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    github: "https://github.com/andrew/blog-cms",
    demo: "https://blog-cms-demo.com",
    year: "2022",
    category: "Full Stack"
  },
  {
    title: "Mobile App Backend",
    description: "REST API for mobile fitness tracking app",
    technologies: ["Python", "Django", "PostgreSQL", "AWS"],
    github: "https://github.com/andrew/fitness-api",
    demo: null,
    year: "2021",
    category: "Backend"
  },
  {
    title: "Data Visualization Tool",
    description: "Interactive charts for business analytics",
    technologies: ["D3.js", "React", "Python", "Pandas"],
    github: "https://github.com/andrew/data-viz",
    demo: "https://dataviz-demo.com",
    year: "2021",
    category: "Frontend"
  }
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];
const years = ["All", "2025", "2024", "2023"];

export function ProjectsArchive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredProjects = allProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesYear = selectedYear === "All" || project.year === selectedYear;
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text">
            Projects Archive
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed max-w-3xl">
            A comprehensive collection of all my projects, from small experiments 
            to large-scale applications. Use the filters to explore by technology, 
            category, or year.
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-muted h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category and Year Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-foreground-muted" />
              <span className="text-sm font-medium text-foreground-muted">Category:</span>
              <div className="flex space-x-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-foreground-muted">Year:</span>
              <div className="flex space-x-1">
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedYear(year)}
                    className="text-xs"
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-foreground-muted">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={`${project.title}-${index}`}
              className="group gradient-card shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold gradient-text mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-foreground-muted">
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.demo && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {/* {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )} */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <p className="text-foreground-muted mb-4">No projects found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedYear("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
