import { 
  Navigation,
  AboutMeCard
} from '../components/ui';
import InstagramCard from '../components/ui/InstagramCard';
import LinkedinCard from '../components/ui/LinkedinCard';

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />
      {/* Main Content */}
      <div className="pt-6 pb-28 md:pt-28 md:pb-24 lg:pt-28 lg:pb-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Grid principal - 2 colunas com alturas iguais */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Left Column - Card Grande (altura completa) */}
            <div className="rounded-3xl flex flex-col min-h-auto lg:min-h-[720px]">
              <AboutMeCard />
            </div>
            
            {/* Right Column - Grid de Cards Menores */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="h-64 sm:h-72 md:h-80">
                  <InstagramCard />
                </div>
                <div className="h-64 sm:h-72 md:h-80">
                  <LinkedinCard />
                </div>
              </div>
              
              {/* Card 5 - Retangular (ocupa 2 colunas) */}
              <div className="col-span-2 bg-gray-100 dark:bg-zinc-900 rounded-3xl p-6 flex items-center justify-center w-full min-h-32 lg:flex-1 transition-colors duration-300">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
export { About };
