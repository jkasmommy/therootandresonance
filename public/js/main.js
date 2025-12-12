// Main JavaScript for The Root & Resonance Website

// Product Data for Snipcart
const apothecaryProducts = [
    {
        id: "quiet-thorn",
        name: "Quiet Thorn - Headache & Tension Relief Elixir",
        category: "elixirs",
        price: 18.00,
        description: "A handcrafted herbal comfort elixir created in honor of Gaia's wisdom and the ancestors who carried plant knowledge before us. Designed to bring soothing relief when headaches, tension, or sinus pressure try to steal your clarity. This gentle formula contains willow bark (nature's original aspirin), peppermint to release tightness, lemon balm to calm overstimulated nerves, lavender for relaxation, rosemary to boost circulation, ginger to reduce inflammation, and clove as a natural analgesic. A grounding ally for sensitive systems and those seeking clear-headed peace.",
        image: "images/Quiet_Thorn.png",
        weight: "120",
        dimensions: "5x5x10"
    },
    {
        id: "quiet-ember",
        name: "Quiet Ember - Sleep & Relaxation Elixir",
        category: "elixirs",
        price: 22.00,
        description: "A gentle evening elixir crafted in deep reverence to Gaia's nighttime medicines and the ancestors who understood the sacred art of rest. Designed to guide you into peaceful slumber when the mind won't quiet and the body holds the day's tension. This soothing blend contains passionflower to calm racing thoughts, chamomile for gentle sedation, lemon balm to ease nervous energy, valerian root for deep relaxation, lavender to release stress, and a touch of honey for sweetness and grounding. A tender companion for those who seek the healing power of restorative sleep.",
        image: "images/quiet-ember.jpg",
        weight: "120",
        dimensions: "5x5x10"
    },
    {
        id: "womack-snake-root",
        name: "Womack Snake Root Elixir - Ancestral Lineage Tonic",
        category: "elixirs",
        price: 24.00,
        description: "A bold, lineage-rooted elixir crafted to honor Gaia's medicine and the Womack ancestors who prepared this tonic before us. Made with Fireball whiskey to echo the original family recipe, this warming blend brings strength, vitality, and resilience back into the bloodstream. Contains licorice root for lung and adrenal support, ginger for warming fire, cinnamon for circulation, and clove for antimicrobial and pain-relieving power. A medicine of remembrance, carrying the courage of the women who came before you.",
        image: "images/Womack_SnakeRoot.png",
        weight: "120",
        dimensions: "5x5x10"
    },
    {
        id: "body-alchemist",
        name: "Body Alchemist Elixir - Metabolic & Inflammation Support",
        category: "elixirs",
        price: 20.00,
        description: "A handcrafted elixir created with gratitude to Gaia and the ancestral healers who taught us how to transform the body from within. Designed to support digestion, reduce inflammation, ease bloating, and encourage gentle metabolic activation. Contains ginger to spark digestive fire, turmeric for systemic balance, lemon balm to soothe the nervous system, peppermint for bloating relief, cinnamon for metabolic harmony, and clove as a digestive and microbial ally. A daily companion for those stepping into transformation.",
        image: "images/Body_Alchemist.png",
        weight: "120",
        dimensions: "5x5x10"
    },
    {
        id: "internal-renewal",
        name: "Internal Renewal Elixir - Detox & Lymphatic Flow Support",
        category: "elixirs",
        price: 20.00,
        description: "A gentle renewal tonic crafted in reverence to Gaia's cleansing plants and the ancestral stewards who understood the rhythms of the body. Designed to support liver health, lymphatic flow, and natural detox pathways. Helps reduce stagnation, release heaviness, and refresh the body from within. Contains lemon balm for calming, ginger for warmth, dandelion for liver support, and calendula for lymphatic movement. Ideal for seasonal reset, energetic recalibration, or times of heaviness.",
        image: "images/Internal_Renewal.png",
        weight: "120",
        dimensions: "5x5x10"
    },
    {
        id: "desert-pain-salve",
        name: "Desert Pain Salve - Rabbitbrush Relief Cream",
        category: "salves",
        price: 14.00,
        description: "A deeply soothing salve handcrafted in honor of Gaia's desert medicines and the ancestors who understood the healing power of wild plants. This formula begins with a slow, sun-infused rabbitbrush olive oil — traditionally used for inflammation, muscle soreness, and joint discomfort. The warm infusion is blended with beeswax and enhanced with lavender, rosemary, and peppermint to create a rich, penetrating balm that brings comfort exactly where the body holds tension. Carries the grounded strength of the desert — warm, resilient, rooted medicine.",
        image: "images/Desert_Balm.png",
        weight: "100",
        dimensions: "6x6x4"
    },
    {
        id: "moonroot-harmony",
        name: "MoonRoot Harmony Cream",
        category: "salves",
        price: 15.00,
        description: "A gently nourishing botanical cream handcrafted to support hormonal balance, emotional regulation, and the natural rhythms of the female body through all seasons of life. MoonRoot Harmony Cream is rooted in traditional herbal wisdom and crafted with intention to support PMS, perimenopause, menopause, and moments of internal imbalance.",
        longDescription: "This formula blends coconut oil and beeswax with aloe vera gel and rose–chamomile floral water to create a soft, soothing cream that absorbs easily into the skin. Wild yam root glycerite — long respected for its role in women's herbal traditions — is infused to support harmony and ease, while lavender essential oil offers gentle calming and nervous system support. The result is a balanced, comforting cream designed to nourish both body and spirit.",
        usage: "Apply a pea-sized amount to the lower abdomen, inner forearms, wrists, inner thighs, or back of the neck • Use 1–2 times daily or as needed • May be refrigerated for a cooling effect during hot flashes • If still cycling, often used 3 weeks on / 1 week off",
        image: "images/MoonRoot_Harmony_Cream.png",
        weight: "100",
        dimensions: "6x6x4"
    }
];

