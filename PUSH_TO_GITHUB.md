# Push Code to GitHub - Authentication Required

## Authentication Options

GitHub requires authentication to push code. Choose one method:

---

## Option 1: GitHub CLI (Easiest)

### Install GitHub CLI:
```bash
brew install gh
```

### Login:
```bash
gh auth login
```
- Follow the prompts
- Choose "GitHub.com"
- Choose "HTTPS" or "SSH"
- Authenticate in browser

### Then push:
```bash
cd /Users/graphclic/graphclic-website
git push -u origin main
```

---

## Option 2: Personal Access Token (Recommended)

### Step 1: Create Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `graphclic-website`
4. Select scopes: ✅ **repo** (all checkboxes under "repo")
5. Click **"Generate token"**
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Use Token to Push
```bash
cd /Users/graphclic/graphclic-website

# When prompted for username: enter your GitHub username
# When prompted for password: paste the token (not your password)
git push -u origin main
```

**Note:** Use the token as your password, not your GitHub password.

---

## Option 3: SSH Key (Best for Long-term)

### Step 1: Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
# Press Enter to accept default location
# Press Enter for no passphrase (or set one)
```

### Step 2: Add SSH Key to GitHub
```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
```

1. Go to: https://github.com/settings/keys
2. Click **"New SSH key"**
3. Title: `MacBook Pro`
4. Paste the key
5. Click **"Add SSH key"**

### Step 3: Change Remote to SSH
```bash
cd /Users/graphclic/graphclic-website
git remote set-url origin git@github.com:simmsmbuya-sys/graphclic-website.git
git push -u origin main
```

---

## Quick Fix: Use Token Now

**Fastest way right now:**

1. **Get token:** https://github.com/settings/tokens → Generate new token (classic) → Select "repo" → Generate
2. **Copy the token**
3. **Run:**
   ```bash
   cd /Users/graphclic/graphclic-website
   git push -u origin main
   ```
4. **When prompted:**
   - Username: `simmsmbuya-sys`
   - Password: **paste the token** (not your GitHub password)

---

## After Successful Push

Once code is pushed to GitHub:

1. **Go to Vercel:** https://vercel.com/new
2. **Click "Import Git Repository"**
3. **You should now see:** `simmsmbuya-sys/graphclic-website`
4. **Click on it** → **Deploy**
5. **Add domain:** Settings → Domains → Add `graphclic.com`

---

**Which method do you want to use? Personal Access Token is fastest!**
