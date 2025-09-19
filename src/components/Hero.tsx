import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl luxury-float"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl luxury-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full luxury-pulse-glow"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full luxury-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4 text-left">
              {/* First line - Greeting with name */}
              <div className="hero-text-reveal">
                <p className="text-sm md:text-base text-muted-foreground font-normal">
                  Asslam-o-Alaikum I'm Usman Hassan
                </p>
              </div>

              {/* Second line - Roles */}
              <div
                className="hero-text-reveal"
                style={{ animationDelay: "0.3s" }}
              >
                <h1
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    background:
                      "linear-gradient(90deg, #ffffff, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Full Stack Developer | Shopify Expert | AI
                  Engineer
                </h1>
              </div>

              <div
                className="hero-text-reveal"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
                  I'm a Full-Stack Developer, Shopify Expert, and AI Engineer with a passion for building scalable, user-friendly, and revenue-driven digital solutions. With expertise in modern frameworks and AI integration, I help businesses transform ideas into impactful products
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 hero-text-reveal"
              style={{ animationDelay: "0.9s" }}
            >
              <Button
                className="bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 luxury-glow text-lg"
                size="lg"
              >
                Hire Me
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black px-8 py-4 rounded-lg transition-all duration-300 text-lg"
                size="lg"
              >
                <a
                  href="#projects"
                  className="flex items-center"
                >
                  View Projects
                  <Download className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Photo */}
          <div
            className="relative hero-text-reveal"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative w-full max-w-md mx-auto hero-image-float">
              {/* Animated gradient border */}
              <div className="absolute inset-0 hero-gradient-border rounded-2xl p-1">
                <div className="w-full h-full bg-black rounded-2xl"></div>
              </div>

             {/* Image */}
            <div className="relative z-10 p-4">
              <ImageWithFallback
                src={`${import.meta.env.BASE_URL || ''}/usman.jpeg`}
                alt="Usman Hassan - Full Stack Developer"
                className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>


              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl luxury-float"></div>
              <div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/10 rounded-full blur-lg luxury-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/4 -right-8 w-16 h-16 bg-primary/10 rounded-full blur-lg luxury-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-1/4 -left-8 w-12 h-12 bg-white/5 rounded-full blur-md luxury-float"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}