'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleField from '@/components/ParticleField';
import Link from 'next/link';
import Image from 'next/image';
import MyImage from './IMG-20250406-WA0104.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text text-glow">
                Saidul Alom
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-xl md:text-2xl text-muted-foreground mb-6">
                <Code className="text-purple-400" />
                <span>Full Stack Developer</span>
                <Server className="text-cyan-400" />
                <span>&</span>
                <Database className="text-blue-400" />
                <span>Problem Solver</span>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Aspiring Full Stack Developer crafting responsive web applications with React, Node.js, and Python. Passionate about clean code, efficient architecture, and solving real-world problems through technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/projects">
                <Button size="lg" className="glass-card hover:glow text-lg px-8 py-6">
                  <Code className="mr-2" />
                  Explore My Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="glass-card hover:glow-cyan text-lg px-8 py-6"
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-80 w-80 lg:h-96 lg:w-96 mx-auto"
          >
            <div className="absolute inset-0 glow rounded-full overflow-hidden border-4 border-purple-500/20">
              <Image
                src={MyImage}
                alt="Saidul Alom"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
}