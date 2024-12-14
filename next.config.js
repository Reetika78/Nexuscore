/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors during builds
  },
};
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_S3_ACCESS_KEY_ID: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
    NEXT_PUBLIC_S3_SECRET_ACCESS_KEY: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
    NEXT_PUBLIC_S3_BUCKET_NAME: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
  },
};

