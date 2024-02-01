/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.packvack.com",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.packvack.com",
        port: "",
        pathname: "/uploads/*",
      },
      {
        protocol: "https",
        hostname: "api.packvack.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "http",
        hostname: "52.66.60.24",
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
