import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PolaroidCard() {
  const cardRef = useRef(null);

  // MOUSE POSITION
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // SMOOTH SPRINGS
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [10, -10]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    {
      stiffness: 180,
      damping: 18,
    }
  );

  // MOUSE MOVE
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // RESET
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="flex items-center justify-center overflow-hidden px-6">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{
          rotate: -8,
          y: 60,
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          rotate: -4,
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          rotate: 0,
          y: -16,
          scale: 1.03,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 16,
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src="/images/polaroid.webp"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            alt="polaroid"
            className="
              w-full
              h-[460px]
              object-cover
              pointer-events-none
            "
          />
        </div>

        {/* GRAIN OVERLAY */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.05]
            mix-blend-multiply
            pointer-events-none
          "
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </motion.div>
    </div>
  );
}