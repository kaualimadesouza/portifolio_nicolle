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
      <div className="pt-28 pb-24 lg:pt-28 lg:pb-32 px-4 md:px-8 lg:px-0">
        <div className="max-w-[1400px] mx-auto">
          {/* Grid principal - 2 colunas com alturas iguais */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Left Column - Card Grande (altura completa) */}
            <div className="rounded-3xl flex flex-col min-h-[520px] md:min-h-[620px] lg:min-h-[720px]">
              <AboutMeCard />
            </div>
            
            {/* Right Column - Grid de Cards Menores (2x2 + 1 largo) */}
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 w-full">
                <div className="flex-1 min-w-0 h-80 w-1/2">
                  <InstagramCard />
                </div>
                <div className="flex-1 min-w-0 h-80 w-1/2">
                  <LinkedinCard />
                </div>
              </div>
              
              {/* <div className='flex gap-4'>
                <div className="bg-gray-100 rounded-3xl p-6 flex items-center justify-center w-[320px] h-[320px]">
                </div>
                
                <div className="bg-gray-100 rounded-3xl p-6 flex items-center justify-center w-[320px] h-[320px]">
                </div>
              </div> */}
              {/* Card 5 - Retangular (ocupa 2 colunas) */}
              <div className="col-span-2 bg-gray-100 dark:bg-zinc-900 rounded-3xl p-6 flex items-center justify-center w-full h-full transition-colors duration-300">
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
