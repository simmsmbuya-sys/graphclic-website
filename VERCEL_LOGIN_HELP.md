# Vercel Login Help

## If Authorization Code Expires

If you see "Could not verify user code" error:

### Solution 1: Get New Code

1. **Close the browser tab** with the old code
2. **Run in Terminal:**
   ```bash
   cd /Users/graphclic/graphclic-website
   npx vercel login
   ```
3. **New code will be displayed** in Terminal
4. **Open the new URL** in browser
5. **Enter the new code** on the Vercel page
6. **Click "Allow"**

---

### Solution 2: Alternative Login Method

If device code keeps failing, try email login:

```bash
npx vercel login --github
```

Or:

```bash
npx vercel login --email
```

---

### Solution 3: Use Vercel Dashboard Instead

You can also deploy directly from the Vercel dashboard:

1. **Go to:** https://vercel.com/dashboard
2. **Select your project:** `graphclic-website`
3. **Go to "Deployments" tab**
4. **Click "Deploy"** or check for existing deployments
5. **Or use "Import"** to connect your local project

---

## After Successful Login

Once authenticated:

```bash
cd /Users/graphclic/graphclic-website
npx vercel --prod --yes
```

This will:
- ✅ Build your Next.js app
- ✅ Deploy to production
- ✅ Link `graphclic.com` automatically
- ✅ Make your site live!

---

## Troubleshooting

**"Code expired"**
- Get a new code: `npx vercel login`
- Use the new code immediately

**"Could not verify user code"**
- Make sure you're entering the exact code from Terminal
- Check for typos
- Get a fresh code

**Login keeps failing**
- Try: `npx vercel logout` then `npx vercel login`
- Or use Vercel dashboard to deploy instead

---

**Get a fresh code and try again!**
