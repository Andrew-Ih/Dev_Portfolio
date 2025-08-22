import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
  pulseSpeed: number;
}

interface Planet {
  distance: number;
  angle: number;
  speed: number;
  radius: number;
  color: string;
}

export function AnimatedLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const planetsRef = useRef<Planet[]>([]);
  const animationRef = useRef<number>();
  const highlightedTriangles = useRef<{ points: [Point, Point, Point]; highlight: number; maxHighlight: number }[]>([]);
  const lastHighlightTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize points
    const pointCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
    pointsRef.current = Array.from({ length: pointCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
    }));

    // Initialize solar system (will be scaled in animation)
    planetsRef.current = [
      { distance: 80, angle: 0, speed: 0.02, radius: 3, color: '#8c7853' }, // Mercury
      { distance: 100, angle: 0, speed: 0.015, radius: 4, color: '#ffc649' }, // Venus
      { distance: 120, angle: 0, speed: 0.01, radius: 4, color: '#6b93d6' }, // Earth
      { distance: 140, angle: 0, speed: 0.008, radius: 3, color: '#c1440e' }, // Mars
      { distance: 180, angle: 0, speed: 0.005, radius: 8, color: '#d8ca9d' }, // Jupiter
      { distance: 220, angle: 0, speed: 0.003, radius: 7, color: '#fad5a5' }, // Saturn
    ];

    const animate = (currentTime: number = 0) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const scale = Math.min(canvas.width / 1200, 1); // Scale down on smaller screens
      const centerX = 150 * scale + 100; // Keep in top left with scaling
      const centerY = 150 * scale + 100;
      
      // Draw solar system in far background
      ctx.globalAlpha = 0.3;
      
      // Draw orbit paths
      planetsRef.current.forEach(planet => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.distance * scale, 0, Math.PI * 2);
        ctx.stroke();
      });
      
      // Draw sun
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12 * scale, 0, Math.PI * 2);
      ctx.fill();
      
      // Update and draw planets
      planetsRef.current.forEach(planet => {
        planet.angle += planet.speed;
        const x = centerX + Math.cos(planet.angle) * planet.distance * scale;
        const y = centerY + Math.sin(planet.angle) * planet.distance * scale;
        
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(x, y, planet.radius * scale, 0, Math.PI * 2);
        ctx.fill();
        
        // Saturn rings
        if (planet.color === '#fad5a5') {
          ctx.strokeStyle = planet.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, (planet.radius + 3) * scale, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
      
      ctx.globalAlpha = 1;
      
      // Use white color for lines
      const lineColor = 'rgb(255, 255, 255)';
      
      // Create constellation highlights occasionally
      if (currentTime - lastHighlightTime.current > 5000 + Math.random() * 2000) {
        const triangles: [Point, Point, Point][] = [];
        const maxDistance = 150;
        
        for (let i = 0; i < pointsRef.current.length; i++) {
          for (let j = i + 1; j < pointsRef.current.length; j++) {
            for (let k = j + 1; k < pointsRef.current.length; k++) {
              const p1 = pointsRef.current[i];
              const p2 = pointsRef.current[j];
              const p3 = pointsRef.current[k];
              
              const d1 = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
              const d2 = Math.sqrt((p2.x - p3.x) ** 2 + (p2.y - p3.y) ** 2);
              const d3 = Math.sqrt((p3.x - p1.x) ** 2 + (p3.y - p1.y) ** 2);
              
              if (d1 < maxDistance && d2 < maxDistance && d3 < maxDistance) {
                triangles.push([p1, p2, p3]);
              }
            }
          }
        }
        
        if (triangles.length > 0) {
          const randomTriangle = triangles[Math.floor(Math.random() * triangles.length)];
          highlightedTriangles.current.push({
            points: randomTriangle,
            highlight: 0,
            maxHighlight: 60
          });
        }
        
        lastHighlightTime.current = currentTime;
      }
      
      // Update points
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;
        point.pulse += point.pulseSpeed;
        
        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;
        
        // Keep points in bounds
        point.x = Math.max(0, Math.min(canvas.width, point.x));
        point.y = Math.max(0, Math.min(canvas.height, point.y));
      });

      // Draw connections and triangles
      const maxDistance = 150;
      const points = pointsRef.current;
      
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.6;
            
            // Draw line
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            // ctx.strokeStyle = lineColor.replace(')', `, ${opacity})`).replace('hsl', 'hsla');
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Look for third point to form triangle
            for (let k = j + 1; k < points.length; k++) {
              const dx2 = points[i].x - points[k].x;
              const dy2 = points[i].y - points[k].y;
              const dx3 = points[j].x - points[k].x;
              const dy3 = points[j].y - points[k].y;
              
              const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
              const distance3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
              
              if (distance2 < maxDistance && distance3 < maxDistance) {
                const triangleOpacity = Math.min(opacity, (1 - distance2 / maxDistance), (1 - distance3 / maxDistance)) * 0.1;
                
                // Draw triangle
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.lineTo(points[k].x, points[k].y);
                ctx.closePath();
                ctx.fillStyle = `rgba(255, 255, 255, ${triangleOpacity})`;
                ctx.fill();
                
                // Draw triangle edges
                ctx.strokeStyle = `rgba(255, 255, 255, ${triangleOpacity * 2})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }
      
      // Draw pulsing nodes
      points.forEach((point) => {
        const pulseSize = 2 + Math.sin(point.pulse) * 1.5;
        const pulseOpacity = 0.3 + Math.sin(point.pulse) * 0.4;
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity * 0.2})`;
        ctx.fill();
        
        // Inner node
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity})`;
        ctx.fill();
      });
      
      // Update and draw constellation highlights
      highlightedTriangles.current = highlightedTriangles.current.filter(triangle => {
        triangle.highlight++;
        
        const progress = triangle.highlight / triangle.maxHighlight;
        const highlightOpacity = Math.sin(progress * Math.PI) * 0.8;
        
        if (highlightOpacity > 0) {
          // Draw highlighted triangle with golden glow
          ctx.beginPath();
          ctx.moveTo(triangle.points[0].x, triangle.points[0].y);
          ctx.lineTo(triangle.points[1].x, triangle.points[1].y);
          ctx.lineTo(triangle.points[2].x, triangle.points[2].y);
          ctx.closePath();
          
          // Golden fill
          ctx.fillStyle = `rgba(255, 215, 0, ${highlightOpacity * 0.3})`;
          ctx.fill();
          
          // Golden edges
          ctx.strokeStyle = `rgba(255, 215, 0, ${highlightOpacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Glow effect
          ctx.shadowColor = 'rgba(255, 215, 0, 0.5)';
          ctx.shadowBlur = 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
        
        return triangle.highlight < triangle.maxHighlight;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}
