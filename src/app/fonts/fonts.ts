// import localFont from "next/font/local";
import { Inter } from "next/font/google";

// const fonts = localFont({
//   src: [
//     { path: "../../../public/fonts/Montserrat-Light.ttf", weight: "300" },
//     { path: "../../../public/fonts/Montserrat-Regular.ttf", weight: "400" },
//     { path: "../../../public/fonts/Montserrat-Medium.ttf", weight: "500" },
//     { path: "../../../public/fonts/Montserrat-SemiBold.ttf", weight: "600" },
//     { path: "../../../public/fonts/Montserrat-Bold.ttf", weight: "700" },
//   ],
//   variable: "--main-font",
// });

const fonts = Inter({
  variable: "--main-font",
  subsets: ["latin", "cyrillic"],
});

export default fonts;
