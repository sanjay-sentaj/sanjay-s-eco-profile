
import { FlaskConical, Code, Zap, Leaf, Droplets, Recycle, BarChart3, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Laboratory Techniques",
      icon: FlaskConical,
      skills: [
        { name: "Chemical Oxygen Demand (COD) Analysis", level: 92 },
        { name: "Biological Oxygen Demand (BOD) Analysis", level: 90 },
        { name: "Sulphate & Chloride Testing", level: 88 },
        { name: "Solids Content Analysis (TS, VS, MLSS)", level: 94 },
        { name: "Microbial Analysis", level: 87 }
      ]
    },
    {
      title: "Technical & Programming",
      icon: Code,
      skills: [
        { name: "Python Programming", level: 100 },
        { name: "Data Analysis", level: 85 },
        { name: "Statistical Software", level: 80 },
        { name: "Lab Equipment Operation", level: 90 },
        { name: "Research Methodologies", level: 88 }
      ]
    },
    {
      title: "Renewable Energy Systems",
      icon: Zap,
      skills: [
        { name: "Renewable Energy Technologies", level: 96 },
        { name: "Green Building Systems", level: 91 },
        { name: "Electric Power Systems", level: 85 },
        { name: "Energy Project Development", level: 91 },
        { name: "Bioenergy Applications", level: 92 }
      ]
    },
    {
      title: "Environmental Technology",
      icon: Leaf,
      skills: [
        { name: "Global Environmental Management", level: 91 },
        { name: "Hazardous Waste Management", level: 90 },
        { name: "Industrial Biotechnology", level: 91 },
        { name: "Household Water Treatment", level: 95 },
        { name: "Environmental Monitoring", level: 87 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across laboratory techniques, renewable energy, and environmental technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 hover-lift">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-primary">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center space-y-2 group">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Water Treatment</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Recycle className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Waste Valorization</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Data Analysis</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group">
              <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                <Database className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Research Methods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
