import { MessageCircle, Phone, Globe, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#dcf8c6] to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#25D366]">AfriHealth</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#25D366]">Features</a>
              <a href="#about" className="text-gray-600 hover:text-[#25D366]">About</a>
              <a href="#contact" className="text-gray-600 hover:text-[#25D366]">Contact</a>
              <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/19ae9d41-5bbc-4e6b-8798-27271b6bfdbf.png" 
            alt="AfriHealth Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl font-bold leading-tight mb-6">
              Talk to a Doctor
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Simple, reliable, private text & voice-based symptom checker interaction via WhatsApp* Available all over Nigeria
            </p>
            <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-6">
              Start Consultation Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#25D366]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multi-Language Support</h3>
              <p className="text-gray-600">
                Communicate in Pidgin, Yoruba, Igbo, and Hausa for inclusive healthcare access.
              </p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#25D366]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Voice Interaction</h3>
              <p className="text-gray-600">
                Voice-based communication for users who prefer speaking over typing.
              </p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-[#25D366]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBar className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Triage</h3>
              <p className="text-gray-600">
                AI-powered medical triage for common conditions with instant recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Powerful Analytics Dashboard</h2>
              <p className="text-xl text-gray-600 mb-8">
                Track healthcare metrics, monitor user engagement, and measure cost savings for insurance providers.
              </p>
              <Button className="bg-[#128C7E] hover:bg-[#075E54] text-white">
                Learn More
              </Button>
            </div>
            <div className="relative bg-white rounded-3xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/lovable-uploads/a5a7d02e-7794-4ae8-83b5-70fa8301dcd5.png" 
                alt="AfriHealth Dashboard" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#075E54] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AfriHealth</h3>
              <p className="text-gray-300">
                Making healthcare accessible across Nigeria through AI and WhatsApp.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Medical Triage</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Language Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Voice Chat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">WhatsApp</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 AfriHealth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
