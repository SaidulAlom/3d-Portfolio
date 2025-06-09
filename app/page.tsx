'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Model3DViewer from '@/components/3DModelViewer';
import ParticleField from '@/components/ParticleField';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <Hero />
      <Features />
    </div>
  );
}