'use client';

import { motion } from 'motion/react';

const experiences = [
  {
    title: 'Director of UX',
    company: 'HealthTech Solutions',
    period: '2020 - Present',
    achievements: [
      'Leading design for enterprise healthcare platform serving 50,000+ providers across 200+ hospitals',
      'Built design team from 3 to 12 members, establishing design operations and career framework',
      'Spearheaded platform redesign resulting in 42% reduction in task completion time and 89% user satisfaction',
      'Established company\'s first design system, adopted by 8 product teams'
    ]
  },
  {
    title: 'Senior Design Manager',
    company: 'FinanceCore Technologies',
    period: '2016 - 2020',
    achievements: [
      'Led design for institutional investment analytics platform managing $2B+ in assets',
      'Managed team of 6 designers across multiple product lines',
      'Consolidated 5 legacy systems into unified platform, achieving 95% user adoption',
      'Created advanced data visualization patterns for complex financial analysis'
    ]
  },
  {
    title: 'Lead Product Designer',
    company: 'Enterprise SaaS Co.',
    period: '2012 - 2016',
    achievements: [
      'Led design for B2B collaboration platform used by Fortune 500 companies',
      'Established company\'s first design team and processes',
      'Introduced user research practice, conducting 100+ customer interviews'
    ]
  },
  {
    title: 'Product Designer',
    company: 'Digital Agency & Startups',
    period: '2009 - 2012',
    achievements: [
      'Designed digital products for clients across healthcare, education, and e-commerce',
      'Contributed to 20+ product launches from concept to release'
    ]
  }
];

export function About() {
  return (
    <div className="min-h-screen pt-20 dotted-bg">
      <div className="fixed top-48 right-16 w-14 h-14 border-2 border-muted -rotate-12 opacity-20 float-animation hidden lg:block" style={{ animationDelay: '0.3s' }} />
      <div className="fixed bottom-48 left-16 w-20 h-20 rounded-full border-2 border-muted opacity-20 float-animation hidden lg:block" style={{ animationDelay: '1.2s' }} />

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground tracking-wide uppercase" style={{ fontSize: '0.813rem', letterSpacing: '0.1em' }}>
            About
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
            Strategic design leader building teams and systems that scale
          </h1>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16 border-b border-border bg-background/50">
        <p className="max-w-3xl text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
          I'm a design director with 15+ years of experience leading teams, building design systems, and shaping product strategy at the intersection of healthcare, finance, and enterprise technology. My expertise lies in translating complex business challenges into elegant user experiences while scaling design operations and mentoring teams.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-b border-border">
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
          Leadership & Impact
        </motion.h2>
        
        <div className="space-y-10">
          <motion.div 
            className="grid lg:grid-cols-12 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="lg:col-span-4">
              <h3 style={{ fontWeight: 500, fontSize: '1.063rem' }}>
                Organization Design
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-2">
              <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                Built and scaled design teams from 3 to 20+ members across multiple companies. Established design operations frameworks, defined roles and career paths, and created hiring strategies that prioritize both craft excellence and cultural fit.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                Restructured design organizations to align with business objectives, implementing cross-functional pods and center-of-excellence models that increased team velocity by 40%.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-12 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="lg:col-span-4">
              <h3 style={{ fontWeight: 500, fontSize: '1.063rem' }}>
                Mentoring & Development
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-2">
              <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                Mentored 50+ designers throughout my career, with 12 team members promoted to senior and principal levels under my leadership. Created comprehensive growth frameworks, established design critique culture, and facilitated career development through targeted coaching.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                Developed design leadership training program adopted company-wide, covering strategic thinking, stakeholder management, and design operations.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-12 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="lg:col-span-4">
              <h3 style={{ fontWeight: 500, fontSize: '1.063rem' }}>
                Systems Thinking
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-2">
              <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                Pioneered 8 design systems across different organizations, establishing governance models, contribution frameworks, and adoption strategies. Created scalable component libraries serving 100,000+ enterprise users.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                Led design system initiatives that reduced design-to-development time by 65% and increased cross-product consistency scores from 42% to 94%.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-b border-border bg-background/50">
        <motion.h2 
          className="mb-16" 
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
          Career Journey
        </motion.h2>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block" style={{ left: '0' }} />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="relative md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -left-2.5 top-1.5 w-5 h-5 bg-foreground rounded-full border-4 border-background hidden md:block" />
                
                <div className="space-y-2">
                  <h3 style={{ fontWeight: 600, fontSize: '1.063rem' }}>
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground" style={{ fontSize: '0.938rem' }}>
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex gap-3" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                        <span className="text-foreground mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
