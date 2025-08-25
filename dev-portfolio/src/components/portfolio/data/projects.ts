export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  year: string;
  category: string;
}

export const allProjects: Project[] = [
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

export const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];
export const years = ["All", "2025", "2024", "2023"];
