'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, MapPin, ArrowUpRight, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo, contactCards } from '../data/mock';

const ContactSection = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactIcons: Record<string, typeof Mail> = {
    Email: Mail,
    Phone: Phone,
    LinkedIn: Linkedin,
  }

  return (
    <section
      id="contact"
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
          className="mb-16 text-center"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest mb-6 ${
              isDark
                ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20'
                : 'bg-[#0a0f1c]/5 text-[#0a0f1c] border border-[#0a0f1c]/10'
            }`}
          >
            <Mail size={14} />
            Get In Touch
          </span>
          <h2
            className={`text-4xl md:text-5xl font-display font-bold mb-4 ${
              isDark ? 'text-white' : 'text-[#0a0f1c]'
            }`}
          >
            Let&apos;s <span className="text-[#00d4ff]">Connect</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Location */}
            <div
              className={`p-6 rounded-2xl ${
                isDark
                  ? 'bg-[#1a1f2e] border border-white/10'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center">
                  <MapPin size={24} className="text-[#00d4ff]" />
                </div>
                <div>
                  <h3
                    className={`font-display font-bold text-lg ${
                      isDark ? 'text-white' : 'text-[#0a0f1c]'
                    }`}
                  >
                    Location
                  </h3>
                  <p
                    className={`font-mono text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Cards */}
            {contactCards.map((card, index) => {
              const Icon = contactIcons[card.label] || Mail;
              return (
                <motion.a
                  key={card.label}
                  href={card.href}
                  target={card.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={card.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`block p-6 rounded-2xl transition-all duration-300 ${
                    isDark
                      ? 'bg-[#1a1f2e] border border-white/10 hover:border-[#00d4ff]/30'
                      : 'bg-white border border-gray-200 hover:border-[#00d4ff]/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/20 flex items-center justify-center">
                        <Icon size={24} className="text-[#00d4ff]" />
                      </div>
                      <div>
                        <h3
                          className={`font-display font-bold text-lg ${
                            isDark ? 'text-white' : 'text-[#0a0f1c]'
                          }`}
                        >
                          {card.label}
                        </h3>
                        <p
                          className={`font-mono text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {card.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className={`transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        isDark ? 'text-gray-500' : 'text-gray-400'
                      }`}
                    />
                  </div>
                </motion.a>
              );
            })}

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl ${
                isDark
                  ? 'bg-[#1a1f2e] border border-white/10'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <h3
                className={`font-display font-bold text-2xl mb-6 ${
                  isDark ? 'text-white' : 'text-[#0a0f1c]'
                }`}
              >
                Send a Message
              </h3>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      className={`block font-mono text-xs uppercase tracking-wider mb-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl font-sans transition-all ${
                        isDark
                          ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/50'
                          : 'bg-gray-50 border border-gray-200 text-[#0a0f1c] placeholder-gray-400 focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      className={`block font-mono text-xs uppercase tracking-wider mb-2 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl font-sans transition-all ${
                        isDark
                          ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/50'
                          : 'bg-gray-50 border border-gray-200 text-[#0a0f1c] placeholder-gray-400 focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block font-mono text-xs uppercase tracking-wider mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl font-sans transition-all ${
                      isDark
                        ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/50'
                        : 'bg-gray-50 border border-gray-200 text-[#0a0f1c] placeholder-gray-400 focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]'
                    }`}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    className={`block font-mono text-xs uppercase tracking-wider mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl font-sans transition-all resize-none ${
                      isDark
                        ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/50'
                        : 'bg-gray-50 border border-gray-200 text-[#0a0f1c] placeholder-gray-400 focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff]'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-mono text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all ${
                    isSubmitted
                      ? 'bg-[#22c55e] text-white'
                      : 'bg-[#00d4ff] text-[#0a0f1c] hover:bg-[#00b8e0]'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#0a0f1c] border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <Check size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
