import { 
  Navigation,
  BuildingSection,
  FeedPanel,
  InstagramProfile,
  MobileAppMockup,
} from '../components/ui';
import { CareersTile } from '../components/ui/CareersTile';
import WorkCard from '../components/ui/WorkCard';

function Work() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Main Content */}
      <div className="pt-32 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <WorkCard
                  title="DotOS"
                  subtitle="A context-aware OS for a more personal computer"
                  description="DotOS is a next-generation operating system designed to adapt to your workflow and context, making your computer more personal and productive."
                  image="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62c906ccc50496194ba8ac88_Notion.webp"
                  icon="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62c906ccc50496194ba8ac88_Notion.webp"
                  link="/work/dotos"
                />
            </div>
            {/* Right Column */}
            <div className="space-y-8">
                <WorkCard
                  title="DotOS"
                  subtitle="A context-aware OS for a more personal computer"
                  description="DotOS is a next-generation operating system designed to adapt to your workflow and context, making your computer more personal and productive."
                  image="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62c906ccc50496194ba8ac88_Notion.webp"
                  icon="https://cdn.prod.website-files.com/62c89bdb7c26b515f632de67/62c906ccc50496194ba8ac88_Notion.webp"
                  link="/work/dotos"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
export { Work };
