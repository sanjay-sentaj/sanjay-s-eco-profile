
import { MapPin, Mail, Phone, Calendar, GraduationCap, Building, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Content - Image and Basic Info */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/36de925f-1c96-458e-b051-2e59a77e6ce9.png"
                alt="Sanjay S - Biotechnology Professional"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full max-w-md mx-auto bg-muted rounded-lg shadow-lg p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">S</span>
                  </div>
                  <p className="text-muted-foreground">Professional Photo</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
                M.Tech Biotechnology Student & Clean Energy Enthusiast
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome! I'm Sanjay S, a second-year M.Tech Biotechnology student with a strong interest in clean energy, 
                waste-to-fuel technology, and sustainable bioenergy systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm gaining hands-on industry experience through an internship at an SWMS BioCNG plant in Chennai, 
                where I'm learning the real-world operation and design of waste-to-energy systems.
              </p>
            </div>
          </div>

          {/* Right Content - Details */}
          <div className="space-y-6">
            {/* Personal Details */}
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Education:</span>
                    <span className="text-muted-foreground ml-2">M.Tech Biotechnology</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Institute:</span>
                    <span className="text-muted-foreground ml-2">HITS</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Phone:</span>
                    <span className="text-muted-foreground ml-2">+91 9080553408</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Specialization:</span>
                    <span className="text-muted-foreground ml-2">Clean Energy</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Email:</span>
                    <span className="text-muted-foreground ml-2">sanjaysenthil62@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground">Location:</span>
                    <span className="text-muted-foreground ml-2">Anakaputhur, Chennai</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Internship */}
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 text-primary">Current Internship</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-foreground">Internship Experience - June 10th to Dec 10th, 2025 (6 months)</p>
                  <p className="text-sm text-muted-foreground">Plant-Based Learning at SWMS BioCNG Plant, Chennai</p>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Real-World Exposure: Waste-to-Energy in Action</p>
                  <p>• On-Site Experience in Clean Energy Production</p>
                  <p>• Hands-on exposure to waste-to-energy process</p>
                  <p>• From feedstock input to gas output and by-product management</p>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold mb-3 text-primary">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                This website is a reflection of my journey — combining academic knowledge, technical skills, and startup 
                ambition to build scalable solutions in BioCNG, green hydrogen, and circular waste management.
              </p>
              <p className="text-foreground font-medium mt-3">
                Let's connect, collaborate, and build a greener tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center">🧠 Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Chemical Oxygen Demand (COD) & Biological Oxygen Demand (BOD) Analysis",
              "Sulphate, Chloride, Solids (TS, VS, MLSS) Content Analysis",
              "Biofuel Mass-Energy Balance",
              "Process Flow Diagram Creation (Draw.io)",
              "Excel-based ROI & Costing Model",
              "Python for process optimization",
              "AutoCAD/SketchUp basics (learning)",
              "Canva, Google Sites, Notion for reports and portfolios"
            ].map((skill, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✅</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
