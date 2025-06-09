'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/SaidulAlom', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/saidulalom/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/S_Alom_83', icon: Twitter, label: 'X' },
  { href: 'https://www.instagram.com/s.alom.17/', icon: Instagram, label: 'Instagram' },
  { href: 'mailto:saidulalom525@gmail.com', icon: Mail, label: 'Gmail' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 glass-card border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-3 rounded-full glass-card hover:glow-cyan transition-all duration-300"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center space-x-2 text-muted-foreground"
          >
            <span>© 2025 Saidul Alom. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.div>
            <span>and lots of passion</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}