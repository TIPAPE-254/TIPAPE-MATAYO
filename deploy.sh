#!/bin/bash

# Quick Start Guide for GitHub Pages Deployment
# This script helps you deploy TIPAPE-MATAYO to GitHub Pages

echo "=================================="
echo "TIPAPE-MATAYO GitHub Pages Deploy"
echo "=================================="
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Build the project
echo "🔨 Building project..."
npm run build
echo ""

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📂 Build output location: ./dist"
    echo ""
    echo "Next steps:"
    echo "1. Push to GitHub: git push origin main"
    echo "2. Or deploy locally: npm run deploy"
    echo ""
    echo "Then visit: https://TIPAPE-254.github.io/TIPAPE-MATAYO/"
else
    echo "❌ Build failed. Check errors above."
    exit 1
fi
