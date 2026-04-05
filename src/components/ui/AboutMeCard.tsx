import { useState } from 'react';
import CV_Nicolle from '../../assets/common/cv-nicolle.pdf';
import { Card } from './Card';
import { useLanguage } from '../../contexts/LanguageContext';

function AboutMeCard() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "nicollemarinhomartins@gmail.com";
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3000);
  };
  return (
    <Card className="p-6 md:p-8 w-full h-full">
      <h1 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6 leading-tight tracking-tight">
        <span className="font-bold text-black dark:text-white">{t('about.title')}</span>
      </h1>
      <div className="h-px bg-black/10 dark:bg-white/10 mb-6 md:mb-8"></div>
      <div className="space-y-6 md:space-y-8">
        {/* Where I'm From */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-widest">{t('about.where')}</div>
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-500 dark:text-gray-400">
            {t('about.where.text')}
          </div>
        </div>
        {/* What I used to Do */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-widest">{t('about.before')}</div>
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-500 dark:text-gray-400">
            {t('about.before.text')}
          </div>
        </div>
        {/* What I Do Now */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-widest">{t('about.now')}</div>
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-500 dark:text-gray-400">
            {t('about.now.text')}
          </div>
        </div>
        {/* What I'm Looking For */}
        <div className="space-y-2">
          <div className="uppercase text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-widest">{t('about.looking')}</div>
          <div className="text-base md:text-lg leading-relaxed font-light text-gray-500 dark:text-gray-400">
            {t('about.looking.text')}
          </div>
        </div>
      </div>
      {/* Ícones de contato */}
      <div className="flex gap-4 mt-8">
        <a href="https://wa.me/5511949327035" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
        </a>
        <button
          type="button"
          onClick={handleCopyEmail}
          className="cursor-pointer relative w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition focus:outline-none"
          aria-label="Copiar email"
        >
          <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62f5dbe13ef14900c4c5e5f5_email-contact-icon.svg" alt="Email" className="w-5 h-5 dark:invert" />
          {emailCopied && (
            <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-black dark:bg-white text-white dark:text-black text-xs rounded px-2 py-1 shadow z-10 animate-fade-in flex flex-col items-center">
              <span>{email} {t('about.email.copied')}</span>
            </span>
          )}
        </button>
        <a
          href={CV_Nicolle}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 w-auto h-8 px-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition"
          download
        >
          <img src="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/63110ad668b7e7e21de162de_read-cv-icon.svg" alt="CV" className="w-5 h-5 dark:invert" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{t('contact.cv')}</span>
        </a>
      </div>
    </Card>
  );
}

export default AboutMeCard;
export { AboutMeCard };
