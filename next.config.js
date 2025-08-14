/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  // Enable experimental optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
  },
  // Enable compression
  compress: true,
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Optimize fonts
  optimizeFonts: true,
};

module.exports = nextConfig;
