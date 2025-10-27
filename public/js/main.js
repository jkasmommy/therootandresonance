// Main JavaScript for The Root & Resonance Website

// Product Data for Snipcart
const apothecaryProducts = [
    {
        id: "moonlight-elixir",
        name: "Moonlight Elixir",
        category: "elixirs",
        price: 28.00,
        description: "A calming blend of chamomile, lavender, and moonstone essence for peaceful sleep.",
        image: "images/moonlight-elixir.jpg",
        weight: "120", // in grams for shipping
        dimensions: "5x5x10" // length x width x height in cm
    },
    {
        id: "sunrise-vitality-tea",
        name: "Sunrise Vitality Tea",
        category: "teas", 
        price: 18.00,
        description: "Energizing morning blend with ginseng, yerba mate, and citrus herbs.",
        image: "images/sunrise-tea.jpg",
        weight: "85",
        dimensions: "8x8x6"
    },
    {
        id: "heart-healing-tincture",
        name: "Heart Healing Tincture",
        category: "remedies",
        price: 32.00,
        description: "Hawthorn berry and rose hip tincture for emotional and physical heart support.",
        image: "images/heart-tincture.jpg",
        weight: "150",
        dimensions: "4x4x12"
    },
    {
        id: "sacred-cedar-salve",
        name: "Sacred Cedar Salve",
        category: "salves",
        price: 22.00,
        description: "Protective salve with cedar, pine, and sage for grounding and purification.",
        image: "images/cedar-salve.jpg",
        weight: "100",
        dimensions: "6x6x3"
    },
    {
        id: "intuition-enhancement-elixir",
        name: "Intuition Enhancement Elixir",
        category: "elixirs",
        price: 35.00,
        description: "Mugwort and violet leaf blend to enhance psychic abilities and inner knowing.",
        image: "images/intuition-elixir.jpg",
        weight: "120",
        dimensions: "5x5x10"
    },
    {
        id: "digestive-harmony-tea",
        name: "Digestive Harmony Tea",
        category: "teas",
        price: 16.00,
        description: "Gentle blend of peppermint, fennel, and ginger for digestive wellness.",
        image: "images/digestive-tea.jpg",
        weight: "85",
        dimensions: "8x8x6"
    },
    {
        id: "immune-shield-remedy",
        name: "Immune Shield Remedy",
        category: "remedies",
        price: 29.00,
        description: "Elderberry, echinacea, and astragalus blend for immune system support.",
        image: "images/immune-remedy.jpg",
        weight: "150",
        dimensions: "4x4x12"
    },
    {
        id: "healing-skin-salve",
        name: "Healing Skin Salve",
        category: "salves",
        price: 24.00,
        description: "Calendula and plantain salve for cuts, scrapes, and skin irritations.",
        image: "images/healing-salve.jpg",
        weight: "100",
        dimensions: "6x6x3"
    }
];

const sacredCreations = [
    {
        id: 1,
        name: "Flower of Life Coaster Set",
        price: "$45.00",
        description: "Sacred geometry coaster set laser-engraved on sustainable bamboo.",
        image: "images/flower-coasters.jpg"
    },
    {
        id: 2,
        name: "Metatron's Cube Wall Art",
        price: "$78.00",
        description: "Intricate sacred geometry wall piece crafted from reclaimed wood.",
        image: "images/metatron-art.jpg"
    },
    {
        id: 3,
        name: "Crystal Grid Template",
        price: "$32.00",
        description: "Precision-cut crystal grid template for meditation and energy work.",
        image: "images/crystal-grid.jpg"
    },
    {
        id: 4,
        name: "Sacred Geometry Keychains",
        price: "$15.00",
        description: "Portable sacred symbols for daily protection and mindfulness.",
        image: "images/geometry-keychains.jpg"
    },
    {
        id: 5,
        name: "Altar Pentacle Plate",
        price: "$55.00",
        description: "Hand-carved wooden pentacle for ritual and ceremonial use.",
        image: "images/pentacle-plate.jpg"
    },
    {
        id: 6,
        name: "Mandala Meditation Board",
        price: "$65.00",
        description: "Intricate mandala design for focused meditation and contemplation.",
        image: "images/mandala-board.jpg"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website Functions
function initializeWebsite() {
    setupMobileMenu();
    setupSmoothScrolling();
    setupProductFiltering();
    setupContactForm();
    setupScrollAnimations();
    renderApothecaryProducts();
    renderSacredCreations();
    setupIntersectionObserver();
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Product Filtering System
function setupProductFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter products
            filterProducts(filter);
        });
    });
}

