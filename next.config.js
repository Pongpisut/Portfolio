/** @type {import('next').NextConfig} */
const path = require("path");
const isProd = process.env.NODE_ENV === "production";
console.log("isProd: ", isProd);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  assetPrefix: isProd ? "/Portfolio/" : undefined,
  basePath: isProd ? "/Portfolio" : undefined,
};

module.exports = nextConfig;