const sacredCreations = [
    {
        id: 1,
        name: "Flower of Life Coaster Set",
        price: "$25.00",
        description: "A laser-engraved wooden coaster set inspired by the sacred geometry of the Flower of Life. This meaningful set includes four coasters, each featuring clean, dark engraving that honors the infinite interconnectedness of all creation. Perfect for bringing intentional beauty to your daily rituals of nourishment and pause. Due to the natural beauty of wood and the handmade engraving process, each piece may display slight variations in grain pattern and tone, making every set truly one of a kind.",
        image: "images/Flower_Of_Life_Coasters.png"
    },
    {
        id: 2,
        name: "Tree of Life Meditation Board",
        price: "$38.00",
        description: "A laser-cut wooden meditation board inspired by the timeless symbolism of the Tree of Life — a sacred emblem of grounding, growth, and the interconnected nature of all beings. Carefully crafted from natural wood, this circular board features an intricate Tree of Life design, making it a powerful focal piece for meditation, breathwork, altar spaces, or moments of quiet contemplation. Designed to support intentional pauses and mindful presence, this meditation board invites you to center your awareness, connect with the earth, and return to balance. Each piece is thoughtfully made using a laser-cut process that highlights the organic beauty of the wood while maintaining clean, precise lines. Due to the natural characteristics of wood and the handmade nature of the cutting and finishing process, each meditation board will display subtle variations in grain, tone, and texture — ensuring that every piece is truly one of a kind.",
        image: "images/Tree_of_Life_jpg.png"
    },
    {
        id: 3,
        name: "Sacred Geometry Keychain",
        price: "$15.00",
        description: "Carry a symbol of ancient protection and clarity wherever you go. This handcrafted wooden keychain features a precise laser-engraved Flower of Life (or Metatron's Cube, if you upload both versions), offering a small yet powerful reminder of harmony, balance, and mindful intention throughout your day. Lightweight, durable, and beautifully engraved, it's perfect for keys, bags, backpacks, or as a daily grounding talisman you keep close. Features laser-engraved sacred geometry symbol, smooth natural wood surface, high-quality metal key ring, lightweight and travel-friendly design, perfect for grounding and everyday mindfulness. Each keychain is individually crafted from natural wood, so grain patterns, shading, and engraving depth may vary slightly, making every piece truly one-of-a-kind.",
        image: "images/Key_Chain.png"
    },
    {
        id: 4,
        name: "Herb Stripper",
        price: "$20.00",
        description: "A handcrafted wooden herb stripper designed to make the process of harvesting and preparing herbs simple, efficient, and intentional. This crescent-shaped tool features multiple hole sizes for stripping leaves from a variety of herb stems, along with a comb-style edge for gently gathering and cleaning herbs with ease. Thoughtfully designed for herbalists, gardeners, and home apothecaries, this herb stripper supports mindful preparation and connection to plant medicine. Each piece is laser-cut from natural wood and finished by hand, creating a functional tool that is both practical and beautiful. Due to the natural characteristics of wood and the handmade cutting and finishing process, each herb stripper may display slight variations in grain, tone, and engraving, making every piece truly one of a kind.",
        image: "images/Herb_Stripper.png"
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
        
        // Add click event to view details buttons
        const detailButtons = sacredGrid.querySelectorAll('button');
        detailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                showSacredCreationModal(button);
            });
        });
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
            <div class="text-muted mb-4 leading-relaxed text-sm">
                ${product.description.length > 200 ? 
                    `<div class="space-y-3">
                        <p>${product.description.substring(0, 200)}...</p>
                        <button onclick="this.style.display='none'; this.nextElementSibling.style.display='block';" class="text-sage hover:text-gold text-xs font-medium">Read More</button>
                        <div style="display:none;">
                            <p>${product.description}</p>
                        </div>
                    </div>` : 
                    `<p>${product.description}</p>`
                }
                
                ${(product.id === 'quiet-thorn') ? `
                    <div class="mt-4 p-3 bg-sage/10 rounded-lg">
                        <h4 class="font-semibold text-charcoal mb-2">How to Use:</h4>
                        <ul class="text-xs space-y-1">
                            <li>• Shake gently before use</li>
                            <li>• Take 1–2 dropperfuls under tongue or in water</li>
                            <li>• Repeat every 4 hours as needed</li>
                        </ul>
                    </div>
                ` : product.id === 'womack-snake-root' ? `
                    <div class="mt-4 p-3 bg-sage/10 rounded-lg">
                        <h4 class="font-semibold text-charcoal mb-2">How to Use:</h4>
                        <ul class="text-xs space-y-1">
                            <li>• Shake before use</li>
                            <li>• Take 1 dropperful directly or in a small amount of water</li>
                            <li>• Use during immune stress, fatigue, or cold exposure</li>
                        </ul>
                    </div>
                ` : product.id === 'body-alchemist' ? `
                    <div class="mt-4 p-3 bg-sage/10 rounded-lg">
                        <h4 class="font-semibold text-charcoal mb-2">How to Use:</h4>
                        <ul class="text-xs space-y-1">
                            <li>• Shake gently</li>
                            <li>• Take 1 dropperful before meals or as needed</li>
                            <li>• Use consistently for best results</li>
                        </ul>
                    </div>
                ` : product.id === 'internal-renewal' ? `
                    <div class="mt-4 p-3 bg-sage/10 rounded-lg">
                        <h4 class="font-semibold text-charcoal mb-2">How to Use:</h4>
                        <ul class="text-xs space-y-1">
                            <li>• Shake gently</li>
                            <li>• Take 1 dropperful daily or as needed</li>
                            <li>• Best used during intentional cleansing periods</li>
                        </ul>
                    </div>
                ` : product.id === 'desert-pain-salve' ? `
                    <div class="mt-4 p-3 bg-sage/10 rounded-lg">
                        <h4 class="font-semibold text-charcoal mb-2">How to Use:</h4>
                        <ul class="text-xs space-y-1">
                            <li>• Massage a small amount into areas of pain or tension</li>
                            <li>• Reapply as needed</li>
                            <li>• Use after warm showers, stretching, or activity</li>
                        </ul>
                    </div>
                ` : product.id === 'moonroot-harmony' ? `
                    <div class="mt-4 p-3 bg-sage/10 rounded-lg">
                        <h4 class="font-semibold text-charcoal mb-2">How to Use:</h4>
                        <ul class="text-xs space-y-1">
                            <li>• Apply a pea-sized amount to the lower abdomen, inner forearms, wrists, inner thighs, or back of the neck</li>
                            <li>• Use 1–2 times daily or as needed</li>
                            <li>• May be refrigerated for a cooling effect during hot flashes</li>
                            <li>• If still cycling, often used 3 weeks on / 1 week off</li>
                        </ul>
                    </div>
                ` : ''}
            </div>
            
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
                        data-item-price="${product.price.toFixed(2)}"
                        data-item-url="/"
                        data-item-description="${product.description}"
                        data-item-image="${product.image}"
                        data-item-name="${product.name}"
                        data-item-weight="${product.weight}"
                        data-item-dimensions="${product.dimensions}"
                        data-item-categories="${product.category}"
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

