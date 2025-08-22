
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
      // className={`fixed inset-0 z-50 flex items-centegitr justify-center gradient-hero transition-transform duration-700 ease-in-out ${
      // className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 transition-transform duration-700 ease-in-out ${
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black transition-transform duration-700 ease-in-out ${
        isAnimating ? 'animate-slide-up' : ''
      }`}
    >
      {/* Animated background lines */}
      <AnimatedLines />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-6">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl leading-tight">
            Hi, I'm{' '}
            <span className="block mt-2 text-white font-black drop-shadow-2xl">
              Andrew Iheanacho
            </span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg font-semibold">
              Software Developer & AWS Cloud Practitioner
            </p>
            <p className="text-lg md:text-xl text-white/85 max-w-xl mx-auto drop-shadow-md font-light leading-relaxed">
              Crafting digital experiences with modern technologies and cloud solutions
            </p>
          </div>
        </div>
        
        <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '0.3s' }}>
          <Button 
            onClick={onEnter}
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 rounded-full"
          >
            View My Work
            <ArrowDown className="ml-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="animate-fade-in-up flex justify-center space-x-6" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://github.com/Andrew-Ih" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-white/20"
          >
            <Github className="h-7 w-7" />
          </a>
          <a 
            href="https://www.linkedin.com/in/andrew-iheanacho-ab330b232/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-white/20"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a 
            href="mailto:andrewiheanacho811@gmail.com" 
            className="group p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-white/20"
          >
            <Mail className="h-7 w-7" />
          </a>
        </div>
      </div>
    </div>
  );
}
