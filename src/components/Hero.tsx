
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate color intensity based on scroll (0 = dark, 1 = full color)
  const colorIntensity = Math.min(scrollY / 300, 1);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <img 
            src="/lovable-uploads/fe7e051c-5bec-4146-bfe7-b6dce024232c.png"
            alt="Sanjay S - Biotechnology Professional"
            className="w-full h-full object-cover object-center animate-fade-in transition-all duration-1000"
            style={{
              filter: `grayscale(${1 - colorIntensity}) brightness(${0.3 + colorIntensity * 0.7}) saturate(${0.5 + colorIntensity * 0.5})`,
            }}
          />
          {/* Dynamic Overlay that fades based on scroll */}
          <div 
            className="absolute inset-0 bg-black transition-opacity duration-1000"
            style={{ opacity: 0.6 - (colorIntensity * 0.3) }}
          ></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl w-full px-8">
        <div className="max-w-2xl">
          {/* Main Content */}
          <div className="space-y-6 text-white animate-fade-in">
            <div className="space-y-4">
              <h1 
                className="text-6xl md:text-8xl font-heading font-bold leading-tight animate-slide-in-right transition-all duration-1000"
                style={{ 
                  textShadow: `0 0 ${20 + colorIntensity * 30}px rgba(34, 197, 94, ${0.3 + colorIntensity * 0.4})`,
                  color: `rgba(255, 255, 255, ${0.9 + colorIntensity * 0.1})`
                }}
              >
                Sanjay S
              </h1>
              <div className="space-y-2">
                <p 
                  className="text-xl md:text-2xl font-medium border-b-2 border-primary inline-block pb-1 animate-fade-in transition-all duration-1000"
                  style={{
                    borderColor: `rgba(34, 197, 94, ${0.8 + colorIntensity * 0.2})`,
                    color: `rgba(255, 255, 255, ${0.8 + colorIntensity * 0.2})`
                  }}
                >
                  I'm Biotechnology Student
                </p>
              </div>
            </div>

            <div className="max-w-xl">
              <p 
                className="text-lg md:text-xl leading-relaxed transition-all duration-1000"
                style={{ color: `rgba(255, 255, 255, ${0.85 + colorIntensity * 0.15})` }}
              >
                Welcome! I'm a second-year M.Tech Biotechnology student with a strong interest in clean energy, 
                waste-to-fuel technology, and sustainable bioenergy systems.
              </p>
            </div>

            {/* Contact Info */}
            <div 
              className="flex flex-col sm:flex-row gap-4 text-sm transition-all duration-1000"
              style={{ color: `rgba(255, 255, 255, ${0.75 + colorIntensity * 0.15})` }}
            >
              <div className="flex items-center gap-2">
                <MapPin 
                  className="w-4 h-4 transition-all duration-1000" 
                  style={{ color: `rgba(34, 197, 94, ${0.9 + colorIntensity * 0.1})` }}
                />
                <span>Anakaputhur, Chennai</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail 
                  className="w-4 h-4 transition-all duration-1000" 
                  style={{ color: `rgba(34, 197, 94, ${0.9 + colorIntensity * 0.1})` }}
                />
                <span>sanjaysenthil62@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone 
                  className="w-4 h-4 transition-all duration-1000" 
                  style={{ color: `rgba(34, 197, 94, ${0.9 + colorIntensity * 0.1})` }}
                />
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
