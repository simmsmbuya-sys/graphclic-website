# Complete Google Setup Guide for GraphClic

## 🎯 Step 1: Google Search Console (5 minutes)

### 1.1 Access Google Search Console
1. **Go to**: https://search.google.com/search-console
2. **Sign in** with your Google account (use the account you want to manage SEO with)
3. **Click**: "Start now" or "Add Property"

### 1.2 Add Your Property
1. **Select property type**: Choose **"URL prefix"** (easier) or **"Domain"** (more comprehensive)
2. **Enter**: `https://graphclic.com`
3. **Click**: "Continue"

### 1.3 Verify Ownership

**Option A: HTML Tag Method (Recommended - Easiest)**
1. Google will show you a meta tag like:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ789..." />
   ```
2. **Copy the `content` value** (the long string after `content=`)
3. **Tell me the code** and I'll add it to your site, OR
4. **Add it yourself** to `/app/layout.tsx`:
   ```typescript
   verification: {
     google: "PASTE_YOUR_CODE_HERE",
   },
   ```
5. **Deploy the site** (it will auto-deploy via Vercel)
6. **Click "Verify"** in Google Search Console

**Option B: DNS Method (More Permanent)**
1. Google will provide a TXT record like: `google-site-verification=ABC123XYZ789...`
2. Add this TXT record to your domain's DNS settings:
   - If using Vercel: Go to Vercel Dashboard → Your Project → Settings → Domains → DNS Records
   - If using another registrar: Go to your domain provider's DNS settings
3. Add TXT record:
   - Name: `@` or leave blank
   - Type: `TXT`
   - Value: `google-site-verification=ABC123XYZ789...`
4. Wait 24-48 hours for DNS propagation
5. Click "Verify" in Google Search Console

### 1.4 Submit Your Sitemap
1. Once verified, go to **"Sitemaps"** in the left menu
2. **Enter**: `https://graphclic.com/sitemap.xml`
3. **Click**: "Submit"
4. Wait a few minutes, then check status (should show "Success")

### 1.5 Request Indexing for Key Pages
1. Go to **"URL Inspection"** tool (search bar at top)
2. Enter each URL and click **"Request Indexing"**:
   - `https://graphclic.com`
   - `https://graphclic.com/services`
   - `https://graphclic.com/about`
   - `https://graphclic.com/our-work`
   - `https://graphclic.com/contact`

### ✅ Step 1 Checklist
- [ ] Property added to Google Search Console
- [ ] Ownership verified (HTML tag or DNS)
- [ ] Sitemap submitted successfully
- [ ] All 5 pages requested for indexing

---

## 🏢 Step 2: Google Business Profile (10 minutes)

### 2.1 Create Your Business Profile
1. **Go to**: https://business.google.com
2. **Click**: "Manage now" or "Get started"
3. **Sign in** with your Google account

### 2.2 Add Business Information

**Basic Details:**
- **Business name**: `GraphClic`
- **Category**: Search for and select **"Video Production Service"**
- **Location**: 
  - If you have a physical office: Enter full address
  - If you're service-area based: Select "I deliver goods and services to my customers"
- **Service areas**: 
  - Washington DC
  - Maryland
  - Virginia

**Contact Information:**
- **Phone number**: Your business phone (e.g., +1-202-XXX-XXXX)
- **Website**: `https://graphclic.com`
- **Email**: `team@graphclicgroup.com`

**Business Description** (Use this):
```
GraphClic is an Emmy-award winning B2B video production company serving Washington DC, Maryland, and Virginia. We specialize in corporate video marketing DMV, brand storytelling video production, SaaS product video production, customer testimonial video services, and impact-driven documentary filmmaking. With over 30 years of combined experience, our team creates cinematic content that drives business results and inspires social change.
```

**Keywords to include in description:**
- B2B video production DC
- Documentary filmmaking DMV
- Corporate video marketing DMV
- Video production Washington DC
- Business video Maryland Virginia

