'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'saidulalom374@gmail.com',
    href: 'mailto:saidulalom374@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9365734453',
    href: 'tel:+919365734453',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Dhemaji, Assam, India',
    href: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (in a real app, you'd handle this properly)
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text text-glow">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaborating on innovative web projects? Let’s connect and build something impactful.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="text-purple-400 mr-3" size={24} />
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass-card"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass-card"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass-card"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="glass-card resize-none"
                      placeholder="Tell me about your project, goals, and how I can help..."
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full glass-card hover:glow text-lg py-6"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                      ) : (
                        <Send className="mr-2" size={20} />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            <AnimatedSection delay={0.3}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-6 glass-card hover:glow-cyan transition-all duration-300 block"
                  >
                    <info.icon className="text-cyan-400 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative h-80 w-80 mx-auto lg:h-96 lg:w-96 glass-card rounded-full overflow-hidden glow-cyan"
              >
                <div className="absolute inset-0 glow rounded-full">
                  <Image
                    src="/images/saidul-alom.jpg"
                    alt="Saidul Alom"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-center"
                  >
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      Let’s Collaborate
                    </h3>
                    <p className="text-muted-foreground">
                      Ready to build innovative solutions
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <Card className="glass-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Proficient in full-stack development with React, Node.js, and Python
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Experienced in database management with MySQL and MongoDB
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Proven leadership through Cricket Team Captaincy and Eco Club coordination
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Quick learner with a passion for problem-solving and collaboration
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}