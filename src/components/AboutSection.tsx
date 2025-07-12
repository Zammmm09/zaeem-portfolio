import { Download, Github, Linkedin, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Backend Developer & Problem Solver</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aspiring Backend Developer with a strong foundation in Node.js, Express.js, and MongoDB. 
                  Passionate about building secure, scalable systems that solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I enjoy diving deep into system architecture, optimizing database queries, and implementing 
                  robust APIs. My experience includes building full-stack applications, working with AI/ML 
                  integration, and creating secure authentication systems.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Available for opportunities</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://github.com/zaeem-ansari', '_blank')}
                    className="flex-1"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://linkedin.com/in/zaeem-ansari', '_blank')}
                    className="flex-1"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-hover bg-card/50 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-card/50 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-card/50 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-neon-cyan mb-2">1</div>
                  <div className="text-sm text-muted-foreground">Internship</div>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-card/50 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-neon-purple mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Learning</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;