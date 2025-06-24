import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ExternalLink } from 'lucide-react';
import { siteConfig, roles } from '@/config/siteConfig';
import eiLogo from '@/assets/ei-logo.png';

interface HeroSectionProps {
  scrollToSection?: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleConnectClick = () => {
    if (scrollToSection) {
      scrollToSection('contact');
    } else {
      // Fallback to direct scroll if scrollToSection is not provided
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16 bg-gradient-to-br from-indigo-100 via-purple-50 to-teal-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="text-center max-w-5xl mx-auto animate-fade-in relative z-10">
        <div className="mb-8">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 shadow-lg">
            {siteConfig.availability}
          </span>
        </div>
        
        <h1 className="font-bold mb-6 leading-tight text-4xl sm:text-5xl lg:text-6xl">
          Hi, I'm <span className="tech-gradient-text">{siteConfig.name}</span>
          <span className="text-gray-500 text-xl sm:text-2xl block mt-4">{siteConfig.pronouns}</span>
        </h1>
        
        <div className="h-20 mb-12 flex items-center justify-center">
          <div 
            className="hero-badge animate-scale-in text-sm sm:text-base flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20"
            key={currentRole}
          >
            {currentRole === 0 && (
              <img 
                src={eiLogo} 
                alt="EI Logo" 
                className="w-6 h-6 object-contain"
              />
            )}
            {roles[currentRole]}
          </div>
        </div>

        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          {siteConfig.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center px-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 pulse-tech text-sm sm:text-base"
            onClick={handleConnectClick}
          >
            <Mail className="mr-3 h-5 w-5" />
            📫 Let's Connect
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base"
            onClick={() => window.open(siteConfig.cvUrl, '_blank')}
          >
            <ExternalLink className="mr-3 h-5 w-5" />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 