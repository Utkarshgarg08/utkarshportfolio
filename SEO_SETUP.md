# SEO & Metadata Setup Guide

This document outlines the SEO and metadata configuration for your Next.js portfolio.

## ✅ What's Already Configured

### 1. **Metadata Configuration** (`src/lib/metadata.ts`)
- Comprehensive metadata including title, description, keywords
- Open Graph tags for social media sharing
- Twitter Card metadata
- Author and publisher information
- Theme colors for light/dark mode
- Viewport and mobile optimization settings

### 2. **Structured Data (JSON-LD)**
- Person schema with professional information
- Education and skills data
- Contact information
- Social media profiles

### 3. **SEO Files**
- `app/sitemap.ts` - Dynamic sitemap generation
- `app/robots.ts` - Robots.txt configuration
- `public/robots.txt` - Static robots.txt fallback
- `public/manifest.json` - PWA manifest

## 🔧 Configuration Needed

### 1. **Update Site URL**
Update `NEXT_PUBLIC_SITE_URL` in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 2. **Add Open Graph Image**
Create and add an Open Graph image at:
- `public/og-image.png` (1200x630px recommended)

This image will be used when sharing your portfolio on social media.

### 3. **Add Favicon & Icons**
Add the following icon files to `public/`:
- `favicon.ico` - Standard favicon
- `icon.svg` - SVG icon
- `apple-icon.png` - Apple touch icon (180x180px)
- `icon-192.png` - PWA icon (192x192px)
- `icon-512.png` - PWA icon (512x512px)

### 4. **Update Twitter Handle** (Optional)
In `src/lib/metadata.ts`, update the Twitter creator handle:
```typescript
creator: '@your-twitter-handle',
```

### 5. **Add Verification Codes** (Optional)
For Google Search Console, Bing Webmaster Tools, etc., add verification codes in `src/lib/metadata.ts`:
```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
  yahoo: 'your-yahoo-verification-code',
},
```

## 📊 SEO Best Practices Implemented

✅ Semantic HTML structure  
✅ Meta descriptions optimized  
✅ Open Graph tags for social sharing  
✅ Twitter Card support  
✅ Structured data (JSON-LD)  
✅ Mobile-responsive viewport  
✅ Robots.txt configuration  
✅ Sitemap generation  
✅ Canonical URLs  
✅ Theme color for browser UI  
✅ PWA manifest  

## 🚀 Testing Your SEO

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
4. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
5. **Google Search Console**: Submit your sitemap after deployment

## 📝 Notes

- The sitemap is automatically generated at `/sitemap.xml`
- Robots.txt is automatically generated at `/robots.txt`
- All metadata is centralized in `src/lib/metadata.ts` for easy updates
- Structured data is added to the homepage for better search engine understanding
