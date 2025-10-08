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
      className="flex flex-col gap-1 p-0 focus:outline-none text-sm text-gray-600 dark:text-zinc-300"
    >
      <h3 className="sr-only">Episodes</h3>
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
							group w-full rounded-sm px-2.5 py-1.5 text-left transition-colors cursor-pointer
							bg-transparent border border-transparent
							focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-0
							${
                isSelected
                  ? 'text-gray-900 dark:text-zinc-100 bg-gray-50/60 dark:bg-zinc-800/40 border-l-2 border-l-gray-400 dark:border-l-zinc-500 pl-2'
                  : 'text-gray-600 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-zinc-200 hover:bg-gray-50/40 dark:hover:bg-zinc-800/30'
              }
						`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`shrink-0 tabular-nums text-[11px] tracking-wide ${
                  isSelected
                    ? 'text-gray-500 dark:text-zinc-300'
                    : 'text-gray-400 dark:text-zinc-500'
                }`}
              >
                Ep {episode.episode}
              </span>
              <span
                className={`flex-1 truncate text-[13px] font-normal ${
                  isSelected
                    ? 'text-gray-900 dark:text-zinc-100'
                    : 'text-gray-600 dark:text-zinc-400 group-hover:text-gray-800 dark:group-hover:text-zinc-200'
                }`}
              >
                {episode.title.replace(/\s*-\s*Episode\s+\d+$/i, '')}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
