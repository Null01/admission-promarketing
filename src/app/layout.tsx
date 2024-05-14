import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { roboto, poppins } from '@/ui/fonts';

export const metadata: Metadata = {
  title: 'Admission Promarketing',
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
    <body>
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
    </body>
    </html>
  );
}
