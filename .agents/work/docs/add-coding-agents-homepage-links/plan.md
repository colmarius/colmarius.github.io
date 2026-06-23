# Add Coding with Agents Homepage Links

## Goal

Make "Coding with Agents" content more discoverable by adding strategic links from the homepage and blog posts to the main guide and resources page.

## Current State

- Homepage has 3 sections: HelloMessage, AboutMeSummary, ReachOutMessage
- "Coding with Agents in 2025" is a comprehensive blog post but not linked from homepage
- Resources page exists at `/resources/coding-with-agents` with podcast/video summaries
- 7 blog posts about agents with no connection to resources page

## Oracle Recommendation

**Two precise touchpoints without clutter:**

1. Homepage → Main blog post (featured guide callout)
2. Agent blog posts → Resources page (conditional footer in layout)

## Scope

### In Scope

**Homepage Enhancement:**

- Add lightweight "Featured guide" section between AboutMeSummary and ReachOutMessage
- Minimal design: single-line link with subtle gray background
- Matches existing indigo link style and professional aesthetic

**Blog Post Enhancement:**

- Add conditional footer callout in post layout for posts tagged 'AI Agents'
- Links to `/resources/coding-with-agents`
- Only shows on agent-related posts (not all posts)

### Out of Scope

- Header/footer navigation (keep site minimal)
- Multiple featured guides carousel
- Heavy card designs or images
- Adding to every blog post (only agent posts)

## Implementation Plan

### Step 1: Add Featured Section to Homepage

**File:** `src/pages/index.astro`

**Change:** Between `<AboutMeSummary />` and `<ReachOutMessage />`, add:

```astro
<section class="max-w-3xl mx-auto">
  <div class="rounded-md bg-gray-50 border border-gray-200 p-4">
    <p class="font-light text-lg text-gray-800">
      <span class="text-gray-600">Featured:</span>
      <a href="/posts/coding-with-agents-2025" class="ml-2 text-indigo-700 hover:text-indigo-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2 rounded-sm">
        Coding with Agents in 2025 — A Practical Field Guide →
      </a>
    </p>
  </div>
</section>
```

**Design rationale:**

- Subtle gray background (bg-gray-50) with border
- Matches existing link styles (indigo-700)
- Compact single-line format
- Uses existing spacing utilities

### Step 2: Add Conditional Footer to Post Layout

**File to check:** Find the post layout file (likely `src/layouts/PostLayout.astro` or similar)

**Change:** Add conditional resources callout after post content:

```astro
---
const { frontmatter } = Astro.props;
const isAgentPost = (frontmatter?.tags || []).includes('AI Agents');
---

<article>
  <slot />

  {isAgentPost && (
    <div class="mt-16 border-t border-gray-200 pt-8">
      <p class="text-gray-800 font-light text-lg">
        <span class="text-gray-600">Looking for curated podcasts and videos?</span>
        <a href="/resources/coding-with-agents" class="ml-1 text-indigo-700 hover:text-indigo-500 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2 rounded-sm">
          Visit the Coding with Agents Resources hub →
        </a>
      </p>
    </div>
  )}
</article>
```

**Logic:**

- Only shows when post has 'AI Agents' tag
- Appears after main content and existing "Next/Practice Path" sections
- Same visual style as homepage callout

### Step 3: Optional Enhancement

**File:** `src/content/posts/coding-with-agents-2025.md`

In the "Resources" section at the bottom, ensure it links to the resources page:

```markdown
**Resources:**

- [Coding with Agents Resources Hub](/resources/coding-with-agents) — Curated podcasts and videos
- [Amp Manual](https://ampcode.com/manual) - Comprehensive guide
- [How I Use Amp](https://ampcode.com/how-i-use-amp) - Thorsten Ball's workflow
- [Raising an Agent](https://www.youtube.com/playlist?list=PL6zLuuRVa1_iUNbel-8MxxpqKIyesaubA) - 8-part documentary on building Amp
```

## Success Criteria

