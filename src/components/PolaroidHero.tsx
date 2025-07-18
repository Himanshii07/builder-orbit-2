import React from "react";
import { motion } from "framer-motion";

const PolaroidHero: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Polaroid Photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Tape pieces */}
              <div className="absolute -top-4 -left-2 w-16 h-8 bg-yellow-200/60 rounded-sm rotate-12 z-10 border border-yellow-300/30"></div>
              <div className="absolute -top-3 right-4 w-12 h-6 bg-yellow-200/60 rounded-sm -rotate-6 z-10 border border-yellow-300/30"></div>

              {/* Polaroid frame */}
              <div className="bg-white p-3 pb-16 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <img
                    src="/placeholder.svg"
                    alt="Himanshi profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Polaroid bottom text space */}
                <div className="mt-4 text-center">
                  <p className="text-gray-600 font-handwriting text-lg">
                    hey, nice to meet you! ✨
                  </p>
                </div>
              </div>

              {/* Additional tape for realism */}
              <div className="absolute bottom-2 -right-3 w-14 h-6 bg-yellow-200/60 rounded-sm rotate-45 border border-yellow-300/30"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:pl-8"
            >
              <motion.h2
                className="text-4xl md:text-5xl font-heading text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Hey! Nice to meet you!
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                I'm a curious designer who loves turning complex problems into
                simple, beautiful solutions through thoughtful design and user
                research.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolaroidHero;
