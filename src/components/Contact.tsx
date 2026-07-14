import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './icons';
import { Section } from './Section';
import { fadeInUp } from '../lib/animations';
import { PROFILE } from '../lib/data';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, integrate with email API (Resend, SendGrid, etc.)
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <Section id="contact" title="Let's Build Together" subtitle="Contact">
      <div className="grid gap-12 lg:grid-cols-5">
        {/* Left — Info */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <h3
            className="mb-4 text-2xl font-bold"
            style={{ color: 'var(--text-primary)' }}
          >
            Get in touch
          </h3>
          <p
            className="mb-8 text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a project in mind, an idea to discuss, or a team seeking a
            dedicated engineer? I'd love to hear from you. Let's create something
            remarkable.
          </p>

          {/* Quick links */}
          <div className="space-y-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group flex items-center gap-3 transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#EA4335';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = '#EA4335';
                iconDiv.style.backgroundColor = 'rgba(234, 67, 53, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = 'var(--border-primary)';
                iconDiv.style.backgroundColor = 'transparent';
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-200" style={{ borderColor: 'var(--border-primary)' }}>
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Email</p>
                <p className="text-sm font-medium">{PROFILE.email}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </a>

            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, '')}`}
              className="group flex items-center gap-3 transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1A73E8';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = '#1A73E8';
                iconDiv.style.backgroundColor = 'rgba(26, 115, 232, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = 'var(--border-primary)';
                iconDiv.style.backgroundColor = 'transparent';
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-200" style={{ borderColor: 'var(--border-primary)' }}>
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Phone</p>
                <p className="text-sm font-medium">{PROFILE.phone}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </a>

            <a
              href={`https://wa.me/${PROFILE.phone.replace(/[^\d]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#25D366';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = '#25D366';
                iconDiv.style.backgroundColor = 'rgba(37, 211, 102, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = 'var(--border-primary)';
                iconDiv.style.backgroundColor = 'transparent';
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-200" style={{ borderColor: 'var(--border-primary)' }}>
                <WhatsAppIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>WhatsApp</p>
                <p className="text-sm font-medium">{PROFILE.phone}</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8A2BE2'; // purple-ish
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = '#8A2BE2';
                iconDiv.style.backgroundColor = 'rgba(138, 43, 226, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = 'var(--border-primary)';
                iconDiv.style.backgroundColor = 'transparent';
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-200" style={{ borderColor: 'var(--border-primary)' }}>
                <GitHubIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>GitHub</p>
                <p className="text-sm font-medium">@hashanjayasundara</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#0A66C2';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = '#0A66C2';
                iconDiv.style.backgroundColor = 'rgba(10, 102, 194, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                const iconDiv = e.currentTarget.children[0] as HTMLElement;
                iconDiv.style.borderColor = 'var(--border-primary)';
                iconDiv.style.backgroundColor = 'transparent';
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-200" style={{ borderColor: 'var(--border-primary)' }}>
                <LinkedInIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>LinkedIn</p>
                <p className="text-sm font-medium">hashanjayasundara</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div variants={fadeInUp} className="lg:col-span-3">
          <div
            className="rounded-2xl border p-6 md:p-8"
            style={{
              borderColor: 'var(--border-primary)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                  >
                    <CheckCircle className="mb-4 h-12 w-12 text-emerald-500" />
                  </motion.div>
                  <h4 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    Message Sent!
                  </h4>
                  <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        borderColor: focusedField === 'name' ? 'var(--color-brand-blue)' : 'var(--border-primary)',
                        color: 'var(--text-primary)',
                        boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(30, 64, 175, 0.1)' : 'none',
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        borderColor: focusedField === 'email' ? 'var(--color-brand-blue)' : 'var(--border-primary)',
                        color: 'var(--text-primary)',
                        boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(30, 64, 175, 0.1)' : 'none',
                      }}
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full resize-none rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-all duration-200"
                      style={{
                        borderColor: focusedField === 'message' ? 'var(--color-brand-blue)' : 'var(--border-primary)',
                        color: 'var(--text-primary)',
                        boxShadow: focusedField === 'message' ? '0 0 0 3px rgba(30, 64, 175, 0.1)' : 'none',
                      }}
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/30"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
