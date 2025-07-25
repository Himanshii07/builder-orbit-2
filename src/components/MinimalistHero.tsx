import React from "react";
import { motion } from "framer-motion";
import HandDrawnIllustrations from "./HandDrawnIllustrations";

const MinimalistHero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Dotted diary background */}
      <div
        className="absolute inset-0 opacity-[1.08]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground)) 0.5px, transparent 0)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Subtle margin decoration */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-red-200 opacity-30" />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-blue-200 opacity-20" />

      {/* Hand-drawn illustrations */}
      <HandDrawnIllustrations />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            himanshi
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-4 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            curious + creative + consistent
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A designer who believes in designing with a purpose while balancing
            functionality and aesthetics.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-20 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span className="text-sm text-muted-foreground mb-4 font-light">
              Scroll to explore
            </span>
            <motion.div
              className="w-px h-16 bg-gradient-to-b from-muted-foreground to-transparent"
              animate={{ scaleY: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 bg-minimal-sage rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-3 h-3 bg-minimal-warm rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-minimal-cool rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default MinimalistHero;
