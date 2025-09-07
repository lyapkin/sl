"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "../styles.module.scss";
import "swiper/scss";
// import "swiper/scss/pagination";
import { type Offer } from "../../models";
import { Autoplay, Pagination } from "swiper/modules";
import Slide from "./Slide";
import clsx from "clsx";

const Slider = ({ slides }: Props) => {
  return (
    <Swiper
      className={s.hero}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      speed={500}
      // height={770}
      loop={true}
      pagination={{
        clickable: true,
        el: `.${s.dots}`,
        bulletClass: s.dots__item,
        bulletActiveClass: s.dots__item_active,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
    >
      {slides.map((item) => {
        return (
          <SwiperSlide
            key={item.id}
            className={clsx(s.hero__slide, "hero")}
            style={{ "--bg": `url(${item.bg})` } as React.CSSProperties}
          >
            <Slide slide={item} />
          </SwiperSlide>
        );
      })}
      <div className={clsx(s.hero__dots, s.dots)}></div>
    </Swiper>
  );
};

interface Props {
  slides: Offer[];
}

export default Slider;
