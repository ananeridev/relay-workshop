/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  compiler: {
    relay: require("./relay.config"),
  }
};

module.exports = nextConfig;
