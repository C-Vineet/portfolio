import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingBadge } from '../components/floating-badge';
import { ArrowRight, Users, Lightbulb, Target } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen pt-20 dotted-bg relative">
      <FloatingBadge />
      {/* Fun floating shapes */}
      <div className="fixed top-32 right-20 w-16 h-16 border-2 border-muted rotate-12 opacity-20 float-animation hidden lg:block" style={{ animationDelay: '0s' }} />
      <div className="fixed top-96 left-20 w-20 h-20 rounded-full border-2 border-muted opacity-20 float-animation hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-32 right-40 w-12 h-12 border-2 border-muted -rotate-45 opacity-20 float-animation hidden lg:block" style={{ animationDelay: '2s' }} />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-muted-foreground tracking-wide uppercase" style={{ fontSize: '0.813rem', letterSpacing: '0.1em' }}>
                UX Director & Strategic Design Leader
              </p>
              <h1 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  lineHeight: '1.1',
                  fontWeight: 400,
                  letterSpacing: '-0.02em'
                }}
              >
                Transforming complex enterprise challenges into elegant, user-centered solutions
              </h1>
            </div>
            
            <div className="pt-4 space-y-6" style={{ fontSize: '1.125rem', lineHeight: '1.7', color: '#44403C' }}>
              <p>
                With over 15 years of experience leading design teams across healthcare, finance, and enterprise SaaS, I specialize in building design systems that scale and organizations that thrive.
              </p>
              <p>
                My approach combines strategic thinking with deep craft—from shaping product vision to mentoring teams, establishing design operations, and driving innovation through systems thinking.
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              <a 
                href="#featured-work" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all"
              >
                <span style={{ fontSize: '0.938rem', fontWeight: 500 }}>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-foreground transition-all"
              >
                <span style={{ fontSize: '0.938rem', fontWeight: 500 }}>Get In Touch</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-muted overflow-hidden border-8 border-background shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738566061505-556830f8b8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDYyMzI2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vineet Chaudhary"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent border-2 border-border -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Highlights with Icons */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-border bg-background/50">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <motion.div 
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background mb-2">
              <Users className="w-8 h-8" />
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, lineHeight: '1' }}>
              15+
            </div>
            <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
              Years leading design teams in enterprise environments
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background mb-2">
              <Target className="w-8 h-8" />
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, lineHeight: '1' }}>
              50+
            </div>
            <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
              Designers mentored and developed into senior roles
            </p>
          </motion.div>
          
          <motion.div 
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background mb-2">
              <Lightbulb className="w-8 h-8" />
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, lineHeight: '1' }}>
              8
            </div>
            <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
              Design systems built from ground up
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Process Section */}
      <section id="featured-work" className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-border">
        <motion.h2 
          className="mb-12 text-center" 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '2.5rem', 
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Approach
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="group relative overflow-hidden bg-card border border-border p-8 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcwNjUwNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Collaborative Design"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem' }}>
              Collaborative & Inclusive
            </h3>
            <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
              Building cross-functional partnerships and fostering inclusive design practices that bring diverse perspectives to every solution.
            </p>
          </motion.div>

          <motion.div 
            className="group relative overflow-hidden bg-card border border-border p-8 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1637761566180-9dbde4fdab77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBza2V0Y2hpbmclMjB3aXJlZnJhbWVzfGVufDF8fHx8MTc3MDY1MDQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Strategic Thinking"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem' }}>
              Strategic & Systematic
            </h3>
            <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
              Thinking in systems and frameworks that scale, while maintaining focus on business objectives and measurable outcomes.
            </p>
          </motion.div>

          <motion.div 
            className="group relative overflow-hidden bg-card border border-border p-8 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXd8ZW58MXx8fHwxNzcwNTk4NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="User Research"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem' }}>
              Research-Driven
            </h3>
            <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
              Grounding decisions in deep user research and data analysis to ensure solutions truly address user needs.
            </p>
          </motion.div>

          <motion.div 
            className="group relative overflow-hidden bg-card border border-border p-8 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736493-aa6d22c0f8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzA2NTA0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Leadership"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem' }}>
              People-First Leadership
            </h3>
            <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
              Investing in team growth, creating psychological safety, and building cultures where creativity and excellence flourish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domains of Expertise */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 pb-24 border-t border-border bg-background/50">
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
          Domain Expertise
        </motion.h2>
        
        <div className="flex flex-wrap gap-3">
          {[
            'Healthcare Technology',
            'Financial Services',
            'Enterprise SaaS',
            'B2B Platforms',
            'Data Visualization',
            'Compliance & Security',
            'AI/ML Products',
            'Developer Tools'
          ].map((domain, index) => (
            <motion.span 
              key={domain}
              className="px-4 py-2 bg-background border border-border hover:border-foreground transition-colors cursor-default"
              style={{ fontSize: '0.875rem' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {domain}
            </motion.span>
          ))}
        </div>
      </section>
    </div>
  );
}
