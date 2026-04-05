import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Bihar State Building Construction Corporation Limited",
      role: "Intern",
      period: "2025",
      location: "Bihar, India",
      desc: "Assisted in overseeing building construction projects, ensuring structural integrity and compliance with design specifications. Gained hands-on experience in project management and site supervision."
    },
    {
      company: "NTPC Limited",
      role: "Intern",
      period: "2025",
      location: "India",
      desc: "Gained insights into large-scale infrastructure projects, focusing on structural analysis and geotechnical aspects of power plant construction."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-neon-cyan">Journey</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto tracking-wide">Internships at leading organizations that shaped my perspective on civil engineering.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/50 via-neon-purple/50 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.8)] z-10 hidden md:block" />

                {/* Content Card */}
                <div className="w-full md:w-[45%] glass p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/30 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-slate-900 group-hover:bg-neon-cyan/20 transition-colors">
                      <Briefcase className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{exp.company}</h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500 font-medium uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{exp.desc}</p>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
