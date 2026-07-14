import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Calendar } from 'lucide-react';
import { Section } from './Section';
import { EXPERIENCE } from '../lib/data';
import { SpotlightCard } from './SpotlightCard';
import { fadeInUp } from '../lib/animations';

export function Experience() {
  return (
    <Section id="experience" title="Professional Experience" subtitle="Career">
      <div className="relative">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative"
          >
            {/* Timeline connector */}
            <div className="absolute top-0 left-8 hidden h-full w-px md:block" style={{ backgroundColor: 'var(--border-primary)' }}>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-full bg-gradient-to-b from-brand-blue to-brand-cyan"
              />
            </div>

            {/* Timeline node */}
            <div className="absolute top-0 left-8 hidden -translate-x-1/2 md:block">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand shadow-lg shadow-blue-500/25"
              >
                <Briefcase className="h-3 w-3 text-white" />
              </motion.div>
            </div>

            {/* Content card */}
            <div className="md:ml-20">
              <SpotlightCard
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="glass-card rounded-2xl p-6 md:p-8"
              >
                {/* Header */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3
                      className="text-xl font-bold md:text-2xl"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-gradient text-sm font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium whitespace-nowrap"
                    style={{
                      borderColor: 'var(--border-primary)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="flex gap-3"
                    >
                      <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gradient-brand">
                        <TrendingUp className="h-3 w-3 text-white" />
                      </div>
                      <p
                        className="text-sm leading-relaxed md:text-base"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Impact metrics bar */}
                <div
                  className="mt-8 grid grid-cols-2 gap-4 border-t pt-6 md:grid-cols-4"
                  style={{ borderColor: 'var(--border-primary)' }}
                >
                  {[
                    { label: 'UI Perf Boost', value: '30%' },
                    { label: 'Query Optimization', value: '40%' },
                    { label: 'Systems Built', value: '3+' },
                    { label: 'APIs Shipped', value: '10+' },
                  ].map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="text-center"
                    >
                      <p className="text-gradient text-2xl font-bold md:text-3xl">
                        {metric.value}
                      </p>
                      <p
                        className="mt-1 text-xs font-medium"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {metric.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
