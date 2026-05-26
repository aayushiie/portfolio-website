import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <>
      {/* LEFT PANEL */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "50vw",
          height: "100vh",
          background: "#191a19",
          zIndex: 50,
        }}
      />

      {/* RIGHT PANEL */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "50vw",
          height: "100vh",
          background: "#191a19",
          zIndex: 50,
        }}
      />

      {/* PAGE CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </>
  );
}