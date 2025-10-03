import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

type MarkdownRendererProps = {
	markdown: string;
};

export default function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
	return (
		<div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4 prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3 prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-2 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-ul:list-disc prose-ol:list-decimal prose-li:my-1">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeSanitize]}
				components={{
					a: ({ node, children, href, ...props }) => {
						const isExternal = href?.startsWith("http");
						return (
							<a
								href={href}
								{...props}
								{...(isExternal && {
									target: "_blank",
									rel: "noopener noreferrer",
								})}
								className="inline-flex items-center gap-1"
							>
								{children}
								{isExternal && (
									<svg
										className="inline-block w-4 h-4"
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
				}}
			>
				{markdown}
			</ReactMarkdown>
		</div>
	);
}
