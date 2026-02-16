
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/5585991239931?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/8nb5HX4T/2025-12-09-9.webp" 
          alt="Performance" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-[#2eb3ff]/20 border border-[#2eb3ff]/30 px-4 py-1 rounded-full mb-6">
            <span className="text-[#2eb3ff] text-[9px] font-bold uppercase tracking-[0.3em]">Elite Performance Clinic</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 italic-speed leading-none uppercase">
            MOVIMENTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2eb3ff] neon-text">SEM LIMITES.</span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-xl mb-10 font-medium">
            Fisioterapia de precisão e biomecânica avançada para atletas e pessoas que buscam o auge da sua forma física.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" className="bg-[#2eb3ff] text-[#0a0a0a] px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 neon-glow">
              Agendar Avaliação <ChevronRight size={18} />
            </a>
            <a href="#sobre" className="border border-white/20 px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:border-[#2eb3ff] transition-all text-center">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
