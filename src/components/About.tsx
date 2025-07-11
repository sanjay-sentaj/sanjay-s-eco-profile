
import { Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and committed to sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sanjay S is currently pursuing M.Tech in Biotechnology at Hindustan Institute of Technology 
                and Science (2024–Present). His research interests span renewable energy applications, 
                waste-to-energy systems, and advanced wastewater treatment methods.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sanjay earned his B.Tech in Biotechnology (2020–2024) from the same institution, where he 
                completed a thesis on Zeolite-Assisted Aerobic Granular Sludge Reactors for sewage treatment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center hover-lift">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">Cross-disciplinary research approach</p>
              </div>
              <div className="glass-card p-6 text-center hover-lift">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Commitment to quality research</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 hover-lift">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Research Interests
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Biofuel Infrastructure Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Microbial Bioenergy Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Environmental Technology Innovation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Waste Valorization Processes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Sustainable Wastewater Treatment</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 hover-lift">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                Vision & Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To bridge the gap between scientific innovation and practical environmental solutions, 
                creating a sustainable future through biotechnology and renewable energy systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
