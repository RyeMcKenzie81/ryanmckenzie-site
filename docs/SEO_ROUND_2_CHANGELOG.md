# SEO Improvements — Round 2

**Date:** February 5, 2026
**Status:** Complete

---

## Summary

9 SEO tasks implemented across 5 commits, covering structured data, metadata, favicon, sitemap, analytics, and cross-linking.

---

## Commits

| Commit | Description |
|--------|-------------|
| `b54191c` | Batch 1: Structured data, metadata layouts, favicon, sitemap |
| `2e6deb8` | Batch 2: FAQ schema, breadcrumbs, cross-links for guides |
| `0916b12` | Fix: Add timezone to datePublished/dateModified in JSON-LD |
| `90cb2af` | Enable Google Analytics 4 (G-6D9HYQTPPQ) |
| `7454f59` | Remove unused GSC placeholder (verified via Cloudflare) |

---

## Task Details

### Task 1: Homepage Structured Data
**File:** `app/page.tsx`
- Added `Person` JSON-LD schema: name, jobTitle ("Co-founder of Tru Earth"), description, image (`/hero-backup.jpg`), sameAs (LinkedIn, X, YouTube), knowsAbout (Ecommerce, Customer Acquisition, Meta Advertising, etc.)
- Added `WebSite` JSON-LD schema: name, url, description, author
- Wrapped return in React fragment to inject `<script type="application/ld+json">` tags
- **Note:** Person/WebSite schemas don't appear in Google Rich Results Test but feed the Knowledge Graph

### Task 2: Newsletter Page Metadata
**New file:** `app/newsletter/layout.tsx`
- Newsletter page is `'use client'` so can't export metadata directly
- Created passthrough layout that exports Next.js `Metadata`
- Title: "Ecommerce Listicle Landing Page Blueprint"
- OG image: `/leadmagnetimage.png`
- Canonical: `https://ryanmckenzie.com/newsletter`
- Twitter card with `@ryemckenzie`

### Task 3: Media-Buying Page Metadata
**New file:** `app/media-buying/layout.tsx`
- Same passthrough layout pattern as newsletter
- Title: "Meta Media Buying Services"
- OG image: `/hero-backup.jpg`
- Canonical: `https://ryanmckenzie.com/media-buying`
- Twitter card with `@ryemckenzie`

### Task 4: GA4 + Google Search Console
**File:** `app/layout.tsx`
- Google Analytics 4 enabled with measurement ID `G-6D9HYQTPPQ`
- Script tags added to `<head>`: async gtag.js loader + config script
- Google Search Console verified via Cloudflare DNS (no meta tag needed)
- Sitemap submitted to GSC

### Task 5: FAQ Structured Data
**File:** `app/guides/automating-workflows-ecommerce/page.tsx`
- Added `FAQPage` JSON-LD with 4 Q&A pairs:
  1. "Do I need to code to use n8n?"
  2. "What if I mess up an automation?"
  3. "How do I share my n8n flow with my team?"
  4. "Can one n8n flow trigger another?"
- Injected as separate `<script type="application/ld+json">` alongside existing Article schema

### Task 6: Breadcrumb Structured Data
**Files:** All 3 guide `page.tsx` files
- Added `BreadcrumbList` JSON-LD to each guide
- 2-level hierarchy: Home > Article Title
- Schema-only (no visible UI breadcrumb) — "Back to Home" nav already exists
- Pages:
  - `automating-workflows-ecommerce` — Home > Beginner's Guide to Automating Workflows for Ecommerce
  - `claude-code-getting-started` — Home > Getting Started with Claude Code
  - `building-ai-infrastructure` — Home > Building AI Infrastructure

### Task 7: Cross-linking Between Guides
**File:** `app/guides/automating-workflows-ecommerce/page.tsx`
- Added "Related Guides" section before `</GuideLayout>` with gradient box
- Links to Part 1 (Getting Started with Claude Code)
- Angle: both about building systems for non-technical audiences

**File:** `app/guides/claude-code-getting-started/page.tsx`
- Added callout box in "What's Next" section (between Part 2 link and "Keep Building")
- Links to ecommerce automation guide
- Angle: "Want to automate without code?"

### Task 8: Favicon
**New files:** `app/icon.svg`, `app/apple-icon.png`
- SVG: "RM" text with cyan-to-pink linear gradient (`#67e8f9` → `#f9a8d4`) on dark `#0e1117` background, 6px rounded corners
- PNG: 180x180 for Apple touch icon, generated from SVG via ImageMagick
- Next.js auto-detects files in `app/` — no layout changes needed

### Task 9: Sitemap Update
**File:** `app/sitemap.ts`
- Added `/newsletter` (priority 0.7, monthly)
- Added `/media-buying` (priority 0.7, monthly)
- Sitemap now contains 6 URLs total

---

## Bug Fix: JSON-LD Date Format
**Files:** All 3 guide `page.tsx` files
- Changed `datePublished` and `dateModified` from `"2025-02-05"` to `"2025-02-05T00:00:00Z"`
- Resolved 4 non-critical warnings in Google Rich Results Test ("Invalid datetime value", "missing a timezone")

---

## Verification Results

| Page | Rich Results Test | Status |
|------|-------------------|--------|
| `/` | No items detected (expected for Person/WebSite) | Pass |
| `/guides/automating-workflows-ecommerce` | 1 valid item (Article) + FAQ + Breadcrumb | Pass |
| `/guides/claude-code-getting-started` | 1 valid item (Article) + Breadcrumb | Pass |
| `/guides/building-ai-infrastructure` | 1 valid item (Article) + Breadcrumb | Pass |
| `/sitemap.xml` | 6 URLs present | Pass |
| Favicon | RM gradient icon in browser tab | Pass |
| GA4 | Tracking active (G-6D9HYQTPPQ) | Pass |
| GSC | Verified via Cloudflare, sitemap submitted | Pass |

---

## Files Changed

### New Files (4)
- `app/newsletter/layout.tsx`
- `app/media-buying/layout.tsx`
- `app/icon.svg`
- `app/apple-icon.png`

### Modified Files (5)
- `app/page.tsx` — Person + WebSite JSON-LD
- `app/layout.tsx` — GA4 script
- `app/sitemap.ts` — 2 new URLs
- `app/guides/automating-workflows-ecommerce/page.tsx` — FAQ, breadcrumb, cross-link, date fix
- `app/guides/claude-code-getting-started/page.tsx` — Breadcrumb, cross-link, date fix
- `app/guides/building-ai-infrastructure/page.tsx` — Breadcrumb, date fix
