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
import { SummaryButton } from './SummaryButton';
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
            hideExternalLink={true}
            metadata={
              resource.subtitle && (
                <p className="text-base font-medium text-gray-700 mb-1">
                  {resource.subtitle}
                </p>
              )
            }
          >
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr_auto] md:gap-4 md:items-start w-full">
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-gray-500 flex items-center gap-x-4">
                    <span className="font-medium">{resource.source}</span>
                    {resource.date && <span>{resource.date}</span>}
                  </div>

                  {resource.tags && resource.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
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

                <div className="flex flex-wrap gap-2 md:justify-self-end md:flex-shrink-0">
                  {summaryAvailability[resource.id] && (
                    <SummaryButton
                      onClick={() => handleOpenSummary(resource)}
                      label={`Read ${resource.type === 'playlist' ? 'Summaries' : 'Summary'}`}
                      controlId={`summary-modal-${resource.id}`}
                    />
                  )}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/25 focus-visible:ring-offset-2 transition-colors"
                  >
                    {getLinkText(resource.type)}
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
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </div>
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
          <div className="flex flex-col md:flex-row gap-6 min-h-0 flex-1 overflow-hidden">
            <aside className="md:w-64 md:flex-shrink-0 md:overflow-y-auto overflow-y-auto">
              <EpisodeList
                episodes={episodes}
                selectedEpisode={selectedEpisode}
                onSelectEpisode={handleSelectEpisode}
              />
            </aside>
            <main className="flex-1 min-w-0 overflow-y-auto">
              <MarkdownRenderer markdown={summaryContent} />
            </main>
          </div>
        ) : (
          <div className="overflow-y-auto flex-1">
            <MarkdownRenderer markdown={summaryContent} />
          </div>
        )}
      </SummaryModal>
    </section>
  );
};

export default CodingWithAgents;
