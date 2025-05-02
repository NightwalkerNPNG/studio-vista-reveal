
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  nameAr?: string;
  role?: string;
  roleAr?: string;
  quote: string;
  quoteAr?: string;
  image?: string;
}

interface TestimonialsSectionProps {
  isRtl: boolean;
  translations: {
    testimonialsTitle: string;
    testimonialsSubtitle: string;
  };
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ isRtl, translations, testimonials }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  // Auto-slide
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [testimonials.length]);

  // Reset timer on manual navigation
  const handleNavigation = (callback: () => void) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    callback();
    
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const activeTestimonial = testimonials[activeIndex];

  // Use Arabic content if available and in RTL mode
  const displayName = isRtl && activeTestimonial.nameAr ? activeTestimonial.nameAr : activeTestimonial.name;
  const displayRole = isRtl && activeTestimonial.roleAr ? activeTestimonial.roleAr : activeTestimonial.role;
  const displayQuote = isRtl && activeTestimonial.quoteAr ? activeTestimonial.quoteAr : activeTestimonial.quote;

  return (
    <section 
      id="testimonials" 
      className="section-padding"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium">{translations.testimonialsTitle}</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">{translations.testimonialsSubtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial */}
          <div className="bg-white p-10 shadow-sm text-center">
            <div className="mb-6">
              <div className="relative w-16 h-16 mx-auto overflow-hidden rounded-full">
                {activeTestimonial.image ? (
                  <img
                    src={activeTestimonial.image}
                    alt={displayName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-studio-stone flex items-center justify-center text-studio-charcoal">
                    {displayName.charAt(0)}
                  </div>
                )}
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl italic font-playfair mb-6">
              "{displayQuote}"
            </blockquote>
            
            <div className="text-studio-charcoal">
              <p className="font-medium">{displayName}</p>
              {displayRole && (
                <p className="text-sm text-gray-500">{displayRole}</p>
              )}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => handleNavigation(prevSlide)}
              className="bg-white hover:bg-studio-stone"
            >
              <ChevronLeft size={20} />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === activeIndex ? "bg-studio-gold w-4" : "bg-gray-300"
                  }`}
                  onClick={() => {
                    handleNavigation(() => setActiveIndex(idx));
                  }}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => handleNavigation(nextSlide)}
              className="bg-white hover:bg-studio-stone"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
