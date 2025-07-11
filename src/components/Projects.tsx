
import { ExternalLink, Github, Beaker, Dna, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AGS Bioreactor Fabrication",
      description: "Design and fabrication of Aerobic Granular Sludge bioreactor for enhanced wastewater treatment efficiency using zeolite-assisted processes.",
      category: "Biotechnology",
      icon: Beaker,
      tech: ["Bioreactor Design", "Zeolite Technology", "Wastewater Treatment"],
      status: "Completed",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Phylogenetic Analysis of ACE-2 in COVID",
      description: "Comprehensive phylogenetic study of ACE-2 receptor variations and their implications in COVID-19 susceptibility and treatment strategies.",
      category: "Bioinformatics",
      icon: Dna,
      tech: ["Phylogenetic Analysis", "Protein Modeling", "Data Analysis"],
      status: "Published",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Waste-Based Sustainable Dress",
      description: "Innovative project creating sustainable fashion materials from organic waste, presented at VIT conference in 2023.",
      category: "Sustainability",
      icon: Recycle,
      tech: ["Waste Valorization", "Sustainable Materials", "Circular Economy"],
      status: "Presented",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative research projects driving sustainable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden hover-lift group">
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <project.icon className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Published' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-secondary text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
