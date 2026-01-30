'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { education } from '../data/mock';

const EducationSection = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="education"
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
            <GraduationCap size={14} />
            Academic Background
          </span>
          <h2
            className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
              isDark ? 'text-white' : 'text-[#0a0f1c]'
            }`}
          >
            Education <span className="text-[#00d4ff]">Journey</span>
          </h2>
          <p
            className={`text-lg max-w-2xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Academic foundation that shaped my technical expertise and problem-solving approach.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? 'bg-[#1a1f2e] border-white/10 hover:border-[#00d4ff]/30'
                  : 'bg-white border-gray-200 hover:border-[#00d4ff]/30 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00d4ff]/10 flex items-center justify-center">
                  <GraduationCap
                    size={24}
                    className="text-[#00d4ff]"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-display font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-[#0a0f1c]'
                    }`}
                  >
                    {edu.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar
                    size={16}
                    className={`${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  />
                  <p
                    className={`font-mono text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {edu.period}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin
                    size={16}
                    className={`${
                      isDark ? 'text-gray-500' : 'text-gray-500'
                    }`}
                  />
                  <p
                    className={`font-mono text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {edu.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
