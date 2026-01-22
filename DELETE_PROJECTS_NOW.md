# Delete Extra Vercel Projects - Quick Guide

## Option 1: Via Vercel Dashboard (Easiest - Recommended)

1. Go to: https://vercel.com/dashboard
2. For each project below, click on it → Settings → Scroll down → Delete Project

**Delete these 3 projects:**
- `graphclic-website-gq2j`
- `graphclic-website-frr3`  
- `graphclic-website-73mt`

**Keep this one:**
- `graphclic-website` (has graphclic.com domain)

## Option 2: Via Vercel CLI

```bash
cd /Users/graphclic/graphclic-website

# Login to Vercel (first time only)
npx vercel login

# List projects to verify
npx vercel projects ls

# Delete the 3 extra projects
npx vercel projects rm graphclic-website-gq2j
npx vercel projects rm graphclic-website-frr3
npx vercel projects rm graphclic-website-73mt

# Verify only one project remains
npx vercel projects ls
```

## Option 3: Use the Script

```bash
cd /Users/graphclic/graphclic-website
bash delete_projects.sh
```

## After Deletion

✅ Only `graphclic-website` will remain
✅ All future deployments go to this project
✅ Your `graphclic.com` domain stays connected
✅ No more confusion!
