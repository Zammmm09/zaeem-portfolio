import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Oracle AI + ML with Java",
      issuer: "Oracle Academy",
      date: "2024",
      status: "Completed",
      description: "Comprehensive certification covering artificial intelligence and machine learning concepts using Java programming language.",
      skills: ["Java Programming", "AI Fundamentals", "Machine Learning", "Oracle Technologies"],
      credentialId: "ORA-AI-2024-001",
      verifyUrl: "https://drive.google.com/file/d/1otTMzTLzgcH9pWLBoypVw5RgjmeS-igE/view?usp=drivesdk"
    },
    {
      title: "Power BI Workshop Certification",
      issuer: "OfficeMaster",
      date: "2024", 
      status: "Completed",
      description: "Professional certification in Microsoft Power BI for business intelligence, data visualization, and dashboard creation.",
      skills: ["Power BI", "Data Visualization", "Business Intelligence", "Dashboard Design"],
      credentialId: "PBI-2024-002",
      verifyUrl: "https://drive.google.com/file/d/1otbn1DmdfWSnq-iAMGHHMb1GS_ZMwY8J/view?usp=drivesdk"
    },
    {
      title: "Backend Development Certification",
      issuer: "Sheriyans Coding School",
      date: "2025",
      status: "Completed",
      description: "Advanced backend development certification focusing on Node.js, Express.js, and modern server-side technologies.",
      skills: ["Node.js", "Express.js", "API Development", "Database Management"],
      credentialId: "9483ac6b",
      verifyUrl: "https://drive.google.com/file/d/1a1M3OuC3IUVxTBKtAz5XhgQlEXpnx0qC/view?usp=drivesdk"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-primary/20 text-primary border-primary/30";
      case "In Progress": return "bg-accent/20 text-accent border-accent/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle className="h-4 w-4" />;
      case "In Progress": return <Calendar className="h-4 w-4" />;
      default: return <Award className="h-4 w-4" />;
    }
  };

  return (
    <section id="certifications" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my technical expertise and commitment to continuous learning
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-1 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover bg-card/80 border-primary/20 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                        <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(cert.status)} flex items-center gap-1`}>
                      {getStatusIcon(cert.status)}
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-primary/30 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Credential Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </div>
                    
                    {cert.status === "Completed" && cert.verifyUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(cert.verifyUrl, '_blank')}
                        className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                      >
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Verify
                      </Button>
                    )}
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

export default CertificationsSection;