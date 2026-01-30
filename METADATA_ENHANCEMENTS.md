# Next.js Metadata Enhancements

This document outlines all the comprehensive metadata features implemented using Next.js Metadata API.

## Overview

The application now uses advanced Next.js metadata features for better SEO, social sharing, and discoverability.

## Key Enhancements

### 1. **Dynamic Keyword Generation**
- Keywords are automatically generated from:
  - Base keywords (technologies, skills)
  - Skills from skill groups
  - Technologies from work experience
  - Technologies from projects
- Ensures comprehensive keyword coverage for SEO

### 2. **Enhanced Open Graph Metadata**
- **Profile Type**: Changed from `website` to `profile` for better LinkedIn/Facebook sharing
- **Profile Fields**: Added firstName, lastName, username from LinkedIn
- **Multiple Images**: Support for both landscape (1200x630) and square (1200x1200) OG images
- **Image Types**: Properly typed images with alt text and dimensions

### 3. **Twitter Card Enhancements**
- Large image cards (`summary_large_image`)
- Creator and site handles
- Proper image URLs with alt text

### 4. **Comprehensive Structured Data (JSON-LD)**

#### Person Schema
- Complete profile information
- Address, contact details
- Skills and expertise
- Work history
- Educational credentials
- Social media profiles

#### Projects Schema
- Each project as a SoftwareApplication
- Technologies used
- Live URLs and repositories
- Proper categorization

#### Work Experience Schema
- Organization roles
- Start/end dates
- Skills per role
- Company information

#### Breadcrumb Schema
- Navigation structure
- Helps search engines understand site hierarchy

### 5. **Page-Specific Metadata Helper**
- `generatePageMetadata()` function for creating section-specific metadata
- Pre-configured metadata for:
  - Projects section
  - Experience section
  - Skills section
  - Education section
  - Contact section

### 6. **Enhanced Icons & PWA Support**
- Multiple icon sizes (favicon, SVG, PNG)
- Apple touch icons
- PWA manifest integration
- Apple splash screens for different device sizes
- Microsoft tile configuration

### 7. **Robots & Crawling**
- Comprehensive robots.txt configuration
- Google-specific bot settings
- Image and video preview settings
- Snippet length configuration

### 8. **Additional Metadata Fields**
- Application name
- Generator information
- Language alternates
- Canonical URLs
- Theme colors (light/dark mode)
- Viewport configuration
- Format detection settings
- Referrer policy

## Usage Examples

### Using Section Metadata

```typescript
import { sectionMetadata } from '@/lib/metadata'

// Use pre-configured metadata for sections
export const metadata = sectionMetadata.projects
```

### Generating Custom Page Metadata

```typescript
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  'Custom Page Title',
  'Custom page description',
  '/custom-path',
  'https://example.com/custom-og-image.png'
)
```

### Accessing Structured Data

```typescript
import { generateStructuredData } from '@/lib/metadata'

const structuredData = generateStructuredData()
// Use in JSON-LD scripts
```

## Files Modified

1. **`src/lib/metadata.ts`**
   - Enhanced base metadata
   - Added helper functions
   - Dynamic keyword generation
   - Structured data generation

2. **`app/page.tsx`**
   - Multiple JSON-LD scripts
   - Enhanced structured data
   - Breadcrumb navigation

3. **`app/layout.tsx`**
   - Uses enhanced metadata from metadata.ts

## Next Steps

1. **Create OG Images**: Generate actual Open Graph images at:
   - `/og-image.png` (1200x630)
   - `/og-image-square.png` (1200x1200)
   - `/og-projects.png`
   - `/og-experience.png`
   - `/og-skills.png`
   - `/og-education.png`
   - `/og-contact.png`

2. **Add Verification Codes**: Update `verification` object in metadata.ts with:
   - Google Search Console verification
   - Bing Webmaster Tools verification
   - Other platform verifications

3. **Create Icon Files**: Ensure these files exist in `/public`:
   - `/favicon.ico`
   - `/icon.svg`
   - `/icon-192.png`
   - `/icon-512.png`
   - `/apple-icon.png`
   - Apple splash screens

4. **Update Twitter Handle**: Replace `@utkarshgarg` with actual Twitter handle if different

5. **Add More Routes**: Create separate pages/routes for better SEO:
   - `/projects` - Dedicated projects page
   - `/experience` - Detailed experience page
   - `/about` - About page
   - Each with their own metadata

## Benefits

✅ **Better SEO**: Comprehensive keywords and structured data
✅ **Rich Social Sharing**: Enhanced Open Graph and Twitter cards
✅ **Search Engine Understanding**: Multiple structured data schemas
✅ **Mobile Optimization**: PWA support and mobile metadata
✅ **Accessibility**: Proper alt texts and descriptions
✅ **Performance**: Optimized metadata loading

## Testing

Test your metadata using:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
