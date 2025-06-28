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
  Brain,
  Camera,
  Database,
  Zap,
  BookOpen,
  Lightbulb,
  Target,
  Atom,
  FlaskConical,
  Palette,
  ImageIcon,
  Cpu,
  GraduationCap,
  TestTube,
  BarChart3,
  Microscope,
  Binary,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import CustomVideoPlayer from "@/components/ui/VideoPlayer";

const SmartChemistry = () => {
  const projectDetails = {
    title: "Smart Chemistry",
    subtitle: "AI-Powered Educational Tool for Interactive Chemistry Learning",
    duration: "1 Week",
    year: "2025",
    client: "Educational Innovation Project",
    team: "2 Members",
    role: "AI Developer & Designer",
    status: "Completed",
    category: "AI & Education",
  };

  const technologies = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Image Recognition",
    "Computer Vision",
    "Custom Dataset",
    "Model Training",
    "Educational Technology",
    "User Interface Design",
  ];

  const developmentSteps = [
    {
      step: "01",
      title: "Design & Development of Color-Coded Cards",
      description:
        "Created a comprehensive set of color-coded element cards, each representing different chemical elements with distinctive visual identifiers for easy recognition.",
      tools: ["Design System", "Color Theory", "Element Research"],
      icon: Palette,
    },
    {
      step: "02",
      title: "Data Collection for AI Training",
      description:
        "Systematically collected and labeled a custom dataset of card combinations, capturing various angles, lighting conditions, and compound formations.",
      tools: ["Data Collection", "Image Labeling", "Dataset Creation"],
      icon: Database,
    },
    {
      step: "03",
      title: "AI Model Development",
      description:
        "Trained a computer vision model to recognize card combinations and identify chemical compounds, implementing real-time feedback mechanisms.",
      tools: ["Deep Learning", "Model Training", "Validation Testing"],
      icon: Brain,
    },
    {
      step: "04",
      title: "Interface & Integration",
      description:
        "Built a simple, intuitive interface optimized for classroom use, ensuring smooth interaction between students and the AI recognition system.",
      tools: ["UI Design", "System Integration", "User Testing"],
      icon: Lightbulb,
    },
  ];

  const projectFeatures = [
    {
      icon: Atom,
      title: "Color-Coded Element Cards",
      description:
        "Each chemical element represented by uniquely designed, color-coded cards that are both educational and visually appealing for student engagement.",
      category: "Design",
    },
    {
      icon: Camera,
      title: "Image Recognition System",
      description:
        "Advanced computer vision AI that instantly identifies card arrangements and recognizes the chemical compounds being formed by students.",
      category: "AI Technology",
    },
    {
      icon: Zap,
      title: "Real-Time Feedback",
      description:
        "Immediate response system that provides instant feedback to students about their compound formations, enhancing the learning experience.",
      category: "User Experience",
    },
    {
      icon: GraduationCap,
      title: "Educational Focus",
      description:
        "Designed specifically for classroom environments to make chemistry concepts more tangible and interactive for school students.",
      category: "Education",
    },
  ];

  const problemStatement = {
    challenge:
      "Chemistry can be hard to understand for school students, especially when it's taught through books and memorization. Concepts like elements and how they form compounds often feel confusing and boring.",
    objective:
      "Create an interactive educational tool that allows students to build and identify chemical compounds using color-coded element cards, enhancing their grasp of how elements combine to form compounds and promoting active participation in chemistry education.",
    vision:
      "By integrating technology into chemistry education, we transform abstract concepts into tangible experiences, creating a more interactive and enjoyable learning experience for students.",
  };

  const technicalAchievements = [
    {
      title: "Custom AI Model Development",
      description:
        "Successfully trained a computer vision model from scratch using our custom dataset of card combinations and chemical compounds.",
    },
    {
      title: "Real-Time Recognition System",
      description:
        "Implemented an efficient image recognition system capable of identifying chemical compounds instantly as students arrange the cards.",
    },
    {
      title: "Educational Technology Integration",
      description:
        "Created a seamless bridge between traditional learning methods and modern AI technology for enhanced educational outcomes.",
    },
    {
      title: "User-Centered Design",
      description:
        "Developed an intuitive interface specifically designed for classroom environments and student interaction patterns.",
    },
  ];

  const learningOutcomes = [
    "AI & Machine Learning Principles",
    "Deep Learning Fundamentals",
    "Image Recognition Systems",
    "Computer Vision Techniques",
    "Data Collection & Labeling",
    "Model Training & Validation",
    "Educational Technology Design",
    "Problem-Solving with AI",
  ];

  const projectImpact = [
    {
      metric: "Learning Enhancement",
      description:
        "Transforms abstract chemistry concepts into tangible, interactive experiences",
    },
    {
      metric: "Student Engagement",
      description:
        "Makes chemistry fun and interactive, reducing the boring factor of memorization",
    },
    {
      metric: "Real-Time Learning",
      description:
        "Instant feedback helps students understand compound formation immediately",
    },
    {
      metric: "Classroom Ready",
      description:
        "Simple interface designed specifically for smooth classroom integration",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Chemistry Theme */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-green-900/20" />

        {/* Floating chemistry elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-400/20 rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/3 right-1/4 w-18 h-18 bg-orange-400/20 rounded-full blur-lg animate-pulse"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-400/10 to-blue-400/10 border border-green-400/20 mb-6">
                <Brain className="w-4 h-4 mr-2 text-green-400" />
                <span className="text-sm font-medium text-green-400">
                  AI-Powered Educational Tool
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {projectDetails.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                {projectDetails.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge
                  variant="outline"
                  className="text-sm border-green-400 text-green-400"
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {projectDetails.year}
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
                  className="text-sm border-purple-400 text-purple-400"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  {projectDetails.duration}
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-400 to-blue-400 text-white hover:from-green-500 hover:to-blue-500"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch AI Recognition Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  <FlaskConical className="mr-2 h-4 w-4" />
                  View Chemistry Interface
                </Button>
              </div>
            </div>

            {/* Hero Video/Image Section */}
            <CustomVideoPlayer
              src="https://youtu.be/92YwKlPZmj8"
              title="Smart Chemistry AI Recognition Demo"
              className="aspect-video mb-16"
            />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-gradient-to-r from-green-900/10 via-background to-blue-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🎯 The Challenge
              </h2>
              <p className="text-lg text-muted-foreground">
                Transforming chemistry education from abstract to interactive
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-400">
                    <Target className="w-5 h-5 mr-2" />
                    Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problemStatement.challenge}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-400">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Objective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problemStatement.objective}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {problemStatement.vision}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🔬 Development Process
              </h2>
              <p className="text-lg text-muted-foreground">
                From concept to AI-powered chemistry education tool
              </p>
            </div>

            <div className="grid gap-8">
              {developmentSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={index}
                    className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-6">
                          <span className="text-xl font-bold text-white">
                            {step.step}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mb-2">
                            Process {step.step}
                          </div>
                          <h3 className="text-2xl font-semibold text-green-400 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {step.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.tools.map((tool, toolIndex) => (
                              <div
                                key={toolIndex}
                                className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold"
                              >
                                {tool}
                              </div>
                            ))}
                          </div>
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
                Key technical milestones accomplished in one week
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalAchievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-green-400">
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

      {/* Project Impact */}
      <section className="py-24 bg-gradient-to-r from-green-900/10 via-background to-blue-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                📊 Educational Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                How Smart Chemistry transforms the learning experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectImpact.map((impact, index) => (
                <Card
                  key={index}
                  className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-green-400">
                      {impact.metric}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                📚 Learning Outcomes
              </h2>
              <p className="text-lg text-muted-foreground">
                AI and machine learning skills developed through this project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {learningOutcomes.map((skill, index) => (
                <Card
                  key={index}
                  className="text-center p-4 border-border/50 bg-card/50 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="w-8 h-8 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-400 text-sm font-bold">
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

            <div className="mt-12 text-center">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-green-400">
                    Key Learning Insight
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This project provided hands-on experience with the complete
                    AI development pipeline, from problem identification to data
                    collection, model training, and real-world application. It
                    demonstrated how AI can be applied to solve practical
                    educational challenges and make learning more engaging and
                    effective for students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-24 bg-gradient-to-r from-green-400/10 via-background to-blue-400/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore More Educational Innovations
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover other projects that showcase the intersection of technology
            and education
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
            >
              <Link to="/projects/savey">
                Similar: Savey Interactive Learning
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-400 to-blue-400 text-white hover:from-green-500 hover:to-blue-500"
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

export default SmartChemistry;
