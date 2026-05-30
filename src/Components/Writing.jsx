import React from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";

const writings = [
  {
    id: 1,
    title: "Pink Carnations",
    publishedIn: "Outlander Magazine",
    date: "2023/08/27",
    category: "Prose",
    link: "https://outlanderzine.wordpress.com/2023/08/27/pink-carnations/",
  },
  {
    id: 2,
    title: "In the Quiet of Simple Things",
    publishedIn: "Outlander Magazine",
    date: "2024/07/24",
    category: "Personal Essay",
    link: "https://outlanderzine.wordpress.com/2024/07/24/in-the-quiet-of-simple-things/",
  },
  {
    id: 3,
    title: "t to s",
    publishedIn: "Outlander Magazine",
    date: "2024/04/24",
    category: "Poetry",
    link: "https://outlanderzine.wordpress.com/2024/04/24/t-to-s/",
  },
  {
    id: 4,
    title: "When All Roads Lead to Home",
    publishedIn: "Meridian Literary",
    date: "2026/04/15",
    category: "Personal Essay",
    link: "https://meridianliterary.substack.com/p/when-all-roads-lead-to-home?utm_source=share&utm_medium=android&r=3ilw7u&triedRedirect=true",
  },
  {
    id: 5,
    title: "Faded Fabrics",
    publishedIn: "Outlander Magazine",
    date: "2023/10/18",
    category: "Poetry",
    link: "https://outlanderzine.wordpress.com/2023/10/18/faded-fabrics/",
  },
  {
    id: 6,
    title: "Walking on Sublime",
    publishedIn: "Outlander Magazine",
    date: "2023/08/08",
    category: "Personal Essay",
    link: "https://outlanderzine.wordpress.com/2023/08/08/walking-on-sublime/",
  },
  {
    id: 7,
    title: "Today and It's Gone",
    publishedIn: "Outlander Magazine",
    date: "2024/07/16",
    category: "Prose",
    link: "https://outlanderzine.wordpress.com/2024/07/16/today-and-its-gone/",
  },
  {
    id: 8,
    title: "Somewhere on the East Coast",
    publishedIn: "Outlander Magazine",
    date: "2023/11/25",
    category: "Personal Essay",
    link: "https://outlanderzine.wordpress.com/2023/11/25/somewhere-on-the-east-coast/",
  },
  {
    id: 9,
    title: "Cinnamon and Sugar",
    publishedIn: "Outlander Magazine",
    date: "2023/08/29",
    category: "Poetry",
    link: "https://outlanderzine.wordpress.com/2023/08/29/cinnamon-and-sugar/",
  },
  {
    id: 10,
    title: "Issue 02: The Pantheon Codex Prologue",
    publishedIn: "Meridian Literary",
    date: "2026/05/20",
    category: "Prose",
    link: "https://heyzine.com/flip-book/0f50009578.html",
  },
];

export default function Writing() {
  return (
    <>
      <Header
        heading="Writing"
        text={
          <>
            i have been writing little pieces of fiction since 2017, when i was
            in middle school. i only began taking it seriously after graduating
            high school in 2022. since then, i've worked with youth-led
            magazines as a{" "}
            <NavLink
              to="/about"
              className="underline decoration-red-500 hover:text-red-500"
            >
              staff writer
            </NavLink>
            , started a{" "}
            <a
              href="https://juno-magazine.web.app/"
              target="_blank"
              className="underline decoration-red-500 hover:text-red-500"
            >
              magazine
            </a>{" "}
            with my friends, and maintained a small{" "}
            <a
              href="https://aayushiieblog.web.app/"
              target="_blank"
              className="underline decoration-red-500 hover:text-red-500"
            >
              blog
            </a>{" "}
            for thoughts, stories, and niche technical content. i also have a
            dedicated page where i share lectures on{" "}
            <a
              href="https://glassnote-cv.vercel.app/"
              target="_blank"
              className="underline decoration-red-500 hover:text-red-500"
            >
              computer vision
            </a>
            .
          </>
        }
      />

      {/* <section className="w-full px-20 py-20 font-space"> */}
      <section className="w-full px-4 sm:px-8 md:px-20 py-12 md:py-20 font-space flex flex-col gap-1 justify-center items-center md:block">
        {/* HEADER */}
        <div
          className="
            grid
            grid-cols-[1fr_1fr_1fr_1fr]
            md:grid-cols-[2fr_1fr_1fr_1fr]
            md:items-center
            justify-center
            md:pb-2
            pb-1
            text-sm
            md:text-lg
            font-bold
            text-center
          "
        >
          <h2
            className="border-b-4
          border-[#f8f6f3] mx-4"
          >
            Title
          </h2>
          <h2
            className="border-b-4
          border-[#f8f6f3] mx-4"
          >
            Published In
          </h2>
          <h2
            className="border-b-4
          border-[#f8f6f3] mx-4"
          >
            Date
          </h2>
          <h2
            className="border-b-4
          border-[#f8f6f3] mx-4"
          >
            Category
          </h2>
        </div>

        {/* ROWS */}
        <div className="flex flex-col font-space">
          {writings.map((item) => (
            <div
              key={item.id}
              className="
                grid
                grid-cols-[1fr_1fr_1fr_1fr]
                md:grid-cols-[2fr_1fr_1fr_1fr]
                justify-center
                md:items-start
                gap-3 md:gap-6
                py-5 md:py-6
                px-2 md:px-6
                transition-colors
              "
            >
              {/* TITLE */}
              <a href={item.link} target="_blank">
                <div>
                  <h3
                    className="
                  inline
                  text-base md:text-lg
                  font-bold
                  underline
                  decoration-red-500
                  underline-offset-4
                "
                  >
                    {item.title}
                  </h3>
                </div>
              </a>

              {/* PUBLISHED IN */}
              <div className="text-sm md:text-lg px-0 md:px-6 text-zinc-300 md:text-inherit">{item.publishedIn}</div>

              {/* DATE */}
              <div className="text-sm md:text-lg px-0 md:px-6 text-zinc-300 md:text-inherit">{item.date}</div>

              {/* CATEGORY */}
              <div className="text-sm md:text-lg px-0 md:px-6 text-zinc-300 md:text-inherit">{item.category}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
