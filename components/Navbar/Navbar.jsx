"use client";

import Link from "next/link";
import { Raleway } from "next/font/google";
import { useEffect } from "react";

import "./styles.css";

const raleway = Raleway({ subsets: ["latin"] });

export default function Navbar() {
  const navigators = [
    {
      name: "Home",
      id: "root",
    },
    {
      name: "About Me",
      id: "about-me",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact Me",
      id: "contact-me",
    },
  ];

  useEffect(() => {
    const top_amount = 150;
    window.onscroll = () => {
      let scrollPosition = document.documentElement.scrollTop;
      let totalScrollHeight = document.documentElement.scrollHeight;
      let viewportHeight = window.innerHeight;

      console.log();

      let scrollProgress =
        (scrollPosition / (totalScrollHeight - viewportHeight)) * 100;
      let bgBlur = Math.min((scrollPosition / top_amount) * 3, 5);
      let backOpacity = Math.min((scrollPosition / 150).toFixed(2), 0.7);
      let textColor = Math.min(Math.round((scrollPosition / 150) * 100), 100);

      document.documentElement.style.setProperty(
        "--nav-bg-opacity",
        `${backOpacity}`
      );
      document.documentElement.style.setProperty(
        "--nav-bg-blur",
        `${bgBlur}px`
      );
      document.documentElement.style.setProperty(
        "--progress-value",
        `${scrollProgress}%`
      );
      document.documentElement.style.setProperty(
        "--nav-text-color",
        `${textColor}%`
      );
    };
  });
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full lg:w-4/5 z-30">
      <nav className="nav-bar sshadow-lg flex justify-between px-4 py-2 rounded-b-lg items-center">
        <Link
          href="/"
          className={`nav-name font-light text-7xl duration-200 text-white`}
        >
          Kaustubh Paturi
        </Link>
        <div
          className={`${raleway.className} md:flex hidden gap-6 items-center`}
        >
          {navigators.map(({ name, id }, indx) => {
            return (
              <div
                key={indx}
                className="hover:text-accent-500 link-underline font-[500] cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(id);
                  element.scrollIntoView();
                }}
                onMouseEnter={() =>
                  document.documentElement.style.setProperty(
                    "--link-underline-color",
                    "rgb(255 135 62)"
                  )
                }
              >
                {name}
              </div>
            );
          })}
        </div>
        <div className="md:hidden flex items-center">
          <span
            onClick={() => {
              const sideElement = document.getElementById("nav-expand");
              if (!sideElement.classList.contains("show"))
                sideElement.classList.add("show");
            }}
            className="material-symbols-rounded"
          >
            menu
          </span>
        </div>
      </nav>
    </div>
  );
}
