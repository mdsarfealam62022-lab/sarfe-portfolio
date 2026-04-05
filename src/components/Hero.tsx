import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Download, ExternalLink, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1 rounded-full glass border border-neon-cyan/30 text-neon-cyan text-sm font-medium mb-6 tracking-wider uppercase"
          >
            AI Civil Engineer
          </motion.span>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            SARFE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">ALAM</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-xl mb-10 leading-relaxed">
            Building Intelligent Infrastructure Systems. Fusing structural engineering with artificial intelligence to create the future of smart cities.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-neon-cyan text-slate-950 font-bold rounded-lg shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-all"
            >
              View Projects
            </motion.a>

            <div className="flex gap-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Sarfe_Alam_Resume.pdf"
                download="Sarfe_Alam_Resume.pdf"
                className="p-4 glass rounded-lg border border-white/10 hover:border-neon-cyan/50 transition-all group"
                title="Download Resume"
              >
                <Download className="w-6 h-6 group-hover:text-neon-cyan transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Sarfe_Alam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass rounded-lg border border-white/10 hover:border-neon-purple/50 transition-all group"
                title="View Resume"
              >
                <ExternalLink className="w-6 h-6 group-hover:text-neon-purple transition-colors" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Profile Photo Interaction */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative group">
            {/* Animated Glow Rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />

            {/* Photo Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 glass-dark p-2">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src="/sarfe_NTPC.jpeg"
                  alt="Sarfe Alam"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300"
                >
                  <a
                    href="https://www.linkedin.com/in/sarfe-alam-92a213300/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 text-white group/link"
                  >
                    <div className="p-4 rounded-full bg-neon-blue/20 border border-neon-blue/50 group-hover/link:bg-neon-blue/40 transition-all">
                      <Linkedin className="w-8 h-8" />
                    </div>
                    <span className="font-bold tracking-wider text-sm uppercase">Connect on LinkedIn</span>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 glass rounded-lg border border-neon-cyan/50 flex items-center justify-center animate-float">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-lg border border-neon-purple/50 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xs font-mono text-neon-purple">AI+CE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};
