import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/zaeem-ansari",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/zaeem-ansari",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:zaeem.ansari@email.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/20 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Zaeem <span className="text-primary">Ansari</span>
              </h3>
              <p className="text-muted-foreground max-w-xs">
                Backend Developer passionate about building secure, scalable systems that make a difference.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 hover:bg-card-hover transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <span className="group-hover:text-primary transition-colors">
                      {link.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Projects", href: "#projects" },
                  { label: "Skills", href: "#skills" },
                  { label: "Certifications", href: "#certifications" },
                  { label: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Git"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-card/50 border border-primary/20 rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-primary/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>© {currentYear} Zaeem Ansari. Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
              
              <button
                onClick={scrollToTop}
                className="px-4 py-2 text-sm bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;