import  { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<{ id: number; size: number; x: number; y: number; duration: number }[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const createParticles = () => {
      const particleCount = Math.min(20, window.innerWidth / 80);
      const newParticles = [];
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 200 + 80,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 20 + 30
        });
      }
      setParticles(newParticles);
    };
    
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#1a0b2e] to-dark transition-all duration-1000 ease-in-out" 
        style={{ 
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15), rgba(26, 11, 46, 0.5), rgba(18, 18, 18, 0.95))` 
        }}
      />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjkxNTR8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-30 mix-blend-screen"
          style={{ 
            width: particle.size,
            height: particle.size,
            filter: 'blur(50px)',
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0) 70%)`
          }}
          initial={{ 
            left: `${particle.x}%`, 
            top: `${particle.y}%`,
          }}
          animate={{ 
            left: [`${particle.x}%`, `${(particle.x + 20) % 100}%`, `${particle.x}%`],
            top: [`${particle.y}%`, `${(particle.y + 30) % 100}%`, `${particle.y}%`],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyOTI5MjkiIGZpbGwtb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMTZ2MmgtMTR6TTE2IDM2aDJ2MTRIMnYtMmgxNHYtMTJ6TTM0IDM2aDJ2MTJoMTR2Mkg0NFYzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10 pointer-events-none"></div>
      
      {/* Horizontal beam accents */}
      <div className="absolute top-1/4 -left-20 w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/3 -right-20 w-40 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse delay-300"></div>
      
      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-30"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-30"></div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-dark opacity-60 pointer-events-none"></div>

      {/* Moving gradient accent */}
      <div 
        className="absolute bottom-0 right-0 w-full h-2/3 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          background: `url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjkxNTR8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateY(30%)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), transparent)'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
 