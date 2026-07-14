import { motion } from 'framer-motion';
import { staggerContainer } from '../lib/animations';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto max-w-6xl px-6"
      >
        {title && (
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-block rounded-full bg-gradient-brand px-4 py-1.5 text-xs font-semibold tracking-wider text-white uppercase"
            >
              {subtitle || id}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              style={{ color: 'var(--text-primary)' }}
            >
              {title}
            </motion.h2>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
