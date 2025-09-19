import { useState, useEffect } from 'react';
import { Button } from './button';
import { Phone, Linkedin, Github } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-cyan-bright rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">KT</span>
            </div>
            <span className="font-bold text-xl text-navy-dark">Komal Tamma</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-text-primary hover:text-cyan-bright transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-text-primary hover:text-cyan-bright transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-text-primary hover:text-cyan-bright transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-text-primary hover:text-cyan-bright transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text-primary hover:text-cyan-bright transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Contact Info & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-text-primary text-sm">
              <Phone className="w-4 h-4 mr-2" />
              <span>Available for projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/komal-tamma-557722273', '_blank')}
                className="p-2 text-cyan-bright hover:bg-cyan-bright hover:text-white rounded-full transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-2 text-cyan-bright hover:bg-cyan-bright hover:text-white rounded-full transition-colors">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;