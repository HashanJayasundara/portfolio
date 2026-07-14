import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowDown, FileText, Sparkles } from 'lucide-react';
import { PROFILE } from '../lib/data';

// Magnetic Button Wrapper
function MagneticButton({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`magnetic ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="about"
      className="noise-bg relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'linear-gradient(135deg, #1e40af, #06b6d4)' }}
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: 'linear-gradient(135deg, #4f46e5, #1e40af)' }}
        />
        <motion.div
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
          style={{ background: 'linear-gradient(135deg, #06b6d4, #4f46e5)' }}
        />
      </div>

      {/* Grid dot pattern overlay */}
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: 'var(--border-primary)',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-secondary)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for opportunities
            </div>
          </motion.div>

          {/* Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="mb-8 mt-4"
          >
            <div className="relative mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full p-1 bg-gradient-brand shadow-2xl">
              <div 
                className="h-full w-full rounded-full overflow-hidden border-[4px]" 
                style={{ borderColor: 'var(--bg-primary)' }}
              >
                <img 
                  src="/profile.jpg" 
                  alt={PROFILE.name} 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Main heading - Staggered Reveal */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="mb-6 text-5xl leading-[1.1] font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ color: 'var(--text-primary)' }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12 } },
              }}
              className="inline-block"
            >
              Hi, I'm
            </motion.span>{' '}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12 } },
              }}
              className="text-gradient inline-block"
            >
              {PROFILE.name}
            </motion.span>
            <br />
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12 } },
              }}
              className="mt-2 inline-block text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              {PROFILE.role}
            </motion.span>
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            {PROFILE.summary}
          </motion.p>

          {/* Location widget */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-10 flex items-center gap-2 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            <MapPin className="h-4 w-4" style={{ color: '#06b6d4' }} />
            <span>{PROFILE.location}</span>
            <span className="mx-2">·</span>
            <span className="font-mono text-xs">UTC +5:30</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/30"
              >
                <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Explore Artifacts
              </motion.a>
            </MagneticButton>
            <MagneticButton>
              <motion.a
                href="/cv.pdf"  
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-semibold transition-colors duration-200"
                style={{
                  borderColor: 'var(--border-primary)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-card)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
                  e.currentTarget.style.borderColor = 'rgba(30, 64, 175, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                }}
              >
                <FileText className="h-4 w-4" />
                Download CV
              </motion.a>
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="h-5 w-5" style={{ color: 'var(--text-muted)' }} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
