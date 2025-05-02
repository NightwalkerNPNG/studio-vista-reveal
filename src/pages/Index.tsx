
import { useState, useEffect } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PressSection from "@/components/PressSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import { en } from "@/translations/en";
import { ar } from "@/translations/ar";
import { projects } from "@/data/projectsData";
import { testimonials } from "@/data/testimonialsData";
import { press } from "@/data/pressData";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const translations = language === "en" ? en : ar;

  // Update the document direction and add smooth scrolling based on the selected language
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [language]);
  
  const handleLanguageToggle = (newLanguage: "en" | "ar") => {
    setLanguage(newLanguage);
  };

  const isRtl = language === "ar";

  return (
    <div className={`min-h-screen ${isRtl ? "font-inter rtl" : "font-inter"}`}>
      <LanguageToggle onToggle={handleLanguageToggle} currentLanguage={language} />
      <Navbar isRtl={isRtl} translations={translations.navigation} />
      
      <main>
        <HeroSection isRtl={isRtl} translations={translations.hero} />
        <AboutSection isRtl={isRtl} translations={translations.about} />
        <ProjectsSection 
          isRtl={isRtl} 
          translations={translations.projects} 
          projects={projects} 
        />
        <ServicesSection isRtl={isRtl} translations={translations.services} />
        <TestimonialsSection 
          isRtl={isRtl} 
          translations={translations.testimonials} 
          testimonials={testimonials} 
        />
        <PressSection 
          isRtl={isRtl} 
          translations={translations.press} 
          press={press} 
        />
        <BookingSection isRtl={isRtl} translations={translations.booking} />
        <ContactSection isRtl={isRtl} translations={translations.contact} />
      </main>
    </div>
  );
};

export default Index;
