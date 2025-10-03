import codingResources from '../../data/resources/coding-with-agents.json';
import ResourceListItem from './ResourceListItem';

const CodingWithAgents = () => {
  const sortedResources = [...codingResources].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const getLinkText = (type: string) => {
    switch (type) {
      case 'video':
        return 'Watch Video';
      case 'playlist':
        return 'Watch Playlist';
      case 'podcast':
        return 'Listen to Podcast';
      case 'article':
        return 'Read Article';
      default:
        return 'View Resource';
    }
  };

  return (
    <section>
      <div className="space-y-8">
        {sortedResources.map((resource) => (
          <ResourceListItem
            key={resource.id}
            image={{
              src: '',
              alt: '',
              className: 'hidden',
            }}
            title={resource.title}
            badge={
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                {resource.type}
              </span>
            }
            description={resource.description}
            url={resource.url}
            linkText={getLinkText(resource.type)}
            metadata={
              resource.subtitle && (
                <p className="text-base font-medium text-gray-700 mb-1">
                  {resource.subtitle}
                </p>
              )
            }
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
              <span className="font-medium">{resource.source}</span>
              {resource.date && <span>{resource.date}</span>}
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
          </ResourceListItem>
        ))}
      </div>
    </section>
  );
};

export default CodingWithAgents;
