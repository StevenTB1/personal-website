import {
  TypographyLabel,
  TypographyP,
  TypographySectionTitle,
  TypographySubtitle,
} from '@/components/base/Typography';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBriefcase, FaCalendarAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/stevenchow0812/',
      icon: FaLinkedin,
      color: 'text-blue-500',
      description: 'Connect with me professionally',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/StevenTB1',
      icon: FaGithub,
      color: 'text-gray-600',
      description: 'Check out my code and projects',
    },
    {
      name: 'Email',
      href: 'mailto:s9chow@uwaterloo.ca',
      icon: FaEnvelope,
      color: 'text-red-500',
      description: 'Fastest way to reach me for opportunities',
    },
  ];

  const collaborationTypes = [
    {
      title: 'Web Development',
      description:
        'Need a modern, responsive web application? I can help build user-friendly interfaces with React, Next.js, and Tailwind CSS.',
      icon: FaGithub,
      color: 'text-blue-500',
    },
    {
      title: 'Engineering Projects',
      description:
        "Looking for a mechatronics engineer to help with automation, robotics, or product design? Let's collaborate on innovative solutions.",
      icon: FaBriefcase,
      color: 'text-purple-500',
    },
    {
      title: 'Availability',
      description:
        'Currently available for part-time freelance work and open to discussing full-time opportunities starting June 2024.',
      icon: FaCalendarAlt,
      color: 'text-green-500',
    },
  ];

  return (
    <section className="py-16 min-h-screen flex flex-col justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TypographySectionTitle>Get In Touch</TypographySectionTitle>
          <TypographySubtitle className="max-w-2xl mx-auto text-slate-600">
            Let's connect and explore how we can work together
          </TypographySubtitle>
          <TypographyP className="max-w-2xl mx-auto text-slate-500">
            I'm always interested in challenging projects and new opportunities. Whether you have a
            question, want to collaborate, or just want to say hello, feel free to reach out!
          </TypographyP>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <TypographyLabel className="text-xl font-semibold text-slate-800">
              Connect With Me
            </TypographyLabel>
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.03 }} className="group">
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">
                    <Card className="bg-white shadow-sm hover:shadow-md transition-all border-slate-200">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className={`p-3 rounded-full ${link.color.replace('text', 'bg')}/10`}>
                          <link.icon className={`h-6 w-6 ${link.color}`} />
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">
                            {link.name}
                          </h4>
                          <p className="text-sm text-slate-500">{link.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <TypographyLabel className="text-xl font-semibold text-slate-800">
              Collaboration Opportunities
            </TypographyLabel>
            <div className="space-y-4">
              {collaborationTypes.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex gap-4 items-start">
                    <div className={`p-2 rounded-full ${item.color.replace('text', 'bg')}/10 mt-1`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800">{item.title}</h4>
                      <p className="text-slate-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <TypographyP className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Steven Chow. All rights reserved.
          </TypographyP>
        </div>
      </div>
    </section>
  );
};

export default Contact;
