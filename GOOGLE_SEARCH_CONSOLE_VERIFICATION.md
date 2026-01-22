# Google Search Console Verification

## How to Add Verification Code

Once you get your Google Search Console verification code, add it to `/app/layout.tsx` in the `verification` section:

```typescript
verification: {
  google: "YOUR_VERIFICATION_CODE_HERE",
},
```

## Steps to Get Verification Code

1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Enter `graphclic.com`
4. Choose "HTML tag" verification method
5. Copy the `content` value from the meta tag
6. Paste it in the `verification.google` field above
7. Save and deploy
8. Click "Verify" in Google Search Console

## After Verification

1. Submit your sitemap: `https://graphclic.com/sitemap.xml`
2. Request indexing for key pages:
   - https://graphclic.com
   - https://graphclic.com/services
   - https://graphclic.com/about
   - https://graphclic.com/our-work
   - https://graphclic.com/contact

## Current SEO Status

✅ Sitemap.xml - Auto-generated at `/sitemap.xml`
✅ Robots.txt - Configured at `/robots.txt`
✅ Meta tags - Optimized on all pages
✅ Structured data - Schema.org LocalBusiness added
✅ Image alt tags - Descriptive alt text on all images
✅ Internal linking - Keyword-rich anchor text throughout
✅ Canonical URLs - Set on all pages
✅ Open Graph tags - Complete on all pages
✅ Twitter Cards - Configured on all pages

## Next Steps

1. Add Google verification code (see above)
2. Submit sitemap to Google Search Console
3. Request indexing for all pages
4. Monitor indexing status in Search Console
5. Check for crawl errors weekly
