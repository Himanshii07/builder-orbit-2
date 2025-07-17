import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Headphones, Eye, Zap, Code2, Palette, Coffee } from "lucide-react";

interface MousePosition {
  x: number;
  y: number;
}

const InteractiveHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const relativeX = (e.clientX - centerX) / rect.width;
        const relativeY = (e.clientY - centerY) / rect.height;

        setMousePosition({ x: relativeX, y: relativeY });
        mouseX.set(relativeX * 20);
        mouseY.set(relativeY * 20);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const infoSections = [
    {
      id: "who",
      angle: 0,
      title: "Who am I?",
      icon: Eye,
      content:
        "A passionate XR designer pushing the boundaries of immersive experiences",
      color: "xr-neon",
    },
    {
      id: "what",
      angle: 120,
      title: "What I do?",
      icon: Code2,
      content:
        "Creating VR/AR experiences, 3D modeling, and interactive digital worlds",
      color: "xr-cyber",
    },
    {
      id: "like",
      angle: 240,
      title: "What I like?",
      icon: Coffee,
      content:
        "Exploring new technologies, creative coding, and bringing imagination to life",
      color: "xr-void",
    },
  ];

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-xr-neon/5 overflow-hidden flex items-center justify-center"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-xr-neon/30 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Central Avatar Area */}
      <div className="relative z-10">
        {/* Circular Frame */}
        <motion.div
          className="relative w-96 h-96 mx-auto"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-xr-neon/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner ring */}
          <motion.div
            className="absolute inset-4 rounded-full border border-xr-cyber/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Avatar Container */}
          <motion.div
            className="absolute inset-8 rounded-full bg-gradient-to-br from-xr-neon/20 via-background to-xr-cyber/20 border border-xr-neon/50 flex items-center justify-center backdrop-blur-sm"
            style={{ x, y }}
            whileHover={{ scale: 1.05 }}
          >
            {/* VR Avatar */}
            <motion.div
              className="relative w-24 h-24"
              animate={{
                rotateY: mousePosition.x * 20,
                rotateX: mousePosition.y * -10,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Head */}
              <div className="w-16 h-16 mx-auto bg-gradient-to-b from-xr-neon/40 to-xr-cyber/40 rounded-full relative border border-xr-neon/30">
                {/* VR Headset */}
                <div className="absolute -inset-2 bg-gradient-to-r from-xr-void/60 to-xr-matrix/60 rounded-lg border border-xr-neon/50">
                  <div className="absolute inset-2 bg-black/80 rounded flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-xr-neon animate-pulse" />
                  </div>
                  {/* LED indicators */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-xr-neon rounded-full animate-pulse" />
                  <div
                    className="absolute bottom-1 left-1 w-2 h-2 bg-xr-cyber rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>

              {/* Body indication */}
              <div className="w-8 h-12 mx-auto mt-2 bg-gradient-to-b from-xr-cyber/30 to-transparent rounded-b-full" />
            </motion.div>
          </motion.div>

          {/* Info Sections around the circle */}
          {infoSections.map((section, index) => {
            const radius = 200;
            const angleRad = (section.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            const Icon = section.icon;

            return (
              <motion.div
                key={section.id}
                className="absolute w-20 h-20 cursor-pointer"
                style={{
                  left: `calc(50% + ${x}px - 40px)`,
                  top: `calc(50% + ${y}px - 40px)`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.2 }}
                onHoverStart={() => setHoveredSection(section.id)}
                onHoverEnd={() => setHoveredSection(null)}
              >
                {/* Icon container */}
                <motion.div
                  className={`w-full h-full rounded-full flex items-center justify-center backdrop-blur-sm ${
                    section.color === "xr-neon"
                      ? "bg-gradient-to-br from-xr-neon/20 to-xr-neon/40 border border-xr-neon/50"
                      : section.color === "xr-cyber"
                        ? "bg-gradient-to-br from-xr-cyber/20 to-xr-cyber/40 border border-xr-cyber/50"
                        : "bg-gradient-to-br from-xr-void/20 to-xr-void/40 border border-xr-void/50"
                  }`}
                  animate={{
                    boxShadow:
                      hoveredSection === section.id
                        ? `0 0 30px hsl(var(--${section.color}) / 0.6)`
                        : `0 0 10px hsl(var(--${section.color}) / 0.2)`,
                  }}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      section.color === "xr-neon"
                        ? "text-xr-neon"
                        : section.color === "xr-cyber"
                          ? "text-xr-cyber"
                          : "text-xr-void"
                    }`}
                  />
                </motion.div>

                {/* Info popup */}
                {hoveredSection === section.id && (
                  <motion.div
                    className="absolute top-24 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-background/90 backdrop-blur-md border border-xr-neon/30 rounded-lg shadow-2xl"
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3
                      className={`text-lg font-bold mb-2 ${
                        section.color === "xr-neon"
                          ? "text-xr-neon"
                          : section.color === "xr-cyber"
                            ? "text-xr-cyber"
                            : "text-xr-void"
                      }`}
                    >
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Central text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-xr-neon via-xr-cyber to-xr-void bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            XR Designer
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Hover around to discover my world of immersive experiences
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <span className="text-sm text-muted-foreground mb-2">
              Scroll to explore
            </span>
            <motion.div
              className="w-1 h-8 bg-gradient-to-b from-xr-neon to-transparent rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Ambient glow effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-xr-neon/5 via-transparent to-transparent"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default InteractiveHero;
