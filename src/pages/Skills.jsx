import { useRef } from "react";
import IconRender from "../components/atoms/IconRender";
import { skills } from "../constants/skills";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Skills() {
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => `<span class="${className}"></span>`,
  };

  const breakPoints = {
    320: { slidesPerView: 1, spaceBetween: 12 },
    480: { slidesPerView: 2, spaceBetween: 12 },
    768: { slidesPerView: 3, spaceBetween: 16 },
  };

  return (
    <main className="over h-screen flex justify-center items-center mb-25">

      {/* ── LARGE SCREENS: original layout ── */}
      <section className="hidden lg:block container mx-auto bg-supcolor p-5 max-h-[90%] rounded-xl lg:w-4/6">
        <div className="flex justify-center items-center pb-3">
          <h1 className="text-4xl font-mono text-primary font-bold mt-2">Skills</h1>
        </div>
        <div className="flex items-center justify-center">
          <section className="p-2 w-full" data-aos="fade-up" data-aos-duration="1000">
            <div className="grid grid-cols-4 gap-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} data-aos="fade-up" data-aos-duration="1000">
                  <h3 className="text-xs font-mono font-bold text-primary uppercase tracking-widest border-b border-primary pb-2 mb-3">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item.name} className="flex items-center gap-2 text-gray-700">
                        <span className="w-7 h-7 shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
                          <IconRender iconName={item.icon} />
                        </span>
                        <span className="text-sm font-mono">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* ── SMALL / TABLET SCREENS: Swiper carousel, full width ── */}
      <section className="lg:hidden w-full bg-supcolor py-5 p-20 max-sm:pt-2 min-h-1/3 max-h-[40%] ">
        <div className="flex justify-center items-center pb-3 max-sm:pb-1">
          <h1 className="text-4xl max-sm:text-2xl font-mono text-primary  font-bold mt-2">
            Skills
          </h1>
        </div>

        <Swiper
          grabCursor
          centeredSlides
          slidesPerView="auto"
          pagination={pagination}
          modules={[Pagination]}
          breakpoints={breakPoints}
          className="w-full pb-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <SwiperSlide
              key={category}
              className="bg-white border-2  rounded-xl shadow-xl p-4 h-auto"
            >
              {/* Category header */}
              <h3 className="text-xs font-mono font-bold text-primary uppercase tracking-widest border-b  pb-2 mb-3">
                {category}
              </h3>

              {/* Skills list */}
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name} className="flex items-center gap-2 text-gray-700">
                    <span className="w-7 h-7 shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
                      <IconRender iconName={item.icon} />
                    </span>
                    <span className="text-sm font-mono">{item.name}</span>
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </main>
  );
}