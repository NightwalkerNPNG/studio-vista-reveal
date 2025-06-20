
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  titleAr?: string;
  location: string;
  locationAr?: string;
  year: string;
  style: string;
  styleAr?: string;
  image: string;
  images: string[];
}

interface ProjectsSectionProps {
  isRtl: boolean;
  translations: {
    projectsTitle: string;
    projectsSubtitle: string;
    viewProject: string;
    locationLabel: string;
    styleLabel: string;
    yearLabel: string;
  };
  projects: Project[];
}

const ProjectsSection = ({ isRtl, translations, projects }: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section 
      id="projects" 
      className="section-padding"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium">{translations.projectsTitle}</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">{translations.projectsSubtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            // Use Arabic content if available and in RTL mode
            const displayTitle = isRtl && project.titleAr ? project.titleAr : project.title;
            const displayLocation = isRtl && project.locationAr ? project.locationAr : project.location;
            const displayStyle = isRtl && project.styleAr ? project.styleAr : project.style;

            return (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                data-scroll
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div onClick={() => setSelectedProject(project)}>
                      <div className="overflow-hidden">
                        <AspectRatio ratio={3/4}>
                          <img
                            src={project.image}
                            alt={displayTitle}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </AspectRatio>
                      </div>
                      <div className="mt-4 space-y-1">
                        <h3 className="font-playfair text-xl">{displayTitle}</h3>
                        <p className="text-sm text-gray-600">
                          {translations.locationLabel}: {displayLocation}
                        </p>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>{translations.styleLabel}: {displayStyle}</span>
                          <span>{translations.yearLabel}: {project.year}</span>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
                    {selectedProject && (
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-[500px]">
                          <img
                            src={selectedProject.image}
                            alt={isRtl && selectedProject.titleAr ? selectedProject.titleAr : selectedProject.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 space-y-4">
                          <h3 className="font-playfair text-2xl">
                            {isRtl && selectedProject.titleAr ? selectedProject.titleAr : selectedProject.title}
                          </h3>
                          <div className="space-y-2 text-gray-700">
                            <p>
                              <strong>{translations.locationLabel}:</strong> 
                              {isRtl && selectedProject.locationAr ? selectedProject.locationAr : selectedProject.location}
                            </p>
                            <p>
                              <strong>{translations.styleLabel}:</strong>
                              {isRtl && selectedProject.styleAr ? selectedProject.styleAr : selectedProject.style}
                            </p>
                            <p><strong>{translations.yearLabel}:</strong> {selectedProject.year}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mt-6">
                            {selectedProject.images.slice(0, 4).map((img, idx) => (
                              <div key={idx} className="aspect-square overflow-hidden">
                                <img 
                                  src={img} 
                                  alt={`${isRtl && selectedProject.titleAr ? selectedProject.titleAr : selectedProject.title} detail ${idx + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
