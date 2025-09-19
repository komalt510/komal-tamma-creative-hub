import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import fashionAppImage from '@/assets/project-fashion-app.jpg';
import socialMediaImage from '@/assets/project-social-media.jpg';
import portfolioImage from '@/assets/project-portfolio.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Website UI",
      description: "Modern, responsive e-commerce platform with intuitive user experience and seamless checkout flow.",
      image: ecommerceImage,
      tags: ["UI/UX", "Web Design", "E-commerce"],
      featured: true
    },
    {
      title: "Fashion Mobile App",
      description: "Elegant mobile app design for fashion retail with personalized recommendations and social features.",
      image: fashionAppImage,
      tags: ["Mobile App", "Fashion", "iOS/Android"],
      featured: true
    },
    {
      title: "Social Media Creatives & Videos",
      description: "Engaging visual content and video designs for social media campaigns across multiple platforms.",
      image: socialMediaImage,
      tags: ["Social Media", "Video", "Branding"],
      featured: false
    },
    {
      title: "Personal Portfolio Website",
      description: "Clean, professional portfolio showcasing design work with smooth animations and responsive layout.",
      image: portfolioImage,
      tags: ["Portfolio", "Web Design", "Personal Brand"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-lg text-text-primary max-w-2xl mx-auto">
            A selection of my recent work spanning web design, mobile apps, and digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Projects */}
          {projects
            .filter(project => project.featured)
            .map((project, index) => (
              <div 
                key={project.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button variant="hero" size="sm">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-navy-dark group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-primary/80 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-muted text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter(project => !project.featured)
            .map((project, index) => (
              <div 
                key={project.title}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-navy-dark">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold text-navy-dark">
                    {project.title}
                  </h3>
                  <p className="text-text-primary/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-muted text-primary px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button variant="portfolio" size="lg">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
