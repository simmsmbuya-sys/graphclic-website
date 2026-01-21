# Domain Setup Guide for GraphClic Website

## Domain: graphclic.com

This guide will help you connect your GraphClic website to your domain.

## Option 1: Deploy on Vercel (Recommended for Next.js)

### Step 1: Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy your project**:
   ```bash
   cd /Users/graphclic/graphclic-website
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm project settings
   - Deploy

### Step 2: Add Custom Domain

1. **Go to Vercel Dashboard**:
   - Visit https://vercel.com/dashboard
   - Select your project

2. **Add Domain**:
   - Go to **Settings** → **Domains**
   - Click **Add Domain**
   - Enter: `graphclic.com`
   - Also add: `www.graphclic.com` (optional, for www redirect)

3. **Configure DNS Records**:
   
   Vercel will provide DNS records. Add these to your domain registrar:

   **For graphclic.com (Apex Domain)**:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www.graphclic.com (Subdomain)**:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

   **OR use Vercel's nameservers** (easier):
   ```
   Nameserver 1: ns1.vercel-dns.com
   Nameserver 2: ns2.vercel-dns.com
   ```

### Step 3: SSL Certificate

- Vercel automatically provisions SSL certificates via Let's Encrypt
- SSL will be active within minutes of DNS propagation
- Force HTTPS redirect in Vercel project settings

### Step 4: Verify Domain

1. Wait for DNS propagation (can take up to 48 hours, usually faster)
2. Check domain status in Vercel dashboard
3. Once verified, your site will be live at https://graphclic.com

---

## Option 2: Deploy on Netlify

### Step 1: Deploy to Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Login**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   cd /Users/graphclic/graphclic-website
   netlify deploy --prod
   ```

### Step 2: Add Custom Domain

1. Go to Netlify Dashboard → Site Settings → Domain Management
2. Add custom domain: `graphclic.com`
3. Follow DNS configuration instructions

---

## Option 3: Self-Hosted (VPS/Server)

### Requirements:
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache web server
- SSL certificate (Let's Encrypt recommended)

### Step 1: Build Production Version

```bash
cd /Users/graphclic/graphclic-website
npm run build
```

### Step 2: Configure Nginx

Create `/etc/nginx/sites-available/graphclic.com`:

```nginx
server {
    listen 80;
    server_name graphclic.com www.graphclic.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 3: Setup SSL with Let's Encrypt

```bash
sudo certbot --nginx -d graphclic.com -d www.graphclic.com
```

---

## DNS Configuration (Regardless of Hosting)

### If Using Your Domain Registrar's DNS:

Add these records at your domain registrar (GoDaddy, Namecheap, etc.):

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**For Netlify:**
```
Type: A
Name: @
Value: [Netlify IP from dashboard]
TTL: 3600

Type: CNAME
Name: www
Value: [Your Netlify site].netlify.app
TTL: 3600
```

---

## Post-Deployment Checklist

- [ ] Domain is accessible at https://graphclic.com
- [ ] SSL certificate is active (green padlock)
- [ ] www.graphclic.com redirects to graphclic.com (or vice versa)
- [ ] All pages load correctly
- [ ] Images and assets load properly
- [ ] Contact form works
- [ ] Sitemap accessible at https://graphclic.com/sitemap.xml
- [ ] Robots.txt accessible at https://graphclic.com/robots.txt
- [ ] Google Search Console verified
- [ ] Google Analytics configured (if using)

---

## Environment Variables

Make sure these are set in your hosting platform:

- `NEXT_PUBLIC_SITE_URL=https://graphclic.com`
- `NEXT_PUBLIC_DOMAIN=graphclic.com`
- `NODE_ENV=production`

---

## Troubleshooting

### Domain Not Resolving:
1. Check DNS propagation: https://www.whatsmydns.net/
2. Verify DNS records are correct
3. Wait up to 48 hours for full propagation

### SSL Certificate Issues:
1. Ensure DNS is fully propagated
2. Check domain verification status
3. Force SSL redirect in hosting settings

### 404 Errors:
1. Verify Next.js rewrites are configured
2. Check `next.config.js` for proper routing
3. Ensure build completed successfully

---

## Support

For Vercel-specific issues: https://vercel.com/docs
For Netlify-specific issues: https://docs.netlify.com
For Next.js deployment: https://nextjs.org/docs/deployment
