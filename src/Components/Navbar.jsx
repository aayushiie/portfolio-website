import React from 'react'
import { NavLink } from 'react-router-dom'
import AnimatedUnderline from './AnimatedUnderline'

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
            <nav
                className="
          mt-6
          flex
          items-center
          justify-between
          gap-10
          px-6
          py-3
          rounded-full
          border
          border-white/10
          bg-black/20
          w-fit
        "
            id="nav-bar">
                {/* LOGO */}

                <NavLink to={"/"} className="shrink-0">
                    <img
                        src="/images/flowers/flower2-svgrepo-com.svg"
                        alt="flower"
                        className="w-10 h-10 pink-flower hover:rotate-12"
                    />
                </NavLink>

                {/* LINKS */}

                <div className="flex items-center gap-6 md:gap-8">
                    <NavLink
                        to={"/about"}
                    >
                        <AnimatedUnderline text="about" />
                    </NavLink>

                    <NavLink
                        to={"/writing"}
                    >
                        <AnimatedUnderline text="writing" />
                    </NavLink>

                    <NavLink
                        to={"/art"}
                    >
                        <AnimatedUnderline text="art" />
                    </NavLink>

                    <NavLink
                        to={"/projects"}
                    >
                        <AnimatedUnderline text="projects" />
                    </NavLink>

                    <NavLink
                        to={"/contact"}
                    >
                        <AnimatedUnderline text="contact" />
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar