import React from "react";
import { Link } from "react-router-dom";
import { Heart, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/himanshii7/",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/himanshi-puri-7a0aba223",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-xr-neon to-xr-cyber rounded-lg flex items-center justify-center group-hover:animate-cyber-pulse transition-all">
                <span className="font-bold text-black">HP</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground group-hover:text-xr-neon transition-colors">
                Himanshi Puri
              </span>
            </Link>

            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Passionate XR designer creating immersive digital experiences that
              blur the line between the physical and digital worlds.
              Specializing in VR experiences, 3D modeling, and augmented
              reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-xr-neon" />
                <a
                  href="mailto:himanshipuri07@gmail.com"
                  className="hover:text-xr-neon transition-colors"
                >
                  himanshipuri07@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-xr-neon" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-xr-neon transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-xr-neon/10 text-muted-foreground ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <p className="text-xs text-muted-foreground">
                Available for new projects and collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Himanshi Puri. All rights reserved.
          </p>

          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for immersive experiences</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
