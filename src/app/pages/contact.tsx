import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-20 dotted-bg">
      {/* Fun floating shapes */}
      <div className="fixed top-36 right-24 w-16 h-16 border-2 border-muted rotate-45 opacity-20 float-animation hidden lg:block" style={{ animationDelay: '0.7s' }} />
      <div className="fixed bottom-36 left-24 w-14 h-14 rounded-full border-2 border-muted opacity-20 float-animation hidden lg:block" style={{ animationDelay: '1.4s' }} />
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground tracking-wide uppercase" style={{ fontSize: '0.813rem', letterSpacing: '0.1em' }}>
            Contact
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
            Let's discuss how I can contribute to your organization
          </h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <p className="text-muted-foreground" style={{ fontSize: '1.063rem', lineHeight: '1.7' }}>
                I'm currently exploring strategic design leadership opportunities where I can drive organizational transformation, build high-performing teams, and establish design as a key business function.
              </p>
              <p className="text-muted-foreground" style={{ fontSize: '1.063rem', lineHeight: '1.7' }}>
                I'm particularly interested in roles at enterprise companies in healthcare, finance, or B2B SaaS, where systems thinking and strategic leadership can create meaningful impact.
              </p>
            </div>

            <div className="space-y-6">
              <h2 style={{ fontWeight: 500, fontSize: '1.063rem' }}>
                Connect with me
              </h2>
              
              <div className="space-y-4">
                <a 
                  href="mailto:sarah.chen@email.com" 
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="p-2 border border-border group-hover:border-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span style={{ fontSize: '0.938rem' }}>sarah.chen@email.com</span>
                </a>

                <a 
                  href="https://linkedin.com/in/sarahchen" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="p-2 border border-border group-hover:border-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span style={{ fontSize: '0.938rem' }}>linkedin.com/in/sarahchen</span>
                </a>

                <a 
                  href="https://twitter.com/sarahchen" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="p-2 border border-border group-hover:border-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <span style={{ fontSize: '0.938rem' }}>@sarahchen</span>
                </a>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-border">
              <h3 style={{ fontWeight: 500, fontSize: '0.938rem' }}>
                What I'm looking for
              </h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                  • Director or VP-level design leadership roles
                </li>
                <li className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                  • Opportunities to build and scale design teams
                </li>
                <li className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                  • Organizations valuing design as strategic function
                </li>
                <li className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                  • Complex enterprise or healthcare domains
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="border border-border p-8 lg:p-12 bg-card">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div 
                    style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontSize: '1.875rem', 
                      fontWeight: 400 
                    }}
                  >
                    Thank you for reaching out
                  </div>
                  <p className="text-muted-foreground" style={{ fontSize: '0.938rem' }}>
                    I'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h2 
                      className="mb-8" 
                      style={{ 
                        fontFamily: 'var(--font-serif)', 
                        fontSize: '1.5rem', 
                        fontWeight: 400,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      Send me a message
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label 
                        htmlFor="name" 
                        className="block text-muted-foreground"
                        style={{ fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                        style={{ fontSize: '0.938rem' }}
                      />
                    </div>

                    <div className="space-y-2">
                      <label 
                        htmlFor="email" 
                        className="block text-muted-foreground"
                        style={{ fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                        style={{ fontSize: '0.938rem' }}
                      />
                    </div>

                    <div className="space-y-2">
                      <label 
                        htmlFor="company" 
                        className="block text-muted-foreground"
                        style={{ fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors"
                        style={{ fontSize: '0.938rem' }}
                      />
                    </div>

                    <div className="space-y-2">
                      <label 
                        htmlFor="message" 
                        className="block text-muted-foreground"
                        style={{ fontSize: '0.875rem', fontWeight: 500 }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                        style={{ fontSize: '0.938rem', lineHeight: '1.6' }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors"
                    style={{ fontSize: '0.938rem', fontWeight: 500 }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
