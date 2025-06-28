import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Figma,
  Calendar,
  Clock,
  User,
  Eye,
  Layers3,
  Headphones,
  Smartphone,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const NetflixSpatial = () => {
  const projectDetails = {
    title: "Netflix Spatial UI Design",
    category: "Spatial Design",
    year: "2024",
    duration: "1 week",
    client: "Individual Project",
    role: "Spatial UI/UX Designer",
    tools: ["Figma", "Apple Vision Pro Guidelines", "Spatial Design"],
  };

  const features = [
    {
      icon: Eye,
      title: "Immersive Experience",
      description:
        "Designed for Apple Vision Pro to transform any room into a personal theater with seamless content interaction.",
    },
    {
      icon: Layers3,
      title: "Spatial Awareness",
      description:
        "Leveraged spatial design principles to create interfaces that adapt to various physical environments.",
    },
    {
      icon: Headphones,
      title: "Spatial Audio Integration",
      description:
        "Considered spatial audio capabilities to enhance the overall viewing and navigation experience.",
    },
    {
      icon: Monitor,
      title: "4K+ Visual Quality",
      description:
        "Designed with Apple Vision Pro's high resolution display in mind - more pixels than a 4K TV for each eye.",
    },
  ];

  const designPrinciples = [
    {
      title: "Apple Vision Pro Guidelines",
      description:
        "Followed Apple's spatial design guidelines for optimal user experience in immersive environments.",
    },
    {
      title: "Adaptive Interface",
      description:
        "Created user-friendly interfaces that work seamlessly across different physical spaces and settings.",
    },
    {
      title: "Content-First Design",
      description:
        "Prioritized content discoverability and seamless navigation in 3D space.",
    },
    {
      title: "Spatial Interaction",
      description:
        "Designed intuitive spatial interactions that feel natural and responsive in mixed reality.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-background to-red-500/5 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative">
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
                  <Badge className="mb-4 bg-red-500/20 text-red-500 border-red-500/30">
                    {projectDetails.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-red-500 bg-clip-text text-transparent hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300 cursor-default animate-fade-in">
                    {projectDetails.title}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    Driven by a passion to understand spatial UI design, I
                    embarked on redesigning the Netflix app for immersive
                    environments. The goal was to create a user-friendly
                    interface adaptable to various physical spaces, offering an
                    engaging streaming platform.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Imagine navigating Netflix seamlessly in any setting, from
                    cozy living rooms to expansive virtual environments. This
                    project leveraged spatial awareness and interactive design
                    to transform the way users interact with content, enhancing
                    the overall viewing experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Figma className="mr-2 h-4 w-4" />
                    View Figma Design
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-xr-cyber text-muted-foreground hover:text-xr-cyber"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Design Process
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

      {/* Project Image Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
              <CustomVideoPlayer
                src="https://youtu.be/zIOVWQKVdHI?mute=0"
                title="Netflix Spatial UI Design"
                className="aspect-video mb-16"
              />
            </Card>
          </div>
        </div>
      </section>


      {/* Apple Vision Pro Inspiration */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Apple Vision Pro Inspiration
              </h2>
              <p className="text-lg text-muted-foreground">
                Learning from Apple's spatial computing vision
              </p>
            </div>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm mb-12">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-xr-neon">
                      Immersion Research
                    </h3>
                    <blockquote className="text-muted-foreground italic border-l-4 border-xr-neon/30 pl-4 leading-relaxed">
                      "Apple Vision Pro can transform any room into your own
                      personal theater. Expand your movies, shows, and games to
                      your perfect size and experience them in Spatial Audio.
                      Apple Immersive Video puts you in the center of the action
                      with mind-blowing immersion. And with more pixels than a
                      4K TV for each eye, you can enjoy stunning content
                      wherever you are — on a long flight or the couch at home."
                    </blockquote>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-xr-neon/20 to-xr-cyber/20 flex items-center justify-center">
                      <Eye className="w-16 h-16 text-xr-neon/60" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Design Principles */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Design Principles Applied
              </h2>
              <p className="text-lg text-muted-foreground">
                Key spatial design principles that guided the Netflix redesign
                process
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {designPrinciples.map((principle, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-xr-neon/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-xr-neon">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {principle.description}
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

      {/* Learning Outcomes */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Project Insights
              </h2>
              <p className="text-lg text-muted-foreground">
                Key learnings from exploring spatial UI design
              </p>
            </div>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-xr-neon">
                      Spatial Design Skills
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>
                          Understanding of spatial computing principles
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Apple Vision Pro design guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Immersive interface design patterns</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Spatial audio considerations</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-xr-neon">
                      Design Thinking
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>
                          Adaptive interface design for various spaces
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>User experience in immersive environments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Content prioritization in 3D space</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-xr-neon rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Platform-specific design constraints</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-xr-neon/5 rounded-lg border border-xr-neon/20">
                  <p className="text-muted-foreground italic">
                    "This project allowed me to explore the intersection of
                    traditional UI/UX design and spatial computing. By studying
                    Apple's Vision Pro guidelines and reimagining Netflix for
                    immersive environments, I gained valuable insights into the
                    future of interface design. Keep this project simple, and
                    leave some space for me to add pictures of the final UI
                    Design."
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

export default NetflixSpatial;
