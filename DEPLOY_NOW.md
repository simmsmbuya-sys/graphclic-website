# Deploy GraphClic Website to Vercel

## Quick Deploy Guide

Since you don't have a project in Vercel yet, let's deploy it now!

---

## Option 1: Deploy via Vercel CLI (Fastest)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
- This will open your browser to authenticate

### Step 3: Deploy Your Project
```bash
cd /Users/graphclic/graphclic-website
vercel
```

**Follow the prompts:**
- ✅ Set up and deploy? **Yes**
- ✅ Which scope? **Select your account**
- ✅ Link to existing project? **No** (create new)
- ✅ Project name? **graphclic-website** (or press Enter)
- ✅ Directory? **./** (press Enter)
- ✅ Override settings? **No** (press Enter)

### Step 4: After Deployment
- Vercel will give you a URL like: `https://graphclic-website-xxxxx.vercel.app`
- Your project will now appear in Vercel dashboard

---

## Option 2: Deploy via GitHub (Recommended for Updates)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `graphclic-website`
3. Make it **Private** (or Public)
4. Click **Create repository**

### Step 2: Push Code to GitHub
```bash
cd /Users/graphclic/graphclic-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - GraphClic website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/graphclic-website.git

# Push
git push -u origin main
```

### Step 3: Import to Vercel
1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your `graphclic-website` repository
4. Click **Import**
5. Vercel will auto-detect Next.js settings
6. Click **Deploy**

---

## After Deployment: Add Domain

Once your project is deployed:

1. **Go to Vercel Dashboard:**
   - https://vercel.com/dashboard
   - You should now see your project

2. **Add Domain:**
   - Click on your project
   - Go to **Settings** → **Domains**
   - Click **Add Domain**
   - Enter: `graphclic.com`
   - Click **Add**

3. **Verify DNS:**
   - Vercel will check if DNS records are correct
   - Status: "Valid Configuration" (once DNS propagates)

4. **SSL Certificate:**
   - Automatically provisioned
   - Active within minutes

---

## Quick Commands Summary

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd /Users/graphclic/graphclic-website
vercel

# Follow prompts, then add domain in dashboard
```

---

## Troubleshooting

### "Command not found: vercel"
- Install: `npm i -g vercel`
- Make sure Node.js is installed: `node --version`

### "No project found"
- You need to deploy first (see steps above)
- Or import from GitHub

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`

---

## Next Steps After Deployment

1. ✅ Project deployed to Vercel
2. ✅ Add domain: `graphclic.com` in Vercel dashboard
3. ✅ Wait for DNS propagation (15-60 min)
4. ✅ SSL certificate auto-provisioned
5. ✅ Site live at https://graphclic.com

---

**Ready to deploy? Run: `vercel`**
