#!/bin/bash
# Script to delete extra Vercel projects
# Keep only: graphclic-website

cd /Users/graphclic/graphclic-website

echo "🗑️  Vercel Project Cleanup"
echo "========================"
echo ""
echo "This script will help you delete extra projects."
echo ""
echo "Projects to DELETE:"
echo "  • graphclic-website-gq2j"
echo "  • graphclic-website-frr3"
echo "  • graphclic-website-73mt"
echo ""
echo "Project to KEEP:"
echo "  • graphclic-website (has graphclic.com domain)"
echo ""
echo "⚠️  Note: You'll need to authenticate with Vercel first."
echo ""
read -p "Press Enter to continue or Ctrl+C to cancel..."

# Check if vercel is available
if ! command -v npx &> /dev/null; then
    echo "❌ npx not found. Please install Node.js first."
    exit 1
fi

echo ""
echo "📋 Listing current projects..."
npx vercel projects ls

echo ""
echo "To delete projects, run these commands manually:"
echo ""
echo "  npx vercel projects rm graphclic-website-gq2j"
echo "  npx vercel projects rm graphclic-website-frr3"
echo "  npx vercel projects rm graphclic-website-73mt"
echo ""
echo "Or delete them via dashboard: https://vercel.com/dashboard"
echo ""
