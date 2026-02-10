import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const caseStudiesData: Record<string, any> = {
  'healthcare-platform': {
    title: 'Enterprise Healthcare Platform Redesign',
    category: 'Healthcare Technology',
    year: '2024',
    role: 'Design Director',
    team: 'Led team of 8 designers, collaborated with 3 product managers and 12 engineers',
    duration: '18 months',
    image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA2MjEzODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    researchImage: 'https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXd8ZW58MXx8fHwxNzcwNTk4NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    workshopImage: 'https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcwNjUwNDEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    designImage: 'https://images.unsplash.com/photo-1752134593976-603769edccbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc3MDU5MDcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    context: 'A 15-year-old clinical workflow platform serving 50,000+ healthcare providers across 200+ hospitals was struggling with adoption, user satisfaction, and increasing support costs. The platform had accumulated significant technical debt and design inconsistencies.',
    challenge: 'The primary challenge was to modernize a mission-critical system while ensuring zero disruption to clinical workflows. We needed to balance the needs of diverse user groups (physicians, nurses, administrators) while maintaining HIPAA compliance and integrating with legacy systems.',
    approach: [
      'Conducted comprehensive user research across 12 hospital systems with 200+ hours of contextual inquiry and shadowing',
      'Established a cross-functional design system team and governance model',
      'Implemented a phased rollout strategy with continuous user feedback loops',
      'Created accessibility-first design standards exceeding WCAG 2.1 AAA requirements',
      'Built comprehensive training and change management programs'
    ],
    outcomes: [
      '42% reduction in average task completion time across key clinical workflows',
      '89% user satisfaction score (up from 54%)',
      '60% decrease in support tickets within first 6 months',
      '$2.3M annual savings in reduced support costs and increased efficiency',
      'Zero critical incidents during 18-month rollout'
    ],
    leadership: [
      'Built and mentored design team from 3 to 8 members',
      'Established design operations framework adopted company-wide',
      'Created career development framework resulting in 3 promotions',
      'Facilitated executive stakeholder alignment through strategic design reviews'
    ]
  },
  'financial-dashboard': {
    title: 'Institutional Investment Analytics Suite',
    category: 'Financial Services',
    year: '2023',
    role: 'UX Director & Design System Lead',
    team: 'Led team of 6 designers, partnered with data science and engineering teams',
    duration: '12 months',
    image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzcwNTU5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    researchImage: 'https://images.unsplash.com/photo-1637761566180-9dbde4fdab77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBza2V0Y2hpbmclMjB3aXJlZnJhbWVzfGVufDF8fHx8MTc3MDY1MDQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    workshopImage: 'https://images.unsplash.com/photo-1758691736493-aa6d22c0f8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzA2NTA0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    designImage: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA1OTI5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    context: 'A leading investment firm managing $2B+ in assets was operating with five disconnected legacy systems for portfolio analysis, risk assessment, and reporting. This fragmentation led to inefficiencies, data inconsistencies, and delayed decision-making.',
    challenge: 'Design a unified analytics platform that consolidates complex financial data from multiple sources while serving the needs of portfolio managers, risk analysts, and compliance officers. The solution needed to handle real-time data processing and provide sophisticated visualization capabilities.',
    approach: [
      'Conducted stakeholder interviews with C-suite executives and end users across all departments',
      'Mapped complex data workflows and identified critical integration points',
      'Designed a modular component system for flexible dashboard composition',
      'Created advanced data visualization patterns for multi-dimensional analysis',
      'Established security and compliance design patterns for sensitive financial data'
    ],
    outcomes: [
      'Successfully consolidated 5 legacy systems into one unified platform',
      'Real-time data processing enabling instant portfolio analysis',
      '70% faster decision-making workflows reported by portfolio managers',
      '95% user adoption within first quarter of launch',
      'Recognized with internal Innovation Award'
    ],
    leadership: [
      'Drove alignment across 4 business units with competing priorities',
      'Established design-engineering collaboration framework',
      'Mentored junior designers in complex systems thinking',
      'Created design system documentation and governance model'
    ]
  },
  'design-system': {
    title: 'Enterprise Design System',
    category: 'Design Systems',
    year: '2022-2024',
    role: 'Design Systems Lead',
    team: 'Core team of 4 designers, supporting 15 product teams',
    duration: 'Ongoing (2+ years)',
    image: 'https://images.unsplash.com/photo-1769149068959-b11392164add?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc3MDYyMDQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    researchImage: 'https://images.unsplash.com/photo-1562601555-513820e5d0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzJTIwdWl8ZW58MXx8fHwxNzcwNjE5MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    workshopImage: 'https://images.unsplash.com/photo-1562939651-9359f291c988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MDY0NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    designImage: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlZnJhbWUlMjBza2V0Y2hlcyUyMG5vdGVib29rfGVufDF8fHx8MTc3MDY0MTA5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    context: 'As the company scaled from 10 to 20+ products, design inconsistencies and duplicated efforts became critical bottlenecks. Teams were rebuilding similar components, creating divergent experiences, and spending excessive time on foundational design decisions.',
    challenge: 'Build a comprehensive design system that could serve diverse product needs while maintaining consistency, establish sustainable governance, and drive adoption across autonomous product teams with minimal disruption to ongoing work.',
    approach: [
      'Conducted extensive audit of existing patterns across all products',
      'Established cross-functional design system working group with representatives from each team',
      'Created tiered contribution model allowing teams to propose new patterns',
      'Built comprehensive documentation including usage guidelines, accessibility standards, and code examples',
      'Implemented quarterly design system roadmap aligned with product needs',
      'Developed design system adoption metrics and feedback mechanisms'
    ],
    outcomes: [
      'Adopted by 15 product teams serving 100,000+ enterprise users',
      '8x faster component development and implementation',
      'Consistent experience across 20+ products',
      '200+ components and patterns documented',
      'Achieved 98% accessibility compliance across all components',
      'Reduced design-to-development handoff time by 65%'
    ],
    leadership: [
      'Built design system team and established roles and responsibilities',
      'Created governance model balancing consistency with team autonomy',
      'Facilitated change management and adoption across organization',
      'Established design system as strategic company initiative with executive sponsorship',
      'Developed contribution guidelines empowering all teams to participate',
      'Mentored 12 designers on systems thinking and component design'
    ]
  }
};

