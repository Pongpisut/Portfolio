/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  assetPrefix: isProd ? "/Portfolio/" : undefined,
  basePath: isProd ? "/Portfolio" : undefined,
  images: {
    loader: "akamai",
    path: "/Portfolio",
  },
};

module.exports = nextConfig;
