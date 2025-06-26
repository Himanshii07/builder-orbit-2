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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

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
      value: "hello@xrdesigner.com",
      href: "mailto:hello@xrdesigner.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/xrdesigner",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/xrdesigner",
      color: "hover:text-foreground",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/xrdesigner",
      color: "hover:text-blue-400",
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description:
        "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

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

                {/* Availability */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-xr-neon" />
                      Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-xr-neon rounded-full animate-pulse" />
                      <span className="text-foreground font-medium">
                        Currently available for new projects
                      </span>
                    </div>

                    <div className="text-sm text-muted-foreground space-y-2">
                      <p>🕐 Response time: Within 24 hours</p>
                      <p>📅 Project start: 2-4 weeks</p>
                      <p>🌍 Open to remote & on-site work</p>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-xr-cyber text-xr-cyber hover:bg-xr-cyber hover:text-xr-cyber-foreground mt-4"
                    >
                      <Coffee className="w-4 h-4 mr-2" />
                      Schedule a Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions about working together
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    What's your typical project timeline?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Project timelines vary based on complexity, but typically
                    range from 3-12 months. I provide detailed timelines during
                    our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Do you work with international clients?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! I work with clients worldwide and am comfortable
                    with remote collaboration across different time zones.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    What platforms do you develop for?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I develop for all major XR platforms including Oculus/Meta,
                    HoloLens, Magic Leap, mobile AR (iOS/Android), and WebXR.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">
                    Do you provide ongoing support?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, I offer various support packages including maintenance,
                    updates, and feature enhancements after project completion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
