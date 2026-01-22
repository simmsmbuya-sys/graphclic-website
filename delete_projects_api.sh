#!/bin/bash
# Delete Vercel projects via API
# Usage: VERCEL_TOKEN=your_token bash delete_projects_api.sh

set -e

cd /Users/graphclic/graphclic-website

# Check if token is provided
if [ -z "$VERCEL_TOKEN" ]; then
    echo "❌ Vercel token required!"
    echo ""
    echo "Get your token from: https://vercel.com/account/tokens"
    echo ""
    echo "Then run:"
    echo "  VERCEL_TOKEN=your_token bash delete_projects_api.sh"
    exit 1
fi

API_URL="https://api.vercel.com"
TEAM_ID="" # Leave empty for personal account

echo "🗑️  Deleting Vercel Projects..."
echo "================================"
echo ""

# Projects to delete
PROJECTS=(
    "graphclic-website-gq2j"
    "graphclic-website-frr3"
    "graphclic-website-73mt"
)

# Function to delete a project
delete_project() {
    local project_name=$1
    echo "Deleting: $project_name..."
    
    # First, get the project ID
    local response=$(curl -s -X GET \
        "$API_URL/v9/projects/$project_name" \
        -H "Authorization: Bearer $VERCEL_TOKEN" \
        -H "Content-Type: application/json")
    
    local project_id=$(echo $response | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4)
    
    if [ -z "$project_id" ]; then
        echo "  ⚠️  Project not found or already deleted: $project_name"
        return
    fi
    
    # Delete the project
    local delete_response=$(curl -s -w "\n%{http_code}" -X DELETE \
        "$API_URL/v9/projects/$project_name" \
        -H "Authorization: Bearer $VERCEL_TOKEN" \
        -H "Content-Type: application/json")
    
    local http_code=$(echo "$delete_response" | tail -1)
    
    if [ "$http_code" = "200" ] || [ "$http_code" = "204" ]; then
        echo "  ✅ Deleted: $project_name"
    else
        echo "  ❌ Failed to delete: $project_name (HTTP $http_code)"
        echo "  Response: $(echo "$delete_response" | head -1)"
    fi
    echo ""
}

# Delete each project
for project in "${PROJECTS[@]}"; do
    delete_project "$project"
done

echo "✅ Cleanup complete!"
echo ""
echo "Remaining project: graphclic-website (with graphclic.com domain)"
echo "Check: https://vercel.com/dashboard"
