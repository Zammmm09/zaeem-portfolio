import { ExternalLink, Github, Lock, Database, Brain, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Khatabook – Personal Finance App",
      description: "A comprehensive full-stack personal finance management application with secure user authentication, encrypted note storage, and password-sharing capabilities.",
      icon: <DollarSign className="h-8 w-8" />,
      tech: ["Node.js", "Express.js", "MongoDB", "Tailwind CSS", "EJS", "JWT"],
      features: [
        "Secure user authentication with JWT",
        "Encrypted financial note storage",
        "Password-protected sharing system",
        "Responsive design with Tailwind CSS"
      ],
      github: "https://github.com/zaeem-ansari/khatabook",
      demo: "https://khatabook-demo.vercel.app",
      status: "Completed"
    },
    {
      title: "Face Recognition Attendance System",
      description: "AI-powered attendance management system featuring facial detection, sleep mode monitoring, and secure administrative controls for educational institutions.",
      icon: <Brain className="h-8 w-8" />,
      tech: ["Python", "OpenCV", "Face Recognition", "Tkinter", "SQLite"],
      features: [
        "Real-time facial detection and recognition",
        "Sleep mode detection for accuracy",
        "Secure admin login system",
        "Automated attendance logging"
      ],
      github: "https://github.com/zaeem-ansari/face-attendance",
      demo: null,
      status: "Completed"
    },
    {
      title: "JPMC Core Task (Virtual Internship)",
      description: "Industry-level API integration project implementing secure logic validation and best practices as part of JPMorgan Chase virtual internship program.",
      icon: <Database className="h-8 w-8" />,
      tech: ["JavaScript", "REST APIs", "JSON", "Git", "Industry Practices"],
      features: [
        "Secure API logic validation",
        "Industry-standard code practices",
        "Data processing and manipulation",
        "Version control with Git"
      ],
      github: "https://github.com/zaeem-ansari/jpmc-task",
      demo: null,
      status: "Certified"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-primary/20 text-primary border-primary/30";
      case "Certified": return "bg-accent/20 text-accent border-accent/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my backend development skills and practical problem-solving approach
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover bg-card/80 border-primary/20 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {project.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-primary/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    
                    {project.demo ? (
                      <Button
                        onClick={() => window.open(project.demo, '_blank')}
                        className="flex-1"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    ) : (
                      <Button variant="outline" disabled className="flex-1">
                        <Lock className="mr-2 h-4 w-4" />
                        Private Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://github.com/zaeem-ansari', '_blank')}
              className="px-8"
            >
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;