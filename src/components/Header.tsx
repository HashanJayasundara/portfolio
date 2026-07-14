import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../providers/theme-provider';
import { NAV_LINKS } from '../lib/data';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass border-b py-3'
            : 'py-5'
        }`}
        style={{
          backgroundColor: isScrolled ? 'color-mix(in srgb, var(--bg-primary) 80%, transparent)' : 'transparent',
          borderColor: isScrolled ? 'var(--border-primary)' : 'transparent',
        }}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-brand origin-left z-50"
          style={{ scaleX }}
        />
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* /public/profile.jpg*/}
          <motion.a
            href="#"
            className="group flex items-center gap-2.5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex h-9 w-9 overflow-hidden rounded-full border-2" style={{ borderColor: 'var(--border-primary)' }}>
              <img src="/profile.jpg" alt="Hashan" className="h-full w-full object-cover" />
            </div>
            <span className="text-sm font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              hashanjayasundara<span className="text-gradient">.dev</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[var(--border-hover)]"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-200 hover:bg-[var(--border-hover)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA Button (desktop) */}
            <a
              href="#contact"
              className="hidden rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 md:inline-flex"
            >
              Let's Connect
            </a>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden hover:bg-[var(--border-hover)]"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 glass md:hidden"
            style={{ backgroundColor: 'color-mix(in srgb, var(--bg-primary) 95%, transparent)' }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center gap-6 pt-24"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold transition-colors duration-200"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 rounded-xl bg-gradient-brand px-8 py-3 text-lg font-semibold text-white"
              >
                Let's Connect
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
