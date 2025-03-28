import { React, useState } from "react";
import projects from "../constants/projects.json";
import { Link } from "react-router-dom";
import ProjectCard from "./atoms/ProjectCard";
import { AiFillHome } from "react-icons/ai";

export default function Works() {
  const [activeBtn, setActiveBtn] = useState("all");
  const tech = ["React", "Next", "Html-Css-JS Only", "all"];

  // Sort projects (React projects first)
  const sortedProjects = [...projects].sort((a, b) => {
    return a.tech.includes("React") ? -1 : 1;
  });

  const filteredProjects =
    activeBtn === "all"
      ? sortedProjects
      : sortedProjects.filter((item) => item.tech.includes(activeBtn));

  return (
    <main className="relative h-screen flex flex-col justify-center items-center bg-supcolor z-50">
      {/* Filter Buttons */}
      <div className="flex mb-10 shadow-xl border-primary border-2 rounded-lg bg-white relative z-10">
        {tech.map((el, index) => (
          <button
            key={index}
            // onClick={() => setActiveBtn(el)}
            className={`md:px-6 px-2 py-2 border-r-2 last-of-type:border-none border-gray-300 capitalize transition-all duration-300 ${
              activeBtn === el ? "bg-primary text-white " : ""
            }`}
          >
            {el}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      {filteredProjects.length > 0 ? (
        <ProjectCard data={filteredProjects} limit={0} starter={0} />
      ) : (
        <>
          <img
            src="./images/course.png"
            className="aspect-auto max-w-sm h-auto my-10"
            loading="lazy"
            alt="No Projects"
          />
          <h1 className="text-primary font-semibold">No projects available Now</h1>
        </>
      )}

      {/* Background Image */}
      <img
        src="./images/icon-dotted-map-2.png"
        alt="wallpaper"
        className="absolute right-0 top-0 z-0"
      />

      {/* Home Link */}
      <Link to="/">
        <AiFillHome
          size={30}
          className="absolute left-5 md:left-12 top-5 md:top-10 text-primary"
        />
      </Link>
    </main>
  );
}
