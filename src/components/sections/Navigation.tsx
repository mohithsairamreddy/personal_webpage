import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { sections } from '@/config/siteConfig';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full glass-morphism z-50 border-b border-white/20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Empty space for logo area - can add content here later if needed */}
            <div className="flex items-center">
              {/* Logo removed */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl">
              <div className="px-4 py-6 space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      scrollToSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === section.id
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600'
                        : 'text-gray-700 hover:bg-blue-50'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Section Progress Indicator */}
      <div className="fixed top-16 left-0 w-full bg-gradient-to-r from-white/90 via-blue-50/90 to-purple-50/90 backdrop-blur-sm z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center py-3">
            <div className="flex space-x-2">
              {sections.map((section, index) => (
                <div key={section.id} className="flex items-center">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ease-out ${
                      activeSection === section.id 
                        ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                  {index < sections.length - 1 && (
                    <div className="w-4 h-px bg-gray-200 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 