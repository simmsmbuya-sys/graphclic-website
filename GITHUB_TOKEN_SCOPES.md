# GitHub Personal Access Token - Required Scopes

## ❌ Current Scopes (Insufficient)

You currently have:
- ✅ `repo:status` - Access commit status
- ✅ `repo_deployment` - Access deployment status  
- ✅ `public_repo` - Access public repositories
- ✅ `repo:invite` - Access repository invitations

**Problem:** These scopes don't allow you to **push code** to repositories.

---

## ✅ Required Scope

You need the **full `repo` scope**:

**Select this:**
- ✅ **`repo`** - Full control of private repositories
  - This includes: repo:status, repo_deployment, repo:invite, and more
  - **This is what allows you to push code**

---

## How to Fix

### Step 1: Create New Token with Correct Scopes

1. **Go to:** https://github.com/settings/tokens
2. **Click:** "Generate new token" → "Generate new token (classic)"
3. **Name:** `graphclic-website`
4. **Expiration:** Choose your preference (90 days recommended)
5. **Select Scopes:**
   - ✅ **`repo`** (check the main "repo" checkbox)
     - This automatically selects all sub-scopes including:
       - repo:status
       - repo_deployment
       - repo:invite
       - repo:admin
       - And more

6. **Click:** "Generate token"
7. **Copy the token** immediately (you won't see it again!)

---

### Step 2: Use the Token

When pushing code:

```bash
cd /Users/graphclic/graphclic-website
git push origin main
```

**When prompted:**
- Username: `simmsmbuya-sys`
- Password: **Paste the new token** (not your GitHub password)

---

## Scope Comparison

| Scope | What It Allows | Can Push Code? |
|-------|---------------|----------------|
| `repo:status` | View commit status | ❌ No |
| `repo_deployment` | View deployments | ❌ No |
| `public_repo` | Access public repos only | ❌ No (if repo is private) |
| `repo:invite` | Manage invitations | ❌ No |
| **`repo`** | **Full repo access** | ✅ **Yes** |

---

## Quick Fix

1. **Generate new token** with `repo` scope checked
2. **Use that token** when pushing
3. **Delete old token** (optional, for security)

---

**The `repo` scope is essential for pushing code to your repository!**
