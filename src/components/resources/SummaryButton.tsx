type SummaryButtonProps = {
  onClick: () => void;
  label?: string;
  controlId: string;
};

export function SummaryButton({
  onClick,
  label = 'Read summary',
  controlId,
}: SummaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      aria-controls={controlId}
      aria-expanded="false"
      className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/25 focus-visible:ring-offset-2 transition-colors cursor-pointer"
    >
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 4h8l4 4v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
      </svg>
      {label}
    </button>
  );
}
