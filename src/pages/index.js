import { BackgroundAnimation } from '@/components/animations/Landing';
import {
  TypographyHero,
  TypographyLabel,
  TypographyP,
  TypographySectionTitle,
  TypographySubtitle,
  TypographyText,
} from '@/components/base/Typography';
import { Contact } from '@/components/layout/Contact';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowRight,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaUser,
} from 'react-icons/fa';
import {
  SiArduino,
  SiAutodesk,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';

const HeroSlide = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-20 px-6 relative w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BackgroundAnimation />
      </div>

      <motion.div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto relative z-10 pointer-events-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TypographyHero className="text-slate-800 text-5xl md:text-6xl lg:text-7xl">
            Steven Chow
          </TypographyHero>
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl text-pink-600 font-medium"
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
            <TypographyP className="text-lg max-w-xl text-slate-700 font-light">
              Passionate mechatronics engineering student at the{' '}
              <span className="font-medium text-blue-600">University of Waterloo</span>, pursuing my
              undergrad with a focus on innovative solutions.
            </TypographyP>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <TypographyP className="text-lg max-w-xl text-slate-600 italic">
              Experienced in{' '}
              <span className="text-blue-500 font-semibold">full stack development</span> with a
              variety of skillsets and libraries. Proficient in
              <span className="text-green-600 font-semibold"> AutoCAD</span> and{' '}
              <span className="text-orange-500 font-semibold">Solidworks</span> for mechanical
              design, with hands-on manufacturing experience.
            </TypographyP>
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 text-blue-600 border-blue-300 hover:bg-blue-100 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <FaLinkedin className="h-6 w-6" />
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 text-slate-700 border-slate-300 hover:bg-slate-100 hover:border-slate-500 transition-all duration-300 transform hover:scale-105"
              >
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
          <div className="relative h-[400px] w-[400px] mx-auto overflow-hidden rounded-full border-4 border-pink-400 shadow-xl shadow-pink-300/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={process.env.NEXT_PUBLIC_PFP_URL}
                alt="Steven Chow"
                className="object-cover object-center"
                priority
                fill
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="w-full border-b border-gray-200 absolute bottom-0 left-0"></div>
    </div>
  );
};

const AboutSlide = () => {
  const technologies = {
    fullstack: [
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-slate-800' },
      { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-600' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-600' },
      { name: 'Three.js', icon: TbBrandThreejs, color: 'text-slate-700' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-700' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
      { name: 'Figma', icon: FaFigma, color: 'text-purple-600' },
      { name: 'Arduino', icon: SiArduino, color: 'text-teal-600' },
    ],
    mechanical: [
      { name: 'AutoCAD', icon: SiAutodesk, color: 'text-red-600' },
      { name: 'SolidWorks', icon: SiAutodesk, color: 'text-blue-700' },
      { name: 'Fusion 360', icon: SiAutodesk, color: 'text-orange-600' },
      { name: 'CNC Machining', icon: SiAutodesk, color: 'text-green-600' },
    ],
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <motion.div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TypographySectionTitle className="text-slate-800">About Me</TypographySectionTitle>
          <TypographySubtitle className="max-w-2xl mx-auto text-slate-600">
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
            <Card className="border-slate-200 h-full hover:shadow-lg hover:shadow-pink-200 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <FaUser className="text-pink-500" /> Background
                </CardTitle>
                <CardDescription className="text-slate-500">My journey so far</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <TypographyText className="text-slate-700 font-medium">
                  I'm a mechatronics engineer with a passion for building innovative solutions. I
                  have experience with both mechanical design and software development, combining
                  these disciplines to create meaningful projects.
                </TypographyText>
                <TypographyText className="text-slate-600">
                  My approach combines{' '}
                  <span className="text-blue-600 font-semibold">technical expertise</span> with{' '}
                  <span className="text-green-600 font-semibold">creative problem-solving</span>,
                  allowing me to develop solutions that are both functional and user-friendly.
                </TypographyText>

                <div className="pl-4 border-l-2 border-blue-400 space-y-2 mt-4">
                  <div>
                    <TypographyLabel className="font-medium text-blue-700">
                      Bachelor of Applied Science, Mechatronics Engineering
                    </TypographyLabel>
                    <TypographyP className="text-sm text-slate-600">
                      University of Waterloo • 2023 - present
                    </TypographyP>
                  </div>
                </div>

                <TypographyText className="text-slate-600 italic">
                  When not coding or designing, I enjoy photography and building DIY electronics
                  projects that blend art and technology.
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
            <Card className="bg-white border-slate-200 h-full hover:shadow-lg hover:shadow-blue-200 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <FaReact className="text-blue-500" /> Tech Stack
                </CardTitle>
                <CardDescription className="text-slate-500">
                  Technologies and tools I work with
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <TypographyLabel className="font-semibold text-xl text-slate-700 flex items-center gap-2">
                    Full-Stack
                  </TypographyLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies.fullstack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors"
                      >
                        <tech.icon className={`h-5 w-5 ${tech.color}`} />
                        <span className="text-sm text-slate-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <TypographyLabel className="font-semibold text-xl text-slate-700 flex items-center gap-2">
                    Mechanical
                  </TypographyLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies.mechanical.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-red-50 transition-colors"
                      >
                        <tech.icon className={`h-5 w-5 ${tech.color}`} />
                        <span className="text-sm text-slate-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <TypographyLabel className="font-semibold text-xl text-slate-700 flex items-center gap-2">
                    Tools & Others
                  </TypographyLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies.tools.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-green-50 transition-colors"
                      >
                        <tech.icon className={`h-5 w-5 ${tech.color}`} />
                        <span className="text-sm text-slate-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/experience">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Learn More About Me <FaArrowRight />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description:
        'The webiste you are currently on! A responsive personal portfolio website built with Next.js.',
      image: process.env.NEXT_PUBLIC_WEBSITE_URL,
      tags: ['Next.js', 'Tailwind CSS', 'React'],
      demoLink: 'https://steven-chow.com',
      sourceLink: 'https://github.com/StevenTB1/personal-website/',
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'An admin dashboard for managing e-commerce products, orders, and customers.',
      image: process.env.NEXT_PUBLIC_SAVESQUAD_URL,
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://dashboard-demo.stevenchow.com',
      sourceLink: 'https://github.com/stevenchow/dashboard',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 bg-gradient-to-b from-white to-blue-50">
      <motion.div className="max-w-6xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TypographySectionTitle className="text-slate-800">Projects</TypographySectionTitle>
          <TypographySubtitle className="max-w-2xl mx-auto text-slate-600">
            Selected works showcasing my skills and interests
          </TypographySubtitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-white border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="w-full h-72 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <CardHeader>
                    <CardTitle className="text-slate-800">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 mt-auto">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="text-slate-700 border-slate-300"
                    >
                      <Link href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="mr-2 h-4 w-4" />
                        Source
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/projects">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md">
              View All Projects <FaArrowRight />
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="min-h-screen">
      <motion.div>
        <Contact />
      </motion.div>
    </section>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 bottom-4 h-1 bg-gradient-to-r from-blue-500 to-pink-500 z-50"
      style={{ scaleX, transformOrigin: '0%' }}
    />
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
      <div className="relative w-full">
        <ScrollProgress />
        <div className="w-full">
          <HeroSlide />
          <AboutSlide />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Page;
