import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Experience Card Component
const ExperienceCard = ({ title, company, date, description, skills }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{company}</CardDescription>
          </div>
          <div className="text-sm text-muted-foreground">{date}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Landing Component
const Landing = () => {
  const workExperiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      date: 'Jan 2022 - Present',
      description:
        'Leading development of web applications using React and Node.js. Mentoring junior developers and implementing best practices.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    },
    {
      title: 'Software Developer',
      company: 'Digital Innovations',
      date: 'Jun 2019 - Dec 2021',
      description:
        'Developed and maintained multiple client projects. Worked on both frontend and backend systems and collaborated with design teams.',
      skills: ['JavaScript', 'React', 'Express', 'MongoDB'],
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      date: 'Jan 2018 - May 2019',
      description:
        'Assisted in the development of web applications, fixing bugs and implementing new features. Participated in code reviews and daily standups.',
      skills: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    },
  ];

  const educationExperiences = [
    {
      title: "Master's in Computer Science",
      company: 'Tech University',
      date: '2020 - 2022',
      description:
        'Focused on web technologies and software engineering. Completed coursework in advanced algorithms, distributed systems, and human-computer interaction.',
      skills: ['Algorithms', 'Distributed Systems', 'HCI'],
    },
    {
      title: "Bachelor's in Computer Science",
      company: 'State University',
      date: '2014 - 2018',
      description:
        'Core computer science curriculum with emphasis on software development. Graduated with honors.',
      skills: ['Java', 'Python', 'Data Structures', 'Databases'],
    },
  ];

  return (
    <section className="py-10">
      <div className="flex flex-col gap-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Experience</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            My professional journey and work experience
          </p>
        </div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="work">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="mt-6 space-y-6">
            {workExperiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                date={exp.date}
                description={exp.description}
                skills={exp.skills}
              />
            ))}
          </TabsContent>

          <TabsContent value="education" className="mt-6 space-y-6">
            {educationExperiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                company={exp.company}
                date={exp.date}
                description={exp.description}
                skills={exp.skills}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default function Experience() {
  return (
    <Layout title="Steven Chow | Experience" description="Steven Chow's Experience">
      <Landing />
    </Layout>
  );
}
