import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function PageTransition({ children }) {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    gsap.set(pageRef.current, {
      opacity: 0,
      y: 12,
    });

    gsap.to(pageRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: "power3.out",
      clearProps: "all",
    });
  }, []);

  return (
    <div
      ref={pageRef}
      style={{
        width: "100%",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}