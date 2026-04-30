import React from "react";

export default function Experience() {
  return (
    <main className="flex flex-col justify-center items-center h-screen max-sm:px-10 font-mono">
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
            className="text-primary lg:text-6xl md:text-4xl max-sm:text-3xl font-bold mb-5 max-sm:mb-2 font-kanit"
            data-aos="fade-right"
          >
            Blue Crunch
          </h1>
          <p
            className="text-fonts lg:text-base md:text-xs max-sm:text-sm lg:max-w-lg md:max-w-sm"
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

        <div className="lg:block md:block max-sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-72 h-72 lg:mr-20 sm:mr-0"
            viewBox="0 0 523 214"
            data-shape="true"
            aria-hidden="true"
          >
            <path
              fill="#4142e6"
              d="M313.651 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 20.388a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 20.388a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 20.388a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 58.834a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 58.834a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 58.834a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM351.587 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM370.555 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM389.522 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM408.49 97.28a1.5 1.5 0 11-2.998.001 1.5 1.5 0 012.998-.001zM427.458 97.28a1.5 1.5 0 11-2.999.001 1.5 1.5 0 012.999-.001zM446.427 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM465.394 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM522.298 97.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM313.651 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM332.62 135.726a1.5 1.5 0 11-3.002 0 1.5 1.5 0 013.001 0zM351.587 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM370.555 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM389.522 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM465.394 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM484.362 135.726a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM503.33 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013.001 0zM522.298 135.726a1.5 1.5 0 11-3.001 0 1.5 1.5 0 013 0zM313.651 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM332.62 174.173a1.5 1.5 0 11-3.002-.002 1.5 1.5 0 013.001.002zM351.587 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM370.555 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM389.522 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM408.49 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM427.458 174.173a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM446.427 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002zM465.394 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM484.362 174.173a1.5 1.5 0 11-3-.002 1.5 1.5 0 013 .002zM503.33 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013.001.002zM522.298 174.173a1.5 1.5 0 11-3.001-.002 1.5 1.5 0 013 .002z"
            />
            <path
              fill="none"
              stroke="#4142e6"
              strokeMiterlimit="50"
              strokeWidth="2"
              d="M16.753 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM44.822 9.614a7.892 7.892 0 11-15.784-.002 7.892 7.892 0 0115.784.002zM72.89 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.783 0zM100.96 9.614a7.892 7.892 0 11-15.783-.002 7.892 7.892 0 0115.783.002zM129.028 9.614a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0z"
            />
          </svg>
        </div>
      </div>

      {/* Astro Reach */}
      <div className="flex justify-center lg:gap-60 md:gap-20 items-center md:mx-10 mt-10">
        <div className="lg:block md:block max-sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="193"
            viewBox="0 0 325 193"
            data-shape="true"
            aria-hidden="true"
            className="ml-10"
          >
            <path
              fill="none"
              stroke="#4142e6"
              strokeMiterlimit="50"
              strokeWidth="2"
              d="M17.053 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM45.122 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM73.19 9.57a7.891 7.891 0 11-15.781 0 7.891 7.891 0 0115.782 0zM101.26 9.57a7.891 7.891 0 11-15.782 0 7.891 7.891 0 0115.782 0zM129.329 9.57a7.891 7.891 0 11-15.783 0 7.891 7.891 0 0115.783 0zM238.083 103.963v0l-.561 22.259v0l22.259-.561v0l-.561 22.258v0l22.259-.56v0l-.561 22.258v0l22.259-.56v0l-.559 22.26v0l22.26-.56v0"
            />
          </svg>
        </div>

        <article>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-primary border border-primary px-2 py-0.5 rounded-full">
              Oct 2024 – Feb 2026
            </span>
          </div>
          <h1
            className="text-primary lg:text-6xl md:text-4xl max-sm:text-3xl font-bold mb-5 max-sm:mb-2 font-kanit"
            data-aos="fade-right"
          >
            Astro Reach
          </h1>
          <p
            className="text-fonts lg:text-base md:text-xs max-sm:text-sm lg:max-w-lg md:max-w-sm"
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