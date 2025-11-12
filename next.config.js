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
    // Disable server-side features for static export
    generateBuildId: async () => 'cloudflare-pages-build'
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
      'react-intersection-observer'
    ],
    // optimizeCss: true, // Disabled due to CSS parsing issues
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  // Enable compression
  compress: true,
  // Enable React strict mode
  reactStrictMode: true,
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    styledComponents: false,
  },
  poweredByHeader: false,
  generateEtags: process.env.VERCEL ? true : false,
  // Add headers for better caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
  // Turbopack configuration (required for Next.js 16)
  turbopack: {},
};

module.exports = nextConfig;
