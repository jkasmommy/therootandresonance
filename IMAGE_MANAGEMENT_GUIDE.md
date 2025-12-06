# Image Management Guide for The Root & Resonance Website

## Current Image Structure

Your website uses images in two main ways:

### 1. Hero Image (Main circular image on homepage)
- **Current file:** `hero-apothecary.jpg.png` (located in `/images/` folder)
- **Used in:** `index.html` and `public/index.html`

### 2. Product Images (Apothecary Products)
The website expects these specific image files:
- `images/moonlight-elixir.jpg`
- `images/sunrise-tea.jpg`
- `images/heart-tincture.jpg`
- `images/cedar-salve.jpg`
- `images/intuition-elixir.jpg`
- `images/digestive-tea.jpg`
- `images/immune-remedy.jpg`
- `images/healing-salve.jpg`

### 3. Sacred Creations Images
- `images/flower-coasters.jpg`
- `images/metatron-art.jpg`
- `images/crystal-grid.jpg`
- `images/geometry-keychains.jpg`
- `images/pentacle-plate.jpg`
- `images/mandala-board.jpg`

## How to Update Images

### Method 1: Replace Files Directly (Easiest)

1. **Prepare your images:**
   - Optimal size: 400x400 pixels for square product images
   - Hero image: 500x500 pixels or larger
   - Format: JPG or PNG (JPG preferred for file size)
   - Quality: High quality but optimized for web

2. **Replace the image files:**
   - Navigate to: `/Users/stephanienichols/Desktop/TR&R WEBSITE/images/`
   - Replace any existing image with your new image
   - **Important:** Keep the same filename to avoid code changes

3. **For new images:**
   - Save your image with the exact filename expected (see lists above)
   - Place in both `/images/` and `/public/images/` folders

### Method 2: Update Image Paths in Code

If you want to use different filenames, you'll need to update the code:

1. **For Apothecary Products:** Edit `js/main.js` and `public/js/main.js`
2. **For Hero Image:** Edit `index.html` and `public/index.html`

### Method 3: Add New Products with Images

1. **Add image to folders:**
   - Place new image in `/images/` folder
   - Also place in `/public/images/` folder

2. **Update product data:**
   - Edit the `apothecaryProducts` array in `js/main.js`
   - Add new product with correct image path

## Image Guidelines

### Technical Requirements:
- **Format:** JPG preferred (smaller file size), PNG for transparency
- **Size:** 400x400px minimum for products, 500x500px for hero
- **Quality:** 80-90% JPEG quality for good balance of quality/file size
- **File naming:** Use lowercase, hyphens instead of spaces

### Brand Guidelines:
- **Style:** Clean, professional, well-lit
- **Background:** Neutral backgrounds work best (cream, white, sage)
- **Colors:** Should complement brand colors (sage green, gold, cream, charcoal)
- **Composition:** Center the product, minimal props

## Quick Update Process

### To update a single product image:
1. Create/edit your product image (400x400px, JPG)
2. Name it exactly as expected (e.g., `moonlight-elixir.jpg`)
3. Replace the file in `/images/` folder
4. Copy to `/public/images/` folder
5. Deploy changes using Git:
   ```bash
   git add .
   git commit -m "Update product image"
   git push origin main
   ```

### To update the hero image:
1. Create your hero image (500x500px or larger)
2. Save as `hero-apothecary.jpg.png` (matching current filename)
3. Replace in `/images/` folder
4. Copy to `/public/images/` folder
5. Deploy changes

## Fallback System

The website has a built-in fallback system:
- If an image fails to load, it shows a branded placeholder
- The placeholder uses your brand colors and shows the product name
- This ensures the site always looks professional, even with missing images

## Image Optimization Tools

### Recommended tools for image optimization:
- **Online:** TinyPNG.com, Squoosh.app
- **Mac Apps:** ImageOptim, Preview (built-in)
- **Free Software:** GIMP, Canva

### Quick optimization checklist:
- ✅ Resize to appropriate dimensions
- ✅ Compress to 80-90% quality
- ✅ Use JPG for photos, PNG for graphics with transparency
- ✅ Keep file sizes under 200KB when possible

## Deployment

After updating images:
1. **Stage changes:** `git add .`
2. **Commit:** `git commit -m "Update product images"`
3. **Deploy:** `git push origin main`
4. **Wait:** Vercel will automatically deploy (1-2 minutes)
5. **Verify:** Check your website to confirm images appear

## Troubleshooting

### Image not showing?
1. Check filename matches exactly (case-sensitive)
2. Ensure image is in both `/images/` and `/public/images/`
3. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
4. Check browser console for errors

### Image quality issues?
1. Ensure minimum dimensions (400x400px)
2. Check compression isn't too aggressive
3. Verify image format (JPG/PNG)

### Need help?
- Check the browser's developer console (F12) for error messages
- Verify the image file paths in the code
- Test locally before deploying

---

**Remember:** Always keep backups of your original images and test changes locally when possible!
