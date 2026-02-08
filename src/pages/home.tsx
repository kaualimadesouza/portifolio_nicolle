import { Link } from 'react-router-dom';
import {
  Navigation,
  Card,
  InstagramCard,
  LinkedinCard,
  LocationCard,
  AvailabilityCard,
} from '../components/ui';
import ProfilePhoto from '../assets/foto_instagram.jpg';
import AosOlhosImg from '../assets/aos_olhos_do_coração.jpg';
import ContosImg from '../assets/contos_em_preto_e_branco.png';
import { useLanguage } from '../contexts/LanguageContext';

function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />

      {/* Main Content */}
      <div className="pt-6 pb-28 md:pt-28 md:pb-24 lg:pt-28 lg:pb-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Hero Card - Profile & Intro */}
            <Card className="md:col-span-2 lg:col-span-2 lg:row-span-2 p-6 sm:p-8 md:p-10">
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
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  <p>
                    {t('home.bio1')} <span className="text-black dark:text-white font-medium">{t('home.bio1.highlight')}</span> {t('home.bio1.end')}{' '}
                    <span className="text-pink-500">{t('home.literature')}</span>,
                    <span className="text-purple-500"> {t('home.illustration')}</span> e 
                    <span className="text-violet-500"> {t('home.editorial')}</span>.
                  </p>
                  <p className="hidden sm:block">
                    {t('home.bio2')}
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

            {/* Location Card */}
            <div className="lg:col-span-1">
              <LocationCard />
            </div>

            {/* Availability Card */}
            <div className="lg:col-span-1">
              <AvailabilityCard />
            </div>

            {/* Featured Project 1 - Aos Olhos do Coração */}
            <Link to="/work/aos-olhos-do-coracao" className="md:col-span-1 lg:col-span-1 lg:row-span-2 group">
              <Card className="h-full p-0 overflow-hidden">
                <div className="relative h-full min-h-64 sm:min-h-80 flex flex-col">
                  <div className="absolute inset-0 bg-linear-to-br from-rose-500 to-pink-600 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-left"></div>
                  
                  <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 group-hover:text-white/70 transition-colors duration-500">
                        {t('project.book')}
                      </span>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center py-2 sm:py-4">
                      <img 
                        src={AosOlhosImg} 
                        alt={t('project.aos_olhos')} 
                        className="max-h-28 sm:max-h-40 object-contain rounded-lg shadow-lg bg-white p-2"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-base sm:text-lg font-bold text-black dark:text-white group-hover:text-white transition-colors duration-500 mb-1">
                        {t('project.aos_olhos')}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors duration-500">
                        {t('project.poetry')}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Featured Project 2 - Contos */}
            <Link to="/work/contos-em-preto-e-branco" className="md:col-span-1 lg:col-span-1 group">
              <Card className="h-full p-0 overflow-hidden min-h-32 sm:min-h-50">
                <div className="relative h-full flex flex-col">
                  <div className="absolute inset-0 bg-linear-to-br from-zinc-700 to-zinc-900 transform scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-right"></div>
                  
                  <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img 
                        src={ContosImg} 
                        alt={t('project.contos')} 
                        className="w-12 h-16 sm:w-16 sm:h-20 object-contain rounded bg-white p-1"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 group-hover:text-white/70 transition-colors duration-500">
                          {t('project.tales')}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-black dark:text-white group-hover:text-white transition-colors duration-500 truncate">
                          {t('project.contos')}
                        </h3>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Instagram Card */}
            <div className="md:col-span-1 lg:col-span-1 h-64 sm:h-72 md:h-80">
              <InstagramCard />
            </div>

            {/* LinkedIn Card */}
            <div className="md:col-span-1 lg:col-span-1 h-64 sm:h-72 md:h-80">
              <LinkedinCard />
            </div>

            {/* Contact CTA Card */}
            <Link to="/contact" className="col-span-1 md:col-span-2 group">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
export { Home };
