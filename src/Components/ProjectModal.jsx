import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="
              fixed
              inset-0
              z-50
              bg-[#191A19]
              p-12
              overflow-y-auto
              font-space
            "
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white text-2xl cursor-pointer"
            >
              ✕
            </button>

            <div className="max-w-4xl mx-auto mt-20">
              <h1 className="text-5xl text-white mb-8">
                {project.title}
              </h1>

              <p className="text-[#d8d8d8] text-lg mb-8">
                {project.description}
              </p>

              <div className="mb-8">
                <h3 className="text-white mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-[#2C3930] rounded-full text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              
              <div className="flex gap-6">
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-[#FFD8A8]"
                >
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-[#FFD8A8]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}