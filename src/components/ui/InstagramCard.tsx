
import { Card } from './Card';
import InstagramPhoto from '../../assets/foto_instagram.jpg';
 

function InstagramCard() {
  return (
    <Card className="group relative w-full h-full overflow-hidden p-7 flex flex-col">
      {/* Background gradiente que preenche o card inteiro a partir do canto superior direito */}
      <div className="absolute inset-0 bg-pink-500 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right pointer-events-none rounded-xl"></div>

      {/* Top: Profile */}
      <div className="relative z-10 flex items-center justify-between mb-5">
        <a href="https://instagram.com/nicollemarinho" className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src={InstagramPhoto}
              alt="Nicolle Marinho"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold leading-tight text-lg text-black group-hover:text-white transition-colors duration-500">Nicolle Marinho</div>
            <div className="text-base text-gray-400 group-hover:text-pink-100 transition-colors duration-500">@entrearteselivros</div>
          </div>
        </a>
        <div className="w-10 h-10 flex items-center justify-center">
          <svg className="w-7 h-7 text-pink-500 group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.5 1.25a1 1 0 110 2 1 1 0 010-2z" />
          </svg>
        </div>
      </div>
      {/* Instagram bio */}
      <div className="relative z-10 text-base leading-relaxed mb-6 flex-1 text-black group-hover:text-white transition-colors duration-500">
        compartilhando momentos e inspirações!{' '}
        <span className="text-pink-500 group-hover:text-pink-100 transition-colors duration-500">#design</span>{' '}
        <span className="text-pink-500 group-hover:text-pink-100 transition-colors duration-500">#criatividade</span>
      </div>
      {/* Button */}
      <a
        href="https://www.instagram.com/entrearteselivros/"
        target='_blank'
        className="relative z-10 flex items-center justify-center gap-3 w-full border border-gray-200 group-hover:border-white rounded-full py-3 px-6 bg-white group-hover:bg-transparent transition-all duration-500 text-base font-semibold text-black group-hover:text-white hover:opacity-70"
      >
        Ver perfil
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>
    </Card>
  );
}

export default InstagramCard;
export { InstagramCard };
