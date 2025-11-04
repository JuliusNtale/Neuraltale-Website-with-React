'use client'

import Link from 'next/link'
import { 
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa'

interface BlogPostProps {
  post: {
    id?: number
    slug?: string
    title: string
    author: string | { name: string; avatar?: string; role?: string }
    publishDate?: string
    publishedAt?: string
    readTime?: string
    readingTime?: string
    category: string
    tags: string[]
    image: string
    content: string
    excerpt?: string
    featured?: boolean
    seo?: any
  }
}

const BlogPost = ({ post }: BlogPostProps) => {
  // Handle both string and object author formats
  const authorName = typeof post.author === 'string' ? post.author : post.author.name
  const authorAvatar = typeof post.author === 'object' ? post.author.avatar : undefined
  const authorRole = typeof post.author === 'object' ? post.author.role : undefined
  
  // Handle both publishDate and publishedAt formats
  const publishDate = post.publishDate || post.publishedAt || new Date().toISOString()
  
  // Handle both readTime and readingTime formats
  const readTime = post.readTime || post.readingTime || '5 min read'

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `Check out this article: ${post.title}`

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center space-x-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <FaUser className="w-4 h-4" />
              <span>{authorName}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="w-4 h-4" />
              <span>{new Date(publishDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Share:</span>
            <div className="flex space-x-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                title={`Share "${post.title}" on Twitter`}
                aria-label={`Share this article "${post.title}" on Twitter`}
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                title={`Share "${post.title}" on Facebook`}
                aria-label={`Share this article "${post.title}" on Facebook`}
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors"
                title={`Share "${post.title}" on LinkedIn`}
                aria-label={`Share this article "${post.title}" on LinkedIn`}
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600 transition-colors"
                title={`Share "${post.title}" on WhatsApp`}
                aria-label={`Share this article "${post.title}" on WhatsApp`}
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-lg prose-blue max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-0
              prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-8 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
              prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-6
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-gray-700 prose-li:my-2
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic"
          />
        </div>
      </article>

      {/* Tags */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center space-x-3 mb-8">
            <FaTag className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 font-medium">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need Help Implementing This Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our expert team can help you deploy and configure these technologies for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get Expert Help
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/omada-vs-unifi-hotels-tanzania" className="group">
              <article className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Omada vs UniFi for Hotels in Tanzania
                </h3>
                <p className="text-gray-600 text-sm">
                  Compare TP-Link Omada and Ubiquiti UniFi for hospitality deployments.
                </p>
              </article>
            </Link>
            <Link href="/blog/sme-networking-equipment-buying-guide" className="group">
              <article className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  What SMEs Should Ask Before Buying Networking Gear
                </h3>
                <p className="text-gray-600 text-sm">
                  Essential questions for small businesses purchasing network equipment.
                </p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
