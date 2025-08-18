# NEURALTALE Corporate Website

**Where Technology Solves**

A professional corporate website for NEURALTALE, showcasing our equipment supply, custom software development, and IT solutions services.

## 🏢 About NEURALTALE

**Founded:** 2025  
**Headquarters:** Dar es Salaam, Tanzania  
**Founder & CEO:** Julius Peter Ntale  
**Core Focus:** Equipment Supply • Software Development • IT Solutions  
**Legal Structure:** Limited Liability Company (LLC)

## 🎯 Our Mission
To deliver intelligent software, reliable equipment, and expert services that solve problems, empower people, and accelerate progress.

## 🔮 Our Vision
To redefine how businesses and communities experience technology — building a future where every challenge meets its perfect solution.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Stunning Animations**: Framer Motion with smooth transitions and micro-interactions
- **Optimized Performance**: Aggressive bundle optimization with code splitting and lazy loading
- **Lightning Fast**: Sub-2 second loading times with optimized Core Web Vitals
- **Glass Morphism**: Modern glass and neumorphic design elements
- **Responsive Design**: Mobile-first approach with perfect cross-device compatibility
- **Interactive Demos**: Live code editor components and tech demonstrations
- **Lightweight Forms**: Native validation with streamlined user experience
- **SEO Optimized**: Superior search engine optimization and accessibility

## 🎨 Design Features

- Dark theme with neon accent colors (blues, purples, pinks)
- Hexagon patterns and floating geometric elements
- Gradient animations and smooth hover effects
- Interactive testimonial carousel with smooth transitions
- Animated statistics counters
- Glass morphism contact forms
- Optimized visual elements for fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Forms**: Native HTML5 validation with custom styling
- **Fonts**: Inter (primary), JetBrains Mono (code)
- **Analytics**: Vercel Analytics
- **Optimization**: Dynamic imports, code splitting, CSS optimization
- **Performance**: Bundle analysis, lazy loading, Core Web Vitals optimization

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd neuraltale-technologies-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 3001
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types
- `npm run analyze` - Analyze bundle size with detailed breakdown

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx     # Navigation bar
│   │   └── Footer.tsx     # Footer
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Hero section with particles
│       ├── ServicesGrid.tsx # Services showcase
│       ├── TechDemo.tsx   # Interactive tech demo
│       ├── Testimonials.tsx # Client testimonials
│       ├── StatsCounter.tsx # Animated statistics
│       └── ContactForm.tsx # Contact form
├── lib/
│   └── utils.ts           # Utility functions
├── styles/
│   └── globals.css        # Global styles and animations
└── types/
    └── index.ts           # TypeScript type definitions
```

## 🎯 Key Sections

### Hero Section
- Optimized gradient background
- Smooth scroll animations
- Interactive CTA buttons
- Performance-focused hover effects
- Lightweight design elements

### Services Grid
- 8 service cards with hover effects
- Animated icons and gradients
- Tilt and scale transformations
- Color-coded categories

### Tech Demo
- Interactive code editor
- Live syntax highlighting
- Tabbed interface with smooth transitions
- Simulated code execution

### Testimonials
- Smooth carousel with optimized transitions
- Auto-advancing slides
- Star ratings and client photos
- Efficient pagination

### Stats Counter
- Animated number counting
- Optimized performance animations
- Responsive grid layout
- Interactive hover states

### Contact Form
- Glass morphism design
- Native HTML5 validation
- Smooth animations
- Success/error states
- Lightweight implementation

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  neon: {
    blue: "#00D4FF",
    purple: "#8B5FBF", 
    pink: "#FF006E",
    green: "#00F5A0",
  }
}
```

### Animations
Modify animations in `globals.css`:
```css
@keyframes pulse-neon {
  0%, 100% { box-shadow: 0 0 5px #00D4FF; }
  50% { box-shadow: 0 0 20px #00D4FF; }
}
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized typography scaling

## ⚡ Performance Optimizations

### Bundle Size Reduction
- **Before**: 317kB+ with heavy dependencies
- **After**: 254kB optimized homepage bundle
- **Removed**: 47+ unnecessary packages including particle systems and form libraries
- **Achieved**: 20%+ bundle size reduction

### Loading Speed Improvements
- **Dynamic Imports**: Non-critical components lazy loaded
- **Code Splitting**: Aggressive webpack chunking for optimal caching
- **CSS Optimization**: Vendor prefixes and performance enhancements
- **Font Optimization**: Reduced font weights from 8 to 6 total variants
- **Target**: Sub-2 second loading on desktop and mobile

### Core Web Vitals Optimization
- **LCP (Largest Contentful Paint)**: Optimized with critical CSS and dynamic imports
- **FID (First Input Delay)**: Minimized with efficient event handlers
- **CLS (Cumulative Layout Shift)**: Prevented with proper image sizing and animations
- **Next.js 14**: Leveraging latest performance features and optimizations

### Technical Improvements
- **Native Validation**: Replaced react-hook-form with lightweight HTML5 validation
- **Simplified Animations**: Removed heavy particle systems, kept smooth transitions
- **Optimized Components**: Dynamic imports for below-the-fold content
- **Webpack Configuration**: Custom chunk splitting for better caching

## ⚡ Performance

- Next.js 14 optimizations
- Image optimization
- Code splitting
- Lazy loading
- SEO optimized
- **Vercel Analytics** for performance monitoring

## 📊 Analytics

This project includes Vercel Analytics for tracking page views and performance metrics.

### Setup Vercel Analytics

The analytics are already configured in this project. When you deploy to Vercel:

1. **Analytics are automatically enabled** - No additional setup required
2. **View your analytics** in the Vercel dashboard under your project
3. **Real-time data** - See page views, unique visitors, and top pages
4. **Performance insights** - Monitor Core Web Vitals and loading times

### Manual Installation (if needed)

If you need to add analytics to a new project:

```bash
npm install @vercel/analytics
```

Then add to your layout:

```tsx
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Automatic Deployment** (Recommended):
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Vercel will automatically deploy on every push

2. **Manual Deployment**:

   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Build Settings** (if needed in Vercel dashboard):
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: Leave empty (auto-detected)
   - Install Command: `npm install`

4. **Analytics Setup**:
   - Analytics are automatically enabled on Vercel
   - View your data in the Vercel dashboard
   - No additional configuration needed

### Other Platforms

#### Netlify

```bash
npm run build
# Deploy the '.next' folder
```

#### Railway

```bash
npm run build
npm start
```

### Environment Variables

If you add environment variables, make sure to set them in your deployment platform:

- `NEXT_PUBLIC_API_URL` (if needed)
- Any other environment variables your app requires

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Three.js for 3D capabilities
- Tailwind CSS for utility-first styling
- All the amazing open-source contributors

---

Built with ❤️ by the NEURALTALE team

**Contact:**
📍 Dar es Salaam, Tanzania  
🌐 www.neuraltale.com  
✉ info@neuraltale.com  
📞 +255 700 000 000

## 🚀 Quick Start Summary

1. **Install**: `npm install`
2. **Develop**: `npm run dev`
3. **Build**: `npm run build`
4. **Analyze**: `npm run analyze` (bundle size analysis)
5. **Deploy**: Push to GitHub → Connect to Vercel → Auto-deploy
6. **Analytics**: Automatically enabled on Vercel deployment

**Performance**: 254kB homepage bundle, <2s loading time, optimized Core Web Vitals

**Live Site**: [http://localhost:3001](http://localhost:3001) (development) | Your Vercel URL (production)
