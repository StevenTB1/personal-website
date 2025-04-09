import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <header className="py-6">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Steven Chow
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors hover:text-primary ${
                isActive(link.path) ? 'font-semibold text-primary' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px]">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-lg transition-colors hover:text-primary ${
                    isActive(link.path) ? 'font-semibold text-primary' : ''
                  }`}
                  onClick={() => setSheetOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
