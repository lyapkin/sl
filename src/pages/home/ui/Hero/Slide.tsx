import Image from "next/image";
import s from "../styles.module.scss";
import { type Offer } from "../../models";
import { Link } from "@/src/shared/ui";
import clsx from "clsx";

const Slide = ({ slide }: Props) => {
  return (
    <article className={clsx(s.slide, "container")}>
      <div className={s.slide__img}>
        <Image
          src={slide.img}
          alt={slide.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <h2 className={s.slide__title}>{slide.title}</h2>
      <p className={s.slide__sub}>{slide.sub}</p>
      <Link href={slide.link} className={s.slide__link}>
        Перейти
      </Link>
    </article>
  );
};

interface Props {
  slide: Offer;
}

export default Slide;