- [ ] Homepage has featured guide callout linking to main post
- [ ] Featured section matches existing design language (minimal, professional)
- [ ] All 7 agent posts show resources footer callout
- [ ] Non-agent posts (like verified-git-commits-ssh) don't show callout
- [ ] Links work correctly (/posts/coding-with-agents-2025 and /resources/coding-with-agents)
- [ ] Build succeeds with no errors
- [ ] Visual check: spacing and typography match existing style

## Files to Modify

1. `src/pages/index.astro` - Add featured section
2. Post layout file (need to identify) - Add conditional footer
3. `src/content/posts/coding-with-agents-2025.md` - Add resources hub link (optional)

## Implementation Notes

**Design principles:**

- Minimal and text-first
- Existing indigo accent color
- Subtle gray containers
- No images or heavy cards
- Maintains professional aesthetic

**Verification:**

- Check all URLs are correct
- Verify 'AI Agents' tag exists on all 7 agent posts
- Test responsive layout on mobile
- Ensure spacing doesn't break on different screen sizes

**Effort estimate:** 30-60 minutes total

- Homepage: 10 min
- Layout footer: 20-30 min (includes finding layout file)
- Testing: 10 min
- Optional enhancement: 5 min

## Research Findings ✅

1. **Post layout file:** `src/layouts/PostLayout.astro` (confirmed)
2. **Tag to use:** 'AI Agents' (all agent posts have this tag)
3. **Agent posts with 'AI Agents' tag:** 6 confirmed
   - agent-planning-workflow.md
   - agent-workflows-that-stick.md
   - amp-first-win-15-minutes.md
   - amp-power-patterns.md
   - coding-with-agents-2025.md
   - what-is-an-agent.md
   - (verified-git-commits-ssh.md does NOT have it - correct, as it's standalone)

## Alternative Approaches (Deferred)

**If resources page becomes primary destination:**

- Add to header/footer navigation
- Create dedicated "Resources" nav item

**If multiple featured guides needed:**

- Create reusable FeaturedGuide component
- Accept array of guides
- Render 1-2 compact cards

**If variant callouts needed:**

- Create MDX shortcode: `<Callout type="resources" />`
- More flexible but currently unnecessary

## Related Context

- Main post: `/posts/coding-with-agents-2025`
- Resources page: `/resources/coding-with-agents`
- All agent posts have 'AI Agents' tag in frontmatter
- Site uses Astro v5 + TailwindCSS v4

---

## Implementation Results ✅

**Completed:** All 3 steps implemented successfully

### Step 1: Homepage Featured Section ✅

- **File modified:** `src/pages/index.astro`
- **Change:** Added Featured section between AboutMeSummary and ReachOutMessage
- **Result:** Homepage now prominently features link to "Coding with Agents in 2025" field guide
- **Commit:** 769e82e

### Step 2: Conditional Footer for Agent Posts ✅

- **File modified:** `src/layouts/PostLayout.astro`
- **Changes:**
  - Added `isAgentPost` flag checking for 'AI Agents' tag
  - Added conditional resources callout after post content
- **Result:** 6 agent posts now show resources hub footer, non-agent posts don't
- **Commit:** 8c3e237

### Step 3: Resources Hub Link in Main Post ✅

- **File modified:** `src/content/posts/coding-with-agents-2025.md`
- **Change:** Added link to resources hub as first item in Resources section
- **Result:** Bidirectional linking between field guide and resources page
- **Commit:** 539d1ef

### Build Verification ✅

- Build completed successfully with no errors
- All 22 pages generated correctly
- TypeScript checks passed
- No warnings related to our changes

### Success Criteria Met ✅

- ✅ Homepage has featured guide callout linking to main post
- ✅ Featured section matches existing design language (minimal, professional)
- ✅ All 6 agent posts show resources footer callout
- ✅ Non-agent posts don't show callout (verified-git-commits-ssh)
- ✅ Links work correctly (/posts/coding-with-agents-2025 and /resources/coding-with-agents)
- ✅ Build succeeds with no errors
- ✅ Visual check: spacing and typography match existing style
