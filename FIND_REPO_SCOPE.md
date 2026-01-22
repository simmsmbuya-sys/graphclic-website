# How to Find "repo" Scope in GitHub Token Settings

## Step-by-Step Guide

### Step 1: Go to Token Settings
1. **Visit:** https://github.com/settings/tokens
2. **Click:** "Generate new token" → **"Generate new token (classic)"**
   - Make sure you click "classic" - that's important!

### Step 2: Find "repo" Scope

**Look for the section labeled "Select scopes"**

You'll see several categories. Look for:

**📁 "repo"** - This is a **main category** (not a sub-item)

It should be near the top of the list, and it will have a checkbox next to it.

**When you check "repo", it automatically includes:**
- ✅ repo:status
- ✅ repo_deployment  
- ✅ public_repo
- ✅ repo:invite
- ✅ And many more sub-scopes

---

## Visual Guide

```
Select scopes:

☑️ repo                    ← CHECK THIS ONE! (Main checkbox)
   ├─ repo:status
   ├─ repo_deployment
   ├─ public_repo
   └─ ... (all sub-scopes)

☐ workflow
☐ write:packages
☐ delete:packages
...
```

---

## Important Notes

1. **Look for the main "repo" checkbox** - it's a parent category
2. **Don't just check individual sub-items** - check the main "repo" box
3. **"repo" scope gives full repository access** - that's what you need to push code

---

## If You Still Can't Find It

**Alternative: Check All Sub-Scopes Under "repo"**

If you don't see a main "repo" checkbox, check these individually:
- ✅ repo:status
- ✅ repo_deployment
- ✅ public_repo (if repo is private, this won't work)
- ✅ repo:invite
- ✅ repo:admin (if available)

**But the main "repo" checkbox is what you really need!**

---

## After Selecting "repo" Scope

1. **Scroll down**
2. **Click "Generate token"**
3. **Copy the token immediately** (you won't see it again!)
4. **Use it when pushing:**
   ```bash
   git push -u origin main
   ```
   - Username: `simmsmbuya-sys`
   - Password: paste your token

---

## Still Having Trouble?

**Use GitHub CLI instead** (much easier):
```bash
brew install gh
gh auth login
git push -u origin main
```

**Or deploy via Vercel Dashboard** (no GitHub needed):
- Go to: https://vercel.com/new
- Upload your project folder
- Deploy directly

---

**Look for the main "repo" checkbox - it's a parent category, not a sub-item!**
