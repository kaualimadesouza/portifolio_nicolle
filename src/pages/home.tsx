import { 
  Navigation,
  BuildingSection,
  FeedPanel,
  InstagramProfile,
  MobileAppMockup,
} from '../components/ui';
import { CareersTile } from '../components/ui/CareersTile';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Main Content */}
      <div className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <BuildingSection />
              <FeedPanel />
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
              <MobileAppMockup />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
export { Home };
