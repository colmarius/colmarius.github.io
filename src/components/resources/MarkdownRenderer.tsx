import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type MarkdownRendererProps = {
  markdown: string;
};

export default function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  return (
    <div className="max-w-none text-gray-800 leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="text-3xl font-bold mt-8 mb-4 text-gray-900 first:mt-0"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl font-semibold mt-6 mb-3 text-gray-900"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3
              className="text-xl font-semibold mt-5 mb-2 text-gray-900"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className="my-4 leading-7" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="my-4 ml-6 list-disc space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => <li className="leading-7" {...props} />,
          a: ({ node, children, href, ...props }) => {
            const isExternal = href?.startsWith('http');
            return (
              <a
                href={href}
                {...props}
                {...(isExternal && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-medium"
              >
                {children}
                {isExternal && (
                  <svg
                    className="inline-block w-4 h-4 flex-shrink-0"
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
                )}
              </a>
            );
          },
          code: ({ node, className, ...props }) => {
            const isInline = !className || !className.includes('language-');
            return isInline ? (
              <code
                className="bg-gray-100 text-gray-900 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              />
            ) : (
              <code
                className={`block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm my-4 ${className || ''}`}
                {...props}
              />
            );
          },
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700"
              {...props}
            />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
