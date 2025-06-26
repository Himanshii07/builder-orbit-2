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
  Castle,
  Zap,
  User,
  Camera,
  Lightbulb,
  Palette,
  Mountain,
  Sword,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const UnrealCinematic = () => {
  const projectDetails = {
    title: "Unreal Cinematic Challenge",
    subtitle: "Dark Atmospheric Castle Environment with Fixed Camera Sequence",
    duration: "1 day",
    year: "2025",
    client: "Personal Challenge",
    team: "Solo Artist",
    role: "Environment Designer & Lighting Artist",
    status: "Completed",
  };

  const technologies = [
    "Unreal Engine 5",
    "Environment Design",
    "Cinematic Lighting",
    "Asset Placement",
    "Gothic Architecture",
    "Character Integration",
    "Atmospheric Design",
    "Storytelling",
    "Camera Sequencing",
  ];

  const features = [
    {
      icon: Castle,
      title: "Gothic Castle Environment",
      description:
        "Designed a comprehensive dark castle environment with intricate gothic architecture, weathered stone textures, and atmospheric detailing that supports the mysterious narrative.",
    },
    {
      icon: Zap,
      title: "Dramatic Lighting Design",
      description:
        "Created moody, cinematic lighting with strategic use of shadows, volumetric fog, and dramatic contrast to enhance the dark, battle-worn atmosphere.",
    },
    {
      icon: Sword,
      title: "Warrior Character Integration",
      description:
        "Replaced the original character with a custom warrior figure, carefully positioned and animated to align with the mysterious, battle-worn storyline and camera movements.",
    },
  ];

  const challenges = [
    {
      title: "Fixed Camera Constraints",
      description:
        "Working within predetermined camera movements while ensuring every frame told a compelling visual story.",
      solution:
        "Strategically placed environment elements and lighting to create visual interest and narrative flow that complemented the fixed camera path.",
    },
    {
      title: "Atmospheric Consistency",
      description:
        "Maintaining the dark, mysterious atmosphere throughout different areas of the castle while keeping visual variety.",
      solution:
        "Developed a cohesive lighting scheme with varying intensities and color temperatures, using fog and particle effects to unify different areas.",
    },
    {
      title: "Character-Environment Harmony",
      description:
        "Ensuring the new warrior character felt naturally integrated within the castle environment and narrative.",
      solution:
        "Carefully studied the original camera sequence, adjusted character positioning, and added environmental storytelling elements that supported the warrior's presence.",
    },
  ];

  const outcomes = [
    {
      metric: "100%",
      label: "Creative Freedom Utilized",
      description: "Despite camera constraints",
    },
    {
      metric: "5+",
      label: "Cinematic Techniques",
      description: "Advanced lighting and composition",
    },
    {
      metric: "1st",
      label: "Extracurricular Challenge",
      description: "Beyond coursework exploration",
    },
  ];

  const processSteps = [
    {
      icon: Camera,
      title: "Camera Analysis",
      description:
        "Studied the fixed camera sequence to understand movement patterns and key frames for optimal environment placement.",
    },
    {
      icon: Castle,
      title: "Environment Concept",
      description:
        "Developed the gothic castle concept with focus on creating a mysterious, battle-worn atmosphere through architectural details.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Strategy",
      description:
        "Designed cinematic lighting setup with dramatic shadows and volumetric effects to enhance the dark, atmospheric mood.",
    },
    {
      icon: Sword,
      title: "Character Integration",
      description:
        "Replaced original character with warrior figure, ensuring seamless integration with environment and narrative flow.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-xr-neon/5" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-xr-neon/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-xr-cyber/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-xr-neon/10 border border-xr-neon/20 mb-6">
                <Castle className="w-4 h-4 mr-2 text-xr-neon" />
                <span className="text-sm font-medium text-xr-neon">
                  Cinematic Environment Design
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-xr-neon bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                {projectDetails.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="text-sm">
                  <Calendar className="w-3 h-3 mr-1" />
                  {projectDetails.year}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Clock className="w-3 h-3 mr-1" />
                  {projectDetails.duration}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Users className="w-3 h-3 mr-1" />
                  {projectDetails.team}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Award className="w-3 h-3 mr-1" />
                  {projectDetails.status}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Cinematic
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-xr-cyber text-xr-cyber hover:bg-xr-cyber hover:text-xr-cyber-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Breakdown
                </Button>
              </div>
            </div>

            {/* Project Image/Video */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 aspect-video mb-16">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-xr-neon/20 text-xr-neon border-xr-neon/30">
                  Dark Gothic Atmosphere
                </Badge>
              </div>
              {/* Placeholder for castle environment visualization */}
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white/70">
                  <Castle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Cinematic Castle Environment</p>
                  <p className="text-sm opacity-70">Dark Atmospheric Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As an extracurricular exploration beyond my coursework, I
                  participated in the Unreal Engine Cinematic Challenge, where
                  the task was to design and build a 3D environment around a
                  given cinematic camera sequence. While the camera movements
                  were fixed, there was creative freedom in designing the scene
                  and characters.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I chose to create a dark, atmospheric castle environment,
                  complete with moody lighting, gothic architecture, and
                  immersive detailing to support the dramatic tone of the
                  sequence. To enhance the narrative, I replaced the original
                  character with a warrior figure, aligning the environment's
                  look and feel with a mysterious, battle-worn storyline.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This challenge pushed my ability to work within constraints
                  while still making bold creative choices, deepening my skills
                  in environment design, asset placement, lighting, and
                  cinematic storytelling in Unreal Engine.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Challenge Type
                  </h3>
                  <p className="text-muted-foreground">
                    {projectDetails.client}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    My Role
                  </h3>
                  <p className="text-muted-foreground">{projectDetails.role}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Timeline
                  </h3>
                  <p className="text-muted-foreground">
                    {projectDetails.duration} ({projectDetails.year})
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Technologies & Skills
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

      {/* Creative Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Creative Process
              </h2>
              <p className="text-lg text-muted-foreground">
                From camera analysis to final atmospheric design
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-xr-neon/10 mb-4">
                        <Icon className="h-6 w-6 text-xr-neon" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key Design Elements
              </h2>
              <p className="text-lg text-muted-foreground">
                Creative choices that brought the vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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

      {/* Challenges & Solutions */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Creative Challenges
              </h2>
              <p className="text-lg text-muted-foreground">
                How constraints sparked innovative solutions
              </p>
            </div>

            <div className="space-y-8">
              {challenges.map((challenge, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-xr-neon">
                          Challenge: {challenge.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-xr-cyber">
                          Creative Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Learning */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learning Outcomes
              </h2>
              <p className="text-lg text-muted-foreground">
                Skills developed through this creative challenge
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {outcomes.map((outcome, index) => (
                <Card
                  key={index}
                  className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-xr-neon mb-2">
                      {outcome.metric}
                    </div>
                    <div className="text-lg font-semibold mb-2">
                      {outcome.label}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Key Skills Developed
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-xr-neon mb-2">
                      Technical Skills
                    </h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Advanced lighting techniques in Unreal Engine</li>
                      <li>• Environment design and asset placement</li>
                      <li>• Character integration and animation</li>
                      <li>• Cinematic composition and framing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xr-cyber mb-2">
                      Creative Skills
                    </h4>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Working within creative constraints</li>
                      <li>• Atmospheric storytelling through design</li>
                      <li>• Gothic architecture and mood creation</li>
                      <li>• Visual narrative development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-24 bg-gradient-to-r from-xr-neon/10 via-background to-xr-cyber/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover more innovative XR experiences and creative explorations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
            >
              <Link to="/projects/mushroom-house">
                Next: The Mushroom House
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-xr-cyber text-xr-cyber-foreground hover:bg-xr-cyber/80"
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

export default UnrealCinematic;