// Show Sacred Creation Modal with Snipcart Integration
function showSacredCreationModal(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productDescription = productCard.querySelector('.text-muted').textContent;
    
    // Find full product data
    const product = sacredCreations.find(p => p.name === productName);
    if (!product) return;
    
    // Convert price from "$XX.XX" format to number
    const priceValue = parseFloat(product.price.replace('$', ''));
    
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
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRDRBRjM3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzM2NDU0RiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPiR7product.name}</dGV4dD48L3N2Zz4='">
            </div>
            
            <h3 class="font-playfair text-2xl font-bold text-charcoal mb-4">${product.name}</h3>
            <div class="text-muted mb-4 leading-relaxed text-sm">
                ${product.description.length > 200 ? 
                    `<div class="space-y-3">
                        <p>${product.description.substring(0, 200)}...</p>
                        <button onclick="this.style.display='none'; this.nextElementSibling.style.display='block';" class="text-sage hover:text-gold text-xs font-medium">Read More</button>
                        <div style="display:none;">
                            <p>${product.description}</p>
                        </div>
                    </div>` : 
                    `<p>${product.description}</p>`
                }
            </div>
            
            <!-- Price and Quantity -->
            <div class="flex items-center justify-between mb-6">
                <span class="text-3xl font-bold text-gold">$${priceValue.toFixed(2)}</span>
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
                        data-item-id="sacred-creation-${product.id}"
                        data-item-price="${parseFloat(priceValue).toFixed(2)}"
                        data-item-url="/"
                        data-item-description="${product.description}"
                        data-item-image="${product.image}"
                        data-item-name="${product.name}"
                        data-item-categories="sacred-creations">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"></path>
                    </svg>
                    Add to Cart
                </button>
                
                <button onclick="contactForCustomOrder('${product.name}')" 
                        class="w-full border-2 border-sage text-sage hover:bg-sage hover:text-cream transition-all duration-300 py-3 rounded-lg font-medium">
                    Ask About Custom Orders
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

// Modal Helper Functions
function toggleDescription(button) {
    const longDesc = button.parentElement.querySelector('.long-desc');
    if (longDesc.style.display === 'none' || longDesc.style.display === '') {
        longDesc.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        longDesc.style.display = 'none';
        button.textContent = 'Read More';
    }
}

function changeQuantity(change) {
    const qtyInput = document.querySelector('.modal-overlay .qty-input');
    if (qtyInput) {
        const currentValue = parseInt(qtyInput.value) || 1;
        const newValue = Math.max(1, currentValue + change);
        qtyInput.value = newValue;
        
        // Update the Snipcart data attribute
        const addToCartBtn = document.querySelector('.modal-overlay .snipcart-add-item');
        if (addToCartBtn) {
            addToCartBtn.setAttribute('data-item-quantity', newValue);
        }
    }
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
