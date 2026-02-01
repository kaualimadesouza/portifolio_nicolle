import { Card } from './Card';

function TwitterCard() {
  return (
    <Card className="group relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-white p-4 flex flex-col">
      {/* Background azul que preenche o card inteiro a partir do canto superior direito */}
      <div className="absolute inset-0 bg-[#1DA1F2] transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right pointer-events-none rounded-xl"></div>
      
      {/* Top: Profile */}
      <div className="relative z-10 flex items-center justify-between mb-3">
        <a href="https://twitter.com/nicollemarinho" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/10456829?v=4"
              alt="Nicolle Marinho"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold leading-tight text-sm text-black group-hover:text-white transition-colors duration-500">Nicolle Marinho</div>
            <div className="text-xs text-gray-400 group-hover:text-blue-100 transition-colors duration-500">@nicollemarinho</div>
          </div>
        </a>
        <div className="w-8 h-8 flex items-center justify-center">
          <svg className="w-5 h-5 text-[#1DA1F2] group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </div>
      </div>
      {/* Tweet */}
      <div className="relative z-10 text-sm leading-relaxed mb-4 flex-1 text-black group-hover:text-white transition-colors duration-500">
        criando e compartilhando ideias criativas!{' '}
        <span className="text-[#1DA1F2] group-hover:text-blue-100 transition-colors duration-500">@figma</span>{' '}
        <span className="text-[#1DA1F2] group-hover:text-blue-100 transition-colors duration-500">@pinterest</span>
      </div>
      {/* Button */}
      <a
        href="https://twitter.com/nicollemarinho"
        className="relative z-10 flex items-center justify-center gap-2 w-full border border-gray-200 group-hover:border-white rounded-full py-2 px-4 bg-white group-hover:bg-transparent transition-all duration-500 text-sm font-medium text-black group-hover:text-white"
      >
        Ver tweets
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    </Card>
  );
}

export default TwitterCard;
export { TwitterCard };
