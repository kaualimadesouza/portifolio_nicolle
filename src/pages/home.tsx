import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Navigation,
  Card,
  InstagramCard,
  LinkedinCard,
  LocationCard,
  AvailabilityCard,
} from '../components/ui';
import ProfilePhoto from '../assets/common/home-profile-photo.jpg';
import AosOlhosImg from '../assets/aos-olhos-do-coracao/aos-olhos-do-coracao-capa.jpg';
import ContosImg from '../assets/contos-em-preto-e-branco/contos-em-preto-e-branco-capa.png';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
  const { t } = useLanguage();
  const [focusedProject, setFocusedProject] = useState<number | null>(null);
  
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 relative">
      {/* Navigation */}
      <div className={`transition-all duration-300 ${focusedProject !== null ? 'opacity-30 blur-sm' : ''}`}>
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="pt-6 pb-28 md:pt-28 md:pb-24 lg:pt-28 lg:pb-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">

          {/* Grid principal - 2 colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {/* Left Column - Hero Card + Contact CTA */}
            <div className={`flex flex-col gap-4 transition-all duration-300 ${focusedProject !== null ? 'opacity-30 blur-sm' : ''}`}>
              <Card className="p-6 sm:p-8 md:p-10 flex-1">
                <div className="flex flex-col h-full">
                  {/* Profile Header */}
                  <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                    <img 
                      src={ProfilePhoto} 
                      alt="Nicolle Marinho" 
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover ring-4 ring-pink-100 dark:ring-zinc-700"
                    />
                    <div>
                      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white">
                        {t('home.title')}
                      </h1>
                      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-lg">
                        {t('home.subtitle')}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-black/10 dark:bg-white/10 mb-6 sm:mb-8"></div>

                  {/* Bio */}
                  <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    <p>
                      {t('home.bio1')}{' '}
                      <span className="text-black dark:text-white font-medium">{t('home.bio1.highlight')}</span>{' '}
                      {t('home.bio1.end')}{' '}
                      <span className="text-pink-500 font-medium">{t('home.literature')}</span>,{' '}
                      <span className="text-purple-500 font-medium">{t('home.illustration')}</span>{' '}
                      <span className="text-gray-400 dark:text-gray-500">&</span>{' '}
                      <span className="text-violet-500 font-medium">{t('home.editorial')}</span>.
                    </p>
                    <p>
                      {t('home.bio2')}
                    </p>
                    <p className="hidden sm:block">
                      {t('home.bio3')}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                    <Link 
                      to="/work" 
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm sm:text-base hover:opacity-80 transition-opacity"
                    >
                      {t('home.cta.work')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link 
                      to="/about" 
                      className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-200 dark:border-zinc-700 text-black dark:text-white rounded-full font-medium text-sm sm:text-base hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                    >
                      {t('home.cta.about')}
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Contact CTA Card */}
              <Link to="/contact" className="group">
                <Card className="p-4 sm:p-6 md:p-8 h-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-left"></div>
                  
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white group-hover:text-white transition-colors duration-500 mb-1 sm:mb-2">
                        {t('home.contact.title')}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-500 truncate">
                        {t('home.contact.subtitle')}
                      </p>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 dark:bg-zinc-800 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-500 shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>

            {/* Right Column - Grid de Cards Menores */}
            <div className="flex flex-col gap-4">
              {/* Location e Availability */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 w-full transition-all duration-300 ${focusedProject !== null ? 'opacity-30 blur-sm' : ''}`}>
                <LocationCard />
                <AvailabilityCard />
              </div>

              {/* Projetos em destaque */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-20">
                {/* Featured Project 1 - Aos Olhos do Coração */}
                <div className="flex flex-col">
                  <Card className={`!p-0 overflow-hidden aspect-square transition-all duration-300 ${focusedProject !== null && focusedProject !== 0 ? 'opacity-30 blur-sm' : ''}`}>
                    <div className="relative h-full" style={{ backgroundImage: `url(${AosOlhosImg})`, backgroundSize: 'cover', backgroundPosition: 'center 15%' }}>

                      {/* Botão */}
                      <div className="absolute bottom-6 left-6 z-10">
                        <Link 
                          to="/work/aos-olhos-do-coracao"
                          className="inline-flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-pink-500 transition-colors w-9 h-9 sm:w-10 sm:h-10 shrink-0 group/btn"
                          onMouseEnter={() => setFocusedProject(0)}
                          onMouseLeave={() => setFocusedProject(null)}
                        >
                          <svg className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </Card>
                  {/* Título que aparece no hover - fora do card */}
                  <div className={`mt-2 transition-all duration-300 overflow-hidden ${focusedProject === 0 ? 'opacity-100 max-h-8' : 'opacity-0 max-h-0'}`}>
                    <h3 className="text-black dark:text-white font-bold text-sm sm:text-base">
                      📖 {t('project.aos_olhos')}
                    </h3>
                  </div>
                </div>

                {/* Featured Project 2 - Contos */}
                <div className="flex flex-col">
                  <Card className={`!p-0 overflow-hidden aspect-square transition-all duration-300 ${focusedProject !== null && focusedProject !== 1 ? 'opacity-30 blur-sm' : ''}`}>
                    <div className="relative h-full" style={{ backgroundImage: `url(${ContosImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      {/* Botão */}
                      <div className="absolute bottom-6 left-6 z-10">
                        <Link 
                          to="/work/contos-em-preto-e-branco"
                          className="inline-flex items-center justify-center rounded-full bg-white/90 dark:bg-zinc-900/90 hover:bg-zinc-800 dark:hover:bg-white transition-colors w-9 h-9 sm:w-10 sm:h-10 shrink-0 group/btn"
                          onMouseEnter={() => setFocusedProject(1)}
                          onMouseLeave={() => setFocusedProject(null)}
                        >
                          <svg className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover/btn:text-white dark:group-hover/btn:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </Card>
                  {/* Título que aparece no hover - fora do card */}
                  <div className={`mt-2 transition-all duration-300 overflow-hidden ${focusedProject === 1 ? 'opacity-100 max-h-8' : 'opacity-0 max-h-0'}`}>
                    <h3 className="text-black dark:text-white font-bold text-sm sm:text-base">
                      📚 {t('project.contos')}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Redes sociais */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 w-full transition-all duration-300 ${focusedProject !== null ? 'opacity-30 blur-sm' : ''}`}>
                <div className="h-64 sm:h-72 md:h-80">
                  <InstagramCard />
                </div>
                <div className="h-64 sm:h-72 md:h-80">
                  <LinkedinCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
export { Home };
