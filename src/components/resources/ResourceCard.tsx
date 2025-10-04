const NewsletterIcon = () => (
  <svg
    className="w-20 h-20"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="20"
      width="60"
      height="45"
      rx="4"
      className="fill-indigo-100 stroke-indigo-600"
      strokeWidth="2.5"
    />
    <path
      d="M10 25 L40 45 L70 25"
      className="stroke-indigo-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="20"
      y1="52"
      x2="35"
      y2="52"
      className="stroke-indigo-400"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="20"
      y1="58"
      x2="45"
      y2="58"
      className="stroke-indigo-400"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BookIcon = () => (
  <svg
    className="w-20 h-20"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 20 C15 20, 25 15, 40 15 C55 15, 65 20, 65 20 L65 60 C65 60, 55 55, 40 55 C25 55, 15 60, 15 60 Z"
      className="fill-purple-100 stroke-purple-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 15 L40 55"
      className="stroke-purple-600"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M25 28 L35 28 M25 35 L35 35 M25 42 L35 42"
      className="stroke-purple-400"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M45 28 L55 28 M45 35 L55 35 M45 42 L55 42"
      className="stroke-purple-400"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CodingIcon = () => (
  <svg
    className="w-20 h-20"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="18"
      width="60"
      height="44"
      rx="4"
      className="fill-emerald-100 stroke-emerald-600"
      strokeWidth="2.5"
    />
    <circle cx="18" cy="27" r="2" className="fill-emerald-600" />
    <circle cx="26" cy="27" r="2" className="fill-emerald-600" />
    <circle cx="34" cy="27" r="2" className="fill-emerald-600" />
    <path
      d="M22 40 L28 46 L22 52"
      className="stroke-emerald-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M38 52 L32 40"
      className="stroke-emerald-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M50 40 L44 46 L50 52"
      className="stroke-emerald-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const iconMap = {
  newsletter: NewsletterIcon,
  book: BookIcon,
  coding: CodingIcon,
};

type IconType = 'newsletter' | 'book' | 'coding';

type Props = {
  href: string;
  title: string;
  description: string;
  count?: number;
  iconType: IconType;
};

export default function ResourceCard({
  href,
  title,
  description,
  count,
  iconType,
}: Props) {
  const Icon = iconMap[iconType];

  return (
    <a
      href={href}
      className="block rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-200 bg-white hover:border-gray-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-200">
          <Icon />
        </div>
        <h2 className="text-2xl font-light text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {description}
        </p>
        {typeof count === 'number' && (
          <div className="text-xs text-gray-500 font-medium">
            {count} {count === 1 ? 'item' : 'items'}
          </div>
        )}
      </div>
    </a>
  );
}
