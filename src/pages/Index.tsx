import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EducationSection from "@/components/EducationSection"; // Add this line

const Index = () => {
  useEffect(() => {
    document.title = "Zaeem Ansari | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
