
import { Home, Briefcase, Layout } from "lucide-react";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => (
  <div className="bg-white p-8 shadow-sm transition-transform hover:translate-y-[-5px]" data-scroll>
    <div className="text-studio-gold mb-6">{icon}</div>
    <h3 className="text-xl font-playfair mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

interface ServicesSectionProps {
  isRtl: boolean;
  translations: {
    servicesTitle: string;
    servicesSubtitle: string;
    residential: {
      title: string;
      description: string;
    };
    commercial: {
      title: string;
      description: string;
    };
    furniture: {
      title: string;
      description: string;
    };
    planning: {
      title: string;
      description: string;
    };
  };
}

const ServicesSection = ({ isRtl, translations }: ServicesSectionProps) => {
  return (
    <section 
      id="services" 
      className="section-padding bg-studio-offwhite"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium">{translations.servicesTitle}</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">{translations.servicesSubtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Service
            icon={<Home size={32} />}
            title={translations.residential.title}
            description={translations.residential.description}
          />
          
          <Service
            icon={<Briefcase size={32} />}
            title={translations.commercial.title}
            description={translations.commercial.description}
          />
          
          <Service
            icon={<Layout size={32} />}
            title={translations.furniture.title}
            description={translations.furniture.description}
          />
          
          <Service
            icon={<Layout size={32} />}
            title={translations.planning.title}
            description={translations.planning.description}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