// Filter Products Function
function filterProducts(category) {
    const productGrid = document.getElementById('product-grid');
    const products = productGrid.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            setTimeout(() => {
                product.classList.add('fade-in-up');
            }, 100);
        } else {
            product.style.display = 'none';
            product.classList.remove('fade-in-up');
        }
    });
}

// Render Apothecary Products
function renderApothecaryProducts() {
    const productGrid = document.getElementById('product-grid');
    
    if (productGrid) {
        productGrid.innerHTML = apothecaryProducts.map(product => `
            <div class="product-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" data-category="${product.category}">
                <div class="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOUNBRjg4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0Y1RjVEQyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7product.name}</dGV4dD48L3N2Zz4='">
                </div>
                <h3 class="font-playfair text-xl font-semibold text-charcoal mb-2">${product.name}</h3>
                <p class="text-muted text-sm mb-3 leading-relaxed">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="font-semibold text-lg text-gold">${product.price}</span>
                    <button class="px-4 py-2 bg-sage text-cream rounded-full hover:bg-gold transition-colors duration-300 text-sm font-medium">
                        View Details
                    </button>
                </div>
            </div>
        `).join('');
        
        // Add click event to view details buttons
        const detailButtons = productGrid.querySelectorAll('button');
        detailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                showProductModal(button);
            });
        });
    }
}

