# NeuralTale Technologies Website

A cutting-edge, responsive Next.js 14 website showcasing modern web development with superior UI/UX design, particle animations, and interactive 3D elements.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Stunning Animations**: Framer Motion with smooth transitions and micro-interactions
- **3D Elements**: Three.js and React Three Fiber for immersive experiences
- **Particle Effects**: Interactive particle systems using tsparticles
- **Glass Morphism**: Modern glass and neumorphic design elements
- **Responsive Design**: Mobile-first approach with perfect cross-device compatibility
- **Interactive Demos**: Live code editor components and tech demonstrations
- **Advanced Forms**: React Hook Form with Zod validation
- **Performance Optimized**: Superior loading speeds and SEO optimization

## 🎨 Design Features

- Dark theme with neon accent colors (blues, purples, pinks)
- Hexagon patterns and floating geometric elements
- Gradient animations and pulsing neon effects
- Interactive testimonial carousel with 3D transforms
- Animated statistics counters
- Glass morphism contact forms
- Particle background effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Particles**: tsparticles, react-particles
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Fonts**: Inter (primary), JetBrains Mono (code)
- **Analytics**: Vercel Analytics

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
- Particle animation background
- 3D floating elements
- Gradient text animations
- Interactive CTA buttons
- Mouse follower effects

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
- 3D carousel with drag support
- Auto-advancing slides
- Star ratings and client photos
- Smooth pagination

### Stats Counter
- Animated number counting
- Floating particle effects
- Responsive grid layout
- Interactive hover states

### Contact Form
- Glass morphism design
- Real-time validation
- Smooth animations
- Success/error states

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

### Cloudflare Pages ⚡ (Recommended for Static Sites)

This project is configured for **static export** and works perfectly with **Cloudflare Pages**.

#### Quick Setup for Cloudflare Pages:

1. **Push your code to GitHub** (if not already done)

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project" → "Connect to Git"
   - Select your repository: `NeuralTale-Technologies-Website`

3. **Build Configuration**:
   ```
   Framework preset: Next.js (Static HTML Export)
   Build command: npm run build
   Build output directory: out
   ```

4. **Deploy Settings**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Deploy Command**: (leave empty - not needed for static sites)
   - **Node.js Version**: 18 or later

5. **Environment Variables** (if needed):
   - No environment variables required for basic deployment
   - Add any custom variables in the Cloudflare Pages dashboard if needed

#### Manual Build for Cloudflare Pages:

```bash
# Install dependencies
npm install

# Build for static export
npm run build

# The 'out' directory contains your static files
# Upload the contents of 'out' folder to Cloudflare Pages
```

#### Why Cloudflare Pages?
- ⚡ **Lightning fast** global CDN
- 🆓 **Free tier** with generous limits
- 🔒 **Built-in security** and DDoS protection
- 🌍 **Global edge locations** for optimal performance
- 📊 **Analytics** and performance insights
- 🚀 **Automatic deployments** from Git

---

### Vercel (Alternative Option)

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
# Deploy the 'out' folder
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

Built with ❤️ by the NeuralTale Technologies team

## 🚀 Quick Start Summary

1. **Install**: `npm install`
2. **Develop**: `npm run dev`
3. **Build**: `npm run build`
4. **Deploy**: Push to GitHub → Connect to Vercel → Auto-deploy
5. **Analytics**: Automatically enabled on Vercel deployment

**Live Site**: [http://localhost:3000](http://localhost:3000) (development) | Your Vercel URL (production)
