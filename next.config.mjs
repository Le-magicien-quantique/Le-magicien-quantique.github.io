import nextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
};

const withNextIntl = nextIntl("./i18n.ts");

export default withNextIntl(nextConfig);