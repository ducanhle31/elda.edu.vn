/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.10.92.6",
        port: "8060",
        pathname: "/**"
      }
    ],
    unoptimized: true
  }
};

module.exports = nextConfig;
