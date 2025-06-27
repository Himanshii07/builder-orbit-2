import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Eye, Zap, Layers3, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-xr-neon/5" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-xr-neon/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-xr-cyber/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-xr-void/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-xr-neon/10 border border-xr-neon/20 mb-8 animate-fade-in hover:shadow-[0_0_20px_rgba(46,213,115,0.4)] hover:bg-xr-neon/20 transition-all duration-300 cursor-pointer">
              <Zap className="w-4 h-4 mr-2 text-xr-neon" />
              <span className="text-sm font-medium text-xr-neon">
                Pushing the boundaries of reality
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-xr-neon to-xr-cyber bg-clip-text text-transparent animate-fade-in hover:drop-shadow-[0_0_20px_rgba(46,213,115,0.5)] transition-all duration-300 cursor-default">
              XR Designer
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Crafting immersive experiences that blur the line between the
              physical and digital worlds. Welcome to the future of
              human-computer interaction.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                asChild
                size="lg"
                className="group bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80 hover:shadow-[0_0_30px_rgba(46,213,115,0.6)] transition-all duration-300 hover:scale-105"
              >
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform animate-bounce-subtle group-hover:animate-pulse" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-xr-cyber text-xr-cyber hover:bg-xr-cyber hover:text-xr-cyber-foreground hover:shadow-[0_0_30px_rgba(79,209,197,0.6)] transition-all duration-300 hover:scale-105"
              >
                <Link to="/about">
                  <Play className="mr-2 h-4 w-4 animate-bounce-subtle group-hover:animate-pulse" />
                  About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specializing in Extended Reality
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                  className={`group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300 hover-lift animate-fade-in stagger-${index + 1}`}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:drop-shadow-[0_0_20px_rgba(46,213,115,0.5)] transition-all duration-300 cursor-default">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:drop-shadow-[0_0_20px_rgba(46,213,115,0.5)] transition-all duration-300 cursor-default">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next XR project and bring your vision to
            life. ☕{" "}
            <span className="inline-block animate-bounce-subtle">☕</span>
          </p>

          <Button
            asChild
            size="lg"
            className="bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80 hover:shadow-[0_0_30px_rgba(46,213,115,0.6)] transition-all duration-300 hover:scale-105"
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
