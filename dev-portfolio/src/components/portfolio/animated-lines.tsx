import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function AnimatedLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const animationRef = useRef<number>();

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
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get CSS variables for colors
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary').trim();
      const lineColor = `hsl(${primaryColor})`;
      
      // Update points
      pointsRef.current.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;
        
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
            ctx.strokeStyle = lineColor.replace(')', `, ${opacity})`).replace('hsl', 'hsla');
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
                ctx.fillStyle = lineColor.replace(')', `, ${triangleOpacity})`).replace('hsl', 'hsla');
                ctx.fill();
                
                // Draw triangle edges
                ctx.strokeStyle = lineColor.replace(')', `, ${triangleOpacity * 2})`).replace('hsl', 'hsla');
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        }
      }
      
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
