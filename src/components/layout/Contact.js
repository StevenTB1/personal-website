import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { TypographySectionTitle, TypographyP } from '@/components/base/Typography';

export const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:steven.chow@example.com',
      icon: FaEnvelope,
      color: 'text-red-500',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/stevenchow',
      icon: FaLinkedin,
      color: 'text-blue-500',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/stevenchow',
      icon: FaGithub,
      color: 'text-gray-400',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/stevenchow',
      icon: FaTwitter,
      color: 'text-sky-500',
    },
  ];

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <TypographySectionTitle>Get In Touch</TypographySectionTitle>
          <TypographyP className="max-w-2xl mx-auto text-slate-400">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </TypographyP>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group flex gap-2 items-center">
                <link.icon className={`h-5 w-5 ${link.color} group-hover:text-white`} />
                <span>{link.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
