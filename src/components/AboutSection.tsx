import { User, Code, Palette, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-dark">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <p className="text-lg text-text-primary leading-relaxed">
              Hi, I'm Komal Tamma, a passionate UI/UX Designer with{' '}
              <span className="font-semibold text-primary">2.5 years of professional experience</span>{' '}
              in creating modern websites, mobile apps, and digital designs. 
            </p>

            <p className="text-lg text-text-primary leading-relaxed">
              Skilled in HTML, CSS, Bootstrap, Tailwind, GitHub, and tools like Figma, Canva, 
              Photoshop, Illustrator. I also explore AI platforms like MidJourney, Lovable, 
              Cursor, and Gamma to push creative boundaries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2.5+</div>
                <div className="text-text-primary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-text-primary">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-dark">Designer & Developer</h3>
                      <p className="text-text-primary/60">Creative Problem Solver</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Palette className="w-5 h-5 text-cyan-bright" />
                      <span className="text-text-primary">Visual Design Excellence</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Code className="w-5 h-5 text-blue-deep" />
                      <span className="text-text-primary">Frontend Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Lightbulb className="w-5 h-5 text-cyan-bright" />
                      <span className="text-text-primary">AI-Powered Innovation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-soft rounded-2xl shadow-lg animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-bright/20 rounded-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;