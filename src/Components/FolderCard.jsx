import { motion } from "framer-motion";

export default function FolderCard({ project, onOpen }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={onOpen}
      className="
        relative
        w-[220px]
        h-[280px]
        rounded-[20px]
        bg-[#111111]
        border border-[#242424]
        flex
        flex-col
        items-center
        justify-center
        cursor-pointer
        overflow-hidden
        group
      "
    >
      {/* Hover Border */}
      <motion.div
        variants={{
          rest: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.25 }}
        className="
          absolute
          inset-0
          rounded-[20px]
          border
          border-[#ff922b]
        "
      />

      {/* Folder Wrapper */}
      <div className="relative w-[120px] h-[90px] mb-10">
        {/* Folder Tab */}
        <div
          className="
            absolute
            top-0
            left-5
            w-14
            h-4
            bg-[#f76707]
            rounded-t-md
            z-10
          "
        />

        {/* Folder Back */}
        <div
          className="
            absolute
            bottom-0
            inset-x-0
            h-[70px]
            bg-[#faa307]
            rounded-[10px]
            z-0
          "
        />

        {/* Folder Front Flap */}
        <motion.div
          variants={{
            rest: {
              rotateX: 0,
              y: 0,
            },
            hover: {
              rotateX: -55,
              y: -4,
            },
          }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 18,
          }}
          style={{
            transformOrigin: "top",
            transformStyle: "preserve-3d",
          }}
          className="
            absolute
            bottom-0
            inset-x-0
            h-[70px]
            bg-[#fbbf24]
            rounded-[10px]
            z-20
          "
        />
      </div>

      {/* Title */}
      <motion.h3
        variants={{
          rest: { color: "#d1d5db" },
          hover: { color: "#ff922b" },
        }}
        className="text-lg font-medium mb-1 text-center font-space"
      >
        {project.title}
      </motion.h3>

      {/* Links */}
      {/* <div
        className="flex gap-4 text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-[#bfbfbf]
            hover:text-[#ff922b]
            underline decoration-[#ff922b] decoration-1 
            transition-colors
          "
        >
          Demo
        </a>

        <span className="text-[#ff922b]">•</span>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-[#bfbfbf]
            hover:text-[#ff922b]
            underline decoration-[#ff922b] decoration-1 
            transition-colors
          "
        >
          GitHub
        </a>
      </div> */}
    </motion.div>
  );
}