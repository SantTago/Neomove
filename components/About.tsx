
import React from 'react';
import { Target, Shield, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#0a0a0a] border-y border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2eb3ff]/5 blur-3xl"></div>
            <img 
              src="https://i.ibb.co/xt0phF9Q/2025-12-09-4.webp" 
              alt="Sala de atendimento Neomove com tecnologia de ponta" 
              className="rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#2eb3ff] p-6 md:p-8 rounded-2xl hidden sm:block neon-glow">
              <span className="text-3xl md:text-4xl font-black text-[#0a0a0a] block leading-none">+10</span>
              <span className="text-[10px] font-bold text-[#0a0a0a] uppercase tracking-widest">Anos de Expertise</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[#2eb3ff] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Sobre a Neomove</span>
            <h2 className="text-3xl md:text-6xl font-black mb-8 italic-speed uppercase tracking-tight leading-tight">
              Saúde como prioridade, <br />
              <span className="text-neutral-600">resultado como consequência.</span>
            </h2>
            
            <p className="text-neutral-400 leading-relaxed mb-10 text-base md:text-lg">
              A metodologia Neomove foi desenvolvida para quem não aceita limitações. Combinamos protocolos de elite internacional com atendimento humanizado para devolver a você a liberdade do movimento.
            </p>

            <div className="grid gap-8">
              {[
                // Fixed: Added 'size' directly to icons to avoid TypeScript errors with React.cloneElement
                { icon: <Target className="text-[#2eb3ff]" size={24} />, title: 'Avaliação Biomecânica', desc: 'Análise detalhada do seu movimento para identificar a causa raiz da dor.' },
                { icon: <Shield className="text-[#2eb3ff]" size={24} />, title: 'Prevenção Ativa', desc: 'Protocolos exclusivos para evitar lesões recorrentes e fortalecer articulações.' },
                { icon: <Zap className="text-[#2eb3ff]" size={24} />, title: 'Performance Máxima', desc: 'Elevamos sua capacidade física ao próximo nível com base em ciência.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="mt-1 bg-white/5 p-4 rounded-2xl group-hover:bg-[#2eb3ff]/10 transition-colors h-fit">
                    {/* Fixed: Render the icon directly to avoid cloneElement type issues */}
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white uppercase tracking-tight italic-speed">{item.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
