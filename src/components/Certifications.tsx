
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Renewable Energy & Green Building Entrepreneurship",
      provider: "Duke University",
      category: "Renewable Energy",
      year: "2025",
      score: "96%",
      month: "April",
      verified: true
    },
    {
      title: "Renewable Energy Tech Fundamentals",
      provider: "University of Colorado",
      category: "Renewable Energy",
      year: "2025",
      score: "91%",
      month: "May",
      verified: true
    },
    {
      title: "Renewable Energy Projects",
      provider: "University of Colorado",
      category: "Renewable Energy",
      year: "2025",
      score: "91%",
      month: "May",
      verified: true
    },
    {
      title: "Electric Power Systems",
      provider: "University at Buffalo",
      category: "Power Systems",
      year: "2025",
      score: "85%",
      month: "May",
      verified: true
    },
    {
      title: "Global Environmental Management",
      provider: "DTU (Technical University of Denmark)",
      category: "Environmental",
      year: "2025",
      score: "91%",
      month: "May",
      verified: true
    },
    {
      title: "Hazardous Waste Management",
      provider: "L&T EduTech",
      category: "Waste Management",
      year: "2025",
      score: "90%",
      month: "May",
      verified: true
    },
    {
      title: "Industrial Biotechnology",
      provider: "University of Manchester",
      category: "Biotechnology",
      year: "2025",
      score: "91%",
      month: "May",
      verified: true
    },
    {
      title: "Household Water Treatment",
      provider: "EPFL",
      category: "Water Treatment",
      year: "2025",
      score: "95%",
      month: "April",
      verified: true
    },
    {
      title: "Python Programming",
      provider: "Arizona State University",
      category: "Programming",
      year: "2025",
      score: "100%",
      month: "May",
      verified: true
    },
    {
      title: "Comfort in Buildings",
      provider: "L&T EduTech",
      category: "Building Systems",
      year: "2025",
      score: "85%",
      month: "May",
      verified: true
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications with high achievement scores
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <span key={index} className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full">
              {category}
            </span>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card p-6 hover-lift">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center space-x-2">
                  {cert.verified && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                      Verified
                    </span>
                  )}
                  <div className="flex items-center text-muted-foreground text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {cert.month} {cert.year}
                  </div>
                </div>
              </div>

              <h3 className="font-semibold mb-2 leading-tight">
                {cert.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                {cert.provider}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs bg-secondary px-2 py-1 rounded">
                  {cert.category}
                </span>
                {cert.score && (
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    {cert.score}
                  </span>
                )}
              </div>

              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Certificate
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary">
              Excellence in Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These certifications represent my commitment to excellence in biotechnology, renewable energy, 
              and environmental sustainability. With consistently high scores (85-100%), each certification 
              has equipped me with cutting-edge knowledge that directly contributes to my research and 
              professional development in sustainable technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
