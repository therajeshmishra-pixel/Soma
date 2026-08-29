#!/bin/bash

# 1. Backup the dev index.html
cp index.html index.html.bak

echo "🚀 Starting Production Build..."
npm run build

echo "📸 Prerendering Static HTML for SEO..."
node prerender.cjs

echo "🪄 Preparing Deployment..."
# Clean up existing folders to prevent nesting
rm -rf assets Photos corporate programs about contact assessment counselling.jpg
# Copy build files to root for Hostinger
cp -a dist/. ./

echo "📦 Committing changes..."
git add .
git commit -m "Deployment Update: $(date)"

echo "⬆️ Pushing to GitHub..."
git push origin main

# 2. RESTORE local dev environment
echo "🧹 Cleaning up local workspace so Vite dev server works..."
rm -rf corporate programs about contact assessment blog privacy standards terms assets Photos

echo "⏪ Restoring dev environment..."
mv index.html.bak index.html

echo "✅ Done! Now go to Hostinger and click 'Deploy'."
echo "Your local environment is back to normal!"
