'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
  {
    id: 'healthcare-platform',
    title: 'Enterprise Healthcare Platform Redesign',
    category: 'Healthcare Technology',
    year: '2024',
    description: 'Led a comprehensive redesign of a clinical workflow platform serving 50,000+ healthcare providers across 200+ hospitals.',
    impact: ['42% reduction in task completion time', '89% user satisfaction score', '60% decrease in support tickets'],
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA2MjEzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'financial-dashboard',
    title: 'Institutional Investment Analytics Suite',
    category: 'Financial Services',
    year: '2023',
    description: 'Designed a unified analytics platform consolidating multiple legacy systems for institutional investors managing $2B+ in assets.',
    impact: ['5 legacy systems consolidated', 'Real-time data processing', '70% faster decision-making workflows'],
    role: 'UX Director & Design System Lead',
    image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcwNTU5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'design-system',
    title: 'Enterprise Design System',
    category: 'Design Systems',
    year: '2022-2024',
    description: 'Built and scaled a comprehensive design system adopted across 15 product teams, establishing design operations and governance.',
    impact: ['15 product teams adopted', '8x faster component development', 'Consistent experience across 20+ products'],
    role: 'Design Systems Lead',
    image: 'https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MDYyMDQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const otherProjects = [
  {
    title: 'AI-Powered Documentation Assistant',
    category: 'Enterprise SaaS',
    year: '2024',
    description: 'Designed an AI-powered tool that helps enterprise teams create and maintain technical documentation automatically.',
    role: 'Lead Product Designer',
    image: 'https://images.unsplash.com/photo-1605606582336-96bec3c882e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBkZXNpZ258ZW58MXx8fHwxNzcwNjQ5NzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Mobile Patient Engagement App',
    category: 'Healthcare',
    year: '2023',
    description: 'Created a patient-facing mobile experience for appointment scheduling, telemedicine, and health records access.',
    role: 'UX Director',
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwNjQyNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Work() {
  return (
    <div className="min-h-screen pt-20 dotted-bg">
      <div className="fixed top-40 left-10 w-12 h-12 border-2 border-muted rotate-45 opacity-20 float-animation hidden lg:block" style={{ animationDelay: '0.5s' }} />
      <div className="fixed bottom-40 right-10 w-16 h-16 rounded-full border-2 border-muted opacity-20 float-animation hidden lg:block" style={{ animationDelay: '1.5s' }} />

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        <motion.div 
          className="max-w-3xl space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground tracking-wide uppercase" style={{ fontSize: '0.813rem', letterSpacing: '0.1em' }}>
            Selected Work
          </p>
          <h1 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: '1.15',
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}
          >
            Strategic case studies in enterprise design leadership
          </h1>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.article 
              key={study.id} 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={`#${study.id}`} className="block">
                <div className="space-y-4 bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width={400}
                      height={300}
                    />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="text-muted-foreground" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                      {study.category} • {study.year}
                    </div>
                    
                    <h2 
                      className="group-hover:text-muted-foreground transition-colors duration-300"
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.25rem', 
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        lineHeight: '1.3'
                      }}
                    >
                      {study.title}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-3" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                      {study.description}
                    </p>
                    
                    <div className="flex items-center gap-2 pt-2 text-foreground group-hover:gap-3 transition-all duration-300">
                      <span style={{ fontSize: '0.813rem', fontWeight: 500 }}>View case study</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-24 bg-background/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2 
            className="mb-12" 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.875rem', 
              fontWeight: 400,
              letterSpacing: '-0.01em'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Additional Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="group relative overflow-hidden bg-card border border-border p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="text-muted-foreground mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                  {project.category} • {project.year}
                </div>
                <h3 
                  style={{ 
                    fontFamily: 'var(--font-serif)', 
                    fontSize: '1.25rem', 
                    fontWeight: 400,
                    marginBottom: '0.75rem'
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
