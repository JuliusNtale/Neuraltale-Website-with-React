// Server-side resource hints for critical resources
export default function ResourceHints() {
  return (
    <>
      {/* DNS Prefetch for external domains */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://vercel.live" />
      
      {/* Preconnect to critical external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Prefetch likely next pages for faster navigation */}
      <link rel="prefetch" href="/services" />
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/contact" />
    </>
  )
}
