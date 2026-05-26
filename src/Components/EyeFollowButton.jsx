import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EyeContactButton() {
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 18,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 18,
  });

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const angle = Math.atan2(dy, dx);

    const radius = 6;

    mouseX.set(Math.cos(angle) * radius);
    mouseY.set(Math.sin(angle) * radius);
  };

  const resetEyes = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetEyes}
      onClick={() => navigate("/contact")}
      whileTap={{ scale: 0.97 }}
      className="
        group
        relative
        flex
        items-center
        justify-between
        w-[180px]
        rounded-full
        px-4
        py-4
        text-[#f8f6f3]
        transition-all
        duration-300
        hover:scale-[1.02]
      "
    >
      {/* TEXT */}
      <span className="font-space text-lg tracking-wide cursor-pointer">
        Contact
      </span>
      
      {/* EYES */}
      <div className="flex items-center gap-1.5">
        <Eye x={smoothX} y={smoothY} />
        <Eye x={smoothX} y={smoothY} />
      </div>

    </motion.button>
  );
}

function Eye({ x, y }) {
  return (
    <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-white">
      <motion.div
        style={{ x, y }}
        className="absolute h-2 w-2 rounded-full bg-black"
      />
    </div>
  );
}