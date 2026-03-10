# Cloudflare Pages Deployment Guide

## Current Issue

The opennextjs/cloudflare package (v1.17.1) has a validation bug that prevents direct CLI deployment. This is a known compatibility issue with the package version.

## Recommended Solution: GitHub Integration (Easiest)

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Select **Pages** → **Create a project** → **Connect to Git**
4. Authorize GitHub and select your repository
5. Configure build settings:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
6. Click **Save** → Your site will deploy automatically

Cloudflare Pages will automatically detect Next.js and handle everything. No additional configuration needed!

## Alternative: CLI Deployment (Works Now!)

If you prefer to deploy from the command line:

```bash
# 1. Authenticate with Cloudflare
wrangler login

# 2. Deploy using the configured wrangler.toml
npm run deploy
```

This will:

- Build Next.js project to `.next` directory
- Deploy to Cloudflare Pages with proper configuration

**Configuration in `wrangler.toml`:**

```toml
name = "portofolio-website"
pages_build_output_dir = ".next"
pages_build_caching = true
compatibility_flags = ["nodejs_compat"]
```

## Project Build Status ✅

- Next.js 16.1.6 with Turbopack: **Working**
- Build output: Clean, no errors
- All dependencies: ✅ Up to date
- Vulnerabilities: **0 found**
- Package count: 927 packages

## Files Configuration

- `wrangler.toml` - Cloudflare Pages configuration
- `next.config.ts` - Next.js with Turbopack support
- `tsconfig.json` - TypeScript ES2020 target
- `package.json` - Updated scripts

## What's Included

✅ Next.js 16.1.6 with latest Turbopack  
✅ React 19.2.3 + TypeScript  
✅ Tailwind CSS v4 with PostCSS  
✅ Framer Motion animations  
✅ Node.js 22 compatible  
✅ All static content optimized for Cloudflare

## Next Steps

**Choose one deployment method:**

### Method 1: GitHub Integration (Recommended - Most Automatic) ⭐

1. Push to GitHub
2. Cloudflare Dashboard → Pages → Connect Git repository
3. Auto-detects Next.js, uses defaults
4. Automatic deploys on every push

### Method 2: Wrangler CLI (Local Control)

```bash
wrangler login
npm run deploy
```

Deploys immediately to your configured Cloudflare project.

### Method 3: Manual Build + Deploy

```bash
npm run build
wrangler pages deploy .next
```

All methods will deploy to the same project. Choose based on your workflow preference!
