# Setup GitHub Repository for Vercel Deployment

## Quick Setup Guide

Since you don't have a GitHub repository yet, let's create one and push your code.

---

## Step 1: Create GitHub Repository

1. **Go to GitHub:**
   - Visit: https://github.com/new
   - Or click the "+" icon in top right → "New repository"

2. **Repository Settings:**
   - **Repository name:** `graphclic-website`
   - **Description:** "GraphClic - B2B Video Production & Documentary Films Website"
   - **Visibility:** Private (recommended) or Public
   - **DO NOT** check "Initialize with README" (we already have files)
   - Click **Create repository**

3. **Copy the repository URL:**
   - GitHub will show you a URL like: `https://github.com/YOUR_USERNAME/graphclic-website.git`
   - Copy this URL (you'll need it in Step 2)

---

## Step 2: Push Your Code to GitHub

Open Terminal and run these commands:

```bash
# Navigate to your project
cd /Users/graphclic/graphclic-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - GraphClic website"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/graphclic-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** You'll be prompted for your GitHub username and password (or personal access token).

---

## Step 3: Import to Vercel

1. **Go back to Vercel:**
   - Refresh the page: https://vercel.com/new
   - Or go to: https://vercel.com/dashboard

2. **Import Repository:**
   - Click **"Import Git Repository"**
   - You should now see `graphclic-website` in the list
   - Click on it

3. **Configure Project:**
   - **Project Name:** `graphclic-website` (or keep default)
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - Click **Deploy**

4. **Wait for Deployment:**
   - Vercel will build and deploy your site
   - This takes 1-3 minutes
   - You'll get a URL like: `https://graphclic-website-xxxxx.vercel.app`

---

## Alternative: Deploy Without GitHub (Vercel CLI)

If you prefer not to use GitHub, you can deploy directly:

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd /Users/graphclic/graphclic-website
vercel
```

Follow the prompts, and your project will be deployed.

---

## After Deployment: Add Domain

Once your project is deployed:

1. **Go to Vercel Dashboard:**
   - https://vercel.com/dashboard
   - Click on your project

2. **Add Domain:**
   - Go to **Settings** → **Domains**
   - Click **Add Domain**
   - Enter: `graphclic.com`
   - Click **Add**

3. **Verify DNS:**
   - Vercel will check your DNS records
   - Status will show "Valid Configuration" once DNS propagates

---

## Troubleshooting

### "No Git Repositories Found"
- Make sure you've created the GitHub repository first
- Check that you're logged into the correct GitHub account in Vercel
- Try refreshing the page

### Git Push Errors
- Make sure you have a GitHub account
- You may need a Personal Access Token instead of password
- Create one: https://github.com/settings/tokens

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for errors: `npm run build`

---

## Quick Commands Summary

```bash
# 1. Initialize git
cd /Users/graphclic/graphclic-website
git init
git add .
git commit -m "Initial commit"

# 2. Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/graphclic-website.git

# 3. Push to GitHub
git branch -M main
git push -u origin main

# 4. Then import in Vercel dashboard
```

---

**Ready? Create the GitHub repo first, then push your code!**
