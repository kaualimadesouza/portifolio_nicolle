import { useState } from 'react';
import CV from '../../assets/common/cv-nicolle.pdf';
import { useLanguage } from '../../contexts/LanguageContext';

function ContactInfoCard() {
  const [copied, setCopied] = useState(false);
  const email = "nicollemarinhomartins@gmail.com";
  const { t } = useLanguage();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-170 mx-auto">
      <div className="bg-linear-to-br from-pink-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 transition-colors duration-300 border border-pink-100 dark:border-zinc-700">
        {/* Header with avatar */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shrink-0">
            N
          </div>
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              {t('contact.title')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="mb-6 sm:mb-8">
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {t('contact.message')}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 sm:gap-3">
          {/* Copy email button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-600 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all duration-200 group w-full">
            {copied ? (
              <>
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-500 font-medium text-sm sm:text-base">{t('contact.copied')}</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-pink-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">{t('contact.copy')}</span>
              </>
            )}
          </button>

          <div className="flex flex-row gap-2 sm:gap-3">
            {/* WhatsApp button */}
            <a
              href="https://wa.me/5511949327035"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#1da851] transition-all duration-200 flex-1"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
              <span className="font-medium text-sm sm:text-base">WhatsApp</span>
            </a>

            {/* CV download button */}
            <a
              href={CV}
              download="CV_Nicolle_Marinho.pdf"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-200 flex-1"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium text-sm sm:text-base">{t('contact.cv')}</span>
            </a>
          </div>
        </div>

        {/* Email display */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">{email}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoCard;
export { ContactInfoCard };
