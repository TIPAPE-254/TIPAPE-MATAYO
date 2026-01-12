# 🚀 QUICK REFERENCE CARD - GitHub Pages Deployment

## Your GitHub Pages URL
```
https://TIPAPE-254.github.io/TIPAPE-MATAYO/
```

---

## Essential Commands

### 🛠️ Development
```bash
npm run dev          # Start local dev server (http://localhost:3000)
```

### 🔨 Build
```bash
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### 🚀 Deploy
```bash
# Option 1: Push to GitHub (automatic)
git push origin main

# Option 2: Manual deployment
npm run deploy

# Option 3: Interactive script
./deploy.sh
```

---

## 3-Step Deployment

### Step 1: Set API Key (if needed)
```
GitHub Settings → Secrets and variables → Actions
Add: GEMINI_API_KEY = your-key-here
```

### Step 2: Commit & Push
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### Step 3: Wait for Deployment
- Monitor: GitHub repo → Actions tab
- Check: https://TIPAPE-254.github.io/TIPAPE-MATAYO/

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Blank page | Clear cache (Ctrl+Shift+R) |
| 404 errors | Check browser console (F12) |
| Build fails | Run `npm run build` locally first |
| No styles | Base path is /TIPAPE-MATAYO/ (not /) |
| Changes not showing | Wait 1-2 min, clear cache |

---

## File Locations

| File | Purpose |
|------|---------|
| `vite.config.ts` | Build configuration ✅ |
| `package.json` | Scripts & dependencies ✅ |
| `.github/workflows/deploy.yml` | Auto-deployment ✅ |
| `dist/` | Production build (created by npm run build) |
| `dist/index.html` | Entry point (2.3 kB) |

---

## Configuration Status

✅ Framework: Vite + React + TypeScript  
✅ Base Path: /TIPAPE-MATAYO/  
✅ Build: Verified (11.34s, 1697 modules)  
✅ Packages: gh-pages & terser installed  
✅ Scripts: deploy & build configured  
✅ Workflow: Auto-deployment enabled  

---

## Documentation Files

1. **DEPLOY_COMMANDS.txt** - Full command reference
2. **GITHUB_PAGES_SETUP.md** - Detailed setup guide
3. **DEPLOYMENT_COMPLETE.md** - Status & verification
4. **CONFIGURATION_CHECKLIST.md** - Item-by-item checklist

---

## Build Output

```
✓ 1697 modules transformed
dist/index.html              2.27 kB │ gzip:  0.98 kB
dist/js/index-Sj1knudB.js  265.56 kB │ gzip: 83.28 kB
✓ built in 11.34s
```

---

## Remember

- ✅ Build works locally? → GitHub Actions will work
- ✅ Caching issue? → Ctrl+Shift+R (force refresh)
- ✅ Asset paths? → Automatically handled (base: /TIPAPE-MATAYO/)
- ✅ 404 errors? → Check Network tab in DevTools
- ✅ Need changes? → Edit → build → push

---

## Status: 🟢 READY FOR PRODUCTION

Your project is fully configured for GitHub Pages!

**Next:** `git push origin main` → Your site goes live! 🎉
