import React, { useEffect, useRef, useState } from "react";
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
import Footer from "@/components/Footer";

const About = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "Unreal Engine 5", level: 95 },
    { name: "Unity 3D", level: 88 },
    { name: "Blender", level: 72 },
    { name: "Touch Design", level: 85 },
    { name: "UX/UI Design", level: 90 },
    { name: "Maya", level: 82 },
  ];

  const experiences = [
    {
      year: "2024 - 2026",
      role: "M.des Immersive Media Design",
      company: "MIT ADT, Pune",
      description: "From MIT ADT, Pune. In this I learned about XR.",
    },
    {
      year: "2023 - 2024",
      role: "UI/UX Freelancer",
      company: "Various Companies",
      description:
        "I learned ui/ux from youtube and self learned then i did some freelancing work where I used to design websites for different companies on wordpress, framer, wix, webflow.",
    },
    {
      year: "2020 - 2023",
      role: "Bcom Programme",
      company: "Mata Sundri College, Delhi University",
      description:
        "Business and commerce education providing a strong foundation for understanding project management and client relations.",
    },
  ];

  // Intersection Observer for skill bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Wiggle animation for coffee button every 15 seconds
  useEffect(() => {
    const wiggleInterval = setInterval(() => {
      const coffeeButton = document.getElementById("coffee-button");
      if (coffeeButton) {
        coffeeButton.style.animation = "none";
        setTimeout(() => {
          coffeeButton.style.animation = "wiggle 1s ease-in-out";
        }, 100);
      }
    }, 15000);

    return () => clearInterval(wiggleInterval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-xr-neon/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="relative group">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-xr-neon/20 to-xr-cyber/20 relative overflow-hidden hover:shadow-[0_0_30px_rgba(46,213,115,0.3)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  <img
                    
                    src="/Photos/me.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-center rounded-2xl"
                  />
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-xr-neon/10 border border-xr-neon/20 mb-6 hover:bg-xr-neon/20 transition-all duration-300 cursor-pointer">
                  <Headphones className="w-4 h-4 mr-2 text-xr-neon" />
                  <span className="text-sm font-medium text-xr-neon">
                    XR Design Specialist
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-xr-neon bg-clip-text text-transparent animate-fade-in">
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
                  My interests are learning new design trends and investing in
                  the stock market.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80 transition-all duration-300">
                    <Download className="mr-2 h-4 w-4 group-hover:hidden" />
                    <div className="mr-2 h-4 w-4 hidden group-hover:flex items-center space-x-1">
                      <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
                      <div
                        className="w-1 h-1 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-1 h-1 bg-current rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    Download Resume
                  </Button>

                  <Button
                    id="coffee-button"
                    variant="outline"
                    className="border-xr-cyber text-xr-cyber hover:bg-xr-cyber hover:text-xr-cyber-foreground transition-all duration-300"
                  >
                    <Coffee className="mr-2 h-4 w-4" />
                    Let's Grab Coffee <span className="ml-1">☕</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-24 bg-muted/20" ref={skillsRef}>
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
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-xr-neon transition-all duration-1500 ease-out ${
                        skillsVisible ? "animate-fill-bar" : "w-0"
                      }`}
                      style={
                        {
                          "--target-width": `${skill.level}%`,
                          width: skillsVisible ? `${skill.level}%` : "0%",
                          animationDelay: `${index * 0.2}s`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
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

              {/* New Image Gallery Sections */}
              {/* First Row: 4 Equal Columns */}
              <div className="flex flex-col relative mt-5">
                <div className="gap-5 flex lg:flex-row flex-col lg:gap-5 gap-0">
                  <div className="flex flex-col line-height-normal w-full lg:w-1/4 ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073"
                      className="aspect-[0.63] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col line-height-normal w-full lg:w-1/4 lg:ml-5 ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660"
                      className="aspect-[0.63] object-cover object-center w-full mt-5 min-h-96 min-w-5 overflow-hidden rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col line-height-normal w-full lg:w-1/4 lg:ml-5 ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2"
                      className="aspect-[0.64] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col line-height-normal w-full lg:w-1/4 lg:ml-5 ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367"
                      className="aspect-[0.63] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Second Row: 67% and 33% */}
              <div className="flex flex-col relative mt-5">
                <div className="gap-5 flex lg:flex-row flex-col lg:gap-5 gap-0">
                  <div className="flex flex-col line-height-normal w-full lg:w-2/3 ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3"
                      className="aspect-[1.33] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col line-height-normal w-full lg:w-1/3 lg:ml-5 ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945"
                      className="aspect-[0.67] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Third Row: 33% and 67% */}
              <div className="flex flex-col relative mt-5">
                <div className="gap-5 flex lg:flex-row flex-col lg:gap-5 gap-0">
                  <div className="flex flex-col line-height-normal w-full lg:w-1/3 ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F33826c0545214937b1ca22be0ab4d783?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F33826c0545214937b1ca22be0ab4d783?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F33826c0545214937b1ca22be0ab4d783?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F33826c0545214937b1ca22be0ab4d783?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F33826c0545214937b1ca22be0ab4d783?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F33826c0545214937b1ca22be0ab4d783?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F33826c0545214937b1ca22be0ab4d783?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F33826c0545214937b1ca22be0ab4d783"
                      className="aspect-[0.66] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col line-height-normal w-full lg:w-2/3 lg:ml-5 ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F818cc53174644895a2f24a2fa9e81123?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F818cc53174644895a2f24a2fa9e81123?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F818cc53174644895a2f24a2fa9e81123?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F818cc53174644895a2f24a2fa9e81123?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F818cc53174644895a2f24a2fa9e81123?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F818cc53174644895a2f24a2fa9e81123?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F818cc53174644895a2f24a2fa9e81123?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F818cc53174644895a2f24a2fa9e81123"
                      className="aspect-[1.33] object-cover object-center w-full mt-5 min-h-5 min-w-5 overflow-hidden rounded-xl"
                    />
                  </div>
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

      {/* Illustrations Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My Illustrations
              </h2>
              <p className="text-lg text-muted-foreground">
                Creative artwork and digital illustrations
              </p>
            </div>

            {/* Illustration Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Ff65df03c1ae94121ba01db30ec410ed3?format=webp&width=800",
                  title: "Krishna Avatar",
                  description:
                    "Digital illustration with traditional Indian theme",
                },
                {
                  id: 2,
                  src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fbb0c9fb0e17249baa3f46f3472da3f40?format=webp&width=800",
                  title: "Happy New Year",
                  description:
                    "Celebratory digital artwork with human intelligence theme",
                },
                {
                  id: 3,
                  src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fc18dcab9917548469d723833a0e195c8?format=webp&width=800",
                  title: "Thoughtful Moment",
                  description: "Character illustration with dreamy aesthetic",
                },
                {
                  id: 4,
                  src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6658e5b7f3c542aa84e3836cac4ab3bd?format=webp&width=800",
                  title: "Tropical Paradise",
                  description:
                    "Landscape illustration with palm trees and sunset",
                },
                {
                  id: 5,
                  src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Faa26438c10a145758ace0a70c8c8e288?format=webp&width=800",
                  title: "Monument Valley",
                  description: "Digital landscape with architectural elements",
                },
              ].map((illustration) => (
                <Card
                  key={illustration.id}
                  className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={illustration.src}
                      alt={illustration.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground mb-1 group-hover:text-xr-neon transition-colors">
                      {illustration.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {illustration.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
