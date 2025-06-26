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
  Target,
  Shield,
  Gamepad2,
  TrendingUp,
  Users as UsersIcon,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const ShootingRange = () => {
  const projectDetails = {
    title: "Shooting Range in VR",
    subtitle: "Immersive VR Experience Exploring Fundamental Interactions",
    duration: "2 weeks",
    year: "2025",
    client: "Individual Project",
    team: "Solo Developer",
    role: "VR Developer & Designer",
    status: "Completed",
  };

  const technologies = [
    "Unreal Engine 5",
    "VR SDK",
    "C# Programming",
    "Niagara Visual Effects",
    "3D Audio Design",
    "Physics Simulation",
    "VR Interaction Systems",
    "Decal Systems",
    "UI/UX Design",
  ];

  const features = [
    {
      icon: Gamepad2,
      title: "Interactive Gun Mechanics",
      description:
        "Realistic gun handling with grab interactions, aiming mechanics, and responsive shooting controls for authentic VR gameplay.",
    },
    {
      icon: Target,
      title: "Target Practice Environment",
      description:
        "Immersive shooting range setup with targets, realistic environment design, and engaging practice scenarios.",
    },
    {
      icon: Shield,
      title: "Simple and Functional UI",
      description:
        "Clean, intuitive user interface designed specifically for VR interactions, ensuring smooth user experience.",
    },
  ];

  const keyFeatures = [
    {
      category: "Gameplay Features",
      features: [
        "Interactive Gun Mechanics",
        "Target Practice Environment",
        "Simple and Functional UI",
      ],
    },
    {
      category: "Immersion and Feedback",
      features: [
        "Bullet Hole Decals",
        "Realistic Shooting Feedback",
        "Sound Design",
      ],
    },
    {
      category: "Learning Outcomes",
      features: [
        "Fundamental VR Interactions",
        "3D Space Object Interaction",
        "Foundation for Complex VR Experiences",
      ],
    },
    {
      category: "Technical Implementation",
      features: [
        "Niagara Fire Effects",
        "Physics-Based Interactions",
        "Visual and Audio Feedback Systems",
      ],
    },
  ];

  const technicalAchievements = [
    {
      title: "Bullet Hole Decals",
      description:
        "Dynamic bullet hole decals that appear where bullets impact surfaces, providing visual feedback and enhancing realism of the shooting experience.",
    },
    {
      title: "Realistic Shooting Feedback",
      description:
        "Comprehensive feedback system combining visual effects with Niagara fire effects and physics responses to create immersive shooting interactions.",
    },
    {
      title: "Sound Design",
      description:
        "Carefully crafted audio feedback including gunshot sounds, bullet impacts, and environmental audio to enhance the overall immersive experience.",
    },
    {
      title: "VR Interaction Foundation",
      description:
        "Implementation of fundamental VR interaction patterns that serve as a solid foundation for more complex VR experiences and future projects.",
    },
  ];

  const outcomes = [
    {
      metric: "2 weeks",
      label: "Development Time",
      description: "Rapid prototyping and implementation",
    },
    {
      metric: "100%",
      label: "Solo Development",
      description: "Individual project showcasing skills",
    },
    {
      metric: "Foundation",
      label: "for Future VR",
      description: "Learning base for complex experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-xr-void/5" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-xr-void/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-xr-neon/10 rounded-full blur-3xl animate-float"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-xr-void/10 border border-xr-void/20 mb-6">
                <Target className="w-4 h-4 mr-2 text-xr-void" />
                <span className="text-sm font-medium text-xr-void">
                  VR Training Simulation
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-xr-void bg-clip-text text-transparent">
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
                  className="bg-xr-void text-xr-void-foreground hover:bg-xr-void/80"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Experience Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Safety Features
                </Button>
              </div>
            </div>

            {/* Project Image/Video */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-xr-void/20 to-xr-neon/20 aspect-video mb-16">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <Badge className="bg-xr-void/20 text-xr-void border-xr-void/30">
                  VR Training Environment
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
                  The VR Shooting Range is an immersive virtual reality
                  experience where users can grab a gun, aim, and shoot at
                  targets in a realistic range setup. With interactive elements,
                  bullet hole decals, Niagara fire effects, and sound feedback,
                  this project showcases basic VR interactions and responsive
                  gameplay in a training-style environment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The purpose of this experience was to explore and implement
                  fundamental VR interactions in a game-like environment. By
                  building a virtual shooting range, the goal was to learn how
                  users interact with objects in 3D space, and how feedback
                  through visuals, sound, and physics can enhance immersion. It
                  also serves as a foundation for developing more complex VR
                  experiences in the future.
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
                Core Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Advanced capabilities that deliver realistic training experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-void/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-xr-void/10 mb-4">
                        <Icon className="h-6 w-6 text-xr-void" />
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

      {/* Feature Breakdown */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Feature Breakdown
              </h2>
              <p className="text-lg text-muted-foreground">
                Detailed look at gameplay and immersion elements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {keyFeatures.map((category, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-xr-neon">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-xr-void rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Achievements */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Technical Innovations
              </h2>
              <p className="text-lg text-muted-foreground">
                Breakthrough technologies that power the simulation
              </p>
            </div>

            <div className="space-y-6">
              {technicalAchievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-cyber/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-xr-cyber/10 flex items-center justify-center">
                          <Zap className="h-5 w-5 text-xr-cyber" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-xr-cyber">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.description}
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
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Training Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                Measuring effectiveness and user satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <Card
                  key={index}
                  className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-void/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-xr-void mb-2">
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

            {/* Additional Benefits */}
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="h-6 w-6 text-xr-neon mr-3" />
                    <h3 className="text-lg font-semibold">Cost Efficiency</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Reduced training costs by 60% compared to traditional live
                    ammunition training, while maintaining the same level of
                    effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <UsersIcon className="h-6 w-6 text-xr-cyber mr-3" />
                    <h3 className="text-lg font-semibold">Scalability</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Successfully deployed across 15+ training facilities,
                    supporting simultaneous training of multiple users with
                    consistent quality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other Projects */}
      <section className="py-24 bg-gradient-to-r from-xr-void/10 via-background to-xr-neon/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Work
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover other innovative projects that showcase the versatility of
            XR technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
            >
              <Link to="/projects/kedarnath">
                Previous: Kedarnath Mythological Story
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-xr-void text-xr-void-foreground hover:bg-xr-void/80"
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

export default ShootingRange;
