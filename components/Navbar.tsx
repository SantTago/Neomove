
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const WHATSAPP_URL = "https://wa.me/5585991239931?text=Olá!%20Vi%20o%20site%20da%20Neomove%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
  ];

  return (
    <nav 
      aria-label="Navegação Principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-[#2eb3ff]/20 py-2 md:py-3' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-[#2eb3ff] rounded-lg">
          <img 
            src="https://i.ibb.co/W40Yjwdc/Sem-t-tulo-1.png" 
            alt="Logo Neomove - Voltar para o início" 
            className="h-8 md:h-12 w-auto group-hover:scale-105 transition-transform"
            loading="eager"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest hover:text-[#2eb3ff] transition-colors outline-none focus-visible:text-[#2eb3ff]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2eb3ff] text-[#0a0a0a] px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all neon-glow flex items-center justify-center min-h-[44px]"
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-[60px] bg-[#0a0a0a] z-40 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-2xl font-black uppercase tracking-widest border-b border-white/5 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2eb3ff] text-[#0a0a0a] px-6 py-5 rounded-2xl font-black uppercase text-center tracking-widest text-lg shadow-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </nav>
  );
};
