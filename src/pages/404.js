import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TypographyH1, TypographyH2, TypographyP } from '@/components/base/Typography';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 text-center">
        <TypographyH1>404</TypographyH1>
        <TypographyH2>Page Not Found</TypographyH2>
        <TypographyP>The page you're looking for doesn't exist or has been moved.</TypographyP>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </>
  );
}
