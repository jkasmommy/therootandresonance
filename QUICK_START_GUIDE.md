# Quick Start: Update Your Website

## 🖼️ **ADDING IMAGES (Super Simple)**

### Step 1: Prepare Your Photo
- **Resize** to 800x800 pixels (square works best for products)
- **Name it clearly**: `lavender-tincture.jpg` (no spaces, use hyphens)
- **Keep under 2MB** file size

### Step 2: Put Photo in Right Place
1. Open your website folder: `TR&R WEBSITE`
2. Open the `images` folder
3. **Drag your photo into this folder**
4. **ALSO drag it into**: `public/images` folder

---

## ✏️ **UPDATING PRODUCTS (Easy Edit)**

### Your Product List is Here:
**File**: `js/main.js` (lines 4-80)

### Current Products (you can edit these):
```javascript
{
    id: "moonlight-elixir",
    name: "Moonlight Elixir",          ← Change this name
    price: 28.00,                      ← Change this price  
    description: "A calming blend...", ← Change this description
    category: "elixirs",               ← Keep as: elixirs, teas, remedies, or salves
    image: "images/moonlight-elixir.jpg", ← Change to your photo filename
}
```

### To Add New Product:
Copy this template and add it to the list:
```javascript
{
    id: "your-new-product",
    name: "Your Product Name",
    price: 25.00,
    description: "Amazing benefits and ingredients...",
    category: "elixirs",
    image: "images/your-photo.jpg",
    weight: "120",
    dimensions: "5x5x10"
},
```

---

## 🚀 **MAKE CHANGES LIVE**

After editing, run these commands in Terminal:

```bash
# 1. Copy your changes
cp js/main.js public/js/main.js

# 2. Save to GitHub
git add .
git commit -m "Updated products and images"  
git push origin main
```

**Your website updates automatically in 2-3 minutes!**

---

## 🎯 **QUICK FIXES**

### Change a Price:
1. Open `js/main.js`
2. Find your product
3. Change `price: 28.00` to your new price
4. Save and deploy

### Add New Product Photo:
1. Put photo in `images/` and `public/images/`
2. In `js/main.js`, change `image: "images/new-photo.jpg"`
3. Save and deploy

### Update Product Description:
1. Find your product in `js/main.js`
2. Edit the text in quotes after `description:`
3. Save and deploy

---

## 📍 **Important File Locations**

- **Product info**: `js/main.js` (lines 4-80)
- **Images go in**: `images/` AND `public/images/`
- **Hero image**: Update in `index.html` (line 122)
- **About image**: Update in `index.html` (line 190)

---

## ❓ **Need Help?**

**Can't find the file?** Use VS Code's search (Cmd+Shift+F) to search for "moonlight-elixir"

**Image not showing?** Check that filename matches exactly (case-sensitive)

**Changes not live?** Make sure you pushed to GitHub and wait 2-3 minutes

---

## 🏆 **You're Ready!**

Your beautiful website is ready for you to:
- ✅ Add your product photos
- ✅ Update prices and descriptions  
- ✅ Add new products
- ✅ Change any images

The website will automatically look professional and handle all the shopping cart functionality!
