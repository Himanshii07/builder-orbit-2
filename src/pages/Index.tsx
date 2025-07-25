import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, Layers3, Brain, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MinimalistHero from "@/components/MinimalistHero";
import FlipCards from "@/components/FlipCards";
import ValuesSection from "@/components/ValuesSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "Visual Design",
      description:
        "Creating beautiful and functional interfaces that delight users",
    },
    {
      icon: Layers3,
      title: "User Experience",
      description: "Crafting intuitive experiences that solve real problems",
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Bringing ideas to life through thoughtful design decisions",
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Minimalist Hero Section */}
      <MinimalistHero />

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Hover over the cards to see more details
            </p>
          </div>

          <FlipCards />
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Recent Projects Preview */}
      <section className="py-24 bg-white/20">
        <div className=" container mx-auto px-4">
          <div className="mb-2 flex justify-center gap-1">
                    <video
                      src="/videos/ball.mp4" // Update this path
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="rounded-xl w-full max-w-2xl h-auto"
                    />
                  </div>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                 Untangling Problems Into Beautiful Solutions
            </h2>
               <p className="text-lg text-muted-foreground font-light">
                  A selection of projects I've worked on
               </p>
           </div>


          <div className="grid md:grid-cols-3 gap-8 max-w-12xl mx-auto">
            {recentProjects.map((project, index) => {
              const colors = ["minimal-sage", "minimal-warm", "minimal-cool"];
              const currentColor = colors[index];

              return (
                <Link key={index} to={`/projects/${project.slug}`}>
                  <Card className="group cursor-pointer overflow-hidden border border-border/50 bg-card hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
                    <div
                      className={`aspect-video relative overflow-hidden ${
                        currentColor === "minimal-sage"
                          ? "bg-minimal-sage/10"
                          : currentColor === "minimal-warm"
                            ? "bg-minimal-warm/10"
                            : "bg-minimal-cool/10"
                      }`}
                    >
                      {/* Project category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-normal text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50">
                          {project.category}
                        </span>
                      </div>

                      {/* Simple accent dot */}
                      <div
                        className={`absolute bottom-4 right-4 w-3 h-3 rounded-full ${
                          currentColor === "minimal-sage"
                            ? "bg-minimal-sage/60"
                            : currentColor === "minimal-warm"
                              ? "bg-minimal-warm/60"
                              : "bg-minimal-cool/60"
                        }`}
                      />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-normal text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-light">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
