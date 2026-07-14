import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench } from 'lucide-react';
import { Section } from './Section';
import { SKILLS } from '../lib/data';
import { fadeInUp } from '../lib/animations';
import { SKILL_ICONS } from './tech-icons';

const categoryIcons: Record<string, React.ReactNode> = {
  code: <Code className="h-5 w-5" />,
  layers: <Layers className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  wrench: <Wrench className="h-5 w-5" />,
};

export function Skills() {
  return (
    <Section id="skills" title="Technical Expertise" subtitle="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="group rounded-2xl border p-6 transition-all duration-300 md:p-8"
            style={{
              borderColor: 'var(--border-primary)',
              backgroundColor: 'var(--bg-card)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(30, 64, 175, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-primary)';
            }}
          >
            {/* Category header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                {categoryIcons[category.icon]}
              </div>
              <h3
                className="text-lg font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {category.title}
              </h3>
            </div>

            {/* Skill cards with logos */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill, i) => {
                const iconUrl = SKILL_ICONS[skill];
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                      transition: { duration: 0.2 },
                    }}
                    className="flex cursor-default flex-col items-center gap-2.5 rounded-xl border p-4 transition-all duration-200"
                    style={{
                      borderColor: 'var(--border-primary)',
                      backgroundColor: 'var(--bg-elevated)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(30, 64, 175, 0.4)';
                      e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(30, 64, 175, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-primary)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Logo */}
                    <div className="flex h-10 w-10 items-center justify-center">
                      {iconUrl ? (
                        <img src={iconUrl} alt={skill} className="h-9 w-9 object-contain" />
                      ) : (
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-sm font-bold text-white">
                          {skill.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Name tag */}
                    <span
                      className="text-center text-xs font-semibold leading-tight"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {skill}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
