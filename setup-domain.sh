#!/bin/bash

# GraphClic Domain Setup Script
# This script helps set up environment variables for domain configuration

echo "🚀 GraphClic Domain Setup"
echo "========================="
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "Creating .env.local file..."
    cat > .env.local << 'EOF'
# Domain Configuration
NEXT_PUBLIC_SITE_URL=https://graphclic.com
NEXT_PUBLIC_DOMAIN=graphclic.com

# Production Environment
NODE_ENV=production
EOF
    echo "✅ Created .env.local"
else
    echo "⚠️  .env.local already exists, skipping..."
fi

# Create .env.production if it doesn't exist
if [ ! -f .env.production ]; then
    echo "Creating .env.production file..."
    cat > .env.production << 'EOF'
# Production Domain Configuration
NEXT_PUBLIC_SITE_URL=https://graphclic.com
NEXT_PUBLIC_DOMAIN=graphclic.com
NODE_ENV=production
EOF
    echo "✅ Created .env.production"
else
    echo "⚠️  .env.production already exists, skipping..."
fi

echo ""
echo "✅ Domain configuration complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Review DOMAIN_SETUP.md for detailed deployment instructions"
echo "2. Deploy to Vercel: vercel"
echo "3. Add domain in Vercel dashboard"
echo "4. Update DNS records at your domain registrar"
echo ""
echo "🌐 Your domain: graphclic.com"
echo ""
