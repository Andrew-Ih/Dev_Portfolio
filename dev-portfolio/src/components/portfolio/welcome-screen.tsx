
import { Button } from "@/components/ui/button";
import { AnimatedLines } from "./animated-lines";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

interface WelcomeScreenProps {
  onEnter: () => void;
  isAnimating: boolean;
}

export function WelcomeScreen({ onEnter, isAnimating }: WelcomeScreenProps) {
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center gradient-hero transition-transform duration-700 ease-in-out ${
        isAnimating ? 'animate-slide-up' : ''
      }`}
    >
      {/* Animated background lines */}
      <AnimatedLines />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-6">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Hi, I'm <span className="gradient-text-enhanced">Andrew Iheanacho</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-medium">
            Software Developer & AWS Cloud Practitioner
          </p>
          <p className="text-lg text-white/80 max-w-xl mx-auto drop-shadow-md">
            Crafting digital experiences with modern technologies and cloud solutions
          </p>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            onClick={onEnter}
            size="lg"
            className="group relative overflow-hidden bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="animate-fade-in-up flex justify-center space-x-6" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://github.com/Andrew-Ih" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/andrew-iheanacho-ab330b232/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a 
            href="mailto:andrewiheanacho811@gmail.com" 
            className="text-white/70 hover:text-white transition-colors duration-300"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
