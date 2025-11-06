# Slides Feature Implementation Plan

## Goal

Enable posts to be viewed as interactive slide presentations, accessible from the post page itself. Transform markdown content into presentation format suitable for talks and presentations.

## Context

- Posts section already implemented using Astro Content Collections
- Posts are written in markdown with frontmatter
- Need to convert existing markdown structure to slide format
- Want to keep content in single markdown file (DRY principle)
- Slides should be accessible via link on post page

## Slide Content Definition

### What is a Slide?

A slide is a discrete unit of content that fits within a presentation viewport. Each slide should:

- Contain a focused, single concept or topic
- Be visually digestible without scrolling
- Support text, code, images, and lists
- Have clear visual hierarchy

### Slide Delimiters

**Option A: H2 Headers as Slide Breaks (Recommended)**

```markdown
## Slide Title

Content for this slide...

## Next Slide Title

More content...
```

**Option B: Custom Delimiter**

```markdown
Content...

---

More content...
```

**Recommended: Option A** - Semantic, already used in posts, no special syntax needed.

### Content Length Handling

**Problem**: What if slide content is too long?

**Solutions**:

1. **Auto-split by heading level**: H2 = new slide, H3/H4 = subsections within slide
2. **Visual indicators**: Show "content too long" warning in slide mode
3. **Content guidelines**: Provide markdown authoring guidelines for slide-friendly content
4. **Manual splits**: Author controls splits with H2 headers

**Recommended Approach**: Use H2 as slide breaks, allow H3/H4 within slides. If content overflows viewport, allow vertical scrolling within slide (not ideal but acceptable for MVP).

## Architecture Options

### Option A: Reveal.js (Most Popular)

- **Pros**: Feature-rich, well-documented, themes, plugins
- **Cons**: Large bundle size (~200KB), jQuery-like API
- **License**: MIT

### Option B: Impress.js (3D Transitions)

- **Pros**: Unique 3D effects, lighter than Reveal
- **Cons**: Less maintained, steeper learning curve
- **License**: MIT

### Option C: Remark.js (Markdown-first)

- **Pros**: Built for markdown, simple, lightweight
- **Cons**: Less features, older library
- **License**: MIT

### Option D: Sli.dev (Modern, Vue-based)

- **Pros**: Modern, great DX, Vite-based, markdown-native
- **Cons**: Separate build process, harder to integrate with Astro
- **License**: MIT

### Option E: Custom Implementation (Minimal)

- **Pros**: Full control, minimal bundle, tailored to needs
- **Cons**: More work, reinventing wheel
- **License**: Own code

**Recommended: Option A (Reveal.js)** for MVP - Battle-tested, comprehensive features, good documentation. Can optimize bundle later.

## Implementation Steps

### Phase 1: Basic Slides View (MVP)

1. **Install Dependencies**
   - Add reveal.js to project
   - Configure CDN or local bundle

2. **Create Slide Layout**
   - `src/layouts/SlideLayout.astro` - Wrapper for reveal.js
   - Include reveal.js CSS and JS
   - Initialize reveal.js with basic config

3. **Create Slide Route**
   - `src/pages/posts/[slug]/slides.astro` - Slide view
   - Parse post markdown, split by H2 headers
   - Render each section as reveal.js slide

4. **Add Slide Link to Posts**
   - Update `src/layouts/PostLayout.astro`
   - Add "View as Slides" button/link
   - Style appropriately

5. **Test with Existing Posts**
   - Verify slide splitting works
   - Test navigation (arrow keys, touch)
   - Check mobile responsiveness

### Phase 2: Enhanced Features (Future)

- Speaker notes support
- Slide progress indicator
- Print to PDF support
- Custom themes matching site design
- Code syntax highlighting in slides
- Presenter mode (dual screen)
- Slide fragments (incremental reveals)

## File Structure

```text
.agents/plans/
  todo/
    slides-feature.md         # This file

src/
  layouts/
    SlideLayout.astro         # NEW: Reveal.js wrapper layout

  pages/
    posts/
      [slug]/
        slides.astro          # NEW: Slide view route

  content/
    posts/                    # EXISTING: Markdown posts
      *.md                    # Posts authored with H2 as slide breaks

  components/
    slides/                   # NEW: Slide-specific components
      SlideContent.astro      # Renders markdown as slides
      SlideControls.astro     # Navigation controls (optional)
```

## Markdown Authoring Guidelines

To ensure posts work well as slides, authors should:

