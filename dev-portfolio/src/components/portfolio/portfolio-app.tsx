
import { useState, useEffect } from "react";
import { WelcomeScreen } from "./welcome-screen";
import { PortfolioMain } from "./portfolio-main";

export function PortfolioApp() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem("portfolio-visited");
    if (hasVisited) {
      setShowWelcome(false);
    }
  }, []);

  const handleEnterPortfolio = () => {
    setIsAnimating(true);
    sessionStorage.setItem("portfolio-visited", "true");
    
    // Wait for animation to complete before hiding welcome screen
    setTimeout(() => {
      setShowWelcome(false);
    }, 800);
  };

  const handleLogoClick = () => {
    // Clear the session storage and show welcome screen again
    sessionStorage.removeItem("portfolio-visited");
    setShowWelcome(true);
    setIsAnimating(false);
  };

  return (
    <div className="relative w-full min-h-screen">
      {showWelcome && (
        <WelcomeScreen 
          onEnter={handleEnterPortfolio}
          isAnimating={isAnimating}
        />
      )}
      
      {!showWelcome && (
        <div className="animate-fade-in-up">
          <PortfolioMain onLogoClick={handleLogoClick} />
        </div>
      )}
    </div>
  );
}
