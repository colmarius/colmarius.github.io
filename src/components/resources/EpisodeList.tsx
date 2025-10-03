import { type KeyboardEvent, useEffect, useRef } from 'react';

type Episode = {
  path: string;
  episode: number;
  title: string;
};

type EpisodeListProps = {
  episodes: Array<Episode>;
  selectedEpisode: number | null;
  onSelectEpisode: (episode: number, path: string) => void;
  isLoading?: boolean;
};

export const EpisodeList = ({
  episodes,
  selectedEpisode,
  onSelectEpisode,
  isLoading = false,
}: EpisodeListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (episodes.length === 0) return;

    const currentIndex = episodes.findIndex(
      (ep) => ep.episode === selectedEpisode,
    );

    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        nextIndex = Math.min(currentIndex + 1, episodes.length - 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        nextIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        nextIndex = episodes.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (currentIndex >= 0) {
          const episode = episodes[currentIndex];
          onSelectEpisode(episode.episode, episode.path);
        }
        return;
      default:
        return;
    }

    if (nextIndex !== currentIndex && nextIndex >= 0) {
      const episode = episodes[nextIndex];
      onSelectEpisode(episode.episode, episode.path);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse text-gray-500">Loading episodes...</div>
      </div>
    );
  }

  if (episodes.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-500">
        No episodes found
      </div>
    );
  }

  return (
    <div
      ref={listRef}
      role="listbox"
      aria-label="Episode list"
      aria-activedescendant={
        selectedEpisode !== null ? `episode-${selectedEpisode}` : undefined
      }
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="flex flex-col gap-1 p-2 focus:outline-none"
    >
      {episodes.map((episode) => {
        const isSelected = episode.episode === selectedEpisode;
        return (
          <button
            type="button"
            key={episode.episode}
            id={`episode-${episode.episode}`}
            ref={isSelected ? selectedRef : null}
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelectEpisode(episode.episode, episode.path)}
            className={`
							w-full rounded-lg px-4 py-3 text-left transition-colors
							focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
							${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
              }
						`}
          >
            <div className="flex items-baseline gap-3">
              <span
                className={`text-sm font-semibold ${
                  isSelected
                    ? 'text-blue-100'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Episode {episode.episode}
              </span>
              <span className="flex-1 font-medium">{episode.title}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
