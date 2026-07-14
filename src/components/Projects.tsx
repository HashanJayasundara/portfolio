import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './icons';
import { Section } from './Section';
import { PROJECTS } from '../lib/data';
import { SpotlightCard } from './SpotlightCard';
import { fadeInUp } from '../lib/animations';

export function Projects() {
  return (
    <Section id="projects" title="Featured Artifacts" subtitle="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <SpotlightCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col justify-between"
          >
            {/* Gradient accent top border */}
            <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative p-6 md:p-8">
              {/* Project header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand opacity-80 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="text-lg font-bold text-white">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="flex gap-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-[var(--border-hover)]"
                      style={{ color: 'var(--text-muted)' }}
                      aria-label={`Visit ${project.title} live site`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-[var(--border-hover)]"
                      style={{ color: 'var(--text-muted)' }}
                      aria-label={`View ${project.title} source code`}
                    >
                      <GitHubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3
                className="mb-2 text-lg font-bold transition-colors duration-200 md:text-xl"
                style={{ color: 'var(--text-primary)' }}
              >
                <span className="flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 -translate-y-0.5 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:opacity-100" style={{ color: 'var(--color-brand-cyan)' }} />
                </span>
              </h3>

              {/* Description */}
              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200"
                    style={{
                      borderColor: 'var(--border-primary)',
                      color: 'var(--text-muted)',
                      backgroundColor: 'var(--bg-elevated)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
