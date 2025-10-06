import clsx from "clsx";
import s from "../styles.module.scss";
import { ProductDetail } from "@/src/entities/product";
import ImgSlider from "./ImgSlider";
import ImgsList from "./ImgsList";

const Imgs = ({ imgs, alt, className }: Props) => {
  return (
    <div className={clsx(s.imgs, className)}>
      <ImgSlider imgs={imgs} alt={alt} />
      <ImgsList imgs={imgs} alt={alt} />
    </div>
  );
};

interface Props {
  imgs: ProductDetail["imgs"];
  alt: string;
  className?: string;
}

export default Imgs;
