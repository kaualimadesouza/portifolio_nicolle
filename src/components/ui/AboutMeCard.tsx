import { useState } from 'react';
import CV_Nicolle from '../../assets/CV_Nicolle.pdf';
import { Card } from './Card';

function AboutMeCard() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "nicollemarinhomartins@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };
  return (
    <Card className="p-6 md:p-8 w-full h-full">
      <h1 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6 leading-tight tracking-tight">
        <span className="font-bold text-black">Sobre mim.</span>
      </h1>
      <div className="h-px bg-black/10 mb-6 md:mb-8"></div>
      <div className="space-y-6 md:space-y-8">
        {/* Where I'm From */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">De onde eu venho</div>
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-500">
            Sou graduanda em Letras pela USP e moro em São Bernardo do Campo (SP). Minha formação integra literatura e ilustração, e entendo a escrita como um campo expandido que envolve imagem, composição e a materialidade do livro. Meu processo criativo sempre esteve ligado à produção de imagens e ao pensamento visual.
          </div>
        </div>
        {/* What I used to Do */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">O que eu fazia antes</div>
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-500">
            Antes de atuar no campo editorial, desenvolvi projetos autorais que unem literatura e arte. Em 2021, publiquei de forma independente o livro “Aos olhos do coração”, concebido como um objeto artístico, experiência que me levou a compartilhar meu processo criativo em palestras sobre literatura como espaço de criação visual e sensível.
          </div>
        </div>
        {/* What I Do Now */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">O que faço atualmente</div>
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-500">
            Curso Letras na Universidade de São Paulo (USP), com foco na integração entre literatura, escrita e criação artística em projetos que unem texto e produção visual. Publiquei uma coletânea de contos ilustrada, assinando textos e ilustrações, e desenvolvi a identidade visual de um projeto de autobiografia linguística em italiano. Também realizei um trabalho acadêmico sobre Machado de Assis, explorando a tradução de elementos literários para a linguagem visual.
          </div>
        </div>
        {/* What I'm Looking For */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 tracking-widest">O que estou procurando</div>
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-500">
            Busco projetos e editoras focados em literatura visual, livros ilustrados, design editorial e criação autoral, em ambientes que valorizem experimentação estética.
          </div>
        </div>
      </div>
      {/* Ícones de contato (simples, sem tooltip animado) */}
      <div className="flex gap-4 mt-8">
        <a href="https://wa.me/5511949327035" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="cursor-pointer relative w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition focus:outline-none"
          aria-label="Copiar email"
        >
          <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62f5dbe13ef14900c4c5e5f5_email-contact-icon.svg" alt="Email" className="w-5 h-5" />
          {emailCopied && (
            <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-black text-white text-xs rounded px-2 py-1 shadow z-10 animate-fade-in flex flex-col items-center">
              <span>{email} copiado</span>
              <span className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></span>
            </span>
          )}
        </button>
        <a
          href={CV_Nicolle}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-auto h-8 px-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
          download
        >
          <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/63110ad668b7e7e21de162de_read-cv-icon.svg" alt="CV" className="w-5 h-5" />
          <span className="text-xs font-medium text-gray-700">Currículo</span>
        </a>
      </div>
    </Card>
  );
}

export default AboutMeCard;
export { AboutMeCard };
