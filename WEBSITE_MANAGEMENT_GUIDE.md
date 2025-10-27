# Website Management Guide
## How to Add Images and Update Product Information

### 📸 **Adding Images to Your Website**

#### **Image Requirements:**
- **Format**: JPG, PNG, or WebP (JPG recommended for photos)
- **Size**: Maximum 2MB per image for fast loading
- **Dimensions**: 
  - Product images: 800x800px (square) works best
  - Hero images: 1200x800px (landscape)
  - About section: 600x400px

#### **Step 1: Prepare Your Images**
1. **Resize your images** using:
   - **Mac**: Preview app (Tools → Adjust Size)
   - **Windows**: Paint or Photos app
   - **Online**: [TinyPNG.com](https://tinypng.com) for compression
   - **Phone**: Use built-in photo editor to resize

2. **Name your files descriptively**:
   ```
   ✅ Good: lavender-sleep-tincture.jpg
   ✅ Good: sacred-geometry-coaster.jpg
   ❌ Bad: IMG_1234.jpg
   ```

#### **Step 2: Upload Images to Your Website**
1. **Open your project folder**: `/Users/stephanienichols/Desktop/TR&R WEBSITE/`
2. **Navigate to the `images/` folder** (create it if it doesn't exist)
3. **Copy your prepared images** into this folder
4. **Also copy them** to `/Users/stephanienichols/Desktop/TR&R WEBSITE/public/images/`

---

### 🛍️ **Updating Product Information**

#### **Where Product Data Lives:**
All product information is stored in the file: `js/main.js`

#### **Step 1: Open the Product Data File**
1. Open VS Code
2. Navigate to `js/main.js`
3. Look for the `apothecaryProducts` array (around line 10-50)

#### **Step 2: Understanding Product Structure**
Each product has this format:
```javascript
{
    id: "unique-product-id",
    name: "Product Name",
    price: 29.99,
    description: "Detailed product description",
    category: "elixirs", // elixirs, teas, remedies, salves
    image: "images/your-image.jpg",
    weight: 100, // in grams
    dimensions: "10x5x5" // length x width x height in cm
}
```

#### **Step 3: Adding a New Product**
1. **Find the product array** in `js/main.js`
2. **Add a new product** at the end:
```javascript
{
    id: "new-product-slug",
    name: "Your New Product",
    price: 24.99,
    description: "Amazing benefits of this product...",
    category: "elixirs",
    image: "images/new-product-photo.jpg",
    weight: 120,
    dimensions: "12x6x6"
},
```

#### **Step 4: Editing Existing Products**
1. **Find the product** you want to edit
2. **Change any field**:
   - `name`: Update product title
   - `price`: Change pricing
   - `description`: Update product details
   - `image`: Change to new photo filename
   - `category`: Move to different category

---

### 🖼️ **Specific Image Locations**

#### **Hero Section Image:**
**File**: `index.html` (line ~122)
**Current**: `images/hero-apothecary.jpg`
**To change**: Replace filename in the `src` attribute

#### **About Section Image:**
**File**: `index.html` (line ~190)
**Current**: `images/about-story.jpg`
**To change**: Replace filename in the `src` attribute

#### **Product Images:**
**Location**: Referenced in `js/main.js` product array
**Format**: `images/product-name.jpg`

---

### 🚀 **Deploying Your Changes**

After making changes, you need to deploy them:

1. **Copy files to public directory**:
   ```bash
   cp js/main.js public/js/main.js
   cp index.html public/index.html
   cp -r images/* public/images/
   ```

2. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update products and images"
   git push origin main
   ```

3. **Your site will automatically update** on Vercel within 2-3 minutes

---

### 📝 **Quick Reference: Common Tasks**

#### **Change Product Price:**
1. Open `js/main.js`
2. Find your product in the array
3. Change the `price: 29.99` value
4. Save and deploy

#### **Add New Product Photo:**
1. Resize image to 800x800px
2. Save as `images/product-name.jpg`
3. Copy to both `images/` and `public/images/`
4. Update product's `image` field in `js/main.js`
5. Deploy changes

#### **Change Hero Image:**
1. Prepare image (1200x800px recommended)
2. Save as `images/new-hero.jpg`
3. Update `index.html` line ~122
4. Copy to `public/` folder
5. Deploy

#### **Update Product Description:**
1. Open `js/main.js`
2. Find your product
3. Edit the `description` text
4. Save and deploy

---

### ⚠️ **Important Notes**

- **Always backup** your files before making changes
- **Test locally** before deploying (optional)
- **Image file names** must match exactly (case-sensitive)
- **Don't forget** to copy files to the `public/` directory
- **Deployment takes 2-3 minutes** to show on your live site

### 🆘 **Need Help?**
If you run into issues:
1. Check that image files exist in both `images/` and `public/images/`
2. Verify file names match exactly in the code
3. Make sure you've deployed the changes to GitHub
4. Wait 2-3 minutes for Vercel to update

---

### 📱 **Pro Tips**

- **Use consistent naming**: All lowercase, hyphens instead of spaces
- **Compress images**: Use TinyPNG.com to reduce file sizes
- **Preview changes**: You can preview locally before deploying
- **Mobile-friendly**: Your images will automatically resize for mobile
- **SEO-friendly**: Use descriptive filenames for better search results
