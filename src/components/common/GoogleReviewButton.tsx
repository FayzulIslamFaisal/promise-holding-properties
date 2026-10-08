import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export const GOOGLE_REVIEW_URL = "https://g.page/r/CeuF_JFeh0HwECE/review";

export const GoogleIcon = ({ className = "size-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      fill="#4285F4"
    />
    <path
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      fill="#34A853"
    />
    <path
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      fill="#EA4335"
    />
  </svg>
);

interface GoogleReviewButtonProps {
  variant?: 'top-bar' | 'card' | 'compact';
  className?: string;
}

export const GoogleReviewButton: React.FC<GoogleReviewButtonProps> = ({
  variant = 'top-bar',
  className = '',
}) => {
  if (variant === 'card') {
    return (
      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700/80 hover:border-primary text-white transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-0.5 ${className}`}
        title="Leave a review on Google"
      >
        <div className="bg-white p-1.5 rounded-full flex items-center justify-center shrink-0 shadow-sm">
          <GoogleIcon className="size-4" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">
              Rate Us on Google
            </span>
            <ExternalLink className="size-3 text-gray-400 group-hover:text-primary transition-colors" />
          </div>
          <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-2.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-[10px] text-gray-400 ml-1">Leave a Review</span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-white border border-primary/40 hover:border-primary transition-all duration-300 shadow-md hover:shadow-[0_4px_15px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 group cursor-pointer ${className}`}
      title="Review us on Google"
    >
      <div className="bg-white p-1 rounded-full flex items-center justify-center shrink-0 shadow-sm">
        <GoogleIcon className="size-4" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold leading-tight text-white group-hover:text-primary transition-colors">
          Review Us on Google
        </span>
        <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-2.5 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-[10px] text-gray-300 ml-1 leading-none font-medium">5.0</span>
        </div>
      </div>
    </a>
  );
};

export default GoogleReviewButton;
