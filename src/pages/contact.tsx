import { Navigation, ContactInfoCard, InstagramCard } from '../components/ui';
import { LinkedinCard } from '../components/ui/LinkedinCard';

function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />

      {/* Main Content */}
      <div className="pt-6 pb-28 md:pt-28 md:pb-24 lg:pt-28 lg:pb-32 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <div className="mb-6">
            <ContactInfoCard />
          </div>

          {/* Social Cards Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="w-full sm:w-72 md:w-82 h-72 sm:h-82">
              <InstagramCard />
            </div>
            <div className="w-full sm:w-72 md:w-82 h-72 sm:h-82">
              <LinkedinCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
export { Contact };
