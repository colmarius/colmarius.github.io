# Refactoring & Improvement Plan

## High Priority (Easy Wins, <1h each)

### 1. Parallelize Summary Availability Checks

**File:** [src/components/resources/CodingWithAgents.tsx](file:///Users/marius/Projects/colmarius.github.io/src/components/resources/CodingWithAgents.tsx#L148-L158)

**Issue:** Serial `for` loop blocks on each `resolveSummaryRef` call  
**Solution:** Use `Promise.all()` to check all resources concurrently

```typescript
useEffect(() => {
  let cancelled = false;
  (async () => {
    const refs = await Promise.all(sortedResources.map(r => resolveSummaryRef(r.id)));
    if (cancelled) return;
    const availability: Record<number, boolean> = {};
    sortedResources.forEach((r, i) => { availability[r.id] = refs[i] !== null; });
    setSummaryAvailability(availability);
  })();
  return () => { cancelled = true; };
}, [sortedResources]);
```

**Impact:** Significant performance improvement on initial load  
**Risk:** Low - straightforward refactor

---

### 2. Add Caching for Markdown & Summary Refs

**File:** [src/utils/summaries.ts](file:///Users/marius/Projects/colmarius.github.io/src/utils/summaries.ts)

**Issue:** Repeated file reads and scans when checking availability and opening summaries  
**Solution:** Add simple in-memory cache to dedupe work

```typescript
// Cache markdown loads
const markdownCache = new Map<string, Promise<string>>();
async function loadMarkdown(path: string): Promise<string> {
  let p = markdownCache.get(path);
  if (!p) {
    const loader = summaryFiles[path];
    if (!loader) throw new Error(`Summary not found: ${path}`);
    p = loader();
    markdownCache.set(path, p);
  }
  return await p;
}

// Cache summary ref lookups
const refCache = new Map<number, Promise<SummaryRef | null>>();
async function resolveSummaryRef(resourceId: number): Promise<SummaryRef | null> {
  let p = refCache.get(resourceId);
  if (!p) {
    p = (async () => {
      // existing implementation
    })();
    refCache.set(resourceId, p);
  }
  return await p;
}
```

**Impact:** Major performance improvement - avoids N×M file reads  
**Risk:** Low - module-scoped caches safe for static site

---

### 3. Fix Episode Scroll Behavior

**File:** [src/components/resources/EpisodeList.tsx](file:///Users/marius/Projects/colmarius.github.io/src/components/resources/EpisodeList.tsx#L27-L34)

**Issue:** Scroll only happens on mount, not when selection changes  
**Solution:** Update effect dependency

```typescript
useEffect(() => {
  if (selectedRef.current) {
    selectedRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}, [selectedEpisode]); // Add dependency
```

**Impact:** Better UX when navigating episodes via keyboard  
**Risk:** Low - may need ESLint disable comment

---

### 4. Optimize Series Scanning

**File:** [src/utils/summaries.ts](file:///Users/marius/Projects/colmarius.github.io/src/utils/summaries.ts#L109-L134)

**Issue:** `listSeries` scans all files even when seriesPrefix is known  
**Solution:** Accept optional prefix parameter and filter paths early

```typescript
async function listSeries(
  seriesName: string,
  seriesPrefix?: string
): Promise<Array<{ path: string; episode: number; title: string }>> {
  const paths = Object.keys(summaryFiles)
    .filter(p => !seriesPrefix || p.startsWith(seriesPrefix));
  // rest unchanged
}
```

Update caller in [CodingWithAgents.tsx](file:///Users/marius/Projects/colmarius.github.io/src/components/resources/CodingWithAgents.tsx#L96):

```typescript
const episodeList = await listSeries(ref.seriesName, ref.seriesPrefix);
```

**Impact:** Fewer file parses for series  
**Risk:** Low

---

### 5. Handle Collapsed Empty State

**File:** [src/components/resources/EpisodeList.tsx](file:///Users/marius/Projects/colmarius.github.io/src/components/resources/EpisodeList.tsx#L96-L98)

**Issue:** When `isCollapsed && selectedEpisode === null`, list might be empty  
**Solution:** Show placeholder or fall back to all episodes

```typescript
if (isCollapsed && selectedEpisode === null) {
  return (
    <div className="p-4 text-gray-500 text-sm">
      Select an episode
    </div>
  );
}
```

**Impact:** Better mobile UX on initial load  
**Risk:** Low

---

### 6. Remove Redundant Escape Handler

**File:** [src/components/resources/SummaryModal.tsx](file:///Users/marius/Projects/colmarius.github.io/src/components/resources/SummaryModal.tsx#L37-L79)

**Issue:** Escape key handled in both `document.addEventListener` and `onKeyDown`  
**Solution:** Keep document listener, remove redundant `onKeyDown` handler on overlay (lines 91-95)

**Impact:** Cleaner code, single source of truth  
**Risk:** None

---

### 7. Memoize MarkdownRenderer

**File:** [src/components/resources/MarkdownRenderer.tsx](file:///Users/marius/Projects/colmarius.github.io/src/components/resources/MarkdownRenderer.tsx#L10-L67)

**Issue:** Component re-renders even when markdown prop unchanged  
**Solution:** Wrap with `React.memo`

```typescript
export default React.memo(MarkdownRenderer);
```

**Impact:** Avoid unnecessary re-renders  
**Risk:** None

---

## Medium Priority (1-2h)

### 8. Decouple Keyboard Focus vs Selection

**File:** [src/components/resources/EpisodeList.tsx](file:///Users/marius/Projects/colmarius.github.io/src/components/resources/EpisodeList.tsx#L36-L78)

**Issue:** Arrow keys trigger content fetches on every press - feels laggy  
**Solution:** Track separate `focusedEpisode` state; only fetch on Enter/Space/Click

```typescript
const [focusedEpisode, setFocusedEpisode] = useState<number | null>(selectedEpisode);

const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
  // Arrow keys update focusedEpisode only
  // Enter/Space calls onSelectEpisode(focusedEpisode, path)
};
```

Update `aria-activedescendant` to reference `focusedEpisode`  
Add subtle focus style (optional)

**Impact:** Significantly better UX for keyboard users, no unnecessary fetches  
**Risk:** Low - requires careful state management

---

## Low Priority / Future

### 9. HeadlessUI Disclosure

**When:** Need better a11y guarantees  
**Current:** Custom CollapsibleButton works fine  
**Trade-off:** Adds dependency but improves accessibility out-of-the-box

---

### 10. Virtualize Long Episode Lists

**When:** Episode counts exceed ~100 items  
**Solution:** Use `react-virtual` or similar  
**Note:** Not needed now; revisit if content grows

---

### 11. Centralized Icon Component

**When:** Icon set grows beyond current 5-6 components  
**Solution:** Create central `Icon` component with registry pattern  
**Benefits:** Easier to manage, consistent sizing, tree-shaking

---

### 12. Generic Breakpoint Hook

**When:** More breakpoints needed (sm, lg, xl)  
**Current:** `useIsMdUp` is single-purpose and works  
**Solution:** Generic `useBreakpoint(breakpoint)` or `useBreakpoints()` hook

---

## Implementation Order

**Phase 1 (Quick wins):**

1. Add caching to summaries.ts (#2)
2. Parallelize availability checks (#1)
3. Fix episode scroll (#3)
4. Optimize series scanning (#4)
5. Handle collapsed empty state (#5)
6. Remove redundant Escape handler (#6)
7. Memoize MarkdownRenderer (#7)

**Phase 2 (Better UX):**
8. Decouple keyboard focus vs selection (#8)

**Phase 3 (As needed):**

- Items 9-12 only when requirements arise

---

## Notes

- All Phase 1 items are low-risk, targeted improvements
- Combined impact: noticeable performance boost + better UX
- Keep monitoring build times and bundle sizes as components grow
- Static site context means caching strategy is safe (no runtime invalidation needed)
