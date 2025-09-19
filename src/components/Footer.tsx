import { Heart, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Komal Tamma</h3>
            <p className="text-blue-soft">
              UI/UX Designer crafting beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/komal-tamma-557722273', '_blank')}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-gradient-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('mailto:[your-email]', '_blank')}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-gradient-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('https://github.com/komal-tamma', '_blank')}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-gradient-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map(link => (
                <button 
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-blue-soft hover:text-cyan-bright transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <div className="space-y-2 text-blue-soft">
              <p>Available for freelance projects</p>
              <p>Remote work preferred</p>
              <p>Response within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-soft text-sm">
            © 2024 Komal Tamma. All rights reserved.
          </p>
          <p className="text-blue-soft text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-cyan-bright fill-current" />
            <span>& creativity</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;