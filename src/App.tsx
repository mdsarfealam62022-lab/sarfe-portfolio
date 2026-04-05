import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Loader timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Scroll progress
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden selection:bg-neon-cyan/30 selection:text-neon-cyan">

      {/* ================= LOADER ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950"
          >
            <div className="w-20 h-20 border-2 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin" />
            <p className="mt-6 text-sm tracking-widest text-slate-400">
              Loading Portfolio...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= SCROLL BAR ================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan origin-left z-50"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 px-6 py-3 glass rounded-full border border-white/10 hidden md:flex items-center gap-8">
        {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-neon-cyan transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* ================= BACKGROUND ================= */}
      <Background />

      {/* ================= OVERLAY (IMPORTANT FIX) ================= */}
      <div className="absolute inset-0 z-[1] bg-slate-950/60 backdrop-blur-[1px]" />

      {/* ================= MAIN CONTENT ================= */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Vision />
        <Contact />
      </main>

      {/* ================= SOFT GLOW ================= */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-cyan/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/20 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
<div className="absolute inset-0 z-[1] bg-slate-950/30 backdrop-blur-[1px]" />