// Render Sacred Creations
function renderSacredCreations() {
    const sacredGrid = document.getElementById('sacred-grid');
    
    if (sacredGrid) {
        sacredGrid.innerHTML = sacredCreations.map(item => `
            <div class="product-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div class="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img src="${item.image}" 
                         alt="${item.name}" 
                         class="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRDRBRjM3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzM2NDU0RiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7item.name}</dGV4dD48L3N2Zz4='">
                </div>
                <h3 class="font-playfair text-xl font-semibold text-charcoal mb-2">${item.name}</h3>
                <p class="text-muted text-sm mb-3 leading-relaxed">${item.description}</p>
                <div class="flex justify-between items-center">
                    <span class="font-semibold text-lg text-gold">${item.price}</span>
                    <button class="px-4 py-2 bg-sage text-cream rounded-full hover:bg-gold transition-colors duration-300 text-sm font-medium">
                        View Details
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Stripe Configuration
// Replace this with your actual Stripe publishable key from your dashboard
const STRIPE_PUBLIC_KEY = 'pk_test_51...'; // Get this from Stripe Dashboard > Developers > API keys
let stripe = null;

// Initialize Stripe when the key is available
function initializeStripe() {
    if (STRIPE_PUBLIC_KEY && STRIPE_PUBLIC_KEY !== 'pk_test_51...') {
        stripe = Stripe(STRIPE_PUBLIC_KEY);
        console.log('Stripe initialized successfully');
    } else {
        console.log('Stripe key not configured yet');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeStripe();
    // ...existing initialization code...
});

// Show Product Modal with Snipcart Integration
function showProductModal(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productDescription = productCard.querySelector('.text-muted').textContent;
    
    // Find full product data
    const product = apothecaryProducts.find(p => p.name === productName);
    if (!product) return;
    
    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-cream rounded-xl p-8 max-w-lg w-full mx-4 relative max-h-screen overflow-y-auto">
            <button class="absolute top-4 right-4 text-charcoal hover:text-gold z-10" onclick="this.closest('.fixed').remove()">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            
            <!-- Product Image -->
            <div class="aspect-square w-full mb-6 rounded-lg overflow-hidden">
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="w-full h-full object-cover"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOUNBRjg4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI0Y1RjVEQyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7product.name}</dGV4dD48L3N2Zz4='">
            </div>
            
            <h3 class="font-playfair text-2xl font-bold text-charcoal mb-4">${product.name}</h3>
            <p class="text-muted mb-4 leading-relaxed">${product.description}</p>
            
            <!-- Price and Quantity -->
            <div class="flex items-center justify-between mb-6">
                <span class="text-3xl font-bold text-gold">$${product.price.toFixed(2)}</span>
                <div class="flex items-center space-x-3">
                    <label class="text-sm font-medium text-charcoal">Qty:</label>
                    <select class="border border-sage/30 rounded px-3 py-1 text-charcoal" id="quantity-select-${product.id}">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            </div>
            
            <!-- Snipcart Add to Cart Button -->
            <div class="space-y-3">
                <button class="snipcart-add-item w-full bg-sage text-cream hover:bg-gold transition-all duration-300 py-4 rounded-lg font-medium text-lg flex items-center justify-center"
                        data-item-id="${product.id}"
                        data-item-price="${product.price}"
                        data-item-description="${product.description}"
                        data-item-image="${product.image}"
                        data-item-name="${product.name}"
                        data-item-weight="${product.weight}"
                        data-item-dimensions="${product.dimensions}"
                        data-item-categories="${product.category}">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                    Add to Cart
                </button>
                
                <button onclick="contactForCustomOrder('${product.name}')" 
                        class="w-full border-2 border-sage text-sage hover:bg-sage hover:text-cream transition-all duration-300 py-3 rounded-lg font-medium">
                    Ask About Custom Blends
                </button>
            </div>
            
            <!-- Security Badge -->
            <div class="mt-6 text-center">
                <div class="flex items-center justify-center text-xs text-muted">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    Secure checkout powered by Snipcart • SSL Encrypted
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Enhanced Product Selection System
let selectedProducts = [];

// Add to wishlist/inquiry function
function addToInquiry(productName, price) {
    const existingProduct = selectedProducts.find(p => p.name === productName);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        selectedProducts.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    updateInquiryBadge();
    showNotification(`${productName} added to your inquiry list!`, 'success');
}

// Remove from inquiry
function removeFromInquiry(productName) {
    selectedProducts = selectedProducts.filter(p => p.name !== productName);
    updateInquiryBadge();
    updateInquiryModal();
}

// Update inquiry badge
function updateInquiryBadge() {
    let badge = document.getElementById('inquiry-badge');
    if (!badge) {
        // Create badge if it doesn't exist
        badge = document.createElement('div');
        badge.id = 'inquiry-badge';
        badge.className = 'fixed bottom-6 right-6 bg-gold text-charcoal rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg shadow-lg cursor-pointer hover:bg-sage hover:text-cream transition-all duration-300 z-50';
        badge.onclick = showInquiryModal;
        document.body.appendChild(badge);
    }
    
    const totalItems = selectedProducts.reduce((sum, p) => sum + p.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Show inquiry modal
function showInquiryModal() {
    if (selectedProducts.length === 0) {
        showNotification('Your inquiry list is empty. Add some products first!', 'info');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-cream rounded-xl p-8 max-w-lg w-full mx-4 relative max-h-screen overflow-y-auto">
            <button class="absolute top-4 right-4 text-charcoal hover:text-gold z-10" onclick="this.closest('.fixed').remove()">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            
            <h3 class="font-playfair text-2xl font-bold text-charcoal mb-6">Your Product Inquiry</h3>
            
            <div class="space-y-4 mb-6">
                ${selectedProducts.map(product => `
                    <div class="flex items-center justify-between bg-white/50 p-4 rounded-lg">
                        <div class="flex-1">
                            <h4 class="font-medium text-charcoal">${product.name}</h4>
                            <p class="text-sm text-muted">${product.price} each</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-sm font-medium">Qty: ${product.quantity}</span>
                            <button onclick="removeFromInquiry('${product.name}')" class="text-red-500 hover:text-red-700">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="space-y-3">
                <button onclick="sendInquiry()" class="w-full bg-sage text-cream hover:bg-gold transition-all duration-300 py-3 rounded-lg font-medium">
                    Send Product Inquiry
                </button>
                <button onclick="this.closest('.fixed').remove()" class="w-full border-2 border-sage text-sage hover:bg-sage hover:text-cream transition-all duration-300 py-2 rounded-lg font-medium">
                    Continue Shopping
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Send inquiry to contact form
function sendInquiry() {
    const inquiryList = selectedProducts.map(p => 
        `${p.name} (${p.price}) - Quantity: ${p.quantity}`
    ).join('\n');
    
    const totalItems = selectedProducts.reduce((sum, p) => sum + p.quantity, 0);
    
    const messageField = document.getElementById('message');
    if (messageField) {
        messageField.value = `I'm interested in ordering multiple products from The Root & Resonance:

${inquiryList}

Total items: ${totalItems}

Please provide information about:
- Availability and lead time
- Bulk pricing (if applicable)
- Shipping costs and options
- Payment methods accepted
- Any custom blend options

Thank you!`;
    }
    
    // Close modal and scroll to contact
    document.querySelector('.fixed').remove();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    showNotification('Contact form pre-filled with your product inquiry!', 'success');
}

// Update inquiry modal content
function updateInquiryModal() {
    const modal = document.querySelector('.fixed');
    if (modal) {
        modal.remove();
        showInquiryModal();
    }
}

// Contact for Custom Order
function contactForCustomOrder(productName) {
    // Pre-fill contact form
    const messageField = document.getElementById('message');
    
    if (messageField) {
        messageField.value = `I'm interested in ${productName}. Please provide more details about custom orders, ingredients, and availability.`;
    }
    
    // Close any open modal
    const modal = document.querySelector('.fixed');
    if (modal) modal.remove();
    
    // Scroll to contact form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    showNotification('Contact form pre-filled with your product inquiry!', 'success');
}

// Contact Form Handler
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.scroll-reveal');
    animatedElements.forEach(el => observer.observe(el));
}

// Intersection Observer for Section Visibility
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3
    });
    
    sections.forEach(section => observer.observe(section));
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Search Functionality (for future enhancement)
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        const debouncedSearch = debounce((query) => {
            searchProducts(query);
        }, 300);
        
        searchInput.addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });
    }
}

