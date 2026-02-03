import { Navigation, ChatInterface, InstagramCard } from '../components/ui';
import { LinkedinCard } from '../components/ui/LinkedinCard';

function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />

      {/* Main Content */}
      <div className="pt-28 pb-24 lg:pt-28 lg:pb-32 px-4 md:px-8 lg:px-0">
        <div className="max-w-4xl mx-auto">
          {/* Chat Interface */}
          <div className="mb-6">
            <ChatInterface />
          </div>

          {/* Social Cards Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="w-82 h-82">
              <InstagramCard />
            </div>
            <div className="w-82 h-82">
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
