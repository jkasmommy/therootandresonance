// Main JavaScript for The Root & Resonance Website
// Stripe Cart Integration - NO Shopify Dependencies

// Product Data - AI-Generated Products for The Root & Resonance
const PRODUCTS = {
    'healing-salve': {
        id: 'healing-salve',
        name: 'Healing Herbal Salve',
        price: 24.99,
        description: 'A powerful blend of calendula, comfrey, and arnica for natural healing and skin repair.',
        image: 'images/products/healing-salve.jpg',
        category: 'apothecary'
    },
    'sage-cleansing-spray': {
        id: 'sage-cleansing-spray',
        name: 'Sage Cleansing Spray',
        price: 18.99,
        description: 'Sacred white sage and crystal-infused spray for energetic cleansing and purification.',
        image: 'images/products/sage-spray.jpg',
        category: 'apothecary'
    },
    'moon-cycle-tea': {
        id: 'moon-cycle-tea',
        name: 'Moon Cycle Herbal Tea',
        price: 16.99,
        description: 'A nurturing blend of red raspberry leaf, nettle, and rose hips for feminine wellness.',
        image: 'images/products/moon-tea.jpg',
        category: 'apothecary'
    },
    'chakra-oil-set': {
        id: 'chakra-oil-set',
        name: 'Chakra Balancing Oil Set',
        price: 89.99,
        description: 'Complete set of seven chakra oils infused with corresponding crystals and essential oils.',
        image: 'images/products/chakra-oils.jpg',
        category: 'apothecary'
    },
    'sleep-pillow-mist': {
        id: 'sleep-pillow-mist',
        name: 'Dreamy Sleep Pillow Mist',
        price: 22.99,
        description: 'Lavender and chamomile mist to promote restful sleep and peaceful dreams.',
        image: 'images/products/sleep-mist.jpg',
        category: 'apothecary'
    },
    'flower-of-life-pendant': {
        id: 'flower-of-life-pendant',
        name: 'Flower of Life Crystal Pendant',
        price: 45.99,
        description: 'Hand-wrapped crystal pendant featuring the sacred Flower of Life geometry.',
        image: 'images/products/flower-pendant.jpg',
        category: 'sacred'
    },
    'merkaba-meditation-set': {
        id: 'merkaba-meditation-set',
        name: 'Merkaba Meditation Set',
        price: 67.99,
        description: 'Crystal merkaba with meditation guide for ascending consciousness and energy work.',
        image: 'images/products/merkaba-set.jpg',
        category: 'sacred'
    },
    'geometric-altar-cloth': {
        id: 'geometric-altar-cloth',
        name: 'Sacred Geometry Altar Cloth',
        price: 39.99,
        description: 'Hand-printed altar cloth featuring multiple sacred geometric patterns.',
        image: 'images/products/altar-cloth.jpg',
        category: 'sacred'
    },
    'crystal-grid-board': {
        id: 'crystal-grid-board',
        name: 'Seed of Life Grid Board',
        price: 78.99,
        description: 'Wooden crystal grid board engraved with the Seed of Life pattern.',
        image: 'images/products/grid-board.jpg',
        category: 'sacred'
    },
    'protection-bundle': {
        id: 'protection-bundle',
        name: 'Protection Bundle',
        price: 55.99,
        description: 'Complete protection kit with sage, palo santo, black tourmaline, and blessing oil.',
        image: 'images/products/protection-bundle.jpg',
        category: 'apothecary'
    },
    'manifestation-candle': {
        id: 'manifestation-candle',
        name: 'Manifestation Ritual Candle',
        price: 28.99,
        description: 'Hand-poured soy candle infused with herbs and crystals for manifestation work.',
        image: 'images/products/manifestation-candle.jpg',
        category: 'apothecary'
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