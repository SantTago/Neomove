
import React from 'react';
import { Instagram, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const WHATSAPP_URL = "https://wa.me/5585991239931?text=Olá!%20Vi%20o%20site%20da%20Neomove%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

  return (
    <footer id="contato" className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img 
                src="https://i.ibb.co/W40Yjwdc/Sem-t-tulo-1.png" 
                alt="Neomove Logo" 
                className="h-10 w-auto"
              />
            </a>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              A excelência em fisioterapia e performance esportiva. Localizada no coração de Fortaleza.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/neomove" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-[#2eb3ff] hover:text-[#0a0a0a] transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-[#2eb3ff] hover:text-[#0a0a0a] transition-all"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Navegação</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#" className="hover:text-[#2eb3ff] transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-[#2eb3ff] transition-colors">A Clínica</a></li>
              <li><a href="#servicos" className="hover:text-[#2eb3ff] transition-colors">Nossos Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-[#2eb3ff] transition-colors">Metodologia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Contato</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <Phone className="text-[#2eb3ff] w-5 h-5 flex-shrink-0" />
                <a href="tel:85991239931" className="text-neutral-500 text-sm group-hover:text-white transition-colors">
                  (85) 99123-9931
                </a>
              </li>
              <li className="flex gap-4 group">
                <Mail className="text-[#2eb3ff] w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-500 text-sm group-hover:text-white transition-colors">
                  contato@neomove.com.br
                </span>
              </li>
              <li className="flex gap-4 group">
                <MapPin className="text-[#2eb3ff] w-5 h-5 flex-shrink-0" />
                <span className="text-neutral-500 text-sm leading-relaxed group-hover:text-white transition-colors">
                  Shopping Iguatemi, Piso L6<br />
                  Av. Washington Soares, 85
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Fale Conosco</h4>
            <p className="text-neutral-500 text-xs mb-6 italic">Clique abaixo para iniciar seu atendimento via WhatsApp.</p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-[#2eb3ff] text-[#0a0a0a] px-6 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all group"
            >
              Agendar Agora
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-[10px] uppercase tracking-[0.2em]">
            © 2024 NEOMOVE FISIOTERAPIA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-neutral-600 text-[10px] uppercase tracking-[0.2em] hover:text-[#2eb3ff]">Privacidade</a>
            <a href="#" className="text-neutral-600 text-[10px] uppercase tracking-[0.2em] hover:text-[#2eb3ff]">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
