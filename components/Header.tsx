'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" aria-label="Ir para a página inicial">
            <Logo size="md" variant="full" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  pathname === link.href
                    ? 'text-brand-accent border-b-2 border-brand-accent pb-0.5'
                    : 'text-brand-dark'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="ml-2 px-5 py-2 bg-brand-navy text-white text-sm font-semibold rounded hover:bg-brand-accent transition-colors"
            >
              Solicitar proposta
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-brand-dark hover:text-brand-accent"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="md:hidden bg-white border-t border-gray-100 px-4 pb-4"
          aria-label="Navegação mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-3 text-sm font-medium border-b border-gray-50 ${
                pathname === link.href ? 'text-brand-accent' : 'text-brand-dark'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="mt-3 block text-center px-5 py-2.5 bg-brand-navy text-white text-sm font-semibold rounded hover:bg-brand-accent transition-colors"
          >
            Solicitar proposta
          </Link>
        </nav>
      )}
    </header>
  );
}
