import path from "path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  typedRoutes: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/app/styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./src/shared/libs/i18n/request.ts");
export default withNextIntl(nextConfig);
