import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TangledBallAnimation: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center mb-8">
      <motion.div
        className="relative w-32 h-16"
        initial={false}
        animate={isAnimating ? "untangled" : "tangled"}
      >
        {/* Tangled ball state */}
        <motion.svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className="absolute left-0"
          variants={{
            tangled: { opacity: 1, scale: 1 },
            untangled: { opacity: 0, scale: 0.8 },
          }}
          transition={{ duration: 1 }}
        >
          <motion.path
            d="M32 8 Q20 12 16 24 Q20 36 32 32 Q44 28 48 16 Q44 4 32 8"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="2 2"
          />
          <motion.path
            d="M16 16 Q32 20 48 24 Q40 36 24 40 Q8 36 16 24 Q24 12 32 16"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3 1"
          />
          <motion.path
            d="M24 8 Q40 16 56 24 Q48 40 32 48 Q16 40 24 24 Q32 8 48 16"
            stroke="hsl(var(--foreground))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1 3"
          />
        </motion.svg>

        {/* Arrow */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          variants={{
            tangled: { x: "-50%", opacity: 0 },
            untangled: { x: "-50%", opacity: 1 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Straight line state */}
        <motion.svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className="absolute right-0"
          variants={{
            tangled: { opacity: 0, scale: 0.8 },
            untangled: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.line
            x1="8"
            y1="32"
            x2="56"
            y2="32"
            stroke="hsl(var(--foreground))"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isAnimating ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default TangledBallAnimation;
