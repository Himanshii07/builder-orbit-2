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
        <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
          <rect
            x="2"
            y="3"
            width="36"
            height="24"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="6"
            y="7"
            width="28"
            height="16"
            rx="1"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="20" cy="15" r="4" fill="currentColor" />
          <polygon points="18,13 18,17 22,15" fill="white" />
        </svg>
      ),
      position: { top: "15%", left: "5%" },
      color: "text-red-500",
    },
    {
      name: "chai",
      message: "Chai is my fuel for creativity!",
      svg: (
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none">
          <path
            d="M8 12 Q8 8 12 8 L23 8 Q27 8 27 12 L27 25 Q27 30 22 30 L13 30 Q8 30 8 25 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M27 15 Q32 15 32 20 Q32 25 27 25"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M12 8 Q12 5 15 5 L20 5 Q23 5 23 8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="17" cy="20" r="2" fill="currentColor" opacity="0.3" />
        </svg>
      ),
      position: { top: "25%", right: "8%" },
      color: "text-amber-600",
    },
    {
      name: "rajma-chawal",
      message: "Comfort food = creative mind!",
      svg: (
        <svg width="45" height="35" viewBox="0 0 45 35" fill="none">
          <ellipse
            cx="22"
            cy="20"
            rx="18"
            ry="12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="15" cy="18" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="29" cy="19" r="2" fill="currentColor" opacity="0.6" />
          <circle cx="18" cy="23" r="1.5" fill="currentColor" opacity="0.4" />
          <circle cx="26" cy="24" r="1.5" fill="currentColor" opacity="0.4" />
          <path
            d="M10 8 Q12 6 14 8 Q16 6 18 8 Q20 6 22 8"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
      position: { top: "40%", left: "12%" },
      color: "text-orange-600",
    },
    {
      name: "dog",
      message: "Dogs make everything better!",
      svg: (
        <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
          <ellipse
            cx="25"
            cy="25"
            rx="15"
            ry="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="25"
            cy="15"
            r="8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="18"
            cy="10"
            rx="3"
            ry="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="32"
            cy="10"
            rx="3"
            ry="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="22" cy="14" r="1.5" fill="currentColor" />
          <circle cx="28" cy="14" r="1.5" fill="currentColor" />
          <path
            d="M25 16 Q23 18 25 19 Q27 18 25 16"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M10 30 Q8 32 10 34"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M40 30 Q42 32 40 34"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      position: { top: "60%", left: "8%" },
      color: "text-amber-700",
    },
    {
      name: "car",
      message: "Road trips fuel my wanderlust!",
      svg: (
        <svg width="55" height="30" viewBox="0 0 55 30" fill="none">
          <path
            d="M8 18 L8 22 Q8 24 10 24 L45 24 Q47 24 47 22 L47 18 Q47 15 44 12 L38 8 Q35 6 32 6 L23 6 Q20 6 17 8 L11 12 Q8 15 8 18 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="16"
            cy="22"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="39"
            cy="22"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="20"
            y="10"
            width="8"
            height="6"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <rect
            x="30"
            y="10"
            width="8"
            height="6"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
      position: { top: "70%", right: "10%" },
      color: "text-blue-600",
    },
    {
      name: "earphones",
      message: "Music is my design companion!",
      svg: (
        <svg width="40" height="45" viewBox="0 0 40 45" fill="none">
          <path
            d="M20 8 Q12 8 8 15 Q8 25 12 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20 8 Q28 8 32 15 Q32 25 28 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="10"
            cy="32"
            rx="4"
            ry="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            cx="30"
            cy="32"
            rx="4"
            ry="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M16 5 Q20 3 24 5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      position: { top: "30%", right: "15%" },
      color: "text-purple-600",
    },
    {
      name: "swings",
      message: "Simple joys inspire great ideas!",
      svg: (
        <svg width="50" height="45" viewBox="0 0 50 45" fill="none">
          <path
            d="M5 8 L45 8"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M15 8 L15 35"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M35 8 L35 35"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="10"
            y="35"
            width="10"
            height="4"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="30"
            y="35"
            width="10"
            height="4"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M2 8 Q2 5 5 5 L45 5 Q48 5 48 8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      position: { top: "20%", left: "15%" },
      color: "text-green-600",
    },
    {
      name: "travel",
      message: "New places, fresh perspectives!",
      svg: (
        <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
          <rect
            x="8"
            y="15"
            width="24"
            height="30"
            rx="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="12"
            y="10"
            width="16"
            height="8"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="12" cy="25" r="1.5" fill="currentColor" />
          <circle cx="28" cy="25" r="1.5" fill="currentColor" />
          <path d="M12 30 L28 30" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 35 L28 35" stroke="currentColor" strokeWidth="1.5" />
          <rect
            x="18"
            y="12"
            width="4"
            height="3"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
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
          className={`absolute ${illustration.color}`}
          style={illustration.position}
          initial={{ opacity: 0, scale: 0, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: Math.random() * 20 - 10 }}
          transition={{
            duration: 0.8,
            delay: 1 + index * 0.15,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.1, rotate: 0 }}
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
        </motion.div>
      ))}
    </div>
  );
};

export default HandDrawnIllustrations;
