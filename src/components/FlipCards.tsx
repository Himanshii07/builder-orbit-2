import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Layers3, Palette } from "lucide-react";

interface FlipCardProps {
  frontIcon: React.ElementType;
  frontTitle: string;
  frontDescription: string;
  backContent: string;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontIcon: Icon,
  frontTitle,
  frontDescription,
  backContent,
  index,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-80 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border border-border/50 bg-card p-8 flex flex-col items-center justify-center text-center shadow-sm"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-minimal-sage/20">
            <Icon className="w-8 h-8 text-minimal-sage" />
          </div>
          <h3 className="text-xl font-normal text-foreground mb-3">
            {frontTitle}
          </h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            {frontDescription}
          </p>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl border border-border/50 bg-muted/30 p-8 flex flex-col items-center justify-center text-center shadow-sm"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-minimal-sage/10 to-minimal-warm/10 rounded-xl border border-dashed border-minimal-sage/30">
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-4">
                {backContent}
              </p>
              <div className="w-16 h-16 mx-auto bg-minimal-sage/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">
                Media placeholder
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FlipCards: React.FC = () => {
  const cards = [
    {
      frontIcon: Eye,
      frontTitle: "Visual Design",
      frontDescription:
        "Creating beautiful and functional interfaces that delight users",
      backContent: "Portfolio examples and design process showcase",
    },
    {
      frontIcon: Layers3,
      frontTitle: "User Experience",
      frontDescription:
        "Crafting intuitive experiences that solve real problems",
      backContent: "UX research methodologies and case studies",
    },
    {
      frontIcon: Palette,
      frontTitle: "Creative Direction",
      frontDescription:
        "Bringing ideas to life through thoughtful design decisions",
      backContent: "Creative process videos and inspiration boards",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {cards.map((card, index) => (
        <FlipCard
          key={index}
          frontIcon={card.frontIcon}
          frontTitle={card.frontTitle}
          frontDescription={card.frontDescription}
          backContent={card.backContent}
          index={index}
        />
      ))}
    </div>
  );
};

export default FlipCards;
