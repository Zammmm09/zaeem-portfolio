import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "zaeem.ansari@email.com",
      link: "mailto:zaeem.ansari@email.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "https://github.com/zaeem-ansari",
      color: "hover:text-foreground"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn", 
      url: "https://linkedin.com/in/zaeem-ansari",
      color: "hover:text-blue-400"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Schedule Call",
      url: "https://calendly.com/zaeem-ansari",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss opportunities, collaborate on projects, or just have a chat about tech? I'd love to hear from you!
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-hover bg-card/50 border-primary/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary/60"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary/60"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary/60"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background/50 border-primary/20 focus:border-primary/60 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="card-hover bg-card/50 border-primary/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-colors">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="card-hover bg-card/50 border-primary/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted/20 transition-all duration-300 group ${social.color}`}
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                          {social.icon}
                        </div>
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick CTA */}
              <Card className="card-hover bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Looking for a Backend Developer?</h3>
                  <p className="text-muted-foreground mb-4">
                    I'm available for freelance projects and full-time opportunities.
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => window.open('mailto:zaeem.ansari@email.com?subject=Job Opportunity', '_blank')}
                  >
                    Hire Me
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;