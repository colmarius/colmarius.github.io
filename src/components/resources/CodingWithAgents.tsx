import codingResources from '../../data/coding-with-agents.json';

const CodingWithAgents = () => {
  return (
    <section>
      <div className="space-y-8">
        {codingResources.map((resource) => (
          <div
            key={resource.id}
            className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-medium text-gray-900">
                    {resource.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                  <span className="font-medium">{resource.source}</span>
                  {resource.date && <span>{resource.date}</span>}
                  {resource.duration && <span>{resource.duration}</span>}
                  {resource.tags && resource.tags.length > 0 && (
                    <div className="flex gap-2">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors w-fit"
            >
              {resource.type === 'video' && 'Watch Video'}
              {resource.type === 'podcast' && 'Listen to Podcast'}
              {resource.type === 'article' && 'Read Article'}
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
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingWithAgents;
