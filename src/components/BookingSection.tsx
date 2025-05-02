
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface BookingSectionProps {
  isRtl: boolean;
  translations: {
    bookingTitle: string;
    bookingSubtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    projectTypeLabel: string;
    messageLabel: string;
    submitButton: string;
    projectTypes: {
      residential: string;
      commercial: string;
      consultation: string;
      other: string;
    };
    successMessage: string;
  };
}

const BookingSection = ({ isRtl, translations }: BookingSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: translations.successMessage,
        description: `${translations.nameLabel}: ${formData.name}`,
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      id="booking" 
      className="section-padding bg-studio-gold/10"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium">{translations.bookingTitle}</h2>
            <p className="mt-4 text-gray-600">{translations.bookingSubtitle}</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {translations.nameLabel}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {translations.emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  {translations.phoneLabel}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium">
                  {translations.projectTypeLabel}
                </label>
                <Select 
                  value={formData.projectType} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder={translations.projectTypeLabel} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">{translations.projectTypes.residential}</SelectItem>
                    <SelectItem value="commercial">{translations.projectTypes.commercial}</SelectItem>
                    <SelectItem value="consultation">{translations.projectTypes.consultation}</SelectItem>
                    <SelectItem value="other">{translations.projectTypes.other}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {translations.messageLabel}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-studio-gold hover:bg-studio-copper"
              disabled={isSubmitting}
            >
              {isSubmitting ? "..." : translations.submitButton}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
