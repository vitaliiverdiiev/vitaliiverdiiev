import type { NextConfig } from "next";
// import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";

// const withNextIntl = createNextIntlPlugin(
//   './src/lib/shared/config/i18n/request.ts',
// );

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

/** @type {import('next'.NextConfig)} */
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images        : {
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

const configuration = withMDX(nextConfig);
// const configuration = withNextIntl(withMDX(nextConfig))

export default configuration;
