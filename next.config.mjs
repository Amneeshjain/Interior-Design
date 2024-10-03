/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3-us-west-2.amazonaws.com', 'backend-interior.onrender.com'],
  },
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
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
