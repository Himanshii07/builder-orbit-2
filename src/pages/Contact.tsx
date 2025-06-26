import React, { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Twitter,
  MessageSquare,
  Clock,
  Coffee,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "himanshipuri07@gmail.com",
      href: "mailto:himanshipuri07@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null,
    },
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

  const projectTypes = [
    "VR Experience",
    "AR Application",
    "Mixed Reality",
    "Data Visualization",
    "Training Simulation",
    "Product Visualization",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `Project Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Project Type: ${formData.project || "Not specified"}

Message:
${formData.message}

---
This message was sent via himanshipuri.com contact form.
    `.trim();

    const mailtoLink = `mailto:himanshipuri07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Show success message
    toast({
      title: "Email client opened!",
      description:
        "Your default email application should now be open with the message pre-filled. Please send the email to complete your inquiry.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      project: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-xr-neon/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-xr-neon/10 border border-xr-neon/20 mb-8">
              <MessageSquare className="w-4 h-4 mr-2 text-xr-neon" />
              <span className="text-sm font-medium text-xr-neon">
                Let's Connect
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-xr-neon bg-clip-text text-transparent">
              Get In Touch
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your XR vision to life? Let's discuss your project
              and explore the possibilities of immersive technology together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Send className="w-6 h-6 mr-3 text-xr-neon" />
                      Send a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                            className="border-border/50 focus:border-xr-neon"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="border-border/50 focus:border-xr-neon"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="border-border/50 focus:border-xr-neon"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project">Project Type</Label>
                        <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 rounded-md border border-border/50 bg-background text-foreground focus:border-xr-neon focus:outline-none focus:ring-1 focus:ring-xr-neon"
                        >
                          <option value="">Select project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, goals, and timeline..."
                          rows={6}
                          required
                          className="border-border/50 focus:border-xr-neon resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      const content = (
                        <div className="flex items-center space-x-4 group">
                          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-xr-neon/10 group-hover:bg-xr-neon/20 transition-colors">
                            <Icon className="w-5 h-5 text-xr-neon" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">
                              {info.label}
                            </p>
                            <p className="text-muted-foreground group-hover:text-xr-neon transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      );

                      return info.href ? (
                        <a key={index} href={info.href} className="block">
                          {content}
                        </a>
                      ) : (
                        <div key={index}>{content}</div>
                      );
                    })}
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      Follow Me
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-xr-neon/10 text-muted-foreground ${social.color} transition-all duration-200 hover:scale-110`}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Contact;
