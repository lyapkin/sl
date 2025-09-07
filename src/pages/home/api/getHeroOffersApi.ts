import { Offer } from "../models";

export const getHeroOffersApi = async (): Promise<Offer[]> => {
  return [
    {
      id: 1,
      bg: "/__dump/images/hero-bg.jpg",
      img: "/__dump/images/hero-pic.png",
      title: "SOTHYS Hydra hyaluronic acid",
      sub: "Увлажняющий омолаживающий крем",
      link: "#",
    },
    {
      id: 2,
      bg: "/__dump/images/hero-bg.jpg",
      img: "/__dump/images/hero-pic.png",
      title: "SOTHYS Hydra hyaluronic acid",
      sub: "Увлажняющий омолаживающий крем",
      link: "#",
    },
    {
      id: 3,
      bg: "/__dump/images/hero-bg.jpg",
      img: "/__dump/images/hero-pic.png",
      title: "SOTHYS Hydra hyaluronic acid",
      sub: "Увлажняющий омолаживающий крем",
      link: "#",
    },
    {
      id: 4,
      bg: "/__dump/images/hero-bg.jpg",
      img: "/__dump/images/hero-pic.png",
      title: "SOTHYS Hydra hyaluronic acid",
      sub: "Увлажняющий омолаживающий крем",
      link: "#",
    },
  ];
};
