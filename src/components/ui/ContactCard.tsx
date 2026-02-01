import { Card } from './Card';

function ContactCard() {
  return (
    <Card className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gray-900 p-5">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://avatars.githubusercontent.com/u/10456829?v=4"
            alt="Nicolle"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-1">Nicolle</div>
          <div className="text-white text-sm leading-relaxed">
            quer trabalhar junto? ou só trocar uma ideia? me manda uma mensagem!
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <a
          href="mailto:nicolle@email.com"
          className="bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition flex items-center gap-1"
        >
          bora conversar
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-gray-700">
        <a href="mailto:nicolle@email.com" className="text-gray-400 hover:text-white transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        <a href="https://twitter.com/nicollemarinho" className="text-gray-400 hover:text-white transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </Card>
  );
}

export default ContactCard;
export { ContactCard };
