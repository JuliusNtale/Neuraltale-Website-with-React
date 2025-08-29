// Performance optimization config for Next.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // Enhanced image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'framer-motion', 
      'lucide-react', 
      'react-icons',
      'react-intersection-observer',
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      'react-particles',
      'tsparticles'
    ],
    optimizeCss: true,
    turbo: {
      rules: {
        '*.tsx': ['swc-loader'],
        '*.ts': ['swc-loader'],
      },
    },
  },

  // Enhanced compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: false,
  },

  // Aggressive bundle splitting
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
            maxSize: 150000, // Reduced from 244000
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          // Separate heavy libraries
          threejs: {
            test: /[\\/]node_modules[\\/](@react-three|three)[\\/]/,
            name: 'threejs',
            chunks: 'async', // Load only when needed
            priority: 15,
            maxSize: 100000,
          },
          motion: {
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            name: 'motion',
            chunks: 'async', // Load only when needed
            priority: 10,
            maxSize: 80000,
          },
          particles: {
            test: /[\\/]node_modules[\\/](react-particles|tsparticles)[\\/]/,
            name: 'particles',
            chunks: 'async', // Load only when needed
            priority: 10,
            maxSize: 80000,
          },
          // Lucide icons
          lucide: {
            test: /[\\/]node_modules[\\/](lucide-react)[\\/]/,
            name: 'lucide',
            chunks: 'async',
            priority: 5,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
            priority: -5,
            maxSize: 100000,
          },
        },
      }

      // Tree shaking optimizations
      config.optimization.usedExports = true
      config.optimization.sideEffects = false
    }

    // Critical resource hints
    config.plugins.push(
      new (require('webpack').DefinePlugin)({
        'process.env.PRELOAD_CRITICAL': JSON.stringify([
          'react',
          'react-dom',
          'next',
        ]),
      })
    )

    return config
  },

  // Headers for performance
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
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
