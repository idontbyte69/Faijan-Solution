/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  typescript: {
    ignoreBuildErrors: false
  },
  output: 'standalone',
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig 