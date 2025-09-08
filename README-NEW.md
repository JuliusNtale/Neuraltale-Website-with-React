# 🚀 NEURALTALE Corporate Website

**Where Technology Solves**

A professional, high-performance corporate website for NEURALTALE, showcasing our equipment supply, custom software development, and IT solutions services.

## 🏢 About NEURALTALE

**Founded:** 2025  
**Headquarters:** Dar es Salaam, Tanzania  
**Founder & CEO:** Julius Peter Ntale  
**Core Focus:** Equipment Supply • Software Development • IT Solutions  
**Legal Structure:** Limited Liability Company (LLC)

### 🎯 Our Mission
To deliver intelligent software, reliable equipment, and expert services that solve problems, empower people, and accelerate progress.

### 🔮 Our Vision
To redefine how businesses and communities experience technology — building a future where every challenge meets its perfect solution.

---

## 🛠️ Tech Stack

### **Core Technologies**
- **Framework:** Next.js 14.2.5 (App Router)
- **Runtime:** Node.js 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with Framer Motion
- **Icons:** Lucide React
- **Email Service:** EmailJS

### **Performance & Optimization**
- **Static Site Generation (SSG)**
- **Dynamic imports** for code splitting
- **Image optimization** with Next.js Image
- **Bundle analysis** and optimization
- **Performance monitoring**

### **Deployment Platforms**
- **Primary:** Cloudflare Pages
- **Alternative:** Vercel
- **CDN:** Cloudflare Global Network

---

## 📁 Project Structure

```
NEURALTALE-WEBSITE/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout
│   │   └── [routes]/             # Page routes
│   ├── 📂 components/            # React components
│   │   ├── sections/             # Page sections
│   │   ├── ui/                   # Reusable UI components
│   │   ├── layout/               # Layout components
│   │   └── effects/              # Animation components
│   ├── 📂 lib/                   # Utilities & configs
│   ├── 📂 hooks/                 # Custom React hooks
│   ├── 📂 types/                 # TypeScript definitions
│   └── 📂 styles/                # Global styles
├── 📂 public/                    # Static assets
└── 📂 scripts/                   # Build & optimization scripts
```

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/JuliusNtale/Neuraltale-Website-with-React.git
   cd Neuraltale-Website-with-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the website.

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
npm run optimize     # Run performance optimizations
```

---

## 📧 EmailJS Integration

### **Setup Instructions**

1. **Create EmailJS Account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Configure Email Service**
   - Service ID: `service_wtujr1c` (Gmail)
   - Email: `juliusntale30@gmail.com`

3. **Create Email Template**
   - Template ID: Set in environment variables
   - Use universal template for all form types

4. **Security**
   - Public key stored in environment variables
   - No sensitive data exposed to client
   - Rate limiting implemented

---

## 🎨 Design & Features

### **Visual Design**
- **Modern gradient backgrounds** with animated particles
- **Glass-morphism effects** and backdrop blur
- **Responsive design** for all devices
- **Dark theme** with neon accents
- **Smooth animations** with Framer Motion

### **Key Features**
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **High Performance** - Optimized loading times
- 🎭 **Interactive Animations** - Engaging user experience
- 📧 **Contact Forms** - Multiple form types with validation
- 🔍 **SEO Optimized** - Meta tags, structured data
- 🚀 **Fast Loading** - Code splitting and optimization

---

## 🚀 Deployment

### **Cloudflare Pages (Recommended)**

1. **Build Configuration:**
   ```yaml
   Build command: npm run build
   Build output directory: out
   Node.js version: 18
   ```

2. **Environment Variables:**
   - Set EmailJS credentials in Cloudflare dashboard
   - No additional environment variables needed

3. **Custom Domain:**
   - Configure DNS settings in Cloudflare
   - SSL certificate automatically provisioned

### **Vercel Deployment**

1. **Deploy with Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Or deploy via GitHub:**
   - Connect repository to Vercel
   - Set environment variables
   - Deploy automatically on push

---

## 🔧 Performance Optimization

### **Bundle Size Optimization**
- **Before:** 221 kB First Load JS
- **After:** 213 kB First Load JS
- **Improvement:** 8 kB reduction (4% improvement)

### **Optimization Techniques**
- ✅ **Removed Heavy Dependencies** (150 packages removed)
- ✅ **Dynamic Imports** for code splitting  
- ✅ **Lazy Loading** for below-the-fold content
- ✅ **Image Optimization** with Next.js Image
- ✅ **Bundle Analysis** and tree shaking
- ✅ **Static Generation** for better performance

### **Performance Monitoring**
```bash
npm run analyze     # Analyze bundle size
npm run optimize    # Run optimization scripts
```

---

## 🛡️ Security Features

### **Cookie Security**
- **SameSite=Strict** for CSRF protection
- **Secure flag** for HTTPS-only cookies
- **HttpOnly flag** where applicable
- **Path restrictions** for cookie scope

### **Content Security Policy**
- Strict CSP headers configured
- XSS protection enabled
- Frame options configured

### **Email Security**
- Environment variables for API keys
- Rate limiting for form submissions
- Input validation and sanitization

---

## 📊 Analytics & Tracking

### **Google Tag Manager Setup**
1. **Install GTM container** on all pages
2. **Configure conversion tracking**
3. **Set up Google Analytics 4**
4. **Monitor user interactions**

### **Performance Tracking**
- Core Web Vitals monitoring
- Page load time analysis
- User interaction tracking
- Error monitoring and reporting

---

## 🧪 Testing

### **Manual Testing Checklist**

#### **Contact Forms**
- ✅ Form validation works correctly
- ✅ Success/error messages display
- ✅ Email delivery confirmed
- ✅ Responsive design on all devices

#### **Performance**
- ✅ Page load times under 3 seconds
- ✅ Lighthouse scores above 90
- ✅ Mobile performance optimized
- ✅ Bundle size within limits

#### **Browser Compatibility**
- ✅ Chrome/Chromium browsers
- ✅ Firefox
- ✅ Safari
- ✅ Edge

---

## 🤝 Contributing

### **Development Workflow**
1. Create feature branch from `main`
2. Make changes and test locally
3. Run linting and type checking
4. Submit pull request with description
5. Code review and merge

### **Code Standards**
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Conventional commits

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

**NEURALTALE Technology Solutions**  
📍 Dar es Salaam, Tanzania  
📧 juliusntale30@gmail.com  
🌐 [Website](https://neuraltale.com)

For technical support or business inquiries, please use our contact form on the website or email directly.

---

**Built with ❤️ by the NEURALTALE Team**
