"use client";
import { ProductPreview } from "@/src/entities/product";
import s from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { PreviewCard } from "../PreviewCard";

const Slider = ({ slides }: Props) => {
  return (
    <>
      <Swiper className={s.section__slider} slidesPerView={4} spaceBetween={32}>
        {slides.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <PreviewCard product={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={s.section__buttons}></div>
    </>
  );
};

interface Props {
  slides: ProductPreview[];
}

export default Slider;
