import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectData';

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => 
      prev >= Math.ceil(projects.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) => 
      prev === 0 ? Math.ceil(projects.length / 3) - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/30 to-purple-100/30"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center tech-gradient-text">Featured Projects</h2>
        
        <div className="relative">
          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg"
            disabled={currentProject === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-12 h-12 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg"
            disabled={currentProject >= Math.ceil(projects.length / 3) - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-16">
            {projects.slice(currentProject * 3, currentProject * 3 + 3).map((project, index) => (
              <div key={currentProject * 3 + index} className="project-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant="secondary" 
                      className={`bg-white/90 backdrop-blur-sm text-${project.color.split('-')[1]}-600 border-white/20 shadow-sm`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                      {project.tech}
                    </Badge>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Page indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(projects.length / 3) }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 