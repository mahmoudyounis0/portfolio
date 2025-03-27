import React from "react";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

export default function Experience() {
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
              I'm currently pursuing a Bachelor's degree in Computer Science, building a strong foundation in web development.I’m always learning and keeping up with the latest tools and trends to create modern, high quality solutions.I have a passion for coding and enjoy tackling challenges.I’m excited to apply my skills in real world projects and contribute to innovative solutions.I’m eager to learn, grow, and make a positive impact in the tech world.
              </p>
            </div>

            <Link
              to="https://drive.google.com/file/d/13iAbkUlBgKkDiYxnK0pkjJ7UjKh8KX9x/view?usp=drive_linkx"
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
