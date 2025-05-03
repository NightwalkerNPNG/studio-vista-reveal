
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isRtl: boolean;
  translations: {
    home: string;
    about: string;
    projects: string;
    services: string;
    testimonials: string;
    contact: string;
    book: string;
  };
}

const Navbar = ({ isRtl, translations }: NavbarProps) => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { text: translations.home, href: "#hero", id: "hero" },
    { text: translations.about, href: "#about", id: "about" },
    { text: translations.projects, href: "#projects", id: "projects" },
    { text: translations.services, href: "#services", id: "services" },
    { text: translations.testimonials, href: "#testimonials", id: "testimonials" },
    { text: translations.contact, href: "#contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        scroll ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="font-playfair text-2xl font-medium tracking-wide">STUDIO VISTA</div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center">
          <div className={`flex items-center ${isRtl ? "space-x-reverse space-x-8" : "space-x-8"}`}>
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-sm hover:text-studio-gold transition-colors px-1"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.text}
              </a>
            ))}
          </div>
          <Button 
            variant="default" 
            className={`${isRtl ? "mr-6" : "ml-6"} bg-studio-gold hover:bg-studio-copper text-white`}
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {translations.book}
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <nav 
        className={`lg:hidden absolute w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[500px] opacity-100 shadow-lg" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="text-base py-2 hover:text-studio-gold transition-colors"
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.text}
            </a>
          ))}
          <Button 
            variant="default" 
            className="mt-4 bg-studio-gold hover:bg-studio-copper text-white"
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
          >
            {translations.book}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
