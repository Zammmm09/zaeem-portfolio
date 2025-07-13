// src/components/EducationSection.tsx

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-muted/60 to-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-primary">Education</h2>
        <div className="rounded-xl border border-border bg-card/90 shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">Bachelor of Technology in Computer Science & Design</h3>
            <p className="text-sm text-muted-foreground">
              MET Bhujbal Knowledge City, Nashik
            </p>
            <p className="text-sm text-gray-500">2022 – 2026 (Expected)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
