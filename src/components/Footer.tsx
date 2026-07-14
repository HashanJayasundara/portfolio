import { motion } from 'framer-motion';
import { Heart, Terminal } from 'lucide-react';
import { PROFILE, NAV_LINKS } from '../lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{
        borderColor: 'var(--border-primary)',
        backgroundColor: 'var(--bg-card)',
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex h-8 w-8 overflow-hidden rounded-full border-2" style={{ borderColor: 'var(--border-primary)' }}>
              <img src="/profile.jpg" alt="Hashan" className="h-full w-full object-cover" />
            </div>
            <span
              className="text-sm font-bold tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              hashanjayasundara<span className="text-gradient">.dev</span>
            </span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 flex flex-col items-center gap-2 border-t pt-8 text-center text-xs md:flex-row md:justify-between"
          style={{
            borderColor: 'var(--border-primary)',
            color: 'var(--text-muted)',
          }}
        >
          <p>© {currentYear} {PROFILE.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="h-3 w-3 text-red-500" /> and precision engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
