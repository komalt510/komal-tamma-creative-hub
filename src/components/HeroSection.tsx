import { Button } from './ui/button';
import { ExternalLink, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-navy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-soft"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-bright rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-soft rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative container-custom flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full pt-16">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Komal
                <span className="block gradient-text bg-gradient-primary bg-clip-text text-transparent">
                  Tamma
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-soft">
                UI/UX Designer | Crafting Websites, Mobile Apps & Digital Experiences
              </h2>
            </div>

            <p className="text-lg md:text-xl text-blue-soft/90 max-w-2xl leading-relaxed">
              I design intuitive, engaging, and impactful digital experiences that blend creativity with usability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="text-base px-8 py-6"
              >
                View My Work
                <ArrowDown className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-base px-8 py-6 border-white text-white hover:bg-white hover:text-navy-dark"
                onClick={() => window.open('https://www.linkedin.com/in/komal-tamma-557722273', '_blank')}
              >
                Connect on LinkedIn
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={heroImage} 
                alt="UI/UX Designer workspace with modern design tools and interfaces"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-hover animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-cyan-bright rounded-full"></div>
                <span className="text-navy-dark font-medium">2.5+ Years</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-hover animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-deep rounded-full"></div>
                <span className="text-navy-dark font-medium">UI/UX Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;