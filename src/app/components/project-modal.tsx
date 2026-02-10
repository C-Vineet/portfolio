import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectModalProps {
  project: {
    title: string;
    category: string;
    year: string;
    description: string;
    role: string;
    image: string;
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-card max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="aspect-[16/10] bg-muted overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8 lg:p-12 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-muted-foreground" style={{ fontSize: '0.813rem', letterSpacing: '0.05em' }}>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h2 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '2rem', 
                fontWeight: 400,
                letterSpacing: '-0.01em'
              }}
            >
              {project.title}
            </h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                Role
              </div>
              <p style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
                {project.role}
              </p>
            </div>
            
            <div>
              <div className="text-muted-foreground mb-1" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                Overview
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
