
import React from 'react';
import { Dumbbell, HeartPulse, Sparkles } from 'lucide-react';

const serviceData = [
  {
    title: "Fisioterapia Esportiva",
    subtitle: "Traumato-ortopédica",
    icon: <HeartPulse className="w-8 h-8" />,
    img: "https://i.ibb.co/zV0xcyY0/2025-12-09-8.webp",
    description: "Reabilitação focada no retorno rápido e seguro à prática esportiva, utilizando técnicas avançadas de terapia manual."
  },
  {
    title: "Recovery & Estética",
    subtitle: "Massoterapia Especializada",
    icon: <Sparkles className="w-8 h-8" />,
    img: "https://i.ibb.co/wZVmh2tN/2025-12-09-7.webp",
    description: "Recuperação muscular pós-treino, drenagem e técnicas de bem-estar para otimizar seu descanso e estética."
  },
  {
    title: "Treinamento Terapêutico",
    subtitle: "Programas Personalizados",
    icon: <Dumbbell className="w-8 h-8" />,
    img: "https://i.ibb.co/n8Vd4R8s/2025-12-09-6.webp",
    description: "Exercícios corretivos e fortalecimento específico para suas necessidades biomecânicas."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[#2eb3ff] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Nossas Especialidades</span>
            <h2 className="text-4xl md:text-6xl font-black italic-speed uppercase leading-tight text-white">Serviços <span className="text-neutral-600">Premium</span></h2>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm">Oferecemos soluções integradas para quem busca longevidade e excelência física.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceData.map((service, idx) => (
            <div key={idx} className="group relative bg-neutral-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-[#2eb3ff]/40 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 bg-[#2eb3ff] text-[#0a0a0a] p-3 rounded-2xl shadow-xl">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <span className="text-[10px] font-bold text-[#2eb3ff] uppercase tracking-[0.2em] mb-2 block">{service.subtitle}</span>
                <h3 className="text-2xl font-black mb-4 uppercase italic-speed tracking-tight text-white">{service.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <button className="text-white text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-1 hover:text-[#2eb3ff] hover:border-[#2eb3ff] transition-all">
                  Saiba mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
