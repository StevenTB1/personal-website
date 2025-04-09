import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col gap-2">
      404 Not Found
      <Link href="/">Home</Link>
    </div>
  );
}
