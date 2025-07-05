import { RotateCcw } from 'lucide-react';
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
            <h2 className="text-3xl mb-3">Oops! Page Not Found</h2>
            <p className="mb-3 pb-4 text-xl text-[var(--custom-text-primary)]">
                The page you're looking for doesn’t exist or has been moved.
            </p>
        <Link href="/"
            className="bg-[var(--custom-bg-accent)] text-[var(--custom-text-secondary)] py-2 px-6 rounded-md hover:bg-opacity-90 transition flex items-center gap-2 w-[240px] justify-center"
        >
            <RotateCcw className="size-5 md:size-6" />
             Go Back to Homepage
        </Link>
</div>

      
    </div>
  )
}

export default NotFound;

 

