
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./navigation";
import { AboutSection } from "./sections/about-section";
import { ExperienceSection } from "./sections/experience-section";
import { ProjectsSection } from "./sections/projects-section";
import { ProjectsArchive } from "./sections/projects-archive";
import { ScrollToTop } from "./scroll-to-top";

interface PortfolioMainProps {
  onLogoClick: () => void;
}

export function PortfolioMain({ onLogoClick }: PortfolioMainProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation onLogoClick={onLogoClick} />
      <ScrollToTop />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/projects/archive" element={<ProjectsArchive />} />
        </Routes>
      </main>
    </div>
  );
}
