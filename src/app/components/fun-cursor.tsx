import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const emojis = ['✨', '⭐', '💡', '🎨', '✏️', '📐'];

export function FunCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    let lastTime = Date.now();
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle particle creation
      if (now - lastTime < 200) return;
      lastTime = now;

      const newParticle: Particle = {
        id: nextId,
        x: e.clientX,
        y: e.clientY,
        emoji: emojis[Math.floor(Math.random() * emojis.length)]
      };

      setParticles(prev => [...prev, newParticle]);
      setNextId(prev => prev + 1);

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [nextId]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute text-xl animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)',
            animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) forwards'
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
}
