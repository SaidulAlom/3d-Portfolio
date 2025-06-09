'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code, Server, Database, Users } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import MyImage from './IMG-20250406-WA0104.jpg';

export default function About() {
  const timeline = [
    {
      year: '2021 - 2025',
      title: 'B.Tech in Computer Science & Engineering',
      company: 'Dhemaji Engineering College, Assam',
      description: 'Pursuing a degree with a focus on web development, full-stack technologies, and GIS-based systems.',
      location: 'Dhemaji, Assam',
    },
    {
      year: 'Jun 2024',
      title: 'Full Stack Developer Intern',
      company: 'Indian Oil Corporation Limited (IOCL), Digboi',
      description: 'Developed secure internal tools using React and Node.js, improving operational efficiency by 30%.',
      location: 'Digboi, Assam',
    },
    {
      year: 'Jul - Aug 2023',
      title: 'Web Development Trainee',
      company: 'NIELIT, Guwahati',
      description: 'Built a full-stack e-commerce platform with React, Express.js, and MongoDB, delivered 2 weeks early.',
      location: 'Guwahati, Assam',
    },
    {
      year: '2018',
      title: 'Higher Secondary (12th), Science',
      company: 'Lakhiganj Higher Secondary School, Assam',
      description: 'Completed with 60.40% (AHSEC Board), building a foundation in science and technology.',
      location: 'Assam',
    },
    {
      year: '2016',
      title: 'HSLC (10th)',
      company: 'Bilasipara Public Higher Secondary School, Assam',
      description: 'Graduated with 75% (SEBA Board), excelling in mathematics and science.',
      location: 'Bilasipara, Assam',
    },
  ];

  const skills = [
    { name: 'React & Next.js', level: 90, icon: Code },
    { name: 'Node.js', level: 85, icon: Server },
    { name: 'Python', level: 80, icon: Code },
    { name: 'MySQL & MongoDB', level: 85, icon: Database },
    { name: 'JavaScript & HTML/CSS', level: 90, icon: Code },
    { name: 'Leadership & Collaboration', level: 88, icon: Users },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Efficient Project Delivery',
      description: 'Delivered NIELIT e-commerce platform 2 weeks ahead of schedule.',
      year: '2023',
    },
    {
      icon: Award,
      title: 'Operational Efficiency',
      description: 'Improved IOCL internal tools efficiency by 30% through React and Node.js.',
      year: '2024',
    },
    {
      icon: Award,
      title: 'Team Leadership',
      description: 'Led college cricket team and Eco Club to successful initiatives.',
      year: '2021 - 2024',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text text-glow">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aspiring Full Stack Developer passionate about building responsive applications and solving real-world problems
          </p>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Full Stack Developer
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I’m an aspiring Full Stack Developer currently pursuing a B.Tech in Computer Science at Dhemaji Engineering College. With hands-on experience in React, Node.js, Python, MySQL, and MongoDB, I specialize in crafting responsive web applications with clean code and efficient architecture.
                </p>
                <p>
                  My journey includes impactful internships at IOCL and NIELIT, where I built secure tools and e-commerce platforms, enhancing efficiency and user experience. I’m also a proven leader, having captained my college cricket team and coordinated sustainability initiatives as Eco Club Coordinator.
                </p>
                <p>
                  Driven by a passion for problem-solving and quick learning, I’m excited to contribute to innovative projects and grow within a dynamic development team.
                </p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-80 w-80 mx-auto lg:h-96 lg:w-96"
            >
              <div className="absolute inset-0 glow rounded-full overflow-hidden">
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
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.3}>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Skills & Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 hover:glow-cyan transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="text-purple-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.4}>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              My Journey
            </h2>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-400"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative flex items-start"
                  >
                    <div className="absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-background glow"></div>
                    
                    <div className="ml-16 glass-card p-6 hover:glow-cyan transition-all duration-300">
                      <div className="flex items-center mb-2">
                        <Calendar className="text-cyan-400 mr-2" size={16} />
                        <span className="text-cyan-400 font-semibold">{item.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <h4 className="text-purple-400 font-semibold mb-3">{item.company}</h4>
                      
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin size={14} className="mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              Achievements & Recognition
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card p-8 text-center hover:glow transition-all duration-300"
                >
                  <achievement.icon className="mx-auto mb-4 text-yellow-400" size={48} />
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground mb-3">{achievement.description}</p>
                  <span className="text-sm text-yellow-400 font-semibold">{achievement.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}