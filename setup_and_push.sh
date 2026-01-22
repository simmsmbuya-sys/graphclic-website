#!/bin/bash
set -e

cd /Users/graphclic/graphclic-website

echo "🔐 GitHub Push Setup"
echo "==================="
echo ""

# Check if token is provided as argument or env var
TOKEN="${1:-$GITHUB_TOKEN}"

if [ -z "$TOKEN" ]; then
    echo "❌ GitHub token required!"
    echo ""
    echo "Usage:"
    echo "  bash setup_and_push.sh YOUR_GITHUB_TOKEN"
    echo ""
    echo "Or:"
    echo "  export GITHUB_TOKEN=your_token"
    echo "  bash setup_and_push.sh"
    echo ""
    echo "Get your token from: https://github.com/settings/tokens"
    echo "Make sure it has 'repo' scope enabled."
    exit 1
fi

echo "✅ Token provided"
echo "📤 Pushing to GitHub..."
echo ""

# Update remote with token
git remote set-url origin https://${TOKEN}@github.com/simmsmbuya-sys/graphclic-website.git

# Push
if git push origin main; then
    echo ""
    echo "✅ ✅ ✅ SUCCESS! ✅ ✅ ✅"
    echo ""
    echo "Code pushed to GitHub!"
    echo "Vercel will auto-deploy in 1-3 minutes."
    echo ""
    echo "Check deployment: https://vercel.com/dashboard"
    echo ""
    
    # Restore original URL (without token)
    git remote set-url origin https://github.com/simmsmbuya-sys/graphclic-website.git
    echo "✅ Remote URL restored (token removed for security)"
else
    echo ""
    echo "❌ Push failed!"
    git remote set-url origin https://github.com/simmsmbuya-sys/graphclic-website.git
    exit 1
fi
