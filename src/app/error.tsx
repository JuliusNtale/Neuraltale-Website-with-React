'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error occurred:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Something went wrong!</h2>
        <p className="text-gray-600 mb-8">
          An error occurred while processing your request.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
