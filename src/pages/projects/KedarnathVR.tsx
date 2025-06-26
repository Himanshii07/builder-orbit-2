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
  Mountain,
  Sparkles,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const KedarnathVR = () => {
  const projectDetails = {
    title: "Kedarnath Mythological Story in VR",
    subtitle: "Immersive Spiritual Journey Through Ancient Sacred Tales",
    duration: "8 months",
    year: "2025",
    client: "Cultural Heritage Foundation",
    team: "4 members",
    role: "Lead XR Designer & Developer",
    status: "Completed",
  };

  const technologies = [
    "Unity 3D",
    "VR SDK",
    "C# Programming",
    "3D Modeling",
    "Blender",
    "Photogrammetry",
    "Spatial Audio",
    "Narrative Design",
    "Cultural Research",
  ];

  const features = [
    {
      icon: Mountain,
      title: "Sacred Environment Recreation",
      description:
        "Photorealistic recreation of Kedarnath temple and surrounding Himalayan landscape using photogrammetry and 3D modeling.",
    },
    {
      icon: Sparkles,
      title: "Interactive Mythology",
      description:
        "Immersive storytelling that allows users to witness and interact with ancient mythological events and divine manifestations.",
    },
    {
      icon: Globe,
      title: "Cultural Authenticity",
      description:
        "Extensively researched cultural elements, traditional architecture, and authentic Sanskrit narrations for respectful representation.",
    },
  ];

  const challenges = [
    {
      title: "Cultural Sensitivity",
      description:
        "Ensuring respectful and accurate representation of sacred Hindu mythology while maintaining educational value.",
      solution:
        "Collaborated with cultural experts, religious scholars, and community representatives throughout development.",
    },
    {
      title: "Technical Complexity",
      description:
        "Creating realistic high-altitude environments with weather effects and divine manifestations in VR.",
      solution:
        "Developed custom shaders and particle systems, optimized rendering for VR performance without compromising visual quality.",
    },
    {
      title: "Narrative Flow",
      description:
        "Balancing interactive elements with traditional storytelling to maintain spiritual reverence.",
      solution:
        "Designed guided meditation-style interactions with optional exploration modes for different user preferences.",
    },
  ];

  const outcomes = [
    {
      metric: "95%",
      label: "User Satisfaction",
      description: "Based on post-experience surveys",
    },
    {
      metric: "50K+",
      label: "Experiences Delivered",
      description: "Across cultural centers and museums",
    },
    {
      metric: "15",
      label: "Awards & Recognition",
      description: "Including Cultural Heritage Excellence Award",
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
                <Mountain className="w-4 h-4 mr-2 text-xr-neon" />
                <span className="text-sm font-medium text-xr-neon">
                  Virtual Reality Experience
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
                  Watch Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-xr-cyber text-xr-cyber hover:bg-xr-cyber hover:text-xr-cyber-foreground"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Documentation
                </Button>
              </div>
            </div>

            {/* Project Image/Video */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-xr-neon/20 to-xr-cyber/20 aspect-video mb-16">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-xr-neon/20 text-xr-neon border-xr-neon/30">
                  VR Experience Preview
                </Badge>
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
                  This immersive VR experience brings the sacred mythology of
                  Kedarnath to life, allowing users to witness ancient stories
                  in a beautifully recreated Himalayan environment. The project
                  combines cutting-edge VR technology with deep cultural
                  research to create an educational and spiritually enriching
                  experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Users journey through the sacred temple complex, experience
                  divine manifestations, and learn about the rich cultural
                  heritage through interactive storytelling and guided
                  meditation sequences.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Client</h3>
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
                    Technologies
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

      {/* Key Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Innovative elements that made this experience unique
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
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Challenges & Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                How we overcame technical and cultural obstacles
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
                          Solution
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

      {/* Outcomes & Impact */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Outcomes & Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Measuring the success and cultural impact
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
            Discover more innovative XR experiences and interactive designs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
            >
              <Link to="/projects/savey">Next: Savey - Tangible Computing</Link>
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

export default KedarnathVR;
