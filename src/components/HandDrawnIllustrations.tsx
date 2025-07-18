import React from "react";
import { motion } from "framer-motion";

const HandDrawnIllustrations: React.FC = () => {
  const [hoveredIllustration, setHoveredIllustration] = React.useState<
    string | null
  >(null);

  const illustrations = [
    {
      name: "netflix",
      message: "Binge-watching is my guilty pleasure!",
      svg: (
        <img
    src="/Photos/illustrations/netflix.png" // <-- Update with your actual path
    alt="Netflix Logo"
    width={120}
    height={250}
    className="object-contain"
  />
      ),
      position: { top: "15%", left: "5%" },
      color: "text-red-500",
    },
    {
      name: "chai",
      message: "Chai is my fuel for creativity!",
      svg: (
         <img
           src="/Photos/illustrations/Chai.png" // <-- Update with your actual path
           alt="Chai logo"
           width={220}
           height={280}
           className="object-contain"
          />
      ),
      position: { top: "28%", right: "18%" },
      color: "text-amber-600",
    },
    {
      name: "rajma-chawal",
      message: "Comfort food = creative mind!",
      svg: (
        <img
           src="/Photos/illustrations/stocks.jpg" // <-- Update with your actual path
           alt="Chai logo"
           width={220}
           height={480}
           className="object-contain"
          />
      ),
      position: { top: "40%", left: "12%" },
      color: "text-orange-600",
    },
    {
      name: "dog",
      message: "Dogs make everything better!",
      svg: (
         <img
           src="/Photos/illustrations/dog.png" // <-- Update with your actual path
           alt="Chai logo"
           width={220}
           height={480}
           className="object-contain"
          />
      ),
      position: { top: "58%", right: "38%" },
      color: "text-blue-600",
    },
    {
      name: "earphones",
      message: "Music is my design companion!",
      svg: (
        <img
           src="/Photos/illustrations/plants.png" // <-- Update with your actual path
           alt="Chai logo"
           width={420}
           height={680}
           className="object-contain"
          />
      ),
      position: { top: "70%", left: "18%" },
      color: "text-purple-600",
    },
    {
      name: "swings",
      message: "Simple joys inspire great ideas!",
      svg: (
         <img
           src="/Photos/illustrations/swing.png" // <-- Update with your actual path
           alt="Chai logo"
           width={420}
           height={580}
           className="object-contain"
          />
      ),
      position: { top: "-2%", left: "4%" },
      color: "text-green-600",
    },
    {
      name: "travel",
      message: "New places, fresh perspectives!",
      svg: (
         <img
           src="/Photos/illustrations/travel.png" // <-- Update with your actual path
           alt="Chai logo"
           width={220}
           height={280}
           className="object-contain"
          />
      ),
      position: { top: "50%", right: "5%" },
      color: "text-indigo-600",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {illustrations.map((illustration, index) => (
        <motion.div
          key={illustration.name}
          className={`absolute ${illustration.color} cursor-pointer`}
          style={illustration.position}
          initial={{ opacity: 0, scale: 0, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: Math.random() * 20 - 10 }}
          transition={{
            duration: 0.8,
            delay: 1 + index * 0.15,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.1, rotate: 0 }}
          onHoverStart={() => setHoveredIllustration(illustration.name)}
          onHoverEnd={() => setHoveredIllustration(null)}
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{ filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1))" }}
          >
            {illustration.svg}
          </motion.div>

          {/* Tooltip */}
          {hoveredIllustration === illustration.name && (
            <motion.div
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
                <p className="text-sm text-foreground font-light">
                  {illustration.message}
                </p>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-background border-r border-b border-border rotate-45 transform translate-y-[-1px]"></div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default HandDrawnIllustrations;
