import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Eye, Zap, Layers3, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InteractiveHero from "@/components/InteractiveHero";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "Creating VR Experiences",
      description:
        "Immersive experiences that transport users to new dimensions",
    },
    {
      icon: Layers3,
      title: "3D Modeling and Animations",
      description:
        "Crafting detailed 3D assets and bringing them to life through animation",
    },
    {
      icon: Brain,
      title: "Augmented Reality",
      description:
        "Blending digital content seamlessly with the physical world",
    },
  ];

  const recentProjects = [
    {
      title: "Kedarnath Mythological Story",
      category: "VR Experience",
      image: "/placeholder.svg",
      description:
        "Immersive VR experience bringing ancient mythological stories of Kedarnath to life",
      slug: "kedarnath",
    },
    {
      title: "Savey - Interactive Piggy Bank",
      category: "Interactive Design",
      image: "/placeholder.svg",
      description:
        "Friendly piggy bank that makes saving joyful for kids with expressive eyes and sounds",
      slug: "savey",
    },
    {
      title: "The Mushroom House",
      category: "3D Environment",
      image: "/placeholder.svg",
      description:
        "Fantasy 3D environment showcasing complete pipeline from Maya to Unreal Engine 5",
      slug: "mushroom-house",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Interactive Hero Section */}
      <InteractiveHero />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specializing in Extended Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to execution, I create cutting-edge XR experiences
              that captivate and inspire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300 hover-lift"
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-xr-neon/10 mb-6 group-hover:bg-xr-neon/20 transition-colors magnetic">
                      <Icon className="h-6 w-6 text-xr-neon animate-bounce-subtle" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-xr-neon transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
                Recent Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                A glimpse into my latest XR creations
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Link key={index} to={`/projects/${project.slug}`}>
                <Card
                  className={`group cursor-pointer overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300 hover-lift hover-glow animate-fade-in stagger-${index + 1}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-xr-neon/20 to-xr-cyber/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-fade-in">
                      <span className="text-xs font-medium text-xr-neon bg-xr-neon/10 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    {/* Add floating element */}
                    <div
                      className="absolute top-4 right-4 w-8 h-8 bg-xr-cyber/20 rounded-full blur animate-float"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-xr-neon transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-xr-neon/10 via-background to-xr-cyber/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next XR project and bring your vision to
            life. <span className="inline-block animate-bounce-subtle">☕</span>
          </p>

          <Button
            asChild
            size="lg"
            className="bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80 transition-all duration-300"
          >
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
