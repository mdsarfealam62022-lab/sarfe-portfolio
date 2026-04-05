import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Building2, BrainCircuit, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    {
      icon: <Building2 className="w-8 h-8 text-neon-cyan" />,
      title: "Civil Engineering",
      desc: "Final-year B.Tech student with 7.49 CGPA. Deeply rooted in structural analysis and geotechnical engineering."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-neon-purple" />,
      title: "AI Integration",
      desc: "Specializing in applying Machine Learning and Data Science to solve complex civil engineering problems."
    },
    {
      icon: <Cpu className="w-8 h-8 text-neon-blue" />,
      title: "Tech Stack",
      desc: "Proficient in Python, FastAPI, XGBoost, and BIM tools like AutoCAD and Revit."
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              A Fusion of <span className="text-neon-cyan">Structures</span> & <span className="text-neon-purple">Intelligence</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I am <span className="text-white font-semibold">Sarfe Alam</span>, a final-year Civil Engineering student at the intersection of traditional infrastructure and cutting-edge technology. My vision is to build intelligent infrastructure systems that are not just strong, but smart.
              </p>
              <p>
                During my internships at <span className="text-neon-cyan">Bihar State Building Construction Corporation</span> and <span className="text-neon-purple">NTPC Limited</span>, I realized the immense potential of AI in optimizing construction workflows and predicting structural behavior.
              </p>
              <p>
                My goal is to lead the next generation of smart cities, where autonomous monitoring and sustainable infrastructure are the standard, powered by data-driven insights.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">2026</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Graduation</span>
              </div>
              <div className="w-px h-12 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">7.49</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">CGPA</span>
              </div>
              <div className="w-px h-12 bg-slate-800" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">2+</span>
                <span className="text-sm text-slate-500 uppercase tracking-widest">Internships</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/30 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-slate-900/50 group-hover:bg-neon-cyan/10 transition-colors">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
