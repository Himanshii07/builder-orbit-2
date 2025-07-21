import React from "react";
import { motion } from "framer-motion";

const HorizontalCarousel: React.FC = () => {
  const images = [
    {
      src: "/Photos/life/13.jpeg",
      caption: "First time celebrating onam",
    },
    {
      src: "/Photos/life/14.jpeg",
      caption: "He taught me how to be fearless",
    },
    {
      src: "/Photos/life/7.jpeg",
      caption: "and that's oreo!",
    },
    {
      src: "/Photos/life/16.jpeg",
      caption: "One of my favorite days 🥰",
    },
    {
      src: "/Photos/life/2.jpeg",
      caption: "Survival kit in college",
    },
    {
      src: "/Photos/life/3.jpeg",
      caption: "I am his 2nd mother",
    },
    {
      src: "/Photos/life/11.jpeg",
      caption: "Drove 1500km from delhi to pune :)",
    },
    {
      src: "/Photos/life/12.jpeg",
      caption: "We Explored some places in Pune",
    },
    {
      src: "/Photos/life/10.jpeg",
      caption: "love/hate relationship with pune's monsoon",
    },
    {
      src: "/Photos/life/18.jpg",
      caption: "First month in pune was really scaryy",
    },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: ["0%", "-140%"],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "200%" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${index}-${image.caption}`}
            className="flex-shrink-0 w-80 bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Caption in white space below */}
            <div className="p-4 bg-card">
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalCarousel;
