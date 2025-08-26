export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string | null;
  year: string;
  category: string;
}
export const categories = ["All", "Full Stack", "Frontend", "Backend"];
export const years = ["All", "2025", "2024"];

export const allProjects: Project[] = [
  {
    title: "AI-Powered Expense Tracker",
    description: "Full-stack SaaS web app that allows users to track expenses, manage budgets and receive AI-powered financial insights through natural language queries using an AI assistant chatbot, currently serving 20+ users.",
    technologies: ["Node.js", "TypeScript", "Express.js", "AWS", "Next.js", "OpenAI", "REST API", "AWS Lambda", "DynamoDB", "CloudFormation", "GitHub Actions"],
    github: "https://github.com/Andrew-Ih/ExpenseTracker",
    demo: "https://d1o22euki608lo.cloudfront.net/",
    year: "2025",
    category: "Full Stack"
  },
  {
    title: "StockTracker",
    description: "Built and deployed a .NET Azure Function App serving RESTful APIs for stock data, top gainers, and losers. Created a responsive frontend Azure Static Web App with automated CI/CD pipelines and zero-downtime deployments.",
    technologies: ["C#", "Azure", "Next.js", "DevOps", "CI/CD Pipelines", "REST API", "Tailwind CSS", "Postman", "Azure Authentication"],
    github: "https://github.com/Andrew-Ih/StockTrackerBackend",
    demo: "https://github.com/Andrew-Ih/StockTrackerBackend",
    year: "2025",
    category: "Full Stack"
  },
  {
    title: "Movie Discovery Web App",
    description: "Responsive movie search platform using React and Vite to deliver real-time movie metadata via the TMDB API. Features debouncing logic to optimize API requests, reducing server load by ~90% during user search input.",
    technologies: ["React", "Vite", "Tailwind CSS", "AppWrite", "REST API", "TMDB API"],
    github: "https://github.com/Andrew-Ih/BingeBuddy",
    demo: "https://binge-buddy-phi.vercel.app/",
    year: "2025",
    category: "Full Stack"
  },
  {
    title: "P2P File Sharing Server",
    description: "Peer-to-peer file sharing application built with Python using TCP sockets, gossip-based communication, and metadata synchronization. Features CLI interface, web stats dashboard, automatic peer cleanup, and SHA256-based file IDs for secure file operations.",
    technologies: ["Python", "TCP Sockets", "Gossip Protocol", "SHA256", "HTML", "REST API", "Web Server", "CLI"],
    github: "https://github.com/Andrew-Ih/P2P_FileSharing_Server",
    demo: null,
    year: "2025",
    category: "Backend"
  },
  {
    title: "Multi-threaded API Web Server",
    description: "Multi-threaded API web server in Python that handles concurrent client requests efficiently. It provides APIs for file upload, download, and directory management over TCP sockets, with in-memory caching (Time To Live + invalidation) to optimize repeated access, cut latency, and stay responsive under heavy workloads.",
    technologies: ["Python", "TCP Sockets", "Multi-threading", "HTTP Server", "Caching", "JavaScript", "HTML", "REST API", "File Management", "C"],
    github: "https://github.com/Andrew-Ih/multithreaded-api-webserver",
    demo: null,
    year: "2025",
    category: "Backend"
  },
  {
    title: "TreeDrive File Sharing Server",
    description: "TreeDrive is a stateful file-sharing server and command-line client system implemented in Python. It uses raw TCP sockets to allow authenticated users to upload, download, list, and delete files, while maintaining file metadata and ownership. Includes a performance analysis framework to measure throughput and latency under increasing client loads.",
    technologies: ["Python", "TCP Sockets", "File Management", "CLI", "Concurrent Programming", "Data Persistence", "Performance Analysis"],
    github: "https://github.com/Andrew-Ih/treedrive-file-sharing-server",
    demo: null,
    year: "2025",
    category: "Backend"
  },
  {
    title: "Weather App",
    description: "A responsive weather application built with React.js and Tailwind CSS. Users can search for any city or country to instantly view the current weather and a 5-day forecast. The app fetches real-time weather data from external APIs.",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Weather API", "REST API"],
    github: "https://github.com/Andrew-Ih/weather-app",
    demo: "https://weather-app-neon-sigma-87.vercel.app/",
    year: "2025",
    category: "Full Stack"
  },
  {
    title: "Reciply", 
    description: "Landing page for an Android recipe collection mobile application developed in Software Engineering class. The mobile app was built with Java in Android Studio for recipe management and sharing.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Andrew-Ih/Reciply",
    demo: "https://andrew-ih.github.io/Reciply/",
    year: "2025",
    category: "Frontend"
  },
  {
    title: "Electric Vehicle Marketplace",
    description: "Vertical prototype for a luxury electric vehicle marketplace built following modern frontend principles. Features responsive design, intuitive user interface, and adherence to web accessibility standards and best practices.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Andrew-Ih/COMP-3020-M3",
    demo: "https://andrew-ih.github.io/COMP-3020-M3/",
    year: "2024",
    category: "Frontend"
  },
  {
    title: "To Do List",
    description: "Interactive task management application with add, edit, and delete functionality. Features local storage persistence and clean user interface design.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Andrew-Ih/To-do-list",
    demo: "https://andrew-ih.github.io/To-do-list/",
    year: "2024",
    category: "Frontend"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with smooth animations and responsive design. Built with vanilla JavaScript and modern CSS techniques.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Andrew-Ih/Portfolio_website",
    demo: "https://andrew-ih.github.io/Portfolio_website/",
    year: "2024",
    category: "Frontend"
  },
  {
    title: "Etch a Sketch",
    description: "Interactive drawing application inspired by the classic toy. Features customizable grid sizes, color options, and responsive design for creative digital sketching.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Andrew-Ih/etch_a_sketch",
    demo: "https://andrew-ih.github.io/etch_a_sketch/",
    year: "2024",
    category: "Frontend"
  },
  {
    title: "Sign Up Form",
    description: "Responsive registration form with client-side validation, password confirmation, and modern styling. Demonstrates form handling and user input validation techniques.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Andrew-Ih/Sign_up_form",
    demo: "https://andrew-ih.github.io/Sign_up_form/",
    year: "2024",
    category: "Frontend"
  },
  {
    title: "Calculator",
    description: "Functional calculator application with basic arithmetic operations. Features keyboard support, error handling, and clean interface design.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Andrew-Ih/calculator",
    demo: "https://andrew-ih.github.io/calculator/",
    year: "2024",
    category: "Frontend"
  },
  {
    title: "Odin Recipes",
    description: "Recipe collection website featuring structured content and navigation. Demonstrates semantic HTML structure and CSS styling fundamentals.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Andrew-Ih/odin-recipes2",
    demo: "https://andrew-ih.github.io/odin-recipes2/",
    year: "2024",
    category: "Frontend"
  }
];
