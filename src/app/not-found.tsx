import { RotateCcw } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Fullscreen background image */}
      <Image
        src="/assets/images/not-found.png"
        alt="Page Not Found Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 z-10 dark:bg-[var(--custom-bg-primary)]/40 bg-[var(--custom-bg-accent)]/20 backdrop-blur-sm" />

      {/* Overlay content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--custom-text-white)] z-20">
          Oops! Page Not Found
        </h2>
        <p className="text-lg md:text-xl mb-6 text-[var(--custom-text-white)] z-20">
          The page you{"'"}re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-[var(--custom-bg-accent)] text-[var(--custom-text-white)] py-4 px-6 rounded-md transition flex items-center gap-2 z-20"
        >
          <RotateCcw className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
