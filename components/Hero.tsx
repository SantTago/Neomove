
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/5585991239931?text=Olá!%20Vi%20o%20site%20da%20Neomove%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/8nb5HX4T/2025-12-09-9.webp" 
          alt="Atleta realizando exercício de alta performance" 
          className="w-full h-full object-cover filter grayscale contrast-125"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[#2eb3ff]/5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#2eb3ff]/10 border border-[#2eb3ff]/30 px-4 py-1.5 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#2eb3ff] animate-pulse"></div>
            <span className="text-[#2eb3ff] text-[10px] font-bold uppercase tracking-[0.2em]">High Performance Clinic</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-[1.1] italic-speed tracking-tighter text-white">
            MOVIMENTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2eb3ff] neon-text">SEM DOR.</span>
          </h1>
          
          <p className="text-base md:text-xl text-neutral-400 font-medium mb-10 max-w-xl leading-relaxed">
            Especialistas em biomecânica e reabilitação esportiva. 
            Potencializamos sua performance com tecnologia e precisão clínica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2eb3ff] text-[#0a0a0a] px-8 py-4 md:px-10 md:py-5 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 neon-glow group shadow-xl"
            >
              Agendar Avaliação
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#sobre"
              className="border border-white/20 hover:border-[#2eb3ff] px-8 py-4 md:px-10 md:py-5 rounded-full font-black uppercase text-sm tracking-widest transition-all backdrop-blur-sm text-center flex items-center justify-center"
            >
              Nossa Metodologia
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] rotate-90 mb-8 text-neutral-500">Scroll</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#2eb3ff] to-transparent"></div>
      </div>
    </section>
  );
};
