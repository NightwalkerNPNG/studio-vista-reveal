
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  onToggle: (language: "en" | "ar") => void;
  currentLanguage: "en" | "ar";
}

const LanguageToggle = ({ onToggle, currentLanguage }: LanguageToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => onToggle(currentLanguage === "en" ? "ar" : "en")}
        className="bg-white/80 backdrop-blur-sm hover:bg-white"
      >
        <Globe size={16} className="mr-2" />
        {currentLanguage === "en" ? "العربية" : "English"}
      </Button>
    </div>
  );
};

export default LanguageToggle;
