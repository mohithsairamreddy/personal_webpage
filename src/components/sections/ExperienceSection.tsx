import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Code, Database, Cloud, Target, ChevronDown } from 'lucide-react';
import { experiences, stats } from '@/data/experienceData';
import eiLogo from '@/assets/ei-logo.png';
import ciscoLogo from '@/assets/cisco-logo.png';
import amritaLogo from '@/assets/amrita-logo.png';

const ExperienceSection = () => {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <>
      {/* Professional Experience Section with Enhanced Background */}
      <section id="experience" className="section-padding bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/30 to-purple-100/30"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center tech-gradient-text">Professional Experience</h2>
          
          {/* Skills subsection - Only categorized boxes */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Skills & Technologies</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="tech-card p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                <Code className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold mb-2 text-lg">Programming</h4>
                <p className="text-sm text-gray-600">Python, C++, SQL</p>
              </div>
              <div className="tech-card p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                <Database className="h-8 w-8 text-purple-600 mb-3" />
                <h4 className="font-semibold mb-2 text-lg">Databases</h4>
                <p className="text-sm text-gray-600">Snowflake, ClickHouse, PostgreSQL, MongoDB</p>
              </div>
              <div className="tech-card p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                <Cloud className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-semibold mb-2 text-lg">Cloud Platforms</h4>
                <p className="text-sm text-gray-600">AWS, GCP, Azure</p>
              </div>
              <div className="tech-card p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
                <Target className="h-8 w-8 text-orange-600 mb-3" />
                <h4 className="font-semibold mb-2 text-lg">Data Tools</h4>
                <p className="text-sm text-gray-600">Airbyte, DBT, Kafka, Redash</p>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isExpanded = expandedExperience === index;
              return (
                <Collapsible key={index} open={isExpanded} onOpenChange={() => toggleExperience(index)}>
                  <div className="experience-card animate-slide-up bg-gradient-to-r from-white to-blue-50/50 border border-blue-100 p-6 rounded-xl shadow-lg" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-start gap-6">
                      {exp.company === "Educational Initiatives" ? (
                        <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <img 
                            src={eiLogo} 
                            alt="EI Logo" 
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      ) : exp.company === "Cisco" ? (
                        <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <img 
                            src={ciscoLogo} 
                            alt="Cisco Logo" 
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      ) : exp.company === "AI@amrita" ? (
                        <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <img 
                            src={amritaLogo} 
                            alt="Amrita Logo" 
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                      ) : (
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${exp.color} to-purple-600 flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                            <p className="text-blue-600 font-medium">@ {exp.company}</p>
                          </div>
                          <div className="text-sm text-gray-500 font-mono bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                            {exp.period}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">{exp.preview}</p>
                        
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 p-0 h-auto">
                            <span className="mr-2">{isExpanded ? 'Show Less' : 'Read More'}</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </Button>
                        </CollapsibleTrigger>
                        
                        <CollapsibleContent className="mt-4">
                          <ul className="space-y-3">
                            {exp.fullDescription.map((item, idx) => (
                              <li key={idx} className="text-gray-700 flex items-start">
                                <span className="text-blue-600 mr-3 mt-2">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </div>
                    </div>
                  </div>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof & KPIs with Enhanced Background */}
      <section className="py-16 pb-8 bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/40 to-blue-100/40"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center tech-gradient-text">Key Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="tech-card p-8 text-center bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 shadow-lg">
                <div className="stats-icon mx-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold tech-gradient-text mb-2">{stat.value}</div>
                <h3 className="text-xl font-semibold mb-3">{stat.title}</h3>
                <p className="text-gray-600 mb-6">{stat.description}</p>
                <ul className="space-y-3 text-left">
                  {stat.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection; 