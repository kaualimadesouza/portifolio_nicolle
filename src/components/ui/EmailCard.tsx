import { useState } from 'react';
import { Card } from './Card';

function EmailCard() {
  const [copied, setCopied] = useState(false);
  const email = "nicollemarinhomartins@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="group relative p-6 h-full overflow-hidden cursor-pointer" onClick={handleCopy}>
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-600 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-left pointer-events-none rounded-4xl"></div>

      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-500">
            <svg className="w-5 h-5 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 group-hover:text-white/70 mb-2 transition-colors duration-500">
            {copied ? 'Copiado!' : 'Clique para copiar'}
          </p>
          <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-white transition-colors duration-500 break-all">
            {email}
          </h3>
        </div>
      </div>
    </Card>
  );
}

export default EmailCard;
export { EmailCard };
