import { motion } from "framer-motion";

export default function Header({ heading, text }) {

    // RANDOM TILT VALUES
    const tilts = [
        -12,
        8,
        -6,
        14,
        -10,
        5,
        -16,
        10,
        -7,
        12,
    ];

    // RANDOM COLORS
    const colors = [
        "#ff6b6b",
        "#ffd93d",
        "#6bcBef",
        "#c77dff",
        "#95e06c",
        "#ff9f68",
    ];

    return (
        // <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
            <motion.h1
                animate="visible"
                className="
        text-[18vw] sm:text-[14vw] md:text-[10vw]
          leading-none
          font-black
          uppercase
          tracking-tight
          flex
          flex-wrap
          justify-center
          max-w-[92vw] md:max-w-[50vw]
        "
            >
                {heading.split("").map((char, index) => {
                    const randomTilt =
                        tilts[index % tilts.length];

                    const randomColor =
                        colors[index % colors.length];

                    return (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: {
                                    y: 120,
                                    opacity: 0,
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                },
                            }}
                            transition={{
                                duration: 0.12,
                                ease: "easeOut",
                            }}

                            // HOVER ANIMATION
                            whileHover={{
                                rotate: randomTilt,
                                scale: 1.15,
                                color: randomColor,
                                y: -8,
                            }}

                            // SMOOTH RESET
                            animate={{
                                rotate: 0,
                                scale: 1,
                                color: "#ffffff",
                                y: 0,
                            }}

                            className="
                inline-block
                text-white
                cursor-default
                will-change-transform
                transition-all
                mt-10
              "
                        >
                            {char === " "
                                ? "\u00A0"
                                : char}
                        </motion.span>
                    );
                })}
            </motion.h1>
            <p className="font-space text-sm sm:text-base md:text-xl max-w-[92vw] md:max-w-[50vw] mt-4 md:mt-5 text-center md:text-justify">
                {text}
            </p>
        </div>
    );
}