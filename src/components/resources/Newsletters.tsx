import newsletters from '../../data/resources/newsletters.json';
import ResourceListItem from './ResourceListItem';

const Newsletters = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-light mb-12 text-gray-900">
        Newsletters I Follow
      </h2>
      <div className="space-y-8">
        {newsletters.map((newsletter) => (
          <ResourceListItem
            key={newsletter.id}
            image={{
              src: newsletter.image,
              alt: newsletter.name,
              className:
                'w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover bg-gray-100',
              fallback:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNiAzNkg1NEwyNiA0NFYzNloiIGZpbGw9IiM5Q0E0QUYiLz4KPHBhdGggZD0iTTI2IDQ2SDU0TDI2IDU0VjQ2WiIgZmlsbD0iIzlDQTRBRiIvPgo8L3N2Zz4K',
            }}
            title={newsletter.name}
            description={newsletter.description}
            url={newsletter.url}
            linkText="Subscribe"
            buttonVariant="secondary"
          />
        ))}
      </div>
    </section>
  );
};

export default Newsletters;
