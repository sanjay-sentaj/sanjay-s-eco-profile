
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "M.Tech in Biotechnology",
      institution: "Hindustan Institute of Technology and Science",
      period: "2024 – Present",
      focus: "Renewable Energy & Wastewater Treatment",
      status: "Current",
      description: "Advanced research in renewable energy applications, waste-to-energy systems, and environmental biotechnology."
    },
    {
      degree: "B.Tech in Biotechnology",
      institution: "Hindustan Institute of Technology and Science",
      period: "2020 – 2024",
      focus: "Zeolite-Assisted AGS Reactor for Sewage Treatment",
      status: "Completed",
      description: "Comprehensive study of biotechnology principles with specialization in environmental applications and thesis on aerobic granular sludge reactors."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation building expertise in biotechnology and sustainability
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-2 z-10">
                  <div className="absolute inset-1 bg-primary rounded-full animate-pulse-slow"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="glass-card p-8 hover-lift">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {edu.status}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.institution}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">Research Focus:</span>
                        <span className="text-muted-foreground">{edu.focus}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
