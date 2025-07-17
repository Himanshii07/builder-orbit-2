import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InterestIllustrations from "@/components/InterestIllustrations";
import PolaroidHero from "@/components/PolaroidHero";
import HorizontalCarousel from "@/components/HorizontalCarousel";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Polaroid Hero Section */}
      <PolaroidHero />

      {/* Life's Great Section - Image Carousel */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
                Life's Great
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Moments and experiences that make life beautiful
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <HorizontalCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Extended */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
                A Little More About Me
              </h2>

              <div className="space-y-6 text-left">
                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  I'm currently pursuing my Master's in Immersive Media Design,
                  where I'm diving deep into the world of XR, VR, and
                  interactive experiences. What started as curiosity about how
                  digital worlds are created has turned into a passion for
                  crafting experiences that blur the line between reality and
                  imagination.
                </motion.p>

                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  My design philosophy is simple: every element should have a
                  purpose. Whether I'm working on a mobile interface or an
                  immersive VR environment, I believe in creating solutions that
                  are not just beautiful, but functional and meaningful to the
                  people who use them.
                </motion.p>

                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  When I'm not designing or coding, you'll find me exploring new
                  places (with my camera in hand), trying new cafes for the
                  perfect chai, or binge-watching the latest series on Netflix.
                  I believe that the best design inspiration comes from living
                  life fully and staying curious about the world around us.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Let's Create Something Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Have an idea you'd like to explore? I'd love to hear about it and
              see how we can bring it to life through thoughtful design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-full px-8 py-6 text-base font-normal"
              >
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted transition-all duration-300 rounded-full px-8 py-6 text-base font-normal"
              >
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
