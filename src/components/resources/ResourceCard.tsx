const NewsletterIcon = () => (
  <svg
    className="w-20 h-20"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="12"
      y="17"
      width="56"
      height="48"
      rx="4"
      className="fill-indigo-100 stroke-indigo-600"
      strokeWidth="2.5"
    />
    <path
      d="M12 23 L40 47 L68 23"
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
      d="M13 21 C13 21, 24 16, 40 16 C56 16, 67 21, 67 21 L67 62 C67 62, 56 57, 40 57 C24 57, 13 62, 13 62 Z"
      className="fill-purple-100 stroke-purple-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40 16 L40 57"
      className="stroke-purple-600"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 29 L35 29 M24 36 L35 36 M24 43 L35 43"
      className="stroke-purple-400"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M45 29 L56 29 M45 36 L56 36 M45 43 L56 43"
      className="stroke-purple-400"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const AgentIcon = () => (
  <svg
    className="w-20 h-20"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="13"
      y="20"
      width="54"
      height="42"
      rx="6"
      className="fill-sky-100 stroke-sky-600"
      strokeWidth="2.5"
    />
    <path
      d="M27 37 L35 41 L27 45"
      className="stroke-sky-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="42"
      y1="46"
      x2="54"
      y2="46"
      className="stroke-sky-400"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="29" cy="31" r="2" className="fill-sky-500" />
    <circle cx="51" cy="31" r="2" className="fill-sky-500" />
    <path
      d="M40 20 L40 14 M35 14 L45 14"
      className="stroke-sky-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const iconMap = {
  newsletter: NewsletterIcon,
  book: BookIcon,
  agent: AgentIcon,
};

type IconType = 'newsletter' | 'book' | 'agent';

type Props = {
  href: string;
  title: string;
  description: string;
  count?: number;
  iconType: IconType;
  external?: boolean;
};

export default function ResourceCard({
  href,
  title,
  description,
  count,
  iconType,
  external = false,
}: Props) {
  const Icon = iconMap[iconType];

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
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
