#!/bin/bash
# Quick push script for graphclic-website

cd /Users/graphclic/graphclic-website

echo "🚀 Pushing to GitHub..."
echo ""

# Method 1: Try with stored credentials
echo "Attempting push with stored credentials..."
if git push origin main 2>&1; then
    echo "✅ Success! Deployment triggered."
    exit 0
fi

echo ""
echo "⚠️  Authentication required."
echo ""
echo "📋 Quick Options:"
echo ""
echo "Option 1: Use GitHub Token (Recommended)"
echo "  Run: GITHUB_TOKEN=your_token_here bash push_to_github.sh"
echo ""
echo "Option 2: Manual Push"
echo "  Run: git push origin main"
echo "  When prompted:"
echo "    Username: simmsmbuya-sys"
echo "    Password: [Your GitHub Personal Access Token]"
echo ""
echo "Option 3: Set up SSH (One-time setup)"
echo "  Run: bash setup_ssh.sh"