const allCaseStudies = [
  { id: 'healthcare-platform', title: 'Enterprise Healthcare Platform Redesign', category: 'Healthcare Technology' },
  { id: 'financial-dashboard', title: 'Institutional Investment Analytics Suite', category: 'Financial Services' },
  { id: 'design-system', title: 'Enterprise Design System', category: 'Design Systems' }
];

export function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudiesData[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center dotted-bg">
        <div className="text-center space-y-4">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>Case study not found</h1>
          <Link to="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  const otherCaseStudies = allCaseStudies.filter(cs => cs.id !== id);

  return (
    <div className="min-h-screen pt-20 dotted-bg">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-8">
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          style={{ fontSize: '0.938rem' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to work
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-muted-foreground" style={{ fontSize: '0.813rem', letterSpacing: '0.05em' }}>
            <span>{study.category}</span>
            <span>•</span>
            <span>{study.year}</span>
          </div>
          
          <h1 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: '1.15',
              fontWeight: 400,
              letterSpacing: '-0.02em'
            }}
          >
            {study.title}
          </h1>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <motion.div 
          className="aspect-[16/9] bg-muted overflow-hidden border-8 border-background shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ImageWithFallback
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-16 bg-background/50">
        <div className="grid md:grid-cols-3 gap-12 py-12 border-y border-border">
          <div>
            <div className="text-muted-foreground mb-2" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
              Role
            </div>
            <p style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
              {study.role}
            </p>
          </div>
          
          <div>
            <div className="text-muted-foreground mb-2" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
              Team
            </div>
            <p style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
              {study.team}
            </p>
          </div>
          
          <div>
            <div className="text-muted-foreground mb-2" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
              Duration
            </div>
            <p style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
              {study.duration}
            </p>
          </div>
        </div>
      </section>

      {/* Context & Challenge */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '2rem', 
              fontWeight: 400,
              letterSpacing: '-0.01em'
            }}
          >
            Context
          </h2>
          <p className="text-muted-foreground max-w-4xl" style={{ fontSize: '1.063rem', lineHeight: '1.7' }}>
            {study.context}
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '2rem', 
              fontWeight: 400,
              letterSpacing: '-0.01em'
            }}
          >
            Challenge
          </h2>
          <p className="text-muted-foreground max-w-4xl" style={{ fontSize: '1.063rem', lineHeight: '1.7' }}>
            {study.challenge}
          </p>
        </motion.div>
      </section>

      {/* Research Phase - Image Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-border bg-background/50">
        <motion.h2 
          className="mb-12" 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '2rem', 
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Research & Discovery
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="aspect-[4/3] bg-muted overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src={study.researchImage}
              alt="User Research"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="aspect-[4/3] bg-muted overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src={study.workshopImage}
              alt="Design Workshop"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground" style={{ fontSize: '1.063rem', lineHeight: '1.7' }}>
            Our research phase involved extensive user interviews, contextual inquiry, and collaborative workshops to deeply understand user needs and pain points. We conducted over 200 hours of research across multiple user segments to inform our design decisions.
          </p>
        </motion.div>
      </section>

      {/* Approach */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-border">
        <motion.h2 
          className="mb-12" 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '2rem', 
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Approach
        </motion.h2>
        
        <ul className="space-y-4 max-w-4xl">
          {study.approach.map((item: string, i: number) => (
            <motion.li 
              key={i} 
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="text-muted-foreground mt-2 flex-shrink-0">•</span>
              <span className="text-muted-foreground flex-1" style={{ fontSize: '1.063rem', lineHeight: '1.7' }}>
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Design Solution - Full Width Image */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 border-t border-border bg-background/50">
        <motion.h2 
          className="mb-12" 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '2rem', 
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Design Solution
        </motion.h2>

        <motion.div 
          className="aspect-[16/9] bg-muted overflow-hidden border-4 border-background shadow-xl mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <ImageWithFallback
            src={study.designImage}
            alt="Design Solution"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.p 
          className="text-muted-foreground max-w-4xl"
          style={{ fontSize: '1.063rem', lineHeight: '1.7' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The final design solution addressed all key user needs while maintaining technical feasibility and business objectives. We created a scalable, accessible, and intuitive interface that significantly improved user workflows.
        </motion.p>
      </section>

      {/* Outcomes & Leadership */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-16 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div 
            className="space-y-6 p-8 bg-secondary border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.75rem', 
                fontWeight: 400,
                letterSpacing: '-0.01em'
              }}
            >
              Outcomes & Impact
            </h3>
            <ul className="space-y-3">
              {study.outcomes.map((item: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="text-muted-foreground mt-1">✓</span>
                  <span className="flex-1" style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: '1.75rem', 
                fontWeight: 400,
                letterSpacing: '-0.01em'
              }}
            >
              Leadership & Team Impact
            </h3>
            <ul className="space-y-3">
              {study.leadership.map((item: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span className="text-muted-foreground flex-1" style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* More Case Studies */}
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
            Explore More Work
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {otherCaseStudies.map((cs, index) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={`/work/${cs.id}`}
                  className="group block bg-background border border-border hover:shadow-lg transition-all duration-300 p-8"
                >
                  <div className="space-y-3">
                    <div className="text-muted-foreground" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                      {cs.category}
                    </div>
                    <h3 
                      className="group-hover:text-muted-foreground transition-colors"
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.5rem', 
                        fontWeight: 400,
                        lineHeight: '1.3'
                      }}
                    >
                      {cs.title}
                    </h3>
                    <div className="flex items-center gap-2 pt-2 text-foreground group-hover:gap-3 transition-all duration-300">
                      <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>View case study</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
