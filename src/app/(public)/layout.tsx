import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agência de Inovação da UECE - Inova 27',
  description: 'Portal de tecnologias e laboratórios da Universidade Estadual do Ceará.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior para compatibilidade com o roteamento interno do next.js
    <html lang="pt-BR" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} bg-gray-100 pt-16 flex flex-col min-h-screen`}>
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}