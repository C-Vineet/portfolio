import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

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
      {/* Fun floating shapes */}
      <div className="fixed top-48 right-16 w-14 h-14 border-2 border-muted -rotate-12 opacity-20 float-animation hidden lg:block" style={{ animationDelay: '0.3s' }} />
      <div className="fixed bottom-48 left-16 w-20 h-20 rounded-full border-2 border-muted opacity-20 float-animation hidden lg:block" style={{ animationDelay: '1.2s' }} />

      {/* Header */}
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

      {/* Professional Summary */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16 border-b border-border bg-background/50">
        <p className="max-w-3xl text-muted-foreground" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
          I'm a design director with 15+ years of experience leading teams, building design systems, and shaping product strategy at the intersection of healthcare, finance, and enterprise technology. My expertise lies in translating complex business challenges into elegant user experiences while scaling design operations and mentoring teams.
        </p>
      </section>

      {/* Leadership & Impact */}
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

      {/* Career Journey Timeline */}
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
          {/* Timeline line */}
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
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-3 h-3 bg-foreground border-4 border-background hidden md:block" style={{ left: '-0.375rem' }} />
                
                <div className="space-y-3">
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                    <h3 style={{ fontWeight: 500, fontSize: '1.25rem' }}>
                      {exp.title}
                    </h3>
                    <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground" style={{ fontSize: '1rem', fontWeight: 500 }}>
                    {exp.company}
                  </p>
                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span className="text-muted-foreground flex-1" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation & Patents */}
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
          Innovation & Patents
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
                Patents
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="p-4 bg-secondary border border-border">
                <p style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  "Adaptive Interface System for Clinical Workflows"
                </p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  US Patent 11,234,567 • Granted 2023
                </p>
              </div>
              <div className="p-4 bg-secondary border border-border">
                <p style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  "Real-time Collaborative Design System Framework"
                </p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  US Patent 10,987,654 • Granted 2022
                </p>
              </div>
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
                Innovation Leadership
              </h3>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-2">
                <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  • Chair of Patent Committee, reviewing and supporting 30+ patent applications
                </li>
                <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  • Founded and lead quarterly Innovation Events bringing together design, engineering, and product teams
                </li>
                <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  • Mentor for internal innovation accelerator program, supporting 8 projects
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSR & Community */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-b border-border bg-background/50">
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
          Corporate Social Responsibility & Community
        </motion.h2>
        
        <motion.div 
          className="grid lg:grid-cols-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-4">
            <h3 style={{ fontWeight: 500, fontSize: '1.063rem' }}>
              Contributions
            </h3>
          </div>
          <div className="lg:col-span-8">
            <ul className="space-y-2">
              <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                • Lead CSR initiative "Design for Good" - partnering with 5 nonprofits to improve their digital experiences
              </li>
              <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                • Mentor for "Women in Tech" program, supporting 15 early-career designers
              </li>
              <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                • Speaker at design conferences and universities on design leadership and systems thinking
              </li>
              <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                • Established company-wide accessibility standards and training program
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Beyond Work - Personal Interests */}
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
          Beyond Work
        </motion.h2>

        <motion.p 
          className="text-muted-foreground mb-12 max-w-3xl"
          style={{ fontSize: '1.063rem', lineHeight: '1.7' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          When I'm not designing, I find inspiration in nature, capturing moments through photography, and speaking at design conferences. These experiences fuel my creativity and inform my approach to design leadership.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            className="group relative overflow-hidden aspect-square bg-muted"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzA1ODc3OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mountain hiking"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white" style={{ fontSize: '0.938rem', fontWeight: 500 }}>
                Mountain Hiking
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="group relative overflow-hidden aspect-square bg-muted"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1588420635201-3a9e2a2a0a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYSUyMGhvYmJ5fGVufDF8fHx8MTc3MDYzMDI1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Photography"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white" style={{ fontSize: '0.938rem', fontWeight: 500 }}>
                Photography
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="group relative overflow-hidden aspect-square bg-muted"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc3BlYWtlciUyMHN0YWdlfGVufDF8fHx8MTc3MDYzNDY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Speaking at conferences"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white" style={{ fontSize: '0.938rem', fontWeight: 500 }}>
                Conference Speaking
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Recognition */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 pb-24 bg-background/50">
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
          Education & Recognition
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
                Education
              </h3>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-1">
                <p style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  Master of Fine Arts, Interaction Design
                </p>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  Carnegie Mellon University • 2009
                </p>
              </div>
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
                Awards & Recognition
              </h3>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-2">
                <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  • Innovation Award for Design System Excellence (2023)
                </li>
                <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  • Leadership Excellence Award (2022)
                </li>
                <li className="text-muted-foreground" style={{ fontSize: '0.938rem', lineHeight: '1.7' }}>
                  • Featured in "Design Leaders to Watch" - Design Magazine (2021)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
