
import { ArrowRight, Leaf, Zap, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-eco-green rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-eco-lightgreen rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-eco-yellow rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-eco-blue rounded-full animate-float"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/12 animate-float">
          <Leaf className="w-8 h-8 text-eco-green/30" />
        </div>
        <div className="absolute top-1/3 right-1/12 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-6 h-6 text-eco-yellow/30" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-float" style={{ animationDelay: '2s' }}>
          <Recycle className="w-7 h-7 text-eco-lightgreen/30" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            <span className="block text-foreground">Sanjay</span>
            <span className="block gradient-text">S</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
              Transforming Waste into Clean Energy & Sustainable Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Biotechnology postgraduate focused on bioenergy, environmental sustainability, 
              and waste valorization. Passionate about using science to engineer greener solutions for tomorrow.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium">Biotech Student</span> • 
              <span className="font-medium"> Certifications in Bioenergy & Environmental Technology</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full"
            >
              Discover My Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-full"
            >
              Work With Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
