# DNS Setup Guide for graphclic.com

## Quick DNS Configuration

Follow these steps to connect your domain `graphclic.com` to your website.

---

## Step 1: Choose Your Hosting Platform

### If Using Vercel (Recommended):

**DNS Records to Add:**

#### A Record (Root Domain - graphclic.com)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

#### CNAME Record (WWW Subdomain - www.graphclic.com)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

**OR** Use Vercel's Nameservers (Easier Option):
```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
```

---

### If Using Netlify:

#### A Record (Root Domain)
```
Type: A
Name: @
Value: [Get from Netlify Dashboard - usually 75.2.60.5]
TTL: 3600
```

#### CNAME Record (WWW)
```
Type: CNAME
Name: www
Value: [Your-site-name].netlify.app
TTL: 3600
```

---

## Step 2: Add DNS Records at Your Domain Registrar

### Common Domain Registrars:

#### GoDaddy:
1. Log in to GoDaddy
2. Go to **My Products** → **Domains**
3. Click **DNS** next to `graphclic.com`
4. Click **Add** to add new records:
   - **A Record**: Type `A`, Name `@`, Value `76.76.21.21`, TTL `600`
   - **CNAME Record**: Type `CNAME`, Name `www`, Value `cname.vercel-dns.com`, TTL `600`
5. Click **Save**

#### Namecheap:
1. Log in to Namecheap
2. Go to **Domain List** → Click **Manage** next to `graphclic.com`
3. Go to **Advanced DNS** tab
4. Click **Add New Record**:
   - **A Record**: Host `@`, Value `76.76.21.21`, TTL `Automatic`
   - **CNAME Record**: Host `www`, Value `cname.vercel-dns.com`, TTL `Automatic`
5. Click **Save All Changes**

#### Google Domains:
1. Log in to Google Domains
2. Click on `graphclic.com`
3. Go to **DNS** section
4. Scroll to **Custom resource records**:
   - **A Record**: Name `@`, Type `A`, TTL `3600`, Data `76.76.21.21`
   - **CNAME Record**: Name `www`, Type `CNAME`, TTL `3600`, Data `cname.vercel-dns.com`
5. Click **Save**

#### Cloudflare:
1. Log in to Cloudflare
2. Select `graphclic.com`
3. Go to **DNS** → **Records**
4. Click **Add record**:
   - **A Record**: Type `A`, Name `@`, IPv4 address `76.76.21.21`, Proxy status `DNS only` (gray cloud), TTL `Auto`
   - **CNAME Record**: Type `CNAME`, Name `www`, Target `cname.vercel-dns.com`, Proxy status `DNS only`, TTL `Auto`
5. Click **Save**

#### Domain.com:
1. Log in to Domain.com
2. Go to **My Domains** → Click `graphclic.com`
3. Click **DNS & Nameservers**
4. Click **Add DNS Record**:
   - **A Record**: Host `@`, Points to `76.76.21.21`, TTL `3600`
   - **CNAME Record**: Host `www`, Points to `cname.vercel-dns.com`, TTL `3600`
5. Click **Save**

---

## Step 3: Verify DNS Records

### Check DNS Propagation:

1. **Online Tools:**
   - https://www.whatsmydns.net/#A/graphclic.com
   - https://dnschecker.org/#A/graphclic.com
   - https://mxtoolbox.com/DNSLookup.aspx

2. **Command Line:**
   ```bash
   # Check A record
   dig graphclic.com A
   
   # Check CNAME record
   dig www.graphclic.com CNAME
   
   # Or use nslookup
   nslookup graphclic.com
   ```

### Expected Results:

**For graphclic.com (A Record):**
```
Should resolve to: 76.76.21.21
```

**For www.graphclic.com (CNAME):**
```
Should resolve to: cname.vercel-dns.com
```

---

## Step 4: Configure Domain in Vercel

1. **Deploy your site** (if not already):
   ```bash
   vercel
   ```

2. **Add domain in Vercel Dashboard:**
   - Go to https://vercel.com/dashboard
   - Select your project
   - Go to **Settings** → **Domains**
   - Click **Add Domain**
   - Enter: `graphclic.com`
   - Click **Add**
   - Also add: `www.graphclic.com` (optional)

3. **Vercel will verify DNS:**
   - Status will show "Valid Configuration" once DNS propagates
   - SSL certificate will be automatically provisioned

---

## Step 5: SSL Certificate (Automatic)

- Vercel automatically provisions SSL certificates via Let's Encrypt
- SSL will be active within minutes of DNS propagation
- Force HTTPS redirect is enabled by default

---

## DNS Propagation Timeline

- **Typical**: 5-60 minutes
- **Maximum**: Up to 48 hours (rare)
- **Most common**: 15-30 minutes

---

## Troubleshooting

### DNS Not Propagating:
1. ✅ Verify DNS records are correct
2. ✅ Check for typos in values
3. ✅ Ensure TTL is set (not 0)
4. ✅ Wait at least 1 hour before troubleshooting
5. ✅ Clear DNS cache: `sudo dscacheutil -flushcache` (Mac) or `ipconfig /flushdns` (Windows)

### Domain Shows "Invalid Configuration" in Vercel:
1. ✅ Double-check DNS records match exactly
2. ✅ Ensure A record points to `76.76.21.21`
3. ✅ Ensure CNAME points to `cname.vercel-dns.com`
4. ✅ Wait for DNS propagation to complete

### SSL Certificate Not Issuing:
1. ✅ Ensure DNS is fully propagated
2. ✅ Verify domain is added in Vercel dashboard
3. ✅ Check domain status in Vercel (should show "Valid Configuration")
4. ✅ Wait 5-10 minutes after DNS propagation

---

## Complete DNS Record Summary

### For Vercel Hosting:

```
┌─────────────┬──────────┬──────────────────────┬─────────┐
│ Type        │ Name     │ Value                │ TTL     │
├─────────────┼──────────┼──────────────────────┼─────────┤
│ A           │ @        │ 76.76.21.21          │ 3600    │
│ CNAME       │ www      │ cname.vercel-dns.com │ 3600    │
└─────────────┴──────────┴──────────────────────┴─────────┘
```

---

## Quick Reference Commands

```bash
# Check if DNS is propagated
dig graphclic.com A +short

# Should return: 76.76.21.21

# Check CNAME
dig www.graphclic.com CNAME +short

# Should return: cname.vercel-dns.com
```

---

## Need Help?

- **Vercel DNS Docs**: https://vercel.com/docs/concepts/projects/domains
- **DNS Troubleshooting**: https://vercel.com/docs/concepts/projects/domains/troubleshooting
- **Contact Vercel Support**: support@vercel.com

---

## After DNS is Configured:

1. ✅ Domain resolves correctly
2. ✅ SSL certificate is active (HTTPS)
3. ✅ Site loads at https://graphclic.com
4. ✅ www.graphclic.com redirects (if configured)
5. ✅ All pages accessible
6. ✅ Images and assets load correctly

**Your site will be live! 🎉**
