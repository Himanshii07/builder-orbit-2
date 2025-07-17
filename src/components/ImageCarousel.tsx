import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselImage {
  src: string;
  caption: string;
}

const images: CarouselImage[] = [
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
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted/20"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm border border-border/50 hover:bg-background/40 text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm border border-border/50 hover:bg-background/40 text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Caption */}
        <motion.div
          key={`caption-${currentIndex}`}
          className="absolute bottom-6 left-6 right-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white text-lg font-light bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
            {images[currentIndex].caption}
          </p>
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex
                ? "bg-foreground"
                : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
