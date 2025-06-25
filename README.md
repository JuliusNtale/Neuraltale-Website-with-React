# HexTech Technologies Website

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

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hextech-technologies-website
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

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
npx vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the 'out' folder
```

### Docker
```bash
docker build -t hextech-website .
docker run -p 3000:3000 hextech-website
```

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

Built with ❤️ by the HexTech Technologies team
