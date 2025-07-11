
import { FileText, ExternalLink, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Publications = () => {
  const publications = [
    {
      title: "Studies on Enhancing Granule Formation in Aerobic Granular Sludge Treatment Method",
      authors: ["Abirami, B.", "Kevin, V.", "Padmaja, A.", "Sanjay, S.", "Devik, D.", "Balakrishnan, P."],
      conference: "International Conference on Water Resources, Ocean and Environmental Engineering",
      publisher: "Springer Nature",
      location: "Singapore",
      year: "2024",
      type: "Conference Paper",
      status: "Published"
    }
  ];

  const conferences = [
    {
      title: "International Conference on Water, Energy & Environmental Engineering",
      institution: "Sathyabama University",
      year: "2023",
      type: "ICWEE",
      role: "Presenter"
    },
    {
      title: "E-Yuva Presentation",
      institution: "Anna University",
      year: "2024",
      type: "Technical Presentation",
      role: "Presenter"
    },
    {
      title: "ICITS – SDG-focused Conference",
      institution: "Various",
      year: "2024",
      type: "International Conference",
      role: "Participant"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Publications & <span className="gradient-text">Conferences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research contributions and academic presentations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center">
              <FileText className="w-6 h-6 text-primary mr-3" />
              Publications
            </h3>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {pub.status}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {pub.year}
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 leading-tight">
                    {pub.title}
                  </h4>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start space-x-2">
                      <Users className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Authors: </span>
                        {pub.authors.join(", ")}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Conference: </span>
                      {pub.conference}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Publisher: </span>
                      {pub.publisher}, {pub.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                      {pub.type}
                    </span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Paper
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conferences */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center">
              <Users className="w-6 h-6 text-primary mr-3" />
              Conferences
            </h3>

            <div className="space-y-6">
              {conferences.map((conf, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {conf.role}
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {conf.year}
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-2">
                    {conf.title}
                  </h4>

                  <div className="space-y-1 mb-4">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Institution: </span>
                      {conf.institution}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Type: </span>
                      {conf.type}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
