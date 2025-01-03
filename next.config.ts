import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next'.NextConfig)} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      // {
      //   source     : "/",
      //   destination: "/home",
      //   permanent  : false,
      // },
    ];
  },
};

// export default nextConfig;
export default withNextIntl(nextConfig);
