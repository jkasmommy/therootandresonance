# Deployment Guide

## Deploy to Vercel

### Option 1: Vercel CLI (Recommended)
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production:
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration
1. Push code to GitHub repository
2. Connect repository to Vercel dashboard
3. Automatic deployments on push

### Option 3: Drag & Drop
1. Go to [vercel.com](https://vercel.com)
2. Drag the project folder to the deployment area
3. Website will be deployed automatically

## Other Deployment Options

### Netlify
1. Drag project folder to [netlify.com](https://netlify.com)
2. Or connect GitHub repository

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

### Traditional Web Hosting
Upload all files to your web server's public folder (usually `public_html` or `www`).

## Environment Variables
This is a static website with no backend, so no environment variables are needed.

## Domain Setup
After deployment, you can connect a custom domain through your hosting provider's dashboard.
