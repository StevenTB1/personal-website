import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Contact } from '@/components/layout/Contact';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import pfp from '../../public/images/pfp.png';
import {
  TypographyHero,
  TypographySubtitle,
  TypographyText,
  TypographySectionTitle,
  TypographyP,
} from '@/components/base/Typography';
import { NextSeo } from 'next-seo';
import { FaReact, FaGitAlt, FaDocker, FaFigma, FaUser, FaGraduationCap } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiAutodesk, SiArduino } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { TbBrandThreejs } from 'react-icons/tb';
import { motion } from 'framer-motion';

const HeroSlide = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypographyHero>Steven Chow</TypographyHero>
          <motion.h2
            className="text-4xl text-pink-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Mechatronics Engineer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypographyP className="text-lg max-w-xl text-slate-300">
              Passionate mechatronics engineering student at the University of Waterloo, pursuing my
              undergrad with a focus on innovative solutions.
            </TypographyP>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <TypographyP className="text-lg max-w-xl text-slate-400">
              Experienced in front-end development with React and Tailwind CSS. Proficient in
              AutoCAD and Solidworks for mechanical design, with hands-on manufacturing experience.
            </TypographyP>
          </motion.div>
          <motion.div
            className="flex gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <FaLinkedin className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <FaGithub className="h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <div className="relative h-[400px] w-[400px] mx-auto overflow-hidden rounded-full border-4 border-pink-500/30 shadow-xl shadow-pink-500/20">
            <Image src={pfp} alt="Steven Chow" fill className="object-cover" priority />
          </div>
        </motion.div>
      </div>
      <div className="w-full border-b border-gray-700 absolute bottom-0 left-0"></div>
    </section>
  );
};

const AboutSlide = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TypographySectionTitle>About Me</TypographySectionTitle>
          <TypographySubtitle className="max-w-2xl mx-auto">
            A blend of engineering precision and creative problem-solving
          </TypographySubtitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 h-full hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaUser className="text-pink-500" /> Background
                </CardTitle>
                <CardDescription>My journey so far</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <TypographyText>
                  I'm a mechatronics engineer with a passion for building innovative solutions. I
                  have experience with both mechanical design and software development, combining
                  these disciplines to create meaningful projects.
                </TypographyText>
                <TypographyText>
                  My approach combines technical expertise with creative problem-solving, allowing
                  me to develop solutions that are both functional and user-friendly. I'm
                  particularly interested in robotics, automation, and interactive systems.
                </TypographyText>
                <TypographyText>
                  When not coding or designing, I enjoy hiking, photography, and building DIY
                  electronics projects that blend art and technology.
                </TypographyText>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 h-full hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaGraduationCap className="text-blue-500" /> Education
                </CardTitle>
                <CardDescription>My academic qualifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <TypographyText>
                  I'm currently pursuing my degree in Mechatronics Engineering at the University of
                  Waterloo. My education combines mechanical engineering, electronics, computer
                  science, and control systems, giving me a well-rounded foundation.
                </TypographyText>
                <div className="pl-4 border-l-2 border-blue-500/30 space-y-2">
                  <div>
                    <h4 className="font-medium">
                      Bachelor of Applied Science, Mechatronics Engineering
                    </h4>
                    <p className="text-sm text-slate-400">University of Waterloo • 2020 - 2024</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Robotics Certification</h4>
                    <p className="text-sm text-slate-400">RoboAcademy • 2022</p>
                  </div>
                </div>
                <TypographyText>
                  Relevant coursework: Control Systems, Embedded Programming, Circuit Design,
                  Mechanical Design, Machine Learning Fundamentals, and Robotics.
                </TypographyText>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechSection = () => {
  const technologies = {
    frontend: [
      { name: 'React', icon: FaReact, color: 'text-blue-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-200' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
      { name: 'Three.js', icon: TbBrandThreejs, color: 'text-white' },
    ],
    mechanical: [
      { name: 'AutoCAD', icon: SiAutodesk, color: 'text-red-500' },
      { name: 'SolidWorks', icon: SiAutodesk, color: 'text-blue-600' },
      { name: 'Fusion 360', icon: SiAutodesk, color: 'text-orange-500' },
      { name: 'CNC Machining', icon: SiAutodesk, color: 'text-green-500' },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
      { name: 'VS Code', icon: DiVisualstudio, color: 'text-blue-500' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
      { name: 'Arduino', icon: SiArduino, color: 'text-teal-500' },
    ],
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TypographySectionTitle>Tech Stack</TypographySectionTitle>
          <TypographySubtitle className="max-w-2xl mx-auto">
            Technologies and tools I work with
          </TypographySubtitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaReact className="text-blue-400" /> Frontend
                </CardTitle>
                <CardDescription>Web technologies I use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technologies.frontend.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <tech.icon className={`h-6 w-6 ${tech.color}`} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SiAutodesk className="text-red-500" /> Mechanical
                </CardTitle>
                <CardDescription>Design and manufacturing tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technologies.mechanical.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <tech.icon className={`h-6 w-6 ${tech.color}`} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900 border-slate-800 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FaGitAlt className="text-orange-500" /> Tools & Others
                </CardTitle>
                <CardDescription>Development tools I use daily</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technologies.tools.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <tech.icon className={`h-6 w-6 ${tech.color}`} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const seoBase = {
  title: 'Steven Chow | Mechatronics Engineer',
  description:
    "Steven Chow's personal website showcasing mechatronics engineering and software development skills.",
};

export const Page = () => {
  return (
    <>
      <NextSeo {...seoBase} />
      <main className="bg-slate-950">
        <HeroSlide />
        <AboutSlide />
        <TechSection />
        <Contact />
      </main>
    </>
  );
};

export default Page;
