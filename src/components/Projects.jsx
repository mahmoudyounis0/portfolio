import React from "react";

export default function Projects() {
  return (
    <main className=" flex flex-col justify-center items-center min-h-screen   max-sm:px-10   font-mono">
      {/* Design section */}
      <div className="flex justify-center lg:gap-60 md:gap-20 sm:gap-5 mobile:gap-5 items-center  md:mx-10 mt-10">
        <article>
          <h1
            className="text-primary text-[clamp(1.875rem,5vw,3.75rem)] font-bold mb-5 max-sm:mb-2 font-kanit"
            data-aos="fade-right"
          >
            Frontend
          </h1>
          <p
            className="text-fonts text-[clamp(0.75rem,2vw,1rem)] lg:max-w-lg md:max-w-sm"
            data-aos="fade-up"
          >
            I build responsive, polished user interfaces using React,
            Next.js, and Tailwind CSS. From component architecture
            to state management, animations, and cross-browser
            compatibility. I turn designs into performant, accessible
            front-end experiences that users genuinely enjoy interacting with.</p>
        </article>
        <div className="lg:block md:block max-sm:hidden dot-grid lg:mr-20 sm:mr-0" aria-hidden="true"></div>
      </div>
      {/* Engineering Section */}
      <div className="flex justify-center lg:gap-60 md:gap-20  items-center  md:mx-10 mt-10">
        <div className="lg:block md:block max-sm:hidden dot-grid ml-10" aria-hidden="true"></div>
        <article>
          <h1
            className="text-primary text-[clamp(1.875rem,5vw,3.75rem)] font-bold mb-5 max-sm:mb-2 font-kanit"
            data-aos="fade-right"
          >
            Backend
          </h1>
          <p
            className="text-fonts text-[clamp(0.75rem,2vw,1rem)] lg:max-w-lg md:max-w-sm"
            data-aos="fade-up"
          >
            I design and build scalable server-side systems using
            Node.js, Express, and Python. From RESTful API design
            and JWT authentication to role-based access control
            and Redis caching. I work across relational and
            non-relational databases, focusing on reliability,
            security, and clean architecture that holds up in production.
          </p>
        </article>
      </div>
    </main>
  );
}
