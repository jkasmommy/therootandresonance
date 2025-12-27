// Main JavaScript for The Root & Resonance Website
// Stripe Cart Integration - NO Shopify Dependencies

// Product Data - YOUR ACTUAL PRODUCTS
const PRODUCTS = {
    'quiet-thorn': {
        id: 'quiet-thorn',
        name: 'Quiet Thorn - Headache & Tension Relief Elixir',
        price: 18.00,
        description: 'A handcrafted herbal comfort elixir created in honor of Gaia\'s wisdom and the ancestors who carried plant knowledge before us. Designed to bring soothing relief when headaches, tension, or sinus pressure try to steal your clarity.',
        image: 'images/Quiet_Thorn.png',
        category: 'apothecary'
    },
    'quiet-ember': {
        id: 'quiet-ember',
        name: 'Quiet Ember - Sleep & Relaxation Elixir',
        price: 22.00,
        description: 'A gentle evening elixir crafted in deep reverence to Gaia\'s nighttime medicines and the ancestors who understood the sacred art of rest. Designed to guide you into peaceful slumber when the mind won\'t quiet.',
        image: 'images/quiet-ember.jpg',
        category: 'apothecary'
    },
    'womack-snake-root': {
        id: 'womack-snake-root',
        name: 'Womack Snake Root Elixir - Ancestral Lineage Tonic',
        price: 24.00,
        description: 'A bold, lineage-rooted elixir crafted to honor Gaia\'s medicine and the Womack ancestors who prepared this tonic before us. Made with Fireball whiskey to echo the original family recipe.',
        image: 'images/Womack_SnakeRoot.png',
        category: 'apothecary'
    },
    'body-alchemist': {
        id: 'body-alchemist',
        name: 'Body Alchemist Elixir - Metabolic & Inflammation Support',
        price: 20.00,
        description: 'A handcrafted elixir created with gratitude to Gaia and the ancestral healers who taught us how to transform the body from within. Designed to support digestion and reduce inflammation.',
        image: 'images/Body_Alchemist.png',
        category: 'apothecary'
    },
    'internal-renewal': {
        id: 'internal-renewal',
        name: 'Internal Renewal Elixir - Detox & Lymphatic Flow Support',
        price: 20.00,
        description: 'A gentle renewal tonic crafted in reverence to Gaia\'s cleansing plants and the ancestral stewards who understood the rhythms of the body. Designed to support liver health and lymphatic flow.',
        image: 'images/Internal_Renewal.png',
        category: 'apothecary'
    },
    'desert-pain-salve': {
        id: 'desert-pain-salve',
        name: 'Desert Pain Salve - Rabbitbrush Relief Cream',
        price: 14.00,
        description: 'A deeply soothing salve handcrafted in honor of Gaia\'s desert medicines. This formula begins with a slow, sun-infused rabbitbrush olive oil for inflammation and muscle soreness.',
        image: 'images/Desert_Balm.png',
        category: 'apothecary'
    },
    'moonroot-harmony': {
        id: 'moonroot-harmony',
        name: 'MoonRoot Harmony Cream',
        price: 15.00,
        description: 'A gently nourishing botanical cream handcrafted to support hormonal balance, emotional regulation, and the natural rhythms of the female body through all seasons of life.',
        image: 'images/Moonroot_Harmony.png',
        category: 'apothecary'
    },
    'flower-of-life-coasters': {
        id: 'flower-of-life-coasters',
        name: 'Flower of Life Coaster Set',
        price: 25.00,
        description: 'A laser-engraved wooden coaster set inspired by the sacred geometry of the Flower of Life. This meaningful set includes four coasters, each featuring clean, dark engraving.',
        image: 'images/Flower_Of_Life_Coasters.png',
        category: 'sacred'
    },
    'tree-of-life-meditation': {
        id: 'tree-of-life-meditation',
        name: 'Tree of Life Meditation Board',
        price: 38.00,
        description: 'A laser-cut wooden meditation board inspired by the timeless symbolism of the Tree of Life — a sacred emblem of grounding, growth, and interconnectedness.',
        image: 'images/Tree_of_Life_jpg.png',
        category: 'sacred'
    },
    'sacred-geometry-keychain': {
        id: 'sacred-geometry-keychain',
        name: 'Sacred Geometry Keychain',
        price: 15.00,
        description: 'Carry a symbol of ancient protection and clarity wherever you go. This handcrafted wooden keychain features a precise laser-engraved Flower of Life.',
        image: 'images/Key_Chain.png',
        category: 'sacred'
    },
    'herb-stripper': {
        id: 'herb-stripper',
        name: 'Herb Stripper',
        price: 20.00,
        description: 'A handcrafted wooden herb stripper designed to make the process of harvesting and preparing herbs simple, efficient, and intentional.',
        image: 'images/Herb_Stripper.png',
        category: 'sacred'
    }
};

