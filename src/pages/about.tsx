import { 
  Navigation,
  AboutMeCard
} from '../components/ui';
import { CareersTile } from '../components/ui/CareersTile';
import InstagramCard from '../components/ui/InstagramCard';
import LinkedinCard from '../components/ui/LinkedinCard';
import PinterestCard from '../components/ui/PinterestCard';
import TwitterCard from '../components/ui/TwitterCard';

function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Main Content */}
      <div className="pt-40 pb-32">
        <div>
          <div className="flex gap-8 justify-center">
            {/* Left Column */}
            <div className="space-y-8">
              <AboutMeCard />
            </div>
            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <TwitterCard />
                <InstagramCard />
              </div>
              <div className="flex gap-4">
                <PinterestCard />
                <LinkedinCard />
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
