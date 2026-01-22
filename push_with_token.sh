#!/bin/bash
set -e

cd /Users/graphclic/graphclic-website

echo "🔐 GitHub Push Script"
echo "===================="
echo ""

# Check for token in environment or as argument
TOKEN="${1:-$GITHUB_TOKEN}"

if [ -z "$TOKEN" ]; then
    echo "Please provide your GitHub token:"
    echo ""
    echo "Option 1: As argument:"
    echo "  bash push_with_token.sh YOUR_TOKEN"
    echo ""
    echo "Option 2: As environment variable:"
    echo "  export GITHUB_TOKEN=your_token"
    echo "  bash push_with_token.sh"
    echo ""
    echo "Option 3: I'll prompt you (secure, won't show on screen):"
    read -sp "Enter GitHub token: " TOKEN
    echo ""
fi

if [ -z "$TOKEN" ]; then
    echo "❌ Token required!"
    exit 1
fi

echo "✅ Token received"
echo "📤 Pushing to GitHub..."
echo ""

# Update remote with token
git remote set-url origin https://${TOKEN}@github.com/simmsmbuya-sys/graphclic-website.git

# Push
if git push origin main 2>&1; then
    echo ""
    echo "✅ ✅ ✅ SUCCESS! ✅ ✅ ✅"
    echo ""
    echo "Code pushed to GitHub!"
    echo "Vercel will auto-deploy in 1-3 minutes."
    echo ""
    
    # Restore original URL
    git remote set-url origin https://github.com/simmsmbuya-sys/graphclic-website.git
    echo "✅ Remote URL restored"
    echo ""
    echo "Check deployment: https://vercel.com/dashboard"
else
    echo ""
    echo "❌ Push failed!"
    git remote set-url origin https://github.com/simmsmbuya-sys/graphclic-website.git
    exit 1
fi
