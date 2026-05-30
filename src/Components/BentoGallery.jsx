import * as React from "react";
import { motion } from "framer-motion";

const items = [
  { image: "/images/movies-books/i (1).webp", size: "lg", link: "#" },
  { image: "/images/movies-books/i (1).webp", size: "sm", link: "#" },
  { image: "/images/movies-books/i (1).webp", size: "sm", link: "#" },

  { image: "/images/movies-books/i (1).webp", size: "md", link: "#" },
  { image: "/images/movies-books/i (1).webp", size: "xl", link: "#" },

  { image: "/images/movies-books/i (1).webp", size: "sm", link: "#" },
  { image: "/images/movies-books/i (1).webp", size: "md", link: "#" },

  { image: "/images/movies-books/i (1).webp", size: "lg", link: "#" },
  { image: "/images/movies-books/i (1).webp", size: "sm", link: "#" },

  { image: "/images/movies-books/i (1).webp", size: "md", link: "#" },
  { image: "/images/movies-books/i (1).webp", size: "sm", link: "#" },
  { image: "/images/movies-books/i (1).webp", size: "sm", link: "#" },

  { image: "/images/movies-books/i (1).webp", size: "xl", link: "#" },
];

const spans = {
  sm: { gridColumn: "span 1", gridRow: "span 1" },
  md: { gridColumn: "span 2", gridRow: "span 1" },
  lg: { gridColumn: "span 2", gridRow: "span 2" },
  xl: { gridColumn: "span 3", gridRow: "span 2" },
};

export default function BentoGallery() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.grid}>
        {items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            style={{
              ...styles.card,
              ...spans[item.size],
            }}
          >
            <motion.img
              src={item.image}
              alt=""
              style={styles.image}
              whileHover={{ scale: 1.035 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100%",
    padding: "40px",
    boxSizing: "border-box",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "150px",
    gap: "16px",
    gridAutoFlow: "dense",
  },

  card: {
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    display: "block",
    cursor: "pointer",
    textDecoration: "none",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
};