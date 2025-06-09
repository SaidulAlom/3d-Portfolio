'use client';

import { motion } from 'framer-motion';
import { Code, Server, Database, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Crafting responsive and performant web applications using React, Next.js, JavaScript, and modern HTML/CSS techniques.',
      color: 'text-purple-400',
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Python, and REST APIs for seamless functionality.',
      color: 'text-cyan-400',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Designing and optimizing databases with MySQL and MongoDB for efficient data storage and retrieval.',
      color: 'text-blue-400',
    },
    {
      icon: Users,
      title: 'Leadership & Collaboration',
      description: 'Leading teams and collaborating effectively, drawing from experience as Cricket Team Captain and Eco Club Coordinator.',
      color: 'text-pink-400',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-glow">
            My Core Strengths
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging technical expertise and leadership skills to deliver innovative full-stack solutions
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card p-8 text-center hover:glow-cyan transition-all duration-300 h-full rounded-xl"
              >
                <feature.icon className={`mx-auto mb-6 ${feature.color}`} size={48} />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link href="/projects">
            <Button size="lg" className="glass-card hover:glow text-lg px-8 py-6">
              <Code className="mr-2" />
              View My Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}