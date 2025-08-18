import type { Metadata } from 'next'
import BlogPost from '@/components/sections/BlogPost'

export const metadata: Metadata = {
  title: 'How to Deploy Captive Portal with M-Pesa Vouchers - Complete Step-by-Step Guide',
  description: 'Complete tutorial for creating Wi-Fi hotspot with M-Pesa voucher system in Tanzania. Includes API integration, portal setup, and monetization strategies for hotels and cafes.',
  keywords: [
    'captive portal M-Pesa vouchers',
    'Wi-Fi hotspot M-Pesa payment',
    'M-Pesa API integration tutorial',
    'hotspot monetization Tanzania',
    'captive portal setup guide',
    'Wi-Fi voucher system M-Pesa'
  ]
}

const postData = {
  title: 'How to Deploy a Captive Portal with M-Pesa Vouchers (Step-by-Step)',
  author: 'Julius Ntale',
  publishDate: '2025-01-15',
  readTime: '15 min read',
  category: 'M-Pesa Integration',
  tags: ['M-Pesa', 'Captive Portal', 'Wi-Fi Hotspot', 'Tutorial'],
  image: '/blog/captive-portal-mpesa.jpg',
  content: `
    <h1>How to Deploy a Captive Portal with M-Pesa Vouchers (Step-by-Step)</h1>
    
    <p>Creating a Wi-Fi hotspot with M-Pesa voucher integration is one of the most requested features for businesses in Tanzania. This comprehensive guide will walk you through the entire process from planning to deployment.</p>
    
    <h2>What You'll Need</h2>
    <ul>
      <li>M-Pesa Business Account (Till Number)</li>
      <li>Network router (TP-Link Omada or UniFi recommended)</li>
      <li>Captive portal software</li>
      <li>SSL certificate for secure payments</li>
      <li>Basic PHP/Python knowledge</li>
    </ul>
    
    <h2>Step 1: Setting Up M-Pesa API Integration</h2>
    <p>First, you'll need to register with Safaricom and obtain your API credentials. Contact our team at Neuraltale for assistance with the approval process.</p>
    
    <pre><code>
// Sample M-Pesa API configuration
const mpesaConfig = {
  consumerKey: 'your_consumer_key',
  consumerSecret: 'your_consumer_secret',
  environment: 'sandbox', // Use 'production' for live
  shortcode: 'your_till_number',
  passkey: 'your_passkey'
}
    </code></pre>
    
    <h2>Step 2: Creating the Captive Portal Interface</h2>
    <p>Design a user-friendly interface that clearly shows pricing options and payment instructions. Here's our recommended structure:</p>
    
    <ul>
      <li>Welcome message with business branding</li>
      <li>Clear pricing tiers (1 hour, 4 hours, 24 hours)</li>
      <li>Simple M-Pesa payment instructions</li>
      <li>Terms and conditions</li>
    </ul>
    
    <h2>Step 3: Implementing Payment Flow</h2>
    <p>The payment flow should be seamless:</p>
    <ol>
      <li>User selects data package</li>
      <li>System generates unique voucher code</li>
      <li>User pays via M-Pesa to your till number</li>
      <li>System verifies payment</li>
      <li>User enters voucher code to access internet</li>
    </ol>
    
    <h2>Step 4: Router Configuration</h2>
    <p>Configure your router to redirect all traffic to your captive portal until authentication is complete. For TP-Link Omada:</p>
    
    <ol>
      <li>Access the Omada Controller</li>
      <li>Navigate to Settings > Authentication</li>
      <li>Enable Captive Portal</li>
      <li>Set your portal URL</li>
      <li>Configure voucher authentication</li>
    </ol>
    
    <h2>Step 5: Testing and Optimization</h2>
    <p>Before going live, thoroughly test your system:</p>
    <ul>
      <li>Test payment flow with small amounts</li>
      <li>Verify voucher generation and validation</li>
      <li>Check mobile responsiveness</li>
      <li>Test timeout and reconnection features</li>
    </ul>
    
    <h2>Common Challenges and Solutions</h2>
    
    <h3>Payment Verification Delays</h3>
    <p>M-Pesa callbacks can sometimes be delayed. Implement a polling mechanism to check payment status every 30 seconds for up to 5 minutes.</p>
    
    <h3>User Experience Issues</h3>
    <p>Many users struggle with the voucher entry process. Consider implementing QR codes or SMS delivery of voucher codes.</p>
    
    <h2>Legal and Compliance Considerations</h2>
    <p>Ensure compliance with:</p>
    <ul>
      <li>Tanzania Communications Regulatory Authority (TCRA) requirements</li>
      <li>Data protection regulations</li>
      <li>M-Pesa terms of service</li>
      <li>Local business licensing requirements</li>
    </ul>
    
    <h2>Pricing Strategy</h2>
    <p>Based on our experience with 50+ deployments in Tanzania, here are recommended pricing tiers:</p>
    <ul>
      <li>1 Hour: 500 TZS</li>
      <li>4 Hours: 1,500 TZS</li>
      <li>24 Hours: 3,000 TZS</li>
      <li>Weekly: 15,000 TZS</li>
    </ul>
    
    <h2>Maintenance and Monitoring</h2>
    <p>Set up monitoring for:</p>
    <ul>
      <li>Payment success rates</li>
      <li>System uptime</li>
      <li>User complaints</li>
      <li>Revenue tracking</li>
    </ul>
    
    <h2>Need Professional Implementation?</h2>
    <p>While this guide provides a comprehensive overview, implementing a production-ready captive portal with M-Pesa integration requires technical expertise. Our team at Neuraltale Technologies has deployed similar systems for over 50 businesses across Tanzania.</p>
    
    <p>Contact us for:</p>
    <ul>
      <li>Complete system setup and configuration</li>
      <li>M-Pesa API approval assistance</li>
      <li>Custom branding and design</li>
      <li>Ongoing technical support</li>
    </ul>
  `
}

export default function CaptivePortalMpesaGuide() {
  return <BlogPost post={postData} />
}
