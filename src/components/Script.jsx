import React from "react";

export default function Experience() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen max-sm:px-10 font-mono">
      <div className="text-center mb-10" data-aos="fade-down">
        <span className="text-xs text-primary border border-primary px-4 py-1 rounded-full font-mono tracking-widest uppercase">
          Experience
        </span>
      </div>
      {/* Blue Crunch */}
      <div className="flex justify-center lg:gap-60 md:gap-20 sm:gap-5 mobile:gap-5 items-center md:mx-10 mt-10">
        <article>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-primary border border-primary px-2 py-0.5 rounded-full">
              Feb 2026 – Present
            </span>
          </div>
          <h1
            className="text-primary text-[clamp(1.875rem,5vw,3.75rem)] font-bold mb-5 max-sm:mb-2 font-kanit"
            data-aos="fade-right"
          >
            Blue Crunch
          </h1>
          <p
            className="text-fonts text-[clamp(0.75rem,2vw,1rem)] lg:max-w-lg md:max-w-sm"
            data-aos="fade-up"
          >
            Building scalable SaaS platforms with real-time voice and AI-powered
            chat features. Developing secure backend APIs, role-based dashboards,
            and production-ready full-stack systems with a focus on reliability
            and clean architecture.
          </p>
          {/* <div className="flex flex-wrap gap-2 mt-4" data-aos="fade-up">
            {["React-flow","Docker", "Redis"].map((tag) => (
              <span
                key={tag}
                className="text-xs text-primary border border-primary px-2 py-0.5 rounded-full opacity-70"
              >
                {tag}
              </span>
            ))}
          </div> */}
        </article>

        <div className="lg:block md:block max-sm:hidden dot-grid lg:mr-20 sm:mr-0" aria-hidden="true"></div>
      </div>

      {/* Astro Reach */}
      <div className="flex justify-center lg:gap-60 md:gap-20 items-center md:mx-10 mt-10">
        <div className="lg:block md:block max-sm:hidden dot-grid ml-10" aria-hidden="true"></div>
        <article>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-primary border border-primary px-2 py-0.5 rounded-full">
              Oct 2024 – Feb 2026
            </span>
          </div>
          <h1
            className="text-primary text-[clamp(1.875rem,5vw,3.75rem)] font-bold mb-5 max-sm:mb-2 font-kanit"
            data-aos="fade-right"
          >
            Astro Reach
          </h1>
          <p
            className="text-fonts text-[clamp(0.75rem,2vw,1rem)] lg:max-w-lg md:max-w-sm"
            data-aos="fade-up"
          >
            Developed and maintained modern responsive websites using React and
            Next.js. Translated UI/UX designs into high-quality code with
            animations, SEO optimization, performance enhancements, and
            cross-browser compatibility for client-facing products.
          </p>
          <div className="flex flex-wrap gap-2 mt-4" data-aos="fade-up">
            {["Next.js", "React", "Bootstrap", "Tailwind", "SEO", "SCSS"].map((tag) => (
              <span
                key={tag}
                className="text-xs text-primary border border-primary px-2 py-0.5 rounded-full opacity-70"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}