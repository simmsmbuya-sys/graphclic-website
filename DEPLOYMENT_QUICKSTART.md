# Quick Start: Deploy GraphClic to graphclic.com

## Fastest Method: Vercel (5 minutes)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy
```bash
cd /Users/graphclic/graphclic-website
vercel
```

### 3. Add Domain in Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your project → Settings → Domains
3. Add: `graphclic.com`
4. Copy DNS records provided by Vercel

### 4. Update DNS at Your Domain Registrar
Add these DNS records (replace with Vercel's actual values):

**A Record (Root Domain):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

**CNAME Record (WWW):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

### 5. Wait for DNS Propagation
- Usually takes 5-60 minutes
- Check status: https://www.whatsmydns.net/#A/graphclic.com

### 6. SSL Certificate
- Vercel automatically provisions SSL
- HTTPS will be active once DNS propagates

## That's it! 🎉

Your site will be live at: **https://graphclic.com**

---

## Alternative: Deploy via GitHub

1. Push code to GitHub repository
2. Import repository in Vercel
3. Add domain in Vercel dashboard
4. Configure DNS as above

---

## Need Help?

See `DOMAIN_SETUP.md` for detailed instructions and troubleshooting.
