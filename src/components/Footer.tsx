'use client'

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  interface SocialLink {
    icon: typeof Linkedin
    href: string
    label: string
  }

  const socialLinks: SocialLink[] = [
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
  ]

  interface NavLink {
    label: string
    href: string
  }

  const navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className={`py-12 ${isDark ? 'bg-[#0d1117] border-t border-white/5' : 'bg-white border-t border-gray-200'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className={`inline-block font-display text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#0a0f1c]'
                }`}
            >
              UG<span className="text-[#00d4ff]">.</span>
            </motion.a>
            <p
              className={`mt-4 text-sm max-w-xs ${isDark ? 'text-gray-500' : 'text-gray-500'
                }`}
            >
              {personalInfo.heroStatement}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className={`font-mono text-xs uppercase tracking-wider mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${isDark
                      ? 'text-gray-500 hover:text-[#00d4ff]'
                      : 'text-gray-600 hover:text-[#00d4ff]'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className={`font-mono text-xs uppercase tracking-wider mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={link.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isDark
                    ? 'bg-white/5 text-gray-400 hover:bg-[#00d4ff]/20 hover:text-[#00d4ff]'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff]'
                    }`}
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
            </div>
            <p
              className={`mt-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'
                }`}
            >
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between pt-8 ${isDark ? 'border-t border-white/5' : 'border-t border-gray-200'
            }`}
        >
          <p
            className={`text-sm flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-500'
              }`}
          >
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={14} className="text-[#ff6b6b] fill-[#ff6b6b]" />
            using Next.js
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`mt-4 md:mt-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isDark
              ? 'bg-white/5 text-gray-400 hover:bg-[#00d4ff]/20 hover:text-[#00d4ff]'
              : 'bg-gray-100 text-gray-600 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff]'
              }`}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer
