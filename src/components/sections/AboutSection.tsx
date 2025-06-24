import { aboutData } from '@/data/aboutData';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-r from-emerald-50 via-blue-50 to-indigo-100 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-blue-100/50"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 tech-gradient-text">{aboutData.title}</h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-12 px-4">
            I'm a results-driven <span className="font-semibold text-blue-600">{aboutData.highlightText}</span> with expertise in building 
            scalable data pipelines, cloud-first data warehouses, and cost-effective solutions. 
            My passion lies in transforming complex data challenges into elegant, maintainable architectures 
            that drive real business impact.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className={`text-center p-6 bg-gradient-to-br ${skill.bgGradient} rounded-xl shadow-lg ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${skill.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 