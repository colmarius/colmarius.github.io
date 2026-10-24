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
              fallback: '/resource-placeholder.svg',
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
