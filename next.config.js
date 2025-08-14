/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Disable problematic experimental features for deployment
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
  },
  // Enable compression
  compress: true,
  // Enable React strict mode
  reactStrictMode: true,
  // Disable font optimization for static export
  optimizeFonts: false,
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig;
