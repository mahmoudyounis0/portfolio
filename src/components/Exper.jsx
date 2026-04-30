import React from "react";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

export default function AboutMe() {
  return (
    <main className=" h-screen flex justify-center items-center w-full bg-primary md:py-10 max-sm:py-5 ">
      <div
        className="container mx-auto flex max-sm:flex-col justify-center relative z-50"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="knowMe flex max-sm:flex-col justify-center items-center gap-10 max-sm:gap-5 bg-supcolor max-w-6xl max-sm:w-auto p-5 rounded-lg bg-no-repeat bg-contain bg-right  max-sm:mx-2">
          <img
            data-aos="fade-up"
            data-aos-duration="3000"
            src="/images/anime-removebg.png"
            alt="anime"
            loading="lazy"
            className="w-60 h-auto aspect-auto"
          />
          <div className="flex flex-col justify-between items-start gap-5">
            <div data-aos="fade-up" data-aos-duration="3000">
              <h1 className="text-4xl font-kanit font-semibold text-fonts mb-2 uppercase max-sm:text-2xl">
                About me
              </h1>
              <p className="max-w-lg max-sm:text-xs">
                Software Engineer with hands-on experience building scalable SaaS
                platforms, real-time voice systems, and AI-powered web applications.
                I hold a Bachelor's degree in Computer Science and have been shipping
                production-ready full-stack solutions since 2024 — working across React,
                Next.js, Node.js, Express, and Python. I care deeply about clean
                architecture, reliable systems, and writing code that actually works
                in the real world.
              </p>
            </div>

            <Link
              to="https://drive.google.com/file/d/1GQWUXkoVv1FNpN8tRnNmjmcHjn3tk4NA/view?usp=sharing"
              data-aos="fade-up"
              data-aos-duration="3000"
              target="_blank"
              className="link relative transition-all flex items-center px text-fonts border-solid border-primary border-2 rounded-lg px-16   max-sm:mb-5 py-3 w-fit justify-center shadow-xl"
            >
              <span className="relative z-30 mr-1 font-kanit">Download CV</span>
              <HiDownload className="cursor-pointer relative z-30 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
