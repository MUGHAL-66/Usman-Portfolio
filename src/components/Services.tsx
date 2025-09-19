import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Code, Bot, Cloud, Wrench, Palette, Diamond } from 'lucide-react';
import { Card } from './ui/card';
import Slider from 'react-slick';

const services = [
  {
    id: 1,
    icon: Code,
    emoji: "💻",
    title: "Web Development",
    description: "Responsive, high-performance websites and web apps built with modern frameworks for businesses that need speed and scalability.",
    features: [
      "Custom sites & dashboards using React/Next.js and Node.js",
      "REST/GraphQL APIs for real-time data exchange",
      "Shopify stores with secure payments and custom sections",
      "SEO-friendly, performance-optimized code"
    ]
  },
  {
    id: 2,
    icon: Bot,
    emoji: "🤖",
    title: "AI & Machine Learning",
    description: "Practical AI solutions that automate tasks, reveal insights, and create smarter user experiences across web or mobile platforms.",
    features: [
      "Chatbots and workflow automation powered by OpenAI",
      "Recommendation engines for products or careers",
      "Predictive analytics using TensorFlow and Python",
      "Interactive dashboards for clear data visualization"
    ]
  },
  {
    id: 3,
    icon: Cloud,
    emoji: "☁️",
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and streamlined deployments to keep applications reliable, secure, and cost-efficient.",
    features: [
      "AWS, Azure, or DigitalOcean cloud hosting setups",
      "CI/CD pipelines with Docker and GitHub Actions",
      "Horizontal scaling for high-traffic applications",
      "Database tuning and backup automation"
    ]
  },
  {
    id: 4,
    icon: Wrench,
    emoji: "🛠",
    title: "Software Solutions",
    description: "Custom tools and integrations that solve business problems, automate processes, and connect existing systems seamlessly.",
    features: [
      "Internal web or desktop applications",
      "Third-party API and payment gateway integrations",
      "Data processing and reporting automation scripts",
      "Cross-platform utilities using Python or Node.js"
    ]
  },
  {
    id: 5,
    icon: Palette,
    emoji: "🎨",
    title: "UI/UX & Performance",
    description: "User-focused design and speed optimization that deliver beautiful interfaces and smooth interactions on every device.",
    features: [
      "Mobile-first, pixel-perfect layouts with Tailwind CSS",
      "Wireframes and interactive prototypes in Figma",
      "Site speed and Core Web Vitals optimization",
      "SEO best practices for higher search rankings"
    ]
  }
];

export function Services() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const togglePlayPause = () => {
    if (sliderRef.current) {
      if (isPlaying) {
        sliderRef.current.slickPause();
      } else {
        sliderRef.current.slickPlay();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const CustomDot = ({ onClick, active }: { onClick?: () => void; active?: boolean }) => (
    <button
      onClick={onClick}
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        active ? 'bg-primary w-8' : 'bg-white/30 hover:bg-white/50'
      }`}
      aria-label="Go to slide"
    />
  );

  const CustomArrow = ({ className, style, onClick, direction }: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    direction: 'prev' | 'next';
  }) => (
    <button
      className={`${className} services-nav-btn !w-12 !h-12 !flex !items-center !justify-center !bg-white/10 hover:!bg-primary/20 !border !border-white/20 hover:!border-primary/40 !rounded-full !transition-all !duration-300 hover:!scale-110 !z-10`}
      style={{
        ...style,
        display: 'flex !important',
        [direction === 'prev' ? 'left' : 'right']: '-60px',
        top: '50%',
        transform: 'translateY(-50%)'
      }}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'prev' ? (
        <ChevronLeft className="h-5 w-5 text-white hover:text-primary transition-colors duration-300" />
      ) : (
        <ChevronRight className="h-5 w-5 text-white hover:text-primary transition-colors duration-300" />
      )}
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    customPaging: (i: number) => (
      <CustomDot active={i === currentSlide} />
    ),
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
      
      {/* Luxury background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 luxury-fade-in">
          {/* Play/Pause Toggle Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={togglePlayPause}
              className="p-3 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-full transition-all duration-300 hover:scale-110 services-nav-btn"
              aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-primary" />
              ) : (
                <Play className="h-4 w-4 text-primary ml-0.5" />
              )}
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl luxury-text-gradient">
            Services
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Carousel */}
        <div className="services-slider-container relative">
          <Slider ref={sliderRef} {...settings}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="px-4">
                  <Card className="h-full bg-gradient-to-br from-card/90 via-card/70 to-card/50 border border-white/10 hover:border-primary/30 backdrop-blur-xl transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10 services-card-glow rounded-2xl">
                    {/* Card Content */}
                    <div className="p-8 h-full flex flex-col relative overflow-hidden">
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      
                      {/* Animated Border */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-[1px] top-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>

                      <div className="relative z-10 h-full flex flex-col min-h-[500px]">
                        {/* Icon & Emoji */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="p-4 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors duration-300 services-icon-glow">
                              <IconComponent className="h-8 w-8 text-primary" />
                            </div>
                            <span className="text-3xl filter drop-shadow-lg">{service.emoji}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl text-white group-hover:text-primary transition-colors duration-300 mb-4">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {service.description}
                        </p>

                        {/* Highlights Label */}
                        <div className="mb-4">
                          <h4 className="text-sm text-primary/80 uppercase tracking-wider font-medium">
                            Highlights
                          </h4>
                          <div className="w-8 h-[1px] bg-primary/60 mt-1"></div>
                        </div>

                        {/* Features */}
                        <div className="space-y-4 flex-grow">
                          {service.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex} 
                              className="flex items-start gap-3 services-feature-reveal group/feature"
                              style={{ animationDelay: `${featureIndex * 200}ms` }}
                            >
                              <Diamond className="h-3 w-3 text-primary mt-1.5 flex-shrink-0 fill-current group-hover/feature:text-primary/80 transition-colors duration-300" />
                              <span className="text-gray-500 leading-relaxed group-hover/feature:text-gray-400 transition-colors duration-300">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Decorative Bottom Line */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="w-20 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent rounded-full services-line-glow"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}