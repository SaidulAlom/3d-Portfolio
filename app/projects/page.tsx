'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection from '@/components/AnimatedSection';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  category: string;
  longDescription: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Geo Construct',
    description: 'A GIS-based construction management system for real-time project tracking.',
    longDescription: 'Developed a GIS-based construction management system to enable real-time project tracking and resource optimization. Integrated geospatial analytics for efficient allocation, implemented JWT authentication, and ensured role-based access control for secure operations.',
    image: 'https://images.pexels.com/photos/461446/pexels-photo-461446.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'GIS'],
    featured: true,
    category: 'GIS',
  },
  {
    id: '2',
    title: 'Employee Management System',
    description: 'An HR automation system for leave approval and payroll processing.',
    longDescription: 'Built an HR automation system during an IOCL internship to streamline leave approval and payroll processes. Designed over 10 relational database tables with optimized SQL queries, achieving efficient data management and workflow automation.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Flask', 'MySQL'],
    category: 'HR Automation',
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'A full-stack online store with product search, cart, and checkout features.',
    longDescription: 'Developed a full-stack e-commerce platform during NIELIT training, featuring product search, cart management, and secure checkout with Stripe API integration. Delivered the project two weeks ahead of schedule, incorporating responsive design and CI/CD best practices.',
    image: 'https://images.pexels.com/photos/5632380/pexels-photo-5632380.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Stripe API', 'MongoDB'],
    featured: true,
    category: 'Full Stack',
  },
];

const categories = ['All', 'Full Stack', 'GIS', 'HR Automation'];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text text-glow">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my full-stack development projects, blending modern web technologies and innovative solutions
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.2}>
          <div className="glass-card p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-card"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                <Filter className="text-muted-foreground mr-2" size={20} />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={`glass-card ${
                      activeCategory === category ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'hover:glow-cyan'
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-bold mb-4">No projects found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-card max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl">
          {selectedProject && (
            <div>
              <DialogHeader>
                <DialogTitle className="text-2xl gradient-text">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-w-lg mx-auto h-auto object-cover rounded-lg mb-6"
                />
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400 border border-gray-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {selectedProject.liveUrl && (
                      <Button
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        className="glass-card hover:glow"
                      >
                        View Project
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                        className="glass-card hover:glow-cyan"
                      >
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}