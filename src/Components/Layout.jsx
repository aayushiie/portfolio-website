import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import gsap from "gsap"

import Navbar from "./Navbar"
import Footer from "./Footer"
import PageTransition from "./PageTransition"

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    gsap.set("#smooth-content", {
      backgroundColor: "#191A19",
      color: "#F8F6F3",
      clearProps: "color"
    });
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Navbar />
          <Outlet />
          <Footer />
        </PageTransition>
      </AnimatePresence>
    </>
  )
}

export default Layout