// Cart State Management
class Cart {
    constructor() {
        this.items = [];
        this.isOpen = false;
        this.loadFromStorage();
        this.updateDisplay();
    }

    loadFromStorage() {
        try {
            const saved = localStorage.getItem('rootResonanceCart');
            if (saved) {
                this.items = JSON.parse(saved);
            }
        } catch (error) {
            console.warn('Failed to load cart from storage:', error);
            this.items = [];
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem('rootResonanceCart', JSON.stringify(this.items));
        } catch (error) {
            console.warn('Failed to save cart to storage:', error);
        }
    }

    addItem(productId, quantity = 1) {
        const product = PRODUCTS[productId];
        if (!product) {
            console.error('Product not found:', productId);
            return false;
        }

        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }

        this.saveToStorage();
        this.updateDisplay();
        this.showAddedMessage(product.name);
        return true;
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToStorage();
        this.updateDisplay();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveToStorage();
                this.updateDisplay();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clear() {
        this.items = [];
        this.saveToStorage();
        this.updateDisplay();
    }

    updateDisplay() {
        // Update cart count badge
        const cartBadge = document.querySelector('.cart-count');
        const itemCount = this.getItemCount();
        
        if (cartBadge) {
            cartBadge.textContent = itemCount;
            cartBadge.style.display = itemCount > 0 ? 'block' : 'none';
        }

        // Update cart items display
        this.renderCartItems();
    }

    renderCartItems() {
        const cartItems = document.querySelector('.cart-items');
        const cartTotal = document.querySelector('.cart-total');
        const checkoutBtn = document.querySelector('.checkout-btn');
        
        if (!cartItems) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart text-center py-8 text-charcoal">Your cart is empty</p>';
            if (cartTotal) cartTotal.textContent = '$0.00';
            if (checkoutBtn) checkoutBtn.disabled = true;
            return;
        }

        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item flex items-center p-4 border-b border-muted-green" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image w-16 h-16 object-cover rounded mr-4">
                <div class="cart-item-details flex-1">
                    <h4 class="font-display text-charcoal">${item.name}</h4>
                    <p class="cart-item-price text-sage font-semibold">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls flex items-center space-x-2">
                    <button class="qty-btn bg-sage text-cream px-2 py-1 rounded" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <span class="quantity mx-2">${item.quantity}</span>
                    <button class="qty-btn bg-sage text-cream px-2 py-1 rounded" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    <button class="remove-btn ml-2 text-red-500 hover:text-red-700" onclick="cart.removeItem('${item.id}')" title="Remove item">×</button>
                </div>
            </div>
        `).join('');

        if (cartTotal) {
            cartTotal.textContent = `$${this.getTotal().toFixed(2)}`;
        }
        
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
        }
    }

    showAddedMessage(productName) {
        const message = document.createElement('div');
        message.className = 'cart-success-message fixed top-4 right-4 bg-sage text-cream px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300';
        message.innerHTML = `
            <div class="success-content">
                ✓ ${productName} added to cart!
            </div>
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, 2000);
    }

    toggle() {
        const cartSidebar = document.querySelector('.cart-sidebar');
        if (cartSidebar) {
            this.isOpen = !this.isOpen;
            cartSidebar.classList.toggle('open', this.isOpen);
            document.body.classList.toggle('cart-open', this.isOpen);
        }
    }

    async proceedToCheckout() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        try {
            // Show loading state
            const checkoutBtn = document.querySelector('.checkout-btn');
            if (checkoutBtn) {
                checkoutBtn.textContent = 'Creating checkout...';
                checkoutBtn.disabled = true;
            }

            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: this.items
                })
            });

            const data = await response.json();

            if (response.ok && data.url) {
                // Redirect to Stripe Checkout
                window.location.href = data.url;
            } else {
                throw new Error(data.error || 'Failed to create checkout session');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('Failed to proceed to checkout. Please try again.');
            
            // Reset button
            const checkoutBtn = document.querySelector('.checkout-btn');
            if (checkoutBtn) {
                checkoutBtn.textContent = 'Proceed to Checkout';
                checkoutBtn.disabled = false;
            }
        }
    }
}

