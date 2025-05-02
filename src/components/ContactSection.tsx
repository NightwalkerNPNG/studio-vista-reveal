
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

interface ContactSectionProps {
  isRtl: boolean;
  translations: {
    contactTitle: string;
    contactSubtitle: string;
    address: string;
    emailLabel: string;
    phoneLabel: string;
    followUs: string;
    privacyPolicy: string;
    terms: string;
    copyright: string;
  };
}

const ContactSection = ({ isRtl, translations }: ContactSectionProps) => {
  // Use Arabic phone number format when in RTL mode
  const phoneNumber = isRtl ? "+963 11 123 4567" : "+1 234 567 89";
  const emailAddress = "info@studiovista.com";
  
  return (
    <section 
      id="contact" 
      className="section-padding bg-studio-charcoal text-white"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4">{translations.contactTitle}</h2>
              <p className="text-gray-300">{translations.contactSubtitle}</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className={`mt-1 ${isRtl ? 'ml-3' : 'mr-3'} text-studio-gold`} />
                <span>{translations.address}</span>
              </div>
              
              <div className="flex items-center">
                <Phone size={20} className={isRtl ? 'ml-3' : 'mr-3'} />
                <span>{translations.phoneLabel}: <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="hover:text-studio-gold">{phoneNumber}</a></span>
              </div>
              
              <div className="flex items-center">
                <Mail size={20} className={isRtl ? 'ml-3' : 'mr-3'} />
                <span>{translations.emailLabel}: <a href={`mailto:${emailAddress}`} className="hover:text-studio-gold">{emailAddress}</a></span>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-playfair mb-4">{translations.followUs}</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-studio-gold" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white hover:text-studio-gold" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-studio-gold" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="h-[400px] bg-gray-200">
            {/* Placeholder for the map */}
            {/* In a real implementation, you'd integrate Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center bg-studio-charcoal/80 text-center">
              <div>
                <p className="text-gray-400">Map Integration</p>
                <p className="text-xs text-gray-500 mt-2">− Placeholder for Google Maps or similar −</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Studio Vista. {translations.copyright}</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-white">{translations.privacyPolicy}</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white">{translations.terms}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
