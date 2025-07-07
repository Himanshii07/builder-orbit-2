import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  Eye,
  Award,
  Github,
  ExternalLink,
  Play,
  Sparkles,
  Palette,
  Mountain,
  TreePine,
  Home,
  Lightbulb,
  Camera,
  Layers,
  Wand2,
  Flower,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const MushroomHouse = () => {
  const projectDetails = {
    title: "The Mushroom House",
    subtitle: "A Fantasy 3D Environment Showcasing Complete Pipeline Mastery",
    duration: "2 weeks",
    year: "2025",
    client: "3D Art Portfolio",
    team: "Solo Artist",
    role: "3D Artist & Environment Designer",
    status: "Completed",
  };

  const technologies = [
    "Autodesk Maya",
    "Substance Painter",
    "Unreal Engine 5",
    "UV Mapping",
    "Hand-painted Textures",
    "3D Modeling",
    "Lighting Design",
    "Environment Art",
    "Real-time Rendering",
  ];

  const pipelineSteps = [
    {
      step: "01",
      title: "3D Modeling in Maya",
      description:
        "Created the core stylized mushroom house model in Autodesk Maya, focusing on whimsical proportions and fantasy aesthetics.",
      tools: ["Autodesk Maya", "Polygon Modeling", "Mesh Optimization"],
      icon: Layers,
    },
    {
      step: "02",
      title: "UV Mapping & Texturing",
      description:
        "Developed UV maps and applied detailed hand-painted textures using Substance Painter for rich, stylized surface details.",
      tools: ["Substance Painter", "UV Mapping", "Hand-painted Textures"],
      icon: Palette,
    },
    {
      step: "03",
      title: "Rigging & Animation",
      description:
        "Rigged and animated interactive elements like leaves in Maya to bring life and movement to the environment.",
      tools: ["Maya Rigging", "Animation", "Interactive Elements"],
      icon: Wand2,
    },
    {
      step: "04",
      title: "Environment Building",
      description:
        "Imported the model into Unreal Engine 5 and built a complete fantasy environment with lighting and storytelling elements.",
      tools: ["Unreal Engine 5", "Lighting", "Environment Design"],
      icon: Mountain,
    },
  ];

  const environmentFeatures = [
    {
      icon: Home,
      title: "Magical Mushroom House",
      description:
        "Glowing windows and chimney enhance believability and create warm, inviting atmosphere in the fantasy setting.",
      category: "Hero Asset",
    },
    {
      icon: TreePine,
      title: "Detailed Pathways & Boundaries",
      description:
        "Stone tile footpath leading to entrance with wooden fence surrounding the house for clear spatial definition.",
      category: "Navigation",
    },
    {
      icon: Lightbulb,
      title: "Realistic Props & Details",
      description:
        "Sacks, logs, pots, and lantern post scattered throughout for environmental storytelling and realism.",
      category: "Props",
    },
    {
      icon: Flower,
      title: "Natural Flora & Landscape",
      description:
        "Multiple tiny mushrooms in various colors, wildflowers, and grass clusters creating rich, organic environment.",
      category: "Landscaping",
    },
  ];

  const technicalAchievements = [
    {
      title: "Complete 3D Pipeline Mastery",
      description:
        "Demonstrated proficiency across the entire 3D production pipeline from initial modeling to final real-time rendering.",
    },
    {
      title: "Hand-Painted Texture Artistry",
      description:
        "Created unique, stylized textures using traditional digital painting techniques for authentic fantasy aesthetic.",
    },
    {
      title: "Real-Time Environment Optimization",
      description:
        "Successfully optimized detailed 3D assets for real-time rendering in Unreal Engine 5 while maintaining visual quality.",
    },
    {
      title: "Environmental Storytelling",
      description:
        "Used props, lighting, and composition to create narrative atmosphere that draws viewers into the fantasy world.",
    },
  ];

  const learningOutcomes = [
    "Complete 3D Production Pipeline",
    "Maya Modeling & Animation Techniques",
    "Substance Painter Texturing Workflows",
    "Unreal Engine 5 Environment Building",
    "UV Mapping & Optimization",
    "Lighting & Atmosphere Creation",
    "Fantasy Art Direction",
    "Real-time Rendering Optimization",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Fantasy Theme */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-900/10" />

        {/* Magical floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-float" />
          <div
            className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-400/20 rounded-full blur-lg animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-yellow-400/20 rounded-full blur-lg animate-float"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-14 h-14 bg-blue-400/20 rounded-full blur-md animate-float"
            style={{ animationDelay: "2s" }}
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 border border-purple-400/20 mb-6">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">
                  Fantasy 3D Environment
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {projectDetails.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="text-sm border-purple-400 text-purple-400"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {projectDetails.year}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-pink-400 text-pink-400"
                >
                  <Users className="w-3 h-3 mr-1" />
                  {projectDetails.team}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-yellow-400 text-yellow-400"
                >
                  <Award className="w-3 h-3 mr-1" />
                  {projectDetails.status}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:from-purple-500 hover:to-pink-500"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View 3D Modeling Process
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Environment Showcase
                </Button>
              </div>
            </div>
            {/* YouTube Video Showcase */}
            <CustomVideoPlayer
              src="https://www.youtube.com/embed/zkfMJK6O_9Y?mute=0"
              title="Mushroom House YouTube Showcase"
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-gradient-to-r from-purple-900/10 via-background to-pink-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This project was a hands-on introduction to the full 3D
                  pipeline, from modeling to animation to real-time rendering.
                  The core model was a stylized mushroom house, created in
                  Autodesk Maya.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  After modeling, I learned how to create UV maps and applied
                  detailed hand-painted textures using Substance Painter. The
                  final rigging and animation of interactive elements like the
                  leaves were also done in Maya.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To elevate the outcome, the animated model was imported into
                  Unreal Engine 5, where I built an entire fantasy environment
                  around it—bringing the scene to life with lighting, props, and
                  storytelling elements.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Focus</h3>
                  <p className="text-muted-foreground">
                    Complete 3D production pipeline mastery
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Primary Tools
                  </h3>
                  <p className="text-muted-foreground">
                    Maya → Substance Painter → Unreal Engine 5
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Art Style
                  </h3>
                  <p className="text-muted-foreground">
                    Stylized fantasy with hand-painted textures
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Key Skills
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
                    <Badge variant="secondary" className="text-xs">
                      +{technologies.length - 6} more
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Pipeline Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎨 3D Production Pipeline
              </h2>
              <p className="text-lg text-muted-foreground">
                From initial modeling to final environment rendering
              </p>
            </div>

            <div className="space-y-12">
              {pipelineSteps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="flex justify-center">
                    <div className="max-w-2xl w-full">
                      <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                              <Badge variant="outline" className="text-xs mb-2">
                                Step {step.step}
                              </Badge>
                              <h3 className="text-xl font-semibold text-purple-400">
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Environment Features */}
      <section className="py-24 bg-gradient-to-r from-purple-900/10 via-background to-pink-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🌟 Fantasy Environment Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Detailed elements that bring the magical world to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {environmentFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const colors = ["purple", "pink", "yellow", "green"];
                const color = colors[index % colors.length];
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"
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

      {/* Technical Achievements */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🚀 Technical Achievements
              </h2>
              <p className="text-lg text-muted-foreground">
                Skills and techniques mastered through this project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalAchievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-xr-neon">
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

      {/* Learning Outcomes */}
      <section className="py-24 bg-gradient-to-r from-purple-900/10 via-background to-pink-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                📚 Skills Developed
              </h2>
              <p className="text-lg text-muted-foreground">
                Key competencies gained through this comprehensive 3D project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {learningOutcomes.map((skill, index) => (
                <Card
                  key={index}
                  className="text-center p-4 border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="w-8 h-8 bg-purple-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-400 text-sm font-bold">
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
      <section className="py-24 bg-gradient-to-r from-purple-400/10 via-background to-pink-400/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Creative Work
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover other projects that showcase the intersection of art and
            technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
            >
              <Link to="/projects/savey">
                Previous: Savey Interactive Piggy Bank
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:from-purple-500 hover:to-pink-500"
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

export default MushroomHouse;
