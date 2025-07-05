'use client';

import { Angry, RefreshCcw } from 'lucide-react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('App Error:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <h2 className="text-3xl text-red-600 mb-4 flex items-center gap-2"><Angry className="size-8 md:size-10"/> Oops! Something went wrong.</h2>
      <p className="text-[var(--custom-text-primary)] text-xl mb-6">
        We encountered an unexpected error. Don’t worry — it’s not you, it’s us.
      </p>
      <button
        onClick={() => reset()}
        className="bg-[var(--custom-bg-accent)] cursor-pointer text-[var(--custom-text-primary)] hover:opacity-90 transition px-5 py-2 rounded-md shadow-sm"
      >
        <span className="flex items-center gap-2  text-[var(--custom-text-secondary)]">
            <RefreshCcw className="size-5 md:size-6" />
            Try Again
        </span>
        
      </button>
    </div>
  )
}
