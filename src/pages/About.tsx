import React from "react";
import {
  Download,
  Award,
  Coffee,
  Globe,
  Headphones,
  Code2,
  Palette,
  Users,
  Lightbulb,
  Target,
  Layers,
  Gamepad2,
  Settings,
  Brain,
  Briefcase,
  GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";

const About = () => {
  const skills = [
    { name: "Unreal Engine 5", level: 95 },
    { name: "Unity 3D", level: 88 },
    { name: "Blender", level: 92 },
    { name: "Touch Design", level: 85 },
    { name: "UX/UI Design", level: 90 },
    { name: "Maya", level: 82 },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior XR Designer",
      company: "Immersive Studios",
      description:
        "Leading XR experience design for enterprise and entertainment clients, focusing on VR training simulations and AR marketing campaigns.",
    },
    {
      year: "2024 - 2026",
      role: "M.Des Immersive Media Design",
      company: "MIT ADT, Pune",
      description:
        "Developed innovative AR applications for retail and education sectors, creating intuitive user interfaces for spatial computing.",
    },
    {
      year: "2020 - 2023",
      role: "Bcom Programme",
      company: "Mata Sundri College, Delhi University",
      description:
        "Created stunning 3D visualizations and interactive experiences for architectural and product design presentations.",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "XR Innovation Award 2023",
      description: "Best VR Training Application",
    },
    {
      icon: Globe,
      title: "Global XR Conference Speaker",
      description: "Keynote on Future of Spatial Computing",
    },
    {
      icon: Code2,
      title: "Open Source Contributor",
      description: "WebXR framework development",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-xr-neon/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-xr-neon/20 to-xr-cyber/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-sm text-foreground">
                      <div className="w-2 h-2 bg-xr-neon rounded-full animate-pulse" />
                      <span>Available for new projects</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-xr-cyber/20 rounded-full blur-xl animate-float" />
                <div
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-xr-neon/20 rounded-full blur-xl animate-float"
                  style={{ animationDelay: "1s" }}
                />
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-xr-neon/10 border border-xr-neon/20 mb-6">
                  <Headphones className="w-4 h-4 mr-2 text-xr-neon" />
                  <span className="text-sm font-medium text-xr-neon">
                    XR Design Specialist
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-xr-neon bg-clip-text text-transparent">
                  About Me
                </h1>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate XR designer creating immersive digital
                  experiences. My work spans across virtual reality, augmented
                  reality, and mixed reality applications, with a focus on
                  user-centered design and cutting-edge technology.
                </p>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm skilled at solving complex problems through thoughtful
                  design, integrating everyone's insights to find shared
                  solutions, from strategy to refining user experiences.
                </p>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  When I'm not designing the future of human-computer
                  interaction, you'll find me exploring the latest in spatial
                  computing, contributing to open-source XR frameworks, or
                  sharing knowledge at tech conferences around the world.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>

                  <Button
                    variant="outline"
                    className="border-xr-cyber text-xr-cyber hover:bg-xr-cyber hover:text-xr-cyber-foreground"
                  >
                    <Coffee className="mr-2 h-4 w-4" />
                    Let's Grab Coffee
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Skills
              </h2>
              <p className="text-lg text-muted-foreground">
                Tools and technologies I use to bring XR experiences to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Core Competencies
              </h2>
              <p className="text-lg text-muted-foreground">
                Key skills and expertise areas that drive innovative solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "XR Interaction Design",
                  description:
                    "Creating intuitive and immersive user interactions in virtual and augmented reality environments",
                  icon: Headphones,
                  color: "blue",
                },
                {
                  title: "Prototyping",
                  description:
                    "Rapid iteration and testing of concepts to validate design decisions and user experiences",
                  icon: Settings,
                  color: "green",
                },
                {
                  title: "User Experience",
                  description:
                    "Designing human-centered experiences that prioritize usability and emotional engagement",
                  icon: Users,
                  color: "purple",
                },
                {
                  title: "Spatial Design",
                  description:
                    "Understanding and designing for three-dimensional spaces and spatial relationships",
                  icon: Layers,
                  color: "orange",
                },
                {
                  title: "3D Modeling",
                  description:
                    "Creating detailed 3D assets and environments for immersive experiences",
                  icon: Palette,
                  color: "pink",
                },
                {
                  title: "Game Design and Development",
                  description:
                    "Building interactive experiences with engaging mechanics and compelling narratives",
                  icon: Gamepad2,
                  color: "cyan",
                },
                {
                  title: "Systems Thinking",
                  description:
                    "Analyzing complex problems and understanding interconnected relationships",
                  icon: GitBranch,
                  color: "red",
                },
                {
                  title: "Creative Thinking",
                  description:
                    "Generating innovative solutions and pushing boundaries of what's possible",
                  icon: Lightbulb,
                  color: "yellow",
                },
                {
                  title: "Product Strategy",
                  description:
                    "Aligning design decisions with business goals and user needs",
                  icon: Target,
                  color: "indigo",
                },
                {
                  title: "Project Management",
                  description:
                    "Leading projects from conception to completion with efficient planning and execution",
                  icon: Briefcase,
                  color: "teal",
                },
                {
                  title: "Cross-Functional Team Building",
                  description:
                    "Collaborating effectively across disciplines to achieve shared objectives",
                  icon: Users,
                  color: "emerald",
                },
              ].map((competency, index) => {
                const Icon = competency.icon;
                return (
                  <Card
                    key={index}
                    className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-${competency.color}-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-${competency.color}-400/20 transition-colors`}
                        >
                          <Icon
                            className={`w-6 h-6 text-${competency.color}-400 group-hover:text-${competency.color}-500`}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-xr-neon transition-colors">
                            {competency.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {competency.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Professional Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                My journey in the world of extended reality
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-xr-neon font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {exp.year}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When I'm Not Working Section */}
      <section className="py-24 bg-gradient-to-r from-xr-neon/5 via-background to-xr-cyber/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                When I am not glued to my laptop for work
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I can often be found exploring the world around me, seeking
                inspiration from nature, culture and watching Netflix
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Row 1 */}
              <div className="aspect-square rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    🌿 Nature Walks
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">🌲</div>
                </div>
              </div>

              <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    🏛️ Cultural Sites
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">����️</div>
                </div>
              </div>

              <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    📺 Netflix & Chill
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">📺</div>
                </div>
              </div>

              <div className="aspect-square rounded-xl bg-gradient-to-br from-orange-400/20 to-red-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    🌅 Sunrise Views
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">🌅</div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="aspect-square rounded-xl bg-gradient-to-br from-teal-400/20 to-blue-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    ☕ Coffee Adventures
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">☕</div>
                </div>
              </div>

              <div className="aspect-square rounded-xl bg-gradient-to-br from-pink-400/20 to-rose-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    🎨 Art Galleries
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">🎨</div>
                </div>
              </div>

              <div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-400/20 to-purple-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    📚 Reading Corner
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">📚</div>
                </div>
              </div>

              <div className="aspect-square rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    🏔️ Mountain Trails
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">🏔️</div>
                </div>
              </div>

              {/* Row 3 - Hidden on mobile, visible on larger screens */}
              <div className="hidden md:block aspect-square rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">🌺 Gardens</p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">🌺</div>
                </div>
              </div>

              <div className="hidden md:block aspect-square rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    🌊 Beach Days
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">🌊</div>
                </div>
              </div>

              <div className="hidden lg:block aspect-square rounded-xl bg-gradient-to-br from-rose-400/20 to-pink-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    🎭 Local Events
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">🎭</div>
                </div>
              </div>

              <div className="hidden lg:block aspect-square rounded-xl bg-gradient-to-br from-violet-400/20 to-purple-500/20 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">
                    🎵 Music Festivals
                  </p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="text-4xl">🎵</div>
                </div>
              </div>
            </div>

            {/* Fun Note */}
            <div className="mt-12 text-center">
              <Card className="border-xr-neon/30 bg-gradient-to-r from-xr-neon/5 to-xr-cyber/5 max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic">
                    "Inspiration strikes when you least expect it - sometimes
                    during a Netflix binge, sometimes while hiking through
                    nature, and often when experiencing different cultures.
                    These moments away from the screen fuel my creativity and
                    bring fresh perspectives to my work."
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

export default About;
