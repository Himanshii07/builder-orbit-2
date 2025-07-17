import React from "react";
import { motion } from "framer-motion";

const HorizontalCarousel: React.FC = () => {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073",
      caption: "Exploring new places brings fresh perspectives",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660",
      caption: "Finding inspiration in everyday moments",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2",
      caption: "Life's beautiful moments captured",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367",
      caption: "Adventures that fuel creativity",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2Fd55672da890541db84622489103fb6f3",
      caption: "Memories from amazing journeys",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F7049955023fd41d1b62426938dd1b945",
      caption: "Simple joys that make life great",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F29506901f9a14cdfa8cc7b62463ee073",
      caption: "Weekend getaways and city explorations",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F50adc434e31049d79a509a10717bf660",
      caption: "Coffee dates and creative conversations",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F6b9bb3f4d3344ce39d128234fa5b73f2",
      caption: "Nature walks that spark new ideas",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2Fba11606549344c80a96c94a6ca9cd3fd%2F258b3023d0684949b8fc35cd82843367",
      caption: "Cultural experiences and learning",
    },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
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
