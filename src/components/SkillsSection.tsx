import { Palette, Code, Wrench, Sparkles, Monitor, Smartphone, Layers, Github, Paintbrush, Image, Figma, Wand2 } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design & UX",
      color: "text-cyan-bright",
      bgColor: "bg-cyan-bright/10",
      skills: [
        { name: "Website Design", icon: Monitor },
        { name: "Mobile App Design", icon: Smartphone }, 
        { name: "Prototyping", icon: Layers },
        { name: "Social Media Creatives", icon: Image }
      ]
    },
    {
      icon: Code,
      title: "Technical",
      color: "text-blue-deep",
      bgColor: "bg-blue-deep/10",
      skills: [
        { name: "HTML", icon: Code },
        { name: "CSS", icon: Paintbrush },
        { name: "Bootstrap", icon: Layers },
        { name: "Tailwind", icon: Palette },
        { name: "GitHub", icon: Github }
      ]
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "text-navy-dark",
      bgColor: "bg-navy-dark/10",
      skills: [
        { name: "Figma", icon: Figma },
        { name: "Canva", icon: Palette },
        { name: "Photoshop", icon: Image },
        { name: "Illustrator", icon: Paintbrush }
      ]
    },
    {
      icon: Sparkles,
      title: "AI Platforms",
      color: "text-cyan-bright",
      bgColor: "bg-cyan-bright/10",
      skills: [
        { name: "MidJourney", icon: Wand2 },
        { name: "Lovable", icon: Code },
        { name: "Cursor", icon: Monitor },
        { name: "Gamma", icon: Layers }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-lg text-text-primary max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Icon & Title */}
                <div className="text-center space-y-3">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-dark">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="bg-muted/50 rounded-lg p-3 flex items-center gap-3 transform transition-all duration-200 hover:bg-secondary/30"
                    >
                      <skill.icon className="w-4 h-4 text-primary" />
                      <span className="text-text-primary font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-semibold text-navy-dark text-center mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "User Research", "Wireframing", "Information Architecture", 
              "Responsive Design", "Version Control", "Cross-platform Design",
              "Accessibility", "Design Systems", "Brand Identity"
            ].map((skill, index) => (
              <span 
                key={skill}
                className="bg-gradient-soft text-navy-dark px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;