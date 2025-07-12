import { ExternalLink, Github, Lock, Database, Brain, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
        "User role differentiation for Admin and Students"
      ],
      github: "https://github.com/zaeem-ansari/face-recognition-attendance",
      status: "Completed"
    },
    
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 p-2 rounded-full">
                    {project.icon}
                  </div>
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <p className="text-sm text-gray-500">{project.status}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
