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
  url: string;
  linkText: string;
  metadata?: ReactNode;
  children?: ReactNode;
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
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          {badge}
        </div>
        {metadata}
        <p className="text-gray-600 mt-3 mb-4 leading-relaxed">{description}</p>
        {children}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          {linkText}
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}
