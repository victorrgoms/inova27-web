// src/app/(admin)/layout.tsx
import { Inter } from 'next/font/google';
import '../globals.css';
import Link from 'next/link';
import { LayoutDashboard, FlaskConical, Cpu, LogOut } from 'lucide-react';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Painel Admin - Inova 27',
};

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen flex bg-gray-50`}>
        
        {/* barra lateral do painel admin */}
        <aside className="w-64 bg-purple-950 text-white flex flex-col shadow-xl">
          <div className="p-6 mb-4 flex flex-col items-center">
            <Image 
              src="/imagens/Marca_horizontal.png" 
              alt="Logo AGIN" 
              width={120} 
              height={48} 
              className="h-12 w-auto" 
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
            <h2 className="text-2xl font-bold text-orange-400">Inova27º <span className="text-white">Admin</span></h2>
          </div>
          
          <nav className="flex-1 px-4 space-y-2">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-slate-800 transition-colors">
              <LayoutDashboard size={20} className="text-gray-400" /> 
              <span className="font-medium">Dashboard</span>
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Cadastros</p>
            </div>
            
            <Link href="/admin/laboratorios" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-slate-800 transition-colors">
              <FlaskConical size={20} className="text-gray-400" /> 
              <span className="font-medium">Laboratórios</span>
            </Link>
            <Link href="/admin/tecnologias" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-slate-800 transition-colors">
              <Cpu size={20} className="text-gray-400" /> 
              <span className="font-medium">Tecnologias</span>
            </Link>
          </nav>
          
          <div className="p-4 border-t border-slate-800">
            <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-md text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
              <LogOut size={20} /> 
              <span className="font-medium">Sair do Painel</span>
            </Link>
          </div>
        </aside>

        {/* área principal onde o crud vai renderizar */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
        
      </body>
    </html>
  );
}