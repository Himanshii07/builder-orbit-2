import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Play,
  Filter,
  Headphones,
  Smartphone,
  MonitorSpeaker,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Kedarnath Mythological Story in VR",
      category: "vr",
      categoryLabel: "Virtual Reality",
      description:
        "An immersive VR experience that brings ancient mythological stories of Kedarnath to life, allowing users to witness divine tales in a sacred virtual environment.",
      longDescription:
        "This spiritually immersive VR application recreates the sacred pilgrimage site of Kedarnath and tells the ancient mythological stories through interactive narratives. Users can explore the holy temple, witness divine manifestations, and experience the rich cultural heritage of Hindu mythology in a respectful and educational manner.",
      image: "/placeholder.svg",
      tags: ["Unity", "VR", "Storytelling", "Cultural Heritage", "3D Modeling"],
      featured: true,
      year: "2023",
      client: "Cultural Heritage Foundation",
      duration: "8 months",
      slug: "kedarnath",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
    {
      id: 2,
      title: "Savey - Interactive Piggy Bank",
      category: "interactive",
      categoryLabel: "Interactive Design",
      description:
        "A friendly, expressive piggy bank that reacts to a child's behavior, encouraging them to save not out of obligation, but out of joy. Turns saving into a game using emotional cues, sounds, and interaction.",
      longDescription:
        "Savey is an interactive companion that turns saving into an emotional, sensory, and cognitive experience. With expressive OLED eyes, happy sounds, coin detection, and transparent design, it makes kids want to save more because they enjoy it, not because they have to.",
      image: "/placeholder.svg",
      tags: [
        "Arduino",
        "OLED Display",
        "IR Sensors",
        "3D Modeling",
        "User Testing",
      ],
      featured: true,
      year: "2023",
      client: "Group Project",
      duration: "2 weeks",
      slug: "savey",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
    {
      id: 3,
      title: "Shooting Range in VR",
      category: "vr",
      categoryLabel: "Virtual Reality",
      description:
        "A realistic virtual reality shooting simulation that provides safe training environment with physics-based mechanics and multiple weapon systems.",
      longDescription:
        "This VR shooting simulation offers a comprehensive training experience with realistic ballistics, multiple weapon types, and various challenging scenarios. Built with safety and education in mind, it provides an immersive environment for skill development without real-world risks.",
      image: "/placeholder.svg",
      tags: [
        "Unreal Engine 5",
        "VR",
        "Physics Simulation",
        "Training",
        "Haptic Feedback",
      ],
      featured: true,
      year: "2023",
      client: "Individual Project",
      duration: "2 weeks",
      slug: "shooting-range",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
    {
      id: 4,
      title: "The Mushroom House",
      category: "3d-art",
      categoryLabel: "3D Environment",
      description:
        "A fantasy 3D environment showcasing the complete production pipeline from Maya modeling to Unreal Engine 5 rendering with hand-painted textures.",
      longDescription:
        "This project demonstrates mastery of the full 3D pipeline including modeling in Maya, UV mapping, hand-painted textures in Substance Painter, rigging and animation, culminating in a magical environment built in Unreal Engine 5 with detailed props and atmospheric lighting.",
      image: "/placeholder.svg",
      tags: [
        "Autodesk Maya",
        "Substance Painter",
        "Unreal Engine 5",
        "3D Modeling",
        "Hand-painted Textures",
      ],
      featured: true,
      year: "2023",
      client: "3D Art Portfolio",
      duration: "Individual Project",
      slug: "mushroom-house",
      links: {
        demo: "#",
        github: "#",
        live: "#",
      },
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: Filter },
    { id: "vr", label: "Virtual Reality", icon: Headphones },
    { id: "interactive", label: "Interactive Design", icon: Smartphone },
    { id: "3d-art", label: "3D Environment", icon: MonitorSpeaker },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background to-xr-neon/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-xr-neon/10 border border-xr-neon/20 mb-8">
              <Headphones className="w-4 h-4 mr-2 text-xr-neon" />
              <span className="text-sm font-medium text-xr-neon">
                Portfolio Showcase
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-xr-neon bg-clip-text text-transparent">
              My Projects
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore a collection of immersive experiences, innovative
              applications, and cutting-edge XR solutions that push the
              boundaries of what's possible in extended reality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Highlighting my most impactful XR projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            {featuredProjects.slice(0, 2).map((project) => (
              <Link key={project.id} to={`/projects/${project.slug}`}>
                <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300 cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-xr-neon/20 to-xr-cyber/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-xr-neon/20 text-xr-neon border-xr-neon/30"
                      >
                        {project.categoryLabel}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            View Project
                          </Button>
                        </div>
                        <span className="text-white/80 text-sm">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-semibold group-hover:text-xr-neon transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-xr-neon transition-colors opacity-0 group-hover:opacity-100" />
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Client:</span>{" "}
                      {project.client} •
                      <span className="font-medium"> Duration:</span>{" "}
                      {project.duration}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`${
                    activeFilter === filter.id
                      ? "bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80"
                      : "border-border hover:border-xr-neon/50 hover:text-xr-neon"
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} to={`/projects/${project.slug}`}>
                <Card className="group cursor-pointer overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-xr-neon/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-xr-neon/20 to-xr-cyber/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="secondary"
                        className="bg-xr-neon/20 text-xr-neon border-xr-neon/30 text-xs"
                      >
                        {project.categoryLabel}
                      </Badge>
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-xr-cyber/20 text-xr-cyber border-xr-cyber/30 text-xs">
                          Featured
                        </Badge>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-xs"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          View Details
                        </Button>
                        <span className="text-white/80 text-xs">
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-xr-neon transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {project.client} • {project.duration}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-xr-neon/10 via-background to-xr-cyber/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative
            XR experiences. Let's discuss your next project.
          </p>

          <Button
            size="lg"
            className="bg-xr-neon text-xr-neon-foreground hover:bg-xr-neon/80"
          >
            Start a Conversation
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
