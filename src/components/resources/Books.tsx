import books from '../../data/resources/books.json';
import ResourceListItem from './ResourceListItem';

const Books = () => {
  return (
    <section>
      <h2 className="text-3xl font-light mb-12 text-gray-900">
        Recommended Books
      </h2>
      <div className="space-y-8">
        {books.map((book) => (
          <ResourceListItem
            key={book.id}
            image={{
              src: book.image,
              alt: `${book.title} by ${book.author}`,
              className:
                'w-20 h-28 md:w-24 md:h-36 rounded object-contain bg-gray-100 border border-gray-200',
              fallback:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA4MCA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAzMEg2MEwyMCA0MFYzMFoiIGZpbGw9IiM5Q0E0QUYiLz4KPHA+IDxwYXRoIGQ9Ik0yMCA0Mkg2MEwyMCA1MlY0MloiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTIwIDU0SDYwTDIwIDY0VjU0WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4K',
            }}
            title={book.title}
            description={book.description}
            url={book.url}
            linkText="Learn More"
            buttonVariant="secondary"
            metadata={
              <p className="text-gray-500 mb-2 text-sm">
                by {book.author} • {book.category}
              </p>
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Books;
