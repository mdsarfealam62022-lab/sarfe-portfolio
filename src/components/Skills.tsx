import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Terminal, Box, Ruler, Globe, ShieldCheck } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "AI & Data Science",
      skills: [
        { name: "Python", icon: <Terminal className="w-5 h-5" />, color: "text-blue-400" },
        { name: "Machine Learning", icon: <Database className="w-5 h-5" />, color: "text-purple-400" },
        { name: "FastAPI", icon: <Code2 className="w-5 h-5" />, color: "text-emerald-400" },
        { name: "XGBoost", icon: <Layout className="w-5 h-5" />, color: "text-orange-400" }
      ]
    },
    {
      title: "Civil Engineering",
      skills: [
        { name: "AutoCAD", icon: <Ruler className="w-5 h-5" />, color: "text-red-400" },
        { name: "Revit & BIM", icon: <Box className="w-5 h-5" />, color: "text-cyan-400" },
        { name: "Structural Analysis", icon: <Globe className="w-5 h-5" />, color: "text-indigo-400" },
        { name: "Geotechnical Eng.", icon: <ShieldCheck className="w-5 h-5" />, color: "text-amber-400" }

      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-neon-cyan">Arsenal</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto tracking-wide">A powerful combination of engineering principles and modern tech.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-neon-cyan" />
                {group.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (groupIndex * 4 + skillIndex) * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-cyan/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-slate-900 group-hover:bg-white/5 transition-colors ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
