import { 
  Navigation,
  BuildingSection,
  InstagramProfile,
} from '../components/ui';
import { CareersTile } from '../components/ui/CareersTile';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Main Content */}
      <div className="pt-20 pb-24 lg:pt-40 lg:pb-32 px-4 md:px-8 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center lg:items-start">
            {/* Left Column */}
            <div className="w-full lg:w-auto space-y-6 lg:space-y-8">
              <BuildingSection />
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-auto space-y-6 lg:space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <CareersTile />
                <CareersTile />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <CareersTile />
                <CareersTile />
              </div>
              <InstagramProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
export { Home };
