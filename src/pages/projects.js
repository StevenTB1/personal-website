import Layout from '@/components/layout/Layout';
import Contact from '@/components/common/Contact';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <section className="py-10">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground">
          A showcase of my recent work and side projects
        </p>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild size="sm" variant="default">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Source
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Project Display Component
const ProjectDisplay = () => {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'A responsive personal portfolio website built with Next.js and Tailwind CSS.',
      image: '/placeholder.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'React'],
      demoLink: 'https://stevenchow.com',
      sourceLink: 'https://github.com/stevenchow/portfolio',
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'An admin dashboard for managing e-commerce products, orders, and customers.',
      image: '/placeholder.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoLink: 'https://dashboard-demo.stevenchow.com',
      sourceLink: 'https://github.com/stevenchow/dashboard',
    },
    {
      id: 3,
      title: 'Recipe Finder App',
      description:
        'A mobile-friendly web app that lets users search for recipes based on ingredients.',
      image: '/placeholder.jpg',
      tags: ['React', 'API Integration', 'CSS Grid'],
      demoLink: 'https://recipes.stevenchow.com',
      sourceLink: 'https://github.com/stevenchow/recipe-app',
    },
    {
      id: 4,
      title: 'Task Management Tool',
      description:
        'A productivity app with drag-and-drop functionality for managing tasks and projects.',
      image: '/placeholder.jpg',
      tags: ['TypeScript', 'React', 'Firebase', 'React DnD'],
      demoLink: 'https://tasks.stevenchow.com',
      sourceLink: 'https://github.com/stevenchow/task-manager',
    },
  ];

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default function Projects() {
  return (
    <Layout title="Steven Chow | Projects" description="Steven Chow's Projects">
      <Header />
      <ProjectDisplay />
      <Contact />
    </Layout>
  );
}
