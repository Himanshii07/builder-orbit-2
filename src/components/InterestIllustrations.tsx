import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Coffee,
  Smartphone,
  Tv,
  Car,
  Headphones,
  Tablet,
  Luggage,
} from "lucide-react";

interface Interest {
  icon: React.ElementType;
  label: string;
  hoverText: string;
  color: string;
}

const interests: Interest[] = [
  {
    icon: Heart,
    label: "Dogs",
    hoverText: "I love spending time with dogs and playing with them",
    color: "text-red-400",
  },
  {
    icon: Coffee,
    label: "Chai",
    hoverText: "Can't start my day without a perfect cup of chai",
    color: "text-amber-600",
  },
  {
    icon: Smartphone,
    label: "Phone",
    hoverText: "Always exploring new apps and mobile experiences",
    color: "text-blue-500",
  },
  {
    icon: Tv,
    label: "Netflix",
    hoverText: "Love binge-watching series and discovering new shows",
    color: "text-red-600",
  },
  {
    icon: Car,
    label: "Car",
    hoverText: "Enjoy long drives and road trips to new places",
    color: "text-gray-600",
  },
  {
    icon: Headphones,
    label: "VR Headset",
    hoverText: "Passionate about creating and experiencing VR worlds",
    color: "text-purple-500",
  },
  {
    icon: Headphones,
    label: "Earphones",
    hoverText: "Music is my constant companion during work and travel",
    color: "text-green-500",
  },
  {
    icon: Tablet,
    label: "iPad",
    hoverText: "Digital sketching and design work on the go",
    color: "text-blue-400",
  },
  {
    icon: Luggage,
    label: "Travel",
    hoverText: "Love exploring new cultures and finding inspiration",
    color: "text-orange-500",
  },
];

const InterestIllustrations: React.FC = () => {
  const [hoveredInterest, setHoveredInterest] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 max-w-4xl mx-auto">
      {interests.map((interest, index) => {
        const Icon = interest.icon;
        return (
          <motion.div
            key={interest.label}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="flex flex-col items-center p-4 rounded-2xl bg-card border border-border/50 cursor-pointer group hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredInterest(interest.label)}
              onHoverEnd={() => setHoveredInterest(null)}
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-muted/50 group-hover:bg-minimal-sage/20 transition-colors duration-300">
                <Icon
                  className={`w-6 h-6 ${interest.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              <span className="text-xs font-light text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                {interest.label}
              </span>
            </motion.div>

            {/* Hover tooltip */}
            {hoveredInterest === interest.label && (
              <motion.div
                className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-background border border-border rounded-lg p-3 shadow-lg max-w-48 text-center">
                  <p className="text-sm text-muted-foreground font-light">
                    {interest.hoverText}
                  </p>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-background border-r border-b border-border rotate-45 transform translate-y-[-1px]"></div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default InterestIllustrations;
