import type { ReactNode } from 'react';

type Props = {
  image: {
    src: string;
    alt: string;
    className?: string;
    fallback?: string;
  };
  title: string;
  badge?: ReactNode;
  description: string;
  url?: string;
  linkText?: string;
  metadata?: ReactNode;
  children?: ReactNode;
  hideExternalLink?: boolean;
};

const ExternalLinkIcon = () => (
  <svg
    className="w-4 h-4 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export default function ResourceListItem({
  image,
  title,
  badge,
  description,
  url,
  linkText,
  metadata,
  children,
  hideExternalLink = false,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-300 transition-all duration-200 group">
      <div className="flex-shrink-0">
        <img
          src={image.src}
          alt={image.alt}
          className={image.className}
          onError={(e) => {
            if (image.fallback) {
              e.currentTarget.src = image.fallback;
            }
          }}
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          {badge}
        </div>
        {metadata}
        <p className="text-gray-600 mt-3 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">{children}</div>
        {!hideExternalLink && url && linkText && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/25 focus-visible:ring-offset-2 transition-colors mt-auto"
          >
            {linkText}
            <ExternalLinkIcon />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}
