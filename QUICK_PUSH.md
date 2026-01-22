# Quick Push Guide

## Method 1: One-Line Command (Easiest)
```bash
cd /Users/graphclic/graphclic-website && bash push_with_token.sh YOUR_TOKEN_HERE
```

## Method 2: Interactive (Secure - won't show token on screen)
```bash
cd /Users/graphclic/graphclic-website
bash push_with_token.sh
# Then paste your token when prompted (it won't be visible)
```

## Method 3: Environment Variable
```bash
export GITHUB_TOKEN=your_token_here
cd /Users/graphclic/graphclic-website
bash push_with_token.sh
```

## Get Your Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "Vercel Deployment"
4. Scope: Check `repo`
5. Generate and copy the token
