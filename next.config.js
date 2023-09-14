/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  assetPrefix: isProd ? "/Portfolio/" : undefined,
  basePath: isProd ? "/Portfolio" : undefined,
  experimental: {
    appDir: true,
  },
  distDir: "out",
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};

module.exports = nextConfig;