### 2.3 Upload Images
1. **Go to**: "Photos" section
2. **Upload all 5 hero images**:
   - `/images/hero/image1.jpg`
   - `/images/hero/image2.jpg`
   - `/images/hero/image3.jpg`
   - `/images/hero/image4.jpg`
   - `/images/hero/image5.jpg`
3. **Add logo**: Upload `/images/graphclic-logo.png`
4. **Add cover photo**: Use one of your best hero images

### 2.4 Add Services
Go to "Services" section and add:

1. **B2B Video Production**
   - Description: "Strategic video production for businesses. Corporate videos, brand storytelling, product demonstrations, and customer testimonials."

2. **Documentary Filmmaking**
   - Description: "Impact-driven documentary films. USA-Africa partnerships, social impact stories, and cultural bridge films."

3. **Corporate Video**
   - Description: "Professional corporate video production for businesses in Washington DC, Maryland, and Virginia."

4. **Customer Testimonials**
   - Description: "Video testimonials and case studies that build trust and credibility for your brand."

5. **Product Demos**
   - Description: "SaaS product video production and demonstration videos that explain complex products simply."

### 2.5 Set Business Hours
- **Monday - Friday**: 9:00 AM - 6:00 PM
- **Saturday - Sunday**: Closed (or adjust as needed)

### 2.6 Add Attributes
- ✅ Online appointments/consultations
- ✅ Service area business
- ✅ Professional video production

### 2.7 Verify Your Business
Google will send a verification code via:
- **Postcard** (most common for local businesses)
- **Phone** (if eligible)
- **Email** (if eligible)

**Important**: 
- Postcard takes 5-7 business days
- Don't edit your business info until verified
- Once verified, your business will appear in Google Maps and local search

### ✅ Step 2 Checklist
- [ ] Business profile created
- [ ] All business information added
- [ ] Description includes key SEO terms
- [ ] All 5 hero images uploaded
- [ ] Logo and cover photo added
- [ ] All 5 services listed
- [ ] Business hours set
- [ ] Verification requested

---

## 📊 Step 3: Monitor & Optimize (Ongoing)

### Weekly Tasks:
- [ ] Check Google Search Console for indexing status
- [ ] Review search performance data
- [ ] Fix any crawl errors
- [ ] Respond to Google Business Profile reviews (when you get them)
- [ ] Update business hours if they change
- [ ] Add new photos regularly

### Monthly Tasks:
- [ ] Review search queries in Search Console
- [ ] Update business description with new services
- [ ] Post updates to Google Business Profile
- [ ] Check local search rankings

---

## 🚨 Important Notes

1. **Verification Timing**:
   - Google Search Console: Instant (with HTML tag) or 24-48 hours (DNS)
   - Google Business Profile: 5-7 business days (postcard)

2. **Don't Edit Before Verification**:
   - Don't change business info in Google Business Profile until verified
   - This can delay or prevent verification

3. **Consistency is Key**:
   - Use the same business name everywhere: "GraphClic"
   - Keep NAP (Name, Address, Phone) consistent across all platforms

4. **SEO Benefits**:
   - Google Search Console helps with organic search rankings
   - Google Business Profile helps with local/map search results
   - Both together = maximum visibility

---

## 📞 Need Help?

If you need assistance:
1. **For Search Console**: Check the verification guide in `GOOGLE_SEARCH_CONSOLE_VERIFICATION.md`
2. **For Business Profile**: Google has excellent help docs at https://support.google.com/business
3. **For code changes**: Share your verification code and I'll add it to the site

---

## 🎉 After Setup

Once both are set up and verified:
- Your site will start appearing in Google search results
- Your business will show up in Google Maps
- You'll get valuable analytics data
- Local customers can find you easily
- You can manage your online presence

**Estimated Timeline:**
- Search Console: 1-3 days (after verification)
- Business Profile: 1-2 weeks (after postcard verification)
- Full SEO benefits: 2-4 weeks

Good luck! 🚀
