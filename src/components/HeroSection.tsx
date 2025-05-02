
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  isRtl: boolean;
  translations: {
    studioName: string;
    tagline: string;
    cta: string;
    discoverMore: string;
  };
}

const HeroSection = ({ isRtl, translations }: HeroSectionProps) => {
  return (
    <section 
      id="hero"
      className="h-screen relative overflow-hidden bg-studio-charcoal"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-studio-charcoal/40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-playfair font-medium tracking-wide opacity-0 animate-fade-in">
          {translations.studioName}
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-xl opacity-0 animate-fade-in animate-delay-200">
          {translations.tagline}
        </p>
        
        <Button 
          size="lg"
          className="mt-10 bg-studio-gold hover:bg-studio-copper text-white opacity-0 animate-fade-in animate-delay-300"
        >
          {translations.cta}
        </Button>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 opacity-0 animate-fade-in animate-delay-500">
          <a 
            href="#about" 
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">{translations.discoverMore}</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
