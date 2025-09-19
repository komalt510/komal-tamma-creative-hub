import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-16 pb-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-10">
        <div className="w-full h-full grid grid-cols-6 gap-1">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-cyan-bright rounded-full opacity-60"></div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-32 left-20 text-6xl opacity-20">
        ⭐
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Image with Floating Tags */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-navy-dark">
              <img 
                src={heroImage} 
                alt="UI/UX Designer Komal Tamma workspace with modern design tools and interfaces"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating Service Tags */}
            <div className="absolute top-8 -left-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm font-medium">Website Design</span>
              </div>
            </div>
            
            <div className="absolute top-20 -left-8 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm font-medium">Mobile App Design</span>
              </div>
            </div>
            
            <div className="absolute top-32 -left-4 bg-cyan-bright text-white px-4 py-2 rounded-full shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span className="text-sm font-medium">UI/UX Design</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-dark leading-tight">
                UI/UX Designer
                <span className="block text-navy-dark">
                  Komal Tamma
                </span>
              </h1>
              <p className="text-xl text-text-primary leading-relaxed">
                I design intuitive, engaging, and impactful digital experiences that blend creativity with usability.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-bright" />
                <span className="text-text-primary">2.5+ years professional experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-bright" />
                <span className="text-text-primary">Expert in modern design tools</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-bright" />
                <span className="text-text-primary">AI-powered design innovation</span>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-cyan-bright hover:bg-cyan-bright/90 text-white px-8 py-4 text-lg font-medium"
              >
                Get a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;