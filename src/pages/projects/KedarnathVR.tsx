import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  Eye,
  Award,
  Play,
  Heart,
  Mountain,
  Building2,
  BookOpen,
  Sparkles,
  Star,
  Lightbulb,
  Target,
  User,
  GraduationCap,
  Briefcase,
  Zap,
  Navigation as NavigationIcon,
  Hand,
  Layers,
  Volume2,
  Timer,
  Palette,
  Camera,
  Wrench,
  Code,
  TestTube,
  Headphones,
  Quote,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const KedarnathVR = () => {
  const [activeLevel, setActiveLevel] = useState("level1");

  const projectDetails = {
    title: "Kedarnath Mythological Story",
    subtitle: "Immersive Spiritual Journey Through Ancient Sacred Tales",
    duration: "2 months",
    year: "2025",
    client: "Individual Project",
    team: "Solo Developer",
    role: "Lead XR Designer & Developer",
    status: "Completed",
    category: "Virtual Reality & Cultural Heritage",
  };

  const targetAudience = [
    {
      name: "Gen Z",
      age: "Age 15-24",
      icon: Zap,
      characteristics:
        "Born into a digital world, fast content, immersive tech, and short attention spans",
      challenge: "Mythology feels distant or irrelevant in traditional formats",
      color: "blue",
    },
    {
      name: "Young Adults",
      age: "Age 25-35",
      icon: Briefcase,
      characteristics:
        "Juggling careers, responsibilities, and limited time for spiritual travel",
      challenge: "Spiritually curious but time-constrained",
      color: "purple",
    },
    {
      name: "Devotees",
      age: "Under 35",
      icon: Heart,
      characteristics:
        "Yearning for deeper connection with mythology and ritual",
      challenge:
        "Spiritually inclined but physically distant or restricted from travel",
      color: "orange",
    },
  ];

  const experienceFlow = {
    level1: [
      {
        step: "01",
        title: "Arrival at Kedarnath Temple",
        description:
          "Enter the sacred virtual space and feel the divine presence",
        icon: Mountain,
      },
      {
        step: "02",
        title: "Exploring the Temple",
        description: "Discover intricate architecture and sacred spaces within",
        icon: Building2,
      },
      {
        step: "03",
        title: "Participating in Ritual",
        description: "Engage in traditional prayers and sacred ceremonies",
        icon: Hand,
      },
    ],
    level2: [
      {
        step: "01",
        title: "Starting the Mythological Story",
        description: "Begin the ancient narrative journey through time",
        icon: BookOpen,
      },
      {
        step: "02",
        title: "Experiencing the Story",
        description: "Witness divine manifestations and mythological events",
        icon: Sparkles,
      },
      {
        step: "03",
        title: "Returning to the Temple",
        description: "Complete the spiritual circle back to the sacred space",
        icon: Building2,
      },
    ],
  };

  const userInteractions = [
    {
      title: "Locomotion",
      description: "Easy navigation through the sacred environment",
      icon: NavigationIcon,
    },
    {
      title: "Performing Rituals",
      description: "Interactive participation in traditional ceremonies",
      icon: Hand,
    },
    {
      title: "Interacting with Sculptures & Deities",
      description: "Engage with sacred art and divine representations",
      icon: Palette,
    },
    {
      title: "Exploring the Sacred Book",
      description: "Discover ancient texts and mythological knowledge",
      icon: BookOpen,
    },
    {
      title: "Visual & Audio Feedback",
      description: "Immersive sensory responses to user actions",
      icon: Volume2,
    },
    {
      title: "Timed UI Appearance",
      description: "Context-sensitive interface elements",
      icon: Timer,
    },
  ];

  const challenges = [
    {
      title: "Character and Deity Modeling",
      description:
        "Modeling characters and deities was a major challenge, requiring detailed attention to cultural accuracy and spiritual representation.",
      solution:
        "Extensive research and multiple iterations to achieve respectful and authentic representations.",
    },
    {
      title: "Animation Complexity",
      description:
        "Animating them was even tougher, especially rigging clothing like dhotis, which often clipped or stuck unnaturally while walking.",
      solution:
        "Advanced rigging techniques and careful weight painting to achieve natural cloth movement.",
    },
    {
      title: "Narrative Tone",
      description:
        "Writing narrations in a tone that felt spiritual yet simple, avoiding heavy 'shudh Hindi' to maintain accessibility.",
      solution:
        "Multiple script revisions with cultural consultants to balance authenticity with accessibility.",
    },
    {
      title: "Custom Asset Creation",
      description:
        "Assets weren't readily available, I had to create or customize them manually. Creating the whole Temple Model from scratch.",
      solution:
        "Developed comprehensive asset library through careful 3D modeling and texturing work.",
    },
    {
      title: "Technical Learning Curve",
      description:
        "As a beginner, understanding Blueprint scripting and Niagara particle systems took time.",
      solution:
        "Dedicated learning sessions and community support to master Unreal Engine 5 systems.",
    },
    {
      title: "VR Hardware Issues",
      description:
        "Connecting my VR Headset was also a challenge because of some glitch it was very difficult.",
      solution:
        "Troubleshooting through forums and technical documentation to resolve compatibility issues.",
    },
  ];

  const developmentProcess = [
    {
      phase: "Research & Planning",
      description: "Research to understand the temple interior and details",
      icon: BookOpen,
    },
    {
      phase: "3D Modeling",
      description: "Created the whole temple in Maya from scratch",
      icon: Layers,
    },
    {
      phase: "Texturing & Materials",
      description: "Created UV Maps and added texture using Substance Painter",
      icon: Palette,
    },
    {
      phase: "Environment Design",
      description:
        "Created the environment and level design in Unreal Engine 5",
      icon: Mountain,
    },
    {
      phase: "Character Creation",
      description:
        "3D Modeled the characters and rigged them using Meshy.ai, Mixamo & Animate Anything",
      icon: User,
    },
    {
      phase: "Cinematic Creation",
      description:
        "Created 5 scenes for the mythological story and added sequencer, took cinematic shots and rendered them",
      icon: Camera,
    },
    {
      phase: "Testing & Validation",
      description:
        "Conducted comprehensive user testing for experience optimization",
      icon: TestTube,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Spiritual Theme */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-orange-900/20" />

        {/* Spiritual floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-orange-400/20 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-yellow-400/20 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-red-400/20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-22 h-22 bg-pink-400/20 rounded-full blur-lg animate-pulse"
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
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-400/10 to-red-400/10 border border-orange-400/20 mb-8">
                <Building2 className="w-5 h-5 mr-3 text-orange-400" />
                <span className="text-base font-medium text-orange-400">
                  Main Project • Cultural Heritage VR
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>

              <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-10">
                {projectDetails.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <Badge
                  variant="outline"
                  className="text-base py-2 px-4 border-orange-400 text-orange-400"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {projectDetails.year}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-base py-2 px-4 border-red-400 text-red-400"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {projectDetails.duration}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-base py-2 px-4 border-pink-400 text-pink-400"
                >
                  <Users className="w-4 h-4 mr-2" />
                  {projectDetails.team}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-orange-400 to-red-400 text-white hover:from-orange-500 hover:to-red-500"
                >
                  <Play className="mr-3 h-5 w-5" />
                  Watch Process Video
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
                >
                  <Headphones className="mr-3 h-5 w-5" />
                  Experience Preview
                </Button>
              </div>
            </div>

            {/* Hero Video Section */}
            <CustomVideoPlayer
              src="/videos/Trailer Video.mp4"
              title="Immersive Experience of Kedarnath Temple | Trailer Video"
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      {/* Problem Statement & Opportunity */}
      <section className="py-24 bg-gradient-to-r from-orange-900/10 via-background to-red-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Sacred Challenge
              </h2>
              <p className="text-xl text-muted-foreground">
                Bridging ancient wisdom with modern hearts
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-400 text-xl">
                    <Target className="w-6 h-6 mr-3" />
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    Many young people today are disconnected from the rich
                    mythological stories and spiritual wisdom that shaped Indian
                    culture. Sacred texts like the Bhagavad Gita or Shiv Puran
                    are often unread or unfamiliar to them, not due to lack of
                    interest, but because of changing lifestyles, shorter
                    attention spans, and a world dominated by screens and tech.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-400 text-xl">
                    <Lightbulb className="w-6 h-6 mr-3" />
                    The Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base mb-4">
                    In a time when ancient temples are being reduced to
                    photo-ops, and spiritual stories are fading from collective
                    memory, there is a unique opportunity to reconnect people
                    with India's sacred heritage in a way that is immersive,
                    respectful, and relevant:
                  </p>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>
                      • <strong>Reviving Sacred Narratives</strong> - Presenting
                      mythology as living stories
                    </li>
                    <li>
                      • <strong>Reclaiming Reverence Through Innovation</strong>{" "}
                      - Using technology respectfully
                    </li>
                    <li>
                      • <strong>A Scalable, Replicable Model</strong> -
                      Expandable to other sacred sites
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-pink-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-pink-400 text-xl">
                    <Sparkles className="w-6 h-6 mr-3" />
                    The Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    A deeply immersive VR experience that lets users step inside
                    Kedarnath temple, engage in rituals, discover mythological
                    stories, and reconnect with India's sacred heritage. Users
                    need an engaging and immersive way to experience Indian
                    mythological stories because traditional storytelling
                    methods no longer capture their interest due to language
                    barriers and decreasing attention spans.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Statement */}
            <div className="mt-20 mb-16">
              <Card className="border-orange-400/30 bg-gradient-to-r from-orange-400/5 to-red-400/5 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-orange-400 mb-4 mx-auto" />
                  <p className="text-2xl font-medium text-center italic text-orange-400">
                    "Story from the past, but as an experience in the present"
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why This Experience Matters */}
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-center mb-12">
                Why This Experience Matters
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Mythology Made Accessible",
                    desc: "Brings ancient stories to life in a format Gen Z and young adults engage with immersive and tech-driven",
                    icon: BookOpen,
                  },
                  {
                    title: "Spiritual Engagement",
                    desc: "Offers a meaningful connection for those who can't travel to Kedarnath, especially working professionals",
                    icon: Heart,
                  },
                  {
                    title: "Cultural Awareness",
                    desc: "Educates users about Indian mythology, rituals, and temple architecture in a way that feels real and respectful",
                    icon: Building2,
                  },
                  {
                    title: "Interactive Learning",
                    desc: "Instead of passive viewing, users participate, making the experience memorable and emotionally powerful",
                    icon: Hand,
                  },
                  {
                    title: "Bridges Gaps",
                    desc: "Fills the growing disconnect between traditional spirituality and modern lifestyles",
                    icon: Zap,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-orange-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <h4 className="font-semibold mb-3 text-orange-400">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kedarnath */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Why Kedarnath?</h2>
            <div className="space-y-6 text-md text-muted-foreground leading-relaxed">
              <p>
                Explored multiple <strong>Jyotirlingas</strong> before choosing
                Kedarnath due to its spiritual depth and challenging
                accessibility.
              </p>
              <p>
                Studied{" "}
                <strong>
                  rituals, temple architecture, and mythological stories
                </strong>{" "}
                from books, documentaries, and trusted websites.
              </p>
              <p>
                Noticed how{" "}
                <strong>many visitors today focus more on social media</strong>{" "}
                than spiritual connection.
              </p>
            </div>

            <div className="mt-12 mb-8">
              <Card className="border-red-400/30 bg-gradient-to-r from-red-400/5 to-orange-400/5">
                <CardContent className="p-8">
                  <Quote className="w-6 h-6 text-red-400 mb-4 mx-auto" />
                  <p className="text-xl font-medium text-center text-red-400 mb-6">
                    "Because Faith is fading under fame."
                  </p>
                  <hr className="border-red-400/20 mb-6" />
                  <p className="text-lg font-medium text-center mb-4">
                    Video Available:
                  </p>
                  <CustomVideoPlayer
              src="/videos/Whyyy.mp4"
              title=""
              className="aspect-video mb-16"
            />
                  <p className="text-lg text-center text-red-400 font-semibold">
                    "The Neglected Sanctity of Kedarnath"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gradient-to-r from-orange-900/10 via-background to-red-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Target Audience</h2>
              <p className="text-xl text-muted-foreground">
                Understanding who needs this sacred connection
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudience.map((audience, index) => {
                const Icon = audience.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div
                          className={`w-16 h-16 bg-${audience.color}-400/10 rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon
                            className={`w-8 h-8 text-${audience.color}-400`}
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {audience.name}
                        </h3>
                        <Badge variant="outline" className="text-sm">
                          {audience.age}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-orange-400">
                            CHARACTERISTICS
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {audience.characteristics}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2 text-red-400">
                            CHALLENGE
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {audience.challenge}
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

      {/* Experience Flow */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Experience Flow</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Two immersive levels of spiritual journey
              </p>

              {/* Interactive Level Buttons */}
              <div className="flex justify-center gap-4 mb-12">
                <Button
                  onClick={() => setActiveLevel("level1")}
                  className={`text-lg py-3 px-8 ${
                    activeLevel === "level1"
                      ? "bg-orange-400 text-white hover:bg-orange-500"
                      : "bg-transparent border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                  }`}
                  variant={activeLevel === "level1" ? "default" : "outline"}
                >
                  Level 1: Temple Experience
                </Button>
                <Button
                  onClick={() => setActiveLevel("level2")}
                  className={`text-lg py-3 px-8 ${
                    activeLevel === "level2"
                      ? "bg-red-400 text-white hover:bg-red-500"
                      : "bg-transparent border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                  }`}
                  variant={activeLevel === "level2" ? "default" : "outline"}
                >
                  Level 2: Mythological Journey
                </Button>
              </div>
            </div>

            {/* Dynamic Content Based on Active Level */}
            <div className="transition-all duration-500 ease-in-out">
              {activeLevel === "level1" && (
                <div className="grid md:grid-cols-3 gap-8 opacity-100 animate-in slide-in-from-left duration-500">
                  {experienceFlow.level1.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <Card
                        key={index}
                        className="text-center border-orange-400/50 bg-gradient-to-br from-orange-400/10 to-red-400/10 backdrop-blur-sm hover:border-orange-400 transition-all duration-300 transform hover:scale-105"
                      >
                        <CardContent className="p-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <span className="text-xl font-bold text-white">
                              {step.step}
                            </span>
                          </div>
                          <Icon className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                          <h4 className="text-lg font-semibold mb-3 text-orange-400">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}

              {activeLevel === "level2" && (
                <div className="grid md:grid-cols-3 gap-8 opacity-100 animate-in slide-in-from-right duration-500">
                  {experienceFlow.level2.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <Card
                        key={index}
                        className="text-center border-red-400/50 bg-gradient-to-br from-red-400/10 to-pink-400/10 backdrop-blur-sm hover:border-red-400 transition-all duration-300 transform hover:scale-105"
                      >
                        <CardContent className="p-8">
                          <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <span className="text-xl font-bold text-white">
                              {step.step}
                            </span>
                          </div>
                          <Icon className="w-8 h-8 text-red-400 mx-auto mb-4" />
                          <h4 className="text-lg font-semibold mb-3 text-red-400">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* User Interactions */}
      <section className="py-24 bg-gradient-to-r from-orange-900/10 via-background to-red-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                User Actions & Interactions
              </h2>
              <p className="text-xl text-muted-foreground">
                Immersive ways to connect with the sacred experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userInteractions.map((interaction, index) => {
                const Icon = interaction.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            {interaction.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {interaction.description}
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

      {/* Challenges */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Development Challenges
              </h2>
              <p className="text-xl text-muted-foreground">
                Overcoming obstacles to create an authentic spiritual experience
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
                        <h3 className="text-xl font-semibold mb-3 text-red-400">
                          Challenge: {challenge.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-orange-400">
                          Solution Approach
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

      {/* Development Process */}
      <section className="py-24 bg-gradient-to-r from-orange-900/10 via-background to-red-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Development Process</h2>
              <p className="text-xl text-muted-foreground">
                From research to final experience - a comprehensive 2-month
                journey
              </p>
            </div>

            <div className="relative">
              {/* Process Flow with Arrows */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {developmentProcess.map((process, index) => {
                  const Icon = process.icon;
                  const isLastItem = index === developmentProcess.length - 1;

                  return (
                    <div key={index} className="relative">
                      <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105 h-full">
                        <CardContent className="p-6">
                          <div className="flex flex-col items-center h-full">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="bg-orange-400/10 rounded-full px-3 py-1 mb-4">
                              <span className="text-xs font-bold text-orange-400">
                                PHASE {index + 1}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-orange-400">
                              {process.phase}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                              {process.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Arrow between cards - only show on larger screens and not on last item */}
                      {!isLastItem && (
                        <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                            <ChevronRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Arrow Flow */}
              <div className="lg:hidden mt-8 flex justify-center">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400 text-sm font-medium">
                    Process Flow
                  </span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes / Skills Acquired */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Learning Outcomes & Skills Acquired
              </h2>
              <p className="text-xl text-muted-foreground">
                Key competencies and insights gained through this comprehensive
                VR project
              </p>
            </div>

            {/* Technical Skills */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-400 text-2xl">
                    <Code className="w-6 h-6 mr-3" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-3">
                        3D Development
                      </h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Maya 3D modeling and animation</li>
                        <li>• Character rigging and animation</li>
                        <li>• UV mapping and texturing workflows</li>
                        <li>• Substance Painter material creation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-3">
                        VR Development
                      </h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Unreal Engine 5 mastery</li>
                        <li>• Blueprint visual scripting</li>
                        <li>• VR interaction design</li>
                        <li>• Niagara particle systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-400 text-2xl">
                    <Heart className="w-6 h-6 mr-3" />
                    Cultural & Creative Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-400 mb-3">
                        Cultural Research
                      </h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Mythological story analysis</li>
                        <li>• Sacred architecture study</li>
                        <li>• Ritual and ceremony research</li>
                        <li>• Cultural sensitivity in design</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-400 mb-3">
                        Experience Design
                      </h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li>• Immersive storytelling</li>
                        <li>• User experience flow design</li>
                        <li>• Emotional engagement strategies</li>
                        <li>• Cultural narrative adaptation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Learning Insights */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Cross-Platform Integration",
                  description:
                    "Mastered the complete pipeline from Maya to Substance Painter to Unreal Engine 5, understanding how different tools work together.",
                  icon: Layers,
                  color: "orange",
                },
                {
                  title: "Cultural Technology Bridge",
                  description:
                    "Learned to use modern technology respectfully to preserve and share ancient cultural heritage with contemporary audiences.",
                  icon: Building2,
                  color: "red",
                },
                {
                  title: "Problem-Solving Under Constraints",
                  description:
                    "Developed creative solutions for technical challenges while maintaining cultural authenticity and spiritual reverence.",
                  icon: Lightbulb,
                  color: "pink",
                },
                {
                  title: "User-Centered Design",
                  description:
                    "Understanding different audience needs (Gen Z, Young Adults, Devotees) and designing experiences that resonate with each group.",
                  icon: User,
                  color: "yellow",
                },
                {
                  title: "Independent Project Management",
                  description:
                    "Successfully managed a complex 2-month solo project from concept to completion, balancing multiple technical and creative aspects.",
                  icon: Target,
                  color: "blue",
                },
                {
                  title: "Cinematic Storytelling",
                  description:
                    "Created 5 mythological scenes with sequencer, mastering cinematic composition, lighting, and narrative pacing in VR.",
                  icon: Camera,
                  color: "purple",
                },
              ].map((insight, index) => {
                const Icon = insight.icon;
                return (
                  <Card
                    key={index}
                    className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 bg-${insight.color}-400/10 rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className={`w-6 h-6 text-${insight.color}-400`} />
                      </div>
                      <h3 className="font-semibold mb-3 text-orange-400">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {insight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Final Insight */}
            <Card className="border-orange-400/30 bg-gradient-to-r from-orange-400/5 to-red-400/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-orange-400">
                  Key Project Insight
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  This project taught me that technology is not just about
                  innovation—it's about preservation, connection, and respect.
                  By creating an immersive VR experience of Kedarnath, I learned
                  how to bridge the gap between ancient wisdom and modern minds,
                  ensuring that sacred stories continue to inspire and educate
                  future generations in ways that feel both authentic and
                  accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-24 bg-gradient-to-r from-orange-400/10 via-background to-red-400/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Explore More Sacred Innovations
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover other projects that showcase the intersection of
            technology, culture, and meaningful experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
            >
              <Link to="/projects/savey">Next: Savey Interactive Learning</Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-4 bg-gradient-to-r from-orange-400 to-red-400 text-white hover:from-orange-500 hover:to-red-500"
            >
              <Link to="/projects">
                <Eye className="mr-3 h-5 w-5" />
                All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KedarnathVR;
