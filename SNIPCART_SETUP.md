# Snipcart Setup Instructions

## What is Snipcart?
Snipcart is a shopping cart platform that integrates seamlessly with your static website. It handles all the complex e-commerce functionality while keeping your beautiful design intact.

## Setup Steps

### 1. Create a Snipcart Account
1. Go to [snipcart.com](https://snipcart.com)
2. Sign up for a free account
3. You get 10 test orders free, then it's 2% per transaction

### 2. Get Your API Keys
1. In your Snipcart dashboard, go to Account → API Keys
2. Copy your **Public Test Key** (starts with the website domain)
3. Later, you'll also need your **Public Live Key** for production

### 3. Add Your API Key to the Website
1. Open `index.html`
2. Find this line in the `<head>` section:
   ```html
   <div id="snipcart" data-api-key="YOUR_SNIPCART_PUBLIC_API_KEY_HERE" hidden></div>
   ```
3. Replace `YOUR_SNIPCART_PUBLIC_API_KEY_HERE` with your actual public API key

### 4. Test the Shopping Cart
1. Deploy your website (it's already set up for Vercel)
2. Try adding products to cart
3. Go through the checkout process (use test mode first)

### 5. Configure Domain and Webhooks (Optional)
1. In Snipcart dashboard, add your website domain
2. Set up webhooks if you want order notifications
3. Configure shipping zones and tax rates

## Test Credit Cards
For testing, use these card numbers:
- **Visa**: 4242 4242 4242 4242
- **Mastercard**: 5555 5555 5555 4444
- Use any future expiry date and any 3-digit CVC

## Features Already Implemented
✅ Shopping cart icon in navigation
✅ Product data with prices, descriptions, and images
✅ Add to cart buttons on all products
✅ Responsive product modals
✅ Quantity selection
✅ Custom order contact forms
✅ Secure checkout integration

## Going Live
1. When ready for real orders, switch to your **Live API Key**
2. Set up your payment processor (Stripe, PayPal, etc.) in Snipcart dashboard
3. Configure real shipping rates and tax settings
4. Remove test mode restrictions

## Support
- Snipcart has excellent documentation: [docs.snipcart.com](https://docs.snipcart.com)
- Their support team is very responsive
- The community forum is active and helpful

## Benefits of This Setup
- ✅ Keep your beautiful static website design
- ✅ No server or database management needed
- ✅ Secure, PCI-compliant checkout
- ✅ Automatic inventory management
- ✅ Customer accounts and order history
- ✅ Email notifications for orders
- ✅ Easy to scale and maintain
