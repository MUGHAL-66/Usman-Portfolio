import { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Server, Database, Briefcase, ShoppingCart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const skillCards = [
  {
    id: 1,
    icon: Code,
    title: "Frontend & UI/UX",
    skills: ["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "Figma", "Adobe XD"]
  },
  {
    id: 2,
    icon: Server,
    title: "Backend & AI",
    skills: ["Node.js", "Python", "FastAPI", "OpenAI", "TensorFlow", "Docker", "AWS", "GraphQL"]
  },
  {
    id: 3,
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Redis", "Firebase", "Prisma", "SQL", "NoSQL"]
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Business Skills",
    skills: ["SaaS Development", "SEO Optimization", "Stripe Integration", "Analytics", "Project Management", "Agile"]
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: "Shopify Development",
    skills: ["Liquid", "Shopify Plus", "App Development", "Theme Development", "API Integration", "Performance Optimization"]
  }
];

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % skillCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + skillCards.length) % skillCards.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % skillCards.length;
      cards.push(skillCards[index]);
    }
    return cards;
  };

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl luxury-text-gradient">
            Skills & Expertise
          </h2>
          
          {/* Carousel Container */}
          <div className="relative">
            <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 px-2">
              {/* Previous Button - Hidden on mobile */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Cards Container */}
              <div className="w-full sm:w-auto overflow-x-auto py-4 sm:py-0">
                <div className="flex space-x-4 sm:space-x-6 px-2 sm:px-0" style={{ minWidth: 'max-content' }}>
                  {getVisibleCards().map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                      <Card
                        key={card.id}
                        className={`bg-card border-white/10 p-4 sm:p-6 w-[280px] sm:w-80 flex-shrink-0 transition-all duration-300 transform hover:scale-105 ${
                          index === 1 ? 'scale-105 border-primary/30' : 'scale-100'
                        }`}
                      >
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="p-3 bg-primary/20 rounded-full">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        
                        <h3 className="text-xl text-white">
                          {card.title}
                        </h3>
                        
                        <div className="flex flex-wrap gap-2 justify-center">
                          {card.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Next Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {skillCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}