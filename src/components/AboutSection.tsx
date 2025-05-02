
import { Star, BookOpen } from "lucide-react";

interface AboutSectionProps {
  isRtl: boolean;
  translations: {
    aboutTitle: string;
    aboutText: string;
    visionTitle: string;
    visionText: string;
    processTitle: string;
    processText: string;
  };
}

const AboutSection = ({ isRtl, translations }: AboutSectionProps) => {
  return (
    <section 
      id="about" 
      className="section-padding bg-studio-offwhite"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="overflow-hidden h-[500px]" data-scroll>
            <img
              src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1780"
              alt="Interior Design Studio"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* About Content */}
          <div className="space-y-6" data-scroll>
            <h2 className="text-3xl md:text-4xl font-playfair font-medium">{translations.aboutTitle}</h2>
            <p className="text-lg text-gray-700">
              {translations.aboutText}
            </p>
            
            {/* Vision & Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* Vision */}
              <div className="bg-white p-8 shadow-sm">
                <div className="mb-4 text-studio-gold">
                  <Star size={32} />
                </div>
                <h3 className="text-xl font-playfair mb-3">{translations.visionTitle}</h3>
                <p className="text-gray-700">
                  {translations.visionText}
                </p>
              </div>
              
              {/* Process */}
              <div className="bg-white p-8 shadow-sm">
                <div className="mb-4 text-studio-gold">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-playfair mb-3">{translations.processTitle}</h3>
                <p className="text-gray-700">
                  {translations.processText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
