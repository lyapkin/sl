"use client";
import { ProductPreview } from "@/src/entities/product";
import s from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { PreviewCard } from "../../../../widgets/product/ui/PreviewCard";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import { Type } from "./types";
import { ArrowButton } from "@/src/shared/ui";

const Slider = ({ slides, type }: Props) => {
  return (
    <>
      <Swiper
        className={s.section__slider}
        slidesPerView={4}
        spaceBetween={32}
        modules={[Navigation]}
        navigation={{
          prevEl: `.${type}button__left`,
          nextEl: `.${type}button__right`,
        }}
      >
        {slides.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <PreviewCard product={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={s.section__buttons}>
        <ArrowButton direction="left" className={`${type}button__left`} />
        <ArrowButton direction="right" className={`${type}button__right`} />
      </div>
    </>
  );
};

interface Props {
  slides: ProductPreview[];
  type: Type;
}

export default Slider;
