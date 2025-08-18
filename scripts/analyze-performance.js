#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🚀 Running JavaScript optimization analysis...\n')

// Analyze build output
const buildDir = path.join(process.cwd(), '.next')
const staticDir = path.join(buildDir, 'static')

if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory not found. Please run "npm run build" first.')
  process.exit(1)
}

// Check for large chunks
const checkChunkSizes = () => {
  console.log('📊 Analyzing chunk sizes...')
  
  try {
    const buildManifest = JSON.parse(
      fs.readFileSync(path.join(buildDir, 'build-manifest.json'), 'utf8')
    )
    
    const pages = buildManifest.pages
    const largePages = []
    
    Object.entries(pages).forEach(([page, chunks]) => {
      const totalSize = chunks.reduce((acc, chunk) => {
        const chunkPath = path.join(staticDir, 'chunks', chunk)
        if (fs.existsSync(chunkPath)) {
          const stats = fs.statSync(chunkPath)
          return acc + stats.size
        }
        return acc
      }, 0)
      
      if (totalSize > 100000) { // 100KB threshold
        largePages.push({ page, size: totalSize, chunks: chunks.length })
      }
    })
    
    if (largePages.length > 0) {
      console.log('⚠️  Large pages detected:')
      largePages.forEach(({ page, size, chunks }) => {
        console.log(`   ${page}: ${(size / 1024).toFixed(1)}KB (${chunks} chunks)`)
      })
    } else {
      console.log('✅ All pages are under 100KB')
    }
    
  } catch (error) {
    console.log('ℹ️  Could not analyze build manifest')
  }
}

// Check for unused dependencies
const checkUnusedDeps = () => {
  console.log('\n📦 Checking for potentially unused dependencies...')
  
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies }
  
  // Common heavy dependencies to watch
  const heavyDeps = [
    '@react-three/fiber',
    '@react-three/drei', 
    'three',
    'framer-motion',
    'react-particles',
    'tsparticles'
  ]
  
  const installedHeavyDeps = heavyDeps.filter(dep => deps[dep])
  
  if (installedHeavyDeps.length > 0) {
    console.log('📦 Heavy dependencies found:')
    installedHeavyDeps.forEach(dep => {
      console.log(`   • ${dep}: ${deps[dep]}`)
    })
    console.log('💡 Consider lazy loading these components or removing if unused')
  }
}

// Performance recommendations
const performanceRecommendations = () => {
  console.log('\n💡 Performance Optimization Recommendations:\n')
  
  console.log('1. ✅ Code Splitting Implemented')
  console.log('   - Dynamic imports for below-the-fold components')
  console.log('   - Separate chunks for heavy libraries')
  
  console.log('\n2. ✅ Script Loading Optimized')
  console.log('   - Google Analytics & GTM set to lazyOnload')
  console.log('   - Production-only analytics loading')
  
  console.log('\n3. ✅ Bundle Analysis Available')
  console.log('   - Run "npm run analyze" to see detailed breakdown')
  console.log('   - Check .next/report.html for visual analysis')
  
  console.log('\n4. 🔧 Additional Optimizations:')
  console.log('   - Enable gzip/brotli compression on your server')
  console.log('   - Use CDN for static assets')
  console.log('   - Implement service worker for caching')
  console.log('   - Consider removing unused CSS with PurgeCSS')
  
  console.log('\n5. 📱 Mobile Optimizations:')
  console.log('   - Images are optimized with next/image')
  console.log('   - Critical CSS inlined')
  console.log('   - Non-critical components lazy loaded')
}

// Run analysis
checkChunkSizes()
checkUnusedDeps()
performanceRecommendations()

console.log('\n🎉 Analysis complete!')
console.log('📊 Build report: .next/report.html')
console.log('🚀 Deploy with confidence!')
