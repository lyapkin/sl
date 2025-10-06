import Image from "next/image";
import s from "../styles.module.scss";
import { ProductDetail } from "@/src/entities/product";

const ImgsList = ({ imgs, alt }: Props) => {
  return (
    <div className={s.imgs__list}>
      {imgs.map((item) => {
        return (
          <div className={s.imgs__item} key={item.id}>
            <Image src={item.img} fill alt={alt} />
          </div>
        );
      })}
    </div>
  );
};

interface Props {
  imgs: ProductDetail["imgs"];
  alt: string;
}

export default ImgsList;
