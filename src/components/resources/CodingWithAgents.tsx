import { useEffect, useState } from 'react';
import codingResources from '../../data/resources/coding-with-agents.json';
import {
  listSeries,
  loadMarkdown,
  parseFrontmatter,
  resolveSummaryRef,
  type SummaryRef,
} from '../../utils/summaries';
import { EpisodeList } from './EpisodeList';
import MarkdownRenderer from './MarkdownRenderer';
import ResourceListItem from './ResourceListItem';
import { SummaryModal } from './SummaryModal';

type Resource = {
  id: number;
  title: string;
  subtitle?: string;
  url: string;
  description: string;
  type: string;
  source: string;
  date: string;
  duration?: string;
  tags?: string[];
};

const CodingWithAgents = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  );
  const [summaryContent, setSummaryContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summaryRef, setSummaryRef] = useState<SummaryRef | null>(null);
  const [episodes, setEpisodes] = useState<
    Array<{ path: string; episode: number; title: string }>
  >([]);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const handleOpenSummary = async (resource: Resource) => {
    setSelectedResource(resource);
    setModalOpen(true);
    setIsLoading(true);
    setError(null);

    try {
      const ref = await resolveSummaryRef(resource.id);
      setSummaryRef(ref);

      if (!ref) {
        setError('No summary available for this resource.');
        setIsLoading(false);
        return;
      }

      if (ref.kind === 'single') {
        const markdown = await loadMarkdown(ref.singlePath);
        const { content } = parseFrontmatter(markdown);
        setSummaryContent(content);
      } else if (ref.kind === 'series') {
        const episodeList = await listSeries('coding-with-agents');
        setEpisodes(episodeList);

        if (episodeList.length > 0) {
          const firstEpisode = episodeList[0];
          setSelectedEpisode(firstEpisode.episode);
          const markdown = await loadMarkdown(firstEpisode.path);
          const { content } = parseFrontmatter(markdown);
          setSummaryContent(content);
        }
      }
    } catch (err) {
      setError(
        `Failed to load summary: ${err instanceof Error ? err.message : 'Unknown error'}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectEpisode = async (episodeNumber: number, path: string) => {
    setSelectedEpisode(episodeNumber);
    setIsLoading(true);

    try {
      const markdown = await loadMarkdown(path);
      const { content } = parseFrontmatter(markdown);
      setSummaryContent(content);
    } catch (err) {
      setError(
        `Failed to load episode: ${err instanceof Error ? err.message : 'Unknown error'}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSummary = () => {
    setModalOpen(false);
    setSelectedResource(null);
    setSummaryContent('');
    setEpisodes([]);
    setSelectedEpisode(null);
    setSummaryRef(null);
    setError(null);
  };

  const [summaryAvailability, setSummaryAvailability] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    const checkSummaries = async () => {
      const availability: Record<number, boolean> = {};
      for (const resource of sortedResources) {
        const ref = await resolveSummaryRef(resource.id);
        availability[resource.id] = ref !== null;
      }
      setSummaryAvailability(availability);
    };
    checkSummaries();
  }, [sortedResources]);

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

            {summaryAvailability[resource.id] && (
              <button
                type="button"
                onClick={() => handleOpenSummary(resource)}
                className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium transition-colors mt-2"
              >
                Read {resource.type === 'playlist' ? 'Summaries' : 'Summary'}
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            )}
          </ResourceListItem>
        ))}
      </div>

      <SummaryModal
        isOpen={modalOpen}
        onClose={handleCloseSummary}
        title={selectedResource?.title || ''}
      >
        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
          </div>
        ) : error ? (
          <div className="text-red-600 p-4 bg-red-50 rounded-lg">{error}</div>
        ) : summaryRef?.kind === 'series' && episodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <EpisodeList
                episodes={episodes}
                selectedEpisode={selectedEpisode}
                onSelectEpisode={handleSelectEpisode}
              />
            </div>
            <div className="md:col-span-3">
              <MarkdownRenderer markdown={summaryContent} />
            </div>
          </div>
        ) : (
          <MarkdownRenderer markdown={summaryContent} />
        )}
      </SummaryModal>
    </section>
  );
};

export default CodingWithAgents;
