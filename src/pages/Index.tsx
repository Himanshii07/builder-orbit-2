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
      <section className="py-24 bg-gradient-to-b from-background via-xr-void/5 to-muted/20 relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-xr-cyber/10 rounded-full blur-2xl animate-float" />
          <div
            className="absolute bottom-20 right-20 w-48 h-48 bg-xr-matrix/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-xr-neon/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-xr-neon via-xr-cyber to-xr-void bg-clip-text text-transparent animate-shimmer">
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
              const colors = ["xr-neon", "xr-cyber", "xr-void"];
              const currentColor = colors[index];

              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-${currentColor}/50 transition-all duration-500 hover-lift hover-tilt stagger-${index + 1} animate-fade-in`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glowing border effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-${currentColor}/0 via-${currentColor}/20 to-${currentColor}/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}
                  />

                  <CardContent className="p-8 relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${currentColor}/10 mb-6 group-hover:bg-${currentColor}/20 group-hover:scale-110 transition-all duration-300 magnetic shadow-lg group-hover:shadow-${currentColor}/30`}
                    >
                      <Icon
                        className={`h-8 w-8 text-${currentColor} group-hover:animate-pulse`}
                      />
                    </div>

                    <h3
                      className={`text-xl font-semibold mb-3 group-hover:text-${currentColor} transition-colors duration-300`}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Animated accent line */}
                    <div
                      className={`mt-4 h-1 bg-gradient-to-r from-${currentColor}/0 via-${currentColor}/50 to-${currentColor}/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full`}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-24 relative overflow-hidden">
        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--xr-neon)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in bg-gradient-to-r from-xr-cyber via-xr-neon to-xr-matrix bg-clip-text text-transparent">
                Recent Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                A glimpse into my latest XR creations
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground hover:shadow-lg hover:shadow-xr-neon/25 transition-all duration-300 group"
            >
              <Link to="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => {
              const gradients = [
                "from-xr-neon/20 to-xr-cyber/20",
                "from-xr-cyber/20 to-xr-void/20",
                "from-xr-void/20 to-xr-matrix/20",
              ];

              return (
                <Link key={index} to={`/projects/${project.slug}`}>
                  <Card
                    className={`group cursor-pointer overflow-hidden border-border/50 bg-card/30 backdrop-blur-md hover:border-xr-neon/50 transition-all duration-500 hover-lift hover-glow animate-fade-in stagger-${index + 1} hover:bg-card/60`}
                  >
                    <div
                      className={`aspect-video bg-gradient-to-br ${gradients[index]} relative overflow-hidden`}
                    >
                      {/* Animated mesh gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Project category badge */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-xs font-medium text-xr-neon bg-xr-neon/20 backdrop-blur-sm px-3 py-1 rounded-full border border-xr-neon/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Floating orbs */}
                      <div
                        className="absolute top-4 right-4 w-6 h-6 bg-xr-cyber/30 rounded-full blur-sm animate-float"
                        style={{ animationDelay: `${index * 0.5}s` }}
                      />
                      <div
                        className="absolute top-8 right-12 w-4 h-4 bg-xr-neon/40 rounded-full blur-sm animate-float"
                        style={{ animationDelay: `${index * 0.5 + 1}s` }}
                      />

                      {/* Hover effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-xr-neon/0 via-xr-neon/5 to-xr-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <CardContent className="p-6 relative">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-xr-neon transition-colors duration-300 group-hover:translate-x-1 transform">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Animated underline */}
                      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-xr-neon/0 via-xr-neon/50 to-xr-neon/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
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
