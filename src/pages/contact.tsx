import { Navigation } from '../components/ui';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Main Content */}
      <div className="pt-20 pb-24 lg:pt-40 lg:pb-32 px-4 md:px-8 lg:px-0">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Contact</h1>
          <p className="text-gray-600">Get in touch with me.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
export { Contact };
