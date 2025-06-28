import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  Gamepad2,
  Target,
  Layers,
  Cpu,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const AngryBirds = () => {
  const projectDetails = {
    title: "Angry Birds Recreation",
    category: "Game Development",
    year: "2024",
    duration: "2 weeks",
    client: "Individual Project",
    role: "Game Developer",
    tools: ["Unity", "C#", "Physics Engine", "UI Design"],
  };

  const features = [
    {
      icon: Gamepad2,
      title: "3 Distinct Levels",
      description:
        "Created three different levels with increasing difficulty and unique challenges for players to master.",
    },
    {
      icon: Target,
      title: "Physics-Based Gameplay",
      description:
        "Implemented realistic physics interactions for slingshot mechanics and collision detection.",
    },
    {
      icon: Layers,
      title: "UI Screens",
      description:
        "Designed comprehensive UI including home screen and level completion screens for seamless user experience.",
    },
    {
      icon: Zap,
      title: "Particle Effects",
      description:
        "Added engaging particle effects after collisions to enhance visual feedback and game feel.",
    },
    {
      icon: Cpu,
      title: "Smart Mechanics",
      description:
        "Implemented minimum range constraints for the slingshot and disappearing bird icons system.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-background to-xr-neon/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button
              asChild
              variant="ghost"
              className="mb-8 text-muted-foreground hover:text-foreground"
            >
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <Badge className="mb-4 bg-xr-neon/20 text-xr-neon border-xr-neon/30">
                    {projectDetails.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-xr-neon bg-clip-text text-transparent">
                    {projectDetails.title}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    As part of the Introduction to Coding course, I developed a
                    2D version of Angry Birds using Unity. The project involved
                    designing levels, scripting physics-based interactions, and
                    creating an engaging user interface with a home screen. With
                    three distinct levels, the game combined strategy and fun,
                    showcasing gameplay mechanics and visual aesthetics inspired
                    by the classic Angry Birds experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-xr-cyber text-muted-foreground hover:text-xr-cyber"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>

              <div>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-xr-neon" />
                      <div>
                        <p className="text-sm font-medium">Year</p>
                        <p className="text-sm text-muted-foreground">
                          {projectDetails.year}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-xr-neon" />
                      <div>
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">
                          {projectDetails.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-xr-neon" />
                      <div>
                        <p className="text-sm font-medium">Project Type</p>
                        <p className="text-sm text-muted-foreground">
                          {projectDetails.client}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-2">
                        Tools & Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projectDetails.tools.map((tool, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Video (YouTube) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
              <CustomVideoPlayer
                src="https://youtu.be/SjZT8W8lbZU"
                title="Angry Birds Recreation Project"
                className="aspect-video mb-16"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Core gameplay mechanics and features implemented in the project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-xr-neon/10 mb-4">
                        <Icon className="h-6 w-6 text-xr-neon" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learning Outcomes
              </h2>
              <p className="text-lg text-muted-foreground">
                What I gained from this exploration into Unity game development
              </p>
            </div>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-xr-neon">
                      Technical Skills
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>C# programming fundamentals</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Unity physics system implementation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Game object scripting and management</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>UI system design and implementation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-xr-neon">
                      Design Insights
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Game feel and user feedback loops</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Progressive difficulty design</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Visual effects and game polish</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Player engagement mechanics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-xr-neon/5 rounded-lg border border-xr-neon/20">
                  <p className="text-muted-foreground italic">
                    "This project was a simple exploration into Unity during my
                    learning journey. It gave me hands-on experience with game
                    development fundamentals and sparked my interest in
                    interactive media design. Keep this project simple only, I
                    was just exploring Unity at that time."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 bg-gradient-to-r from-xr-neon/10 via-background to-xr-cyber/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out my other work in XR design, interactive media, and
            immersive experiences.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80"
          >
            <Link to="/projects">
              View All Projects
              <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AngryBirds;
