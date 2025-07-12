import { Code, Database, Server, Wrench, Brain, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "C/C++", "Java (Basics)", "Python", "SQL"],
      color: "primary"
    },
    {
      title: "Backend Frameworks",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
      color: "accent"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "Mongoose ODM", "SQLite", "Database Design"],
      color: "neon-cyan"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git & GitHub", "VS Code", "Postman", "npm/yarn"],
      color: "neon-purple"
    },
    
    {
      title: "Analytics & Visualization",
      icon: <BarChart className="h-6 w-6" />,
      skills: ["Power BI", "Dashboard Creation", "Business Intelligence"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/30 text-primary bg-primary/5",
      accent: "border-accent/30 text-accent bg-accent/5",
      "neon-cyan": "border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5",
      "neon-purple": "border-neon-purple/30 text-neon-purple bg-neon-purple/5"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10",
      accent: "text-accent bg-accent/10",
      "neon-cyan": "text-neon-cyan bg-neon-cyan/10",
      "neon-purple": "text-neon-purple bg-neon-purple/10"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My technical toolkit for building robust backend systems and solving complex problems
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`card-hover bg-card/50 backdrop-blur-sm ${getColorClasses(category.color)}`}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getIconColorClasses(category.color)}`}>
                      {category.icon}
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className={`text-xs font-medium ${getColorClasses(category.color)}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;