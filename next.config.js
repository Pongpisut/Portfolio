/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: isProd
    ? {
        loader: "akamai",
        path: "",
      }
    : null,
  assetPrefix: isProd ? "/Portfolio/" : undefined,
  basePath: isProd ? "/Portfolio" : undefined,
  env: {
    NEXT_PUBLIC_FACEBOOK_URL: process.env.NEXT_PUBLIC_FACEBOOK_URL,
  },
};

module.exports = nextConfig;
