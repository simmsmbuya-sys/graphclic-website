# Deploy via Vercel CLI (Easier Alternative)

Since GitHub push is having issues, deploy directly via Vercel CLI - this is actually faster!

---

## Quick Deploy Steps

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
- This will open your browser
- Click "Authorize Vercel"
- You're logged in!

### Step 3: Deploy to Production
```bash
cd /Users/graphclic/graphclic-website
vercel --prod
```

**Follow the prompts:**
- Link to existing project? **Yes**
- Which project? **graphclic-website** (select from list)
- Deploy to production? **Yes**

### Step 4: Wait for Deployment
- Build will start automatically
- Takes 1-3 minutes
- You'll see build progress in terminal

### Step 5: Verify
- Go to Vercel Dashboard → Deployments
- You should see your deployment
- Visit: https://graphclic.com

---

## Advantages of Vercel CLI

✅ **No GitHub token needed**
✅ **Faster deployment**
✅ **Direct deployment**
✅ **Real-time build logs**
✅ **Automatic domain linking**

---

## After Deployment

Once deployment completes:

1. **Check Vercel Dashboard:**
   - Go to "Deployments" tab
   - Should see successful deployment (green ✓)

2. **Verify Domain:**
   - Go to Settings → Domains
   - `graphclic.com` should show deployment name
   - Status should be "Production"

3. **Test Your Site:**
   - Visit: https://graphclic.com
   - Your site should be live!

---

## Troubleshooting

### "Command not found: vercel"
```bash
npm i -g vercel
```

### "Not logged in"
```bash
vercel login
```

### Build Fails
- Check build logs in terminal
- Common issues: missing dependencies, TypeScript errors
- Fix errors and redeploy: `vercel --prod`

---

**This is the easiest way to deploy! No GitHub token needed.**
