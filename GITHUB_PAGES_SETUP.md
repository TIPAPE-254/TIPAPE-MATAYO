# GitHub Pages Deployment Guide

## Project Configuration Summary

✅ **Project Type**: Vite + React + TypeScript  
✅ **Build Output**: `dist/` directory  
✅ **Repository**: TIPAPE-MATAYO  
✅ **GitHub Pages Base Path**: `/TIPAPE-MATAYO/`  

## What Has Been Configured

### 1. ✅ Vite Configuration (`vite.config.ts`)
- **Base path**: Correctly set to `/TIPAPE-MATAYO/` for production
- **Build output**: `dist` directory with optimized asset bundling
- **Asset handling**: CSS and JS files organized in subdirectories
- **Minification**: Enabled with Terser for optimal performance

### 2. ✅ Package Configuration (`package.json`)
- **Build script**: `npm run build` - TypeScript check + Vite build
- **Deploy script**: `npm run deploy` - Build + Deploy to GitHub Pages
- **gh-pages**: Installed as dev dependency

### 3. ✅ GitHub Pages Workflow (`.github/workflows/deploy.yml`)
- **Trigger**: Automatic deployment on push to `main` branch
- **Manual trigger**: Available via workflow_dispatch
- **Environment variables**: `GEMINI_API_KEY` configured
- **Deployment**: Uses GitHub Pages official actions

### 4. ✅ HTML Entry Point (`index.html`)
- **Module script**: Uses `/index.tsx` as entry point (Vite handles resolution)
- **Metadata**: Meta description added for SEO
- **External resources**: CDN-based (Tailwind, Google Fonts)

## How GitHub Pages Will Work

### Automatic Deployment (Recommended)
When you push to the `main` branch:
1. GitHub Actions runs the workflow automatically
2. Installs dependencies
3. Builds the project
4. Deploys to GitHub Pages
5. Available at: `https://TIPAPE-254.github.io/TIPAPE-MATAYO/`

### Manual Local Deployment
```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Deploy the `dist/` folder to GitHub Pages using `gh-pages`

## Commands Reference

### Development
```bash
npm run dev
```
Starts the Vite dev server at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
Outputs optimized static files to `dist/` directory

### Preview Production Build Locally
```bash
npm run preview
```
Serves the `dist/` directory locally to verify production build

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and deploys to GitHub Pages (requires gh-pages package)

### Full Deployment Sequence
```bash
# Option 1: Automatic (push to main)
git add .
git commit -m "your message"
git push origin main

# Option 2: Manual
npm run deploy
```

## Troubleshooting

### Issue: Blank Page After Deployment
**Solution**: The base path is critical. Check:
- ✅ `vite.config.ts` has `base: '/TIPAPE-MATAYO/'` for production
- ✅ All imports use relative paths
- ✅ External resources (fonts, scripts) use absolute URLs or CDN

### Issue: Assets Not Loading (404 errors)
**Solution**: Verify asset paths:
- ✅ Images in `assets/` folder will be available at `/TIPAPE-MATAYO/assets/...`
- ✅ CSS/JS auto-handled by Vite in `js/` and `css/` subdirectories
- ✅ Check Network tab in DevTools for actual URLs

### Issue: Build Fails
**Solution**: Ensure environment variables:
```bash
# Set GEMINI_API_KEY before building
export GEMINI_API_KEY="your-key-here"
npm run build

# Or via GitHub Actions (use Secrets)
```

## GitHub Settings Checklist

1. Go to: **Settings** → **Pages**
2. Set **Source** to: **Deploy from a branch**
3. Set **Branch** to: **gh-pages** and **/(root)**
4. Set **Custom domain** (optional)
5. Enable **Enforce HTTPS** ✅

## Files Modified for GitHub Pages

- ✅ `vite.config.ts` - Enhanced build configuration
- ✅ `package.json` - Added build + deploy scripts
- ✅ `index.html` - Entry point verified
- ✅ `.github/workflows/deploy.yml` - Automated deployment workflow

## Environment Variables

For GitHub Actions to build correctly:
1. Go to: **Settings** → **Secrets and variables** → **Actions**
2. Add secret: `GEMINI_API_KEY` with your API key value
3. The workflow will use it automatically

## Verification Steps

After deployment, verify:
```bash
# 1. Check that dist/ was created with index.html
ls -la dist/

# 2. Check dist/ contains:
# - index.html
# - js/ folder
# - css/ folder
# - assets/ folder (if using images)

# 3. Visit your GitHub Pages URL
# https://TIPAPE-254.github.io/TIPAPE-MATAYO/
```

## Next Steps

1. Ensure `GEMINI_API_KEY` is set in GitHub Secrets
2. Push your code to `main` branch
3. Watch the "Actions" tab for deployment progress
4. Visit your GitHub Pages URL to verify

Your site is now fully configured for GitHub Pages! 🚀
