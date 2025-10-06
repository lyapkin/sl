"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "../styles.module.scss";
import { ProductDetail } from "@/src/entities/product";
import Image from "next/image";

const ImgSlider = ({ imgs, alt }: Props) => {
  return (
    <Swiper className={s.imgs__slider} slidesPerView={1}>
      {imgs.map((item) => {
        return (
          <SwiperSlide key={item.id} className={s.imgs__slide}>
            <Image src={item.img} fill alt={alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

interface Props {
  imgs: ProductDetail["imgs"];
  alt: string;
}

export default ImgSlider;
