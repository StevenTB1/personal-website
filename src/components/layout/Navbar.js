import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/utils';

export const Navbar = () => {
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path) => router.pathname === path;

  return (
    <header className="py-4 fixed top-0 left-0 right-0 z-50 bg-slate-50 shadow-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-8">
        <Link href="/" className="font-bold text-xl text-black">
          Steven Chow
        </Link>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                'transition-colors hover:text-primary text-gray-800 px-2 py-1 hover:bg-gray-300/80 rounded-sm',
                isActive(link.path) ? 'font-semibold text-primary' : '',
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-black">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] bg-slate-50">
            <div className="flex flex-col gap-4 mt-12 border-t border-slate-200 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    'text-lg transition-colors hover:text-primary text-gray-800 mx-2 px-2 py-1 hover:bg-gray-300/80 rounded-sm',
                    isActive(link.path) ? 'bg-gray-200/80 font-semibold text-primary' : '',
                  )}
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
