import books from '../../data/resources/books.json';
import ResourceListItem from './ResourceListItem';

const Books = () => {
  return (
    <div className="space-y-8">
      {books.map((book) => (
        <ResourceListItem
          key={book.id}
          image={{
            src: book.image,
            alt: `${book.title} by ${book.author}`,
            className:
              'w-20 h-28 md:w-24 md:h-36 rounded object-contain bg-gray-100 border border-gray-200',
            fallback: '/resource-placeholder.svg',
          }}
          title={book.title}
          description={book.description}
          url={book.url}
          linkText="View"
          buttonVariant="secondary"
          metadata={
            <p className="text-gray-500 text-sm">
              by {book.author} • {book.category}
            </p>
          }
        />
      ))}
    </div>
  );
};

export default Books;
