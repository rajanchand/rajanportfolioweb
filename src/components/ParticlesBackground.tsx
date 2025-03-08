
import React, { useEffect, useState, useCallback } from 'react';
import { useTheme } from '@/context/ThemeContext';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
};

const ParticlesBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  
  const generateParticles = useCallback(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const particleCount = Math.min(Math.floor(windowWidth * windowHeight / 15000), 100);
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * windowWidth,
      y: Math.random() * windowHeight,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3
    }));
    
    setParticles(newParticles);
  }, []);
  
  useEffect(() => {
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [generateParticles]);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => {
        // Calculate distance from mouse
        const dx = particle.x - mousePosition.x;
        const dy = particle.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Make particles move slightly away from mouse when close
        const maxDistance = 150;
        let translateX = 0;
        let translateY = 0;
        
        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          translateX = (dx / distance) * force * 15;
          translateY = (dy / distance) * force * 15;
        }
        
        return (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              backgroundColor: theme === 'dark' ? 'white' : '#333',
              borderRadius: '50%',
              transform: `translate(${translateX}px, ${translateY}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticlesBackground;
