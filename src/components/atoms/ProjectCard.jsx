import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, A11y } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectCard = ({ data, limit, starter }) => {
  const displayData = limit ? data.slice(0, limit) : data;

  const pagination = {
    clickable: true,
    renderBullet: (index, className) => `<button class="${className}" aria-label="Go to slide ${index + 1}"></button>`,
  };

  const breakPoints = {
    320: { slidesPerView: 1, spaceBetween: 20, loop: true },
    375: { slidesPerView: 1, spaceBetween: 20, loop: true },
    420: { slidesPerView: 1, spaceBetween: 20, loop: true },
    767: { slidesPerView: 2, spaceBetween: 30 },
    1025: { slidesPerView: 3, spaceBetween: 30 },
  };

  return (
    <div className="relative container mx-auto flex justify-center items-center gap-5 flex-wrap">
      <Swiper
        initialSlide={starter}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 1,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination, A11y]}
        className="mySwiper"
        breakpoints={breakPoints}
      >
        {displayData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="max-w-sm bg-supcolor border-2 border-primary rounded-lg shadow-xl"
            tabIndex={0}
            role="group"
            aria-roledescription="slide"
            aria-label={item.name}
          >
            <div className="h-full w-full bg-supcolor rounded-lg overflow-hidden flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-inset">
              <img
                className="w-full h-48 object-cover border-b-2 border-primary"
                src={item.imageUrl}
                alt={`Screenshot of ${item.name}`}
                loading="lazy"
              />

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-kanit mb-2 text-2xl font-bold tracking-tight uppercase text-primary">
                    {item.name}
                    <span className="text-morning text-6xl ml-1 leading-[0]">.</span>
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech?.slice(0, 4).map((t, i) => (
                      <span key={i} className="px-2 py-0.5 border border-primary rounded-full text-xs font-mono uppercase tracking-widest text-primary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mb-6 font-mono text-sm text-fonts line-clamp-4">
                    {item.description}
                  </p>
                </div>
                
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link relative flex items-center justify-center px-6 py-3 w-full border-2 border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300 group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10 text-lg tracking-[0.2em] font-bold font-kanit group-hover:text-white transition-colors">
                    LAUNCH DEMO
                  </span>
                  <FaArrowRightLong className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCard;
