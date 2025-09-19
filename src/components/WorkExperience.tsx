import { useState, useEffect, useRef } from 'react';
import { Building, Calendar, MapPin, Star, Trophy, Sparkles, Briefcase, ArrowUpRight } from 'lucide-react';
import { Card } from './ui/card';

const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    description: "Developed full-stack web applications with role-based dashboards. Worked on frontends with Angular/React and backends with Node.js/Express. Integrated AI/ML for recommendations and built REST APIs.",
    achievements: ["Delivered portfolio sites, dashboards & apps", "Implemented AI-powered features", "End-to-end full-stack solutions"],
    technologies: ["React", "Angular", "Node.js", "MongoDB", "Python"]
  },
  {
    id: 2,
    title: "Remote Shopify Developer",
    company: "Freelance",
    duration: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    description: "Built and delivered complete Shopify stores for clients across multiple niches. Customized themes, integrated payment gateways, and optimized SEO.",
    achievements: ["10+ Shopify stores delivered", "100% client satisfaction", "Conversion-focused design"],
    technologies: ["Shopify", "Liquid", "API Integration"]
  },
  {
    id: 3,
    title: "Graphic Designer",
    company: "Freelance",
    duration: "2024 - Present",
    location: "Remote",
    type: "Freelance",
    status: "Current",
    description: "Created social media graphics, product mockups, and logos. Enhanced branding for clients through visual content.",
    achievements: ["20+ design projects delivered", "Increased engagement with visuals", "Brand identity creation"],
    technologies: ["Canva", "Adobe Express"]
  },
  {
    id: 4,
    title: "Shopify Developer (Internship)",
    company: "AU Softs",
    duration: "March 2025 - May 2025",
    location: "Gujrat | Remote",
    type: "Internship",
    status: "Upcoming",
    description: "Assisted in Shopify store setup and theme customization. Worked on product uploads, Liquid edits, and store optimization.",
    achievements: ["Delivered 2+ client projects", "Improved store performance", "Hands-on Shopify Liquid"],
    technologies: ["Shopify", "Liquid", "JavaScript"]
  },
  {
    id: 5,
    title: "Social Media Manager",
    company: "Business Breeds",
    duration: "March 2023 - February 2025",
    location: "Lahore | Remote",
    type: "Full-time",
    status: "Completed",
    description: "Managed and scaled multiple social media platforms. Designed engaging posts and ad campaigns to grow brand presence. Analyzed insights to improve reach and engagement.",
    achievements: ["Increased engagement by 50%+", "Consistent brand growth", "Multi-platform management"],
    technologies: ["Canva", "Meta Ads", "Analytics Tools"]
  }
];

export function WorkExperience() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              if (!prev.includes(cardIndex)) {
                return [...prev, cardIndex].sort((a, b) => a - b);
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-4 luxury-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
              <Briefcase className="h-6 w-6 text-primary" />
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl luxury-text-gradient mb-4">
              Professional Journey
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A curated collection of my professional experiences and achievements in the world of technology
            </p>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                data-index={index}
                className={`group relative transition-all duration-700 transform ${
                  visibleCards.includes(index)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card with Luxury Design */}
                <Card className="relative h-full bg-gradient-to-br from-card via-card/90 to-card/70 border border-white/10 hover:border-primary/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Luxury Border Animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] top-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] bottom-0 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000 delay-200"></div>
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${
                            job.status === 'Current' ? 'bg-green-400' : 
                            job.status === 'Upcoming' ? 'bg-blue-400' : 'bg-primary'
                          }`}></div>
                          <span className={`text-xs px-2 py-1 rounded-full border ${
                            job.status === 'Current' 
                              ? 'text-green-400 border-green-400/30 bg-green-400/10' 
                              : job.status === 'Upcoming'
                              ? 'text-blue-400 border-blue-400/30 bg-blue-400/10'
                              : 'text-primary border-primary/30 bg-primary/10'
                          }`}>
                            {job.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                          {job.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                    </div>

                    {/* Company Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                        <Building className="h-4 w-4 mr-3 text-primary" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {job.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-6 flex-grow">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-white/80">Key Achievements</span>
                      </div>
                      <div className="space-y-2">
                        {job.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-2">
                            <Star className="h-3 w-3 text-primary fill-current" />
                            <span className="text-sm text-white/60">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-white/80">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-200"></div>
              </div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <div className="flex items-center justify-center mt-16 luxury-fade-in">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/50"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}