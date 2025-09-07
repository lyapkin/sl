import Slider from "./Slider";
// import s from "../styles.module.scss";
import { getHeroOffersApi } from "../../api";

const Hero = async () => {
  const slides = await getHeroOffersApi();
  return (
    <>
      <Slider slides={slides} />
    </>
  );
};

export default Hero;
