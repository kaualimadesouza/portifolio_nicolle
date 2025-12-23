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
      <div className="pt-40 pb-32">
        <div>
          <div className="flex gap-8 justify-center">
            {/* Left Column */}
            <div className="space-y-8">
              <BuildingSection 
              />
            </div>
            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <CareersTile />
                <CareersTile />
              </div>
              <div className="flex gap-4">
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
