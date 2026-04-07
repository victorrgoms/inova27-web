'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  // gerencia se o menu mobile está aberto ou fechado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // alterna o estado do menu
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  // fecha o menu quando o usuário navega
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-purple-900/80 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-9 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" onClick={closeMenu}>
            {/* seção esquerda */}
            <Image 
              src="/imagens/Marca_horizontal.png" 
              alt="Logo AGIN" 
              width={120} 
              height={48} 
              className="h-12 w-auto" 
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          </Link>
        </div>

        {/* seção direita */}
        <nav className="hidden md:flex space-x-8 text-white font-medium text-sm">
          <Link href="/#sobre" className="hover:text-orange-400 transition-colors duration-300">
            Sobre
          </Link>
          <Link href="/laboratorios" className="hover:text-orange-400 transition-colors duration-300">
            Laboratórios
          </Link>
          <Link href="/tecnologias" className="hover:text-orange-400 transition-colors duration-300">
            Tecnologias
          </Link>
        </nav>

        {/* botão do menu mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* menu mobile recolhível */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-900 bg-opacity-95 text-white w-full absolute top-full left-0 z-40">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/#sobre" onClick={closeMenu} className="block px-3 py-2 rounded hover:bg-purple-800 text-sm">
              Sobre
            </Link>
            <Link href="/laboratorios" onClick={closeMenu} className="block px-3 py-2 rounded hover:bg-purple-800 text-sm">
              Laboratórios
            </Link>
            <Link href="/tecnologias" onClick={closeMenu} className="block px-3 py-2 rounded hover:bg-purple-800 text-sm">
              Tecnologias
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}