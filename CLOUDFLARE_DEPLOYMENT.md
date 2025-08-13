# 🚀 Cloudflare Pages Deployment Guide

## NeuralTale Technologies Website - Cloudflare Pages Setup

This guide provides step-by-step instructions for deploying the NeuralTale Technologies website to **Cloudflare Pages**.

---

## ⚡ Quick Start

### Build & Deploy Commands for Cloudflare Pages Dashboard

When setting up your project in Cloudflare Pages, use these exact settings:

```
Framework preset: Next.js (Static HTML Export)
Build command: npm run build
Build output directory: out
Root directory: (leave empty)
Environment variables: (none required for basic setup)
```

---

## 📋 Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. Ensure your code is pushed to GitHub
2. Verify the project builds locally:
   ```bash
   npm install
   npm run build
   ```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Sign in to your Cloudflare account (or create one)
3. Click **"Create a project"**
4. Select **"Connect to Git"**
5. Choose **GitHub** as your Git provider
6. Authorize Cloudflare to access your GitHub account
7. Select your repository: `NeuralTale-Technologies-Website-with-React`

### Step 3: Configure Build Settings

In the Cloudflare Pages setup page, configure:

**Project name**: `neuraltale-technologies` (or your preferred name)

**Production branch**: `main` (or your default branch)

**Build settings**:
- **Framework preset**: `Next.js (Static HTML Export)`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: (leave empty)

**Advanced settings** (optional):
- **Node.js version**: `18` or later
- **Environment variables**: None required for basic deployment

### Step 4: Deploy

1. Click **"Save and Deploy"**
2. Cloudflare will automatically:
   - Clone your repository
   - Install dependencies with `npm install`
   - Run the build command `npm run build`
   - Deploy the contents of the `out` directory
3. Your site will be available at: `https://neuraltale-technologies.pages.dev`

---

## 🔧 Build Configuration Details

### Next.js Configuration

The project is configured for static export in `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // Enables static export
  trailingSlash: true,        // Adds trailing slashes to URLs
  images: {
    unoptimized: true,        // Required for static export
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
};
```

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",      // Builds and exports static files
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "export": "next build"     // Alias for build command
  }
}
```

---

## 🌍 Domain Setup (Optional)

### Using Custom Domain

1. **Add your domain** in Cloudflare Pages:
   - Go to your project dashboard
   - Navigate to **"Custom domains"**
   - Click **"Set up a custom domain"**
   - Enter your domain (e.g., `neuraltale.com`)

2. **Configure DNS**:
   - Add a CNAME record pointing to your Cloudflare Pages URL
   - Or use Cloudflare's nameservers for full DNS management

3. **SSL Certificate**:
   - Cloudflare automatically provides SSL certificates
   - Your site will be accessible via HTTPS

---

## 🔄 Automatic Deployments

### Git Integration

Once connected, Cloudflare Pages will automatically:

- **Deploy on every push** to your production branch
- **Create preview deployments** for pull requests
- **Show build logs** and deployment status
- **Rollback to previous versions** if needed

### Preview Deployments

- Every pull request gets its own preview URL
- Test changes before merging to production
- Share preview links with team members

---

## 📊 Performance & Analytics

### Built-in Features

Cloudflare Pages provides:

- **Global CDN** with 275+ edge locations
- **Automatic optimization** (Brotli compression, minification)
- **Real-time analytics** (page views, bandwidth, requests)
- **Core Web Vitals** monitoring
- **Bot protection** and DDoS mitigation

### Analytics Setup

1. Enable **Web Analytics** in your Cloudflare dashboard
2. Add the analytics beacon to your site (optional)
3. View detailed metrics in the Cloudflare dashboard

---

## 🛠️ Troubleshooting

### Common Issues and Solutions

**Build fails with font errors**:
- ✅ **Fixed**: The project now uses CSS font imports instead of Next.js font optimization
- Fonts load from Google Fonts during runtime, not build time

**Images not displaying**:
- ✅ **Fixed**: `images.unoptimized: true` in next.config.js
- All images work with static export

**404 errors on refresh**:
- ✅ **Fixed**: `trailingSlash: true` in next.config.js
- Proper routing for static sites

**Build takes too long**:
- Check build logs in Cloudflare Pages dashboard
- Ensure all dependencies are in `package.json`
- Consider caching optimizations

### Build Logs

Access build logs in Cloudflare Pages:
1. Go to your project dashboard
2. Click on a deployment
3. View **"Build log"** for detailed information

---

## 📈 Post-Deployment Checklist

After successful deployment:

- [ ] **Test the live site** functionality
- [ ] **Check all pages** and navigation
- [ ] **Verify responsive design** on mobile devices
- [ ] **Test contact forms** and interactive elements
- [ ] **Check performance** with PageSpeed Insights
- [ ] **Verify SEO** metadata and Open Graph tags
- [ ] **Set up monitoring** and analytics
- [ ] **Configure custom domain** (if applicable)

---

## 🎯 Production Optimization

### Performance Tips

1. **Enable Cloudflare optimizations**:
   - Auto Minify (CSS, HTML, JS)
   - Brotli compression
   - Image optimization

2. **Use Cloudflare Workers** (advanced):
   - Edge-side rendering
   - API route optimization
   - Custom caching rules

3. **Monitor Core Web Vitals**:
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)

---

## 📞 Support

### Resources

- **Cloudflare Pages Documentation**: [pages.cloudflare.com/docs](https://developers.cloudflare.com/pages/)
- **Next.js Static Export Guide**: [nextjs.org/docs/advanced-features/static-html-export](https://nextjs.org/docs/advanced-features/static-html-export)
- **Cloudflare Community**: [community.cloudflare.com](https://community.cloudflare.com/)

### Need Help?

If you encounter issues:

1. Check the **build logs** in Cloudflare Pages dashboard
2. Review the **troubleshooting section** above
3. Consult **Cloudflare Pages documentation**
4. Ask in the **Cloudflare Community** forum

---

## ✅ Summary

**For Cloudflare Pages deployment, use these settings**:

```
Build command: npm run build
Output directory: out
Framework: Next.js (Static HTML Export)
Node.js version: 18+
```

Your NeuralTale Technologies website will be deployed with:
- ⚡ Lightning-fast global CDN
- 🔒 Automatic HTTPS and security
- 🚀 Automatic deployments from Git
- 📊 Built-in analytics and monitoring
- 💰 Free hosting with generous limits

**Live URL**: Your site will be available at `https://your-project-name.pages.dev`

---

*Built with ❤️ by the NeuralTale Technologies team*