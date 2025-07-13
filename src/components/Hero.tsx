
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-muted/10">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <img 
            src="/lovable-uploads/36de925f-1c96-458e-b051-2e59a77e6ce9.png"
            alt="Sanjay S - Biotechnology Professional"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('bg-gradient-to-br', 'from-muted/20', 'to-muted/5');
            }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl w-full px-8">
        <div className="max-w-2xl">
          {/* Main Content */}
          <div className="space-y-6 text-white">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-heading font-bold leading-tight">
                Sanjay S
              </h1>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-medium border-b-2 border-primary inline-block pb-1">
                  I'm Biotechnology Student
                </p>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                Welcome! I'm a second-year M.Tech Biotechnology student with a strong interest in clean energy, 
                waste-to-fuel technology, and sustainable bioenergy systems.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Anakaputhur, Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>sanjaysenthil62@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9080553408</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 rounded-full text-lg"
              >
                About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white font-medium px-8 py-4 rounded-full text-lg backdrop-blur-sm"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
