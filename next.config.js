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
  basePath: isProd ? "/Portfolio" : undefined,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
