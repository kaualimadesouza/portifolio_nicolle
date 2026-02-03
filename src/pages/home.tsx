import {
  Navigation,
  BuildingSection,
  InstagramCard,
  LinkedinCard,
  LocationCard,
  AvailabilityCard,
  EmailCard,
  ProjectShowcaseCard,
} from '../components/ui';

function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">

            {/* Hero Section - spans 2 columns on larger screens */}
            <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
              <BuildingSection />
            </div>

            {/* Location Card */}
            <div className="lg:col-span-1">
              <LocationCard />
            </div>

            {/* Availability Card */}
            <div className="lg:col-span-1">
              <AvailabilityCard />
            </div>

            {/* Project Showcase 1 */}
            <div className="lg:col-span-1 lg:row-span-2">
              <ProjectShowcaseCard
                title="Aos olhos do coração"
                description="Livro publicado em 2021 - literatura visual e sensível"
                emoji="📖"
                link="/work"
                color="from-rose-500 to-pink-600"
              />
            </div>

            {/* Email Card */}
            <div className="lg:col-span-1">
              <EmailCard />
            </div>

            {/* Instagram Card - spans 2 columns */}
            <div className="md:col-span-1 lg:col-span-2">
              <InstagramCard />
            </div>

            {/* LinkedIn Card - spans 2 columns */}
            <div className="md:col-span-1 lg:col-span-2">
              <LinkedinCard />
            </div>

            {/* Project Showcase 2 */}
            <div className="lg:col-span-1">
              <ProjectShowcaseCard
                title="Design Editorial"
                description="Projetos de identidade visual e design de livros"
                emoji="✨"
                link="/work"
                color="from-violet-500 to-purple-600"
              />
            </div>

            {/* Project Showcase 3 */}
            <div className="lg:col-span-1">
              <ProjectShowcaseCard
                title="Ilustrações"
                description="Arte visual e ilustração autoral"
                emoji="🎨"
                link="/work"
                color="from-cyan-500 to-blue-600"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
export { Home };
