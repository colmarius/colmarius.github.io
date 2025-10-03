import type { ReactNode } from 'react';
import { Button } from '../ui/Button';
import { ExternalLinkIcon } from '../ui/ExternalLinkIcon';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

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
  buttonVariant?: ButtonVariant;
  metadata?: ReactNode;
  children?: ReactNode;
  hideExternalLink?: boolean;
};

export default function ResourceListItem({
  image,
  title,
  badge,
  description,
  url,
  linkText,
  buttonVariant = 'primary',
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
          <Button
            as="a"
            variant={buttonVariant}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
            {linkText}
            <ExternalLinkIcon />
            <span className="sr-only">(opens in a new tab)</span>
          </Button>
        )}
      </div>
    </div>
  );
}
