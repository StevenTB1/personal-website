import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16" id="contact">
      <div className="flex flex-col gap-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out this form and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={4} required />
                </div>
              </CardContent>

              <CardFooter>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
              <CardDescription>You can also reach me through these platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
                <div>
                  <h3 className="text-sm font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">contact@stevenchow.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <div>
                  <h3 className="text-sm font-medium">GitHub</h3>
                  <p className="text-sm text-muted-foreground">github.com/stevenchow</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <div>
                  <h3 className="text-sm font-medium">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/stevenchow</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
