/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ae01.alicdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
