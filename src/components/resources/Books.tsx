import books from '../../data/books.json';

const Books = () => {
  return (
    <section>
      <h2 className="text-3xl font-light mb-12 text-gray-900">
        Recommended Books
      </h2>
      <div className="space-y-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <img
                src={book.image}
                alt={`${book.title} by ${book.author}`}
                className="w-16 h-20 md:w-20 md:h-24 rounded object-cover bg-gray-100"
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA4MCA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAzMEg2MEwyMCA0MFYzMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+ID48cGF0aCBkPSJNMjAgNDJINjBMMjAgNTJWNDJaIiBmaWxsPSIjOUNBNEFGIi8+CjxwYXRoIGQ9Ik0yMCA1NEg2MEwyMCA2NFY1NFoiIGZpbGw9IiM5Q0E0QUYiLz4KPC9zdmc+Cg==';
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-1 text-gray-900">
                {book.title}
              </h3>
              <p className="text-gray-500 mb-2 text-sm">
                by {book.author} • {book.category}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {book.description}
              </p>
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
              >
                Learn More
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

export default Books;
