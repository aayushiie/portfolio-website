import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FolderCard from "./FolderCard";

const filters = ["All", "Web", "App", "ML/DL", "MLOps", "Data Science", "GenAI"];

export default function FilterableGallery({
  projects,
  onOpenProject,
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
  activeFilter === "All"
    ? projects
    : projects.filter((project) =>
        Array.isArray(project.category)
          ? project.category.includes(activeFilter)
          : project.category === activeFilter
      );

  return (
    <section className="w-full">
      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-[#2a2a2a]">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative pb-3 text-sm transition-colors duration-300 font-space ${
              activeFilter === filter
                ? "text-[#ff922b]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {filter}

            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilter"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff922b]"
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 25,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* FOLDER GRID */}
      <motion.div
        layout
        className="flex flex-wrap gap-10 justify-center"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <FolderCard
                project={project}
                onOpen={() => onOpenProject(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}