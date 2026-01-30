'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronRight, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { experiences } from '../data/mock';

const ExperienceSection = () => {
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className={`py-24 md:py-32 ${
        isDark ? 'bg-[#0a0f1c]' : 'bg-[#fafafa]'
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
                ? 'bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/20'
                : 'bg-[#0a0f1c]/5 text-[#0a0f1c] border border-[#0a0f1c]/10'
            }`}
          >
            <Briefcase size={14} />
            Career Journey
          </span>
          <h2
            className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
              isDark ? 'text-white' : 'text-[#0a0f1c]'
            }`}
          >
            Work <span className="text-[#00d4ff]">Experience</span>
          </h2>
          <p
            className={`text-lg max-w-2xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            8+ years of building scalable applications across AI, healthcare, and enterprise sectors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.company}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 5 }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeIndex === index
                    ? isDark
                      ? 'bg-[#00d4ff]/10 border border-[#00d4ff]/30'
                      : 'bg-[#00d4ff]/10 border border-[#00d4ff]/30'
                    : isDark
                    ? 'bg-white/5 border border-white/10 hover:border-white/20'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`font-display font-bold text-lg ${
                        activeIndex === index
                          ? 'text-[#00d4ff]'
                          : isDark
                          ? 'text-white'
                          : 'text-[#0a0f1c]'
                      }`}
                    >
                      {exp.company}
                    </h3>
                    <p
                      className={`font-mono text-xs uppercase tracking-wider mt-1 ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      {exp.period}
                    </p>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`transition-transform ${
                      activeIndex === index ? 'rotate-90 text-[#00d4ff]' : ''
                    } ${
                      isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-8 rounded-2xl ${
                  isDark
                    ? 'bg-[#1a1f2e] border border-white/10'
                    : 'bg-white border border-gray-200 shadow-lg'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3
                      className={`text-2xl font-display font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-[#0a0f1c]'
                      }`}
                    >
                      {experiences[activeIndex].company}
                    </h3>
                    <p
                      className={`font-mono text-sm ${
                        isDark ? 'text-[#00d4ff]' : 'text-[#00d4ff]'
                      }`}
                    >
                      {experiences[activeIndex].role}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs ${
                      isDark
                        ? 'bg-white/5 text-gray-400'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Calendar size={12} />
                    {experiences[activeIndex].period}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {experiences[activeIndex].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full font-mono text-xs bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-4">
                  {experiences[activeIndex].highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00d4ff]/20 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                      </span>
                      <p
                        className={`text-base leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {highlight}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
