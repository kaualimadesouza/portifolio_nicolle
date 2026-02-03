import { Card } from './Card';

function LinkedinCard() {
  return (
    <Card className="group relative w-full h-full overflow-hidden p-7 flex flex-col">
      {/* Background azul que preenche o card inteiro a partir do canto superior direito */}
      <div className="absolute inset-0 bg-[#0077b5] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right pointer-events-none rounded-2xl"></div>

      {/* Top: Profile */}
      <div className="relative z-10 flex items-center justify-between mb-5">
        <a href="https://www.linkedin.com/in/nicollemarinho/" className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQFvHl6ohu6KWQ/profile-displayphoto-shrink_400_400/B56ZUGh1nLHoAo-/0/1739571289700?e=1771459200&v=beta&t=X_LQQ4GWEAv-A9GtdCt_kArlDST_NAGChWqLvO4lMw4"
              alt="Nicolle Marinho"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold leading-tight text-lg text-black dark:text-white group-hover:text-white transition-colors duration-500">Nicolle Marinho</div>
            <div className="text-[12px] text-gray-400 group-hover:text-blue-100 transition-colors duration-500">@nicollemarinhomartins</div>
          </div>
        </a>
        <div className="w-10 h-10 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#0077b5] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
      </div>
      {/* Post */}
      <div className="relative z-10 text-base leading-relaxed mb-6 flex-1 text-black dark:text-white group-hover:text-white transition-colors duration-500">
        compartilhando projetos e insights sobre design!{' '}
        <span className="text-[#0077b5] group-hover:text-blue-100 transition-colors duration-500">#design</span>{' '}
        <span className="text-[#0077b5] group-hover:text-blue-100 transition-colors duration-500">#ux</span>
      </div>
      {/* Button */}
      <a
        href="https://www.linkedin.com/in/nicollemarinhomartins/"
        target='_blank'
        className="relative z-10 flex items-center justify-center gap-3 w-full border border-gray-200 dark:border-zinc-700 group-hover:border-white rounded-full py-3 px-6 bg-white dark:bg-zinc-800 group-hover:bg-transparent transition-all duration-500 text-base font-semibold text-black dark:text-white group-hover:text-white hover:opacity-70"
      >
        Ver perfil
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    </Card>
  );
}

export default LinkedinCard;
export { LinkedinCard };
