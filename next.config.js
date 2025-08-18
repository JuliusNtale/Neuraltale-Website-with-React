/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enhanced performance optimizations
  experimental: {
    optimizePackageImports: [
      'framer-motion', 
      'lucide-react', 
      'react-icons',
      'react-intersection-observer',
      'react-hook-form'
    ],
    optimizeCss: true,
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
    styledComponents: false,
  },
  swcMinify: true,
  poweredByHeader: false,
  generateEtags: false,
  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Only run in production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
