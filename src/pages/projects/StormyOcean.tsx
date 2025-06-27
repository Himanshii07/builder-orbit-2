import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  Eye,
  Award,
  Play,
  Sparkles,
  Waves,
  Camera,
  Layers,
  Lightbulb,
  Wind,
  Cloud,
  CloudRain,
  Timer,
  Palette,
  BookOpen,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const StormyOcean = () => {
  const projectDetails = {
    title: "Stormy Ocean Scene",
    subtitle:
      "A Blender Learning Journey into Ocean Simulation and Atmospheric Rendering",
    duration: "One Day Project",
    year: "2025",
    client: "Personal Learning",
    team: "Solo Artist",
    role: "3D Artist & Learner",
    status: "Completed",
    renderTime: "8 hours for 8 seconds",
  };

  const technologies = [
    "Blender 3D",
    "Ocean Simulation",
    "Atmospheric Lighting",
    "Material Nodes",
    "Camera Animation",
    "Procedural Textures",
    "Volumetric Lighting",
    "Cycles Renderer",
    "Motion Graphics",
  ];

  const learningSteps = [
    {
      step: "01",
      title: "Following the Tutorial",
      description:
        "Started with a YouTube tutorial to understand the fundamentals of Blender's ocean simulation and stormy weather creation.",
      tools: ["YouTube Tutorial", "Blender Basics", "UI Navigation"],
      icon: BookOpen,
    },
    {
      step: "02",
      title: "Ocean Simulation Setup",
      description:
        "Learned to use Blender's ocean modifier to create realistic wave patterns and water movement for the stormy conditions.",
      tools: ["Ocean Modifier", "Wave Patterns", "Foam Generation"],
      icon: Waves,
    },
    {
      step: "03",
      title: "Atmospheric Elements",
      description:
        "Explored volumetric lighting and atmospheric effects to create the moody, stormy sky that defines the scene's character.",
      tools: ["Volumetric Lighting", "Cloud Systems", "Atmosphere"],
      icon: Cloud,
    },
    {
      step: "04",
      title: "Camera & Animation",
      description:
        "Set up cinematic camera movement and timing to capture the dramatic motion and mood of the stormy ocean environment.",
      tools: ["Camera Animation", "Keyframes", "Cinematic Timing"],
      icon: Camera,
    },
  ];

  const sceneFeatures = [
    {
      icon: Waves,
      title: "Dynamic Ocean Waves",
      description:
        "Realistic wave simulation with foam and spray effects that react naturally to wind forces in the stormy environment.",
      category: "Simulation",
    },
    {
      icon: CloudRain,
      title: "Stormy Atmosphere",
      description:
        "Dramatic sky with volumetric clouds, atmospheric lighting, and weather effects that create the perfect storm mood.",
      category: "Environment",
    },
    {
      icon: Lightbulb,
      title: "Cinematic Lighting",
      description:
        "Moody lighting setup that enhances the dramatic tension and creates depth through shadows and highlights.",
      category: "Lighting",
    },
    {
      icon: Wind,
      title: "Motion & Dynamics",
      description:
        "Animated elements including wave motion, particle systems, and camera movement that bring the scene to life.",
      category: "Animation",
    },
  ];

  const technicalAchievements = [
    {
      title: "First Blender Project",
      description:
        "Successfully completed my very first project in Blender, learning the interface and basic workflow from scratch.",
    },
    {
      title: "Ocean Simulation Mastery",
      description:
        "Understood the complexities of Blender's ocean modifier and how to create realistic water behavior.",
    },
    {
      title: "Atmospheric Rendering",
      description:
        "Learned volumetric lighting techniques to create convincing stormy weather and atmospheric depth.",
    },
    {
      title: "Render Pipeline Understanding",
      description:
        "Gained appreciation for render times and optimization - 8 hours for 8 seconds taught valuable lessons about efficiency.",
    },
  ];

  const learningOutcomes = [
    "Blender Interface Navigation",
    "Ocean Simulation Basics",
    "Volumetric Lighting",
    "Material Node Systems",
    "Camera Animation",
    "Render Settings",
    "Atmospheric Effects",
    "Cycles Rendering",
  ];

  const renderStats = [
    { label: "Animation Length", value: "8 seconds" },
    { label: "Render Time", value: "8 hours" },
    { label: "Frames", value: "192 frames" },
    { label: "Time per Frame", value: "~2.5 minutes" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Ocean Theme */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-900/20" />

        {/* Animated ocean elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-cyan-400/20 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-slate-400/20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-22 h-22 bg-blue-600/20 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                <Link to="/projects">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>

            {/* Project Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 border border-blue-400/20 mb-6">
                <Waves className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">
                  Blender Learning Project
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-slate-400 bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {projectDetails.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="text-sm border-blue-400 text-blue-400"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {projectDetails.year}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-cyan-400 text-cyan-400"
                >
                  <Timer className="w-3 h-3 mr-1" />
                  {projectDetails.renderTime}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-slate-400 text-slate-400"
                >
                  <BookOpen className="w-3 h-3 mr-1" />
                  Tutorial-Based Learning
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:from-blue-500 hover:to-cyan-500"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Ocean Animation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Render Process
                </Button>
              </div>
            </div>

            {/* Hero Video/Image Section */}
            <CustomVideoPlayer
              src="/videos/Stormy Ocean Blender.mp4"
              title="Dynamic Ocean Waves"
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-gradient-to-r from-blue-900/10 via-background to-cyan-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Learning Journey</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This project marked my very first exploration into Blender,
                  sparked by curiosity and a desire to understand 3D animation.
                  Following a YouTube tutorial, I dove into the world of ocean
                  simulation and atmospheric rendering.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  What started as a simple tutorial follow-along became an
                  intensive learning experience about Blender's simulation
                  tools, lighting systems, and rendering pipeline. The project
                  taught me patience - watching 8 hours of rendering for just 8
                  seconds of animation!
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The final result was a dramatic stormy ocean scene that
                  captured the mood and power of nature, while giving me
                  invaluable hands-on experience with one of the industry's most
                  powerful 3D software packages.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Learning Focus
                  </h3>
                  <p className="text-muted-foreground">
                    Blender fundamentals through practical application
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Primary Challenge
                  </h3>
                  <p className="text-muted-foreground">
                    First-time Blender user following tutorial guidance
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Time Investment
                  </h3>
                  <p className="text-muted-foreground">
                    One day project + 8 hours rendering time
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Key Techniques
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 6).map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🌊 Learning Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Step-by-step journey through my first Blender experience
              </p>
            </div>

            <div className="space-y-12">
              {learningSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1">
                      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                              <Badge variant="outline" className="text-xs mb-2">
                                Step {step.step}
                              </Badge>
                              <h3 className="text-xl font-semibold text-blue-400">
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {step.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.tools.map((tool, toolIndex) => (
                              <Badge
                                key={toolIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {step.step}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Scene Features */}
      <section className="py-24 bg-gradient-to-r from-blue-900/10 via-background to-cyan-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ⛈️ Scene Elements
              </h2>
              <p className="text-lg text-muted-foreground">
                Key components that make up the stormy ocean environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sceneFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const colors = ["blue", "cyan", "slate", "indigo"];
                const color = colors[index % colors.length];
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-${color}-400/10 rounded-lg flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={`w-6 h-6 text-${color}-400`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">
                              {feature.title}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {feature.category}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {feature.description}
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

      {/* Render Statistics */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ⏱️ Render Statistics
              </h2>
              <p className="text-lg text-muted-foreground">
                A lesson in patience and render optimization
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {renderStats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Timer className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">
                    Render Insights
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This project taught me valuable lessons about render
                    optimization and patience. Spending 8 hours to render just 8
                    seconds might seem excessive, but it provided crucial
                    understanding of how complex simulations like ocean dynamics
                    and volumetric lighting can impact render times. This
                    experience emphasized the importance of preview renders and
                    optimization techniques for future projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Achievements */}
      <section className="py-24 bg-gradient-to-r from-blue-900/10 via-background to-cyan-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🚀 Learning Achievements
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones reached through this first Blender experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalAchievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-400">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Developed */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                📚 Skills Acquired
              </h2>
              <p className="text-lg text-muted-foreground">
                Fundamental Blender skills gained through hands-on practice
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {learningOutcomes.map((skill, index) => (
                <Card
                  key={index}
                  className="text-center p-4 border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="w-8 h-8 bg-blue-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-400 text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground leading-tight">
                      {skill}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-24 bg-gradient-to-r from-blue-400/10 via-background to-cyan-400/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Continue Exploring My Work
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover other projects that showcase my journey in 3D art and
            technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
            >
              <Link to="/projects/mushroom-house">
                Next: The Mushroom House
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white hover:from-blue-500 hover:to-cyan-500"
            >
              <Link to="/projects">
                <Eye className="mr-2 h-4 w-4" />
                All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StormyOcean;
