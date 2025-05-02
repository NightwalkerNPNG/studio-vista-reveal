
interface Press {
  id: number;
  name: string;
  logo: string;
  quote?: string;
}

interface PressSectionProps {
  isRtl: boolean;
  translations: {
    pressTitle: string;
    pressSubtitle: string;
  };
  press: Press[];
}

const PressSection = ({ isRtl, translations, press }: PressSectionProps) => {
  return (
    <section 
      id="press" 
      className="section-padding bg-studio-charcoal text-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium">{translations.pressTitle}</h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">{translations.pressSubtitle}</p>
        </div>
        
        {/* Featured Quote (if exists) */}
        {press.some(item => item.quote) && (
          <div className="max-w-3xl mx-auto mb-16">
            <blockquote className="text-xl md:text-2xl italic font-playfair text-center">
              "{press.find(item => item.quote)?.quote}"
            </blockquote>
          </div>
        )}
        
        {/* Publications */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
          {press.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-center"
              data-scroll
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-16 max-w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
