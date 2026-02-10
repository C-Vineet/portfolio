'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-20 dotted-bg">
      <div className="fixed top-20 right-32 w-16 h-16 border-2 border-muted rotate-12 opacity-20 float-animation hidden lg:block" style={{ animationDelay: '0s' }} />
      <div className="fixed bottom-32 left-32 w-20 h-20 rounded-full border-2 border-muted opacity-20 float-animation hidden lg:block" style={{ animationDelay: '1s' }} />

      <section className="max-w-2xl mx-auto px-6 lg:px-12 py-24">
        <motion.div 
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground tracking-wide uppercase" style={{ fontSize: '0.813rem', letterSpacing: '0.1em' }}>
            Get In Touch
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
            Let's collaborate on something great
          </h1>
          <p className="text-muted-foreground mx-auto max-w-xl" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            I'm always interested in new projects and opportunities to work with innovative teams. Reach out to discuss how we can create exceptional design solutions together.
          </p>
        </motion.div>
      </section>

      <section className="max-w-2xl mx-auto px-6 lg:px-12 py-24 border-t border-border">
        <div className="space-y-8">
          <motion.div 
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400 }}>
              Email
            </h3>
            <a 
              href="mailto:vineet@example.com"
              className="inline-flex items-center gap-2 text-lg hover:text-muted-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              vineet@example.com
            </a>
          </motion.div>

          <motion.div 
            className="space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400 }}>
              Connect
            </h3>
            <div className="flex justify-center gap-6">
              <a 
                href="https://linkedin.com" 
                className="inline-flex items-center gap-2 text-lg hover:text-muted-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://twitter.com" 
                className="inline-flex items-center gap-2 text-lg hover:text-muted-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 lg:px-12 py-24 border-t border-border bg-background/50 text-center">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400 }}>
            Open for Opportunities
          </h2>
          <p className="text-muted-foreground" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            Currently open to design leadership roles, consulting projects, and strategic partnerships. Let's create something meaningful together.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
