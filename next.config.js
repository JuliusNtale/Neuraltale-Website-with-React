/** @type {import('next').NextConfig} */
const nextConfig = {
  // Conditional configuration based on deployment platform
  ...(process.env.VERCEL ? {
    // Vercel-specific configuration (no static export)
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
  } : {
    // Cloudflare Pages configuration (static export)
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
  }),
  images: {
    // Vercel supports image optimization, Cloudflare Pages doesn't
    unoptimized: process.env.VERCEL ? false : true,
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
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  // Enable compression
  compress: true,
  // Enable React strict mode
  reactStrictMode: true,
  // Font optimization (Vercel supports it, disable for static export)
  optimizeFonts: process.env.VERCEL ? true : false,
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: false,
  },
  swcMinify: true,
  poweredByHeader: false,
  generateEtags: process.env.VERCEL ? true : false,
  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Only run in production
    if (!dev && !isServer) {
      // Enhanced code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        maxSize: 244000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
            maxSize: 244000,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          motion: {
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            name: 'motion',
            chunks: 'async',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
            priority: 5,
          },
        },
      };

      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // Bundle analyzer
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;
