import { motion } from "framer-motion";
import { useState } from "react";

const underlineStyles = [
  {
    path: "M5 25 Q60 5 115 25",
    color: "#27D3F5",
  },
  {
    path: "M5 20 Q60 40 115 20",
    color: "#3BC06A",
  },
  {
    path: "M5 22 C30 0 90 45 115 22",
    color: "#F54927",
  },
  {
    path: "M5 24 Q55 12 115 24",
    color: "#18AFC5",
  },
  {
    path: "M5 22 C40 35 80 5 115 22",
    color: "#B027F5",
  },
  {
    path: "M5 20 Q50 30 115 20",
    color: "#E8D21D",
  },

  // Zigzag
  {
    path: "M5 20 L20 10 L35 30 L50 10 L65 30 L80 10 L95 30 L115 20",
    color: "#FF7F11",
  },

  // Scribble
  {
    path: "M5 20 C15 5 25 35 35 20 S55 5 65 20 S85 35 95 20 S105 5 115 20",
    color: "#0081A7",
  },

  // Double Wave
  {
    path: "M5 20 Q20 5 35 20 T65 20 T95 20 T115 20",
    color: "#CF1578",
  },

  // Sharp Curve
  {
    path: "M5 28 C25 0 45 40 65 10 S95 40 115 15",
    color: "#F54927",
  },

  // Brushstroke
  {
    path: "M5 20 C20 25 30 5 45 20 S70 35 85 18 S100 5 115 22",
    color: "#FF6E40",
  },

  // Minimal Straight
  {
    path: "M5 20 L115 20",
    color: "#FFC13B",
  },
];

export default function AnimatedUnderline({
  text,
  isActive,
}) {
  const [activeStyle, setActiveStyle] = useState(
    underlineStyles[0]
  );

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);

    const random =
      underlineStyles[
        Math.floor(
          Math.random() * underlineStyles.length
        )
      ];

    setActiveStyle(random);
  };

  return (
    <div
      className="relative inline-block cursor-pointer pb-1"
      onMouseEnter={handleHover}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative z-10">
        {text}
      </span>

      <svg
        className="absolute left-0 top-[85%] w-full overflow-visible"
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
      >
        <motion.path
          d={activeStyle.path}
          fill="transparent"
          stroke={activeStyle.color}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={
            hovered || isActive
              ? {
                  pathLength: 1,
                  opacity: 1,
                }
              : {
                  pathLength: 0,
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}