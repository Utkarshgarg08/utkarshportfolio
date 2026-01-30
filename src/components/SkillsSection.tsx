'use client'

import { motion } from 'framer-motion';
import { Code2, Layers, Database, Wrench, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { skillGroups } from '../data/mock';

const skillIcons: Record<string, typeof Code2> = {
  'Languages & Core': Code2,
  'Frameworks & Runtimes': Layers,
  'State & UI Systems': Cpu,
  'Data & Infra': Database,
  'Quality & Tooling': Wrench,
}

const skillColors = [
  '#00d4ff',
  '#ff6b6b',
  '#a855f7',
  '#22c55e',
  '#f59e0b',
];

const SkillsSection = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className={`py-24 md:py-32 ${
        isDark ? 'bg-[#0d1117]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest mb-6 ${
              isDark
                ? 'bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20'
                : 'bg-[#0a0f1c]/5 text-[#0a0f1c] border border-[#0a0f1c]/10'
            }`}
          >
            <Code2 size={14} />
            Technical Arsenal
          </span>
          <h2
            className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
              isDark ? 'text-white' : 'text-[#0a0f1c]'
            }`}
          >
            Skills & <span className="text-[#00d4ff]">Expertise</span>
          </h2>
          <p
            className={`text-lg max-w-2xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Technologies I&apos;ve mastered to deliver high-performance applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => {
            const Icon = skillIcons[group.title] || Code2;
            const color = skillColors[groupIndex % skillColors.length];

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  isDark
                    ? 'bg-[#1a1f2e] border border-white/10 hover:border-white/20'
                    : 'bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={24} style={{ color }} />
                </div>

                <h3
                  className={`text-xl font-display font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-[#0a0f1c]'
                  }`}
                >
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3 py-1.5 rounded-full font-mono text-xs cursor-default transition-all ${
                        isDark
                          ? 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/30'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
