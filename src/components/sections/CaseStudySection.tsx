import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Target } from 'lucide-react';
import { caseStudies } from '@/data/projectData';

const CaseStudySection = () => {
  return (
    <section id="case-study" className="pt-8 pb-20 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-pink-100/30"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 tech-gradient-text">Featured Case Studies</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {caseStudies.map((study) => (
            <Dialog key={study.id}>
              <DialogTrigger asChild>
                <Card className="tech-card p-8 cursor-pointer hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50/50 border border-blue-100">
                  <study.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <Button className="tech-gradient text-white">
                    <Target className="mr-2 h-4 w-4" />
                    View Case Study
                  </Button>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl tech-gradient-text">{study.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="tech-card p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200">
                      <h4 className="font-semibold mb-4 text-red-600">Challenge</h4>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="tech-card p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
                      <h4 className="font-semibold mb-4 text-blue-600">Solution</h4>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="tech-card p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200">
                      <h4 className="font-semibold mb-4 text-green-600">Results</h4>
                      <p className="text-gray-700 leading-relaxed">{study.results}</p>
                    </div>
                    <div className="tech-card p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200">
                      <h4 className="font-semibold mb-4 text-purple-600">Implementation</h4>
                      <p className="text-gray-700 leading-relaxed">{study.implementation}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection; 