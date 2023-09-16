"use client";

import Link from "next/link";
import "./styles.css";

export default function NavExpand() {
  return (
    <nav id="nav-expand" className="nav-expand-container">
      <div className="nav-expand-content">
        <div className="p-4 flex justify-between items-center">
          <span className="sm:text-4xl text-3xl font-bold text-blue-600">
            Navigators
          </span>
          <span
            onClick={() => {
              const sideElement = document.getElementById("nav-expand");
              if (sideElement.classList.contains("show"))
                sideElement.classList.remove("show");
            }}
            className="material-symbols-rounded"
          >
            close
          </span>
        </div>
        <div className="flex flex-col">
          <Link
            onClick={() => {
              const sideElement = document.getElementById("nav-expand");
              if (sideElement.classList.contains("show"))
                sideElement.classList.remove("show");
            }}
            href="/"
            className="rounded-md hover:bg-neutral-100 duration-200 sm:mx-4 mx-1 p-4"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              const sideElement = document.getElementById("nav-expand");
              if (sideElement.classList.contains("show"))
                sideElement.classList.remove("show");
            }}
            href="#about-me"
            className="rounded-md hover:bg-neutral-100 duration-200 sm:mx-4 mx-1 p-4"
          >
            About Me
          </Link>
          <Link
            onClick={() => {
              const sideElement = document.getElementById("nav-expand");
              if (sideElement.classList.contains("show"))
                sideElement.classList.remove("show");
            }}
            href="#my-work"
            className="rounded-md hover:bg-neutral-100 duration-200 sm:mx-4 mx-1 p-4"
          >
            My Work
          </Link>
          <Link
            onClick={() => {
              const sideElement = document.getElementById("nav-expand");
              if (sideElement.classList.contains("show"))
                sideElement.classList.remove("show");
            }}
            href="#contact-me"
            className="rounded-md hover:bg-neutral-100 duration-200 sm:mx-4 mx-1 p-4"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
