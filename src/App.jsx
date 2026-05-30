import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Home from "./Components/Home";
import Contact from "./Components/Contact"
import Projects from "./Components/Projects"
import AboutMe from "./Components/AboutMe"
import Writing from "./Components/Writing"
import Art from "./Components/Art"
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./Components/Layout"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <AboutMe />,
      },

      {
        path: "writing",
        element: <Writing />,
      },

      {
        path: "art",
        element: <Art />,
      },

      {
        path: "projects",
        element: <Projects />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
])

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  const imagesToPreload = [
    "/images/under-img.jpg",
    "/images/polaroid.webp",
  ]

  imagesToPreload.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}, [])

  useGSAP(() => {
    if (!loading) {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0,
      });

      return () => {
        smoother.kill();
      };
    }
  }, [loading]);

  return (
    <>
      <Loader isLoading={loading} />
      {!loading && (
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <RouterProvider router={router} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
