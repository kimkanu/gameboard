/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    enableUndici: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
    ],
  },
};

module.exports = nextConfig;
