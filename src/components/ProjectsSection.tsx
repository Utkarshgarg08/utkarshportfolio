'use client'

import { motion, Variants } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../data/mock'

interface ProjectColor {
  bg: string
  accent: string
}

const projectColors: ProjectColor[] = [
  { bg: 'from-[#00d4ff]/20 to-[#00d4ff]/5', accent: '#00d4ff' },
  { bg: 'from-[#ff6b6b]/20 to-[#ff6b6b]/5', accent: '#ff6b6b' },
  { bg: 'from-[#a855f7]/20 to-[#a855f7]/5', accent: '#a855f7' },
  { bg: 'from-[#22c55e]/20 to-[#22c55e]/5', accent: '#22c55e' },
]

const ProjectsSection = () => {
  const { isDark } = useTheme()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  return (
    <section
      id="projects"
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
                ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20'
                : 'bg-[#0a0f1c]/5 text-[#0a0f1c] border border-[#0a0f1c]/10'
            }`}
          >
            <Sparkles size={14} />
            Featured Work
          </span>
          <h2
            className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
              isDark ? 'text-white' : 'text-[#0a0f1c]'
            }`}
          >
            Live <span className="text-[#00d4ff]">Projects</span>
          </h2>
          <p
            className={`text-lg max-w-2xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            A selection of production applications I&apos;ve built and shipped.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const color = projectColors[index % projectColors.length];
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-[#1a1f2e] border border-white/10 hover:border-white/20'
                    : 'bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-8">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-wider"
                      style={{
                        backgroundColor: `${color.accent}20`,
                        color: color.accent,
                        border: `1px solid ${color.accent}40`,
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      {project.status}
                    </span>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full transition-colors ${
                        isDark
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-black/5 text-[#0a0f1c] hover:bg-black/10'
                      }`}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>

                  <h3
                    className={`text-2xl font-display font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-[#0a0f1c]'
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-base mb-6 line-clamp-3 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full font-mono text-xs ${
                          isDark
                            ? 'bg-white/5 text-gray-300 border border-white/10'
                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit Button */}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider"
                    style={{ color: color.accent }}
                  >
                    Visit Live Site
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
