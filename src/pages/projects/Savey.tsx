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
  Heart,
  Smile,
  Lightbulb,
  Target,
  Zap,
  Camera,
  TrendingUp,
  Baby,
  GraduationCap,
  Home,
  Sparkles,
  Volume2,
  Coins,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const Savey = () => {
  const projectDetails = {
    title: "Savey - Interactive Piggy Bank",
    subtitle: "A Friendly Companion That Makes Saving Joyful for Kids",
    duration: "2 weeks",
    year: "2025",
    client: "Group Project",
    team: "Team of 2",
    role: "Hardware Integration & UX Design",
    status: "Completed",
  };

  const technologies = [
    "Arduino",
    "IR Sensors",
    "OLED Display",
    "Buzzer Systems",
    "3D Modeling",
    "Laser Cutting",
    "Circuit Design",
    "User Testing",
    "Interaction Design",
  ];

  const features = [
    {
      icon: Eye,
      title: "👁️‍🗨️ Expressive OLED Eyes",
      description:
        "Animated eyes that blink, wink, and express emotions to create a personal connection with children.",
    },
    {
      icon: Volume2,
      title: "🎵 Happy Sounds on Deposits",
      description:
        "Delightful audio feedback that celebrates every coin or note deposited, making saving feel rewarding.",
    },
    {
      icon: Coins,
      title: "🪙 Coin/Note Detection",
      description:
        "Smart sensors that detect when money is added and trigger appropriate celebrations and responses.",
    },
    {
      icon: Sparkles,
      title: "💸️ Transparent Back Panel",
      description:
        "Kids can see their savings grow visually, creating a sense of progress and accomplishment.",
    },
  ];

  const problemSolution = {
    problem: "Kids don't understand the importance of savings",
    solution: "Interactive saving piggy bank that turns saving into a game",
    benefits: [
      "Teaches kids financial habits early",
      "Turns savings into an enjoyable experience",
      "Creates emotional connection with money management",
      "Makes saving feel like play, not obligation",
    ],
  };

  const targetMarket = [
    {
      icon: Baby,
      demographic: "Kids aged 5 to 12 years",
      description: "Primary users who will interact with Savey daily",
    },
    {
      icon: Home,
      demographic: "Parents",
      description: "Who want their children to learn saving habits early",
    },
    {
      icon: GraduationCap,
      demographic: "Schools",
      description: "For financial literacy workshops and educational programs",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Circuit Design & Sensor Integration",
      description:
        "Designed the electronic architecture using Arduino, IR sensors, and buzzer systems for interactive functionality.",
      tools: ["Arduino", "IR Sensors", "Buzzer", "Circuit Design"],
    },
    {
      step: "02",
      title: "3D Modeling & Design",
      description:
        "Created detailed 3D models of the piggy bank form factor, ensuring space for all electronic components.",
      tools: ["3D Modeling Software", "Component Layout", "Design Iteration"],
    },
    {
      step: "03",
      title: "Laser Cutting & Assembly",
      description:
        "Precision laser cutting of components and careful assembly with integrated sensor placement.",
      tools: ["Laser Cutting", "Assembly", "Sensor Integration"],
    },
    {
      step: "04",
      title: "User Testing & Refinement",
      description:
        "Conducted extensive testing with children who especially loved the expressive eyes and blinking animations.",
      tools: ["User Testing", "Feedback Analysis", "Design Refinement"],
    },
  ];

  const futureScope = [
    {
      icon: Lightbulb,
      title: "AI Voice Assistant",
      description:
        "Integrate voice features allowing kids to ask questions about money and receive age-appropriate financial education.",
    },
    {
      icon: Target,
      title: "Mobile App Integration",
      description:
        "Companion app for parents and kids to track savings, set goals, and receive progress reports.",
    },
    {
      icon: TrendingUp,
      title: "Goal-Based Challenges",
      description:
        "Custom saving goals like toys or books, with milestone celebrations and reward systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Playful Design */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-xr-cyber/5" />

        {/* Animated background - more playful for kids project */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-float" />
          <div
            className="absolute top-1/3 right-1/3 w-24 h-24 bg-pink-400/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-blue-400/10 rounded-full blur-xl animate-float"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/10 to-pink-400/10 border border-yellow-400/20 mb-6">
                <Heart className="w-4 h-4 mr-2 text-pink-400" />
                <span className="text-sm font-medium text-pink-400">
                  Interactive Hardware Design
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {projectDetails.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="text-sm border-yellow-400 text-yellow-400"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {projectDetails.year}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-pink-400 text-pink-400"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {projectDetails.duration}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-blue-400 text-blue-400"
                >
                  <Users className="w-3 h-3 mr-1" />
                  {projectDetails.team}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm border-green-400 text-green-400"
                >
                  <Award className="w-3 h-3 mr-1" />
                  {projectDetails.status}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black hover:from-yellow-500 hover:to-pink-500"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch User Testing
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Documentation
                </Button>
              </div>
            </div>

            {/* Hero Image/Demo Space */}
            <CustomVideoPlayer
              src="https://youtu.be/a_lNpr5PO_A"
              title="The Interactive Piggy Bank"
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution - Unique layout */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/5 via-pink-400/5 to-blue-400/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-void/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-xr-void/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">😔</span>
                    </div>
                    <h3 className="text-2xl font-bold text-xr-void">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {problemSolution.problem}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-xr-neon/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-xr-neon">
                      Our Solution
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    {problemSolution.solution}
                  </p>
                  <ul className="space-y-2">
                    {problemSolution.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 mr-2 text-xr-neon" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Playful Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ✨ Savey's Magical Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Every feature designed to make saving feel like play
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const colors = ["yellow", "pink", "blue", "green"];
                const color = colors[index % colors.length];
                return (
                  <Card
                    key={index}
                    className={`border-${color}-200 bg-${color}-50/30 backdrop-blur-sm hover:bg-${color}-50/50 transition-all duration-300 transform hover:scale-105`}
                  >
                    <CardContent className="p-8">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${color}-100 mb-6`}
                      >
                        <span className="text-3xl">
                          {feature.title.split(" ")[0]}
                        </span>
                      </div>
                      <h3
                        className={`text-xl font-semibold mb-3 text-${color}-700`}
                      >
                        {feature.title}
                      </h3>
                      <p className={`text-${color}-600 leading-relaxed`}>
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

      {/* Development Process - Timeline Style */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🛠️ Development Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                From circuit design to user testing
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-xr-cyber to-xr-neon flex items-center justify-center">
                      <span className="text-xl font-bold text-black">
                        {step.step}
                      </span>
                    </div>
                  </div>
                  <Card className="flex-1 border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-xr-cyber">
                        {step.title}
                      </h3>
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎯 Who Loves Savey?
              </h2>
              <p className="text-lg text-muted-foreground">
                Our target audience and market potential
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetMarket.map((market, index) => {
                const Icon = market.icon;
                return (
                  <Card
                    key={index}
                    className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-xr-neon/10 mb-6">
                        <Icon className="h-8 w-8 text-xr-neon" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {market.demographic}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {market.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section className="py-24 bg-gradient-to-r from-xr-cyber/10 via-background to-xr-neon/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🚀 Future Possibilities
              </h2>
              <p className="text-lg text-muted-foreground">
                Exciting features we envision for Savey's evolution
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {futureScope.map((scope, index) => {
                const Icon = scope.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-cyber/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-xr-cyber/10 mb-4">
                        <Icon className="h-6 w-6 text-xr-cyber" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {scope.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {scope.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* User Testing Video Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🎬 Kids Love Savey!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              User testing revealed that children especially loved the
              expressive eyes and blinking animations
            </p>

            <CustomVideoPlayer
              src="/videos/Savey Kids.mp4"
              title="Savey User Testing Highlights"
              className="aspect-video mb-16"
            />

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-green-100 text-green-700 p-4 rounded-lg">
                <strong>Kids loved the eyes!</strong>
                <br />
                Expressive animations created instant connection
              </div>
              <div className="bg-blue-100 text-blue-700 p-4 rounded-lg">
                <strong>Engaging interactions</strong>
                <br />
                Children wanted to keep saving to see reactions
              </div>
              <div className="bg-purple-100 text-purple-700 p-4 rounded-lg">
                <strong>Learning through play</strong>
                <br />
                Successfully turned saving into a fun game
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/10 via-pink-400/10 to-blue-400/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Innovation
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover other projects that blend technology with human experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-xr-neon text-xr-neon hover:bg-xr-neon hover:text-xr-neon-foreground"
            >
              <Link to="/projects/kedarnath">
                Next: Kedarnath Mythological Story
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black hover:from-yellow-500 hover:to-pink-500"
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

export default Savey;