1. **Use H2 headers for major sections** - Each becomes a slide
2. **Keep sections focused** - One concept per H2 section
3. **Use lists and code blocks** - They render well in slides
4. **Avoid long paragraphs** - Break into bullet points for slides
5. **Use images sparingly** - Ensure they fit slide dimensions

Example markdown structure:

```markdown
---
title: "My Post"
description: "A post that works as slides"
pubDate: 2025-11-06
---

## Introduction

Brief intro text, bullet points work best.

## Main Concept

- Point one
- Point two
- Point three

## Code Example

```js
const example = "code";
```

## Conclusion

Wrap up thoughts.

```

## Technical Implementation Details

### Slide Parsing Logic

```typescript
// Pseudo-code for splitting markdown into slides
function parseSlides(markdownContent: string) {
  const sections = markdownContent.split(/^## /gm);
  return sections.map(section => ({
    title: extractTitle(section),
    content: extractContent(section)
  }));
}
```

### Reveal.js Configuration

```javascript
Reveal.initialize({
  controls: true,
  progress: true,
  center: true,
  hash: true,
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  plugins: [ /* optional plugins */ ]
});
```

## Design Considerations

### Theme & Styling

- Match site's dark/light theme
- Use consistent typography
- Consider custom reveal.js theme
- Ensure code blocks use same syntax highlighting

### Navigation

- Arrow keys for slide navigation
- Touch/swipe on mobile
- Optional slide overview (ESC key)
- URL hash tracking for sharing specific slides

### Performance

- Lazy load reveal.js only on slide pages
- Consider CDN for reveal.js to reduce bundle
- Optimize images in slides
- Code splitting for slide route

## Dependencies

- 🔜 reveal.js (v4.x or v5.x)
- ✅ Astro v5 (installed)
- ✅ Markdown processing (Astro built-in)

## Success Criteria

- [ ] Reveal.js integrated and working
- [ ] Posts can be viewed as slides at `/posts/[slug]/slides`
- [ ] H2 headers correctly split content into slides
- [ ] "View as Slides" link on post pages
- [ ] Slides navigable with keyboard/touch
- [ ] Slides render code blocks with syntax highlighting
- [ ] Slides work on mobile and desktop
- [ ] Site builds without errors
- [ ] At least one existing post tested as slides

## Future Enhancements (Out of Scope)

- Slide-specific frontmatter (override theme, transitions)
- Export slides as PDF
- Speaker notes in markdown (using HTML comments)
- Presenter mode with timer
- Slide fragments for incremental reveals
- Custom transitions per slide
- Embedded videos/interactive elements
- Fullscreen image slides
- Two-column slide layouts

## Testing Strategy

- Test with existing posts
- Verify slide splitting on posts with various structures
- Test keyboard navigation (arrows, ESC, space)
- Test on mobile devices (touch/swipe)
- Verify code syntax highlighting in slides
- Test URL sharing (hash navigation)
- Build and preview production build

## Risks & Mitigations

- **Risk**: Reveal.js bundle size impacts performance
  - **Mitigation**: Use CDN, lazy load, or consider lighter alternative
- **Risk**: Not all posts format well as slides
  - **Mitigation**: Provide authoring guidelines, keep slide link optional
- **Risk**: Complex markdown (tables, nested lists) breaks in slides
  - **Mitigation**: Test thoroughly, document limitations, keep slides simple
- **Risk**: Theme doesn't match site design
  - **Mitigation**: Customize reveal.js theme, use CSS variables from main site

## Implementation Notes

### Integration with Astro

- Reveal.js needs client-side JavaScript
- Use `<script>` tag in SlideLayout.astro with `is:inline` or client directive
- May need to handle Astro's component islands for interactive elements

### Content Processing

- Use Astro's markdown processing to get HTML
- Split HTML by H2 tags or process raw markdown
- Wrap each section in `<section>` tags (reveal.js requirement)

### Frontmatter Extensions

Consider optional frontmatter for slides:

```yaml
slides:
  theme: "dark"  # Override theme
  transition: "fade"
  controls: false
```

## Questions to Resolve

- [ ] Should all posts have slides, or only posts marked with frontmatter flag?
- [ ] Use CDN or bundle reveal.js locally?
- [ ] Split markdown before or after Astro processes it?
- [ ] Support slide-specific images/assets?
- [ ] Allow HTML in markdown for custom slide layouts?

## Status

- Created: 2025-11-06
- Status: 📋 Planning
