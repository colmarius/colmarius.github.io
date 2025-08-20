import newsletters from '../../data/newsletters.json';

const Newsletters = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-light mb-12 text-gray-900">
        Newsletters I Follow
      </h2>
      <div className="space-y-8">
        {newsletters.map((newsletter) => (
          <div
            key={newsletter.id}
            className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <img
                src={newsletter.image}
                alt={newsletter.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover bg-gray-100"
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNiAzNkg1NEwyNiA0NFYzNloiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTI2IDQ2SDU0TDI2IDU0VjQ2WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4K';
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-2 text-gray-900">
                {newsletter.name}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {newsletter.description}
              </p>
              <a
                href={newsletter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                Subscribe
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newsletters;
