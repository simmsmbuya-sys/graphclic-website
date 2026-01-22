# Google Search Console Setup Guide for GraphClic

## Why Your Site Isn't Showing Up on Google

New websites typically take **2-4 weeks** to appear in Google search results. However, you can speed this up by submitting your site to Google Search Console.

## Step-by-Step Setup Instructions

### 1. Create a Google Search Console Account

1. Go to: https://search.google.com/search-console
2. Sign in with your Google account
3. Click **"Add Property"**

### 2. Add Your Website Property

**Option A: Domain Property (Recommended)**
- Select **"Domain"** property type
- Enter: `graphclic.com`
- Click **"Continue"**

**Option B: URL Prefix Property**
- Select **"URL prefix"** property type
- Enter: `https://graphclic.com`
- Click **"Continue"**

### 3. Verify Ownership

Google will ask you to verify ownership. Choose one of these methods:

#### Method 1: HTML Tag (Easiest)
1. Google will provide an HTML tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
2. Copy the verification code
3. We'll add it to your site's layout.tsx file
4. After adding, click **"Verify"** in Google Search Console

#### Method 2: HTML File Upload
1. Download the HTML verification file Google provides
2. Upload it to your `/public` folder
3. Deploy the site
4. Click **"Verify"** in Google Search Console

#### Method 3: DNS Verification (For Domain Property)
1. Add a TXT record to your domain's DNS settings
2. Google will provide the record details
3. Add it through your domain registrar (Vercel, Namecheap, etc.)
4. Wait 24-48 hours for DNS propagation
5. Click **"Verify"** in Google Search Console

### 4. Submit Your Sitemap

Once verified:

1. In Google Search Console, go to **"Sitemaps"** in the left menu
2. Enter: `https://graphclic.com/sitemap.xml`
3. Click **"Submit"**
4. Google will start crawling your site

### 5. Request Indexing (Optional but Recommended)

1. Go to **"URL Inspection"** tool in Google Search Console
2. Enter: `https://graphclic.com`
3. Click **"Request Indexing"**
4. Repeat for important pages:
   - `https://graphclic.com/services`
   - `https://graphclic.com/our-work`
   - `https://graphclic.com/about`
   - `https://graphclic.com/contact`

### 6. Check Your Site's Indexing Status

1. In Google Search Console, go to **"Coverage"**
2. Check if pages are being indexed
3. Fix any errors that appear

## Additional SEO Tips

### 1. Check if Google Can Access Your Site

Test your robots.txt:
- Visit: https://graphclic.com/robots.txt
- Should show: `Allow: /` and sitemap location

Test your sitemap:
- Visit: https://graphclic.com/sitemap.xml
- Should show all your pages

### 2. Create a Google Business Profile (If Applicable)

If you have a physical location:
1. Go to: https://www.google.com/business
2. Create a business profile for GraphClic
3. Add your address, phone, hours, etc.
4. This helps with local SEO

### 3. Build Backlinks

- Share your site on social media
- List on business directories
- Get featured in industry publications
- Partner with other businesses

### 4. Monitor Your Progress

- Check Google Search Console weekly
- Look for indexing status updates
- Monitor search performance
- Fix any crawl errors

## Expected Timeline

- **Immediate**: Site submitted to Google Search Console
- **1-3 days**: Google starts crawling your site
- **1-2 weeks**: Pages start appearing in search results
- **2-4 weeks**: Full indexing and ranking begins
- **1-3 months**: Better rankings as Google learns about your site

## Troubleshooting

### Site Still Not Showing After 4 Weeks?

1. **Check robots.txt**: Make sure it's not blocking Google
2. **Check sitemap**: Ensure it's accessible and valid
3. **Check for errors**: Look in Google Search Console Coverage report
4. **Check site speed**: Slow sites rank lower
5. **Check mobile-friendliness**: Use Google's Mobile-Friendly Test
6. **Check HTTPS**: Make sure your site uses SSL (Vercel does this automatically)

### Common Issues

- **"Discovered - currently not indexed"**: Google found your site but hasn't indexed it yet. Request indexing.
- **"Crawl errors"**: Fix broken links or server errors
- **"Mobile usability issues"**: Fix responsive design problems

## Need Help?

If you need assistance with any step, let me know and I can help you:
- Add the verification meta tag to your site
- Fix any SEO issues
- Optimize your content further
- Set up additional SEO tools

---

**Next Steps:**
1. Go to https://search.google.com/search-console
2. Add your property
3. Choose verification method
4. Submit your sitemap
5. Request indexing for key pages

Good luck! 🚀