function searchProducts(query) {
    if (!query) {
        renderApothecaryProducts();
        return;
    }
    
    const filteredProducts = apothecaryProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(products) {
    const productGrid = document.getElementById('product-grid');
    
    if (products.length === 0) {
        productGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-muted text-lg">No products found matching your search.</p>
            </div>
        `;
        return;
    }
    
    // Re-render with filtered products
    // Implementation would be similar to renderApothecaryProducts but with filtered array
}

// Performance Optimization: Lazy Loading Images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Snipcart Integration and Utilities
function initializeSnipcart() {
    // Wait for Snipcart to be ready
    document.addEventListener('snipcart.ready', function() {
        console.log('Snipcart is ready!');
        
        // Update cart display when items are added/removed
        Snipcart.subscribe('item.added', updateCartDisplay);
        Snipcart.subscribe('item.removed', updateCartDisplay);
        Snipcart.subscribe('item.quantity.changed', updateCartDisplay);
        
        updateCartDisplay(); // Initial update
    });
}

// Update cart count display
function updateCartDisplay() {
    if (window.Snipcart) {
        try {
            const cartCount = Snipcart.api.items.count();
            const cartBadge = document.querySelector('.cart-count');
            if (cartBadge) {
                cartBadge.textContent = cartCount;
                cartBadge.style.display = cartCount > 0 ? 'inline-block' : 'none';
            }
        } catch (error) {
            console.log('Snipcart not fully loaded yet');
        }
    }
}

// Add quantity to Snipcart button dynamically
function addQuantityToSnipcartButton(button, quantitySelector) {
    const quantity = document.querySelector(quantitySelector)?.value || 1;
    button.setAttribute('data-item-quantity', quantity);
    
    // Trigger the add to cart
    button.click();
}

// Export functions for testing or external use
window.RootResonance = {
    filterProducts,
    showNotification,
    searchProducts,
    updateCartDisplay,
    initializeSnipcart
};

// Initialize Snipcart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSnipcart();
});
