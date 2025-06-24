import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

const Footer = () => {
  return (
    <footer className="section-padding bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-gray-800/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => window.open('https://github.com/mohithsairamreddy/mohithsairamreddy', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => window.open('https://www.linkedin.com/in/mohith-sai-ram-reddy/', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => window.open(`mailto:${siteConfig.email}`, '_blank')}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
          <div className="space-y-4">
            <p className="text-lg sm:text-xl font-medium">📫 {siteConfig.email}</p>
            <p className="text-lg sm:text-xl font-medium">📞 +91 {siteConfig.phone}</p>
            <p className="text-blue-400 font-medium text-sm sm:text-base px-4">
              Open to roles: Data Engineer, ETL Developer, Data Scientist, Tech Lead
            </p>
            <div className="pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm px-4">
                © 2024 {siteConfig.name}. Crafted with passion for clean code and elegant solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 