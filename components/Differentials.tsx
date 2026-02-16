
import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const diffs = [
  "Reabilitação Acelerada de Lesões",
  "Fortalecimento Muscular Específico",
  "Mobilidade Articular Avançada",
  "Potencialização de Performance",
  "Acompanhamento Biomecânico Individual",
  "Equipamentos de Tecnologia de Ponta"
];

export const Differentials: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-gradient-to-b from-neutral-900/40 to-transparent scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="bg-neutral-900/60 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-sm shadow-2xl">
          {/* Abstract circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 border border-[#2eb3ff]/5 rounded-full"></div>
          <div className="absolute -top-16 -right-16 w-64 h-64 border border-[#2eb3ff]/3 rounded-full"></div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 relative z-10">
            <div>
              <h2 className="text-3xl md:text-6xl font-black italic-speed uppercase tracking-tight mb-8 text-white leading-tight">
                POR QUE ESCOLHER A <span className="text-[#2eb3ff]">NEOMOVE?</span>
              </h2>
              <p className="text-neutral-400 text-base md:text-lg mb-10 leading-relaxed">
                Não somos apenas uma clínica, somos parceiros da sua evolução. Nosso diferencial está nos detalhes e no rigor técnico aplicado a cada paciente.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-y-5 gap-x-8">
                {diffs.map((diff, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#2eb3ff] w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-bold text-[11px] md:text-xs uppercase tracking-widest text-white leading-tight">{diff}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <a 
                  href="https://wa.me/5585991239931?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20na%20Neomove."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#2eb3ff] font-black uppercase text-xs tracking-[0.2em] group outline-none hover:gap-4 transition-all"
                >
                  Saiba mais sobre nossa infraestrutura
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:items-end">
              <div className="relative w-full max-w-sm md:max-w-md aspect-square bg-[#0a0a0a] rounded-3xl border border-white/10 p-2 overflow-hidden group shadow-2xl">
                 <img 
                  src="https://i.ibb.co/LXXk7pcj/2025-12-09-2.webp" 
                  alt="Infraestrutura moderna da Clínica Neomove" 
                  className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm pointer-events-none md:pointer-events-auto">
                   <button 
                     className="bg-white text-black p-5 rounded-full shadow-2xl hover:scale-110 transition-transform"
                     aria-label="Ver fotos da clínica"
                   >
                      <ChevronRight className="w-8 h-8" />
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
