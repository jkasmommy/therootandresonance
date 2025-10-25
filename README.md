# The Root & Resonance Website

A beautiful, modern website for The Root & Resonance - a holistic wellness brand specializing in handcrafted apothecary products and sacred geometry creations. Crafted with intention in Cortez, Colorado.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Sacred Geometry Animations**: Subtle animated backgrounds with sacred patterns
- **Product Filtering**: Interactive filtering system for apothecary products
- **Smooth Scrolling**: Elegant navigation between sections
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Semantic HTML and meta tags for search engines
- **Performance Optimized**: Fast loading with efficient code structure
- **Accessibility**: WCAG compliant with proper contrast and keyboard navigation

## 🎨 Design Elements

### Color Palette
- **Sage Green**: `#9CAF88` - Primary brand color
- **Gold**: `#D4AF37` - Accent and highlights  
- **Cream**: `#F5F5DC` - Background and light elements
- **Charcoal**: `#36454F` - Text and dark elements
- **Muted Green**: `#8B9A8B` - Secondary text

### Typography
- **Headlines**: Playfair Display (serif) - elegant and timeless
- **Body Text**: Lato (sans-serif) - clean and readable

### Sacred Geometry
- Subtle animated patterns in the background
- Sacred symbols integrated into the design
- Geometric elements throughout the interface

## 🚀 Quick Start

### Local Development

1. **Clone or download** this repository
2. **Navigate** to the project directory
3. **Start a local server**:
   ```bash
   # Using Python 3 (recommended)
   python3 -m http.server 3000
   
   # Or using Node.js (if you have it installed)
   npx serve .
   
   # Or using PHP
   php -S localhost:3000
   ```
4. **Open** your browser and go to `http://localhost:3000`

### Deployment to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **For production deployment**:
   ```bash
   vercel --prod
   ```

### GitHub Integration

1. **Create a GitHub repository**
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Root & Resonance website"
   git branch -M main
   git remote add origin https://github.com/your-username/root-resonance-website
   git push -u origin main
   ```
3. **Connect to Vercel** for automatic deployments

## 📁 Project Structure

```
TR&R WEBSITE/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom CSS styles
├── js/
│   └── main.js           # JavaScript functionality
├── images/
│   └── README.md         # Image specifications and list
├── vercel.json           # Vercel deployment configuration
├── package.json          # Project metadata and scripts
└── README.md            # This file
```

## 🛠 Customization

### Adding New Products

To add new apothecary products or sacred creations, edit the arrays in `js/main.js`:

```javascript
// Add to apothecaryProducts array
{
    id: 9,
    name: "Your Product Name",
    category: "elixirs", // elixirs, teas, remedies, salves
    price: "$25.00",
    description: "Product description here",
    image: "images/your-product.jpg"
}

// Add to sacredCreations array
{
    id: 7,
    name: "Your Creation Name",
    price: "$30.00",
    description: "Creation description here",
    image: "images/your-creation.jpg"
}
```

### Updating Colors

Modify the color palette in both files:

**CSS Variables** (`css/styles.css`):
```css
:root {
    --sage: #9CAF88;
    --gold: #D4AF37;
    --cream: #F5F5DC;
    --charcoal: #36454F;
    --muted: #8B9A8B;
}
```

**Tailwind Config** (`index.html`):
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                sage: '#9CAF88',
                gold: '#D4AF37',
                // ... etc
            }
        }
    }
}
```

### Adding Images

1. **Add images** to the `images/` folder
2. **Update image references** in the JavaScript arrays
3. **Follow naming conventions** listed in `images/README.md`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Lazy Loading**: Images load as they become visible
- **Optimized Assets**: Compressed CSS and JavaScript
- **CDN Integration**: Tailwind CSS loaded from CDN
- **Efficient Animations**: CSS transforms for smooth performance
- **Intersection Observer**: Smart scroll animations

## 🔍 SEO Features

- **Semantic HTML5**: Proper heading hierarchy and landmarks
- **Meta Tags**: Title, description, and social media tags
- **Alt Texts**: Descriptive alt text for all images
- **Schema Markup**: Ready for structured data implementation
- **Clean URLs**: SEO-friendly URL structure

## 🎯 Accessibility Features

- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Indicators**: Clear focus states for all interactive elements
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Screen Reader Support**: Proper ARIA labels and semantic markup
- **Reduced Motion**: Respects user's motion preferences

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+

## 📋 Future Enhancements

- [ ] **E-commerce Integration**: Shopify or Stripe checkout system
- [ ] **Blog Section**: Content management for wellness articles
- [ ] **User Accounts**: Customer login and order history
- [ ] **Inventory Management**: Real-time stock tracking
- [ ] **Email Newsletter**: Mailchimp or ConvertKit integration
- [ ] **Social Media Feed**: Instagram API integration
- [ ] **Product Reviews**: Customer review system
- [ ] **Wishlist Feature**: Save favorite products
- [ ] **Advanced Filtering**: Price range, ingredients, etc.
- [ ] **Search Functionality**: Full-text product search

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature-name`
3. **Commit** your changes: `git commit -am 'Add new feature'`
4. **Push** to the branch: `git push origin feature-name`
5. **Submit** a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please contact:
- **Email**: info@therootandresonance.com
- **Location**: Cortez, Colorado
- **Website**: [therootandresonance.com](https://therootandresonance.com)

---

**Crafted with 🤍 by The Root & Resonance LLC • Cortez, Colorado**