// Initialize cart
const cart = new Cart();

// Product rendering functions - Updated to match existing HTML structure
function renderProducts(productsToShow = null) {
    const apothecaryGrid = document.querySelector('#product-grid');
    const sacredGrid = document.querySelector('#sacred-grid');

    const products = productsToShow || Object.values(PRODUCTS);
    const apothecaryProducts = products.filter(p => p.category === 'apothecary');
    const sacredProducts = products.filter(p => p.category === 'sacred');

    if (apothecaryGrid) {
        apothecaryGrid.innerHTML = apothecaryProducts.map(product => createProductCard(product)).join('');
    }

    if (sacredGrid) {
        sacredGrid.innerHTML = sacredProducts.map(product => createProductCard(product)).join('');
    }
}

function createProductCard(product) {
    return `
        <div class="product-card bg-cream rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" data-category="${product.category}">
            <div class="product-image-container relative overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="product-image w-full h-64 object-cover" loading="lazy" onerror="this.src='images/placeholder-product.jpg'">
            </div>
            <div class="product-info p-6">
                <h3 class="product-title font-display text-xl text-charcoal mb-2">${product.name}</h3>
                <p class="product-description text-charcoal mb-4">${product.description}</p>
                <div class="flex items-center justify-between">
                    <div class="product-price font-bold text-gold text-lg">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart-btn bg-sage text-cream px-4 py-2 rounded hover:bg-opacity-80 transition-colors duration-300" onclick="cart.addItem('${product.id}')">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Filter products by category
function filterProducts(category) {
    const products = Object.values(PRODUCTS);
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    
    // For now, just render all products in their respective sections
    renderProducts();

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
}

// Setup cart functionality
function setupCartFunctionality() {
    // Cart toggle button
    const cartButton = document.querySelector('#cart-button') || document.querySelector('.cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', (e) => {
            e.preventDefault();
            cart.toggle();
        });
    }

    // Cart overlay close
    const cartOverlay = document.querySelector('.cart-overlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', () => cart.toggle());
    }

    // Close cart with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cart.isOpen) {
            cart.toggle();
        }
    });

    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => cart.proceedToCheckout());
    }
}

// Mobile menu functionality
function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button') || document.querySelector('#mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Smooth scrolling navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contact form handling
function setupContactForm() {
    const form = document.querySelector('#contact-form');
    if (form) {
        form.addEventListener('submit', handleContactForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', data);
    showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Reset form
    e.target.reset();
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section, .product-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function showMessage(message, type = 'success') {
    const bgColor = type === 'success' ? 'bg-sage' : type === 'error' ? 'bg-red-500' : 'bg-charcoal';
    
    const messageEl = document.createElement('div');
    messageEl.className = `fixed top-4 left-1/2 transform -translate-x-1/2 ${bgColor} text-cream px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300`;
    messageEl.textContent = message;
    document.body.appendChild(messageEl);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageEl.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(messageEl)) {
                document.body.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
}

// Initialize website
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌿 The Root & Resonance - Stripe Integration Loading...');
    
    // Initialize core functionality
    setupMobileMenu();
    setupSmoothScrolling();
    setupContactForm();
    setupScrollAnimations();
    setupCartFunctionality();
    
    // Render products - This is the key fix!
    renderProducts();
    
    // Setup filter buttons if they exist
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterProducts(btn.dataset.filter);
        });
    });
    
    console.log('✅ Website initialized with Stripe cart integration');
    console.log('🛒 Cart system ready - NO Shopify dependencies');
    console.log('📦 Products loaded:', Object.keys(PRODUCTS).length);
});