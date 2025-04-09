import { Geist, Geist_Mono } from 'next/font/google';
import Layout from '@/components/layout/Layout';
import Contact from '@/components/common/Contact';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Tech Card Component
const TechCard = ({ title, description, technologies }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-20 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Hi, I'm <span className="text-primary">Steven Chow</span> 👋
      </h1>

      <p className="text-xl md:text-2xl max-w-2xl text-muted-foreground">
        I'm a software engineer passionate about building beautiful and functional web applications.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Button asChild size="lg">
          <Link href="/projects">
            View My Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <Link href="/experience">My Experience</Link>
        </Button>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section className="py-16" id="about">
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground">A brief introduction to who I am</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>My journey so far</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I'm a software engineer with a passion for building modern web applications. I have
                experience with both frontend and backend technologies, and I enjoy creating clean,
                efficient, and user-friendly solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>My academic qualifications</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I hold a Bachelor's degree in Computer Science with a focus on software development.
                Throughout my education, I've developed strong problem-solving skills and a solid
                foundation in programming principles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Tools Component
const Tools = () => {
  const technologies = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI'],
    backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
    tools: ['Git', 'VS Code', 'Docker', 'Figma', 'Vercel'],
  };

  return (
    <section className="py-16" id="tools">
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
          <p className="text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TechCard
            title="Frontend"
            description="Web technologies I use"
            technologies={technologies.frontend}
          />

          <TechCard
            title="Backend"
            description="Server-side technologies"
            technologies={technologies.backend}
          />

          <TechCard
            title="Tools & Others"
            description="Development tools I use daily"
            technologies={technologies.tools}
          />
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <Layout title="Steven Chow | Home" description="Steven Chow's Personal Website">
      <Hero />
      <About />
      <Tools />
      <Contact />
    </Layout>
  );
}
