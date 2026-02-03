import { Navigation, ChatInterface, InstagramCard } from '../components/ui';
import { LinkedinCard } from '../components/ui/LinkedinCard';

function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navigation />

      {/* Main Content */}
      <div className="pt-24 pb-32 lg:pt-32 lg:pb-40 px-4 md:px-8">
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
