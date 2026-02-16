
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const WHATSAPP_URL = "https://wa.me/5585991239931?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2eb3ff]/20 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="https://i.ibb.co/W40Yjwdc/Sem-t-tulo-1.png" alt="Neomove" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] font-bold uppercase tracking-widest hover:text-[#2eb3ff] transition-colors">
              {link.name}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" className="bg-[#2eb3ff] text-[#0a0a0a] px-6 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all neon-glow">
            Agendar
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-[#0a0a0a] p-10 flex flex-col gap-8 z-50">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-2xl font-black uppercase italic-speed" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" className="bg-[#2eb3ff] text-[#0a0a0a] py-4 rounded-xl text-center font-black uppercase text-sm">
            Agendar Agora
          </a>
        </div>
      )}
    </nav>
  );
};
