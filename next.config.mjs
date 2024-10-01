/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-us-west-2.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    config.cache = false;
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
