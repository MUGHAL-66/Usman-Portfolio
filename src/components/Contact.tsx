import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "uh.2029@gmail.com",
    href: "mailto:uh.2029@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/UsmanHassan",
    href: "https://linkedin.com/in/UsmanHassan",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@MUGHAL-66",
    href: "https://github.com/MUGHAL-66",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@scaarsandstrength",
    href: "https://instagram.com/scaarsandstrength",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl luxury-text-gradient">
              Building Smarter Digital Experiences
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Exploring opportunities as an AI Engineer /
              Full-Stack AI Developer, while collaborating on
              projects that drive innovation and create value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-card border-white/10 p-8 space-y-6">
              <h3 className="text-xl text-white text-left">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Gujrat, PAKISTAN</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+923107243590</span>
                </div>
              </div>

              <div className="space-y-4">
                {contactLinks.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-white/60">
                          {contact.label}
                        </div>
                        <div className="text-white/80 group-hover:text-primary transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="bg-card border-white/10 p-8">
              <form className="space-y-6">
                <h3 className="text-xl text-white text-left">
                  Send a Message
                </h3>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                    ></textarea>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-black py-3 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/20 to-transparent p-8 rounded-2xl border border-primary/20">
            <div className="space-y-4">
              <h3 className="text-2xl text-white">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/70">
                I'm currently available for new opportunities
                and exciting collaborations.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-black px-8 py-3 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="mailto:uh.2029@gmail.com">
                  Let's Talk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}