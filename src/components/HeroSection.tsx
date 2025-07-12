import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-hero/90 to-background/95" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-neon-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="block neon-text bg-gradient-neon bg-clip-text text-transparent animate-gradient">
              Zaeem Ansari
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium">
            Backend Developer passionate about building
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-primary font-mono mb-8">
            secure, scalable systems
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm md:text-base">
            {['Node.js', 'Express.js', 'MongoDB', 'REST APIs'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card/80 border border-primary/20 rounded-lg backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-6 text-lg font-semibold animate-glow"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-6 text-lg font-semibold border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/zaeem-ansari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 border border-primary/20 hover:border-primary/40 hover:bg-card-hover transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/zaeem-ansari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/80 border border-primary/20 hover:border-primary/40 hover:bg-card-hover transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="p-3 rounded-full bg-card/80 border border-primary/20 hover:border-primary/40 hover:bg-card-hover transition-all duration-300 group"
            >
              <Download className="h-6 w-6 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;