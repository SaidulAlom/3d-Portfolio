'use client';

import { motion } from 'framer-motion';
import { Briefcase, Book, Star, Download, Mail, Phone, MapPin, Globe, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';

export default function Resume() {
  const resumeData = {
    contact: {
      phone: '+91 9365734453',
      email: 'saidulalom374@gmail.com',
      location: 'Dhemaji, Assam, India',
    },
    profile: 'Aspiring Full Stack Developer currently mastering modern web technologies including React, Node.js, and Python. Building my skills in creating responsive applications with clean code and good architecture. While early in my journey, I bring strong problem-solving abilities, quick learning skills, and dedication to writing efficient, maintainable code. Excited to contribute to real-world projects and grow with a supportive development team.',
    technicalSkills: [
      { category: 'Frontend', skills: 'React, Next.js, JavaScript, HTML/CSS' },
      { category: 'Backend', skills: 'Node.js, Python, REST APIs' },
      { category: 'Databases', skills: 'MySQL, MongoDB' },
    ],
    languages: [
      { name: 'English', level: 'Intermediate' },
      { name: 'Hindi', level: 'Conversational' },
      { name: 'Assamese', level: 'Native' },
      { name: 'Bengali', level: 'Native' },
    ],
    leadershipSoftSkills: {
      leadershipRoles: [
        'College Cricket Team Captain (Organized strategies & motivated players)',
        'Eco Club Volunteer (Led campus sustainability initiatives)',
      ],
      softSkills: [
        'Team Leadership - Guided both sports and eco club teams to success',
        'Problem-Solving - Debugging code and strategizing in sports',
        'Collaboration - Worked with cross-functional teams (developers, eco club members)',
        'Public Communication - Addressed groups as captain/volunteer',
        'Initiative - Proposed and executed eco-friendly campus projects',
      ],
    },
    education: [
      {
        degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
        institution: 'Dhemaji Engineering College, Assam',
        year: '2021 - 2025',
      },
      {
        degree: 'Higher Secondary (12th), Science',
        institution: 'Lakhiganj Higher Secondary School, Assam',
        year: '2020, Percentage: 60.40% (AHSEC Board)',
      },
      {
        degree: 'HSLC (10th)',
        institution: 'Bilasipara Public Higher Secondary School, Assam',
        year: '2018, Percentage: 75% (SEBA Board)',
      },
    ],
    internships: [
      {
        role: 'Full Stack Developer Intern',
        company: 'Indian Oil Corporation Limited (IOCL), Digboi',
        year: 'Jun 2024',
        responsibilities: [
          'Developed secure internal tools using React + Node.js, improving operational efficiency by 30%',
          'Implemented JWT authentication for 200+ employees, enhancing data security',
          'Optimized SQL queries, reducing database response time by 40%',
          'Collaborated with cross-functional teams using Agile methodologies',
        ],
      },
      {
        role: 'Web Development Trainee',
        company: 'NIELIT, Guwahati',
        year: 'Jul - Aug 2023',
        responsibilities: [
          'Built a full-stack e-commerce platform (React + Express.js + MongoDB) with payment integration',
          'Applied industry best practices in CI/CD, testing, and responsive design',
          'Delivered project 2 weeks ahead of deadline through efficient task prioritization',
        ],
      },
    ],
    projects: [
      {
        name: 'Geo Construct (Final Year Project)',
        technologies: 'React, Node.js, MongoDB',
        year: '2024-2025',
        description: [
          'Developed a GIS-based construction management system for real-time project tracking',
          'Integrated geospatial analytics to optimize resource allocation',
          'Implemented JWT authentication and role-based access control',
        ],
      },
      {
        name: 'Employee Management System (IOCL Internship)',
        technologies: 'Python, Flask, MySQL',
        year: 'Jun 2024',
        description: [
          'Automated HR workflows including leave approval and payroll processing',
          'Designed 10+ relational tables with complex queries',
        ],
      },
      {
        name: 'E-Commerce Platform (NIELIT Training)',
        technologies: 'React, Node.js, Stripe API',
        year: 'Jul-Aug 2023',
        description: [
          'Built a full-stack online store with product search, cart, and checkout',
          'Secured payments via Stripe API integration',
        ],
      },
    ],
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Resume Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-glow">
            Saidul Alom
          </h2>
          <p className="text-2xl text-muted-foreground mb-4">Full Stack Developer</p>
          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone size={20} className="text-cyan-400" />
              {resumeData.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={20} className="text-cyan-400" />
              {resumeData.contact.email}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={20} className="text-cyan-400" />
              {resumeData.contact.location}
            </span>
          </div>
        </AnimatedSection>

        {/* Profile Section */}
        <AnimatedSection delay={0.2}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Star className="text-blue-400" size={32} />
              Profile
            </h3>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-card p-6 hover:glow-cyan rounded-xl"
            >
              <p className="text-muted-foreground">{resumeData.profile}</p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Technical Skills Section */}
        <AnimatedSection delay={0.4}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code className="text-purple-400" size={32} />
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {resumeData.technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card p-6 text-center hover:glow-cyan rounded-xl"
                >
                  <h4 className="text-xl font-semibold text-cyan-400">{skill.category}</h4>
                  <p className="text-muted-foreground">{skill.skills}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Languages Section */}
        <AnimatedSection delay={0.6}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Globe className="text-blue-4
00" size={32} />
              Languages
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {resumeData.languages.map((lang, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card p-6 text-center hover:glow-cyan rounded-xl"
                >
                  <h4 className="text-xl font-semibold text-blue-400">{lang.name}</h4>
                  <p className="text-muted-foreground">{lang.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Leadership & Soft Skills Section */}
        <AnimatedSection delay={0.8}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Star className="text-pink-400" size={32} />
              Leadership & Soft Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card p-6 hover:glow-cyan rounded-xl"
              >
                <h4 className="text-xl font-semibold text-pink-400 mb-4">Formal Leadership Roles</h4>
                <ul className="text-muted-foreground list-disc list-inside">
                  {resumeData.leadershipSoftSkills.leadershipRoles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass-card p-6 hover:glow-cyan rounded-xl"
              >
                <h4 className="text-xl font-semibold text-pink-400 mb-4">Soft Skills</h4>
                <ul className="text-muted-foreground list-disc list-inside">
                  {resumeData.leadershipSoftSkills.softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={1.0}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Book className="text-cyan-400" size={32} />
              Education
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card p-6 hover:glow-cyan rounded-xl"
                >
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  <p className="text-md text-muted-foreground">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Internships Section */}
        <AnimatedSection delay={1.2}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Briefcase className="text-purple-400" size={32} />
              Internships
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {resumeData.internships.map((intern, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card p-6 hover:glow-cyan rounded-xl"
                >
                  <h4 className="text-xl font-semibold">{intern.role}</h4>
                  <p className="text-lg text-muted-foreground">{intern.company}</p>
                  <p className="text-md text-muted-foreground mb-4">{intern.year}</p>
                  <ul className="text-muted-foreground list-disc list-inside">
                    {intern.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection delay={1.4}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Code className="text-blue-400" size={32} />
              Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {resumeData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0, 255, 255, 0.2)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card p-6 hover:glow-cyan rounded-xl"
                >
                  <h4 className="text-xl font-semibold">{project.name}</h4>
                  <p className="text-lg text-muted-foreground">{project.technologies}</p>
                  <p className="text-md text-muted-foreground mb-4">{project.year}</p>
                  <ul className="text-muted-foreground list-disc list-inside">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <a href="/Resume.pdf" download="Saidul_Alom_Resume.pdf">
            <Button size="lg" className="glass-card hover:glow text-lg px-8 py-6">
              <Download className="mr-2" />
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}